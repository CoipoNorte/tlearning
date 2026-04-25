 
/* ============================================
   Sección 11: Responsive Design
   
   Tailwind usa MOBILE FIRST:
   - Sin prefijo = todos los tamaños
   - sm:  = 640px+
   - md:  = 768px+
   - lg:  = 1024px+
   - xl:  = 1280px+
   - 2xl: = 1536px+
   ============================================ */
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'
import ClassTable from '../ui/ClassTable'

export default function ResponsiveSection() {
  return (
    <SectionWrapper id="responsive" number="11" title="Responsive"
      subtitle="Mobile first y breakpoints" icon="📱" color="emerald">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Mobile First</h3>
            <p className="text-gray-400 text-sm">
              Escribe primero para <span className="text-emerald-400 font-medium">móvil</span>, luego 
              agrega prefijos para pantallas más grandes. Cada breakpoint es un <strong className="text-white">mínimo</strong>.
            </p>
          </div>

          <ClassTable rows={[
            { cls: '(sin prefijo)',  css: 'Todos los tamaños',   desc: '0px+' },
            { cls: 'sm:',            css: '@media (min-width: 640px)',  desc: 'Teléfono grande' },
            { cls: 'md:',            css: '@media (min-width: 768px)',  desc: 'Tablet' },
            { cls: 'lg:',            css: '@media (min-width: 1024px)', desc: 'Laptop' },
            { cls: 'xl:',            css: '@media (min-width: 1280px)', desc: 'Desktop' },
            { cls: '2xl:',           css: '@media (min-width: 1536px)', desc: 'Monitor grande' },
          ]} />

          <CodeBlock title="responsive.html" language="html"
            code={`<!-- Grid responsive: 1 col → 2 col → 3 col -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<!-- Texto: pequeño en móvil, grande en desktop -->
<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">
  Título responsive
</h1>

<!-- Padding: menos en móvil, más en desktop -->
<div class="px-4 md:px-8 lg:px-16">
  Contenido con padding responsive
</div>

<!-- Flex: columna en móvil, fila en desktop -->
<div class="flex flex-col md:flex-row gap-4">
  <div>Sidebar</div>
  <div class="flex-1">Main content</div>
</div>

<!-- Ocultar/mostrar según pantalla -->
<div class="hidden md:block">Solo en tablet+</div>
<div class="block md:hidden">Solo en móvil</div>

<!-- Breakpoints custom con @theme -->
@theme {
  --breakpoint-xs: 480px;
  --breakpoint-3xl: 1920px;
}
<div class="xs:text-lg 3xl:text-3xl">Custom</div>`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Redimensiona tu navegador para ver">
            <div className="space-y-4">
              {/* Indicador de breakpoint actual */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center font-bold">
                <span className="sm:hidden">📱 Móvil (base)</span>
                <span className="hidden sm:inline md:hidden">📱 sm: 640px+</span>
                <span className="hidden md:inline lg:hidden">📋 md: 768px+</span>
                <span className="hidden lg:inline xl:hidden">💻 lg: 1024px+</span>
                <span className="hidden xl:inline 2xl:hidden">🖥️ xl: 1280px+</span>
                <span className="hidden 2xl:inline">🖥️ 2xl: 1536px+</span>
              </div>

              {/* Grid responsive en acción */}
              <p className="text-xs text-gray-500">grid-cols-1 md:grid-cols-2 lg:grid-cols-4:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(n => (
                  <div key={n} className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-3 text-center text-emerald-300 text-xs font-bold">
                    Item {n}
                  </div>
                ))}
              </div>

              {/* Texto responsive */}
              <p className="text-xs text-gray-500">text-lg md:text-2xl lg:text-4xl:</p>
              <p className="text-lg md:text-2xl lg:text-4xl font-bold text-white transition-all">
                Texto responsive
              </p>

              {/* Visibilidad */}
              <p className="text-xs text-gray-500">Visibilidad condicional:</p>
              <div className="space-y-2">
                <div className="md:hidden p-2 rounded-lg bg-red-500/20 text-red-300 text-xs text-center">
                  Solo visible en móvil (hidden en md+)
                </div>
                <div className="hidden md:block p-2 rounded-lg bg-green-500/20 text-green-300 text-xs text-center">
                  Solo visible en tablet+ (hidden en móvil)
                </div>
                <div className="hidden lg:block p-2 rounded-lg bg-blue-500/20 text-blue-300 text-xs text-center">
                  Solo visible en laptop+ (hidden en tablet/móvil)
                </div>
              </div>
            </div>
          </LiveDemo>

          <div className="glass rounded-2xl p-6">
            <h4 className="text-white font-bold mb-3">📐 Patrón: Mobile First</h4>
            <div className="space-y-2 text-sm text-gray-400 code-font">
              <p><span className="text-gray-600">/* Primero mobile */</span></p>
              <p>class=&quot;<span className="text-white">grid-cols-1</span></p>
              <p className="pl-6"><span className="text-emerald-400">md:</span><span className="text-white">grid-cols-2</span></p>
              <p className="pl-6"><span className="text-emerald-400">lg:</span><span className="text-white">grid-cols-3</span>&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}