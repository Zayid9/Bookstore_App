import express from "express";
import User from "../Models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const generateAuthToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "24hrs",
  });
}

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    console.log("Registering user:", req.body);

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    if (username.length < 3) {
      return res.status(400).json({ message: "Username must be at least 3 characters long" });
    }

    // check if user exists 

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Get Random Profile Image Avatar
    const profileImage = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;

    // Create new user
    const newUser = new User({
      email,
      username,
      password,
      profileImage,
    });

    console.log("User created:", newUser);

    await newUser.save();

    // Generate JWT token
    const token = generateAuthToken(newUser._id);
    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        profileImage: newUser.profileImage,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/Login", async (req, res) => {
  res.send("Login route");
});

export default router;