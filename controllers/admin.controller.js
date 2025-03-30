const Trip = require("../models/trip.model");
const Booking = require("../models/booking.model");
const cloudinary = require("../middlewares/cloudinary");

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
}
const getHotel = async (req, res) => {
  try {
    const hotel = await Booking.find({category : "Hotel"});
    res.status(200).json(hotel);
  } catch (error) {
    res.status(400).json({ message : "trip error" , error: error.message });
  }
}
const getFlight = async (req, res) => {
  try {
    const flight = await Booking.find({category : "Flight"});
    res.status(200).json(flight);
  } catch (error) {
    res.status(400).json({ message : "trip error" , error: error.message });
  }
}
const getCar = async (req, res) => {
  try {
    const car = await Booking.find({category : "Car Rental"});
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ message : "trip error" , error: error.message });
  }
}

module.exports = { tripCreation , getBooking , getHotel , getFlight , getCar };
