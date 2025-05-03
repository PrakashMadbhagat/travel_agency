const Booking = require("../models/booking.model");
const User = require("../models/user.model");
const Trip = require("../models/trip.model");
const TripBooking = require("../models/tripbooking.model");
const sendEmail = require("../config/nodemailer");

const adminEmail = async (req, res) => {
  const adminEmail = await User.find({ role: "admin" });
  res.status(201).json(adminEmail[0].email);
};

const booking = async (req, res) => {
  try {
    const { category, fullName, email, phone, ...bookingDetails } = req.body;

    if (!["Hotel", "Bus", "Car Rental"].includes(category)) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const newBooking = new Booking({
      category,
      fullName,
      email,
      phone,
      ...bookingDetails,
    });

    await newBooking.save();

    const subject = `🎉 Your ${category} booking is confirmed - TravelGo`;

    const html = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <header style="text-align: center; padding-bottom: 20px;">
            <img src="https://your-logo-link.com/logo.png" alt="TravelGo" style="max-width: 150px;">
            <h1 style="font-size: 24px; color: #4CAF50;">Your Booking is Confirmed! 🎉</h1>
          </header>
          
          <section style="font-size: 16px; line-height: 1.6;">
            <p>Hello <strong>${fullName}</strong>,</p>
            <p>Thank you for booking your <strong>${category}</strong> with <strong>TravelGo</strong>! Your trip details are below:</p>
            
            <h2 style="color: #4CAF50; font-size: 18px;">Booking Details</h2>
            <ul style="list-style-type: none; padding-left: 0;">
              ${category === "Hotel" ? `
                <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">🏨</span> <strong>Destination:</strong> ${bookingDetails.destination}</li>
                <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">📅</span> <strong>Check-In:</strong> ${new Date(bookingDetails.checkIn).toLocaleDateString()}</li>
                <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">📅</span> <strong>Check-Out:</strong> ${new Date(bookingDetails.checkOut).toLocaleDateString()}</li>
                <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">👨‍👩‍👧</span> <strong>Guests:</strong> ${bookingDetails.adult} Adult(s), ${bookingDetails.child} Child(ren)</li>
                <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">💰</span> <strong>Total Amount:</strong> $${bookingDetails.amount}</li>
              ` : ""}
              
              ${category === "Flight" ? `
                <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">✈️</span> <strong>From:</strong> ${bookingDetails.from}</li>
                <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">✈️</span> <strong>To:</strong> ${bookingDetails.to}</li>
                <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">🛫</span> <strong>Seats Booked:</strong> ${bookingDetails.seat}</li>
              ` : ""}
              
              ${category === "Car Rental" ? `
                <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">🚗</span> <strong>Passengers:</strong> ${bookingDetails.passengers}</li>
              ` : ""}
            </ul>
            
            <p style="font-size: 16px; padding-top: 20px;">We look forward to your journey! ✈️🚗🏨</p>
          </section>

          <footer style="text-align: center; padding-top: 30px; font-size: 14px; color: #888;">
            <p>Warm regards,</p>
            <p><strong>TravelGo Team</strong></p>
            <p><a href="https://www.travelgo.com" style="color: #4CAF50;">Visit Our Website</a></p>
          </footer>
        </div>
      </div>
    `;

    await sendEmail({
      to: email,
      subject,
      html,
    });

    res.status(201).json({
      message: "Trip booked and confirmation email sent!",
      booking: newBooking,
    });
  } catch (error) {
    res.status(400).json({ message: "Error creating trip", error: error.message });
  }
};

const tripBooking = async (req, res) => {
  try {
    const { tripId, name, email, person } = req.body;

    if (!tripId || !name || !email || !person) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(404).json({ message: "Trip not found." });
    }

    if (trip.personLimitation < person) {
      return res.status(400).json({ message: "Not enough spots available." });
    }

    const totalPrice = trip.price * person;

    const newBooking = new TripBooking({
      tripId,
      name,
      email,
      person,
    });

    await newBooking.save();

    // Update the trip's personLimitation
    trip.personLimitation -= person;
    await trip.save();

    // Send confirmation email
    const subject = `🎉 Your Trip Booking is Confirmed - TravelGo`;

    const html = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <header style="text-align: center; padding-bottom: 20px;">
            <img src="https://your-logo-link.com/logo.png" alt="TravelGo" style="max-width: 150px;">
            <h1 style="font-size: 24px; color: #4CAF50;">Your Trip is Confirmed! 🎉</h1>
          </header>

          <section style="font-size: 16px; line-height: 1.6;">
            <p>Hello <strong>${name}</strong>,</p>
            <p>Thank you for booking your trip <strong>${trip.tripName}</strong> with <strong>TravelGo</strong>!</p>

            <h2 style="color: #4CAF50; font-size: 18px;">Booking Details</h2>
            <ul style="list-style-type: none; padding-left: 0;">
              <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">🏝️</span> <strong>Trip Name:</strong> ${trip.tripName}</li>
              <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">👥</span> <strong>Persons:</strong> ${person}</li>
              <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">💵</span> <strong>Price per Person:</strong> $${trip.price}</li>
              <li style="padding: 5px 0; font-size: 16px;"><span style="color: #4CAF50;">💰</span> <strong>Total Price:</strong> $${totalPrice}</li>
            </ul>

            <p style="font-size: 16px; padding-top: 20px;">We look forward to making your journey memorable! 🏖️🚌✈️</p>
          </section>

          <footer style="text-align: center; padding-top: 30px; font-size: 14px; color: #888;">
            <p>Warm regards,</p>
            <p><strong>TravelGo Team</strong></p>
            <p><a href="https://www.travelgo.com" style="color: #4CAF50;">Visit Our Website</a></p>
          </footer>
        </div>
      </div>
    `;

    await sendEmail({
      to: email,
      subject,
      html,
    });

    res.status(201).json({
      message: "Trip booked successfully and confirmation email sent!",
      bookingDetails: {
        _id: newBooking._id,
        name: newBooking.name,
        email: newBooking.email,
        person: newBooking.person,
        tripName: trip.tripName,
        pricePerPerson: trip.price,
        totalPrice: totalPrice,
        bookedAt: newBooking.bookedAt,
      },
      updatedTrip: {
        tripId: trip._id,
        tripName: trip.tripName,
        remainingSpots: trip.personLimitation,
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error booking trip.", error: error.message });
  }
};

module.exports = { adminEmail, booking , tripBooking };
