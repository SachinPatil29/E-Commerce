const Product = require("../models/productModel");
const User = require("../models/userModel");
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
//Delete a product
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
    // console.log(req.query);
    try {
        //Filtering
        const queryObj = { ...req.query };
        const excludeFields = ["page", "sort", "limit", "fields"];
        excludeFields.forEach((el) => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

        let query = Product.find(JSON.parse(queryStr))

        //Sorting 
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt")
        }

        //Limiting the fields (Which fields we want only that fields will shown)
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" "); 
            query = query.select(fields);
        } else {
            query = query.select("-__v")  
        }

        //Pagination (how many products shown in one page)
        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if(req.query.page){
            const productCount = await Product.countDocuments();
            if (skip>= productCount) {
                throw new Error('The page does not exists');
            }
        }

        const product = await query;
        res.json(product);
    } catch (error) {
        throw new Error(error);
    }
})

const addToWishlist = asyncHandler(async(req, res) => {
    const { _id } = req.user;
    const { prodId } = req.body;
    try {
        const user = await User.findById(_id);
        const alreadyAdded = user.wishlist.find((id) => id.toString() === prodId);
        if (alreadyAdded) {
            let user = await User.findByIdAndUpdate(_id,
                {
                    $pull: {wishlist: prodId}
                },
                {
                    new: true
                }
            )
            res.json(user)
        } else {
            let user = await User.findByIdAndUpdate(_id,
                {
                    $push: {wishlist: prodId}
                },
                {
                    new: true
                }
            )
            res.json(user)
        }
    } catch (error) {
        throw new Error(error);
    }
})

const rating = asyncHandler(async(req, res) => {
    const { _id } = req.user;
    const { star, prodId, comment} = req.body;
    try {
        const product = await Product.findById(prodId);
        const alreadyRated = await product.ratings.find((userId) => userId.postedby.toString() === _id.toString());
        if (alreadyRated) {
            const updateRating = await Product.updateOne(
              {
                ratings: { $elemMatch: alreadyRated },
              },
              {
                $set: { "ratings.$.star": star, "ratings.$.comment": comment },
              },
              {
                new: true,
              }
            )
            res.json(updateRating)
          } else {
            const rateProduct = await Product.findByIdAndUpdate(
              prodId,
              {
                $push: {
                  ratings: {
                    star: star,
                    comment: comment,
                    postedby: _id,
                  },
                },
              },
              {
                new: true,
              }
            )
            res.json(rateProduct);
          }
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = {
    createProduct,
    getaProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
}
