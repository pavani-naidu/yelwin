import { ServiceItem, CaseStudy, InsightArticle, Testimonial, StepItem, TechItem, CompanyMetric } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'digital-products',
    number: '01',
    title: 'DIGITAL PRODUCTS',
    category: 'digital-products',
    description: 'We design and build high-performance digital products that are made for real users and scalable business growth.',
    services: [
      'Web Development',
      'SaaS Development',
      'Web Applications',
      'Mobile Applications',
      'E-commerce Solutions'
    ],
    cta: 'EXPLORE DIGITAL PRODUCTS →',
    fullDetails: {
      overview: 'Transforming complex business logic into lightning-fast, highly intuitive digital products designed for enterprise resilience and end-user delight.',
      capabilities: [
        'Full-Stack Cloud Architectures',
        'Headless & Microfrontend Systems',
        'Cross-Platform Mobile (iOS/Android)',
        'Custom SaaS Multitenant Foundations',
        'High-Throughput API Gateway Engineering'
      ],
      deliverables: ['Production Codebase', 'Architecture Documentation', 'Automated CI/CD Pipelines', 'UX Design Systems'],
      typicalTimeline: '8 – 16 Weeks'
    }
  },
  {
    id: 'ai-automation',
    number: '02',
    title: 'AI & AUTOMATION',
    category: 'ai-automation',
    description: 'We use intelligent technology to simplify complex workflows, automate processes, and unlock unprecedented operational momentum.',
    services: [
      'AI Solutions',
      'AI Automation',
      'AI Integrations',
      'Autonomous AI Agents',
      'Business Process Automation'
    ],
    cta: 'EXPLORE AI →',
    fullDetails: {
      overview: 'Deploying domain-tailored neural models, intelligent document processing, and autonomous multi-agent systems to accelerate execution speed by orders of magnitude.',
      capabilities: [
        'Custom RAG & Vector Knowledge Bases',
        'Autonomous Task Automation Agents',
        'LLM Fine-Tuning & Model Distillation',
        'Workflow & ERP AI Orchestration',
        'Intelligent Analytics & Predictive Models'
      ],
      deliverables: ['Trained/Integrated AI Models', 'Agent Workflows', 'Security & Governance Rules', 'API Integration Connectors'],
      typicalTimeline: '6 – 12 Weeks'
    }
  },
  {
    id: 'brand-design',
    number: '03',
    title: 'BRAND & DESIGN',
    category: 'brand-design',
    description: 'We create distinctive visual identities and digital product experiences that resonate instantly and endure over time.',
    services: [
      'Brand Strategy',
      'Visual Identity',
      'UI/UX Design',
      'Product Design',
      'Creative Direction'
    ],
    cta: 'EXPLORE BRAND & DESIGN →',
    fullDetails: {
      overview: 'Forging iconic, memorable brands and atomic UI design systems that elevate product trust and differentiate industry leaders in saturated markets.',
      capabilities: [
        'Comprehensive Brand Architecture',
        'Typography & Color Strategy',
        'Interactive Figma Design Systems',
        'User Journey & Wireframe Mapping',
        'Motion & Sonic Brand Design'
      ],
      deliverables: ['Brand Guidelines Deck', 'Figma Component Libraries', 'Design Specs', '3D Asset Assets'],
      typicalTimeline: '4 – 10 Weeks'
    }
  },
  {
    id: 'digital-growth',
    number: '04',
    title: 'DIGITAL GROWTH',
    category: 'digital-growth',
    description: 'We help ambitious businesses build global visibility, acquire high-value customers, and dominate their digital category.',
    services: [
      'Digital Marketing',
      'Social Media Architecture',
      'Content Strategy',
      'Performance Marketing',
      'Growth Strategy'
    ],
    cta: 'EXPLORE GROWTH →',
    fullDetails: {
      overview: 'Data-driven growth engines combining precision customer acquisition, technical SEO, viral product loops, and brand storytelling.',
      capabilities: [
        'Product-Led Growth (PLG) Loops',
        'Full-Funnel Conversion Optimization',
        'Programmatic Content Engines',
        'Data Analytics & Event Pipelines',
        'Paid Acquisition Strategy'
      ],
      deliverables: ['Growth Architecture Playbook', 'Analytics Dashboards', 'Campaign Assets', 'Conversion Funnel Audits'],
      typicalTimeline: 'Ongoing / Quarterly Sprints'
    }
  },
  {
    id: 'tech-strategy',
    number: '05',
    title: 'TECH STRATEGY',
    category: 'tech-strategy' as any,
    description: 'Product strategy, tech consulting & scalable architecture engineered for long-term category leadership.',
    services: [
      'Product Strategy',
      'Tech Consulting',
      'Scalable Architecture',
      'Cloud Infrastructure',
      'System Audits'
    ],
    cta: 'EXPLORE STRATEGY →',
    fullDetails: {
      overview: 'Strategic technical guidance, system refactoring roadmaps, and cloud architecture built to support rapid scale without technical debt.',
      capabilities: [
        'Enterprise Architecture Review',
        'Cloud Cost & Performance Optimization',
        'Security & Compliance Audits',
        'Technology Stack Modernization'
      ],
      deliverables: ['Strategy Roadmap', 'Architecture Diagrams', 'Security Compliance Audits'],
      typicalTimeline: '2 – 6 Weeks'
    }
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'wealthlynk',
    title: 'Wealthlynk',
    client: 'Wealthlynk Global',
    industry: 'FINTECH PLATFORM',
    category: 'FINTECH PLATFORM',
    year: '2026',
    description: 'A unified high-velocity wealth management platform providing real-time multi-asset intelligence and algorithmic portfolio rebalancing.',
    fullStory: {
      challenge: 'High-net-worth investors and portfolio managers lacked a unified dark-mode analytics console capable of handling multi-currency cross-chain liquidity and live asset telemetry.',
      solution: 'YELWIN engineered a sub-second financial engine with responsive dark web and mobile applications, encrypted key vaults, and high-frequency data pipelines.',
      technologies: ['React 19', 'TypeScript', 'Node.js', 'Rust Engine', 'Tailwind CSS', 'Mobile Native'],
      results: [
        { label: 'Latency', value: '< 20ms' },
        { label: 'Assets Managed', value: '$1.8B+' },
        { label: 'User Satisfaction', value: '99.4%' }
      ]
    },
    services: ['Digital Platform', 'Web Development', 'Mobile Applications', 'UI/UX Design'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    id: 'mediqonnect',
    title: 'MediConnect',
    client: 'MediConnect Health Systems',
    industry: 'HEALTHCARE APP',
    category: 'HEALTHCARE APP',
    year: '2025',
    description: 'Next-generation mobile patient health management and doctor telemetry platform connecting clinical care teams globally.',
    fullStory: {
      challenge: 'Remote clinical monitoring platforms lacked immediate biometric clarity and failed to maintain zero-trust HIPAA compliance across mobile devices.',
      solution: 'YELWIN designed MediConnect with a dark, high-contrast, eye-safe mobile interface, real-time vitals sync, and secure end-to-end encrypted messaging.',
      technologies: ['React Native', 'TypeScript', 'HIPAA Cloud', 'Biometric Auth', 'Node.js'],
      results: [
        { label: 'Patient Response', value: '3x Faster' },
        { label: 'Clinical Adoption', value: '450+ Clinics' },
        { label: 'App Rating', value: '4.9 / 5.0' }
      ]
    },
    services: ['Mobile Application', 'UI/UX Design', 'Cloud Architecture'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    id: 'novara',
    title: 'Novara Studio',
    client: 'Novara Capital Group',
    industry: 'BRAND IDENTITY',
    category: 'BRAND IDENTITY',
    year: '2025',
    description: 'Comprehensive brand identity, typography architecture, and bespoke digital touchpoints for an international luxury venture firm.',
    fullStory: {
      challenge: 'Novara required a iconic, timeless visual brand system that projected authority, architectural precision, and global confidence.',
      solution: 'YELWIN forged Novara’s brand guidelines, geometric wordmark emblem, tactile physical assets, and bespoke digital presence.',
      technologies: ['Brand Strategy', 'Figma Design System', 'Typography Architecture', '3D Asset Creation'],
      results: [
        { label: 'Brand Value', value: '$500M+ AUM' },
        { label: 'Global Recognition', value: 'Top 10 Award' },
        { label: 'Design System', value: '100% Coverage' }
      ]
    },
    services: ['Brand Identity', 'Visual Identity', 'Brand Strategy', 'Creative Direction'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    id: 'taskforge',
    title: 'Taskforge',
    client: 'Taskforge Inc.',
    industry: 'SAAS PRODUCT',
    category: 'SAAS PRODUCT',
    year: '2026',
    description: 'An autonomous cloud engineering task management suite optimizing sprint workflows with predictive AI task assignment.',
    fullStory: {
      challenge: 'Engineering leaders struggled with bloated project management tools that slowed down developer deployment velocity and created context switches.',
      solution: 'YELWIN built Taskforge—a sleek, keyboard-first developer workspace featuring real-time collaborative state, autonomous bug triage, and dark minimalist aesthetics.',
      technologies: ['Next.js', 'Node.js', 'Vector DB', 'LLM Agents', 'WebSockets'],
      results: [
        { label: 'Sprint Speed', value: '2.4x Faster' },
        { label: 'Daily Active Users', value: '180,000+' },
        { label: 'Retention Rate', value: '94%' }
      ]
    },
    services: ['SaaS Product', 'AI Solutions', 'Web Applications', 'Brand Strategy'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    featured: true
  }
];

export const HOW_WE_WORK_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'We immerse ourselves into your vision, target audience, competitive landscape, and key architectural challenges.',
    deliverables: ['Product Discovery Blueprint', 'Technical Feasibility Audit', 'User Persona Ecosystem', 'Risk Mitigation Roadmap']
  },
  {
    number: '02',
    title: 'DEFINE',
    description: 'We distill complex insights into a crisp product strategy, technical architecture, and system design specifications.',
    deliverables: ['System Architecture Diagram', 'Feature Prioritization Matrix', 'Database & API Schema', 'KPI Framework']
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'We craft iconic brand assets, atomic design systems, and responsive user interfaces optimized for intuitive human interaction.',
    deliverables: ['Interactive Prototypes', 'Design System Library', 'Brand Identity Assets', 'Micro-Interaction Specs']
  },
  {
    number: '04',
    title: 'BUILD',
    description: 'Our senior engineers write clean, robust, highly scalable production code backed by automated testing and CI/CD pipelines.',
    deliverables: ['Production Codebase', 'Automated Test Suites', 'AI & API Integration Points', 'Security Audit Logs']
  },
  {
    number: '05',
    title: 'LAUNCH',
    description: 'We conduct rigorous stress testing, performance audits, zero-downtime deployment, and team enablement.',
    deliverables: ['Cloud Deployment Infrastructure', 'Performance Benchmark Audit', 'User Training Sessions', 'Launch Playbook']
  },
  {
    number: '06',
    title: 'GROW',
    description: 'We continuously analyze telemetry data, refine conversion funnels, integrate emergent technologies, and scale capacities.',
    deliverables: ['Growth Analytics Reports', 'Product Iteration Sprints', 'AI System Model Retraining', 'Continuous Optimization']
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'React 19', category: 'Frontend', description: 'Modern concurrent UI component library' },
  { name: 'Next.js', category: 'Frontend', description: 'Full-stack React framework with server components' },
  { name: 'Node.js', category: 'Backend', description: 'Event-driven high-performance server runtime' },
  { name: 'Python', category: 'AI & ML', description: 'Primary language for AI pipelines, LLMs, and data pipelines' },
  { name: 'TypeScript', category: 'Frontend', description: 'Strict type safety across full application stack' },
  { name: 'AI Workflows', category: 'AI & ML', description: 'Autonomous agents, RAG pipelines, and model finetuning' },
  { name: 'Three.js / WebGL', category: 'Frontend', description: 'Hardware-accelerated 3D graphics & interactive visuals' },
  { name: 'PostgreSQL', category: 'Backend', description: 'Reliable relational database with vector search extensions' },
  { name: 'Docker & K8s', category: 'Infrastructure', description: 'Containerized deployment for cloud resilience' },
  { name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first CSS framework for precision styling' }
];

export const METRICS_DATA: CompanyMetric[] = [
  { id: 'm1', label: 'PROJECTS DELIVERED', value: '45+', subtext: 'Digital products, AI platforms & brands built worldwide' },
  { id: 'm2', label: 'BRANDS BUILT', value: '28+', subtext: 'Distinctive visual identities and scalable design systems' },
  { id: 'm3', label: 'CLIENT CAPITAL RAISED', value: '$120M+', subtext: 'Raised by startups backed by YELWIN product design' },
  { id: 'm4', label: 'GLOBAL INDUSTRIES', value: '12+', subtext: 'From AI & Fintech to BioTech and Autonomous Hardware' }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'YELWIN delivered an engineering and brand marvel. They transformed our abstract AI ideas into a product that closed our $15M Series A within three months of launch.',
    clientName: 'Marcus Vance',
    role: 'Co-Founder & CEO',
    company: 'Nexus OS',
    industry: 'Enterprise AI'
  },
  {
    id: 't2',
    quote: 'Working with YELWIN feels like collaborating with a top 1% global product team. Their clarity, visual precision, and execution speed are unmatched.',
    clientName: 'Elena Rostova',
    role: 'Chief Product Officer',
    company: 'Aether Global Payments',
    industry: 'Fintech'
  },
  {
    id: 't3',
    quote: 'The 3D HUD telemetry platform YELWIN designed for our industrial drones became our primary competitive advantage during enterprise sales demos.',
    clientName: 'Dr. Aaron Chen',
    role: 'Founder & CTO',
    company: 'Vortex Motion',
    industry: 'Autonomous Systems'
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'ai-native-architecture',
    title: 'Building AI-Native Products: Beyond Simple Wrapper APIs',
    slug: 'building-ai-native-products',
    category: 'AI',
    author: {
      name: 'YELWIN Architecture Group',
      role: 'Research & Engineering'
    },
    publishedAt: 'July 2026',
    readTime: '5 min read',
    excerpt: 'How leading software companies transition from standard API calls to autonomous agentic architectures with local state optimization.',
    content: [
      'The era of static web interfaces calling simple completion APIs is rapidly concluding. Tomorrow’s breakout products do not treat AI as a decorative plugin—they are designed ground-up around autonomous feedback loops.',
      'An AI-native product architecture operates as a collaborative engine. It anticipates user intent, orchestrates multi-agent tasks asynchronously, and refines internal vector indexes based on real-time telemetry.',
      'Key architectural principles include zero-latency UI optimistic updates, streaming state reconciliation, domain-specific guardrails, and deterministic fallbacks when probabilistic models encounter high variance.'
    ],
    featured: true
  },
  {
    id: 'monochrome-minimalism',
    title: 'The Power of High-Contrast Monochrome in Digital Brand Authority',
    slug: 'power-of-high-contrast-monochrome',
    category: 'Branding',
    author: {
      name: 'YELWIN Design Lab',
      role: 'Brand & UI Direction'
    },
    publishedAt: 'June 2026',
    readTime: '4 min read',
    excerpt: 'Why the world’s most ambitious technology pioneers choose pure black and white palettes to communicate timeless confidence.',
    content: [
      'In a digital landscape overcrowded with saturated gradients, glowing neon buttons, and decorative noise, pure contrast is the ultimate statement of authority.',
      'Monochrome typography forces radical clarity. When color is removed as a crutch, every pixel, margin ratio, font weight, and negative space dimension must stand on mathematical precision.',
      'Black and white design does not mean lack of emotion. It conveys permanence, cinematic elegance, and uncompromising focus on what truly matters: the message and the user value.'
    ],
    featured: false
  },
  {
    id: 'saas-velocity-2026',
    title: 'From Prototype to Scale: Accelerating Product Velocity in 2026',
    slug: 'accelerating-product-velocity-2026',
    category: 'Startups',
    author: {
      name: 'YELWIN Venture Strategy',
      role: 'Growth & Product'
    },
    publishedAt: 'May 2026',
    readTime: '6 min read',
    excerpt: 'A blueprint for founders to ship enterprise-ready SaaS products in weeks rather than quarters without technical debt.',
    content: [
      'Speed to market remains the most decisive variable in modern software ventures. However, rushing without structural rigor creates fragile architectures that crumble under enterprise security audits.',
      'By leveraging modular design tokens, server-side type safety, lazy-loaded micro-services, and continuous automated regression testing, engineering teams can achieve rapid iteration speed alongside enterprise durability.',
      'The modern playbook prioritizes lean core features, automated observability, and real-time user feedback telemetry from day one.'
    ],
    featured: false
  }
];
