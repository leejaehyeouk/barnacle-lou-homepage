import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/story', label: '스토리' },
  { to: '/contents', label: '콘텐츠' },
  { to: '/goods', label: '굿즈' },
  { to: '/licensing', label: '라이센싱' },
  { to: '/contact', label: '문의하기' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span
              className="font-pen"
              style={{ fontSize: '1.6rem', color: '#F0A820', letterSpacing: '0.04em', lineHeight: 1 }}
            >
              따개비루
            </span>
            <span
              className="font-body hidden sm:block"
              style={{ fontSize: '0.7rem', color: '#9B7E6A', fontWeight: 600, letterSpacing: '0.08em' }}
            >
              Barnacle Lou
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`font-body text-sm transition-colors duration-200 hover:text-lou ${
                    location.pathname === link.to ? 'text-lou' : 'text-warm'
                  }`}
                  style={{ fontWeight: location.pathname === link.to ? 800 : 600, letterSpacing: '-0.01em' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://instagram.com/barnacle_lou"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-bella hover:text-bella-dark transition-colors"
                aria-label="인스타그램"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>

          <button
            className="md:hidden p-2 rounded-lg text-warm hover:bg-lou-light transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <span className="block w-5 h-0.5 bg-warm mb-1 transition-all" style={menuOpen ? { transform: 'rotate(45deg) translate(3px, 3px)' } : {}} />
            <span className="block w-5 h-0.5 bg-warm mb-1 transition-all" style={menuOpen ? { opacity: 0 } : {}} />
            <span className="block w-5 h-0.5 bg-warm transition-all" style={menuOpen ? { transform: 'rotate(-45deg) translate(3px, -3px)' } : {}} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg md:hidden"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block px-6 py-3 font-body font-semibold text-base transition-colors hover:bg-lou-light hover:text-lou ${
                      location.pathname === link.to ? 'text-lou bg-lou-light' : 'text-warm'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-6 py-3">
                <a
                  href="https://instagram.com/barnacle_lou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body font-semibold text-bella"
                >
                  <InstagramIcon />
                  <span>@barnacle_lou</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
