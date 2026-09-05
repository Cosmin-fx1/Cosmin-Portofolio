import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Star, Globe } from 'lucide-react'
import './ProjectsSection.css'

const projects = [
  {
    id: 1,
    title: 'Portfólio Pessoal',
    description:
      'Este site! Um portfólio moderno, construído com React e Vite, com animações fluídas, design em glassmorphism e experiência de utilizador premium.',
    tags: ['React', 'Vite', 'Framer Motion', 'CSS'],
    github: 'https://github.com/',
    live: '#',
    featured: true,
    color: '#7c3aed',
    icon: '🚀',
  },
  {
    id: 2,
    title: 'Gestão de Finanças Pessoais',
    description:
      'Sistema de gestão de finanças pessoais com múltiplas web apps desenvolvidas com auxílio de Inteligência Artificial. Base de dados em Supabase (PostgreSQL) e SQL Server da Microsoft, com dashboards interativos e relatórios automáticos.',
    tags: ['Supabase', 'PostgreSQL', 'SQL Server', 'IA', 'Web Apps'],
    github: null,
    live: null,
    color: '#06b6d4',
    icon: '💰',
  },
  {
    id: 3,
    title: 'MediaMinTech',
    description:
      'Website profissional desenvolvido para a empresa MediaMinTech, com foco em soluções tecnológicas e media. Construído com Durable, plataforma de criação de sites com IA.',
    tags: ['Durable', 'IA', 'Web Design', 'SEO', 'DNS', 'Domínios', 'Indexação'],
    github: null,
    live: 'https://mediamintech.com/',
    color: '#10b981',
    icon: '📡',
  },
  {
    id: 4,
    title: 'Cantinho Curioso',
    description:
      'Loja online e site institucional para o Cantinho Curioso, desenvolvido com Durable. Design apelativo e foco na experiência do utilizador para apresentar os produtos e serviços.',
    tags: ['Durable', 'IA', 'E-commerce', 'Web Design', 'SEO', 'DNS', 'Domínios', 'Indexação', 'Gestão'],
    github: null,
    live: 'https://www.cantinhocurioso.pt/',
    color: '#f59e0b',
    icon: '🐾',
  },
  {
    id: 5,
    title: 'Hammer J Construções',
    description:
      'Website profissional para empresa de construção civil, desenvolvido com Durable. Apresentação dos serviços, portfólio de obras e contacto direto com o cliente.',
    tags: ['Durable', 'IA', 'Web Design', 'SEO', 'DNS', 'Domínios', 'Indexação'],
    github: null,
    live: 'https://hammerjconstrucoes.com/',
    color: '#f97316',
    icon: '🔨',
  },
  {
    id: 6,
    title: 'noFinanças',
    description:
      'Aplicação de gestão de finanças pessoais com base de dados Supabase, desenvolvida com recurso a Inteligência Artificial. Funcionalidades de controlo de despesas, receitas, orçamentos e relatórios financeiros detalhados.',
    tags: ['Supabase', 'PostgreSQL', 'IA', 'Finanças Pessoais'],
    github: null,
    live: null,
    color: '#ec4899',
    icon: '📊',
  },
]

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
          <motion.p className="section-label" variants={fadeUp}>O que construí</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Meus <span className="gradient-text">Projetos</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Uma seleção de projetos que desenvolvi ao longo do curso, por iniciativa própria e para clientes reais.
          </motion.p>

          <div className="projects__grid">
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
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
            <Star size={12} fill="currentColor" /> Destaque
          </span>
        )}

        <div className="project-card__links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__link" title="Ver Site">
              <Globe size={16} />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link" title="GitHub">
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
