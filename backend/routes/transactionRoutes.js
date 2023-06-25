const express = require('express');
const transactionController = require('./../controllers/transactionController.js');
const authController = require('./../controllers/authController.js');

const router = express.Router();

router.use(authController.protect);

router
    .route('/checkout/:productId')
    .post(transactionController.checkout);

router
    .route('/paymentverification')
    .post(transactionController.paymentVerification);

router
    .route('/getapikey')
    .get(transactionController.getAPIkey);

router
    .route('/')
    .get(transactionController.getMyTransactions);

module.exports = router;