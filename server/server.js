const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/financeTrackerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// Using authRoutes
app.use('/api/auth', authRoutes);

// Serve the frontend application for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
