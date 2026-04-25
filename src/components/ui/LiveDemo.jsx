  
/* ============================================
   LiveDemo.jsx - Contenedor de demos en vivo
   ============================================ */
export default function LiveDemo({ title, children }) {
  return (
    <div className="rounded-xl overflow-hidden glass border border-white/10">
      <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-gray-400 code-font">{title || 'Preview'}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}