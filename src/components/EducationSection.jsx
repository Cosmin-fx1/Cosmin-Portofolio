import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Calendar, Briefcase } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import './EducationSection.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

export default function EducationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = translations[lang].education

  return (
    <section id="educacao" className="section education">
      <div className="education__orb" />
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
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t.subtitle}
          </motion.p>

          <div className="timeline">
            {t.items.map((item, i) => {
              const Icon = item.type === 'work' ? Briefcase : GraduationCap
              return (
                <motion.div key={i} className="timeline__item" variants={fadeUp}>
                  {/* Line */}
                  <div className="timeline__line-wrap">
                    <motion.div
                      className="timeline__icon"
                      style={{ background: `${item.color}20`, border: `2px solid ${item.color}60` }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </motion.div>
                    {i < t.items.length - 1 && (
                      <div className="timeline__connector" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="glass-card timeline__card">
                    {item.current && (
                      <div className="timeline__current-badge">
                        <span className="timeline__current-dot" />
                        {t.current}
                      </div>
                    )}

                    <div className="timeline__card-header">
                      <div>
                        <h3 className="timeline__title">{item.title}</h3>
                        <p className="timeline__institution">{item.institution}</p>
                      </div>
                      <span className="timeline__period">
                        <Calendar size={13} />
                        {item.period}
                      </span>
                    </div>

                    <p className="timeline__desc">{item.description}</p>

                    <div className="timeline__tags">
                      {item.highlights.map(h => (
                        <span
                          key={h}
                          className="tag"
                          style={{
                            background: `${item.color}15`,
                            color: item.color,
                            borderColor: `${item.color}30`,
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
