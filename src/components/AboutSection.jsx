import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Globe, Cpu, Coffee } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import './AboutSection.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const factIcons = [Coffee, Code2, Globe, Database]

function useScrollInView() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, inView }
}

export default function AboutSection() {
  const { ref, inView } = useScrollInView()
  const { lang } = useLanguage()
  const t = translations[lang].about

  return (
    <section id="sobre" className="section about">
      <div className="about__orb" />

      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.p className="section-label" variants={fadeUp}>
            {t.label}
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            {t.title} <span className="gradient-text">{t.titleAccent}</span>
          </motion.h2>

          <div className="about__grid">
            {/* Left — bio card */}
            <motion.div className="glass-card about__bio-card" variants={fadeUp}>
              <div className="about__avatar-wrap">
                <div className="about__avatar-big">CI</div>
                <div className="about__avatar-glow" />
              </div>

              <div className="about__bio-text">
                <h3>Cosmin Ionuț</h3>
                <p className="about__bio-role">
                  <Cpu size={14} /> {t.role}
                </p>
                <p>{t.bio1}</p>
                <p>{t.bio2}</p>
              </div>

              <div className="about__interests">
                <p className="about__interests-title">{t.interestsTitle}</p>
                <div className="about__tags">
                  {t.interests.map(item => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — stats + info */}
            <div className="about__right">
              {/* Fact cards */}
              <motion.div className="about__facts" variants={stagger}>
                {t.facts.map(({ label, value }, i) => {
                  const Icon = factIcons[i]
                  return (
                    <motion.div
                      key={label}
                      className="glass-card about__fact"
                      variants={fadeUp}
                    >
                      <Icon size={22} className="about__fact-icon" />
                      <span className="about__fact-value gradient-text">{value}</span>
                      <span className="about__fact-label">{label}</span>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Info card */}
              <motion.div className="glass-card about__info-card" variants={fadeUp}>
                <h4 className="about__info-title">{t.infoTitle}</h4>
                <ul className="about__info-list">
                  {t.info.map(({ label, value }) => (
                    <InfoRow key={label} label={label} value={value} />
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InfoRow({ label, value }) {
  return (
    <li className="about__info-row">
      <span className="about__info-key">{label}</span>
      <span className="about__info-val">{value}</span>
    </li>
  )
}
