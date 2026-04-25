 
/* ============================================
   ClassTable.jsx - Tabla de clases de Tailwind
   
   Componente nuevo para este proyecto.
   Muestra clases TW con su equivalente CSS
   de forma clara y bonita.
   ============================================ */
export default function ClassTable({ rows }) {
  // rows = [{ cls: 'p-4', css: 'padding: 1rem', desc: '16px de padding' }]
  return (
    <div className="rounded-xl overflow-hidden glass border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-white/5 border-b border-white/10">
            <th className="text-left px-4 py-2.5 text-gray-400 font-medium text-xs">Clase</th>
            <th className="text-left px-4 py-2.5 text-gray-400 font-medium text-xs">CSS</th>
            <th className="text-left px-4 py-2.5 text-gray-400 font-medium text-xs hidden md:table-cell">Nota</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="px-4 py-2">
                <code className="text-tw-400 code-font text-xs bg-tw-500/10 px-2 py-0.5 rounded">
                  {row.cls}
                </code>
              </td>
              <td className="px-4 py-2">
                <code className="text-gray-400 code-font text-xs">{row.css}</code>
              </td>
              <td className="px-4 py-2 text-gray-500 text-xs hidden md:table-cell">{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}