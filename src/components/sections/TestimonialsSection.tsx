import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../../data/contentData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!TESTIMONIALS_DATA || TESTIMONIALS_DATA.length === 0) {
    return null; // Hide if no testimonials exist per prompt instruction
  }

  const current = TESTIMONIALS_DATA[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section className="bg-black text-white py-28 px-6 md:px-12 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 mb-16">
          <div className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
            TESTIMONIALS
          </div>
          <h2 className="font-mono font-black text-4xl sm:text-6xl uppercase tracking-tight text-white max-w-3xl">
            BUILT TOGETHER.
            <br />
            REMEMBERED FOREVER.
          </h2>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 p-8 md:p-16 relative flex flex-col justify-between min-h-[320px]">
          <Quote className="w-12 h-12 text-neutral-700 mb-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-3xl font-sans text-neutral-100 leading-relaxed max-w-4xl font-normal">
                "{current.quote}"
              </p>

              <div className="pt-6 border-t border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="font-mono font-bold text-lg text-white">{current.clientName}</div>
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    {current.role} • {current.company} ({current.industry})
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="p-3 border border-neutral-800 bg-black hover:border-white text-white transition-colors cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="font-mono text-xs text-neutral-500">
                    0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-3 border border-neutral-800 bg-black hover:border-white text-white transition-colors cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
