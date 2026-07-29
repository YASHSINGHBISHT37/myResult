const { startLoginSession, loginUser } = require('../services/authService');
const { fetchAndParseResult } = require('../services/resultService');

async function getCaptcha(req, res) {
  try {
    const { sessionId, captchaImage } = await startLoginSession();
    res.json({ sessionId, captchaImage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to load captcha', error: err.message });
  }
}

async function login(req, res) {
  const { sessionId, username, password, captchaText } = req.body;

  if (!sessionId || !username || !password || !captchaText) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const { success, redirectLocation } = await loginUser(sessionId, username, password, captchaText);

    if (!success) {
      return res.status(401).json({ message: 'Invalid credentials or captcha' });
    }

    const resultData = await fetchAndParseResult(sessionId, redirectLocation);

    res.json({ message: 'Login successful', data: resultData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
}

module.exports = { getCaptcha, login };
