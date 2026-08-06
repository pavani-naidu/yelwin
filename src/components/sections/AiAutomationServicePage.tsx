import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  MousePointerClick, 
  Clock, 
  User, 
  FileText, 
  RefreshCw, 
  Grid,
  Sparkles,
  Zap,
  GitBranch,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Mail,
  Calendar,
  FolderOpen,
  Headphones,
  BarChart3
} from 'lucide-react';
import { AbstractVisual3D } from '../3d/AbstractVisual3D';

interface AiAutomationServicePageProps {
  onBackClick: () => void;
  onTalkClick: () => void;
}

export const AiAutomationServicePage: React.FC<AiAutomationServicePageProps> = ({
  onBackClick,
  onTalkClick,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#fafafa] text-black min-h-screen pt-24 pb-20 font-sans selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button
          onClick={onBackClick}
          className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 hover:text-black transition-colors cursor-pointer mb-10"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO ALL SERVICES</span>
        </button>

        {/* 01: HERO SECTION */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-neutral-200 pb-20">
          <div className="lg:col-span-6 flex flex-col items-start gap-6 relative z-10">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-neutral-500 uppercase">
              AI AUTOMATION
            </span>
            <h1 className="font-mono font-black text-5xl sm:text-7xl uppercase tracking-tight text-black leading-none">
              Intelligent <br />
              Automation.
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed max-w-lg font-normal">
              We eliminate repetitive work so your team can focus on growth.
            </p>
            <div className="flex flex-col items-start gap-3 mt-4">
              <button
                onClick={onTalkClick}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-mono font-bold text-xs tracking-widest uppercase hover:bg-neutral-800 transition-all duration-300 rounded-none cursor-pointer"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={onTalkClick}
                className="text-xs font-mono font-bold tracking-widest text-neutral-500 hover:text-black uppercase mt-1 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Automate. Simplify. Scale.</span>
              </button>
            </div>
          </div>

          {/* Premium 3D Interactive Mockup (Arch + Floating Spheres) */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px]">
            <AbstractVisual3D mode="automation" className="w-full h-full" />
          </div>
        </section>

        {/* 02: THE PROBLEMS WE SOLVE */}
        <section className="py-20 border-b border-neutral-200">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
              THE PROBLEMS WE SOLVE
            </span>
            <hr className="w-12 border-t border-black opacity-30 my-4 mx-auto" />
          </div>

          <div className="relative">
            {/* SVG Connecting lines back to center glowing element */}
            <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
              <svg viewBox="0 0 1000 450" className="w-full h-full" fill="none">
                <g stroke="#e2e8f0" strokeWidth="1.5">
                  {/* Paths connecting columns to center sphere */}
                  <path d="M 120 120 C 120 280, 500 280, 500 370" />
                  <path d="M 300 120 C 300 250, 500 250, 500 370" />
                  <path d="M 450 120 C 450 250, 500 250, 500 370" />
                  <path d="M 550 120 C 550 250, 500 250, 500 370" />
                  <path d="M 700 120 C 700 250, 500 250, 500 370" />
                  <path d="M 880 120 C 880 280, 500 280, 500 370" />
                </g>
                {/* Converging node base */}
                <circle cx="500" cy="370" r="16" fill="#000000" />
                <path d="M 495 370 L 505 370 M 500 365 L 500 375" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>

            {/* 6 Columns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {/* Card 1 */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-sm min-h-[220px]">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                  <MousePointerClick className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block">01</span>
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-black">Manual Work</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Time-consuming processes slow your team down.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-sm min-h-[220px]">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block">02</span>
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-black">Slow Response Time</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Late responses lead to unhappy customers.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-sm min-h-[220px]">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                  <User className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block">03</span>
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-black">Missed Leads</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Opportunities slip through the cracks every day.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-sm min-h-[220px]">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block">04</span>
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-black">Data Entry</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Repetitive data entry wastes time and increases errors.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-sm min-h-[220px]">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block">05</span>
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-black">Repetitive Tasks</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Doing the same tasks prevents real productivity.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-sm min-h-[220px]">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                  <Grid className="w-5 h-5" />
                </div>
                <div className="space-y-2 mt-4">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block">06</span>
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-black">Too Many Tools</h3>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Disconnected tools create chaos and reduce efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Glowing converge node spacer for mobile spacing */}
            <div className="h-16 lg:hidden" />
          </div>
        </section>

        {/* 03: ONE INTELLIGENT SYSTEM */}
        <section className="py-20 border-b border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text description */}
            <div className="lg:col-span-5 flex flex-col items-start gap-4">
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
                ONE INTELLIGENT SYSTEM
              </span>
              <h2 className="font-mono font-bold text-3xl sm:text-4xl uppercase tracking-tight text-black leading-tight">
                All your operations. <br />
                Connected. Automated. <br />
                Working together.
              </h2>
              <hr className="w-12 border-t border-black opacity-30 my-2" />
            </div>

            {/* Right hub diagram */}
            <div className="lg:col-span-7 flex items-center justify-center relative min-h-[380px] bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm overflow-hidden">
              <svg viewBox="0 0 500 340" className="w-full h-full max-w-md select-none" fill="none">
                <defs>
                  <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ambient glow in center */}
                <circle cx="250" cy="170" r="100" fill="url(#hubGlow)" />

                {/* Connecting lines */}
                <g stroke="#e5e7eb" strokeWidth="1">
                  <line x1="250" y1="170" x2="200" y2="70" />
                  <line x1="250" y1="170" x2="300" y2="70" />
                  <line x1="250" y1="170" x2="140" y2="120" />
                  <line x1="250" y1="170" x2="360" y2="120" />
                  <line x1="250" y1="170" x2="130" y2="190" />
                  <line x1="250" y1="170" x2="370" y2="190" />
                  <line x1="250" y1="170" x2="180" y2="280" />
                  <line x1="250" y1="170" x2="320" y2="280" />
                </g>

                {/* Central Node: User Silhouette Base */}
                <circle cx="250" cy="170" r="32" fill="#000000" />
                <ellipse cx="250" cy="188" rx="14" ry="7" fill="#ffffff" />
                <circle cx="250" cy="170" r="7" fill="#ffffff" />

                {/* Surrounding Nodes */}
                {/* 1. CRM */}
                <circle cx="200" cy="70" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                <path d="M 195 72 A 5 5 0 0 1 205 72 M 197 73 A 3 3 0 0 1 203 73" stroke="#000" strokeWidth="1" />
                <circle cx="200" cy="65" r="3" fill="#000" />
                <text x="223" y="73" fill="#666" fontSize="7" fontWeight="bold" fontFamily="monospace">CRM</text>

                {/* 2. WhatsApp */}
                <circle cx="300" cy="70" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                <path d="M 295 74 Q 295 70, 298 67 T 304 67 T 305 72 Z M 297 75 L 295 77 L 297 74" stroke="#000" strokeWidth="1" fill="none" />
                <text x="323" y="73" fill="#666" fontSize="7" fontWeight="bold" fontFamily="monospace">WhatsApp</text>

                {/* 3. Email */}
                <circle cx="360" cy="120" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                <rect x="353" y="115" width="14" height="10" rx="1" stroke="#000" strokeWidth="1" fill="none" />
                <path d="M 353 116 L 360 121 L 367 116" stroke="#000" strokeWidth="1" />
                <text x="383" y="123" fill="#666" fontSize="7" fontWeight="bold" fontFamily="monospace">Email</text>

                {/* 4. Calendar */}
                <circle cx="370" cy="190" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                <rect x="363" y="184" width="14" height="12" rx="1.5" stroke="#000" strokeWidth="1" fill="none" />
                <line x1="363" y1="189" x2="377" y2="189" stroke="#000" strokeWidth="1" />
                <circle cx="367" cy="193" r="1" fill="#000" />
                <circle cx="373" cy="193" r="1" fill="#000" />
                <text x="393" y="193" fill="#666" fontSize="7" fontWeight="bold" fontFamily="monospace">Calendar</text>

                {/* 5. Invoices */}
                <circle cx="320" cy="280" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                <rect x="314" y="274" width="12" height="14" rx="1" stroke="#000" strokeWidth="1" fill="none" />
                <line x1="317" y1="278" x2="323" y2="278" stroke="#000" strokeWidth="0.8" />
                <line x1="317" y1="282" x2="323" y2="282" stroke="#000" strokeWidth="0.8" />
                <text x="343" y="283" fill="#666" fontSize="7" fontWeight="bold" fontFamily="monospace">Invoices</text>

                {/* 6. Documents */}
                <circle cx="180" cy="280" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                <path d="M 173 283 L 173 274 A 1 1 0 0 1 174 273 L 179 273 L 181 276 L 186 276 A 1 1 0 0 1 187 277 L 187 283 Z" stroke="#000" strokeWidth="1" fill="none" />
                <text x="203" y="283" fill="#666" fontSize="7" fontWeight="bold" fontFamily="monospace">Documents</text>

                {/* 7. Support */}
                <circle cx="130" cy="190" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                <path d="M 124 192 A 6 6 0 0 1 136 192 M 123 192 L 123 194 M 137 192 L 137 194" stroke="#000" strokeWidth="1" fill="none" />
                <circle cx="123" cy="195" r="1.5" fill="#000" />
                <circle cx="137" cy="195" r="1.5" fill="#000" />
                <text x="153" y="193" fill="#666" fontSize="7" fontWeight="bold" fontFamily="monospace">Support</text>

                {/* 8. Analytics */}
                <circle cx="140" cy="120" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="133" y1="126" x2="133" y2="120" stroke="#000" strokeWidth="2.5" />
                <line x1="140" y1="126" x2="140" y2="114" stroke="#000" strokeWidth="2.5" />
                <line x1="147" y1="126" x2="147" y2="118" stroke="#000" strokeWidth="2.5" />
                <text x="163" y="123" fill="#666" fontSize="7" fontWeight="bold" fontFamily="monospace">Analytics</text>
              </svg>
            </div>
          </div>
        </section>

        {/* 04: FROM CHAOS TO AUTOMATION */}
        <section className="py-20 border-b border-neutral-200">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
              FROM CHAOS TO AUTOMATION
            </span>
            <hr className="w-12 border-t border-black opacity-30 my-4 mx-auto" />
          </div>

          <div className="relative">
            {/* Dotted connector lines for steps */}
            <div className="absolute top-[32px] left-[10%] right-[10%] h-[1.5px] border-t border-dashed border-neutral-300 z-0 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {/* Step 1 */}
              <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col justify-between items-center text-center shadow-xs min-h-[160px]">
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                  <User className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1.5 mt-4">
                  <h4 className="font-mono font-bold text-xs uppercase text-black">Lead</h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    New lead enters your system.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col justify-between items-center text-center shadow-xs min-h-[160px]">
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1.5 mt-4">
                  <h4 className="font-mono font-bold text-xs uppercase text-black">AI Thinks</h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    AI analyzes data and understands intent.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col justify-between items-center text-center shadow-xs min-h-[160px]">
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                  <GitBranch className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1.5 mt-4">
                  <h4 className="font-mono font-bold text-xs uppercase text-black">Decision</h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    AI decides the best action based on context.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col justify-between items-center text-center shadow-xs min-h-[160px]">
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                  <Zap className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1.5 mt-4">
                  <h4 className="font-mono font-bold text-xs uppercase text-black">Action</h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    AI executes the action automatically across systems.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col justify-between items-center text-center shadow-xs min-h-[160px]">
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1.5 mt-4">
                  <h4 className="font-mono font-bold text-xs uppercase text-black">Result</h4>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Task completed. You get the outcome.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* 05: BLACK HIGHLIGHT BANNER */}
      <section className="bg-black text-white py-16 my-10 select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          
          <div className="flex flex-col gap-3 pt-6 md:pt-0">
            <span className="text-[10px] font-mono text-neutral-500 font-bold">01</span>
            <div className="flex items-center gap-3">
              <h3 className="font-mono font-black text-2xl uppercase tracking-wider">Save Time</h3>
              <Clock className="w-5 h-5 text-neutral-400" />
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-xs mt-2">
              Automate repetitive work and get hours back every day.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-6 md:pt-0 md:pl-10">
            <span className="text-[10px] font-mono text-neutral-500 font-bold">02</span>
            <div className="flex items-center gap-3">
              <h3 className="font-mono font-black text-2xl uppercase tracking-wider">Reduce Costs</h3>
              <DollarSign className="w-5 h-5 text-neutral-400" />
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-xs mt-2">
              Lower operational costs by eliminating manual processes.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-6 md:pt-0 md:pl-10">
            <span className="text-[10px] font-mono text-neutral-500 font-bold">03</span>
            <div className="flex items-center gap-3">
              <h3 className="font-mono font-black text-2xl uppercase tracking-wider">Scale Faster</h3>
              <TrendingUp className="w-5 h-5 text-neutral-400" />
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-xs mt-2">
              Streamline operations and scale without complexity.
            </p>
          </div>

        </div>
      </section>

      {/* 06: BOTTOM CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="bg-black text-white p-8 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-neutral-900 rounded-none relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-neutral-950/60 rounded-full blur-[80px] pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-5 lg:w-1/2 relative z-10 flex flex-col items-start">
            <h2 className="font-mono font-black text-4xl sm:text-5xl uppercase tracking-tight leading-tight">
              Build Smarter. <br />
              Scale Faster.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md">
              Let's build intelligent automations that drive real growth.
            </p>
            <button
              onClick={onTalkClick}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-all duration-300 cursor-pointer mt-4"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Right SVG Graphic */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[220px]">
            <AbstractVisual3D mode="automation" className="w-full h-full max-w-[280px]" />
          </div>
        </div>
      </section>

    </div>
  );
};
