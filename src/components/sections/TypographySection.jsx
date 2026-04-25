 
/* ============================================
   Sección 06: Tipografía
   ============================================ */
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'
import ClassTable from '../ui/ClassTable'

export default function TypographySection() {
  return (
    <SectionWrapper id="typography" number="06" title="Tipografía"
      subtitle="Texto, fuentes y estilos" icon="✍️" color="pink">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ClassTable rows={[
            { cls: 'text-xs',        css: 'font-size: 0.75rem',    desc: '12px' },
            { cls: 'text-sm',        css: 'font-size: 0.875rem',   desc: '14px' },
            { cls: 'text-base',      css: 'font-size: 1rem',       desc: '16px (default)' },
            { cls: 'text-lg',        css: 'font-size: 1.125rem',   desc: '18px' },
            { cls: 'text-xl',        css: 'font-size: 1.25rem',    desc: '20px' },
            { cls: 'text-3xl',       css: 'font-size: 1.875rem',   desc: '30px' },
            { cls: 'text-5xl',       css: 'font-size: 3rem',       desc: '48px' },
            { cls: 'font-light',     css: 'font-weight: 300',      desc: 'Delgada' },
            { cls: 'font-bold',      css: 'font-weight: 700',      desc: 'Negrita' },
            { cls: 'font-black',     css: 'font-weight: 900',      desc: 'Extra negrita' },
            { cls: 'italic',         css: 'font-style: italic',    desc: 'Cursiva' },
            { cls: 'uppercase',      css: 'text-transform: uppercase', desc: 'MAYÚSCULAS' },
            { cls: 'tracking-wide',  css: 'letter-spacing: 0.025em', desc: 'Espaciado letras' },
            { cls: 'leading-relaxed',css: 'line-height: 1.625',   desc: 'Interlineado relajado' },
            { cls: 'text-center',    css: 'text-align: center',    desc: 'Centrar texto' },
            { cls: 'truncate',       css: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap', desc: 'Cortar con ...' },
            { cls: 'line-clamp-3',   css: 'líneas máx: 3',        desc: 'Máx 3 líneas' },
            { cls: 'underline',      css: 'text-decoration: underline', desc: 'Subrayado' },
          ]} />

          <CodeBlock title="typography.html" language="html"
            code={`<!-- Tamaños -->
<h1 class="text-5xl font-black">Título</h1>
<h2 class="text-3xl font-bold">Subtítulo</h2>
<p class="text-base text-gray-400">Párrafo normal</p>
<small class="text-xs text-gray-500">Pequeño</small>

<!-- Estilos -->
<p class="italic text-gray-300">Texto en cursiva</p>
<p class="uppercase tracking-widest">espaciado</p>
<p class="font-bold underline">Negrita subrayada</p>

<!-- Truncar texto largo -->
<p class="truncate w-48">
  Este texto se cortará con puntos suspensivos...
</p>

<!-- Limitar a N líneas -->
<p class="line-clamp-2">
  Este texto solo mostrará 2 líneas
  y el resto se ocultará con ...
</p>

<!-- Interlineado -->
<p class="leading-tight">Líneas juntas</p>
<p class="leading-relaxed">Líneas separadas</p>`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Escala tipográfica">
            <div className="space-y-3">
              {[
                { cls: 'text-xs', label: 'text-xs (12px)' },
                { cls: 'text-sm', label: 'text-sm (14px)' },
                { cls: 'text-base', label: 'text-base (16px)' },
                { cls: 'text-lg', label: 'text-lg (18px)' },
                { cls: 'text-xl', label: 'text-xl (20px)' },
                { cls: 'text-2xl', label: 'text-2xl (24px)' },
                { cls: 'text-3xl', label: 'text-3xl (30px)' },
                { cls: 'text-4xl', label: 'text-4xl (36px)' },
              ].map(t => (
                <div key={t.cls} className="flex items-baseline gap-3">
                  <code className="text-[10px] text-gray-500 code-font w-24 text-right shrink-0">{t.cls}</code>
                  <span className={`${t.cls} text-white font-medium`}>Tailwind CSS</span>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Font weights">
            <div className="space-y-2">
              {[
                { cls: 'font-light',    label: '300 light' },
                { cls: 'font-normal',   label: '400 normal' },
                { cls: 'font-medium',   label: '500 medium' },
                { cls: 'font-semibold', label: '600 semibold' },
                { cls: 'font-bold',     label: '700 bold' },
                { cls: 'font-extrabold',label: '800 extrabold' },
                { cls: 'font-black',    label: '900 black' },
              ].map(w => (
                <div key={w.cls} className="flex items-center gap-3">
                  <code className="text-[10px] text-gray-500 code-font w-28 text-right">{w.cls}</code>
                  <span className={`text-xl text-white ${w.cls}`}>Tailwind</span>
                  <span className="text-[10px] text-gray-600">{w.label}</span>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Truncate y line-clamp">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">truncate:</p>
                <p className="truncate text-white bg-white/5 p-2 rounded-lg text-sm">
                  Este es un texto muy largo que se cortará automáticamente con puntos suspensivos cuando no quepa en una sola línea
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">line-clamp-2:</p>
                <p className="line-clamp-2 text-white bg-white/5 p-2 rounded-lg text-sm">
                  Este texto se limita a máximo 2 líneas. Todo lo que exceda se ocultará con puntos suspensivos. 
                  Esta tercera línea no se verá porque el line-clamp lo corta.
                </p>
              </div>
            </div>
          </LiveDemo>
        </div>
      </div>
    </SectionWrapper>
  )
}