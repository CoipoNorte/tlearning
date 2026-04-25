 
/* ============================================
   Sección 03: Spacing (Padding, Margin, Gap)
   
   El sistema de spacing de Tailwind usa una escala
   donde cada número = 0.25rem (4px):
   
   1 = 0.25rem (4px)
   2 = 0.5rem  (8px)
   4 = 1rem    (16px)
   8 = 2rem    (32px)
   
   Prefijos:
   p = padding,  m = margin
   t/b/l/r = top/bottom/left/right
   x = horizontal, y = vertical
   ============================================ */
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'
import ClassTable from '../ui/ClassTable'

export default function SpacingSection() {
  const spacings = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20]

  return (
    <SectionWrapper id="spacing" number="03" title="Spacing"
      subtitle="Padding, Margin, Gap y Sizing" icon="📏" color="green">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Sistema de Espaciado</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cada unidad = <code className="text-green-400 code-font bg-green-500/10 px-1.5 py-0.5 rounded">0.25rem (4px)</code>. 
              Así <code className="text-green-400 code-font bg-green-500/10 px-1.5 py-0.5 rounded">p-4</code> = 
              1rem = 16px de padding.
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-white/5 code-font text-center">
                <span className="text-blue-400">p-</span> padding
              </div>
              <div className="p-2 rounded-lg bg-white/5 code-font text-center">
                <span className="text-green-400">m-</span> margin
              </div>
              <div className="p-2 rounded-lg bg-white/5 code-font text-center">
                <span className="text-yellow-400">gap-</span> gap
              </div>
              <div className="p-2 rounded-lg bg-white/5 code-font text-center">
                <span className="text-pink-400">w-</span> width
              </div>
              <div className="p-2 rounded-lg bg-white/5 code-font text-center">
                <span className="text-purple-400">h-</span> height
              </div>
              <div className="p-2 rounded-lg bg-white/5 code-font text-center">
                <span className="text-cyan-400">size-</span> ambos
              </div>
            </div>
          </div>

          <ClassTable rows={[
            { cls: 'p-4',       css: 'padding: 1rem',               desc: 'Todos los lados' },
            { cls: 'px-6',      css: 'padding-left/right: 1.5rem',  desc: 'Horizontal' },
            { cls: 'py-2',      css: 'padding-top/bottom: 0.5rem',  desc: 'Vertical' },
            { cls: 'pt-8',      css: 'padding-top: 2rem',           desc: 'Solo arriba' },
            { cls: 'm-auto',    css: 'margin: auto',                desc: 'Centrar' },
            { cls: '-mt-4',     css: 'margin-top: -1rem',           desc: 'Margen negativo' },
            { cls: 'gap-4',     css: 'gap: 1rem',                   desc: 'Espacio en flex/grid' },
            { cls: 'w-full',    css: 'width: 100%',                 desc: 'Ancho completo' },
            { cls: 'h-screen',  css: 'height: 100vh',               desc: 'Alto de pantalla' },
            { cls: 'min-h-0',   css: 'min-height: 0',               desc: 'Mínimo' },
            { cls: 'max-w-7xl', css: 'max-width: 80rem',            desc: 'Ancho máximo' },
          ]} />

          <CodeBlock title="spacing.html" language="html"
            code={`<!-- Padding: todos los lados -->
<div class="p-4">16px todos</div>
<div class="p-8">32px todos</div>

<!-- Padding: ejes -->
<div class="px-6 py-2">Horizontal y vertical</div>
<div class="pt-4 pb-8">Top 16px, bottom 32px</div>

<!-- Margin -->
<div class="m-4">Margin 16px</div>
<div class="mx-auto">Centrado horizontal</div>
<div class="-mt-4">Margin top NEGATIVO</div>

<!-- Width y Height -->
<div class="w-full">100% ancho</div>
<div class="w-1/2">50% ancho</div>
<div class="w-64">16rem = 256px</div>
<div class="h-screen">100vh alto</div>
<div class="max-w-md">max-width: 28rem</div>

<!-- Space between (gap sin flex) -->
<div class="space-y-4">
  <div>Cada hijo tiene gap vertical</div>
  <div>de 16px entre ellos</div>
</div>`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Escala de spacing visual">
            <div className="space-y-3">
              <p className="text-xs text-gray-500 mb-2">Cada unidad = 4px:</p>
              {spacings.map(s => (
                <div key={s} className="flex items-center gap-3">
                  <code className="text-xs text-gray-500 code-font w-8 text-right">{s}</code>
                  <div className="flex-1 h-6 bg-white/5 rounded overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded transition-all`}
                      style={{ width: `${Math.min(s * 6, 100)}%` }} />
                  </div>
                  <code className="text-xs text-gray-400 code-font w-16">{s * 4}px</code>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Padding visual">
            <div className="space-y-4">
              {[2, 4, 6, 8].map(p => (
                <div key={p} className="bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className={`bg-green-500/20 rounded-lg border border-dashed border-green-500/40 p-${p}`}>
                    <div className="bg-green-500 rounded px-2 py-1 text-center text-xs text-white font-bold">
                      p-{p} = {p * 4}px
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Width fracciones">
            <div className="space-y-2">
              {[
                { cls: 'w-full', label: 'w-full (100%)' },
                { cls: 'w-3/4',  label: 'w-3/4 (75%)' },
                { cls: 'w-1/2',  label: 'w-1/2 (50%)' },
                { cls: 'w-1/3',  label: 'w-1/3 (33%)' },
                { cls: 'w-1/4',  label: 'w-1/4 (25%)' },
              ].map(item => (
                <div key={item.cls} className="flex items-center gap-2">
                  <div className={`${item.cls} h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-md flex items-center justify-center`}>
                    <span className="text-[10px] text-white font-bold code-font">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </LiveDemo>
        </div>
      </div>
    </SectionWrapper>
  )
}