import { useState } from 'react'
import { motion } from 'framer-motion'
import { members, type Member } from '../data/members'
import TeamModal from '../components/TeamModal'

export default function Team() {
  const [selected, setSelected] = useState<Member | null>(null)

  return (
    <section id="crew" className="relative px-6 py-32 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-amber">05 / THE CREW</p>
        <h2 className="mt-6 max-w-xl text-balance font-display text-3xl font-bold tracking-tightest sm:text-5xl">
          Meet GDC.
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 md:grid-cols-4">
          {members.map((member, i) => (
            <motion.button
              key={member.id}
              data-cursor="view"
              onClick={() => setSelected(member)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group relative aspect-[3/4] overflow-hidden bg-panel text-left"
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="h-full w-full scale-105 object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60" />

              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="font-mono text-[9px] tracking-widest text-amber opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {member.role.toUpperCase()}
                </p>
                <p className="mt-1 font-display text-lg font-medium leading-tight text-bone">
                  {member.name}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <TeamModal member={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
