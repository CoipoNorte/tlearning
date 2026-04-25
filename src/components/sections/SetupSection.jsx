 
/* ============================================
   Sección 01: Setup / Instalación
   
   Tailwind v4 cambió COMPLETAMENTE la instalación.
   Ya no necesitas tailwind.config.js ni postcss.config.js
   Todo se maneja desde el CSS con @theme y @import.
   ============================================ */
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'

export default function SetupSection() {
  return (
    <SectionWrapper id="setup" number="01" title="Setup"
      subtitle="Instalación en Vite" icon="🚀" color="cyan">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Diferencias v3 vs v4 */}
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">TW v4 vs v3 — ¿Qué cambió?</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-red-400 font-bold text-xs mb-2">❌ v3 (viejo)</p>
                <ul className="space-y-1 text-red-300/70 text-xs">
                  <li>• tailwind.config.js</li>
                  <li>• postcss.config.js</li>
                  <li>• @tailwind base;</li>
                  <li>• @tailwind components;</li>
                  <li>• @tailwind utilities;</li>
                  <li>• @apply para customs</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-green-400 font-bold text-xs mb-2">✅ v4 (nuevo)</p>
                <ul className="space-y-1 text-green-300/70 text-xs">
                  <li>• @import &quot;tailwindcss&quot;</li>
                  <li>• @theme {'{ }'} para config</li>
                  <li>• @utility para customs</li>
                  <li>• Plugin de Vite directo</li>
                  <li>• Sin archivos config</li>
                  <li>• Más rápido 🔥</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comandos de instalación */}
          <CodeBlock title="Terminal" language="bash"
            code={`# 1. Crear proyecto
npm create vite@latest mi-proyecto -- --template react
cd mi-proyecto

# 2. Instalar Tailwind v4
npm install -D tailwindcss@latest @tailwindcss/vite

# 3. Listo! No más configs extra ✨`} />

          <CodeBlock title="vite.config.js" language="js"
            code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ← Solo agregar el plugin
  ],
})`} />
        </div>

        <div className="space-y-6">
          <CodeBlock title="src/index.css" language="css"
            code={`/* Eso es TODO lo que necesitas para empezar */
@import "tailwindcss";

/* Opcional: extender el tema */
@theme {
  --color-brand: #06b6d4;
  --animate-wiggle: wiggle 1s ease-in-out infinite;
  
  @keyframes wiggle {
    0%, 100% { transform: rotate(-3deg); }
    50%      { transform: rotate(3deg); }
  }
}

/* Opcional: crear utilidades propias */
@utility glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px);
}`} />

          <LiveDemo title="¡Ya funciona!">
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Con esas 3 líneas ya puedes usar todas las clases:</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-tw-500 rounded-xl text-white text-center font-bold text-sm">
                  bg-tw-500
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white text-center font-bold text-sm">
                  gradient
                </div>
                <div className="p-4 rounded-xl text-center font-bold text-sm border-2 border-tw-500 text-tw-500">
                  border-tw-500
                </div>
                <div className="p-4 rounded-xl text-center font-bold text-sm bg-white/10 backdrop-blur-xl text-white">
                  backdrop-blur
                </div>
              </div>
              <div className="p-3 rounded-lg bg-tw-500/10 border border-tw-500/20">
                <p className="text-tw-300 text-xs">
                  💡 Tailwind v4 es hasta <strong>10x más rápido</strong> que v3 en compilación.
                  Usa Rust internamente con el motor Lightning CSS.
                </p>
              </div>
            </div>
          </LiveDemo>
        </div>
      </div>
    </SectionWrapper>
  )
}