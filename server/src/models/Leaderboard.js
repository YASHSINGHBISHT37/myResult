// models/Leaderboard.js
const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  enrollmentNo: { type: String, required: true, unique: true },
  name: String,
  program: String,
  institute: String,
  cgpa: Number,
  optedIn: { type: Boolean, default: false }, // student consent flag
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);