const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");
const { verifyToken , isUser } = require("../middlewares/authentication.js");

router.get("/admin-email" , bookingController.adminEmail);
router.post("/booking", verifyToken , bookingController.booking);
router.post("/trip-booking", verifyToken , bookingController.tripBooking);

module.exports = router;
