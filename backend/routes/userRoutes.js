const express = require('express');
const userController = require('./../controllers/userController.js');
const authController= require('./../controllers/authController.js');

const router = express.Router();

router
  .route('/signup')
  .post(authController.signup,authController.uploadImage,authController.resizeImage);

router
  .route('/login')
  .post(authController.login);

router
  .route('/forgotPassword')
  .post(authController.forgotPassword);

router
  .route('/resetPassword/:token')
  .patch(authController.resetPassword);

router
  .route('/updatePassword')
  .patch(authController.protect,authController.updatePassword);

router
  .route('/')
  .patch(authController.protect,userController.uploadUserPhoto,userController.resizeImage,userController.updateUser)
  .delete(authController.protect,userController.deleteUser);

router
  .route('/:id')
  .get(userController.getUser)
  
module.exports=router;