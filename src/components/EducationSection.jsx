import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Calendar, Briefcase } from 'lucide-react'
import './EducationSection.css'

const timeline = [
  {
    type: 'edu',
    icon: GraduationCap,
    title: 'Licenciatura em Engenharia de Sistemas e Tecnologias Informáticas',
    institution: 'Universidade do Algarve',
    period: '2026 – presente',
    description:
      'Continuação do percurso académico em engenharia, aprofundando conhecimentos em sistemas, arquitetura de software, segurança e desenvolvimento avançado.',
    highlights: ['Engenharia de Software', 'Sistemas', 'Arquitetura', 'Segurança'],
    color: '#7c3aed',
    current: true,
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Estágio Curricular em TI',
    institution: 'Anturio Corporation — Faro, Portugal',
    period: '11/2025 – 06/2026',
    description:
      'Desenvolvimento Web & IA: reestruturação UI/UX de plataformas intranet (HTML/CSS/JS, Bootstrap, ASP.NET) e desenvolvimento de apps web (React, Node.js), utilizando Prompt Engineering para otimização de código. Gestão de ERP (PHC CS), administração de servidores IIS e manutenção de bases de dados (SQL Server, PostgreSQL). Trabalho em equipa sob metodologias Agile (Kanban) com Git/GitHub.',
    highlights: ['React', 'Node.js', 'ASP.NET', 'SQL Server', 'PostgreSQL', 'Git', 'Agile'],
    color: '#06b6d4',
  },
  {
    type: 'edu',
    icon: GraduationCap,
    title: 'CTeSP em Tecnologias Informáticas',
    institution: 'Universidade do Algarve — Faro, Portugal',
    period: '2024 – 2026',
    description:
      'Curso técnico superior profissional com foco em programação, redes de computadores, bases de dados, sistemas operativos e desenvolvimento web. Competências em Java, Python, JavaScript, UML, SQL e virtualização de ambientes.',
    highlights: ['Java', 'Python', 'JavaScript', 'SQL', 'Redes', 'Virtualização', 'Web Dev'],
    color: '#10b981',
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Técnico de TI e Suporte',
    institution: 'Cantinho Curioso — Faro, Portugal',
    period: '2025',
    description:
      'Instalação e configuração de equipamentos comerciais (PCs, caixas registadoras, periféricos de rede) e parametrização de software de faturação e gestão (Moloni). Estruturação de categorias de sistema, inserção de produtos, controlo de stock e processamento de faturas.',
    highlights: ['Hardware', 'Redes', 'Moloni', 'Suporte TI', 'POS'],
    color: '#f59e0b',
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Estagiário de Comunicação e Multimédia',
    institution: 'Serviços Académicos UALG — Faro, Portugal',
    period: '05/2019 – 07/2019',
    description:
      'Gestão do website, dinamização de redes sociais e otimização da presença online da instituição. Criação de materiais publicitários (físicos e digitais) e edição de fotografia e vídeo (Adobe Premiere, Sony Vegas). Apoio administrativo e estudos de mercado.',
    highlights: ['Web', 'Social Media', 'Adobe Premiere', 'Photoshop', 'Sony Vegas'],
    color: '#ec4899',
  },
  {
    type: 'edu',
    icon: GraduationCap,
    title: '12º Ano — Comunicação, Marketing, RP e Publicidade',
    institution: 'Agrupamento Escolas João de Deus — Faro, Portugal',
    period: '2017 – 2020',
    description:
      'Criação de conteúdo publicitário (digital e físico), fotografia e edição multimédia profissional. Experiência prática em Relações Públicas, prospeção de parcerias e organização de eventos.',
    highlights: ['Photoshop', 'Premiere', 'Illustrator', 'Sony Vegas', 'RP', 'Publicidade'],
    color: '#a855f7',
  },
]

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
          <motion.p className="section-label" variants={fadeUp}>Percurso académico & profissional</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Educação & <span className="gradient-text">Experiência</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            O meu caminho académico e experiência profissional.
          </motion.p>

          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div key={i} className="timeline__item" variants={fadeUp}>
                {/* Line */}
                <div className="timeline__line-wrap">
                  <motion.div
                    className="timeline__icon"
                    style={{ background: `${item.color}20`, border: `2px solid ${item.color}60` }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </motion.div>
                  {i < timeline.length - 1 && (
                    <div className="timeline__connector" />
                  )}
                </div>

                {/* Card */}
                <div className="glass-card timeline__card">
                  {item.current && (
                    <div className="timeline__current-badge">
                      <span className="timeline__current-dot" />
                      Em curso
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
