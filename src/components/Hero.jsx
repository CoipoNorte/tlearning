/* ============================================
   Hero.jsx - Sección de bienvenida
   ============================================ */
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tw-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-300">Versión 4 — La nueva era</span>
        </div>

        <div className="relative w-32 h-32 mx-auto mb-8 animate-bounce-in">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl animate-spin-slow">🎨</span>
          </div>
          <div className="absolute inset-0 rounded-full animate-pulse-glow" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-slide-up">
          <span className="text-white">Aprende</span><br />
          <span className="gradient-text neon-glow">Tailwind v4</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 animate-slide-up font-light">
          El framework CSS utility-first con
          <span className="text-tw-500 font-medium"> demos interactivas</span>
        </p>
        <p className="text-gray-500 mb-12 animate-fade-in">
          14 secciones • Previews en vivo • Tablas de clases • Código copiable
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <button onClick={() => document.getElementById('setup')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-gradient-to-r from-tw-500 to-blue-500 rounded-2xl text-white font-bold text-lg hover:shadow-lg hover:shadow-tw-500/25 transition-all hover:scale-105">
            <span className="flex items-center justify-center gap-2">
              🚀 Comenzar
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer"
            className="px-8 py-4 glass rounded-2xl text-gray-300 font-medium text-lg hover:bg-white/10 transition-all hover:scale-105">
            📖 Docs v4
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto animate-fade-in">
          {[
            { value: '14', label: 'Temas' },
            { value: '100+', label: 'Clases' },
            { value: 'v4', label: 'Última versión' }
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-gray-500" />
      </div>
    </section>
  )
}