const jwt = require('jsonwebtoken');

// Secret key for signing JWT tokens
const secretKey = 'your-secret-key';

// Function to generate JWT token
function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

module.exports = { generateToken };