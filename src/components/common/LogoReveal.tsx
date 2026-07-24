import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface LogoRevealProps {
  onComplete: () => void;
}

export const LogoReveal: React.FC<LogoRevealProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'symbol' | 'wordmark' | 'fadeout'>('symbol');

  useEffect(() => {
    // Stage 1: Symbol forms (0s - 1.2s)
    const t1 = setTimeout(() => {
      setStage('wordmark');
    }, 1200);

    // Stage 2: Wordmark appears & holds (1.2s - 2.8s)
    const t2 = setTimeout(() => {
      setStage('fadeout');
    }, 2800);

    // Stage 3: Complete reveal sequence (3.2s total)
    const t3 = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="logo-reveal-container"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden cursor-pointer"
        onClick={onComplete}
        title="Click to skip intro"
      >
        <div className="relative flex flex-col items-center justify-center p-8">
          {/* Subtle Ambient Radial Glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.15 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute w-96 h-96 rounded-full bg-white blur-3xl pointer-events-none"
          />

          <div className="flex flex-col items-center gap-6 z-10">
            {/* Symbol Animation */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white fill-white"
              >
                <motion.g
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  {/* Circle Ring */}
                  <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M 50 15 C 58.28 15 65 21.72 65 30 C 65 38.28 58.28 45 50 45 C 41.72 45 35 38.28 35 30 C 35 21.72 41.72 15 50 15 Z M 50 20 C 55.52 20 60 24.48 60 30 C 60 35.52 55.52 40 50 40 C 44.48 40 40 35.52 40 30 C 40 24.48 44.48 20 50 20 Z"
                    initial={{ pathLength: 0, fillOpacity: 0 }}
                    animate={{ pathLength: 1, fillOpacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                  {/* Outer Arch */}
                  <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M 27 88 C 27 63 37 51 50 51 C 63 51 73 63 73 88 C 69 82 61 58 50 58 C 39 58 31 82 27 88 Z"
                    initial={{ pathLength: 0, fillOpacity: 0 }}
                    animate={{ pathLength: 1, fillOpacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
                  />
                  {/* Inner Arch */}
                  <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M 34 84 C 34 71 41 66 50 66 C 59 66 66 71 66 84 C 63 80 57 72 50 72 C 43 72 37 80 34 84 Z"
                    initial={{ pathLength: 0, fillOpacity: 0 }}
                    animate={{ pathLength: 1, fillOpacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
                  />
                </motion.g>
              </svg>
            </motion.div>

            {/* Wordmark Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: stage !== 'symbol' ? 1 : 0,
                y: stage !== 'symbol' ? 0 : 10,
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-2 pt-2"
            >
              <div className="flex items-center font-mono font-bold tracking-[0.25em] text-3xl md:text-5xl text-white uppercase">
                <span>Y</span>
                {/* Custom Stylized 'E' with 3 horizontal bars */}
                <span className="inline-flex flex-col justify-between h-[0.62em] w-[0.52em] my-auto mx-[0.05em] shrink-0">
                  <span className="h-[18%] w-full rounded-xs bg-white" />
                  <span className="h-[18%] w-full rounded-xs bg-white" />
                  <span className="h-[18%] w-full rounded-xs bg-white" />
                </span>
                <span>LWIN</span>
              </div>

              {/* Tagline Flanked by Accent Lines */}
              <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] font-bold text-white/80 uppercase mt-1">
                <span className="w-8 h-[1px] bg-white/40" />
                <span>BE BEYOND.</span>
                <span className="w-8 h-[1px] bg-white/40" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skip button hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 text-[11px] font-mono tracking-widest text-neutral-400 uppercase"
        >
          [ CLICK TO SKIP INTRO ]
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
