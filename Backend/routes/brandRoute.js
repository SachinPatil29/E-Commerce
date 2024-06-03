const express = require("express");
const router = express.Router();
const { createBrand, updateBrand, deleteBrand, getAllBrand, getBrand } = require("../controller/brandCtrl");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');


router.post('/', authMiddleware, isAdmin, createBrand);
router.put('/:id', authMiddleware, isAdmin, updateBrand);
router.get('/:id', getBrand);
router.get('/', getAllBrand);
router.delete('/:id', authMiddleware, isAdmin, deleteBrand);

module.exports = router;