import React from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Bot,
  Box,
  Smartphone,
  PenTool,
  Megaphone,
  Shield,
  Headphones,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { analytics } from '../../utils/analytics';

interface ServicesPageProps {
  onTalkClick: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onTalkClick }) => {
  const services = [
    {
      number: '01',
      icon: Code,
      title: 'WEB DEVELOPMENT',
      desc: 'Fast, secure and scalable websites and web applications built with clean code and best practices.',
      graphic: (
        // Curved white sinus/cosine wave mesh lines
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full opacity-40 group-hover:opacity-80 transition-opacity duration-500">
          <path d="M 10 50 Q 55 10, 100 50 T 190 50" stroke="#fff" strokeWidth="0.8" />
          <path d="M 10 58 Q 55 18, 100 58 T 190 58" stroke="#888" strokeWidth="0.5" opacity="0.6" />
          <path d="M 10 42 Q 55 2, 100 42 T 190 42" stroke="#444" strokeWidth="0.5" opacity="0.4" />
          <path d="M 10 34 Q 55 -6, 100 34 T 190 34" stroke="#222" strokeWidth="0.3" opacity="0.2" />
        </svg>
      )
    },
    {
      number: '02',
      icon: Bot,
      title: 'AI AUTOMATION',
      desc: 'Intelligent automation that simplifies workflows, reduces manual tasks and helps your business move faster.',
      graphic: (
        // Orbital neural node radar
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full opacity-40 group-hover:opacity-80 transition-opacity duration-500">
          <circle cx="100" cy="50" r="40" stroke="#444" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="50" r="25" stroke="#666" strokeWidth="0.5" />
          <circle cx="100" cy="50" r="10" stroke="#888" strokeWidth="0.5" />
          {/* Orbital path and nodes */}
          <path d="M 60 50 A 40 40 0 0 1 140 50" stroke="#fff" strokeWidth="1" />
          <circle cx="140" cy="50" r="3.5" fill="#fff" />
          <circle cx="100" cy="25" r="2.5" fill="#aaa" />
          <circle cx="120" cy="35" r="1.5" fill="#888" />
          <line x1="100" y1="50" x2="140" y2="50" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
        </svg>
      )
    },
    {
      number: '03',
      icon: Box,
      title: 'SAAS DEVELOPMENT',
      desc: 'Scalable SaaS platforms designed for performance, reliability and long-term business growth.',
      graphic: (
        // Stacked glowing perspective layout panes
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full opacity-30 group-hover:opacity-75 transition-all duration-500 group-hover:translate-y-[-4px]">
          {/* Back pane */}
          <path d="M 140 20 L 180 35 L 150 75 L 110 60 Z" fill="#111" stroke="#444" strokeWidth="0.5" />
          {/* Middle pane */}
          <path d="M 120 30 L 160 45 L 130 85 L 90 70 Z" fill="#181818" stroke="#777" strokeWidth="0.5" />
          {/* Front pane */}
          <path d="M 100 40 L 140 55 L 110 95 L 70 80 Z" fill="#222" stroke="#fff" strokeWidth="0.8" />
          <line x1="85" y1="62" x2="125" y2="77" stroke="#fff" strokeWidth="0.5" opacity="0.6" />
          <line x1="80" y1="72" x2="105" y2="81" stroke="#fff" strokeWidth="0.5" opacity="0.4" />
        </svg>
      )
    },
    {
      number: '04',
      icon: Smartphone,
      title: 'MOBILE APP DEVELOPMENT',
      desc: 'Native and cross-platform mobile apps that deliver smooth, engaging and high-performance experiences.',
      graphic: (
        // Floating 3D perspective smartphone silhouette
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full opacity-40 group-hover:opacity-85 transition-all duration-500 group-hover:rotate-[2deg] group-hover:scale-[1.03]">
          {/* Smartphone contour */}
          <rect x="75" y="10" width="50" height="80" rx="6" fill="#111" stroke="#fff" strokeWidth="1" transform="rotate(-15 100 50)" />
          {/* Screen highlight */}
          <rect x="79" y="14" width="42" height="72" rx="4" fill="none" stroke="#555" strokeWidth="0.5" transform="rotate(-15 100 50)" />
          {/* Speaker & camera slot */}
          <rect x="94" y="11" width="12" height="2" rx="1" fill="#fff" transform="rotate(-15 100 50)" />
          {/* Floating rings */}
          <ellipse cx="100" cy="50" rx="36" ry="12" stroke="#666" strokeWidth="0.5" strokeDasharray="2 4" />
          <ellipse cx="102" cy="54" rx="42" ry="14" stroke="#333" strokeWidth="0.5" />
        </svg>
      )
    },
    {
      number: '05',
      icon: PenTool,
      title: 'UI/UX & PRODUCT DESIGN',
      desc: 'User-centered design that combines creativity, usability and functionality to craft memorable experiences.',
      graphic: (
        // Interactive mockup wireframe card + text + cursor
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full opacity-40 group-hover:opacity-80 transition-opacity duration-500">
          <rect x="50" y="15" width="100" height="70" rx="4" fill="#0c0c0c" stroke="#444" strokeWidth="0.5" />
          {/* Mockup UI items */}
          <circle cx="65" cy="30" r="6" fill="#222" stroke="#666" strokeWidth="0.5" />
          <line x1="80" y1="27" x2="135" y2="27" stroke="#fff" strokeWidth="0.8" />
          <line x1="80" y1="33" x2="115" y2="33" stroke="#555" strokeWidth="0.5" />
          {/* Floating 'Aa' card */}
          <rect x="110" y="40" width="35" height="35" rx="3" fill="#181818" stroke="#888" strokeWidth="0.5" />
          <text x="127" y="63" fontFamily="monospace" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#fff">Aa</text>
          {/* Custom vector node */}
          <path d="M 60 70 L 95 50" stroke="#fff" strokeWidth="0.8" strokeDasharray="2 2" />
          <rect x="57" y="67" width="6" height="6" fill="#fff" />
          <circle cx="95" cy="50" r="3" fill="#fff" />
        </svg>
      )
    },
    {
      number: '06',
      icon: Megaphone,
      title: 'DIGITAL MARKETING',
      desc: 'Data-driven strategies that increase visibility, attract the right audience and convert attention into growth.',
      graphic: (
        // Ascending business growth chart line
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full opacity-40 group-hover:opacity-85 transition-opacity duration-500">
          <line x1="30" y1="85" x2="170" y2="85" stroke="#333" strokeWidth="0.8" />
          {/* Bars */}
          <rect x="40" y="70" width="8" height="15" fill="#181818" stroke="#444" strokeWidth="0.5" />
          <rect x="60" y="62" width="8" height="23" fill="#222" stroke="#555" strokeWidth="0.5" />
          <rect x="80" y="50" width="8" height="35" fill="#2d2d2d" stroke="#666" strokeWidth="0.5" />
          <rect x="100" y="42" width="8" height="43" fill="#363636" stroke="#777" strokeWidth="0.5" />
          <rect x="120" y="30" width="8" height="55" fill="#4a4a4a" stroke="#888" strokeWidth="0.5" />
          <rect x="140" y="22" width="8" height="63" fill="#666" stroke="#aaa" strokeWidth="0.5" />
          {/* Trend line */}
          <path d="M 44 68 Q 94 48, 144 18" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="144" cy="18" r="3.5" fill="#fff" className="animate-pulse" />
        </svg>
      )
    },
    {
      number: '07',
      icon: Shield,
      title: 'CYBERSECURITY (VAPT)',
      desc: 'Identify vulnerabilities and strengthen your systems with advanced security testing and risk assessment.',
      graphic: (
        // Glowing virtual shield and concentric radars
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full opacity-40 group-hover:opacity-80 transition-opacity duration-500">
          <ellipse cx="100" cy="50" rx="55" ry="30" stroke="#333" strokeWidth="0.5" />
          <ellipse cx="100" cy="50" rx="35" ry="18" stroke="#555" strokeWidth="0.5" strokeDasharray="3 3" />
          {/* Shield outline */}
          <path d="M 100 25 C 112 25, 120 28, 120 28 L 120 50 C 120 65, 100 75, 100 75 C 100 75, 80 65, 80 50 L 80 28 C 80 28, 88 25, 100 25 Z" fill="#181818" stroke="#fff" strokeWidth="0.8" />
          <path d="M 100 32 L 100 68" stroke="#fff" strokeWidth="0.5" opacity="0.4" />
          <path d="M 87 45 L 113 45" stroke="#fff" strokeWidth="0.5" opacity="0.4" />
        </svg>
      )
    },
    {
      number: '08',
      icon: Headphones,
      title: 'MAINTENANCE & SUPPORT',
      desc: 'We keep your digital products secure, updated and running at their best, so you can focus on what matters.',
      graphic: (
        // Animated analog clock ticking indicator
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full opacity-40 group-hover:opacity-80 transition-opacity duration-500">
          <circle cx="100" cy="50" r="36" stroke="#444" strokeWidth="0.8" />
          {/* Clock ticks */}
          <line x1="100" y1="18" x2="100" y2="22" stroke="#fff" strokeWidth="1" />
          <line x1="100" y1="78" x2="100" y2="82" stroke="#fff" strokeWidth="1" />
          <line x1="68" y1="50" x2="72" y2="50" stroke="#fff" strokeWidth="1" />
          <line x1="128" y1="50" x2="132" y2="50" stroke="#fff" strokeWidth="1" />
          {/* Clock hands */}
          <line x1="100" y1="50" x2="100" y2="30" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="100" y1="50" x2="118" y2="50" stroke="#888" strokeWidth="0.8" strokeLinecap="round" />
          <circle cx="100" cy="50" r="2.5" fill="#fff" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-24">
      {/* 01: Hero Section */}
      <section className="relative py-20 px-6 md:px-12 border-b border-neutral-900 overflow-hidden min-h-[460px] flex items-center">
        {/* Ambient perspective floor grid in background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)] z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <div className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
              SERVICES —
            </div>
            <h1 className="font-mono font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
              We build <br />
              digital solutions <br />
              that drive <br />
              real growth.
            </h1>
            <p className="text-neutral-400 text-base md:text-lg font-sans max-w-lg leading-relaxed mt-2">
              From powerful websites to intelligent automation, we create solutions that scale your business and deliver measurable impact.
            </p>
            <button
              onClick={() => {
                analytics.track('Services Hero Talk Click', 'CTA', 'LET\'S TALK');
                onTalkClick();
              }}
              className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase border-b border-white pb-1.5 hover:text-neutral-300 hover:border-neutral-300 transition-colors cursor-pointer mt-4"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Right 3D Reflective Panels Graphic */}
          <div className="lg:col-span-5 h-[320px] md:h-[380px] w-full flex items-center justify-center relative">
            <svg viewBox="0 0 500 400" fill="none" className="w-full h-full max-w-md">
              <defs>
                {/* Gradients for panels */}
                <linearGradient id="panelGrad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
                  <stop offset="60%" stopColor="#ffffff" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="panelGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                  <stop offset="70%" stopColor="#ffffff" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
                </linearGradient>
                {/* Reflection gradient */}
                <linearGradient id="reflGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Perspective Floor Lines */}
              <g stroke="#222" strokeWidth="0.5">
                <line x1="0" y1="280" x2="500" y2="280" />
                <line x1="0" y1="300" x2="500" y2="300" />
                <line x1="0" y1="330" x2="500" y2="330" />
                <line x1="0" y1="370" x2="500" y2="370" />
                
                <line x1="250" y1="260" x2="0" y2="400" />
                <line x1="250" y1="260" x2="100" y2="400" />
                <line x1="250" y1="260" x2="200" y2="400" />
                <line x1="250" y1="260" x2="300" y2="400" />
                <line x1="250" y1="260" x2="400" y2="400" />
                <line x1="250" y1="260" x2="500" y2="400" />
              </g>

              {/* Reflections on floor */}
              <ellipse cx="250" cy="285" rx="180" ry="15" fill="url(#reflGrad)" />

              {/* Monolithic reflective panels */}
              {/* Back panel left */}
              <motion.path
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                d="M 120 120 L 190 80 L 190 280 L 120 260 Z"
                fill="url(#panelGrad1)"
                stroke="#444"
                strokeWidth="0.8"
              />

              {/* Back panel right */}
              <motion.path
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                d="M 330 110 L 390 140 L 390 270 L 330 285 Z"
                fill="url(#panelGrad1)"
                stroke="#333"
                strokeWidth="0.8"
              />

              {/* Middle panel center */}
              <motion.path
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.6 }}
                d="M 210 70 L 290 100 L 290 295 L 210 270 Z"
                fill="url(#panelGrad2)"
                stroke="#fff"
                strokeWidth="1.2"
                className="drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
              />

              {/* Light glow at base */}
              <circle cx="250" cy="282" r="6" fill="#fff" className="animate-pulse" />
            </svg>
          </div>
        </div>
      </section>

      {/* 02: Services Matrix Grid */}
      <section className="bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-900 border-x border-neutral-900">
          {services.map((srv, index) => {
            const Icon = srv.icon;
            // Build horizontal and vertical borders to form the 2-column matrix grid cleanly
            const rowClass = index >= 6 ? '' : 'border-b border-neutral-900';
            
            return (
              <motion.div
                key={srv.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                className={`group relative p-8 md:p-14 flex flex-col justify-between hover:bg-neutral-950/40 transition-colors duration-300 min-h-[380px] overflow-hidden ${rowClass}`}
              >
                {/* Ambient dynamic card lines/shapes */}
                <div className="absolute right-6 top-8 w-28 h-20 pointer-events-none">
                  {srv.graphic}
                </div>

                {/* Card Top details */}
                <div className="flex items-start gap-6">
                  {/* Service Number */}
                  <span className="font-mono font-black text-4xl text-neutral-800 group-hover:text-white transition-colors duration-300">
                    {srv.number}
                  </span>
                  
                  {/* Service Icon inside a circle */}
                  <div className="w-12 h-12 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-white shrink-0 group-hover:border-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Middle Copy */}
                <div className="space-y-3 mt-12 relative z-10">
                  <h3 className="font-mono font-black text-xl tracking-wider uppercase text-white">
                    {srv.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans max-w-sm">
                    {srv.desc}
                  </p>
                </div>

                {/* Card Bottom Arrow link */}
                <div className="pt-8 mt-auto flex">
                  <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300 cursor-pointer">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 03: Bottom CTA Section */}
      <section className="bg-black py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-neutral-950 border border-neutral-900 p-8 sm:p-16 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 rounded-2xl">
            <div className="space-y-4">
              <div className="text-[10px] font-mono font-bold tracking-[0.3em] text-neutral-400 uppercase">
                HAVE A PROJECT IN MIND?
              </div>
              <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                Let's build something <br />
                great together.
              </h2>
            </div>

            <div className="max-w-md flex flex-col items-start gap-6 lg:border-l lg:border-neutral-900 lg:pl-10">
              <p className="text-sm font-sans text-neutral-400 leading-relaxed">
                Share your idea or challenge with us. We'll bring the right strategy and technology to build the perfect solution.
              </p>
              <button
                onClick={() => {
                  analytics.track('Services Bottom CTA Click', 'CTA', 'LET\'S TALK');
                  onTalkClick();
                }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase rounded-full hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
