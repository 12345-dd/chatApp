import React from 'react'

export default function TableView({ table }) {
  return (
    <table className="w-full border mt-2 text-sm">
      <thead>
        <tr>
          {table.columns.map((col, i) => (
            <th key={i} className="border p-2 bg-gray-200 font-medium">
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {table.rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="border p-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}



