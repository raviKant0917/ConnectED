const express = require('express');
const userController = require('./../controllers/userController.js');
const authController= require('./../controllers/authController.js');
const jwtAuth = require('./../utils/jwtAuth.js');
const router = express.Router();

router
  .route('/signup')
  .post(authController.signup,authController.uploadImage,authController.resizeImage);

router
  .route('/login')
  .post(authController.login);

router
  .route('/isloggedin')
  .get(jwtAuth, userController.isloggedin)

router
  .route('/forgotPassword')
  .post(authController.forgotPassword);

router
  .route('/resetPassword/:token')
  .patch(authController.resetPassword);

router
  .route('/updatePassword')
  .patch(authController.updatePassword);

router
  .route('/')
  .patch(userController.uploadUserPhoto,userController.resizeImage,userController.updateUser)
  .delete(userController.deleteUser);

router
    .route('/getMe')
    .get(userController.getMe);

router
  .route('/:id')
  .get(userController.getUser)

router
    .route('/checkemail')
    .post(authController.checkEmailExists);
  
module.exports=router;