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
                  {/* Upper Floating Ring / Torus */}
                  <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M 50 12 C 63.8 12 75 19.6 75 29 C 75 38.4 63.8 46 50 46 C 36.2 46 25 38.4 25 29 C 25 19.6 36.2 12 50 12 Z M 50 20 C 58.3 20 65 24 65 29 C 65 34 58.3 38 50 38 C 41.7 38 35 34 35 29 C 35 24 41.7 20 50 20 Z"
                    initial={{ pathLength: 0, fillOpacity: 0 }}
                    animate={{ pathLength: 1, fillOpacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                  {/* Lower Sweeping Base Arch */}
                  <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M 12 88 C 12 58 29 48 50 48 C 71 48 88 58 88 88 L 76 88 C 76 66 64 58 50 58 C 36 58 24 66 24 88 L 12 88 Z"
                    initial={{ pathLength: 0, fillOpacity: 0 }}
                    animate={{ pathLength: 1, fillOpacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
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
