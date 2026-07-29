require('dotenv').config();
const { PDFParse } = require('pdf-parse');

async function run() {
  const url = 'http://www.ipu.ac.in/Pubinfo2025/nt040825531 (5).pdf';

  const parser = new PDFParse({ url });
  try {
    const result = await parser.getTable();

    console.log('Top-level keys:', Object.keys(result));
    console.log('\n--- First 2000 chars of raw JSON ---\n');
    console.log(JSON.stringify(result, null, 2).substring(0, 2000));
  } catch (err) {
    console.error('getTable failed:', err.message);
  } finally {
    await parser.destroy();
  }

  process.exit(0);
}

run();