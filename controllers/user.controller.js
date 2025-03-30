const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const sendEmail = require("../config/nodemailer");
const { generateOtp } = require("../config/otpService");
const jwt = require("jsonwebtoken");
const session = require("express-session");

const registeration = async (req, res) => {
  try {
    let { fullName, email, password, confirmPassword, phoneNumber , role} = req.body;
    console.log(req.body);
    if (!fullName || !email || !password || !confirmPassword || !phoneNumber) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
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
      fullName: fullName,
      email: email.toLowerCase(),
      phoneNumber,
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
    const otpExpires = Date.now() + 15 * 60 * 1000
    user.otpExpires = otpExpires
    await user.save();

    req.session.email = email;
    req.session.otp = otp;
    req.session.otpExpires = otpExpires;

    await sendEmail({
      to: user.email,
      subject: "Password Reset OTP",
      text: `Dear Valued Customer, your One-Time Password (OTP) for password reset is: ${otp}. For your security, this OTP is valid for 15 minutes. If you did not request a password reset, please contact our support team immediately. Thank you for choosing [Your Travel Agency Name].`,
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
