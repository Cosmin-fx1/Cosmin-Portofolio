import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer className="footer">
      <div className="footer__line" />
      <div className="container footer__container">
        <a href="#hero" className="footer__logo">
          <span className="footer__logo-bracket">&lt;</span>
          <span className="gradient-text">C</span>
          <span className="footer__logo-bracket">/&gt;</span>
        </a>

        <p className="footer__copy">
          {t.built} <span className="footer__heart">♥</span> React & Vite — {t.by} — {year}
        </p>

        <p className="footer__tech">
          <span className="tag">React</span>
          <span className="tag">Vite</span>
          <span className="tag">Framer Motion</span>
        </p>
      </div>
    </footer>
  )
}
