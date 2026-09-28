import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const LETTERS = ['G', 'D', 'C']
const SESSION_KEY = 'gdc-loaded'

export default function Loader({ onDone }: { onDone: () => void }) {
  const [showLoader, setShowLoader] = useState(() => {
    return sessionStorage.getItem(SESSION_KEY) !== '1'
  })

  const [phase, setPhase] = useState<'letters' | 'bar' | 'out'>('letters')

  useEffect(() => {
    if (!showLoader) {
      onDone()
      return
    }

    // Mark it immediately so another mount cannot show the loader again.
    sessionStorage.setItem(SESSION_KEY, '1')

    const t1 = setTimeout(() => setPhase('bar'), 500)
    const t2 = setTimeout(() => setPhase('out'), 1300)
    const t3 = setTimeout(() => {
      setShowLoader(false)
      onDone()
    }, 1750)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [showLoader, onDone])

  return (
    <AnimatePresence>
      {showLoader && phase !== 'out' && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, filter: 'brightness(3)' }}
          transition={{ duration: 0.45, ease: 'easeIn' }}
        >
          <div className="flex gap-2 font-display text-6xl font-bold tracking-tightest sm:text-8xl">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={letter}
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.09,
                  ease: 'easeOut',
                }}
                className="text-bone"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="mt-8 h-[2px] w-40 overflow-hidden bg-panel2"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'bar' ? 1 : 0 }}
          >
            <motion.div
              className="h-full bg-amber"
              initial={{ width: '0%' }}
              animate={{ width: phase === 'bar' ? '100%' : '0%' }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.p
            className="mt-4 font-mono text-[10px] tracking-widest text-grey-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'bar' ? 1 : 0 }}
          >
            COMPILING EXPERIENCE
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}