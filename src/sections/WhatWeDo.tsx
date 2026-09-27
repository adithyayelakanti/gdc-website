import { useState } from 'react'
import { motion } from 'framer-motion'

const ITEMS = [
  {
    title: 'Game Development',
    copy: 'Build playable experiences from a blank engine — systems, code, and the thousand small decisions that make a game feel right.',
  },
  {
    title: 'Game Design',
    copy: 'Mechanics, levels, storytelling, and player experience. We treat design as a craft you iterate on, not an afterthought.',
  },
  {
    title: 'Workshops',
    copy: 'Hands-on sessions on the tools and techniques the club actually uses — Unity, Godot, shaders, version control, and more.',
  },
  {
    title: 'Game Jams',
    copy: 'Build a game around a theme in a fixed window. Fast, chaotic, and the quickest way to learn what shipping feels like.',
  },
  {
    title: 'Competitions',
    copy: 'Represent GDC at inter-college challenges and internal contests. Compete on design, code, and polish.',
  },
  {
    title: 'Community',
    copy: 'Meet people who think about games the way you do. Playtests, critiques, and a Discord that never really sleeps.',
  },
]

export default function WhatWeDo() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="what-we-do" className="relative px-6 py-32 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest text-amber">03 / WHAT WE DO</p>
        <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl font-bold tracking-tightest sm:text-5xl">
          Six ways to get involved.
        </h2>

        <div className="mt-16 border-t border-white/10">
          {ITEMS.map((item, i) => {
            const isActive = active === i
            return (
              <motion.button
                key={item.title}
                data-cursor="link"
                onClick={() => setActive(isActive ? null : i)}
                onMouseEnter={() => setActive(i)}
                className="group relative block w-full border-b border-white/10 py-7 text-left"
              >
                <motion.div
                  className="absolute inset-0 -z-10 bg-panel"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: isActive ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originY: 0 }}
                />

                <div className="flex items-baseline justify-between gap-6 px-2">
                  <div className="flex items-baseline gap-6">
                    <span
                      className={`font-mono text-xs transition-colors ${
                        isActive ? 'text-amber' : 'text-grey-dark'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-display text-2xl font-medium transition-all sm:text-4xl ${
                        isActive ? 'translate-x-2 text-bone' : 'text-grey-light'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    className="shrink-0 font-mono text-xl text-grey-light"
                  >
                    +
                  </motion.span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? 'auto' : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden px-2"
                >
                  <p className="max-w-lg pt-4 pl-[3.1rem] text-sm leading-relaxed text-grey-light sm:text-base">
                    {item.copy}
                  </p>
                </motion.div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
