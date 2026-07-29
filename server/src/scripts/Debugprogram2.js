require('dotenv').config();
const mongoose = require('mongoose');
const Program = require('../models/Program');

async function run() {
  await mongoose.connect(process.env.MONGO_URI);

  const program = await Program.findOne({ name: /BCA \(w\.e\.f 2024-25\)/i });

  if (!program) {
    console.log('Program not found');
  } else {
    const text = program.rawSyllabusText || '';
    const idx = text.indexOf('101T');
    console.log('Index of "101T":', idx);
    console.log('\n--- CONTEXT AROUND FIRST CODE ---\n');
    console.log(text.substring(Math.max(0, idx - 300), idx + 300));
  }

  await mongoose.disconnect();
  process.exit(0);
}

run();