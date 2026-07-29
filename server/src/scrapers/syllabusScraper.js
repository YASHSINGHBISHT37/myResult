const axios = require('axios');
const cheerio = require('cheerio');

function joinUrl(base, href) {
  if (href.startsWith('http')) return href.trim();
  const path = href.startsWith('/') ? href : `/${href}`;
  return `${base}${path}`.trim();
}

/**
 * Scrapes one GGSIPU school Scheme/Syllabus page and extracts
 * program names along with their PDF syllabus links.
 */
async function scrapeSchoolPage(schoolUrl) {
  const { data: html } = await axios.get(schoolUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
    timeout: 20000,
  });

  const $ = cheerio.load(html);
  const programs = [];

  $('table tr').each((i, row) => {
    const cells = $(row).find('td');
    if (cells.length < 2) return;

    let programName = '';
    let pdfCellIndex = -1;

    // Find the cell that actually contains the PDF links — that's the "Syllabus" column.
    cells.each((idx, cell) => {
      if ($(cell).find('a[href*=".pdf"]').length > 0) {
        pdfCellIndex = idx;
      }
    });

    // Program name = longest text cell that is NOT the PDF-links cell and not a pure number.
    cells.each((idx, cell) => {
      if (idx === pdfCellIndex) return;
      const text = $(cell).text().replace(/\s+/g, ' ').trim();
      if (text.length > programName.length && !/^\d+([./]\d+)*$/.test(text)) {
        programName = text;
      }
    });

    const pdfLinks = [];
    $(row)
      .find('a')
      .each((j, a) => {
        const href = $(a).attr('href');
        if (href && href.toLowerCase().includes('.pdf')) {
          pdfLinks.push({
            label: $(a).text().replace(/\s+/g, ' ').trim() || 'Syllabus',
            url: joinUrl('http://www.ipu.ac.in', href),
          });
        }
      });

    if (programName && pdfLinks.length > 0) {
      programs.push({ programName, pdfLinks });
    }
  });

  return programs;
}

module.exports = { scrapeSchoolPage };