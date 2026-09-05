import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, MessageCircle, Send, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import './ContactSection.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = translations[lang].contact

  const socials = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      handle: 'Cosmin Ionuț',
      href: 'https://www.linkedin.com/in/cosmin-ionut-ciocan/',
      color: '#0ea5e9',
      bg: 'rgba(14, 165, 233, 0.08)',
    },
    {
      icon: Mail,
      label: 'Email',
      handle: 'cosminfx@gmail.com',
      href: 'mailto:cosminfx@gmail.com',
      color: '#a855f7',
      bg: 'rgba(168, 85, 247, 0.08)',
    },
  ]

  return (
    <section id="contacto" className="section contact">
      <div className="contact__orb contact__orb--1" />
      <div className="contact__orb contact__orb--2" />

      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.p className="section-label" variants={fadeUp}>{t.label}</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            {t.title} <span className="gradient-text">{t.titleAccent}</span>
          </motion.h2>

          <div className="contact__layout">
            {/* Left — CTA card */}
            <motion.div className="glass-card contact__cta-card" variants={fadeUp}>
              <div className="contact__cta-icon">
                <MessageCircle size={32} />
              </div>
              <h3>{t.cta_title}</h3>
              <p dangerouslySetInnerHTML={{ __html: t.cta_p1 }} />
              <p>{t.cta_p2}</p>

              <div className="contact__meta">
                <span className="contact__meta-item">
                  <MapPin size={14} />
                  {t.location}
                </span>
                <span className="contact__meta-item">
                  <span className="contact__status-dot" />
                  {t.available}
                </span>
              </div>

              <a
                href="mailto:cosminfx@gmail.com"
                className="btn btn-primary contact__email-btn"
              >
                <Send size={16} />
                {t.sendEmail}
              </a>
            </motion.div>

            {/* Right — Social links */}
            <motion.div className="contact__socials" variants={stagger}>
              {socials.map(({ icon: Icon, label, handle, href, color, bg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card contact__social-card"
                  variants={fadeUp}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{ '--card-color': color, '--card-bg': bg }}
                >
                  <div className="contact__social-icon" style={{ background: bg, border: `1px solid ${color}40` }}>
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <p className="contact__social-label">{label}</p>
                    <p className="contact__social-handle" style={{ color }}>{handle}</p>
                  </div>
                  <Send size={16} className="contact__social-arrow" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
