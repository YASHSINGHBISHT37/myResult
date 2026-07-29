const crypto = require('crypto');

const sessions = new Map();
const SESSION_TTL_MS = 10 * 60 * 1000; // 10 min

function saveSession(jar, client) {
  const sessionId = crypto.randomBytes(16).toString('hex');
  sessions.set(sessionId, {
    jar,
    client,
    createdAt: Date.now(),
  });
  return sessionId;
}

function getSession(sessionId) {
  const session = sessions.get(sessionId);
  if (!session) return null;

  if (Date.now() - session.createdAt > SESSION_TTL_MS) {
    sessions.delete(sessionId);
    return null;
  }

  return session;
}

function deleteSession(sessionId) {
  sessions.delete(sessionId);
}

// cleanup expired sessions periodically
setInterval(() => {
  const now = Date.now();
  for (const [id, session] of sessions.entries()) {
    if (now - session.createdAt > SESSION_TTL_MS) {
      sessions.delete(id);
    }
  }
}, 5 * 60 * 1000);

module.exports = { saveSession, getSession, deleteSession };
