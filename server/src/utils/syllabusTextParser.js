// Extracts subject code + name + credits from GGSIPU syllabus PDF text.
//
// Handles two cases seen in extracted PDF text:
//   1. Everything on one line:
//        "BCA105T# Web Technologies# CCT 4 - 4 40 60 100"
//   2. Split across several lines:
//        BCA
//        101T
//        Programming for
//        Problem Solving using C
//        CCT
//        4 - 4 40 60 100

const CATEGORY_TAGS = new Set([
  'CCT', 'CCP', 'AECC', 'SEC', 'DSE', 'GE', 'GE-1', 'GE-2', 'GE-3',
  'CC', 'VAC', 'MOOC', 'NUES', 'MDC',
]);
const CATEGORY_TAG_ALTERNATION = [...CATEGORY_TAGS].join('|');

function mergeSplitCodes(text) {
  return text.replace(/\b([A-Z]{2,6})[ \t]*\n[ \t]*(\d{2,4}[A-Z]{0,2})\b/g, '$1$2');
}

function isRowValuesLine(line) {
  const tokens = line.trim().split(/\s+/);
  if (tokens.length < 2 || tokens.length > 8) return false;
  return tokens.every((t) => /^-$|^\d{1,3}$/.test(t));
}

function extractCreditsFromTokens(tokens) {
  const idx = tokens.length >= 4 ? 2 : tokens.length - 1;
  const val = parseInt(tokens[idx], 10);
  return Number.isNaN(val) ? null : val;
}

function stripCategoryTagSuffix(name) {
  const re = new RegExp(`\\s+(${CATEGORY_TAG_ALTERNATION})$`);
  return name.replace(re, '').trim();
}

function tryParseSameLine(remainder) {
  const cleaned = remainder.replace(/#/g, ' ').replace(/\s+/g, ' ').trim();
  if (!cleaned) return null;

  const rowMatch = cleaned.match(/((?:-|\d{1,3})(?:\s+(?:-|\d{1,3})){1,7})$/);
  if (!rowMatch) return null;

  const tokens = rowMatch[1].trim().split(/\s+/);
  const credits = extractCreditsFromTokens(tokens);
  if (credits === null) return null;

  let name = cleaned.slice(0, rowMatch.index).trim();
  name = stripCategoryTagSuffix(name);

  return { name: name || null, credits };
}

function parseSubjectsFromText(text) {
  if (!text) return [];

  const merged = mergeSplitCodes(text);
  const lines = merged
    .split('\n')
    .map((l) => l.trim().replace(/-{2,}/g, '-'))
    .filter(Boolean);

  const subjects = [];
  const seen = new Set();

  for (let i = 0; i < lines.length; i++) {
    const codeMatch = lines[i].match(/^([A-Z]{2,6}-?\d{2,4}[A-Z]{0,2})\b/);
    if (!codeMatch) continue;

    const code = codeMatch[1];
    if (seen.has(code)) continue;

    const remainder = lines[i].slice(code.length);
    const sameLineResult = tryParseSameLine(remainder);

    if (sameLineResult) {
      subjects.push({
        code,
        name: sameLineResult.name,
        credits: sameLineResult.credits,
        type: code.endsWith('P') ? 'Practical' : 'Theory',
      });
      seen.add(code);
      continue;
    }

    let credits = null;
    const nameParts = [];

    for (let j = i + 1; j < Math.min(i + 16, lines.length); j++) {
      const line = lines[j];

      if (isRowValuesLine(line)) {
        credits = extractCreditsFromTokens(line.trim().split(/\s+/));
        break;
      }

      if (/^[A-Z]{2,6}-?\d{2,4}[A-Z]{0,2}\b/.test(line)) break;

      if (!CATEGORY_TAGS.has(line.replace(/#$/, ''))) {
        nameParts.push(line.replace(/#/g, ''));
      }
    }

    if (credits !== null && credits >= 0 && credits <= 10) {
      subjects.push({
        code,
        name: nameParts.join(' ').replace(/\s+/g, ' ').trim() || null,
        credits,
        type: code.endsWith('P') ? 'Practical' : 'Theory',
      });
      seen.add(code);
    }
  }

  return subjects;
}

module.exports = { parseSubjectsFromText };