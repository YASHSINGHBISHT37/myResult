require('dotenv').config();
const mongoose = require('mongoose');
const Program = require('../models/Program');

function mergeSplitCodes(text) {
  return text.replace(/\b([A-Z]{2,6})[ \t]*\n[ \t]*(\d{2,4}[A-Z]{0,2})\b/g, '$1$2');
}

async function run() {
  await mongoose.connect(process.env.MONGO_URI);

  const program = await Program.findOne({ name: /BCA \(w\.e\.f 2024-25\)/i });
  const merged = mergeSplitCodes(program.rawSyllabusText);
  const lines = merged.split('\n').map((l) => l.trim()).filter(Boolean);

  const idx = lines.findIndex((l) => l.startsWith('BCA105T'));
  console.log('Line index of BCA105T:', idx);
  console.log('\n--- Lines around it (raw array, with index) ---\n');
  for (let i = Math.max(0, idx - 2); i < Math.min(lines.length, idx + 18); i++) {
    console.log(i, JSON.stringify(lines[i]));
  }

  await mongoose.disconnect();
  process.exit(0);
}

run();