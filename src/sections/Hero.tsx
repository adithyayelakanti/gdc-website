import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import GridField from '../components/GridField'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6"
    >
      <GridField />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-6 pt-24 font-mono text-[10px] tracking-widest text-grey-light sm:px-10">
        <span>N28.6139 // E77.2090</span>
        <span className="hidden sm:inline">SECTION 01 / 09</span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="relative z-10 font-mono text-xs tracking-[0.3em] text-amber"
      >
        GAMING DEVELOPMENT CLUB
      </motion.p>

      <motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  className="relative z-10 mt-4 flex justify-center"
>
  <img
    src="/logo/gdc-logo.png"
    alt="GDC - Gaming Development Club"
    className="h-auto w-[45vw] max-w-[520px] object-contain"
  />
</motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="relative z-10 mt-6 font-display text-xl font-medium text-grey-light sm:text-2xl"
      >
        Create. Play. Repeat.
      </motion.p>

      <motion.a
        href="#about"
        data-cursor="link"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="group relative z-10 mt-16 flex flex-col items-center gap-2"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span className="font-mono text-[10px] tracking-widest text-grey-light group-hover:text-amber">
          SCROLL
        </span>
        <ArrowDown size={16} className="animate-bounce text-grey-light group-hover:text-amber" />
      </motion.a>
    </section>
  )
}
