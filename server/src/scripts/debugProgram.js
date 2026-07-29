require('dotenv').config();
const mongoose = require('mongoose');
const Program = require('../models/Program');

async function run() {
  await mongoose.connect(process.env.MONGO_URI);

  const program = await Program.findOne({ name: /BCA \(w\.e\.f 2024-25\)/i });

  if (!program) {
    console.log('Program not found');
  } else {
    console.log('Name:', program.name);
    console.log('Text length:', program.rawSyllabusText?.length || 0);
    console.log('\n--- FIRST 3000 CHARS ---\n');
    console.log(program.rawSyllabusText?.substring(0, 3000) || '(empty)');
  }

  await mongoose.disconnect();
  process.exit(0);
}

run();