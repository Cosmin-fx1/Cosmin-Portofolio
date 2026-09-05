export const translations = {
  en: {
    // Navbar
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      cta: 'Contact Me',
    },

    // Hero
    hero: {
      status: 'Available for opportunities',
      greeting: 'Hi, I\'m',
      rolePrefix: 'IT Technician & ',
      role: 'Software Engineer',
      description:
        'Recently graduated with a CTeSP in Information Technologies and currently enrolled in the BSc in Systems & IT Engineering. Specialised in infrastructure, software development and practical field solutions.',
      cta_projects: 'View Projects',
      cta_contact: 'Get in Touch',
    },

    // About
    about: {
      label: 'Who I am',
      title: 'About',
      titleAccent: 'Me',
      role: 'IT Technician / Software Engineer',
      bio1:
        'Recently graduated with a CTeSP in Information Technologies (University of Algarve) and currently enrolled in the BSc in Systems & IT Engineering. Specialised in infrastructure, hardware and software development.',
      bio2:
        'Combines hands-on development and programming experience with field execution: equipment maintenance, network configuration and system installation (CCTV & hardware). Proactive, focused on fast troubleshooting and able to bridge code logic with practical field and lab demands.',
      interestsTitle: 'Interests',
      interests: [
        'Web Development', 'Infrastructure', 'Databases', 'Networking',
        'AI & Prompt Engineering', 'UI/UX Design', 'Hardware & Support', 'ERP & Systems'
      ],
      facts: [
        { label: 'Coffees consumed', value: '∞' },
        { label: 'Lines of code', value: '20k+' },
        { label: 'Projects completed', value: '6+' },
        { label: 'Technologies', value: '15+' },
      ],
      infoTitle: 'Quick Info',
      info: [
        { label: 'Location', value: 'Faro, Portugal 🇵🇹' },
        { label: 'Degree', value: 'BSc ESTI (ongoing)' },
        { label: 'Diploma', value: 'CTeSP IT — Univ. Algarve 🎓' },
        { label: 'Availability', value: 'Immediate' },
        { label: 'Languages', value: 'PT / RO / EN / ES' },
      ],
    },

    // Skills
    skills: {
      label: 'What I can do',
      title: 'Technical',
      titleAccent: 'Skills',
      subtitle: 'Technologies and tools I work with. Always learning something new.',
      categories: [
        {
          name: 'Frontend & Web',
          color: '#61dafb',
          skills: [
            { name: 'HTML & CSS', level: 92 },
            { name: 'JavaScript', level: 82 },
            { name: 'React', level: 78 },
            { name: 'Bootstrap / ASP.NET', level: 72 },
          ],
        },
        {
          name: 'Backend & Languages',
          color: '#68a063',
          skills: [
            { name: 'Java', level: 75 },
            { name: 'Python', level: 78 },
            { name: 'Node.js', level: 70 },
            { name: 'REST APIs', level: 72 },
          ],
        },
        {
          name: 'Databases',
          color: '#f6c90e',
          skills: [
            { name: 'SQL Server', level: 80 },
            { name: 'PostgreSQL / Supabase', level: 78 },
            { name: 'MySQL', level: 75 },
            { name: 'UML Modelling', level: 68 },
          ],
        },
        {
          name: 'Infrastructure & Tools',
          color: '#f1502f',
          skills: [
            { name: 'Git & GitHub', level: 85 },
            { name: 'Linux / Virtualisation', level: 72 },
            { name: 'Networking & CCTV', level: 70 },
            { name: 'AI & Prompt Engineering', level: 88 },
          ],
        },
      ],
    },

    // Projects
    projects: {
      label: 'What I\'ve built',
      title: 'My',
      titleAccent: 'Projects',
      subtitle: 'A selection of projects developed during my studies, on my own initiative and for real clients.',
      featured: 'Featured',
      viewSite: 'View Site',
      viewGithub: 'GitHub',
      items: [
        {
          id: 1,
          title: 'Personal Portfolio',
          description:
            'This site! A modern portfolio built with React and Vite, featuring fluid animations, glassmorphism design and a premium user experience.',
          tags: ['React', 'Vite', 'Framer Motion', 'CSS'],
          github: 'https://github.com/',
          live: '#',
          featured: true,
          color: '#7c3aed',
          icon: '🚀',
        },
        {
          id: 2,
          title: 'Personal Finance Management',
          description:
            'Personal finance management system with multiple web apps developed with AI assistance. Supabase (PostgreSQL) and Microsoft SQL Server databases, with interactive dashboards and automated reports.',
          tags: ['Supabase', 'PostgreSQL', 'SQL Server', 'AI', 'Web Apps'],
          github: null,
          live: null,
          color: '#06b6d4',
          icon: '💰',
        },
        {
          id: 3,
          title: 'MediaMinTech',
          description:
            'Professional website developed for MediaMinTech, focused on tech and media solutions. Built with Durable, an AI-powered website builder.',
          tags: ['Durable', 'AI', 'Web Design', 'SEO', 'DNS', 'Domains', 'Indexing'],
          github: null,
          live: 'https://mediamintech.com/',
          color: '#10b981',
          icon: '📡',
        },
        {
          id: 4,
          title: 'Cantinho Curioso',
          description:
            'Online store and institutional site for Cantinho Curioso, built with Durable. Appealing design focused on user experience to showcase products and services.',
          tags: ['Durable', 'AI', 'E-commerce', 'Web Design', 'SEO', 'DNS', 'Domains', 'Indexing', 'Management'],
          github: null,
          live: 'https://www.cantinhocurioso.pt/',
          color: '#f59e0b',
          icon: '🐾',
        },
        {
          id: 5,
          title: 'Hammer J Construções',
          description:
            'Professional website for a civil construction company, built with Durable. Showcases services, project portfolio and direct client contact.',
          tags: ['Durable', 'AI', 'Web Design', 'SEO', 'DNS', 'Domains', 'Indexing'],
          github: null,
          live: 'https://hammerjconstrucoes.com/',
          color: '#f97316',
          icon: '🔨',
        },
        {
          id: 6,
          title: 'noFinanças',
          description:
            'Personal finance management app with a Supabase database, developed with AI assistance. Expense and income tracking, budgets and detailed financial reports.',
          tags: ['Supabase', 'PostgreSQL', 'AI', 'Personal Finance'],
          github: null,
          live: null,
          color: '#ec4899',
          icon: '📊',
        },
      ],
    },

    // Education
    education: {
      label: 'Academic & professional path',
      title: 'Education &',
      titleAccent: 'Experience',
      subtitle: 'My academic journey and professional experience.',
      current: 'Ongoing',
      items: [
        {
          type: 'edu',
          title: 'BSc in Systems & IT Engineering',
          institution: 'University of Algarve',
          period: '2026 – present',
          description:
            'Continuation of the academic journey in engineering, deepening knowledge in systems, software architecture, security and advanced development.',
          highlights: ['Software Engineering', 'Systems', 'Architecture', 'Security'],
          color: '#7c3aed',
          current: true,
        },
        {
          type: 'work',
          title: 'IT Curricular Internship',
          institution: 'Anturio Corporation — Faro, Portugal',
          period: '11/2025 – 06/2026',
          description:
            'Web Development & AI: UI/UX restructuring of intranet platforms (HTML/CSS/JS, Bootstrap, ASP.NET) and web app development (React, Node.js), using Prompt Engineering for code optimisation. ERP management (PHC CS), IIS server administration and relational database maintenance (SQL Server, PostgreSQL). Agile teamwork (Kanban) with Git/GitHub.',
          highlights: ['React', 'Node.js', 'ASP.NET', 'SQL Server', 'PostgreSQL', 'Git', 'Agile'],
          color: '#06b6d4',
        },
        {
          type: 'edu',
          title: 'CTeSP in Information Technologies',
          institution: 'University of Algarve — Faro, Portugal',
          period: '2024 – 2026',
          description:
            'Higher professional technical course focused on programming, networking, databases, operating systems and web development. Skills in Java, Python, JavaScript, UML, SQL and environment virtualisation.',
          highlights: ['Java', 'Python', 'JavaScript', 'SQL', 'Networking', 'Virtualisation', 'Web Dev'],
          color: '#10b981',
        },
        {
          type: 'work',
          title: 'IT Technician & Support',
          institution: 'Cantinho Curioso — Faro, Portugal',
          period: '2025',
          description:
            'Installation and configuration of commercial equipment (PCs, cash registers, network peripherals) and billing/management software setup (Moloni). System category structuring, product entry, stock control and invoice processing.',
          highlights: ['Hardware', 'Networking', 'Moloni', 'IT Support', 'POS'],
          color: '#f59e0b',
        },
        {
          type: 'work',
          title: 'Communication & Multimedia Intern',
          institution: 'UALG Academic Services — Faro, Portugal',
          period: '05/2019 – 07/2019',
          description:
            'Website management, social media engagement and institutional online presence optimisation. Creation of advertising materials (physical and digital) and photo/video editing (Adobe Premiere, Sony Vegas). Administrative support and market research.',
          highlights: ['Web', 'Social Media', 'Adobe Premiere', 'Photoshop', 'Sony Vegas'],
          color: '#ec4899',
        },
        {
          type: 'edu',
          title: '12th Year — Communication, Marketing, PR & Advertising',
          institution: 'Agrupamento Escolas João de Deus — Faro, Portugal',
          period: '2017 – 2020',
          description:
            'Creation of advertising content (digital and physical), photography and professional multimedia editing. Practical experience in Public Relations, partnership prospecting and event organisation.',
          highlights: ['Photoshop', 'Premiere', 'Illustrator', 'Sony Vegas', 'PR', 'Advertising'],
          color: '#a855f7',
        },
      ],
    },

    // Contact
    contact: {
      label: 'Let\'s talk',
      title: 'Get in',
      titleAccent: 'Touch',
      cta_title: 'Interested in working together?',
      cta_p1:
        'I\'m looking for a <strong>job in IT</strong> — software development, infrastructure or technical support. I\'m also available for <strong>freelance and creative projects</strong>: websites, digital design, multimedia or any challenge that combines technology and creativity.',
      cta_p2:
        'If you have a vacancy, an interesting project or simply want to exchange ideas, don\'t hesitate to reach out!',
      location: 'Faro, Portugal',
      available: 'Available',
      sendEmail: 'Send Email',
    },

    // Footer
    footer: {
      built: 'Built with',
      by: 'by Cosmin Ionuț',
    },
  },

  pt: {
    // Navbar
    nav: {
      about: 'Sobre',
      skills: 'Competências',
      projects: 'Projetos',
      education: 'Educação',
      contact: 'Contacto',
      cta: 'Contactar',
    },

    // Hero
    hero: {
      status: 'Disponível para oportunidades',
      greeting: 'Olá, eu sou',
      rolePrefix: 'Técnico de TI & ',
      role: 'Engenheiro de Software',
      description:
        'Recém-diplomado em CTeSP de Tecnologias de Informação e atual aluno da Licenciatura em Engenharia de Sistemas e Tecnologias Informáticas. Especializado em infraestruturas, desenvolvimento de software e soluções práticas no terreno.',
      cta_projects: 'Ver Projetos',
      cta_contact: 'Entrar em Contacto',
    },

    // About
    about: {
      label: 'Quem sou eu',
      title: 'Sobre',
      titleAccent: 'Mim',
      role: 'Técnico de TI / Engenheiro de Software',
      bio1:
        'Recém-diplomado em CTeSP de Tecnologias de Informação (Universidade do Algarve) e atual aluno da Licenciatura em Engenharia de Sistemas e Tecnologias Informáticas. Especializado em infraestruturas, hardware e construção de software.',
      bio2:
        'Combina experiência prática no desenvolvimento e programação com execução no terreno: manutenção de equipamentos, configuração de redes e instalação de sistemas (CCTV e hardware). Proativo, focado em troubleshooting rápido e com forte capacidade para aliar lógica de código às exigências práticas do trabalho de campo e laboratório.',
      interestsTitle: 'Interesses',
      interests: [
        'Desenvolvimento Web', 'Infraestruturas', 'Bases de Dados', 'Redes',
        'IA & Prompt Engineering', 'UI/UX Design', 'Hardware & Suporte', 'ERP & Sistemas'
      ],
      facts: [
        { label: 'Cafés consumidos', value: '∞' },
        { label: 'Linhas de código', value: '20k+' },
        { label: 'Projetos concluídos', value: '6+' },
        { label: 'Tecnologias', value: '15+' },
      ],
      infoTitle: 'Informação Rápida',
      info: [
        { label: 'Localização', value: 'Faro, Portugal 🇵🇹' },
        { label: 'Formação', value: 'Licenciatura ESTI (em curso)' },
        { label: 'Diploma', value: 'CTeSP TI — Univ. Algarve 🎓' },
        { label: 'Disponibilidade', value: 'Imediata' },
        { label: 'Línguas', value: 'PT / RO / EN / ES' },
      ],
    },

    // Skills
    skills: {
      label: 'O que sei fazer',
      title: 'Competências',
      titleAccent: 'Técnicas',
      subtitle: 'Tecnologias e ferramentas com que trabalho. Sempre a aprender algo novo.',
      categories: [
        {
          name: 'Frontend & Web',
          color: '#61dafb',
          skills: [
            { name: 'HTML & CSS', level: 92 },
            { name: 'JavaScript', level: 82 },
            { name: 'React', level: 78 },
            { name: 'Bootstrap / ASP.NET', level: 72 },
          ],
        },
        {
          name: 'Backend & Linguagens',
          color: '#68a063',
          skills: [
            { name: 'Java', level: 75 },
            { name: 'Python', level: 78 },
            { name: 'Node.js', level: 70 },
            { name: 'REST APIs', level: 72 },
          ],
        },
        {
          name: 'Bases de Dados',
          color: '#f6c90e',
          skills: [
            { name: 'SQL Server', level: 80 },
            { name: 'PostgreSQL / Supabase', level: 78 },
            { name: 'MySQL', level: 75 },
            { name: 'Modelação UML', level: 68 },
          ],
        },
        {
          name: 'Infraestrutura & Ferramentas',
          color: '#f1502f',
          skills: [
            { name: 'Git & GitHub', level: 85 },
            { name: 'Linux / Virtualização', level: 72 },
            { name: 'Redes & CCTV', level: 70 },
            { name: 'IA & Prompt Engineering', level: 88 },
          ],
        },
      ],
    },

    // Projects
    projects: {
      label: 'O que construí',
      title: 'Meus',
      titleAccent: 'Projetos',
      subtitle: 'Uma seleção de projetos que desenvolvi ao longo do curso, por iniciativa própria e para clientes reais.',
      featured: 'Destaque',
      viewSite: 'Ver Site',
      viewGithub: 'GitHub',
      items: [
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
      ],
    },

    // Education
    education: {
      label: 'Percurso académico & profissional',
      title: 'Educação &',
      titleAccent: 'Experiência',
      subtitle: 'O meu caminho académico e experiência profissional.',
      current: 'Em curso',
      items: [
        {
          type: 'edu',
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
          title: '12º Ano — Comunicação, Marketing, RP e Publicidade',
          institution: 'Agrupamento Escolas João de Deus — Faro, Portugal',
          period: '2017 – 2020',
          description:
            'Criação de conteúdo publicitário (digital e físico), fotografia e edição multimédia profissional. Experiência prática em Relações Públicas, prospeção de parcerias e organização de eventos.',
          highlights: ['Photoshop', 'Premiere', 'Illustrator', 'Sony Vegas', 'RP', 'Publicidade'],
          color: '#a855f7',
        },
      ],
    },

    // Contact
    contact: {
      label: 'Vamos falar',
      title: 'Entre em',
      titleAccent: 'Contacto',
      cta_title: 'Interessado em trabalhar juntos?',
      cta_p1:
        'Estou à procura de <strong>emprego na área de TI</strong> — desenvolvimento de software, infraestruturas ou suporte técnico. Também estou disponível para <strong>trabalhos freelance e projetos criativos</strong>: websites, design digital, multimédia ou qualquer desafio que combine tecnologia e criatividade.',
      cta_p2:
        'Se tens uma vaga, um projeto interessante ou simplesmente queres trocar ideias, não hesites em entrar em contacto!',
      location: 'Faro, Portugal',
      available: 'Disponível',
      sendEmail: 'Enviar Email',
    },

    // Footer
    footer: {
      built: 'Feito com',
      by: 'por Cosmin Ionuț',
    },
  },
}
