import React from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { analytics } from '../../utils/analytics';

interface FinalCtaSectionProps {
  onStartProjectClick: () => void;
  onTalkToUsClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onStartProjectClick,
  onTalkToUsClick,
}) => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center min-h-[420px]">
          {/* Left: Fluid 3D Silk Wave Render Graphic */}
          <div className="lg:col-span-5 h-64 lg:h-full bg-black/60 relative flex items-center justify-center p-8 overflow-hidden border-b lg:border-b-0 lg:border-r border-neutral-900">
            <svg viewBox="0 0 400 300" className="w-full h-full max-w-sm text-neutral-400">
              <defs>
                <linearGradient id="silkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#666666" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#111111" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M 30 200 C 120 50, 220 280, 370 100 C 320 250, 150 20, 30 200 Z"
                fill="url(#silkGrad)"
                stroke="#555"
                strokeWidth="0.8"
              />
              <path
                d="M 50 220 C 140 70, 240 300, 390 120 C 340 270, 170 40, 50 220 Z"
                fill="none"
                stroke="#888"
                strokeWidth="1.2"
                opacity="0.6"
              />
              <path
                d="M 10 180 C 100 30, 200 260, 350 80"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.5"
                opacity="0.4"
              />
            </svg>
          </div>

          {/* Right: Content & Action Buttons */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col items-start gap-6">
            <h2 className="font-mono font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[0.95]">
              SO, WHAT ARE <br />
              WE BUILDING?
            </h2>

            <p className="text-sm sm:text-base font-sans text-neutral-300 max-w-md font-normal leading-relaxed">
              Bring the idea. We’ll bring the technology, creativity, and strategy to make it happen.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  analytics.track('Final CTA Click', 'CTA', "LET'S BUILD");
                  onStartProjectClick();
                }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ccff00] text-black font-mono font-bold text-xs tracking-widest uppercase rounded-full hover:bg-[#b8e600] transition-colors cursor-pointer shadow-lg"
              >
                <span>LET’S BUILD</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                onClick={() => {
                  analytics.track('Final CTA Click', 'CTA', 'TALK TO US');
                  onTalkToUsClick();
                }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-800 bg-black text-white font-mono font-bold text-xs tracking-widest uppercase rounded-full hover:border-neutral-500 transition-colors cursor-pointer"
              >
                <span>TALK TO US</span>
                <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center group-hover:border-white transition-colors">
                  <MessageSquare className="w-3.5 h-3.5 text-lime-400" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
