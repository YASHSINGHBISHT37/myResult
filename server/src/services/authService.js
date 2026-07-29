const axios = require('axios');
const crypto = require('crypto');
const { CookieJar } = require('tough-cookie');
const { HttpsCookieAgent } = require('http-cookie-agent/http');
const cheerio = require('cheerio');
const { saveSession, getSession } = require('../utils/sessionStore');

const BASE_URL = 'https://examweb.ggsipu.ac.in';

function createClient() {
  const jar = new CookieJar();

  const httpsAgent = new HttpsCookieAgent({
    cookies: { jar },
    minVersion: 'TLSv1',
    rejectUnauthorized: false,
  });

  const client = axios.create({
    withCredentials: true,
    httpsAgent,
  });

  return { client, jar };
}

async function startLoginSession() {
  const { client, jar } = createClient();

  const pageResponse = await client.get(`${BASE_URL}/web/login.jsp`, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });

  const $ = cheerio.load(pageResponse.data);
  const captchaSrc = $('#captchaImage').attr('src');

  if (!captchaSrc) {
    throw new Error('Captcha image not found on login page');
  }

  const captchaResponse = await client.get(`${BASE_URL}/web/${captchaSrc}`, {
    responseType: 'arraybuffer',
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });

  const captchaBase64 = Buffer.from(captchaResponse.data, 'binary').toString('base64');
  const captchaImage = `data:image/png;base64,${captchaBase64}`;

  const sessionId = saveSession(jar, client);

  return { sessionId, captchaImage };
}

function hashPassword(password, captchaText) {
  const combined = password + captchaText;
  const hash = crypto.createHash('sha256').update(combined, 'utf-8').digest();
  return hash.toString('base64');
}

async function loginUser(sessionId, username, password, captchaText) {
  const session = getSession(sessionId);

  if (!session) {
    throw new Error('Session expired or invalid. Please refresh captcha.');
  }

  const { client } = session;

  const hashedPassword = hashPassword(password, captchaText);

  const params = new URLSearchParams();
  params.append('username', username);
  params.append('passwd', hashedPassword);
  params.append('captcha', captchaText);

  const response = await client.post(`${BASE_URL}/web/Login`, params, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    maxRedirects: 0,
    validateStatus: (status) => true,
  });

  const isSuccess = response.status === 302;

  return { success: isSuccess, redirectLocation: response.headers.location };
}

module.exports = { startLoginSession, loginUser };
