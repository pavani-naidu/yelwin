import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HOW_WE_WORK_STEPS } from '../../data/contentData';
import { ChevronRight } from 'lucide-react';

export const HowWeWorkSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="bg-black text-white py-28 px-6 md:px-12 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 mb-16">
          <div className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
            HOW WE WORK
          </div>
          <h2 className="font-mono font-black text-4xl sm:text-6xl uppercase tracking-tight text-white">
            FROM IDEA TO IMPACT.
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Step Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {HOW_WE_WORK_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 border transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-white text-black border-white font-bold'
                      : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm tracking-widest">{step.number}</span>
                    <span className="font-mono text-lg uppercase tracking-wider">{step.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1' : ''}`} />
                </button>
              );
            })}
          </div>

          {/* Step Active Detail Card */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-8 md:p-12 min-h-[380px] flex flex-col justify-between">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="font-mono font-black text-5xl text-neutral-600">
                  {HOW_WE_WORK_STEPS[activeStep].number}
                </span>
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                  PHASE {activeStep + 1} OF 6
                </span>
              </div>

              <h3 className="font-mono font-black text-3xl uppercase text-white">
                {HOW_WE_WORK_STEPS[activeStep].title}
              </h3>

              <p className="text-neutral-300 text-base md:text-lg font-sans leading-relaxed">
                {HOW_WE_WORK_STEPS[activeStep].description}
              </p>

              <div className="pt-6 border-t border-neutral-800">
                <h4 className="text-xs font-mono font-bold text-neutral-400 tracking-widest uppercase mb-3">
                  PRIMARY DELIVERABLES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {HOW_WE_WORK_STEPS[activeStep].deliverables.map((del) => (
                    <div
                      key={del}
                      className="px-3 py-2 bg-black border border-neutral-800 text-xs font-mono text-neutral-300 uppercase"
                    >
                      • {del}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
