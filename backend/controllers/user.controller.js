const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const sendEmail = require("../config/nodemailer");
const { generateOtp } = require("../config/otpService");
const jwt = require("jsonwebtoken");
const session = require("express-session");

const registeration = async (req, res) => {
  try {
    let { email, password ,role} = req.body;
    console.log(req.body);
    if ( !email || !password ) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    if (password.length < 6) {
      return res.status(400).json({ msg: "Password must be at least 6 characters" });
    }

    const existingUser = await userModel.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists with this email." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      email: email.toLowerCase(),
      password: hashedPassword,
      role
    });

    await newUser.save();
    res.status(201).json({ msg: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    let user = await userModel.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id, email: user.email , role: user.role}, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({ message: "Login successful", token , role: user.role });
  } catch (error) {
    res.status(500).json({ message: "An error occurred during login", error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email: email });

    if (!user) return res.status(404).json({ message: "User not found." });

    const otp = generateOtp();
    user.otp = otp;
    const otpExpires = Date.now() + 15 * 60 * 1000;
    user.otpExpires = otpExpires;
    await user.save();

    req.session.email = email;
    req.session.otp = otp;
    req.session.otpExpires = otpExpires;

    const subject = "Password Reset OTP - TravelGo";

    const html = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <header style="text-align: center; padding-bottom: 20px;">
            <img src="https://your-logo-link.com/logo.png" alt="TravelGo" style="max-width: 150px;">
            <h1 style="font-size: 24px; color: #4CAF50;">Password Reset Request</h1>
          </header>

          <section style="font-size: 16px; line-height: 1.6;">
            <p>Hello <strong>Admin</strong>,</p>
            <p>We have received a request to reset your password. Your One-Time Password (OTP) for the password reset is:</p>

            <div style="background-color: #f1f1f1; padding: 15px; font-size: 1.5em; font-weight: bold; color: #333; text-align: center; border-radius: 5px;">
              ${otp}
            </div>

            <p style="padding-top: 20px;">This OTP is valid for the next 15 minutes. After that, it will expire, and you will need to request a new one.</p>
            <p>If you did not request a password reset, please contact our support team immediately at <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>.</p>

            <p style="padding-top: 20px;">Thank you for choosing <strong>TravelGo</strong>.</p>
          </section>

          <footer style="text-align: center; padding-top: 30px; font-size: 14px; color: #888;">
            <p>For your security, do not share your OTP with anyone.</p>
            <p><a href="https://www.travelgo.com" style="color: #4CAF50;">Visit Our Website</a></p>
          </footer>
        </div>
      </div>
    `;

    await sendEmail({
      to: user.email,
      subject,
      html,
    });

    res.status(200).json({ message: "OTP sent to your email." });
  } catch (error) {
    res.status(500).json({ message: "Error processing request.", error: error.message });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;

    if (!otp) return res.status(400).json({ message: "Email and OTP are required." });

    const { email, otp: storedOtp, otpExpires } = req.session
    if (!email || !storedOtp) return res.status(401).json({ message: "OTP session expires. Try Again" })

    if (storedOtp !== otp) return res.status(401).json({ message: 'Invalid OTP.' });
    if (Date.now() > otpExpires) return res.status(401).json({ message: 'OTP has expired. Please request a new one.' });

    res.status(200).json({ message: "OTP verified successfully. You can now reset your password." });
  } catch (error) {
    res.status(500).json({ message: "Error processing request.", error: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await userModel.findOne({ email: email.toLowerCase() });

    if (!user) return res.status(404).json({ message: "User not found." });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({ message: "Password reset successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error resetting password.", error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({ message: "Logout successful." });
  } catch (error) {
    res.status(500).json({ message: "Error logging out.", error: error.message });
  }
};

module.exports = { registeration, loginUser, forgotPassword, verifyOtp, resetPassword , logout };
