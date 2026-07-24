import React from 'react';
import { motion } from 'motion/react';
import { HeroCanvas3D } from '../3d/HeroCanvas3D';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { analytics } from '../../utils/analytics';

interface HeroSectionProps {
  onStartProjectClick: () => void;
  onExploreWorkClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProjectClick,
  onExploreWorkClick,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black text-white flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden border-b border-white/10"
    >
      {/* Background 3D Visual Layer */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none md:pointer-events-auto">
        <HeroCanvas3D />
      </div>

      {/* Geometric Shard & Circle Ambient Visual */}
      <div className="absolute top-[-5%] right-[-5%] w-[500px] md:w-[600px] h-[500px] md:h-[600px] border border-white/10 rounded-full flex items-center justify-center opacity-30 pointer-events-none z-0">
        <div className="w-[380px] md:w-[450px] h-[380px] md:h-[450px] border border-white/20 rounded-full flex items-center justify-center">
          <div className="w-[250px] md:w-[300px] h-[250px] md:h-[300px] border border-white/30 rounded-full" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <path d="M200 40 L360 300 L200 360 L40 300 Z" stroke="white" strokeWidth="0.5" fill="url(#grad1)" fillOpacity="0.05" />
            <path d="M200 40 L200 360" stroke="white" strokeWidth="0.2" />
            <path d="M40 300 L360 300" stroke="white" strokeWidth="0.2" />
            <defs>
              <linearGradient id="grad1" x1="200" y1="40" x2="200" y2="360" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.8" />
                <stop offset="1" stopColor="black" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Side Vertical Sleek Text */}
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-right pointer-events-none z-10">
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/20 font-mono font-medium whitespace-nowrap">
          INTELLIGENT TECHNOLOGY . SCALABLE GROWTH
        </span>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[11px] font-mono tracking-[0.3em] font-semibold text-neutral-400 uppercase"
          >
            WELCOME TO YELWIN
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono font-bold text-5xl sm:text-7xl lg:text-[88px] leading-[0.94] tracking-tight uppercase text-white"
          >
            YOU HAVE <br />
            THE IDEA. <br />
            WE MAKE <br />
            IT REAL.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg font-sans text-neutral-300 max-w-md leading-relaxed font-normal mt-1"
          >
            Technology, AI, design, and digital growth — all working together to move your business forward.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <button
              onClick={() => {
                analytics.track('Hero CTA Click', 'CTA', 'START SOMETHING');
                onStartProjectClick();
              }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-[11px] font-mono font-bold tracking-widest uppercase rounded-full hover:bg-neutral-200 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <span>START SOMETHING</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={() => {
                analytics.track('Hero CTA Click', 'CTA', 'SEE OUR WORK');
                onExploreWorkClick();
              }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-800 bg-black/60 text-white text-[11px] font-mono font-bold tracking-widest uppercase rounded-full hover:bg-white/10 hover:border-neutral-500 transition-all duration-300 cursor-pointer"
            >
              <span>SEE OUR WORK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Right side floating rotating stamp badge */}
        <div className="hidden lg:flex lg:col-span-5 h-[480px] relative items-center justify-end pr-8 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative w-36 h-36 flex items-center justify-center pointer-events-auto cursor-pointer group"
            onClick={onStartProjectClick}
          >
            {/* Spinning Circular SVG Text */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              viewBox="0 0 100 100"
              className="w-full h-full text-white/70 group-hover:text-white transition-colors"
            >
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] fill-current">
                <textPath href="#circlePath">
                  DESIGN · BUILD · GROW · REPEAT ·
                </textPath>
              </text>
            </motion.svg>
            <div className="absolute inset-0 m-auto w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center bg-black/60 backdrop-blur-sm group-hover:border-white transition-colors">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-neutral-400 pt-8"
      >
        <div className="flex items-center gap-3">
          <div className="w-[1px] h-6 bg-neutral-600" />
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-300">SCROLL DOWN</span>
        </div>
      </motion.div>
    </section>
  );
};
