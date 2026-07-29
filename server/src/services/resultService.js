const { getSession } = require('../utils/sessionStore');
const { parseResultHtml } = require('./resultParser');

const BASE_URL = 'https://examweb.ggsipu.ac.in';

async function fetchAndParseResult(sessionId, redirectLocation) {
  const session = getSession(sessionId);

  if (!session) {
    throw new Error('Session expired or invalid. Please login again.');
  }

  const { client } = session;

  const path = redirectLocation.startsWith('/') ? redirectLocation : `/web/${redirectLocation}`;
  const homeUrl = redirectLocation.startsWith('http') ? redirectLocation : `${BASE_URL}${path}`;

  // Step 1: load studenthome.jsp (establishes session/form state)
  await client.get(homeUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });

  // Step 2: fetch result data (GET, not POST — flag=2, euno=semester, 100=ALL)
  const response = await client.get(`${BASE_URL}/web/StudentSearchProcess`, {
    params: { flag: '2', euno: '100' },
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'application/json, text/plain, */*',
    },
  });

  return parseResultHtml(response.data);
}

module.exports = { fetchAndParseResult };