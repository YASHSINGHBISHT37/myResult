const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const resultRoutes = require('./routes/resultRoutes');
const programRoutes = require('./routes/programRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/result', resultRoutes);
app.use('/api/programs', programRoutes);

app.get('/', (req, res) => res.send('myResult server running'));

module.exports = app;