import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Globe, Cpu, Coffee } from 'lucide-react'
import './AboutSection.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const facts = [
  { icon: Coffee, label: 'Cafés consumidos', value: '∞' },
  { icon: Code2, label: 'Linhas de código', value: '20k+' },
  { icon: Globe, label: 'Projetos concluídos', value: '6+' },
  { icon: Database, label: 'Tecnologias', value: '15+' },
]

const interests = [
  'Desenvolvimento Web', 'Infraestruturas', 'Bases de Dados', 'Redes',
  'IA & Prompt Engineering', 'UI/UX Design', 'Hardware & Suporte', 'ERP & Sistemas'
]

function useScrollInView() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, inView }
}

export default function AboutSection() {
  const { ref, inView } = useScrollInView()

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
            Quem sou eu
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Sobre <span className="gradient-text">Mim</span>
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
                  <Cpu size={14} /> Técnico de TI / Engenheiro de Software
                </p>
                <p>
                  Recém-diplomado em CTeSP de Tecnologias de Informação (Universidade do Algarve)
                  e atual aluno da Licenciatura em Engenharia de Sistemas e Tecnologias Informáticas.
                  Especializado em infraestruturas, hardware e construção de software.
                </p>
                <p>
                  Combina experiência prática no desenvolvimento e programação com execução no terreno:
                  manutenção de equipamentos, configuração de redes e instalação de sistemas (CCTV e hardware).
                  Proativo, focado em troubleshooting rápido e com forte capacidade para aliar
                  lógica de código às exigências práticas do trabalho de campo e laboratório.
                </p>
              </div>

              <div className="about__interests">
                <p className="about__interests-title">Interesses</p>
                <div className="about__tags">
                  {interests.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — stats + info */}
            <div className="about__right">
              {/* Fact cards */}
              <motion.div className="about__facts" variants={stagger}>
                {facts.map(({ icon: Icon, label, value }) => (
                  <motion.div
                    key={label}
                    className="glass-card about__fact"
                    variants={fadeUp}
                  >
                    <Icon size={22} className="about__fact-icon" />
                    <span className="about__fact-value gradient-text">{value}</span>
                    <span className="about__fact-label">{label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Info card */}
              <motion.div className="glass-card about__info-card" variants={fadeUp}>
                <h4 className="about__info-title">Informação Rápida</h4>
                <ul className="about__info-list">
                  <InfoRow label="Localização" value="Faro, Portugal 🇵🇹" />
                  <InfoRow label="Formação" value="Licenciatura ESTI (em curso)" />
                  <InfoRow label="Diploma" value="CTeSP TI — Univ. Algarve 🎓" />
                  <InfoRow label="Disponibilidade" value="Imediata" />
                  <InfoRow label="Línguas" value="PT / RO / EN / ES" />
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
