const express = require("express");
const router = express.Router();
const { createEnquiry, updateEnquiry, deleteEnquiry, getAllEnquiry, getEnquiry } = require("../controller/enquiryCtrl");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');


router.post('/', createEnquiry);
router.put('/:id', authMiddleware, isAdmin, updateEnquiry);
router.get('/:id', getEnquiry);
router.get('/', getAllEnquiry);
router.delete('/:id', authMiddleware, isAdmin, deleteEnquiry);

module.exports = router;