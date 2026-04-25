 
/* ============================================
   Sección 12: Estados (hover, focus, active...)
   
   Tailwind usa prefijos para pseudo-clases:
   hover:  → al pasar el mouse
   focus:  → al enfocar (tab, click)
   active: → al presionar
   group-hover: → al hover en el padre
   ============================================ */
import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import LiveDemo from '../ui/LiveDemo'
import ClassTable from '../ui/ClassTable'

export default function StatesSection() {
  return (
    <SectionWrapper id="states" number="12" title="Estados"
      subtitle="hover, focus, active, group..." icon="👆" color="rose">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ClassTable rows={[
            { cls: 'hover:',        css: ':hover',         desc: 'Al pasar mouse' },
            { cls: 'focus:',        css: ':focus',         desc: 'Al enfocar' },
            { cls: 'active:',       css: ':active',        desc: 'Al presionar' },
            { cls: 'disabled:',     css: ':disabled',      desc: 'Deshabilitado' },
            { cls: 'first:',        css: ':first-child',   desc: 'Primer hijo' },
            { cls: 'last:',         css: ':last-child',    desc: 'Último hijo' },
            { cls: 'odd:',          css: ':nth-child(odd)',  desc: 'Hijos impares' },
            { cls: 'even:',         css: ':nth-child(even)', desc: 'Hijos pares' },
            { cls: 'group-hover:',  css: '.group:hover &',   desc: 'Hover en padre' },
            { cls: 'peer-focus:',   css: '.peer:focus ~ &',  desc: 'Focus en hermano' },
            { cls: 'placeholder:',  css: '::placeholder',    desc: 'Placeholder text' },
            { cls: 'before:',       css: '::before',         desc: 'Pseudo before' },
            { cls: 'after:',        css: '::after',          desc: 'Pseudo after' },
          ]} />

          <CodeBlock title="states.html" language="html"
            code={`<!-- HOVER: cambiar al pasar mouse -->
<button class="bg-blue-500 hover:bg-blue-600 
               hover:scale-105 transition-all">
  Hover me
</button>

<!-- FOCUS: al enfocar (tab o click) -->
<input class="border-gray-300 focus:border-blue-500 
              focus:ring-2 focus:ring-blue-500/50
              focus:outline-none transition-all" />

<!-- ACTIVE: mientras se presiona -->
<button class="bg-green-500 active:bg-green-700 
               active:scale-95 transition-all">
  Press me
</button>

<!-- DISABLED: estado deshabilitado -->
<button disabled class="bg-gray-500 disabled:opacity-50 
                        disabled:cursor-not-allowed">
  Disabled
</button>

<!-- GROUP: hover en el padre afecta al hijo -->
<div class="group p-4 hover:bg-white/10">
  <h3 class="group-hover:text-blue-400">
    El hijo reacciona al hover del padre
  </h3>
  <p class="group-hover:translate-x-2 transition-transform">
    Se mueve cuando hoverean el padre
  </p>
</div>

<!-- ODD/EVEN: filas alternas -->
<div>
  <div class="odd:bg-white/5 even:bg-white/10 p-2">Row 1</div>
  <div class="odd:bg-white/5 even:bg-white/10 p-2">Row 2</div>
  <div class="odd:bg-white/5 even:bg-white/10 p-2">Row 3</div>
</div>`} />
        </div>

        <div className="space-y-6">
          <LiveDemo title="Hover, Focus, Active">
            <div className="space-y-3">
              <button className="w-full p-3 bg-rose-500 hover:bg-rose-600 active:bg-rose-700 active:scale-95 rounded-xl text-white font-medium transition-all text-sm">
                hover:bg-rose-600 active:scale-95
              </button>
              <input placeholder="focus:border-tw-500 focus:ring-2"
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-tw-500 focus:ring-2 focus:ring-tw-500/30 focus:outline-none transition-all" />
              <button disabled
                className="w-full p-3 bg-gray-500 rounded-xl text-white font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed">
                disabled:opacity-40 disabled:cursor-not-allowed
              </button>
            </div>
          </LiveDemo>

          <LiveDemo title="Group hover">
            <div className="space-y-3">
              {['React', 'Tailwind', 'Vite'].map((name, i) => (
                <div key={name} className="group flex items-center gap-3 p-3 glass rounded-xl cursor-pointer hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold group-hover:scale-110 group-hover:rotate-6 transition-all">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium group-hover:text-rose-400 transition-colors">{name}</p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">Se mueve al hover del padre</p>
                  </div>
                  <span className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                </div>
              ))}
            </div>
          </LiveDemo>

          <LiveDemo title="Odd/Even filas alternas">
            <div className="rounded-xl overflow-hidden border border-white/10">
              {['Alice', 'Bob', 'Carol', 'David', 'Eve'].map((name, i) => (
                <div key={name} className={`px-4 py-2.5 text-sm text-white ${i % 2 === 0 ? 'bg-white/5' : 'bg-white/10'} hover:bg-rose-500/20 transition-colors`}>
                  <span className="text-gray-500 mr-3">{i + 1}.</span> {name}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-500 mt-2 code-font">odd:bg-white/5 even:bg-white/10</p>
          </LiveDemo>
        </div>
      </div>
    </SectionWrapper>
  )
}