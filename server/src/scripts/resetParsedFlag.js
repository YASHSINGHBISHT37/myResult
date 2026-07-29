// src/scripts/resetParsedFlag.js
require('dotenv').config();
const mongoose = require('mongoose');
const Program = require('../models/Program');

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  const result = await Program.updateMany({}, { $set: { parsed: false } });
  console.log('Reset', result.modifiedCount, 'programs');
  await mongoose.disconnect();
  process.exit(0);
}

run();