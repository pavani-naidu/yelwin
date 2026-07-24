import React from 'react';
import { motion } from 'motion/react';
import { AbstractVisual3D } from '../3d/AbstractVisual3D';
import { ArrowUpRight, Cpu } from 'lucide-react';
import { analytics } from '../../utils/analytics';

interface AiSectionProps {
  onExploreAiClick: () => void;
}

export const AiSection: React.FC<AiSectionProps> = ({ onExploreAiClick }) => {
  const aiPills = [
    'AI Automation',
    'AI Agents',
    'AI Chatbots',
    'AI Integrations',
    'Workflow Automation',
    'Custom AI Solutions',
  ];

  return (
    <section className="bg-black text-white py-28 px-6 md:px-12 border-b border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Side */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 bg-neutral-950 w-max">
            <Cpu className="w-4 h-4 text-white" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-neutral-300">
              ARTIFICIAL INTELLIGENCE & AUTOMATION
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight"
          >
            WHAT IF YOUR BUSINESS COULD THINK FASTER?
          </motion.h2>

          <p className="text-neutral-300 text-lg md:text-xl font-sans leading-relaxed">
            From intelligent automation to AI-powered experiences, we help businesses use emerging technology to work smarter and move faster.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
            {aiPills.map((pill) => (
              <div
                key={pill}
                className="px-4 py-3 bg-neutral-950 border border-neutral-800 text-xs font-mono font-bold text-neutral-200 uppercase tracking-wider flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                <span>{pill}</span>
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={() => {
                analytics.track('AI Section CTA', 'CTA', 'EXPLORE AI SOLUTIONS');
                onExploreAiClick();
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <span>EXPLORE AI SOLUTIONS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Interactive 3D Node Lattice Canvas */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] bg-neutral-950 border border-neutral-800 p-6">
          <AbstractVisual3D mode="nodes" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};
