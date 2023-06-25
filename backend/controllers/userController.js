const User = require("./../models/userSchema");
const AppError = require("./../utils/appError");
const multer = require("multer");
const sharp = require("sharp");
const catchAsync = require("./../utils/catchAsyncError");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(new AppError("Please select an image file", 400), false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});
exports.uploadProductImages = upload.fields([{ name: "images", maxCount: 5 }]);

exports.resizeImages = catchAsync(async (req, res, next) => {
    if (!req.files)
        return next(
            new AppError("Upload minimum one image for the product", 400)
        );
    next();
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
    let page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    console.log(page, perPage, req.query);
    const total = await User.find().count();

    let totalPages = Math.ceil(total / perPage);
    console.log(totalPages);
    if (page > totalPages) page = totalPages;
    const skipCount = (page - 1) * perPage;

    const allUsers = await User.find().skip(skipCount).limit(perPage);
    if (!allUsers) return next(new AppError("Something went wrong!", 500));
    res.status(200).json({
        success: "true",
        result: allUsers,
    });
});

exports.createUser = catchAsync(async (req, res, next) => {
    console.log(req.query);
    if (Object.keys(req.body).length == 0)
        return next(new AppError("plz provide user information", 400));
    const newUser = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        profileUrl: req.body.profileUrl,
    };

    const userFound = await User.findOne({ email: newUser.email });
    if (userFound) {
        return res.status(200).json({
            message: "User alreday exists",
        });
    }

    await User.create(newUser);
    res.status(201).json({
        success: "true",
        body: newUser,
    });
});

exports.updateUser = catchAsync(async (req, res, next) => {
    const userId = req.params.id;
    if (Object.keys(req.body).length == 0)
        return next(
            new AppError("plz provide information to update user", 400)
        );

    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        success: "true",
        result: updatedUser,
    });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser)
        return res.status(400).json({
            success: "false",
            message: "user does not exists",
        }); 

    res.status(200).json({
        success: "true",
        deletedUser: deletedUser,
    });
});

exports.checkIfUserExists = catchAsync(async (req, res, next) => {
    if (Object.keys(req.body).length == 0)
        return next(new AppError("No email id provided", 400));

    const email = req.body.email;
    const userFound = await User.findOne({ email: email });
    if (userFound)
        return res.status(200).json({
            success: "true",
            userId: userFound._id,
            found: 1,
            message: " user exists",
        });
    res.status(200).json({
        success: "True",
        found: 0,
        message: "User does not exists",
    });
});
