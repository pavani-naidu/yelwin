import React from 'react';
import { TECH_STACK } from '../../data/contentData';

export const TechStackSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase mb-3">
          TECHNOLOGY & ARCHITECTURE
        </div>
        <h2 className="font-mono font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
          BUILT WITH THE RIGHT TECHNOLOGY.
        </h2>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full py-6 bg-neutral-950 border-y border-neutral-800 flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-mono text-xl sm:text-2xl font-bold uppercase tracking-widest text-neutral-400">
          {TECH_STACK.concat(TECH_STACK).map((tech, idx) => (
            <span key={`${tech.name}-${idx}`} className="hover:text-white transition-colors">
              {tech.name} <span className="text-neutral-700 ml-8">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Grid of Tech Stack with Hover Details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {TECH_STACK.map((tech) => (
          <div
            key={tech.name}
            className="p-5 bg-black border border-neutral-800 hover:border-white transition-colors group"
          >
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
              {tech.category}
            </div>
            <div className="font-mono font-bold text-base text-white group-hover:translate-x-0.5 transition-transform">
              {tech.name}
            </div>
            <div className="text-xs text-neutral-400 font-sans mt-2 line-clamp-2">
              {tech.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
