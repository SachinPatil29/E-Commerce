const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createColor, updateColor, deleteColor, getColor, getAllColor } = require("../controller/colorCtrl");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);
router.put("/:id", authMiddleware, isAdmin, updateColor);
router.get("/:id", authMiddleware, getColor);
router.get("/", authMiddleware, getAllColor);
router.delete("/:id", authMiddleware, isAdmin, deleteColor);

module.exports = router;