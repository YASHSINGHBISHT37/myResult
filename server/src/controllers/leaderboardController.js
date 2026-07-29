// controllers/leaderboardController.js
const Leaderboard = require('../models/Leaderboard');

async function joinLeaderboard(req, res) {
  const { enrollmentNo, name, program, institute, cgpa } = req.body;

  if (!enrollmentNo || cgpa == null) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const entry = await Leaderboard.findOneAndUpdate(
    { enrollmentNo },
    { name, program, institute, cgpa, optedIn: true, updatedAt: Date.now() },
    { upsert: true, new: true }
  );

  res.json({ message: 'Added to leaderboard', data: entry });
}

async function getLeaderboard(req, res) {
  const entries = await Leaderboard.find({ optedIn: true }).sort({ cgpa: -1 });
  res.json({ data: entries });
}

module.exports = { joinLeaderboard, getLeaderboard };