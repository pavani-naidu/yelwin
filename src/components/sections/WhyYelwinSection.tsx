import React from 'react';
import { motion } from 'motion/react';
import { Zap, Box, Sparkles, LayoutGrid } from 'lucide-react';

export const WhyYelwinSection: React.FC = () => {
  const pillars = [
    {
      id: 'p1',
      icon: Zap,
      title: 'INNOVATE FEARLESSLY',
      desc: 'We challenge the obvious and build what’s next.',
    },
    {
      id: 'p2',
      icon: Box,
      title: 'BUILD WITH PURPOSE',
      desc: 'Every solution we build is designed to create impact.',
    },
    {
      id: 'p3',
      icon: Sparkles,
      title: 'MOVE FAST',
      desc: 'Agile, lean and always one step ahead.',
    },
    {
      id: 'p4',
      icon: LayoutGrid,
      title: 'GROW TOGETHER',
      desc: 'We grow when our clients grow. That’s the mindset.',
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Title Column */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
              WHY YELWIN
            </div>
            <h2 className="font-mono font-bold text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none">
              THINK BIG. <br />
              BUILD BOLD.
            </h2>
          </div>

          {/* Right 4 Pillar Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-900">
            {pillars.map((p, i) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex flex-col gap-3 ${i > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white mb-2">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono font-bold text-xs tracking-wider uppercase text-white">
                    {p.title}
                  </h3>
                  <p className="text-neutral-400 text-xs font-sans leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
