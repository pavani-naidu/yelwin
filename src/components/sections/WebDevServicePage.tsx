import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Monitor, Zap, Shield, Code2, Users, Headphones, Play } from 'lucide-react';
import { AbstractVisual3D } from '../3d/AbstractVisual3D';

interface WebDevServicePageProps {
  onBackClick: () => void;
  onTalkClick: () => void;
}

export const WebDevServicePage: React.FC<WebDevServicePageProps> = ({
  onBackClick,
  onTalkClick,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button
          onClick={onBackClick}
          className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer mb-10"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO ALL SERVICES</span>
        </button>

        {/* 01: HERO SECTION */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-neutral-900 pb-20">
          <div className="lg:col-span-6 flex flex-col items-start gap-6 relative z-10">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-neutral-400 uppercase">
              OUR SERVICE
            </span>
            <h1 className="font-mono font-black text-5xl sm:text-7xl uppercase tracking-tight text-white leading-none">
              Web <br />
              Development
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg font-normal">
              We build fast, secure, and scalable websites that help your business grow online.
            </p>
            <button
              onClick={onTalkClick}
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-all duration-300 rounded-none cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Premium 3D SVG Mockups (Laptop + Abstract Sculpture) */}
          {/* Premium 3D Interactive Mockup (Laptop + Abstract Sculpture) */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px]">
            <AbstractVisual3D mode="development" className="w-full h-full" />
          </div>
        </section>

        {/* 02: SOLUTIONS SECTION */}
        <section className="py-20 border-b border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Header left */}
            <div className="lg:col-span-4 flex flex-col items-start gap-4">
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
                SOLUTIONS THAT
              </span>
              <h2 className="font-mono font-bold text-3xl uppercase tracking-tight text-white">
                Build Stronger <br />
                Online Presence
              </h2>
              <hr className="w-12 border-t border-white opacity-50 my-2" />
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                We create modern, responsive and user-friendly websites that not only look great but also deliver results.
              </p>
            </div>

            {/* 4 Columns right */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 md:divide-x divide-neutral-900">
              <div className="flex flex-col gap-4 pt-6 sm:pt-0">
                <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white">
                  <Monitor className="w-4 h-4" />
                </div>
                <h3 className="font-mono font-bold text-sm tracking-wider uppercase text-white mt-2">
                  Responsive Design
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Perfect experience across all devices.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-6 sm:pt-0 md:pl-6">
                <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-mono font-bold text-sm tracking-wider uppercase text-white mt-2">
                  High Performance
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Optimized for speed, SEO & performance.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-6 sm:pt-0 md:pl-6">
                <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="font-mono font-bold text-sm tracking-wider uppercase text-white mt-2">
                  Secure & Reliable
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Built with best practices for security.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-6 sm:pt-0 md:pl-6">
                <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="font-mono font-bold text-sm tracking-wider uppercase text-white mt-2">
                  Clean Code
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Scalable and maintainable code architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03: PROCESS SECTION */}
        <section className="py-20 border-b border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
                OUR PROCESS
              </span>
              <h2 className="font-mono font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white">
                From Idea To Launch.
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg">
                A simple and effective process to turn your ideas into powerful web solutions.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <button
                onClick={onTalkClick}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-transparent border border-neutral-800 hover:border-white text-white font-mono font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-none cursor-pointer"
              >
                <span>WORK WITH US</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Process Timeline Flow */}
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-neutral-800 z-0 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="w-14 h-14 rounded-full bg-black border border-neutral-800 flex items-center justify-center font-mono font-bold text-lg text-white hover:border-white transition-colors duration-300">
                  01
                </div>
                <h3 className="font-mono font-bold text-base uppercase text-white mt-2">Discover</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                  We understand your business, goals and requirements.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="w-14 h-14 rounded-full bg-black border border-neutral-800 flex items-center justify-center font-mono font-bold text-lg text-white hover:border-white transition-colors duration-300">
                  02
                </div>
                <h3 className="font-mono font-bold text-base uppercase text-white mt-2">Plan</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                  We plan the structure, features and user experience.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="w-14 h-14 rounded-full bg-black border border-neutral-800 flex items-center justify-center font-mono font-bold text-lg text-white hover:border-white transition-colors duration-300">
                  03
                </div>
                <h3 className="font-mono font-bold text-base uppercase text-white mt-2">Develop</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                  We build your website with clean code and best practices.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="w-14 h-14 rounded-full bg-black border border-neutral-800 flex items-center justify-center font-mono font-bold text-lg text-white hover:border-white transition-colors duration-300">
                  04
                </div>
                <h3 className="font-mono font-bold text-base uppercase text-white mt-2">Launch</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                  We test, optimize and launch your website successfully.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04: BOTTOM CTA BLOCK */}
        <section className="bg-black py-20">
          <div className="bg-neutral-950 border border-neutral-900 p-8 sm:p-14 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 rounded-none">
            
            {/* Left 3D Stand SVG Graphic */}
            <div className="w-full lg:w-1/3 flex items-center justify-center relative min-h-[220px]">
              <AbstractVisual3D mode="development" className="w-full h-full max-w-[220px]" />
            </div>

            {/* Center Text Block */}
            <div className="space-y-4 lg:w-1/3">
              <div className="text-[10px] font-mono font-bold tracking-[0.3em] text-neutral-500 uppercase">
                HAVE A PROJECT IN MIND?
              </div>
              <h2 className="font-mono font-bold text-3xl uppercase tracking-tight text-white leading-tight">
                Let's build <br className="hidden sm:inline" />
                something <br className="hidden sm:inline" />
                amazing <br className="hidden sm:inline" />
                together.
              </h2>
              <button
                onClick={onTalkClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Right 3 columns details */}
            <div className="lg:w-1/3 flex flex-col gap-6 lg:border-l lg:border-neutral-900 lg:pl-10">
              <div className="flex gap-4">
                <Zap className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono font-bold text-xs tracking-wider uppercase text-white">
                    Fast Delivery
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed mt-1">
                    We deliver on time without compromising quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono font-bold text-xs tracking-wider uppercase text-white">
                    Client Focused
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed mt-1">
                    We believe in clear communication and total transparency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Headphones className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono font-bold text-xs tracking-wider uppercase text-white">
                    Ongoing Support
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed mt-1">
                    We're with you even after launch for support and growth.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
