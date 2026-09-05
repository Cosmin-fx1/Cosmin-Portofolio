import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import './Navbar.css'

export default function Navbar() {
  const { lang, toggle } = useLanguage()
  const t = translations[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#sobre', label: t.about },
    { href: '#competencias', label: t.skills },
    { href: '#projetos', label: t.projects },
    { href: '#educacao', label: t.education },
    { href: '#contacto', label: t.contact },
  ]

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

          {/* Language toggle */}
          <button
            className="lang-toggle"
            onClick={toggle}
            aria-label="Toggle language"
            title={lang === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
          >
            <span className={lang === 'en' ? 'lang-toggle__active' : ''}>EN</span>
            <span className="lang-toggle__sep">|</span>
            <span className={lang === 'pt' ? 'lang-toggle__active' : ''}>PT</span>
          </button>

          <a href="#contacto" className="btn btn-primary navbar__cta">
            {t.cta}
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
        <button
          className="lang-toggle lang-toggle--mobile"
          onClick={toggle}
          aria-label="Toggle language"
        >
          <span className={lang === 'en' ? 'lang-toggle__active' : ''}>EN</span>
          <span className="lang-toggle__sep">|</span>
          <span className={lang === 'pt' ? 'lang-toggle__active' : ''}>PT</span>
        </button>
        <a href="#contacto" className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => setOpen(false)}>
          {t.cta}
        </a>
      </div>
    </>
  )
}
