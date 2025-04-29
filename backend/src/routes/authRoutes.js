const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, fetchUser } = require('../controllers/authController');

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerUser);

// @route   GET /api/auth/login
// @desc    Login a user
// @access  Public
router.get('/fetchUser', fetchUser);

// @route   POST /api/auth/login
// @desc    Login a user
// @access  Public
router.post('/login', loginUser);

// @route   POST /api/auth/logout
// @desc    Logout a user
// @access  Public
router.post('/logout', logoutUser);

module.exports = router;
