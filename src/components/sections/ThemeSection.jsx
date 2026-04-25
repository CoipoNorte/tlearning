 
/* ============================================
   Sección 09: @theme
   
   LA GRAN NOVEDAD DE TW v4
   @theme reemplaza a tailwind.config.js
   Todo se configura directamente en CSS
   ============================================ */
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function ThemeSection() {
  return (
    <SectionWrapper id="theme" number="09" title="@theme"
      subtitle="Personalizar el sistema de diseño" icon="🎛️" color="violet">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">@theme = tu tailwind.config.js</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              En v4 ya <strong className="text-white">no necesitas</strong> tailwind.config.js. 
              Todo se define en el CSS con <code className="text-violet-400 code-font bg-violet-500/10 px-1.5 py-0.5 rounded">@theme</code>.
              Las variables que definas se convierten automáticamente en clases de Tailwind.
            </p>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded-lg bg-violet-500/10 code-font text-violet-300">
                --color-brand → bg-brand, text-brand, border-brand
              </div>
              <div className="p-2 rounded-lg bg-violet-500/10 code-font text-violet-300">
                --animate-wiggle → animate-wiggle
              </div>
              <div className="p-2 rounded-lg bg-violet-500/10 code-font text-violet-300">
                --font-display → font-display
              </div>
            </div>
          </div>

          <CodeBlock title="index.css" language="css"
            code={`@import "tailwindcss";

@theme {
  /* ---- COLORES ----
     Define --color-{nombre} y automáticamente
     tendrás bg-{nombre}, text-{nombre}, border-{nombre}
  */
  --color-brand-50:  #ecfeff;
  --color-brand-100: #cffafe;
  --color-brand-500: #06b6d4;
  --color-brand-900: #164e63;
  
  --color-success: #22c55e;
  --color-danger:  #ef4444;
  --color-warning: #f59e0b;

  /* ---- FUENTES ----
     Define --font-{nombre}
     Genera la clase font-{nombre}
  */
  --font-display: 'Poppins', sans-serif;
  --font-code: 'JetBrains Mono', monospace;

  /* ---- ANIMACIONES ----
     Define --animate-{nombre} con duración
     Genera la clase animate-{nombre}
  */
  --animate-wiggle: wiggle 1s ease-in-out infinite;
  --animate-slide-in: slideIn 0.3s ease-out;

  /* ---- KEYFRAMES ----
     Los defines dentro de @theme
  */
  @keyframes wiggle {
    0%, 100% { transform: rotate(-3deg); }
    50%      { transform: rotate(3deg); }
  }

  @keyframes slideIn {
    from { transform: translateX(-100%); opacity: 0; }
    to   { transform: translateX(0);     opacity: 1; }
  }

  /* ---- BREAKPOINTS ----
     Personalizar o agregar breakpoints
  */
  --breakpoint-xs: 480px;
  --breakpoint-3xl: 1920px;
}

/* Luego las usas como cualquier clase de Tailwind: */
/* <div class="bg-brand-500 font-display animate-wiggle"> */
/* <div class="text-danger border-success"> */
/* <div class="xs:hidden 3xl:block"> */`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Variables @theme en acción">
            <div className="space-y-4">
              <p className="text-xs text-gray-500">Colores custom definidos con @theme:</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-lg bg-tw-500 text-center text-white text-xs font-bold">
                  bg-tw-500
                </div>
                <div className="p-3 rounded-lg bg-tw-700 text-center text-white text-xs font-bold">
                  bg-tw-700
                </div>
                <div className="p-3 rounded-lg bg-tw-900 text-center text-white text-xs font-bold">
                  bg-tw-900
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-lg bg-dark-700 text-center text-xs font-bold text-white">
                  bg-dark-700
                </div>
                <div className="p-3 rounded-lg bg-dark-800 text-center text-xs font-bold text-white">
                  bg-dark-800
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4">Animaciones custom:</p>
              <div className="flex gap-3">
                <div className="animate-float bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl p-3 text-white text-xs font-bold text-center">
                  animate-float
                </div>
                <div className="animate-pulse-glow bg-dark-700 rounded-xl p-3 text-tw-400 text-xs font-bold text-center border border-tw-500/20">
                  animate-pulse-glow
                </div>
              </div>
            </div>
          </LiveDemo>

          <CodeBlock title="v3 → v4 comparación" language="css"
            code={`/* ========= ANTES (v3) =========
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#06b6d4',
      },
      animation: {
        wiggle: 'wiggle 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
}
*/

/* ========= AHORA (v4) =========
   Todo en CSS, sin archivos JS  */
@theme {
  --color-brand: #06b6d4;
  --animate-wiggle: wiggle 1s infinite;
  @keyframes wiggle {
    0%, 100% { transform: rotate(-3deg); }
    50%      { transform: rotate(3deg); }
  }
}
/* Menos archivos, más simple, más rápido ✨ */`} />

          <div className="glass rounded-2xl p-6">
            <h4 className="text-white font-bold mb-3">💡 Tips de @theme</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2"><span className="text-green-400">✓</span> Naming: --color-{'{nombre}'} genera bg/text/border-{'{nombre}'}</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> Soporta tonos: --color-brand-500 → bg-brand-500</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> Keyframes van DENTRO de @theme</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> Breakpoints custom con --breakpoint-{'{nombre}'}</li>
              <li className="flex gap-2"><span className="text-yellow-400">⚠️</span> @theme solo en el archivo CSS principal</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}