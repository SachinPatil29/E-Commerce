const express = require("express");
const router = express.Router();
const { prodCreateCategory, updateCategory, deleteCategory, getAllCategory, getCategory } = require("../controller/prodCategoryCtrl");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');


router.post('/', authMiddleware, isAdmin, prodCreateCategory);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.get('/:id', getCategory);
router.get('/', getAllCategory);
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);

module.exports = router;