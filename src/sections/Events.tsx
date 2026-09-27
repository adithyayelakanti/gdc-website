import { motion } from 'framer-motion'
import { events } from '../data/events'

export default function Events() {
  return (
    <section id="events" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <p className="font-mono text-xs tracking-widest text-amber">06 / EVENTS</p>
        <h2 className="mt-6 max-w-xl text-balance font-display text-3xl font-bold tracking-tightest sm:text-5xl">
          What's running.
        </h2>
      </div>

      <div className="mt-16 flex gap-5 overflow-x-auto px-6 pb-6 [scrollbar-width:thin] snap-x snap-mandatory sm:px-10">
        {events.map((event, i) => (
          <motion.article
            key={event.id}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group relative flex w-[78vw] shrink-0 snap-start flex-col overflow-hidden border border-white/10 bg-panel sm:w-[380px]"
          >
            <div className="relative h-52 overflow-hidden bg-panel2">
              <img
                src={event.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.display = 'none'
                }}
              />
              <span className="absolute left-4 top-4 border border-amber/40 bg-void/70 px-2 py-1 font-mono text-[9px] tracking-widest text-amber backdrop-blur-sm">
                {event.tag.toUpperCase()}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-[10px] tracking-widest text-grey-light">
                {event.date.toUpperCase()}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-tightest">
                {event.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-grey-light">
                {event.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
