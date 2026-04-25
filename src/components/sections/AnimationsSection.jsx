 
/* ============================================
   Sección 10: Animaciones y Transiciones
   ============================================ */
import { useState } from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'
import ClassTable from '../ui/ClassTable'

export default function AnimationsSection() {
  const [active, setActive] = useState(null)

  const animations = [
    { cls: 'animate-spin',       label: 'spin',       emoji: '⚙️' },
    { cls: 'animate-ping',       label: 'ping',       emoji: '🔔' },
    { cls: 'animate-pulse',      label: 'pulse',      emoji: '💓' },
    { cls: 'animate-bounce',     label: 'bounce',     emoji: '⬆️' },
    { cls: 'animate-float',      label: 'float (custom)', emoji: '🎈' },
    { cls: 'animate-bounce-in',  label: 'bounce-in (custom)', emoji: '🎯' },
  ]

  return (
    <SectionWrapper id="animations" number="10" title="Animaciones"
      subtitle="Transiciones y animaciones CSS" icon="🎬" color="amber">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ClassTable rows={[
            { cls: 'transition-all',      css: 'transition: all 150ms',      desc: 'Transición en todo' },
            { cls: 'transition-colors',   css: 'transition: color, bg...',   desc: 'Solo colores' },
            { cls: 'transition-transform',css: 'transition: transform',      desc: 'Solo transform' },
            { cls: 'duration-300',        css: 'transition-duration: 300ms', desc: 'Duración 300ms' },
            { cls: 'duration-500',        css: 'transition-duration: 500ms', desc: 'Duración 500ms' },
            { cls: 'delay-150',           css: 'transition-delay: 150ms',    desc: 'Delay 150ms' },
            { cls: 'ease-in-out',         css: 'transition-timing: ease-in-out', desc: 'Curva suave' },
            { cls: 'animate-spin',        css: 'animation: spin 1s linear infinite', desc: 'Girar' },
            { cls: 'animate-ping',        css: 'animation: ping 1s cubic...',  desc: 'Ping (notificación)' },
            { cls: 'animate-pulse',       css: 'animation: pulse 2s cubic...', desc: 'Pulsar' },
            { cls: 'animate-bounce',      css: 'animation: bounce 1s infinite',desc: 'Rebotar' },
          ]} />

          <CodeBlock title="animations.html" language="html"
            code={`<!-- TRANSICIONES: suaves al cambiar estado -->
<button class="transition-all duration-300 hover:scale-105 hover:bg-blue-500">
  Transición suave al hover
</button>

<div class="transition-colors duration-500 bg-gray-800 hover:bg-cyan-500">
  Solo transiciona colores
</div>

<div class="transition-transform duration-300 hover:-translate-y-2">
  Sube al hover
</div>

<!-- ANIMACIONES: continuas -->
<div class="animate-spin">⚙️ Girando</div>
<div class="animate-pulse">💓 Pulsando</div>
<div class="animate-bounce">⬆️ Rebotando</div>
<div class="animate-ping">🔔 Ping</div>

<!-- CUSTOM con @theme -->
@theme {
  --animate-wiggle: wiggle 1s ease-in-out infinite;
  @keyframes wiggle {
    0%, 100% { transform: rotate(-3deg); }
    50%      { transform: rotate(3deg); }
  }
}
<div class="animate-wiggle">Custom animation</div>

<!-- Combinar transición + transform -->
<div class="transition-all duration-300 ease-in-out
            hover:scale-110 hover:rotate-3 hover:shadow-xl">
  Efecto combinado
</div>`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Animaciones built-in">
            <div className="grid grid-cols-3 gap-4">
              {animations.map(a => (
                <div key={a.cls} className="text-center">
                  <div className={`${a.cls} text-3xl mx-auto mb-2 w-12 h-12 flex items-center justify-center`}>
                    {a.emoji}
                  </div>
                  <code className="text-[10px] text-gray-500 code-font">{a.label}</code>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Transiciones (hover aquí)">
            <div className="space-y-3">
              {[
                { cls: 'hover:scale-105 hover:bg-amber-500/20', label: 'scale + bg' },
                { cls: 'hover:-translate-y-2 hover:shadow-lg hover:shadow-amber-500/20', label: 'translate + shadow' },
                { cls: 'hover:rotate-3 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white', label: 'rotate + gradient' },
                { cls: 'hover:scale-110 hover:rounded-2xl', label: 'scale + rounded' },
              ].map(t => (
                <div key={t.label}
                  className={`p-4 glass rounded-xl cursor-pointer transition-all duration-300 ${t.cls}`}>
                  <code className="text-xs code-font text-gray-400">{t.label}</code>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Click para animar">
            <div className="flex gap-3 justify-center">
              {['animate-bounce-in', 'animate-slide-up', 'animate-fade-in'].map(anim => (
                <button key={anim}
                  onClick={() => { setActive(null); setTimeout(() => setActive(anim), 10) }}
                  className="px-3 py-2 glass rounded-lg text-xs code-font text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  {anim.replace('animate-', '')}
                </button>
              ))}
            </div>
            {active && (
              <div key={active + Date.now()} className={`${active} mt-4 p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white text-center font-bold`}>
                ¡{active}!
              </div>
            )}
          </LiveDemo>
        </div>
      </div>
    </SectionWrapper>
  )
}