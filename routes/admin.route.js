const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller.js");
const { verifyToken , isAdmin } = require("../middlewares/authentication.js");
let upload = require('../middlewares/multer.js')

router.post("/create-trip", upload.single('img') , verifyToken , isAdmin , adminController.tripCreation);
router.get("/booking-get" , verifyToken , isAdmin , adminController.getBooking)
router.get("/hotel-get" , verifyToken , isAdmin , adminController.getHotel)
router.get("/flight-get" , verifyToken , isAdmin , adminController.getFlight)
router.get("/car-get" , verifyToken , isAdmin , adminController.getCar)

module.exports = router;