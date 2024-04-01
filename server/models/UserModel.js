const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  jwtToken: { type: String } // Field to store JWT token
});

// Method to generate JWT token
userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, 'your_secret_key');
  return token;
};

// Method to verify JWT token
userSchema.statics.verifyAuthToken = function(token) {
  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    return decoded;
  } catch (err) {
    return null;
  }
};

// Method to hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;