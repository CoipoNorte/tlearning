  
/* ============================================
   CodeBlock.jsx - Bloque de código copiable
   ============================================ */
import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CodeBlock({ code, language = 'html', title }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl overflow-hidden glass border border-white/10">
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {title && <span className="text-xs text-gray-400 code-font">{title}</span>}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 code-font">{language}</span>
          <button onClick={handleCopy}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="code-font text-sm leading-relaxed">
          <code className="text-gray-300">{code.trim()}</code>
        </pre>
      </div>
    </div>
  )
}