const { PDFParse } = require('pdf-parse');

async function fetchAndExtractText(pdfUrl) {
  const parser = new PDFParse({ url: pdfUrl });
  try {
    const result = await parser.getText();
    return result.text;
  } finally {
    await parser.destroy();
  }
}

module.exports = { fetchAndExtractText };