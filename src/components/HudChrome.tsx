import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function HudChrome() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    return progress.on('change', (v) => setPercent(Math.round(v * 100)))
  }, [progress])

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-amber"
        style={{ scaleX: progress }}
      />

      <div className="pointer-events-none fixed bottom-4 left-4 z-40 hidden font-mono text-[10px] tracking-widest text-grey-light sm:block">
        SYS.SCROLL // {String(percent).padStart(3, '0')}%
      </div>

      <div className="pointer-events-none fixed bottom-4 right-4 z-40 hidden font-mono text-[10px] tracking-widest text-grey-light sm:block">
        GDC.BUILD // 2026.1
      </div>
    </>
  )
}
