/* ============================================
   Navbar.jsx - Navegación principal
   ============================================ */
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'setup',       label: 'Setup',       icon: '🚀' },
  { id: 'colors',      label: 'Colores',     icon: '🎨' },
  { id: 'spacing',     label: 'Spacing',     icon: '📏' },
  { id: 'flexbox',     label: 'Flexbox',     icon: '📐' },
  { id: 'grid',        label: 'Grid',        icon: '🔲' },
  { id: 'typography',  label: 'Tipografía',  icon: '✍️' },
  { id: 'borders',     label: 'Bordes',      icon: '🔳' },
  { id: 'effects',     label: 'Efectos',     icon: '✨' },
  { id: 'theme',       label: '@theme',      icon: '🎛️' },
  { id: 'animations',  label: 'Animaciones', icon: '🎬' },
  { id: 'responsive',  label: 'Responsive',  icon: '📱' },
  { id: 'states',      label: 'Estados',     icon: '👆' },
  { id: 'utility',     label: '@utility',    icon: '🧰' },
  { id: 'components',  label: 'Componentes', icon: '🧩' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(sections[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:animate-spin-slow">🎨</span>
            <span className="font-bold text-lg gradient-text hidden sm:inline">tlearning</span>
          </button>

          <div className="hidden lg:flex items-center gap-1 max-w-3xl overflow-x-auto py-2 px-2">
            {sections.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  active === s.id ? 'bg-tw-500/20 text-tw-400' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}>
                {s.label}
              </button>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden glass-strong animate-slide-down border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-2">
            {sections.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  active === s.id ? 'bg-tw-500/20 text-tw-400' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}>
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}