 
/* ============================================
   Sección 13: @utility
   
   @utility crea clases reutilizables en TW v4.
   Reemplaza a @apply dentro de @layer components.
   Cada @utility es UNA clase que puedes usar en HTML.
   ============================================ */
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function UtilitySection() {
  return (
    <SectionWrapper id="utility" number="13" title="@utility"
      subtitle="Crear clases personalizadas" icon="🧰" color="sky">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">@utility = tu propia clase</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Con <code className="text-sky-400 code-font bg-sky-500/10 px-1.5 py-0.5 rounded">@utility</code> creas 
              clases CSS propias que funcionan exactamente como las de Tailwind, incluyendo soporte para 
              <span className="text-sky-400 font-medium"> hover:, md:, dark:</span> etc.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-red-400 font-bold mb-1">❌ v3</p>
                <code className="text-red-300/70">@apply bg-white/10...</code>
              </div>
              <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-green-400 font-bold mb-1">✅ v4</p>
                <code className="text-green-300/70">@utility glass {'{ }'}</code>
              </div>
            </div>
          </div>

          <CodeBlock title="index.css" language="css"
            code={`@import "tailwindcss";

/* ---- @utility: crear clases propias ---- */

/* Efecto glass/cristal */
@utility glass {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Texto con gradiente */
@utility gradient-text {
  background: linear-gradient(to right, #06b6d4, #818cf8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Botón base */
@utility btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 150ms;
}

/* Fuente de código */
@utility code-font {
  font-family: 'JetBrains Mono', monospace;
}

/* Resplandor neón */
@utility neon-glow {
  text-shadow:
    0 0 10px rgba(6, 182, 212, 0.5),
    0 0 20px rgba(6, 182, 212, 0.3);
}

/* ---- USO EN HTML ---- */
/* <div class="glass rounded-xl p-4">Glass</div> */
/* <h1 class="gradient-text text-4xl">Título</h1> */
/* <button class="btn-base bg-blue-500 text-white 
                   hover:bg-blue-600">Click</button> */
/* <code class="code-font text-sm">código</code> */`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Clases @utility en acción">
            <div className="space-y-4">
              <p className="text-xs text-gray-500">glass:</p>
              <div className="glass rounded-xl p-4 text-white text-sm">
                Este div usa la clase <code className="code-font text-tw-400">glass</code> definida con @utility
              </div>

              <p className="text-xs text-gray-500">glass-strong:</p>
              <div className="glass-strong rounded-xl p-4 text-white text-sm">
                Versión <code className="code-font text-tw-400">glass-strong</code> con más blur y opacidad
              </div>

              <p className="text-xs text-gray-500">gradient-text:</p>
              <p className="gradient-text text-3xl font-black">Texto Gradiente</p>

              <p className="text-xs text-gray-500">neon-glow:</p>
              <p className="neon-glow text-3xl font-black text-tw-400">Efecto Neón</p>

              <p className="text-xs text-gray-500">code-font:</p>
              <code className="code-font text-sm text-gray-300 bg-white/5 px-3 py-1 rounded-lg">
                const x = &quot;JetBrains Mono&quot;
              </code>
            </div>
          </LiveDemo>

          <LiveDemo title="Combinar @utility con clases TW">
            <div className="space-y-3">
              <div className="glass rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer">
                <p className="text-sm text-white">glass + hover:bg-white/10 + transition-all</p>
              </div>
              <div className="glass rounded-xl p-4 border-tw-500/30 border">
                <p className="gradient-text font-bold">glass + gradient-text + border custom</p>
              </div>
            </div>
          </LiveDemo>

          <div className="glass rounded-2xl p-6">
            <h4 className="text-white font-bold mb-3">💡 @utility vs CSS normal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2"><span className="text-green-400">✓</span> Funciona con hover:, md:, dark: etc.</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> Se purga automáticamente si no se usa</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> Tiene prioridad correcta en cascade</li>
              <li className="flex gap-2"><span className="text-yellow-400">⚠️</span> Solo una propiedad lógica por utility</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}