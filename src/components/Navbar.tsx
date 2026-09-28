import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Crew', href: '#crew' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 sm:pt-6"
        initial={false}
      >
        <motion.div
          className="flex w-full max-w-6xl items-center justify-between border border-white/10 bg-void/60 px-5 py-3 backdrop-blur-md"
          animate={{
            maxWidth: scrolled ? 640 : 1152,
            borderRadius: scrolled ? 999 : 4,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4">
  <img
    src="/logo/snist-esports-logo.png"
    alt="SNIST Esports"
    className="h-8 w-auto object-contain"
  />

  <a href="#top" className="flex items-center">
    <img
      src="/logo/gdc-logo.png"
      alt="GDC"
      className="h-8 w-auto object-contain"
    />
  </a>
</div>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <button
                key={link.href}
                data-cursor="link"
                onClick={() => handleNavClick(link.href)}
                className="font-mono text-[11px] tracking-widest text-grey-light transition-colors hover:text-amber"
              >
                {link.label.toUpperCase()}
              </button>
            ))}
          </nav>

          <button
            data-cursor="link"
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-bone md:hidden"
            aria-label="Open menu"
          >
            MENU <Menu size={16} />
          </button>

          <a
  href="https://chat.whatsapp.com/COymRma2QfrJPJ91DBQtrm?s=cl&p=a&ilr=4&iam=0"
  target="_blank"
  rel="noopener noreferrer"
  data-cursor="link"
  className="hidden font-mono text-[11px] tracking-widest text-amber transition-opacity hover:opacity-70 md:block"
>
  JOIN →
</a>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-void"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <img
                src="/logo/gdc-logo.png"
                alt="GDC"
                className="h-8 w-auto object-contain"
              />

              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-bone"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="font-display text-4xl font-medium text-bone transition-colors hover:text-amber"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="flex justify-between border-t border-white/10 px-8 py-6 font-mono text-[10px] tracking-widest text-grey-light">
              <span>GDC.MENU</span>
              <span>2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}