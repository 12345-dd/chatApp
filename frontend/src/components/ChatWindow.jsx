import React from 'react'
import TableView from "./TableView";

export default function ChatWindow({ messages }) {
  return (
    <div className="space-y-6 mb-10">
      {messages.map((msg) => (
        <div key={msg.id} className="border p-4 rounded bg-white shadow-sm">
          <p className="font-semibold">Q: {msg.question}</p>

          <TableView table={msg.answer.table} />

          <p className="text-gray-600 mt-2">{msg.answer.description}</p>

        </div>
      ))}
    </div>
  );
}



