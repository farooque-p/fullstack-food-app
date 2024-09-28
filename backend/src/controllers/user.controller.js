import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcyrpt from "bcrypt";
import validator from "validator";

// Token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// User Registration
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists." });
    }

    // Validation for email format and strong password
    if (!validator.isEmail(email)) {
      return res.status(401).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    if (password.length < 8) {
      return res.status(401).json({
        success: false,
        message: "Password must be at least 8 characters.",
      });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(401).json({
        success: false,
        message: "Please user a strong password.",
      });
    }

    // Hash password
    const salt = await bcyrpt.genSalt(10);
    const hashedPassword = await bcyrpt.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Save
    const user = await newUser.save();
    const token = createToken(user._id);
    res.status(200).json({ success: true, token, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// User Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User doesn't exists!" });
    }

    const isMatch = await bcyrpt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Password!" });
    }

    const token = createToken(user._id);
    res.status(201).json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
