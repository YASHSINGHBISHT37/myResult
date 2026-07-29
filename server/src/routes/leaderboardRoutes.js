const express = require('express');
const router = express.Router();
const { joinLeaderboard, getLeaderboard } = require('../controllers/leaderboardController');

router.post('/', joinLeaderboard);
router.get('/', getLeaderboard);

module.exports = router;