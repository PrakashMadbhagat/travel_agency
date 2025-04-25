const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

router.post("/register", userController.registeration);
router.post("/login", userController.loginUser);
router.post("/forgot-password", userController.forgotPassword);
router.post("/verify-otp", userController.verifyOtp);
router.post("/reset-password", userController.resetPassword);
router.post("/logout", userController.logout);

module.exports = router;
