import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#competencias', label: 'Competências' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#educacao', label: 'Educação' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      const total = document.body.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (y / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          <a href="#hero" className="navbar__logo">
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="gradient-text">C</span>
            <span className="navbar__logo-bracket">/&gt;</span>
          </a>

          <ul className="navbar__links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="navbar__link">{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contacto" className="btn btn-primary navbar__cta">
            Contactar
          </a>

          <button
            className="navbar__hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Progress bar */}
        <div className="navbar__progress">
          <div className="navbar__progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="mobile-menu__link"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a href="#contacto" className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => setOpen(false)}>
          Contactar
        </a>
      </div>
    </>
  )
}
