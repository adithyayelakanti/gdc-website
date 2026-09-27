import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const STEPS = ['FROM AN IDEA', 'TO A MECHANIC', 'TO A WORLD', 'TO SOMETHING YOU CAN PLAY.']

function Step({ text, index, progress }: {
  text: string
  index: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const segment = 1 / STEPS.length
  const start = index * segment
  const mid = start + segment * 0.5
  const end = start + segment

  const opacity = useTransform(
    progress,
    [start, start + segment * 0.15, end - segment * 0.15, end],
    [0, 1, 1, 0],
  )
  const scale = useTransform(progress, [start, mid, end], [0.92, 1, 0.92])
  const blur = useTransform(progress, [start, mid, end], [8, 0, 8])
  const filter = useTransform(blur, (b) => `blur(${b}px)`)

  return (
    <motion.h3
      style={{ opacity, scale, filter }}
      className="absolute inset-0 flex items-center justify-center px-6 text-center font-display text-4xl font-bold tracking-tightest text-bone sm:text-7xl"
    >
      {text}
    </motion.h3>
  )
}

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <section ref={ref} className="relative h-[400vh] bg-panel">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <p className="absolute left-6 top-24 font-mono text-xs tracking-widest text-amber sm:left-10">
          04 / PHILOSOPHY
        </p>
        <div className="relative h-40 sm:h-48">
          {STEPS.map((step, i) => (
            <Step key={step} text={step} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}
