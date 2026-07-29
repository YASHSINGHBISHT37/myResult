const axios = require('axios');
const pdfParse = require('pdf-parse');

async function fetchAndExtractText(pdfUrl) {
  const response = await axios.get(pdfUrl, {
    responseType: 'arraybuffer',
    headers: { 'User-Agent': 'Mozilla/5.0' },
    timeout: 30000,
  });
  const data = await pdfParse(response.data);
  return data.text;
}

module.exports = { fetchAndExtractText };