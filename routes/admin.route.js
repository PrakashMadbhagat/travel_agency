const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller.js");
const { verifyToken , isAdmin } = require("../middlewares/authentication.js");

router.post("/create-package", verifyToken , isAdmin , adminController.packageCreation);

module.exports = router;
