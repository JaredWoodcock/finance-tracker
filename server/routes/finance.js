const express = require('express');
const router = express.Router();
// const authMiddleware = require('../utils/auth');
const User = require('../models/UserModel');

// Save finance worksheet data for the authenticated user
router.post('/save', authMiddleware, async (req, res) => {
  try {
    const { incomeLines, expenseLines } = req.body;
    // Find the authenticated user
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Update finance worksheet data
    user.financeWorksheet = { incomeLines, expenseLines };
    await user.save();
    res.json({ message: 'Finance worksheet data saved' });
  } catch (error) {
    console.error('Error saving finance worksheet data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
