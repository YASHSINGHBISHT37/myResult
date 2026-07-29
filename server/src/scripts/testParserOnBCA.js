console.log('=== FRESH RUN AT', new Date().toISOString(), '===');
require('dotenv').config();
const mongoose = require('mongoose');
const Program = require('../models/Program');
const { parseSubjectsFromText } = require('../utils/syllabusTextParser');

async function run() {
  await mongoose.connect(process.env.MONGO_URI);

  const program = await Program.findOne({ name: /BCA \(w\.e\.f 2024-25\)/i });

  if (!program) {
    console.log('Program not found');
  } else {
    const subjects = parseSubjectsFromText(program.rawSyllabusText);
    console.log(`Found ${subjects.length} subjects.\n`);
    console.log(JSON.stringify(subjects.slice(0, 15), null, 2));
  }

  await mongoose.disconnect();
  process.exit(0);
}

run();