// userController.js
const User = require('../models/User');

// Update user profile logic
exports.updateProfile = async (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user data
    user.username = username || user.username;
    user.email = email || user.email;

    // Save the updated user data to MongoDB
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    // Handle update errors
    console.error(error);
    res.status(500).json({ message: 'Profile update failed' });
  }
};
