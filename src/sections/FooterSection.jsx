const FOOTER_LINKS = [
  { href: '/story', label: '\uc2a4\ud1a0\ub9ac' },
  { href: '/contents', label: '\ucf58\ud150\uce20' },
  { href: '/goods', label: '\uad7f\uc988' },
  { href: '/licensing', label: '\ub77c\uc774\uc13c\uc2f1' },
  { href: '/contact', label: '\ubb38\uc758\ud558\uae30' },
]

const COPYRIGHT = '\u00a9 2009 \uc62c\ub9ac\ube0c\uc2a4\ud29c\ub514\uc624 | \uc774\ub79c\ub4dc. All rights reserved.'
const EMAIL_LINE = '\uc774\uba54\uc77c: OLIVESTUDIO_COST@ELAND.CO.KR'
const LOGO_TEXT = '\ub530\uac1c\ube44\ub8e8'
const IG_LABEL = '\uc778\uc2a4\ud0c0\uadf8\ub7a8'
const YT_LABEL = '\uc720\ud29c\ube0c'

export default function FooterSection() {
  return (
    <footer style={{ backgroundColor: '#3D2B1F' }} className="py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-pen text-2xl" style={{ color: '#F0A820' }}>{LOGO_TEXT}</p>
          <p className="font-body text-xs mt-1 font-medium" style={{ color: '#9B7E6A' }}>
            {COPYRIGHT}
          </p>
          <p className="font-body text-xs mt-0.5 font-medium" style={{ color: '#9B7E6A' }}>
            {EMAIL_LINE}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/barnacle_lou"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            style={{ color: '#E8607A' }}
            aria-label={IG_LABEL}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@barnaclelou6561"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            style={{ color: '#F0A820' }}
            aria-label={YT_LABEL}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <nav className="flex flex-wrap gap-4 justify-center">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs font-medium transition-colors hover:text-lou"
              style={{ color: '#9B7E6A' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
