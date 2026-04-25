 
/* ============================================
   Sección 05: Grid
   
   CSS Grid para layouts de 2 dimensiones.
   grid + grid-cols-{n} es lo básico.
   ============================================ */
import { useState } from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'
import ClassTable from '../ui/ClassTable'

export default function GridSection() {
  const [cols, setCols] = useState(3)

  return (
    <SectionWrapper id="grid" number="05" title="Grid"
      subtitle="Layout de 2 dimensiones" icon="🔲" color="blue">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">CSS Grid en Tailwind</h3>
            <p className="text-gray-400 text-sm">
              Grid es perfecto para layouts de filas y columnas. 
              <code className="text-blue-400 code-font bg-blue-500/10 px-1.5 py-0.5 rounded ml-1">grid grid-cols-3 gap-4</code> crea 
              una grilla de 3 columnas con 16px de espacio.
            </p>
          </div>

          <ClassTable rows={[
            { cls: 'grid',            css: 'display: grid',                       desc: 'Activar grid' },
            { cls: 'grid-cols-3',     css: 'grid-template-columns: repeat(3, 1fr)', desc: '3 columnas iguales' },
            { cls: 'grid-cols-12',    css: 'grid-template-columns: repeat(12, 1fr)', desc: 'Sistema de 12 cols' },
            { cls: 'grid-rows-2',     css: 'grid-template-rows: repeat(2, 1fr)',    desc: '2 filas iguales' },
            { cls: 'col-span-2',      css: 'grid-column: span 2',               desc: 'Ocupar 2 columnas' },
            { cls: 'col-span-full',   css: 'grid-column: 1 / -1',               desc: 'Ocupar todas' },
            { cls: 'row-span-2',      css: 'grid-row: span 2',                  desc: 'Ocupar 2 filas' },
            { cls: 'gap-4',           css: 'gap: 1rem',                          desc: 'Espacio entre celdas' },
            { cls: 'gap-x-4',         css: 'column-gap: 1rem',                  desc: 'Gap solo horizontal' },
            { cls: 'gap-y-2',         css: 'row-gap: 0.5rem',                   desc: 'Gap solo vertical' },
          ]} />

          <CodeBlock title="grid.html" language="html"
            code={`<!-- Grid básico: 3 columnas -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>

<!-- Item que ocupa 2 columnas -->
<div class="grid grid-cols-4 gap-4">
  <div class="col-span-2">Ancho doble</div>
  <div>Normal</div>
  <div>Normal</div>
</div>

<!-- Grid responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<!-- Layout tipo dashboard -->
<div class="grid grid-cols-4 grid-rows-3 gap-4 h-screen">
  <div class="col-span-4">Header</div>
  <div class="row-span-2">Sidebar</div>
  <div class="col-span-3 row-span-2">Main</div>
</div>`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Columnas interactivas">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <p className="text-xs text-gray-500">Columnas:</p>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <button key={n} onClick={() => setCols(n)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                        cols === n ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`grid gap-2`}
                style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i}
                    className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg p-3 text-white text-xs font-bold text-center">
                    {i + 1}
                  </div>
                ))}
              </div>

              <div className="p-2 rounded-lg bg-white/5">
                <code className="text-xs code-font text-gray-400">
                  class=&quot;grid grid-cols-{cols} gap-2&quot;
                </code>
              </div>
            </div>
          </LiveDemo>

          <LiveDemo title="col-span en acción">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4 bg-blue-500/20 border border-blue-500/30 rounded-lg p-2 text-center text-xs text-blue-300 font-medium">
                col-span-4 (header)
              </div>
              <div className="col-span-1 row-span-2 bg-purple-500/20 border border-purple-500/30 rounded-lg p-2 text-center text-xs text-purple-300 font-medium flex items-center justify-center">
                span-1<br/>row-2
              </div>
              <div className="col-span-3 bg-green-500/20 border border-green-500/30 rounded-lg p-2 text-center text-xs text-green-300 font-medium">
                col-span-3
              </div>
              <div className="col-span-2 bg-orange-500/20 border border-orange-500/30 rounded-lg p-2 text-center text-xs text-orange-300 font-medium">
                col-span-2
              </div>
              <div className="bg-pink-500/20 border border-pink-500/30 rounded-lg p-2 text-center text-xs text-pink-300 font-medium">
                1
              </div>
              <div className="col-span-4 bg-gray-500/20 border border-gray-500/30 rounded-lg p-2 text-center text-xs text-gray-300 font-medium">
                col-span-4 (footer)
              </div>
            </div>
          </LiveDemo>
        </div>
      </div>
    </SectionWrapper>
  )
}