const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");
const { verifyToken , isUser } = require("../middlewares/authentication.js");

router.get("/admin-email", verifyToken , bookingController.adminEmail);
router.post("/booking", verifyToken , bookingController.createTrip);

module.exports = router;
