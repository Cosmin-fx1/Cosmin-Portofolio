import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Star, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import './ProjectsSection.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = translations[lang].projects

  return (
    <section id="projetos" className="section projects">
      <div className="projects__orb" />
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

          <div className="projects__grid">
            {t.items.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <ProjectCard project={project} t={t} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, t }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const x = ((e.clientX - cx) / (rect.width / 2)) * 8
    const y = -((e.clientY - cy) / (rect.height / 2)) * 8
    setTilt({ x, y })
  }

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className="project-card glass-card"
      style={{
        transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        borderColor: hovered ? `${project.color}55` : undefined,
        boxShadow: hovered ? `0 20px 60px ${project.color}22` : undefined,
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Top accent line */}
      <div
        className="project-card__accent"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="project-card__header">
        <div className="project-card__icon-wrap" style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}>
          <span className="project-card__icon">{project.icon}</span>
        </div>

        {project.featured && (
          <span className="project-card__featured">
            <Star size={12} fill="currentColor" /> {t.featured}
          </span>
        )}

        <div className="project-card__links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__link" title={t.viewSite}>
              <Globe size={16} />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link" title={t.viewGithub}>
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
      </div>

      <div className="project-card__tags">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="tag"
            style={{
              background: `${project.color}15`,
              color: project.color,
              borderColor: `${project.color}30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
