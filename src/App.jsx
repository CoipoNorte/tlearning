/* ============================================
   App.jsx - Componente raíz
   ============================================ */
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SetupSection from './components/sections/SetupSection'
import ColorsSection from './components/sections/ColorsSection'
import SpacingSection from './components/sections/SpacingSection'
import FlexboxSection from './components/sections/FlexboxSection'
import GridSection from './components/sections/GridSection'
import TypographySection from './components/sections/TypographySection'
import BordersSection from './components/sections/BordersSection'
import EffectsSection from './components/sections/EffectsSection'
import ThemeSection from './components/sections/ThemeSection'
import AnimationsSection from './components/sections/AnimationsSection'
import ResponsiveSection from './components/sections/ResponsiveSection'
import StatesSection from './components/sections/StatesSection'
import UtilitySection from './components/sections/UtilitySection'
import ComponentsSection from './components/sections/ComponentsSection'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <main className="relative">
        {/* Esferas decorativas de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-tw-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute top-2/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <SetupSection />
        <ColorsSection />
        <SpacingSection />
        <FlexboxSection />
        <GridSection />
        <TypographySection />
        <BordersSection />
        <EffectsSection />
        <ThemeSection />
        <AnimationsSection />
        <ResponsiveSection />
        <StatesSection />
        <UtilitySection />
        <ComponentsSection />

        {/* Footer */}
        <footer className="relative py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              ¡Ahora dominas Tailwind v4!
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Practica construyendo proyectos reales. La mejor forma de aprender
              es haciendo.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer"
                className="px-6 py-3 glass rounded-xl hover:bg-tw-500/20 transition-all text-tw-500 font-medium">
                📖 Docs Oficiales
              </a>
              <a href="https://play.tailwindcss.com" target="_blank" rel="noreferrer"
                className="px-6 py-3 glass rounded-xl hover:bg-white/10 transition-all text-gray-300 font-medium">
                🎮 Playground
              </a>
            </div>
            <p className="text-gray-600 mt-12 text-sm">
              Hecho con ❤️ usando Tailwind CSS v4 + React
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App