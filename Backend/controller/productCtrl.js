const Product = require("../models/productModel");
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');

// Create a product
const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title); //if words are separated then it joints that words(apple mobile = apple-mobile)
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
})


//Update a product
const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body,
        {
            new: true,
        });
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error);
    }
})
//Update a product
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.json(deleteProduct);
    } catch (error) {
        throw new Error(error);
    }
})
//Get a product
const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getaProduct = await Product.findById(id);
        res.json({ getaProduct });
    } catch (error) {
        throw new Error(error);
    }
})

//Get all Product
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const getAllProduct = await Product.find();
        res.json(getAllProduct);
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = {
    createProduct,
    getaProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}
