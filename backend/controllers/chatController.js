const { v4: uuid } = require("uuid");
const responses = require("../data/responses.json");

const sessions = [];

const createSession = (req, res) => {
  const id = uuid();
  sessions.push({ id, history: [] });
  res.json({ sessionId: id });
};

const askQuestion = (req, res) => {
  const { sessionId } = req.params;
  const { question } = req.body;

  const session = sessions.find(s => s.id === sessionId);
  if (!session) return res.json({ error: "Invalid session ID" });

  const answer = responses.samples[0];

  const msg = {
    id: uuid(),
    question,
    answer,
    feedback: null
  };

  session.history.push(msg);
  res.json(msg);
};

const getSessions = (req, res) => {
  res.json(sessions);
};

const getHistory = (req, res) => {
  const session = sessions.find(s => s.id === req.params.sessionId);
  res.json(session || {});
};

const giveFeedback = (req, res) => {
  const { sessionId } = req.params;
  const { messageId, feedback } = req.body;

  const session = sessions.find(s => s.id === sessionId);
  const msg = session.history.find(m => m.id === messageId);

  msg.feedback = feedback;

  res.json({ success: true });
};

module.exports = {
    createSession,
    askQuestion,
    getSessions,
    getHistory,
    giveFeedback
}
