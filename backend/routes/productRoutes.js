const express = require('express');
const productController = require('./../controllers/productController');

const router = express.Router();

router
    .route('/')
    .post(productController.uploadProductImages,productController.createProduct,productController.resizeImages);

module.exports = router;