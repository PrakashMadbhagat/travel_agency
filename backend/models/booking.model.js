const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  category: {
    type: String,
    required: true,
    enum: ["Hotel", "Bus", "Car Rental"],
  },

  // New fields
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },

  // Hotel fields
  destination: { type: String },
  checkIn: { type: Date },
  checkOut: { type: Date },
  adult: { type: Number },
  child: { type: Number },
  amount: { type: Number },

  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Booking", bookingSchema);
