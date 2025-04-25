const Booking = require("../models/booking.model");
const User = require("../models/user.model");
const sendEmail = require("../config/nodemailer");

const adminEmail = async (req, res) => {
  const adminEmail = await User.find({ role: "admin" });
  res.status(201).json(adminEmail[0].email);
};

const createTrip = async (req, res) => {
  try {
    const { category, fullName, email, phone, ...bookingDetails } = req.body;

    if (!["Hotel", "Flight", "Car Rental"].includes(category)) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const newBooking = new Booking({
      userId: req.user.id,
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

module.exports = { adminEmail, createTrip };
