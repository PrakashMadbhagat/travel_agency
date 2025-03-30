const express = require("express");
const router = express.Router();
const { createTrip } = require("../controllers/booking.controller");
const { verifyToken , isUser } = require("../middlewares/authentication.js");

router.post("/booking", verifyToken , isUser , createTrip);

module.exports = router;
