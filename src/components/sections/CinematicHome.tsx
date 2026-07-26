import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight, Layers, Cpu, Compass, Activity, ShieldCheck, Settings } from 'lucide-react';
import { CinematicJourney3D } from '../3d/CinematicJourney3D';
import { ProjectEnquirySection } from './ProjectEnquirySection';
import { CASE_STUDIES_DATA, HOW_WE_WORK_STEPS } from '../../data/contentData';
import { analytics } from '../../utils/analytics';

interface CinematicHomeProps {
  onTalkClick: () => void;
}

export const CinematicHome: React.FC<CinematicHomeProps> = ({ onTalkClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position within the 500vh journey container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Local state to track scroll progress inside render loops for non-motion checks if needed
  const [currentProgress, setCurrentProgress] = useState(0);
  scrollYProgress.on('change', (latest) => {
    setCurrentProgress(latest);
  });

  // Map scroll values to overlay opacities
  // 1. Hero Overlay: Visible in [0.0, 0.16]
  const heroOpacity = useTransform(scrollYProgress, [0.0, 0.12, 0.16], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0.0, 0.16], [0, -30]);

  // 2. Build Overlay: Visible in [0.22, 0.38]
  const buildOpacity = useTransform(scrollYProgress, [0.18, 0.22, 0.35, 0.39], [0, 1, 1, 0]);
  const buildY = useTransform(scrollYProgress, [0.18, 0.39], [30, -30]);

  // 3. Automate Overlay: Visible in [0.44, 0.60]
  const automateOpacity = useTransform(scrollYProgress, [0.40, 0.44, 0.57, 0.61], [0, 1, 1, 0]);
  const automateY = useTransform(scrollYProgress, [0.40, 0.61], [30, -30]);

  // 4. Grow Overlay: Visible in [0.66, 0.82]
  const growOpacity = useTransform(scrollYProgress, [0.62, 0.66, 0.79, 0.83], [0, 1, 1, 0]);
  const growY = useTransform(scrollYProgress, [0.62, 0.83], [30, -30]);

  // 5. Journey Map Overlay: Visible in [0.86, 0.98]
  const journeyOpacity = useTransform(scrollYProgress, [0.83, 0.87, 0.96, 0.99], [0, 1, 1, 0]);

  // Editorial Section scroll target helpers
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhatWeDo = () => {
    const el = document.getElementById('what-we-do');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // State for What We Do Category Accordion
  const [activeCategory, setActiveCategory] = useState<'build' | 'automate' | 'design' | 'grow' | 'protect' | 'support'>('build');

  const capabilities = {
    build: {
      label: 'BUILD',
      icon: Layers,
      items: ['Web Development', 'SaaS Development', 'Mobile App Development'],
      desc: 'Robust full-stack systems, headless architectures, and iOS/Android applications built for high volume and sub-second load times.'
    },
    automate: {
      label: 'AUTOMATE',
      icon: Cpu,
      items: ['AI Automation', 'AI Integrations', 'Intelligent Workflows'],
      desc: 'Deploying autonomous agents, automated LLM ingestion, and task scheduling to minimize operational overhead.'
    },
    design: {
      label: 'DESIGN',
      icon: Compass,
      items: ['UI/UX Design', 'Product Design', 'Digital Experiences'],
      desc: 'Timeless visual aesthetics, atomic design systems, and responsive layouts crafted with extreme pixel precision.'
    },
    grow: {
      label: 'GROW',
      icon: Activity,
      items: ['Digital Marketing', 'Performance Marketing', 'Lead Generation'],
      desc: 'Precision conversion optimization, tracking telemetry pipelines, and programmatic SEO models to generate recurring attention.'
    },
    protect: {
      label: 'PROTECT',
      icon: ShieldCheck,
      items: ['Cybersecurity', 'VAPT', 'Security Testing'],
      desc: 'Advanced penetration testing, data encryption validation, and compliance audits safeguarding database integrity.'
    },
    support: {
      label: 'SUPPORT',
      icon: Settings,
      items: ['Maintenance', 'Optimization', 'Technical Support'],
      desc: 'Constant runtime observation, cloud cost tuning, and dependency updates maintaining prime product speed.'
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* 500vh Immersive Cinematic Timeline */}
      <div ref={containerRef} className="relative h-[480vh] w-full">
        {/* Full-screen Sticky WebGL Canvas Container */}
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0">
          <CinematicJourney3D scrollProgress={currentProgress} className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35 pointer-events-none" />
        </div>

        {/* Cinematic Content Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          
          {/* Milestone 1: Hero Scene */}
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="absolute top-0 left-0 w-full h-screen flex items-center px-6 md:px-12 pointer-events-auto"
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 flex flex-col items-start gap-4">
                <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-neutral-400 uppercase">
                  DIGITAL. AI. GROWTH.
                </span>
                <h1 className="font-mono font-black text-4xl sm:text-7xl uppercase tracking-tight text-white leading-none">
                  YOU HAVE <br />
                  THE IDEA. <br />
                  <span className="text-neutral-500">WE MAKE <br />IT REAL.</span>
                </h1>
                <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-md leading-relaxed mt-2">
                  We build digital products, automate with AI, and create digital growth systems for ambitious businesses.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <button
                    onClick={() => {
                      analytics.track('Cinematic Hero Start Click', 'CTA', 'START SOMETHING');
                      scrollToContact();
                    }}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase rounded-full hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg"
                  >
                    <span>START SOMETHING</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <button
                    onClick={scrollToWork}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-800 bg-black/60 text-white font-mono font-bold text-xs tracking-widest uppercase rounded-full hover:border-neutral-500 transition-colors cursor-pointer"
                  >
                    <span>VIEW OUR WORK</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Milestone 2: Build World */}
          <motion.div
            style={{ opacity: buildOpacity, y: buildY }}
            className="absolute top-[100vh] left-0 w-full h-screen flex items-center px-6 md:px-12 pointer-events-auto"
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 flex flex-col items-start gap-4">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-500">
                  01 — BUILD
                </span>
                <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                  DIGITAL <br />PRODUCTS
                </h2>
                <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-sm leading-relaxed mt-1">
                  We design and build powerful digital products that turn complex ideas into real user experiences.
                </p>
                <button
                  onClick={scrollToWhatWeDo}
                  className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors mt-3"
                >
                  <span>EXPLORE BUILD</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Milestone 3: Automate World */}
          <motion.div
            style={{ opacity: automateOpacity, y: automateY }}
            className="absolute top-[200vh] left-0 w-full h-screen flex items-center px-6 md:px-12 pointer-events-auto"
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 flex flex-col items-start gap-4">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-500">
                  02 — AUTOMATE
                </span>
                <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                  AI-POWERED <br />SYSTEMS
                </h2>
                <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-sm leading-relaxed mt-1">
                  We use intelligent automation to simplify complex workflows, reduce repetitive work, and help businesses scale.
                </p>
                <button
                  onClick={scrollToWhatWeDo}
                  className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors mt-3"
                >
                  <span>EXPLORE AUTOMATION</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Milestone 4: Grow World */}
          <motion.div
            style={{ opacity: growOpacity, y: growY }}
            className="absolute top-[300vh] left-0 w-full h-screen flex items-center px-6 md:px-12 pointer-events-auto"
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 flex flex-col items-start gap-4">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-500">
                  03 — GROW
                </span>
                <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                  DIGITAL <br />GROWTH
                </h2>
                <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-sm leading-relaxed mt-1">
                  We help businesses reach the right audience, generate demand, and turn digital attention into measurable growth.
                </p>
                <button
                  onClick={scrollToWhatWeDo}
                  className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors mt-3"
                >
                  <span>EXPLORE GROWTH</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Milestone 5: Journey Roadmap centered */}
          <motion.div
            style={{ opacity: journeyOpacity }}
            className="absolute top-[400vh] left-0 w-full h-screen flex items-center justify-center px-6 pointer-events-auto"
          >
            <div className="text-center space-y-8 max-w-3xl">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-neutral-500 uppercase block">
                THE YELWIN CONVERGENCE
              </span>
              <h2 className="font-mono font-black text-4xl sm:text-6xl tracking-tighter text-white uppercase leading-none">
                IDEA <span className="text-neutral-600">→</span> BUILD <span className="text-neutral-600">→</span> AUTOMATE <span className="text-neutral-600">→</span> GROW
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed">
                One fluid journey, unified under a single architecture. We align custom software with generative automation and telemetry frameworks.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- EDITORIAL SECTIONS (STATIC LAYOUTS) --- */}
      
      {/* 11. "WHAT WE DO" SECTION */}
      <section id="what-we-do" className="bg-black py-32 px-6 md:px-12 border-t border-neutral-900 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="space-y-4 mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-500 uppercase">
              WHAT WE DO
            </span>
            <h2 className="font-mono font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-none max-w-4xl">
              WE TURN <br />
              COMPLEX PROBLEMS <br />
              INTO DIGITAL <br />
              POSSIBILITIES.
            </h2>
          </div>

          {/* Interactive capabilities explorer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20 border-t border-neutral-900 pt-12">
            
            {/* Left: Category list selectors */}
            <div className="lg:col-span-5 flex flex-col divide-y divide-neutral-900">
              {(Object.keys(capabilities) as Array<keyof typeof capabilities>).map((key) => {
                const cap = capabilities[key];
                const active = activeCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      analytics.track('What We Do Select', 'Navigation', cap.label);
                      setActiveCategory(key);
                    }}
                    className="py-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`font-mono text-xs ${active ? 'text-white' : 'text-neutral-700'}`}>
                        {key === 'build' ? '01' : key === 'automate' ? '02' : key === 'design' ? '03' : key === 'grow' ? '04' : key === 'protect' ? '05' : '06'}
                      </span>
                      <h3 className={`font-mono font-bold text-xl sm:text-2xl uppercase tracking-wider transition-colors duration-300 ${
                        active ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'
                      }`}>
                        {cap.label}
                      </h3>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                      active ? 'text-white translate-x-1' : 'text-neutral-800 group-hover:text-neutral-600'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Display details box */}
            <div className="lg:col-span-7 bg-neutral-950 border border-neutral-900 rounded-xl p-8 sm:p-12 flex flex-col justify-between min-h-[340px]">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  {React.createElement(capabilities[activeCategory].icon, { className: 'w-6 h-6 text-white' })}
                  <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
                    {capabilities[activeCategory].label} CAPABILITIES
                  </span>
                </div>
                
                <p className="text-neutral-300 font-sans text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                  {capabilities[activeCategory].desc}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities[activeCategory].items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-neutral-400 font-mono text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-10">
                <button
                  onClick={() => {
                    analytics.track('What We Do Start Request', 'CTA', capabilities[activeCategory].label);
                    scrollToContact();
                  }}
                  className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase border-b border-white pb-1.5 hover:text-neutral-300 hover:border-neutral-300 transition-colors"
                >
                  <span>START {capabilities[activeCategory].label} PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. FEATURED WORK SECTION */}
      <section id="portfolio" className="bg-black py-32 px-6 md:px-12 border-t border-neutral-900 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-500 uppercase">
                SELECTED WORK
              </span>
              <h2 className="font-mono font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                IDEAS WE <br />
                BROUGHT TO LIFE.
              </h2>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-neutral-300 transition-colors shrink-0"
            >
              <span>EXPLORE ALL WORK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Large Visual Composition Cards (3 Projects) */}
          <div className="space-y-24">
            {CASE_STUDIES_DATA.slice(0, 3).map((project, idx) => {
              const number = `PROJECT 0${idx + 1}`;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group block overflow-hidden border-b border-neutral-900 pb-16 cursor-pointer"
                  onClick={() => {
                    analytics.track('Case Study Click', 'CaseStudy', project.title);
                    scrollToContact();
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left: Metadata */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full gap-8">
                      <div className="space-y-4">
                        <span className="font-mono text-xs tracking-widest text-neutral-600 block">
                          {number} / {project.industry}
                        </span>
                        <h3 className="font-mono font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase group-hover:text-neutral-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed max-w-xs">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex">
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase border border-neutral-800 bg-neutral-950 px-5 py-2.5 rounded-full group-hover:border-white transition-colors">
                          <span>VIEW DETAILS</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Right: Immersive Image Mockup Container */}
                    <div className="lg:col-span-8 overflow-hidden rounded-xl bg-neutral-950 border border-neutral-900 relative aspect-[16/9]">
                      {/* Image under strict grayscale filter */}
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 group-hover:scale-[1.03] transition-all duration-700"
                      />
                      
                      {/* Abstract overlay graphics */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-neutral-500 tracking-[0.2em] uppercase">
                        YELWIN PLATFORM FRAMEWORK v2
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. PROCESS SECTION */}
      <section className="bg-black py-32 px-6 md:px-12 border-t border-neutral-900 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="space-y-4 mb-20">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-500 uppercase">
              OUR PLAYBOOK
            </span>
            <h2 className="font-mono font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              FROM IDEA <br />
              TO IMPACT.
            </h2>
          </div>

          {/* Horizontal scroll process layout */}
          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-thin scrollbar-track-neutral-950 scrollbar-thumb-neutral-800 snap-x">
            {HOW_WE_WORK_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-neutral-950 border border-neutral-900 p-8 min-w-[280px] sm:min-w-[340px] max-w-[340px] flex flex-col justify-between min-h-[300px] rounded-xl snap-start hover:border-neutral-700 transition-colors group"
              >
                <div>
                  <span className="font-mono font-black text-3xl text-neutral-800 group-hover:text-white transition-colors duration-300 block mb-6">
                    {step.number}
                  </span>
                  <h3 className="font-mono font-bold text-lg text-white uppercase tracking-wider mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="border-t border-neutral-900 pt-4 mt-6">
                  <span className="text-[9px] font-mono text-neutral-500 tracking-widest uppercase block mb-1">
                    KEY OUTCOMES:
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 truncate block">
                    {step.deliverables[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. WHY YELWIN SECTION */}
      <section className="bg-black py-32 px-6 md:px-12 border-t border-neutral-900 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left copy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-500 uppercase block">
              WHY YELWIN
            </span>
            <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white leading-none">
              ONE PARTNER. <br />
              FROM IDEA <br />
              TO IMPACT.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-sans max-w-sm leading-relaxed">
              You don't need five different teams to bring your vision to life. Yelwin brings technology, AI, design, and growth together under one roof.
            </p>
          </div>

          {/* Right big typography values statements */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pl-10">
            <div className="border-b border-neutral-900 pb-8">
              <h3 className="font-mono font-black text-4xl sm:text-5xl tracking-tighter text-white uppercase">
                THINK DIFFERENTLY.
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm font-sans mt-2">
                We reject standard agency playbooks in favor of custom models and architectural speed.
              </p>
            </div>
            
            <div className="border-b border-neutral-900 pb-8">
              <h3 className="font-mono font-black text-4xl sm:text-5xl tracking-tighter text-white uppercase">
                BUILD INTELLIGENTLY.
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm font-sans mt-2">
                Every line of code is structured to align with autonomous triggers and predictive pipelines.
              </p>
            </div>

            <div>
              <h3 className="font-mono font-black text-4xl sm:text-5xl tracking-tighter text-white uppercase">
                GROW INTENTIONALLY.
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm font-sans mt-2">
                Attention is mapped directly into client acquisition funnels and scalable product engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FINAL CINEMATIC CTA */}
      <section className="bg-black py-32 px-6 md:px-12 border-t border-neutral-900 relative z-20 overflow-hidden">
        {/* Animated grid floor back in CTA */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)] z-0" />
        
        <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10 py-12">
          
          {/* Subtle Vector Portal Outline */}
          <div className="w-24 h-40 border border-neutral-800 rounded-lg mx-auto flex items-center justify-center relative bg-neutral-950/40">
            {/* Glowing core */}
            <div className="w-10 h-10 rounded-full bg-white opacity-10 filter blur-md animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-white" />
            {/* Absolute positioning lines */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-neutral-900" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-neutral-900" />
          </div>

          <div className="space-y-4 max-w-xl mx-auto">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-neutral-500 uppercase block">
              HAVE AN IDEA?
            </span>
            <h2 className="font-mono font-black text-4xl sm:text-6xl uppercase tracking-tighter text-white leading-none">
              LET'S MAKE <br />IT REAL.
            </h2>
            <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed mt-2 max-w-sm mx-auto">
              Tell us what you're building. We'll help you figure out what's next.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => {
                analytics.track('Cinematic Final CTA Click', 'CTA', 'START A PROJECT');
                scrollToContact();
              }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase rounded-full hover:bg-neutral-200 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 16. PROJECT ENQUIRY FORM */}
      <section id="contact" className="bg-black relative z-20">
        <ProjectEnquirySection initialServiceSelection="Web Application" />
      </section>

    </div>
  );
};
