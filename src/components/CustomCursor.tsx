import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsFinePointer } from '../hooks/usePointerType'

type CursorMode = 'default' | 'link' | 'view'

export default function CustomCursor() {
  const isFine = useIsFinePointer()
  const [mode, setMode] = useState<CursorMode>('default')
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  const ringX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 })

  useEffect(() => {
    if (!isFine) return
    document.body.classList.add('custom-cursor-active')

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)

      const target = (e.target as HTMLElement)?.closest?.('[data-cursor]') as HTMLElement | null
      if (target) {
        const nextMode = (target.dataset.cursor as CursorMode) || 'link'
        setMode(nextMode)
        setLabel(target.dataset.cursorLabel ?? (nextMode === 'view' ? 'VIEW' : ''))
      } else {
        setMode('default')
        setLabel('')
      }
    }

    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [isFine, visible, x, y])

  if (!isFine) return null

  const ringSize = mode === 'default' ? 32 : mode === 'view' ? 72 : 56

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[70]"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 200ms ease' }}
      aria-hidden="true"
    >
      <motion.div
        className="fixed left-0 top-0 rounded-full bg-amber"
        style={{
          x: springX,
          y: springY,
          width: 6,
          height: 6,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: mode === 'default' ? 'rgba(232,232,227,0.4)' : '#FFB020',
          transition: 'width 220ms ease, height 220ms ease, border-color 220ms ease',
        }}
      >
        {label && (
          <span className="font-mono text-[9px] tracking-widest text-amber">{label}</span>
        )}
      </motion.div>
    </div>
  )
}
