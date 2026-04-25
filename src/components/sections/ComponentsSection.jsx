 
/* ============================================
   Sección 14: Componentes Reales
   
   Ahora que conoces todas las piezas,
   combinémoslas para crear componentes reales.
   ============================================ */
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function ComponentsSection() {
  return (
    <SectionWrapper id="components" number="14" title="Componentes"
      subtitle="Combinando todo en UI real" icon="🧩" color="cyan">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Ahora todo junto</h3>
            <p className="text-gray-400 text-sm">
              La magia de Tailwind es combinar todas las utilidades para crear 
              <span className="text-tw-400 font-medium"> componentes bonitos sin escribir CSS</span>.
            </p>
          </div>

          <CodeBlock title="Card.html" language="html"
            code={`<!-- Card moderna con glass -->
<div class="glass rounded-2xl p-6 hover:bg-white/10 
            transition-all group cursor-pointer">
  <div class="flex items-center gap-3 mb-4">
    <div class="w-10 h-10 rounded-xl bg-gradient-to-br 
                from-cyan-500 to-blue-500 flex items-center 
                justify-center text-white font-bold
                group-hover:scale-110 transition-transform">
      🚀
    </div>
    <div>
      <h3 class="text-white font-semibold">Título</h3>
      <p class="text-xs text-gray-500">Subtítulo</p>
    </div>
  </div>
  <p class="text-sm text-gray-400 leading-relaxed">
    Descripción del componente con texto descriptivo.
  </p>
</div>`} />

          <CodeBlock title="Button.html" language="html"
            code={`<!-- Botones con variantes -->
<button class="px-4 py-2 bg-gradient-to-r from-cyan-500 
               to-blue-500 rounded-xl text-white font-medium
               hover:shadow-lg hover:shadow-cyan-500/25
               active:scale-95 transition-all">
  Primary
</button>

<button class="px-4 py-2 glass rounded-xl text-gray-300
               hover:bg-white/10 transition-all">
  Secondary
</button>

<button class="px-4 py-2 bg-red-500 rounded-xl text-white
               hover:bg-red-600 active:scale-95 transition-all">
  Danger
</button>`} />

          <CodeBlock title="Input.html" language="html"
            code={`<!-- Input estilizado -->
<input type="text" placeholder="Escribe aquí..."
  class="w-full px-4 py-3 rounded-xl bg-white/5
         border border-white/10 text-white text-sm
         placeholder-gray-500
         focus:outline-none focus:border-cyan-500/50
         focus:ring-2 focus:ring-cyan-500/20
         transition-all" />

<!-- Input con label flotante -->
<div class="relative">
  <input id="email" type="email" placeholder=" "
    class="peer w-full px-4 py-3 pt-5 rounded-xl 
           bg-white/5 border border-white/10 
           text-white text-sm
           focus:outline-none focus:border-cyan-500" />
  <label for="email"
    class="absolute left-4 top-1 text-[10px] text-gray-500
           peer-placeholder-shown:top-3.5
           peer-placeholder-shown:text-sm
           peer-focus:top-1 peer-focus:text-[10px]
           peer-focus:text-cyan-400 transition-all">
    Email
  </label>
</div>`} />
        </div>

        <div className="space-y-6">
          {/* Card demo */}
          <LiveDemo title="Cards">
            <div className="space-y-3">
              {[
                { emoji: '🚀', title: 'Rendimiento', desc: 'Compilación ultra rápida con Rust', color: 'from-cyan-500 to-blue-500' },
                { emoji: '🎨', title: 'Diseño', desc: 'Sistema de diseño utility-first', color: 'from-purple-500 to-pink-500' },
                { emoji: '⚡', title: 'DX', desc: 'Sin config, todo en CSS con @theme', color: 'from-amber-500 to-orange-500' },
              ].map(card => (
                <div key={card.title} className="glass rounded-2xl p-4 hover:bg-white/10 transition-all group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      {card.emoji}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm group-hover:text-tw-400 transition-colors">{card.title}</h3>
                      <p className="text-xs text-gray-500">{card.desc}</p>
                    </div>
                    <span className="ml-auto text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                  </div>
                </div>
              ))}
            </div>
          </LiveDemo>

          {/* Buttons demo */}
          <LiveDemo title="Botones">
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-tw-500 to-blue-500 rounded-xl text-white font-medium text-sm hover:shadow-lg hover:shadow-tw-500/25 active:scale-95 transition-all">
                Primary
              </button>
              <button className="px-4 py-2 glass rounded-xl text-gray-300 text-sm hover:bg-white/10 transition-all">
                Secondary
              </button>
              <button className="px-4 py-2 bg-red-500 rounded-xl text-white font-medium text-sm hover:bg-red-600 active:scale-95 transition-all">
                Danger
              </button>
              <button className="px-4 py-2 rounded-xl text-tw-400 text-sm border border-tw-500/30 hover:bg-tw-500/10 transition-all">
                Outline
              </button>
              <button disabled className="px-4 py-2 bg-gray-600 rounded-xl text-gray-400 text-sm disabled:opacity-40 disabled:cursor-not-allowed">
                Disabled
              </button>
            </div>
          </LiveDemo>

          {/* Input demo */}
          <LiveDemo title="Inputs">
            <div className="space-y-3">
              <input type="text" placeholder="Input normal..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-tw-500/50 focus:ring-2 focus:ring-tw-500/20 transition-all" />
              <div className="flex gap-3">
                <input type="text" placeholder="Nombre"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-tw-500/50 transition-all" />
                <button className="px-6 py-3 bg-gradient-to-r from-tw-500 to-blue-500 rounded-xl text-white font-medium text-sm hover:shadow-lg transition-all shrink-0">
                  Enviar
                </button>
              </div>
            </div>
          </LiveDemo>

          {/* Badge demo */}
          <LiveDemo title="Badges y Tags">
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'React', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
                { label: 'Vue', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
                { label: 'Angular', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
                { label: 'Svelte', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
                { label: 'Nuevo', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
              ].map(badge => (
                <span key={badge.label} className={`px-3 py-1 rounded-full text-xs font-medium border ${badge.color}`}>
                  {badge.label}
                </span>
              ))}
            </div>
          </LiveDemo>

          {/* Completaste */}
          <div className="glass rounded-2xl p-6">
            <h4 className="text-white font-bold mb-3">🎓 ¡Completaste la guía!</h4>
            <p className="text-gray-400 text-sm mb-4">14 conceptos de Tailwind v4 dominados.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                'Setup v4', 'Colores', 'Spacing', 'Flexbox',
                'Grid', 'Tipografía', 'Bordes', 'Efectos',
                '@theme', 'Animaciones', 'Responsive', 'Estados',
                '@utility', 'Componentes'
              ].map(t => (
                <div key={t} className="flex items-center gap-1.5 p-1.5 rounded bg-green-500/10 text-green-400">
                  <span>✓</span><span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}