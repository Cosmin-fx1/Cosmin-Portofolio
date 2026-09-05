import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import './SkillsSection.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = translations[lang].skills

  return (
    <section id="competencias" className="section skills">
      <div className="skills__orb" />
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
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t.subtitle}
          </motion.p>

          <div className="skills__grid">
            {t.categories.map((cat) => (
              <motion.div
                key={cat.name}
                className="glass-card skills__card"
                variants={fadeUp}
              >
                <div className="skills__cat-header">
                  <span className="skills__cat-dot" style={{ background: cat.color }} />
                  <h3 className="skills__cat-name">{cat.name}</h3>
                </div>

                <div className="skills__list">
                  {cat.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      color={cat.color}
                      animate={inView}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ skill, color, animate }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{skill.name}</span>
        <span className="skill-bar__pct" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: animate ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        />
      </div>
    </div>
  )
}
