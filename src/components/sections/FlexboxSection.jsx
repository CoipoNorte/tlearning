 
/* ============================================
   Sección 04: Flexbox
   
   Flexbox en Tailwind es directo:
   flex → display: flex
   Luego controlas dirección, alineación, wrap...
   ============================================ */
import { useState } from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'
import ClassTable from '../ui/ClassTable'

export default function FlexboxSection() {
  const [direction, setDirection] = useState('flex-row')
  const [justify, setJustify] = useState('justify-start')
  const [items, setItems] = useState('items-stretch')
  const [wrap, setWrap] = useState('flex-nowrap')

  const options = {
    direction: ['flex-row', 'flex-col', 'flex-row-reverse', 'flex-col-reverse'],
    justify: ['justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around', 'justify-evenly'],
    items: ['items-start', 'items-center', 'items-end', 'items-stretch'],
    wrap: ['flex-nowrap', 'flex-wrap', 'flex-wrap-reverse'],
  }

  return (
    <SectionWrapper id="flexbox" number="04" title="Flexbox"
      subtitle="Layout flexible en una dimensión" icon="📐" color="orange">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Flexbox en Tailwind</h3>
            <p className="text-gray-400 text-sm">
              Solo agrega <code className="text-orange-400 code-font bg-orange-500/10 px-1.5 py-0.5 rounded">flex</code> y 
              controla todo con clases. Sin escribir CSS.
            </p>
          </div>

          <ClassTable rows={[
            { cls: 'flex',            css: 'display: flex',                desc: 'Activar flexbox' },
            { cls: 'inline-flex',     css: 'display: inline-flex',        desc: 'Flex inline' },
            { cls: 'flex-row',        css: 'flex-direction: row',         desc: 'Horizontal (default)' },
            { cls: 'flex-col',        css: 'flex-direction: column',      desc: 'Vertical' },
            { cls: 'justify-center',  css: 'justify-content: center',    desc: 'Centrar eje principal' },
            { cls: 'justify-between', css: 'justify-content: space-between', desc: 'Espacio entre' },
            { cls: 'items-center',    css: 'align-items: center',        desc: 'Centrar eje cruzado' },
            { cls: 'flex-wrap',       css: 'flex-wrap: wrap',            desc: 'Permitir saltos' },
            { cls: 'gap-4',           css: 'gap: 1rem',                  desc: 'Espacio entre items' },
            { cls: 'flex-1',          css: 'flex: 1 1 0%',              desc: 'Crecer y llenar' },
            { cls: 'grow',            css: 'flex-grow: 1',              desc: 'Solo crecer' },
            { cls: 'shrink-0',        css: 'flex-shrink: 0',            desc: 'No encoger' },
          ]} />

          <CodeBlock title="flexbox.html" language="html"
            code={`<!-- Centrar horizontal y vertical (lo más usado) -->
<div class="flex items-center justify-center h-screen">
  <p>¡Centrado perfecto!</p>
</div>

<!-- Navbar horizontal con espacio -->
<nav class="flex items-center justify-between px-6 py-4">
  <div>Logo</div>
  <div class="flex gap-4">
    <a>Inicio</a>
    <a>Acerca</a>
    <a>Contacto</a>
  </div>
</nav>

<!-- Columna vertical con gap -->
<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items que se expanden -->
<div class="flex gap-4">
  <div class="flex-1">Se expande</div>
  <div class="w-48 shrink-0">Fijo 192px</div>
</div>`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Playground interactivo de Flexbox">
            <div className="space-y-4">
              {/* Controles */}
              {[
                { label: 'Direction', value: direction, setter: setDirection, opts: options.direction },
                { label: 'Justify', value: justify, setter: setJustify, opts: options.justify },
                { label: 'Items', value: items, setter: setItems, opts: options.items },
                { label: 'Wrap', value: wrap, setter: setWrap, opts: options.wrap },
              ].map(control => (
                <div key={control.label}>
                  <p className="text-xs text-gray-500 mb-1.5">{control.label}:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {control.opts.map(opt => (
                      <button key={opt} onClick={() => control.setter(opt)}
                        className={`px-2 py-1 rounded-md text-[10px] code-font transition-all ${
                          control.value === opt
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            : 'bg-white/5 text-gray-500 hover:text-white'
                        }`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Preview */}
              <div className={`flex ${direction} ${justify} ${items} ${wrap} gap-3 min-h-[200px] p-4 rounded-xl border-2 border-dashed border-orange-500/30 bg-orange-500/5`}>
                {[1, 2, 3, 4].map(n => (
                  <div key={n}
                    className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg px-4 py-3 text-white font-bold text-sm flex items-center justify-center min-w-[60px]"
                    style={{ height: n === 2 ? '80px' : n === 3 ? '50px' : '60px' }}>
                    {n}
                  </div>
                ))}
              </div>

              {/* Clases generadas */}
              <div className="p-2 rounded-lg bg-white/5">
                <code className="text-xs code-font text-gray-400">
                  class=&quot;flex {direction} {justify} {items} {wrap} gap-3&quot;
                </code>
              </div>
            </div>
          </LiveDemo>
        </div>
      </div>
    </SectionWrapper>
  )
}