import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Clock, 
  MessageSquare, 
  User, 
  FileText, 
  RefreshCw, 
  Puzzle, 
  Search, 
  Target, 
  PenTool, 
  Send, 
  BarChart3,
  Hash,
  Mail,
  DollarSign,
  Users,
  Settings,
  TrendingUp
} from 'lucide-react';
import { AbstractVisual3D } from '../3d/AbstractVisual3D';

interface MarketingServicePageProps {
  onBackClick: () => void;
  onTalkClick: () => void;
}

export const MarketingServicePage: React.FC<MarketingServicePageProps> = ({
  onBackClick,
  onTalkClick,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-20 font-sans selection:bg-white selection:text-black">
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
              DIGITAL MARKETING AUTOMATION
            </span>
            <h1 className="font-mono font-black text-5xl sm:text-7xl uppercase tracking-tight text-white leading-none">
              Smarter Marketing. <br />
              Better Results.
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg font-normal">
              We automate the tasks, so you can focus on strategy and growth.
            </p>
            <button
              onClick={onTalkClick}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-all duration-300 rounded-none cursor-pointer mt-4"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Premium 3D Interactive Mockup (Arch + Floating Sphere + Orbits) */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px]">
            <AbstractVisual3D mode="marketing" className="w-full h-full" />
          </div>
        </section>

        {/* 02: THE CHALLENGES YOU FACE */}
        <section className="py-20 border-b border-neutral-900">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
              THE CHALLENGES YOU FACE
            </span>
            <hr className="w-12 border-t border-white opacity-30 my-4 mx-auto" />
          </div>

          <div className="relative">
            {/* SVG Connecting lines back to center glowing element */}
            <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
              <svg viewBox="0 0 1000 450" className="w-full h-full" fill="none">
                <g stroke="#222" strokeWidth="1.5">
                  <path d="M 120 120 C 120 280, 500 280, 500 370" />
                  <path d="M 300 120 C 300 250, 500 250, 500 370" />
                  <path d="M 450 120 C 450 250, 500 250, 500 370" />
                  <path d="M 550 120 C 550 250, 500 250, 500 370" />
                  <path d="M 700 120 C 700 250, 500 250, 500 370" />
                  <path d="M 880 120 C 880 280, 500 280, 500 370" />
                </g>
                <circle cx="500" cy="370" r="16" fill="#ffffff" />
                <path d="M 495 370 L 505 370 M 500 365 L 500 375" stroke="#000" strokeWidth="2" />
              </svg>
            </div>

            {/* 6 Columns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {/* Card 1 */}
              <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 flex flex-col justify-between items-center text-center min-h-[220px] hover:border-neutral-800 transition-colors">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-white">Time-Consuming</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Manual tasks take away from what matters most.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 flex flex-col justify-between items-center text-center min-h-[220px] hover:border-neutral-800 transition-colors">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-white">Slow Responses</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Delays cost leads and reduce opportunities.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 flex flex-col justify-between items-center text-center min-h-[220px] hover:border-neutral-800 transition-colors">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white">
                  <User className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-white">Missed Opportunities</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Potential leads slip through the cracks every day.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 flex flex-col justify-between items-center text-center min-h-[220px] hover:border-neutral-800 transition-colors">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-white">Content Overload</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Managing content across multiple platforms is tough.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 flex flex-col justify-between items-center text-center min-h-[220px] hover:border-neutral-800 transition-colors">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-white">Repetitive Tasks</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Doing the same things over and over drains time.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 flex flex-col justify-between items-center text-center min-h-[220px] hover:border-neutral-800 transition-colors">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white">
                  <Puzzle className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-white">Too Many Tools</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Disconnected tools create chaos and slow you down.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-16 lg:hidden" />
          </div>
        </section>

        {/* 03: ONE POWERFUL SYSTEM */}
        <section className="py-20 border-b border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left info */}
            <div className="lg:col-span-4 flex flex-col items-start gap-4">
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
                OUR SOLUTION
              </span>
              <h2 className="font-mono font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                One Powerful <br /> System
              </h2>
              <hr className="w-12 border-t border-white opacity-30 my-2" />
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                All your marketing in one connected automation engine.
              </p>
            </div>

            {/* Right System connections map */}
            <div className="lg:col-span-8 flex items-center justify-center bg-neutral-950 border border-neutral-900 rounded-2xl p-6 relative overflow-hidden min-h-[380px]">
              <svg viewBox="0 0 600 320" className="w-full h-full max-w-lg select-none" fill="none">
                <defs>
                  <linearGradient id="solArchGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#171717" />
                  </linearGradient>
                </defs>

                {/* Hub lines */}
                <g stroke="#1c1c1c" strokeWidth="1.5">
                  {/* Left Column connectors */}
                  <path d="M 300 160 C 240 160, 240 60, 180 60" />
                  <path d="M 300 160 C 240 160, 240 120, 180 120" />
                  <path d="M 300 160 C 240 160, 240 200, 180 200" />
                  <path d="M 300 160 C 240 160, 240 260, 180 260" />
                  {/* Right Column connectors */}
                  <path d="M 300 160 C 360 160, 360 60, 420 60" />
                  <path d="M 300 160 C 360 160, 360 120, 420 120" />
                  <path d="M 300 160 C 360 160, 360 200, 420 200" />
                  <path d="M 300 160 C 360 160, 360 260, 420 260" />
                </g>

                {/* Center Node 3D Arch SVG */}
                <ellipse cx="300" cy="180" rx="30" ry="6" fill="#000" stroke="#222" strokeWidth="0.5" />
                <path d="M 285 180 C 285 145, 315 145, 315 180" stroke="url(#solArchGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
                <circle cx="300" cy="135" r="14" fill="#ffffff" />
                {/* User avatar silhouette inside sphere */}
                <ellipse cx="300" cy="144" rx="7" ry="3.5" fill="#000" />
                <circle cx="300" cy="135" r="3.5" fill="#000" />

                {/* Left Columns Nodes */}
                {/* SEO */}
                <circle cx="180" cy="60" r="12" fill="#000" stroke="#333" strokeWidth="1" />
                <Search className="w-3 h-3 text-white" x="174" y="54" />
                <text x="145" y="64" fill="#888" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="end">SEO</text>

                {/* Social Media */}
                <circle cx="180" cy="120" r="12" fill="#000" stroke="#333" strokeWidth="1" />
                <Hash className="w-3 h-3 text-white" x="174" y="114" />
                <text x="145" y="124" fill="#888" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="end">Social Media</text>

                {/* Content */}
                <circle cx="180" cy="200" r="12" fill="#000" stroke="#333" strokeWidth="1" />
                <PenTool className="w-3 h-3 text-white" x="174" y="194" />
                <text x="145" y="204" fill="#888" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="end">Content</text>

                {/* Email Marketing */}
                <circle cx="180" cy="260" r="12" fill="#000" stroke="#333" strokeWidth="1" />
                <Mail className="w-3 h-3 text-white" x="174" y="254" />
                <text x="145" y="264" fill="#888" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="end">Email Marketing</text>

                {/* Right Columns Nodes */}
                {/* Paid Ads */}
                <circle cx="420" cy="60" r="12" fill="#000" stroke="#333" strokeWidth="1" />
                <DollarSign className="w-3 h-3 text-white" x="414" y="54" />
                <text x="440" y="64" fill="#888" fontSize="8" fontWeight="bold" fontFamily="monospace">Paid Ads</text>

                {/* Analytics */}
                <circle cx="420" cy="120" r="12" fill="#000" stroke="#333" strokeWidth="1" />
                <BarChart3 className="w-3 h-3 text-white" x="414" y="114" />
                <text x="440" y="124" fill="#888" fontSize="8" fontWeight="bold" fontFamily="monospace">Analytics</text>

                {/* Lead Generation */}
                <circle cx="420" cy="200" r="12" fill="#000" stroke="#333" strokeWidth="1" />
                <Users className="w-3 h-3 text-white" x="414" y="194" />
                <text x="440" y="204" fill="#888" fontSize="8" fontWeight="bold" fontFamily="monospace">Lead Gen</text>

                {/* Automation */}
                <circle cx="420" cy="260" r="12" fill="#000" stroke="#333" strokeWidth="1" />
                <Settings className="w-3 h-3 text-white" x="414" y="254" />
                <text x="440" y="264" fill="#888" fontSize="8" fontWeight="bold" fontFamily="monospace">Automation</text>
              </svg>
            </div>
          </div>
        </section>

        {/* 04: PROCESS SECTION */}
        <section className="py-20 border-b border-neutral-900">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
              OUR PROCESS
            </span>
            <hr className="w-12 border-t border-white opacity-30 my-4 mx-auto" />
          </div>

          <div className="relative">
            {/* Step connector line */}
            <div className="absolute top-[28px] left-[8%] right-[8%] h-[1px] bg-neutral-800 z-0 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-black border border-neutral-800 flex items-center justify-center font-mono font-bold text-base text-white hover:border-white transition-colors">
                  <Search className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 block">01</span>
                  <h4 className="font-mono font-bold text-xs uppercase text-white">Research</h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed max-w-[150px]">
                    We analyze your brand, audience and market.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-black border border-neutral-800 flex items-center justify-center font-mono font-bold text-base text-white hover:border-white transition-colors">
                  <Target className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 block">02</span>
                  <h4 className="font-mono font-bold text-xs uppercase text-white">Strategy</h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed max-w-[150px]">
                    We build a data-driven marketing strategy.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-black border border-neutral-800 flex items-center justify-center font-mono font-bold text-base text-white hover:border-white transition-colors">
                  <PenTool className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 block">03</span>
                  <h4 className="font-mono font-bold text-xs uppercase text-white">Create</h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed max-w-[150px]">
                    We design content that drives attention and clicks.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-black border border-neutral-800 flex items-center justify-center font-mono font-bold text-base text-white hover:border-white transition-colors">
                  <Send className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 block">04</span>
                  <h4 className="font-mono font-bold text-xs uppercase text-white">Launch</h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed max-w-[150px]">
                    We launch campaigns across the right channels.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-black border border-neutral-800 flex items-center justify-center font-mono font-bold text-base text-white hover:border-white transition-colors">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 block">05</span>
                  <h4 className="font-mono font-bold text-xs uppercase text-white">Optimize</h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed max-w-[150px]">
                    We analyze, test and optimize for better results.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 05: VALUES ROW */}
        <section className="py-16 border-b border-neutral-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-neutral-900">
            <div className="flex items-center gap-5 pt-6 md:pt-0">
              <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono font-bold text-xs uppercase text-white">Save Time</h4>
                <p className="text-neutral-500 text-xs mt-1">Automate repetitive tasks and focus on growth.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 pt-6 md:pt-0 md:pl-10">
              <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono font-bold text-xs uppercase text-white">More Leads</h4>
                <p className="text-neutral-500 text-xs mt-1">Attract the right audience and convert consistently.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 pt-6 md:pt-0 md:pl-10">
              <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono font-bold text-xs uppercase text-white">Better Results</h4>
                <p className="text-neutral-500 text-xs mt-1">Data-driven strategies that deliver real growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 06: BOTTOM CTA SECTION */}
        <section className="bg-black py-20">
          <div className="bg-neutral-950 border border-neutral-900 p-8 sm:p-14 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-12 rounded-none">
            
            {/* Left Text Box */}
            <div className="space-y-4 lg:w-1/2 flex flex-col items-start">
              <h2 className="font-mono font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                Let's Grow Your <br />
                Brand Together
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-sans">
                We build digital marketing systems that work 24/7—so you can scale without stress.
              </p>
              <button
                onClick={onTalkClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-all duration-300 cursor-pointer mt-4"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Right 3D Stand SVG Graphic */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[220px]">
              <AbstractVisual3D mode="marketing" className="w-full h-full max-w-[280px]" />
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
