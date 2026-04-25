 
/* ============================================
   Sección 08: Efectos (shadow, blur, opacity)
   ============================================ */
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'
import ClassTable from '../ui/ClassTable'

export default function EffectsSection() {
  return (
    <SectionWrapper id="effects" number="08" title="Efectos"
      subtitle="Sombras, blur, opacity y más" icon="✨" color="indigo">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ClassTable rows={[
            { cls: 'shadow-sm',        css: 'box-shadow: small',           desc: 'Sombra sutil' },
            { cls: 'shadow-md',        css: 'box-shadow: medium',          desc: 'Sombra media' },
            { cls: 'shadow-lg',        css: 'box-shadow: large',           desc: 'Sombra grande' },
            { cls: 'shadow-xl',        css: 'box-shadow: extra large',     desc: 'Sombra XL' },
            { cls: 'shadow-2xl',       css: 'box-shadow: 2XL',             desc: 'Sombra máxima' },
            { cls: 'shadow-blue-500/50',css:'sombra con color',             desc: 'Sombra coloreada' },
            { cls: 'opacity-50',       css: 'opacity: 0.5',                desc: '50% visible' },
            { cls: 'blur-sm',          css: 'filter: blur(4px)',            desc: 'Blur sutil' },
            { cls: 'blur-xl',          css: 'filter: blur(24px)',           desc: 'Blur grande' },
            { cls: 'backdrop-blur-xl', css: 'backdrop-filter: blur(24px)',  desc: 'Blur del fondo' },
            { cls: 'grayscale',        css: 'filter: grayscale(100%)',      desc: 'Escala de grises' },
            { cls: 'invert',           css: 'filter: invert(100%)',         desc: 'Invertir colores' },
            { cls: 'mix-blend-multiply', css: 'mix-blend-mode: multiply',  desc: 'Blend mode' },
          ]} />

          <CodeBlock title="effects.html" language="html"
            code={`<!-- Sombras -->
<div class="shadow-lg">Sombra grande</div>
<div class="shadow-xl shadow-blue-500/25">
  Sombra azul con opacidad
</div>

<!-- Efecto glass / glassmorphism -->
<div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
  Efecto cristal ✨
</div>

<!-- Blur del elemento -->
<img class="blur-sm" src="foto.jpg" />
<img class="blur-none hover:blur-0" src="foto.jpg" />

<!-- Opacity -->
<div class="opacity-50">50% visible</div>
<div class="opacity-100 hover:opacity-50">
  Hover para transparencia
</div>

<!-- Filtros -->
<img class="grayscale hover:grayscale-0" src="foto.jpg" />
<img class="brightness-50" src="foto.jpg" />
<img class="contrast-150 saturate-200" src="foto.jpg" />`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Sombras">
            <div className="grid grid-cols-2 gap-4">
              {['shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-xl shadow-tw-500/25'].map(s => (
                <div key={s} className={`${s} bg-dark-700 rounded-xl p-4 text-center`}>
                  <code className="text-[10px] text-gray-400 code-font">{s}</code>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Glassmorphism">
            <div className="relative rounded-xl overflow-hidden h-48">
              {/* Fondo colorido */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500" />
              <div className="absolute top-4 left-4 w-20 h-20 bg-yellow-400 rounded-full" />
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-blue-400 rounded-lg rotate-45" />
              {/* Card glass encima */}
              <div className="absolute inset-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex flex-col justify-center items-center">
                <p className="text-white font-bold">Efecto Glass ✨</p>
                <code className="text-[10px] text-white/70 code-font mt-2">
                  bg-white/10 backdrop-blur-xl border-white/20
                </code>
              </div>
            </div>
          </LiveDemo>

          <LiveDemo title="Opacity">
            <div className="flex gap-3 items-end">
              {[100, 80, 60, 40, 20, 10].map(op => (
                <div key={op} className="text-center">
                  <div className={`w-12 h-12 bg-indigo-500 rounded-lg opacity-${op}`} />
                  <code className="text-[10px] text-gray-500 code-font">{op}</code>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Blur y filtros">
            <div className="grid grid-cols-4 gap-3">
              {[
                { cls: '', label: 'normal' },
                { cls: 'blur-sm', label: 'blur-sm' },
                { cls: 'grayscale', label: 'grayscale' },
                { cls: 'sepia', label: 'sepia' },
              ].map(f => (
                <div key={f.label} className="text-center">
                  <div className={`${f.cls} w-full h-16 rounded-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500`} />
                  <code className="text-[10px] text-gray-500 code-font mt-1 block">{f.label}</code>
                </div>
              ))}
            </div>
          </LiveDemo>
        </div>
      </div>
    </SectionWrapper>
  )
}