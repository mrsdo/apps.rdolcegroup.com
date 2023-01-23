/*
 * user.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides the model for campsites.
 * ------------
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  role: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const UserSchema = new Schema({
    userName: {
      type: String,
      unique: true,
      required: true,
      maxLength: 20
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
  role: [roleSchema]
  },
  {
  timestamps: true
});
const User = mongoose.model('User', UserSchema);

module.exports = User;