const express = require('express');
const productController = require('./../controllers/productController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
    .route('/')
    .post(authController.protect,productController.uploadProductImages,productController.createProduct,productController.resizeImages)
    .get(authController.protect,productController.getAllProductsByText);

router
    .route('/:productID')
    .get(authController.protect,productController.getProductById)
    .patch(authController.protect,productController.uploadProductImages,productController.updateResizeImages,productController.updateProduct)
    .delete(authController.protect,productController.deleteProduct);

module.exports = router;