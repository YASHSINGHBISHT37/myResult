const express = require('express');
const router = express.Router();
const Program = require('../models/Program');

// GET /api/programs - list all (basic info only)
router.get('/', async (req, res) => {
  try {
    const programs = await Program.find({}, 'name school pdfLinks').limit(50);
    res.json({ count: await Program.countDocuments(), data: programs });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch programs', error: err.message });
  }
});

// GET /api/programs/:id - full detail
router.get('/:id', async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) return res.status(404).json({ message: 'Not found' });
    res.json({ data: program });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch program', error: err.message });
  }
});

module.exports = router;