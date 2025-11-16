import { useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  const [sessions, setSessions] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");

  const newChat = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000/new-session");

      setSessionId(data.sessionId);
      setMessages([]);

      setSessions((prev) => [...prev, { id: data.sessionId }]);
    } catch (error) {
      console.error("Error creating new chat:", error);
    }
  };

  const ask = async () => {
    if (!question.trim() || !sessionId) return;

    try {
      const { data } = await axios.post(`http://localhost:4000/ask/${sessionId}`,{ question });

      setMessages([...messages, data]);
      setQuestion("");
    } catch (error) {
      console.error("Error asking question:", error);
    }
  };

  const loadHistory = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:4000/history/${id}`);
      setSessionId(id);
      setMessages(data.history || []);
    } catch (error) {
      console.error("Error loading session history:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar sessions={sessions} newChat={newChat} loadHistory={loadHistory} />

      <div className="flex-1 p-6 overflow-y-auto bg-gray-100 dark:bg-gray-800">
        {!sessionId ? (
          <div className="text-center text-gray-600 mt-40 text-xl dark:text-gray-300">
            Click <b>New Chat</b> to start a conversation.
          </div>
        ) : (
          <>
            <ChatWindow messages={messages} />

            <div className="flex gap-2 items-center mt-4">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="flex-1 border p-2 rounded dark:bg-gray-700 dark:text-white"
                placeholder="Ask your question..."
              />
              <button
                onClick={ask}
                className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}




