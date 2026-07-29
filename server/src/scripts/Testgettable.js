require('dotenv').config();
const { PDFParse } = require('pdf-parse');

async function run() {
  const url = 'http://www.ipu.ac.in/Pubinfo2025/nt040825531 (5).pdf'; // BCA w.e.f 2024-25

  const parser = new PDFParse({ url });
  try {
    const result = await parser.getTable();
    console.log('Number of pages with tables:', result.pages?.length || 0);

    // Print first table found, if any
    for (const page of result.pages || []) {
      if (page.tables && page.tables.length > 0) {
        console.log(`\n--- Page ${page.pageNumber} — ${page.tables.length} table(s) ---`);
        console.log(JSON.stringify(page.tables[0], null, 2).substring(0, 2000));
        break;
      }
    }
  } catch (err) {
    console.error('getTable failed:', err.message);
  } finally {
    await parser.destroy();
  }

  process.exit(0);
}

run();