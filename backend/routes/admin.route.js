const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller.js");
const { verifyToken , isAdmin } = require("../middlewares/authentication.js");
let upload = require('../middlewares/multer.js')

router.put("/setting", upload.single('profilePic') , verifyToken , isAdmin , adminController.setting);
router.post("/create-trip", upload.single('img') , verifyToken , isAdmin , adminController.tripCreation);
router.get("/booking-get" , verifyToken , isAdmin , adminController.getBooking)
router.get("/hotel-get" , verifyToken , isAdmin , adminController.getHotel)
router.get("/bus-get" , verifyToken , isAdmin , adminController.getBus)
router.get("/car-get" , verifyToken , isAdmin , adminController.getCar)

module.exports = router;