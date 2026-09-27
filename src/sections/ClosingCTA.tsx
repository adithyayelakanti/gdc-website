import { motion } from 'framer-motion'
import MagneticButton from '../components/MagneticButton'

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32 text-center sm:py-48">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-40" />

      <div className="relative mx-auto max-w-3xl">
        <p className="font-mono text-xs tracking-widest text-amber">07 / JOIN</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tightest sm:text-6xl"
        >
          Your first build starts here.
        </motion.h2>

        <p className="mx-auto mt-6 max-w-md text-grey-light">
          No portfolio required. No experience required. Just show up and start making things.
        </p>

        <MagneticButton
          href="https://chat.whatsapp.com/COymRma2QfrJPJ91DBQtrm?s=cl&p=a&ilr=4&iam=0"
          className="mt-12 inline-flex items-center gap-3 border border-amber bg-amber px-8 py-4 font-mono text-sm tracking-widest text-void transition-colors hover:bg-transparent hover:text-amber"
        >
          JOIN GDC →
        </MagneticButton>
      </div>
    </section>
  )
}
