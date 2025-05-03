const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");
const { verifyToken , isUser } = require("../middlewares/authentication.js");

router.get("/admin-email" , bookingController.adminEmail);
router.post("/booking" , bookingController.booking);
router.post("/trip-booking" , bookingController.tripBooking);

module.exports = router;
