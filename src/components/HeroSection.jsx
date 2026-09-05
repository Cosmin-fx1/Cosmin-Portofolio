import { motion } from 'framer-motion'
import { ArrowDown, Linkedin, Mail, Terminal, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import './HeroSection.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }
  })
}

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/cosmin-ionut-ciocan/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:cosminfx@gmail.com', label: 'Email' },
]

export default function HeroSection() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  return (
    <section id="hero" className="hero">
      {/* Decorative glow orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="container hero__container">
        <div className="hero__content">

          {/* Status badge */}
          <motion.div
            className="hero__status"
            variants={fadeUp} initial="hidden" animate="show" custom={0}
          >
            <span className="hero__status-dot" />
            <span>{t.status}</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="hero__greeting"
            variants={fadeUp} initial="hidden" animate="show" custom={1}
          >
            <Terminal size={16} />
            {t.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            className="hero__name"
            variants={fadeUp} initial="hidden" animate="show" custom={2}
          >
            Cosmin
            <span className="hero__name-accent gradient-text"> Ionuț</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            className="hero__role-wrapper"
            variants={fadeUp} initial="hidden" animate="show" custom={3}
          >
            <span className="hero__role-prefix">{t.rolePrefix}</span>
            <span className="hero__role gradient-text">{t.role}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="hero__description"
            variants={fadeUp} initial="hidden" animate="show" custom={4}
          >
            {t.description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="hero__actions"
            variants={fadeUp} initial="hidden" animate="show" custom={5}
          >
            <a href="#projetos" className="btn btn-primary">
              <Sparkles size={17} />
              {t.cta_projects}
            </a>
            <a href="#contacto" className="btn btn-outline">
              {t.cta_contact}
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="hero__socials"
            variants={fadeUp} initial="hidden" animate="show" custom={6}
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Visual / Avatar side */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__avatar-ring hero__avatar-ring--outer" />
          <div className="hero__avatar-ring hero__avatar-ring--inner" />
          <div className="hero__avatar">
            <div className="hero__avatar-initials">CI</div>
          </div>

          {/* Floating tech badges */}
          <FloatingBadge className="fb--react" delay={0.6} label="React" color="#61dafb" />
          <FloatingBadge className="fb--node" delay={0.8} label="SQL" color="#06b6d4" />
          <FloatingBadge className="fb--python" delay={1.0} label="Python" color="#ffd43b" />
          <FloatingBadge className="fb--git" delay={1.2} label="Git" color="#f1502f" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <ArrowDown size={20} className="hero__scroll-icon" />
        <span>Scroll</span>
      </motion.a>
    </section>
  )
}

function FloatingBadge({ className, delay, label, color }) {
  return (
    <motion.div
      className={`floating-badge ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 15 }}
    >
      <span className="floating-badge__dot" style={{ background: color }} />
      {label}
    </motion.div>
  )
}
