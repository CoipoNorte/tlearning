  
/* ============================================
   SectionWrapper.jsx - Envoltorio de sección
   con animación al hacer scroll
   ============================================ */
import { useEffect, useRef, useState } from 'react'

const colorMap = {
  cyan:    'from-cyan-500 to-blue-500',
  purple:  'from-purple-500 to-pink-500',
  green:   'from-green-500 to-emerald-500',
  orange:  'from-orange-500 to-amber-500',
  pink:    'from-pink-500 to-rose-500',
  blue:    'from-blue-500 to-indigo-500',
  yellow:  'from-yellow-500 to-orange-500',
  teal:    'from-teal-500 to-cyan-500',
  indigo:  'from-indigo-500 to-purple-500',
  rose:    'from-rose-500 to-red-500',
  emerald: 'from-emerald-500 to-teal-500',
  violet:  'from-violet-500 to-purple-500',
  sky:     'from-sky-500 to-blue-500',
  amber:   'from-amber-500 to-yellow-500',
}

export default function SectionWrapper({ id, number, title, subtitle, icon, color = 'cyan', children }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const gradient = colorMap[color] || colorMap.cyan

  return (
    <section id={id} ref={ref}
      className={`relative py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm mb-6">
            <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-bold`}>{number}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">{subtitle}</span>
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-4xl">{icon}</span>
            <h2 className={`text-3xl md:text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {title}
            </h2>
          </div>
          <div className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${gradient} mt-6`} />
        </div>
        {children}
      </div>
    </section>
  )
}