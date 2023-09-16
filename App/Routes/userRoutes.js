// userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Update profile route
router.put('/profile/:id', userController.updateProfile);

// Add more user-related routes as needed

module.exports = router;
