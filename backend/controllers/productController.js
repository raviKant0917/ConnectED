const Product = require('./../models/productSchema');
const AppError = require('./../utils/appError');
const multer = require('multer');
const sharp = require('sharp');
const catchAsync = require('./../utils/catchAsyncError');

const multerStorage = multer.memoryStorage();

const upload = multer({
    storage:multerStorage,
    fileFilter:multerFilter
});

const multerFilter = (req,file,cb)=>{
    if(file.mimetype.startsWith('image')){
        cb(null,true);
    }
    else{
        cb(new AppError('Please select an image file',400),false);
    }
}

exports.uploadProductImages = upload.fields([
    {name:'images',maxCount:5}
]);

exports.resizeImages = catchAsync(async(req,res,next)=>{
    if(!req.files)  return next(new AppError('Upload minimum one image for the product',400));
    next();
})

exports.createProduct = catchAsync(async(req,res,next)=>{
    if(!req.body.user)  req.body.user = req.user;

    if(req.body.rent){
        const newProduct = Product.create({
            name:req.body.name,
            description:req.body.description,
            seller:req.body.user.id,
            rent:true
        });
        res.status(200).json({
            status:'success',
            product:newProduct
        })
    }
    else{
        const newProduct = Product.create({
            name:req.body.name,
            description:req.body.description,
            seller:req.body.user.id,
            rent:false
        });
        res.status(200).json({
            status:'success',
            product:newProduct
        })
    }
})