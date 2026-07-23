import React from 'react';
import { motion } from 'motion/react';
import { AbstractVisual3D } from '../3d/AbstractVisual3D';

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-mono font-bold tracking-[0.25em] text-white/50 uppercase"
          >
            COMPANY POSITIONING
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-tight"
          >
            IDEAS DESERVE TO BECOME REAL.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-base md:text-lg font-sans leading-relaxed font-light"
          >
            YELWIN brings together technology, creativity, AI, design, and strategy to help ambitious people and businesses turn ideas into meaningful digital experiences.
          </motion.p>

          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono border-t border-white/10 mt-4">
            <div>
              <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5 block">01. Technology</span>
              <span className="text-white font-medium block">AI & Automation</span>
            </div>
            <div>
              <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5 block">02. Design</span>
              <span className="text-white font-medium block">UI/UX & Branding</span>
            </div>
            <div>
              <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5 block">03. Product</span>
              <span className="text-white font-medium block">SaaS Development</span>
            </div>
            <div>
              <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5 block">04. Growth</span>
              <span className="text-white font-medium block">Digital Strategy</span>
            </div>
          </div>
        </div>

        {/* Visual Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[320px] border border-white/15 bg-black/60 p-6">
          <AbstractVisual3D mode="rings" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};
