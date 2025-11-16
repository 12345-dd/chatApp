const router = require("express").Router();
const chatController = require("../controllers/chatController");

router.post("/new-session", chatController.createSession);
router.post("/ask/:sessionId", chatController.askQuestion);
router.get("/sessions", chatController.getSessions);
router.get("/history/:sessionId", chatController.getHistory);
router.post("/feedback/:sessionId", chatController.giveFeedback);

module.exports = router;
