const Razorpay = require("razorpay");
const crypto = require('crypto');
const Product = require('./../models/productSchema');
const User = require('./../models/userSchema');
const Transaction = require('./../models/transactionSchema');
const catchAsync = require('./../utils/catchAsyncError');
const AppError = require("../utils/appError");
const dotenv = require('dotenv').config();

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_APT_SECRET,
});

exports.getAPIkey = (req,res)=>{
    res.status(200).json({ 
        key: process.env.RAZORPAY_API_KEY 
    })
}

exports.checkout = catchAsync(async (req, res,next) => {
    const product = await Product.findById(req.params.productId);
    console.log(product);
    if(!product){
        return next(new AppError('No such product found',400));
    }
    if(!product.available)  return next(new AppError('Product is currently unavailable',400));
    if(product.seller.toString() == req.user.id){
        return next(new AppError('Seller cannot be the buyer of its own product',400));
    }

    const options = {
      amount: Number(product.price * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    
    req.purchasedProduct = product;
    res.status(200).json({
      success: true,
      order,
    });
});
  
exports.paymentVerification = catchAsync(async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =req.body;
  
    const body = razorpay_order_id + "|" + razorpay_payment_id;
  
    const expectedSignature = crypto
                                .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
                                .update(body.toString())
                                .digest("hex");
  
    const isAuthentic = expectedSignature === razorpay_signature;
  
    if (isAuthentic) {
        await Transaction.create({
            product:req.purchasedProduct,
            seller:req.purchasedProduct.seller.toString(),
            buyer:req.user.id,
            price:req.purchasedProduct.price,
            paid:true,
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        });

        const usr = await User.findById(req.user.id);
        console.log(req.purchasedProduct.id);
        await User.findByIdAndUpdate(req.user.id,{
            productsBought:[...usr.productsBought,req.purchasedProduct.id]
        },{
            runValidators:false,
            new:true
        })

        await Product.findByIdAndUpdate(req.purchasedProduct.id,{
            available:false
        },{
            runValidators:false,
            new:true
        });
  
      res.redirect(
        `${req.protocol}://${req.host}/paymentsuccess?reference=${razorpay_payment_id}`
      );
    }
    else {
      res.status(400).json({
        status:'fail',
        message:'The transaction was failed'
      });
    }
});

exports.getMyTransactions = catchAsync(async(req,res,next)=>{
    const mySellings = await Transaction.find({seller:req.user.id}).populate('product','name description images price').populate('seller','name address phoneNumber email').populate('buyer','name address phoneNumber email');
    const myPurchases = await Transaction.find({buyer:req.user.id}).populate('product','name description images price').populate('seller','name address phoneNumber email').populate('buyer','name address phoneNumber email');
    res.status(200).json({
        status:'success',
        productsSold:mySellings,
        productsBought:myPurchases
    });
})
