import { AnimatePresence, motion } from 'framer-motion'
import { Github, Instagram, Linkedin, X } from 'lucide-react'
import { useEffect } from 'react'
import type { Member } from '../data/members'

export default function TeamModal({
  member,
  onClose,
}: {
  member: Member | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!member) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [member, onClose])

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${member.name} profile`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/90 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="grid w-full max-w-2xl grid-cols-1 overflow-hidden border border-white/10 bg-panel sm:grid-cols-5"
          >
            <div className="relative aspect-square overflow-hidden bg-panel2 sm:col-span-2 sm:aspect-auto">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="h-full w-full object-cover"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.opacity = '0'
                }}
              />
            </div>

            <div className="relative flex flex-col justify-between p-7 sm:col-span-3 sm:p-9">
              <button
                onClick={onClose}
                aria-label="Close profile"
                data-cursor="link"
                className="absolute right-5 top-5 text-grey-light hover:text-amber"
              >
                <X size={20} />
              </button>

              <div>
                <p className="font-mono text-xs tracking-widest text-amber">{member.role}</p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tightest sm:text-4xl">
                  {member.name}
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-grey-light">
                  {member.description}
                </p>
              </div>

              {member.socials && (
                <div className="mt-8 flex gap-5">
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="text-grey-light hover:text-amber"
                      aria-label={`${member.name} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="text-grey-light hover:text-amber"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="text-grey-light hover:text-amber"
                      aria-label={`${member.name} on Instagram`}
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
