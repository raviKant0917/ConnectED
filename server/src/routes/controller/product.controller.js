const productModel = require("../../model/Product.model");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
    const products = await productModel.find().limit(10);
    res.json(products);
});

const createProduct = asyncHandler(async (req, res) => {
    const { name, description, rent, price, images } = req.body;
    if (!name || !description || !price) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const product = await productModel.create({
        name,
        description,
        rent,
        price,
        images,
        seller: req.body.user.id,
    });
    if (product) {
        res.json(product);
    } else {
        res.status(400);
        throw new Error("Cannot create product");
    }
});

const getProductById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);
    if (!product) {
        res.status(400);
        throw new Error("invalid Id");
    }
    res.json(product);
});

const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { name, description, rent, price, images } = req.body;
    const product = await productModel.findById(id);
    if (product.seller.toString() !== req.body.user.id) {
        res.status(400);
        throw new Error("You don't have permission to update this product");
    }
    const updatedProduct = await productModel.findByIdAndUpdate(
        id,
        { $set: { name, description, rent, price, images } },
        { new: true }
    );
    if (!updatedProduct) {
        res.status(400);
        throw new Error("Something went wrong");
    }
    res.json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);
    if (product.seller.toString() !== req.body.user.id) {
        res.status(400);
        throw new Error("You don't have permission to delete this product");
    }
    await productModel.findByIdAndDelete(id);
    res.status(200);
});

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
};
