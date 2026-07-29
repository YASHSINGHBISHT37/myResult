const express = require('express');
const router = express.Router();

// Placeholder for future standalone result endpoints (e.g. re-fetch, cache lookup)
router.get('/ping', (req, res) => res.json({ message: 'result routes working' }));

module.exports = router;
