import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsFinePointer } from '../hooks/usePointerType'

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
}: {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const isFine = useIsFinePointer()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 14 })
  const springY = useSpring(y, { stiffness: 200, damping: 14 })

  const handleMove = (e: React.MouseEvent) => {
    if (!isFine || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor="link"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          onClick()
        }
      }}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  )
}
