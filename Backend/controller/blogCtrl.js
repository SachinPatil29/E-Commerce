const Blog = require("../models/blogModel");
const user = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../Utils/validateMongodbId");
const cloudinaryUploadImg = require("../Utils/cloudinary");
const fs = require("fs");

const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.json(newBlog)
    } catch (error) {
        throw new Error(error);     
    }
})

const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new : true
        });
        res.json(updateBlog)
    } catch (error) {
        throw new Error(error);     
    }
})

const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getBlog = await Blog.findById(id)
        .populate("likes")
        .populate("disLikes")
        const updateViews = await Blog.findByIdAndUpdate(id,
            {
                $inc : { numOfViews: 1}
            },
            {
                new: true
            }
        )
        res.json(getBlog)
    } catch (error) {
        throw new Error(error);     
    }
})

const getAllBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getAllBlog = await Blog.find()
        res.json(getAllBlog)
    } catch (error) {
        throw new Error(error);     
    }
})

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteBlog = await Blog.findByIdAndDelete(id)
        res.json(deleteBlog)
    } catch (error) {
        throw new Error(error);     
    }
})

const liketheBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongodbId(blogId);
    //Find the blog which you want to be liked
    const blog = await Blog.findById(blogId)
    //Find the login user 
    const loginUserId = req?.user?._id;
    //Find if the user has liked the blog
    const isLiked = blog?.isLiked;
    //Find if the user has disliked the blog
    const alreadyDisliked = blog?.disLikes?.find(
        (userId => userId?.toString() === loginUserId?.toString())
    )

    if(alreadyDisliked){
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: {disLikes: loginUserId},
                isDisLiked: false
            },
            {
                new: true
            }
        )
        res.json(blog);
    }

    if(isLiked){
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: {likes: loginUserId},
                isLiked: false
            },
            {
                new: true
            }
        )
        res.json(blog);
    }
    else{
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $push: {likes: loginUserId},
                isLiked: true
            },
            {
                new: true
            }
        )
        res.json(blog);
    }
})

const disliketheBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongodbId(blogId);
    //Find the blog which you want to be liked
    const blog = await Blog.findById(blogId)
    //Find the login user 
    const loginUserId = req?.user?._id;
    //Find if the user has liked the blog
    const isDisLiked = blog?.isDisLiked;
    //Find if the user has disliked the blog
    const alreadyLiked = blog?.likes?.find(
        (userId => userId?.toString() === loginUserId?.toString())
    )

    if(alreadyLiked){
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: {likes: loginUserId},
                isLiked: false
            },
            {
                new: true
            }
        )
        res.json(blog);
    }

    if(isDisLiked){
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: {disLikes: loginUserId},
                isDisLiked: false
            },
            {
                new: true
            }
        )
        res.json(blog);
    }
    else{
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $push: {dislikes: loginUserId},
                isDisLiked: true
            },
            {
                new: true
            }
        )
        res.json(blog);
    }
});

const uploadImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const uploader = (path) => cloudinaryUploadImg(path, "images");
        const urls = [];
        const files = req.files;
        for(const file of files){
            const { path } = file
            const newpath = await uploader(path);
            urls.push(newpath);
            fs.unlinkSync(path)
        }
        const findBlog = await Blog.findByIdAndUpdate(
            id,
            {
                images: urls.map((file) => {
                    return file;
                }),
            },
            {
                new: true
            }  
        );
        res.json(findBlog);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { 
    createBlog, 
    updateBlog, 
    getBlog, 
    getAllBlog, 
    deleteBlog, 
    liketheBlog, 
    disliketheBlog,
    uploadImages
}