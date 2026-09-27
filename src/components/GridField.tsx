import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

/**
 * A quiet animated field for the hero: a perspective grid plus a soft amber
 * glow that drifts toward the pointer. Pure canvas, no external assets.
 */
export default function GridField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let target = { x: 0.5, y: 0.35 }
    const current = { x: 0.5, y: 0.35 }
    let raf = 0

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const handlePointer = (e: MouseEvent) => {
      target = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      current.x += (target.x - current.x) * 0.03
      current.y += (target.y - current.y) * 0.03

      const glowX = current.x * width
      const glowY = current.y * height
      const glow = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, Math.max(width, height) * 0.5)
      glow.addColorStop(0, 'rgba(255,176,32,0.10)')
      glow.addColorStop(1, 'rgba(255,176,32,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)

      const spacing = 48
      ctx.strokeStyle = 'rgba(232,232,227,0.06)'
      ctx.lineWidth = 1
      for (let x = 0; x <= width; x += spacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y <= height; y += spacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      if (!reduced) raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    if (!reduced) {
      window.addEventListener('mousemove', handlePointer)
      raf = requestAnimationFrame(draw)
    } else {
      draw()
    }

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handlePointer)
      cancelAnimationFrame(raf)
    }
  }, [reduced])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
