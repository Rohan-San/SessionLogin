// index.js
const express = require('express');
const app = require('./config/express'); // Import your Express app configuration
const db = require('./config/database'); // Import your MongoDB connection
const authRoutes = require('./app/routes/authRoutes'); // Import authentication routes
const userRoutes = require('./app/routes/userRoutes'); // Import user-related routes

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use authentication and user-related routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Basic route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to my session-based login app!');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
