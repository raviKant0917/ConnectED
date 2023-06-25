const Product = require('./../models/productSchema');
const User = require('./../models/userSchema');
const AppError = require('./../utils/appError');
const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');
const catchAsync = require('./../utils/catchAsyncError');
const APIFeatures = require('./../utils/apiFeatures');

const multerStorage = multer.memoryStorage();

const multerFilter = (req,file,cb)=>{
    if(file.mimetype.startsWith('image')){
        cb(null,true);
    }
    else{
        cb(new AppError('Please upload only image files',400),false);
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});

const filterObj = (ogObj,...filters)=>{
    const newobj = {};
    Object.keys(ogObj).forEach(el =>{
        if(filters.includes(el))    newobj[el]=ogObj[el];
    });
    return newobj;
}

exports.uploadProductImages = upload.fields([
    {name:'images',maxCount:5}
]);

exports.resizeImages = catchAsync(async(req,res,next)=>{
    if(!req.files){  
        await Product.findByIdAndDelete(req.body.currProduct.id);
        return next(new AppError('Upload minimum one image for the product',400));
    }
    
    req.body.images=[];
    await Promise.all(
        req.files.images.map(async(file,i)=>{
            const filename = `product-${req.body.currProduct.id}-${i+1}.jpeg`;

            await sharp(file.buffer)
                        .resize(2000,1333)
                        .toFormat('jpeg')
                        .jpeg({quality:90})
                        .toFile(`public/products/${filename}`);

            req.body.images.push(filename);
        })
    )

    const product = await Product.findById(req.body.currProduct.id);
    product.images = req.body.images;
    await product.save();
    
    const usr = await User.findById(req.user.id);
    const updtusr = await User.findByIdAndUpdate(req.user.id,{
        productsSold:[...usr.productsSold,req.body.currProduct.id]
    },{
        runValidators:false,
        new:true
    })

    const allusrs = await User.find();
    allusrs.forEach(async currusr=>{
        if(currusr.productsRequested.find(req.body.currProduct.name)){
            const message = `Hoorayyy!!! The product that you requested is now available on ConnectED`;
            try{
                await sendEmail({
                    email:currusr.email,
                    subject:'Product Listed on ConnectED',
                    message
                });
            }
            catch(err){
                console.log(err);
            }
        }
    })
    
    res.status(200).json({
        status:'Success',
        product
    });
})

exports.updateResizeImages = catchAsync(async(req,res,next)=>{
    if(!req.files)  return next();

    req.body.images=[];
    await Promise.all(
        req.files.images.map(async(file,i)=>{
            const filename = `product-${req.params.id}-${i+1}.jpeg`;

            await sharp(file.buffer)
                        .resize(2000,1333)
                        .toFormat('jpeg')
                        .jpeg({quality:90})
                        .toFile(`public/products/${filename}`);

            req.body.images.push(filename);
        })
    )
    next();
})

exports.createProduct = catchAsync(async(req,res,next)=>{
    if(!req.body.user)  req.body.user = req.user;checkEmailExists

    if(req.body.rent == 'true'){
        const newProduct = await Product.create({
            name:req.body.name,
            description:req.body.description,
            seller:req.user.id,
            rent:true,
            available:true,
            images:[`${Date.now()}`],
            duration:req.body.duration,
            price:req.body.price
        });
        
        req.body.currProduct = newProduct;
    }
    else{
        const newProduct = await Product.create({
            name:req.body.name,
            description:req.body.description,
            seller:req.user.id,
            rent:false,
            available:true,
            images:[`${Date.now()}`],
            price:req.body.price
        });
        req.body.currProduct = newProduct;
    }
    next();
})

exports.updateProduct = catchAsync(async(req,res,next)=>{
    const filteredBody = filterObj(req.body,'name','description','rent','price','available');

    const findproduct = await Product.findById(req.params.productID);
    if(filteredBody.name){
        const allusrs = await User.find();
        allusrs.forEach(async currusr=>{
            if(currusr.productsRequested.find(req.body.currProduct.name)){
                const message = `Hoorayyy!!! The product that you requested is now available on ConnectED`;
                try{
                    await sendEmail({
                        email:currusr.email,
                        subject:'Product Listed on ConnectED',
                        message
                    });
                }
                catch(err){
                    console.log(err);
                }
            }
        })
    }
    if(!findproduct)    return next(new AppError('No such product exists',404));
   
    if(findproduct.seller.toString() !== req.user.id)  return next(new AppError('You do not have permission to edit this product',400));

    const updatedProduct = await Product.findByIdAndUpdate(req.params.productID,filteredBody,{
        new:true,
        runValidators:true
    });
    if(!updatedProduct){
        return next(new AppError('No product found with this id',404));
    }
    res.status(200).json({
        status:'success',
        updatedProduct
    });
});

exports.createRequest = catchAsync(async(req,res,next)=>{
    const usr = await User.findById(req.user.id);
    if(usr.productsRequested.find(req.body.name)){
        return res.status(200).json({
            status:'fail',
            message:'A similar request has already been recorded from your account'
        });
    }
    await User.findByIdAndUpdate(req.user.id,{
        productsRequested:[...usr.productsRequested,req.body.name]
    },{
        runValidators:false,
        new:true
    });
    res.status(200).json({
        status:'success',
        message:'Your request has been recorded'
    });
})

exports.deleteRequest = catchAsync(async(req,res,next)=>{
    const usr = await User.findById(req.user.id);
    if(!usr.productsRequested.find(req.body.name)){
        return next(new AppError('Cannot delete a requested product which has not been requested',400));
    }
    await User.findByIdAndUpdate(req.user.id,{
        productsRequested:usr.productsRequested.filter(str=>{
            return str !==req.body.name;
        })
    })
    res.status(200).json({
        status:'success',
        message:'Your request has been removed'
    });
})

exports.getAllProductsByText = catchAsync(async(req,res,next)=>{
    let filter = {};
    const features = new APIFeatures(Product.find({...filter,available:{$ne:false}}), req.query).filter().sort().limitFields().paginate();

    const doc = await features.query.populate('seller','name profileImage');
    if(doc.length==0){
        return res.status(400).json({
            status:'success',
            matchedproducts:0,
            message:'No product found'
        })
    }
    else{
        return res.status(200).json({
            status:'success',
            matchedproducts:doc.length,
            products:doc
        })
    }
});

exports.getProductById = catchAsync(async(req,res,next)=>{
    const searchedProduct = await Product.findById(req.params.productID).populate('seller','name profileImage');
    if(!searchedProduct){
        return next(new AppError('Searched product does not exist',404));
    }
    res.status(200).json({
        status:'success',
        searchedProduct
    })
})

exports.deleteProduct = catchAsync(async(req,res,next)=>{
    const findproduct = await Product.findById(req.params.productID);
    if(!findproduct)    return next(new AppError('No such product exists',404));
    if(findproduct.seller.toString() !== req.user.id)  return next(new AppError('You do not have permission to delete this product',400));

    const tobedeleted = await Product.findByIdAndDelete(req.params.productID);
    if(!tobedeleted){
        return next(new AppError('No Product with this id found to be deleted',404));
    }

    const usr = await User.findById(req.user.id);
    tobedeleted.images.forEach((imgname)=>{
        fs.unlink(`public/products/${imgname}`,(err)=>{
            if(err) console.log(err);
        });
    })

    User.findByIdAndUpdate(req.user.id,{
        productsSold:usr.productsSold.filter((prod)=>{
            return prod !=req.params.productID
        })
    },{
        runValidators:false,
        new:true
    })

    res.status(200).json({
        status:'success',
        message:'Product deleted successfully'
    });
})