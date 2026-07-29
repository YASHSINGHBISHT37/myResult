require('dotenv').config();
const mongoose = require('mongoose');
const { SCHOOLS } = require('../scrapers/schoolIndex');
const { scrapeSchoolPage } = require('../scrapers/syllabusScraper');
const Program = require('../models/Program');

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB connected. Starting scrape...\n');

  let totalPrograms = 0;

  for (const school of SCHOOLS) {
    console.log(`Scraping ${school.name} (${school.url})...`);
    try {
      const programs = await scrapeSchoolPage(school.url);

      for (const p of programs) {
        await Program.findOneAndUpdate(
          { name: p.programName, school: school.name },
          { name: p.programName, school: school.name, pdfLinks: p.pdfLinks },
          { upsert: true, new: true }
        );
      }

      console.log(`  -> ${programs.length} programs found and saved.`);
      totalPrograms += programs.length;
    } catch (err) {
      console.error(`  Failed for ${school.name}: ${err.message}`);
    }
  }

  console.log(`\nDone. Total programs saved: ${totalPrograms}`);
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error('Seed script failed:', err);
  process.exit(1);
});