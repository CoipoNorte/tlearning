 
/* ============================================
   Sección 07: Bordes y Rounded
   ============================================ */
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'
import ClassTable from '../ui/ClassTable'

export default function BordersSection() {
  return (
    <SectionWrapper id="borders" number="07" title="Bordes y Rounded"
      subtitle="Bordes, esquinas y divide" icon="🔳" color="teal">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ClassTable rows={[
            { cls: 'border',        css: 'border-width: 1px',       desc: 'Borde 1px' },
            { cls: 'border-2',      css: 'border-width: 2px',       desc: 'Borde 2px' },
            { cls: 'border-t',      css: 'border-top-width: 1px',   desc: 'Solo arriba' },
            { cls: 'border-dashed', css: 'border-style: dashed',    desc: 'Borde punteado' },
            { cls: 'rounded',       css: 'border-radius: 0.25rem',  desc: '4px' },
            { cls: 'rounded-lg',    css: 'border-radius: 0.5rem',   desc: '8px' },
            { cls: 'rounded-xl',    css: 'border-radius: 0.75rem',  desc: '12px' },
            { cls: 'rounded-2xl',   css: 'border-radius: 1rem',     desc: '16px' },
            { cls: 'rounded-full',  css: 'border-radius: 9999px',   desc: 'Círculo' },
            { cls: 'ring-2',        css: 'box-shadow ring',          desc: 'Ring outline' },
            { cls: 'divide-y',      css: 'border entre hijos',      desc: 'Divisor vertical' },
            { cls: 'outline-2',     css: 'outline-width: 2px',      desc: 'Outline' },
          ]} />

          <CodeBlock title="borders.html" language="html"
            code={`<!-- Bordes básicos -->
<div class="border border-gray-700">Default</div>
<div class="border-2 border-cyan-500">Cyan 2px</div>
<div class="border-t border-white/10">Solo arriba</div>
<div class="border border-dashed border-yellow-500">Dashed</div>

<!-- Rounded (esquinas) -->
<div class="rounded">4px</div>
<div class="rounded-lg">8px</div>
<div class="rounded-xl">12px</div>
<div class="rounded-full">Círculo/píldora</div>
<div class="rounded-t-xl">Solo arriba redondeado</div>

<!-- Ring (outline decorativo) -->
<button class="ring-2 ring-blue-500 ring-offset-2 ring-offset-black">
  Ring con offset
</button>

<!-- Divide (línea entre hijos) -->
<div class="divide-y divide-white/10">
  <div class="py-3">Item 1</div>
  <div class="py-3">Item 2</div>
  <div class="py-3">Item 3</div>
</div>`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Border radius visual">
            <div className="grid grid-cols-3 gap-4">
              {[
                { cls: 'rounded-none', label: 'none' },
                { cls: 'rounded-sm',   label: 'sm' },
                { cls: 'rounded',      label: 'default' },
                { cls: 'rounded-md',   label: 'md' },
                { cls: 'rounded-lg',   label: 'lg' },
                { cls: 'rounded-xl',   label: 'xl' },
                { cls: 'rounded-2xl',  label: '2xl' },
                { cls: 'rounded-3xl',  label: '3xl' },
                { cls: 'rounded-full', label: 'full' },
              ].map(r => (
                <div key={r.cls} className="text-center">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br from-teal-500 to-cyan-500 ${r.cls}`} />
                  <code className="text-[10px] text-gray-500 code-font mt-2 block">{r.label}</code>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Estilos de borde">
            <div className="space-y-3">
              {[
                { cls: 'border border-white/20', label: 'border (solid)' },
                { cls: 'border-2 border-tw-500', label: 'border-2 border-tw-500' },
                { cls: 'border border-dashed border-yellow-500', label: 'border-dashed' },
                { cls: 'border border-dotted border-pink-500', label: 'border-dotted' },
                { cls: 'ring-2 ring-blue-500', label: 'ring-2 ring-blue-500' },
                { cls: 'ring-2 ring-purple-500 ring-offset-2 ring-offset-dark-900', label: 'ring + offset' },
              ].map(b => (
                <div key={b.label} className={`${b.cls} rounded-lg p-3 flex items-center justify-between`}>
                  <code className="text-xs code-font text-gray-400">{b.label}</code>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Divide (separador entre hijos)">
            <div className="divide-y divide-white/10 rounded-xl overflow-hidden glass">
              {['Item primero', 'Item segundo', 'Item tercero', 'Item cuarto'].map((item, i) => (
                <div key={i} className="px-4 py-3 hover:bg-white/5 transition-colors">
                  <p className="text-sm text-white">{item}</p>
                </div>
              ))}
            </div>
          </LiveDemo>
        </div>
      </div>
    </SectionWrapper>
  )
}