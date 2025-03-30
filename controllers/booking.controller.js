const Booking = require("../models/booking.model");

const createTrip = async (req, res) => {
  try {
    const { category, ...bookingDetails } = req.body;

    // Ensure category is valid
    if (!["Hotel", "Flight", "Car Rental"].includes(category)) {
      return res.status(400).json({ message: "Invalid category" });
    }

    // Create a new trip
    const newBooking = new Booking({ category, ...bookingDetails , userId: req.user.id });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: "Error creating trip", error: error.message });
  }
};

module.exports = { createTrip };
