const express = require('express');
const { 
    createUser, 
    loginUser, 
    getAllUser, 
    getaUser, 
    deleteaUser, 
    updateaUser, 
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword
} = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');


const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/updatePassword", authMiddleware ,updatePassword);
router.post("/login", loginUser);
router.get("/all-users", getAllUser);
router.get("/refreshToken", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin ,getaUser);
router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddleware, updateaUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin ,unblockUser);

module.exports = router;