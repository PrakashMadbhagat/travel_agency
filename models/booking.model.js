// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
    
// },{timestamps : true});

// const bookingModel = mongoose.model("Booking", bookingSchema);
// module.exports = bookingModel;
  
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId : { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  category: {
    type: String,
    required: true,
    enum: ["Hotel", "Flight", "Car Rental"], // Only allow these values
  },

  // Fields for Hotel
  destination: { type: String },
  checkIn: { type: Date },
  checkOut: { type: Date },
  adult: { type: Number },
  child: { type: Number },
  amount: { type: Number },

  // Fields for Flight
  from: { type: String },
  to: { type: String },
  seat: { type: Number },

  // Fields for Car Rental
  passengers: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
