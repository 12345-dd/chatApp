import React from "react";
import TableView from "./TableView";

export default function ChatWindow({ messages }) {
  return (
    <div className="space-y-6 mb-24 overflow-y-auto max-h-[calc(100vh-5rem)]">
      {messages.map((msg, index) => (
        <div
          key={index}
          className="border p-4 rounded bg-white shadow-sm dark:bg-gray-700 dark:text-white"
        >
          <p className="font-semibold">Q: {msg.question}</p>

          <TableView table={msg.answer.table} />

          <p className="text-gray-600 mt-2 dark:text-gray-300">
            {msg.answer.description}
          </p>
        </div>
      ))}
    </div>
  );
}



