import { Instagram, MessageCircle } from 'lucide-react'

// Replace these URLs with GDC's real social links.
const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/gdc.snist?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
    icon: Instagram,
  },
  {
    label: 'WhatsApp',
    href: 'https://chat.whatsapp.com/COymRma2QfrJPJ91DBQtrm?s=cl&p=a&ilr=4&iam=0',
    icon: MessageCircle,
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-void px-6 pb-8 pt-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 md:flex-row md:items-end">
          <div>
            <p className="font-display text-4xl font-bold tracking-tightest sm:text-6xl">
              GDC
            </p>
            <p className="mt-2 max-w-xs text-sm text-grey-light">
              Gaming Development Club — student-built, student-run.
            </p>
          </div>

          <p className="font-mono text-sm tracking-widest text-amber">
            CREATE. PLAY. REPEAT.
          </p>
        </div>

        <div className="flex flex-col gap-8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-6">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-grey-light transition-colors hover:text-amber"
              >
                <Icon size={14} />
                {label.toUpperCase()}
              </a>
            ))}
          </nav>

          <p className="font-mono text-[10px] tracking-widest text-grey-dark">
            © 2026 GDC — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}