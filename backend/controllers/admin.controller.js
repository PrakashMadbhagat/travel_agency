const Trip = require("../models/trip.model");
const Booking = require("../models/booking.model");
const cloudinary = require("../middlewares/cloudinary");
const User = require("../models/user.model"); // Ensure this is imported

const setting = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized: Invalid or missing token." });
    }

    const userId = req.user.id;
    const file = req.file;
    const { fullName } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const updateData = {};

    if (fullName) {
      updateData.fullName = fullName;
    }

    if (file && file.path) {
      const result = await cloudinary.uploader.upload(file.path);
      updateData.profilePic = result.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    }).select("email role fullName profilePic");

    return res.status(200).json({
      message: "Profile updated successfully.",
      profile: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile.", error: error.message});
  }
};

const tripCreation = async (req, res) => {
  try {
    const img = req.file ? req.file.path : null;
    const { tripName, discription, price } = req.body;
    const newTrip = new Trip({ img : img, tripName, discription, price , adminId : req.user.id});
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(400).json({  message : "trip error" , error: error.message });
  }
};

const getBooking = async (req, res) => {
  try {
    const booking = await Booking.find();
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ message : "trip error" , error: error.message });
  }
};

const getHotel = async (req, res) => {
  try {
    const hotel = await Booking.find({category : "Hotel"});
    res.status(200).json(hotel);
  } catch (error) {
    res.status(400).json({ message : "trip error" , error: error.message });
  }
};

const getFlight = async (req, res) => {
  try {
    const flight = await Booking.find({category : "Flight"});
    res.status(200).json(flight);
  } catch (error) {
    res.status(400).json({ message : "trip error" , error: error.message });
  }
};

const getCar = async (req, res) => {
  try {
    const car = await Booking.find({category : "Car Rental"});
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ message : "trip error" , error: error.message });
  }
};

module.exports = { setting , tripCreation , getBooking , getHotel , getFlight , getCar };
