import React from 'react'

export default function Sidebar({ sessions, newChat, loadHistory }) {
  return (
    <div className="w-full md:w-64 bg-gray-900 text-white p-4 h-auto md:h-screen overflow-y-auto">
      <button onClick={newChat} className="w-full bg-green-500 p-2 rounded mb-4 cursor-pointer hover:bg-green-600 transition">
        New Chat
      </button>

      <h2 className="mb-2 font-semibold">Sessions</h2>

      {sessions.map((s) => (
          <div
            key={s.id}
            onClick={() => loadHistory(s.id)}
            className="cursor-pointer p-2 bg-gray-800 mb-2 rounded hover:bg-gray-700 transition"
          >
            {s.id.slice(0, 8)}
          </div>
        ))
      }
    </div>
  );
}




