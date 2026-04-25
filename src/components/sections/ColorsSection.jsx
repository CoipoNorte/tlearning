/* ============================================
   Sección 02: Colores
   
   Tailwind tiene un sistema de colores numérico:
   - 50 (más claro) → 950 (más oscuro)
   - Se usa con prefijos: bg-, text-, border-...
   
   Formato: {prefijo}-{color}-{intensidad}
   Ejemplo: bg-blue-500, text-red-400, border-green-600
   
   Opacidad: bg-blue-500/50 = 50% opacidad
   ============================================ */
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'
import ClassTable from '../ui/ClassTable'

export default function ColorsSection() {
  // Paleta de colores de Tailwind para mostrar
  const palettes = {
    red:    { shades: [300, 400, 500, 600, 700] },
    orange: { shades: [300, 400, 500, 600, 700] },
    amber:  { shades: [300, 400, 500, 600, 700] },
    yellow: { shades: [300, 400, 500, 600, 700] },
    green:  { shades: [300, 400, 500, 600, 700] },
    teal:   { shades: [300, 400, 500, 600, 700] },
    cyan:   { shades: [300, 400, 500, 600, 700] },
    blue:   { shades: [300, 400, 500, 600, 700] },
    indigo: { shades: [300, 400, 500, 600, 700] },
    purple: { shades: [300, 400, 500, 600, 700] },
    pink:   { shades: [300, 400, 500, 600, 700] },
    rose:   { shades: [300, 400, 500, 600, 700] },
  }

  return (
    <SectionWrapper id="colors" number="02" title="Colores"
      subtitle="Sistema de colores y opacidad" icon="🎨" color="purple">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Sistema de Colores</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Tailwind incluye <span className="text-purple-400 font-medium">22 paletas de colores</span> con 
              11 tonos cada una (50-950). Se combinan con prefijos para controlar qué propiedad CSS afectan.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-white/5 code-font">
                <span className="text-blue-400">bg-</span>
                <span className="text-gray-400">background</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 code-font">
                <span className="text-green-400">text-</span>
                <span className="text-gray-400">color</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 code-font">
                <span className="text-yellow-400">border-</span>
                <span className="text-gray-400">border-color</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 code-font">
                <span className="text-pink-400">ring-</span>
                <span className="text-gray-400">outline ring</span>
              </div>
            </div>
          </div>

          <ClassTable rows={[
            { cls: 'bg-blue-500',    css: 'background-color: #3b82f6', desc: 'Fondo azul medio' },
            { cls: 'text-red-400',   css: 'color: #f87171',            desc: 'Texto rojo claro' },
            { cls: 'border-green-600', css: 'border-color: #16a34a',   desc: 'Borde verde oscuro' },
            { cls: 'bg-blue-500/50', css: 'background: rgb(59 130 246 / 0.5)', desc: '50% opacidad' },
            { cls: 'bg-black/20',    css: 'background: rgb(0 0 0 / 0.2)', desc: 'Negro 20%' },
            { cls: 'text-white/70',  css: 'color: rgb(255 255 255 / 0.7)', desc: 'Blanco 70%' },
          ]} />

          <CodeBlock title="colores.html" language="html"
            code={`<!-- Fondo de color -->
<div class="bg-blue-500">Azul</div>
<div class="bg-red-600">Rojo más oscuro</div>

<!-- Texto de color -->
<p class="text-green-400">Verde claro</p>
<p class="text-gray-500">Gris medio</p>

<!-- Opacidad con / (slash) -->
<div class="bg-purple-500/30">Purple 30%</div>
<div class="bg-black/50">Negro semitransparente</div>

<!-- Gradientes -->
<div class="bg-gradient-to-r from-cyan-500 to-blue-500">
  Gradiente horizontal
</div>
<div class="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
  Gradiente diagonal con punto medio
</div>

<!-- Colores personalizados con @theme -->
@theme {
  --color-brand: #06b6d4;
  --color-brand-light: #67e8f9;
}
<div class="bg-brand">Color custom</div>`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Paleta completa de Tailwind">
            <div className="space-y-2">
              {Object.entries(palettes).map(([name, { shades }]) => (
                <div key={name} className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-14 text-right code-font">{name}</span>
                  <div className="flex gap-1 flex-1">
                    {shades.map(shade => (
                      <div key={shade}
                        className={`flex-1 h-8 rounded-md bg-${name}-${shade} transition-all hover:scale-110 cursor-pointer`}
                        title={`${name}-${shade}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Opacidad y gradientes">
            <div className="space-y-3">
              <p className="text-xs text-gray-500">Opacidad con /valor:</p>
              <div className="flex gap-2">
                {[100, 80, 60, 40, 20].map(op => (
                  <div key={op} className="flex-1 text-center">
                    <div className={`h-12 rounded-lg bg-tw-500/${op} mb-1`} />
                    <span className="text-[10px] text-gray-500 code-font">/{op}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-4">Gradientes:</p>
              <div className="space-y-2">
                <div className="h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-xs text-white font-medium">
                  from-cyan-500 to-blue-500
                </div>
                <div className="h-10 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-xs text-white font-medium">
                  from-purple-500 via-pink-500 to-red-500
                </div>
                <div className="h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xs text-white font-medium">
                  bg-gradient-to-br (diagonal)
                </div>
              </div>
            </div>
          </LiveDemo>
        </div>
      </div>
    </SectionWrapper>
  )
}