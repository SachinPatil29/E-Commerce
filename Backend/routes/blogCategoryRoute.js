const express = require("express");
const router = express.Router();
const { blogCreateCategory, updateCategory, deleteCategory, getAllCategory, getCategory } = require("../controller/blogCategoryCtrl");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');


router.post('/', authMiddleware, isAdmin, blogCreateCategory);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.get('/:id', getCategory);
router.get('/', getAllCategory);
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);

module.exports = router;