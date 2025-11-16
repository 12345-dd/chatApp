import React from "react";

export default function TableView({ table }) {
  return (
    <div className="overflow-x-auto mt-2">
      <table className="min-w-full border text-sm">
        <thead>
          <tr>
            {table.columns.map((col, i) => (
              <th
                key={i}
                className="border px-2 py-1 bg-gray-200 font-medium text-left"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              {row.map((cell, j) => (
                <td key={j} className="border px-2 py-1">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}




