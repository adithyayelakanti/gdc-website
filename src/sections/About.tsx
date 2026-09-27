import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const LINE_ONE = "WE DON'T JUST PLAY GAMES."
const LINE_TWO = 'WE BUILD THEM.'

function RevealLine({ text, progress, start, end, className }: {
  text: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  start: number
  end: number
  className?: string
}) {
  const words = text.split(' ')
  return (
    <p className={className}>
      {words.map((word, i) => {
        const wordStart = start + ((end - start) * i) / words.length
        const wordEnd = start + ((end - start) * (i + 1)) / words.length
        return (
          <Word key={i} word={word} progress={progress} start={wordStart} end={wordEnd} />
        )
      })}
    </p>
  )
}

function Word({ word, progress, start, end }: {
  word: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1])
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {word}
    </motion.span>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.4'],
  })

  return (
    <section id="about" ref={ref} className="relative px-6 py-32 sm:px-10 sm:py-48">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest text-amber">02 / ABOUT</p>

        <div className="mt-10 font-display text-4xl font-bold leading-[1.05] tracking-tightest sm:text-6xl md:text-7xl">
          <RevealLine
            text={LINE_ONE}
            progress={scrollYProgress}
            start={0}
            end={0.45}
            className="text-grey-light"
          />
          <RevealLine
            text={LINE_TWO}
            progress={scrollYProgress}
            start={0.45}
            end={0.9}
            className="text-bone"
          />
        </div>

        <p className="mt-14 max-w-xl text-balance text-lg leading-relaxed text-grey-light">
          GDC is a student-driven community for anyone who wants to make games, not just play
          them. We work across programming, design, and art — through workshops, jams,
          competitions, and a lot of late-night debugging. No prior experience required, just a
          willingness to ship something.
        </p>
      </div>
    </section>
  )
}
