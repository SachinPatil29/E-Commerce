const express = require("express");
const { createBlog,
    updateBlog,
    getBlog,
    getAllBlog,
    deleteBlog,
    liketheBlog,
    disliketheBlog,
    uploadImages
} = require("../controller/blogCtrl");
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImages");


router.post("/", authMiddleware, isAdmin, createBlog);
router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array("images", 10), blogImgResize, uploadImages)
router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislikes", authMiddleware, disliketheBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router
