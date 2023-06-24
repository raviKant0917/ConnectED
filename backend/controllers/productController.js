const Product = require('./../models/productSchema');
const AppError = require('./../utils/appError');
const multer = require('multer');
const sharp = require('sharp');
const catchAsync = require('./../utils/catchAsyncError');

const multerStorage = multer.memoryStorage();


const multerFilter = (req,file,cb)=>{
    if(file.mimetype.startsWith('image')){
        cb(null,true);
    }
    else{
        cb(new AppError('Please upload only image files',400),false);
    }
}

exports.uploadProductImages = upload.fields([
    {name:'images',maxCount:5}
]);

exports.resizeImages = catchAsync(async(req,res,next)=>{
    if(!req.files)  return next(new AppError('Upload minimum one image for the product',400));

    req.body.images=[];
    await Promise.all(
        req.files.images.map(async(file,i)=>{
            const filename = `product-${req.body.currProduct.id}-${i+1}.jpeg`;

            await sharp(file.buffer)
                        .resize(2000,1333)
                        .toFormat('jpeg')
                        .jpeg({quality:90})
                        .toFile(`public/${filename}`);

            req.body.images.push(filename);
        })
    )

    const product = await Product.findById(req.body.currProduct.id);
    product.images = req.body.images;
    await product.save();
    res.status(200).json({
        status:'Success',
        product
    });
})

exports.createProduct = catchAsync(async(req,res,next)=>{
    if(!req.body.user)  req.body.user = req.user;

    //In this if and else block make seller = req.body.user.id after ravi sets req.user after logging in the user
    //Also change this =='true' to true or false when sending data through form
    if(req.body.rent == 'true'){
        const newProduct = await Product.create({
            name:req.body.name,
            description:req.body.description,
            seller:req.body.user,
            rent:true,
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
            seller:req.body.user,
            rent:false,
            images:[`${Date.now()}`],
            price:req.body.price
        });
        req.body.currProduct = newProduct;
    }
})