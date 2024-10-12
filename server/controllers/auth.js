const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Function to generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// Registration function
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Generate salt and hash the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // Create a new user with the hashed password
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        // Save the user to the database
        const user = await newUser.save();

        // Generate JWT token
        const token = generateToken(user._id);
        const userData = { _id: user._id, username: user.username, email: user.email };

        res.status(200).json({ token, user: userData });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "User does not exist" });

        // Compare the entered password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

        // Generate JWT token
        const token = generateToken(user._id);
        const userData = { _id: user._id, username: user.username, email: user.email };

        res.status(200).json({ token, user: userData });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Exporting the register and login functions
module.exports = {
    register,
    login,
};
