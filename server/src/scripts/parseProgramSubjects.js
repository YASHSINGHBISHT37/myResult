require('dotenv').config();
const mongoose = require('mongoose');
const Program = require('../models/Program');
const { parseSubjectsFromText } = require('../utils/syllabusTextParser');

async function run() {
  await mongoose.connect(process.env.MONGO_URI);

  const programs = await Program.find({
    rawSyllabusText: { $exists: true, $ne: '' },
    parsed: false,
  });

  console.log(`Found ${programs.length} programs to parse.\n`);

  for (const program of programs) {
    const subjects = parseSubjectsFromText(program.rawSyllabusText);

    if (subjects.length > 0) {
      // Store as a single flat list under semester: 0 (unstructured) —
      // refine into real semesters later once you see the actual output quality.
      program.semesters = [{ semester: 0, subjects }];
      program.parsed = true;
      await program.save();
      console.log(`${program.name} -> ${subjects.length} subjects found`);
    } else {
      console.log(`${program.name} -> 0 subjects found (skipped)`);
    }
  }

  console.log('\nDone.');
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});