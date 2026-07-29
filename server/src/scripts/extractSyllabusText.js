require('dotenv').config();
const mongoose = require('mongoose');
const Program = require('../models/Program');
const { fetchAndExtractText } = require('../utils/pdfTextExtractor');

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  const programs = await Program.find({ rawSyllabusText: { $exists: false } });

  console.log(`Found ${programs.length} programs to process.\n`);

  let succeeded = 0;
  let failed = 0;

  for (const program of programs) {
    if (!program.pdfLinks || program.pdfLinks.length === 0) continue;

    // Try links from newest (last) to oldest (first) until one works
    const linksToTry = [...program.pdfLinks].reverse();
    let done = false;

    for (const link of linksToTry) {
      console.log(`Fetching: ${program.name} -> ${link.url}`);
      try {
        const text = await fetchAndExtractText(link.url);
        program.rawSyllabusText = text;
        await program.save();
        console.log(`  -> Saved (${text.length} chars)`);
        succeeded++;
        done = true;
        break;
      } catch (err) {
        console.error(`  Failed: ${err.message}`);
      }
    }

    if (!done) {
      failed++;
      console.log(`  All links failed for: ${program.name}\n`);
    }
  }

  console.log(`\nDone. Succeeded: ${succeeded}, Failed: ${failed}`);
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});