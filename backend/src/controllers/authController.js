const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const user = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch user details based on token
const fetchUser = async (req, res) => {
    try {
      // Extract token from header
      const token = req.header("auth-token");
  
      // Check if token exists
      if (!token) {
        return res.status(401).json({ error: "Please authenticate using a valid token" });
      }
  
      try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
        // Extract user ID from decoded token
        const userId = decoded.userId;
  
        // Fetch user details from database by user ID
        const user = await User.findById(userId).select("-password");
  
        // Check if user exists
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
  
        // If user is found, send user details in response
        res.status(200).json(user.id);
        
      } catch (error) {
        // Handle token verification errors
        console.error("Error verifying token:", error);
        res.status(401).json({ error: "Please authenticate using a valid token" });
      }
  
    } catch (error) {
      // Handle server errors
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Server error" });
    }
  };

// Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Logout a user
const logoutUser = (req, res) => {
  res.status(200).json({ message: "User logged out successfully" });
};

module.exports = { registerUser, fetchUser, loginUser, logoutUser };
