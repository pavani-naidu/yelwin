import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../../data/contentData';

interface DefaultServicePageProps {
  serviceId: string;
  serviceTitle: string;
  serviceNumber: string;
  graphic: React.ReactNode;
  onBackClick: () => void;
  onTalkClick: () => void;
}

export const DefaultServicePage: React.FC<DefaultServicePageProps> = ({
  serviceId,
  serviceTitle,
  serviceNumber,
  graphic,
  onBackClick,
  onTalkClick,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  // Find corresponding detail data from global contentData if available
  const matchData = SERVICES_DATA.find(
    (s) =>
      s.title.toLowerCase() === serviceTitle.toLowerCase() ||
      s.services.some((sub) => sub.toLowerCase() === serviceTitle.toLowerCase()) ||
      (serviceId === '01' && s.id === 'brand-design') ||
      (serviceId === '02' && s.id === 'digital-products') ||
      (serviceId === '03' && s.id === 'ai-automation') ||
      (serviceId === '04' && s.id === 'digital-products') ||
      (serviceId === '05' && s.id === 'digital-products') ||
      (serviceId === '06' && s.id === 'digital-growth')
  );

  // Fallbacks if not matched
  const overview = matchData?.fullDetails?.overview || `We engineer scalable, secure, and high-performance solutions for ${serviceTitle}. Our team delivers state-of-the-art software systems to accelerate your business goals.`;
  const capabilities = matchData?.fullDetails?.capabilities || [
    'Custom Solutions & Architectures',
    'Senior Engineering & Design Integration',
    'Scalable Cloud & Database Design',
    'Automated Testing & Security Best Practices',
    'Continuous Integration & Deployment'
  ];
  const deliverables = matchData?.fullDetails?.deliverables || [
    'Production-Ready Codebase',
    'Architecture & API Documentation',
    'CI/CD Deployment Pipelines',
    'Ongoing Project Monitoring Dashboard'
  ];
  const typicalTimeline = matchData?.fullDetails?.typicalTimeline || '6 – 12 Weeks';

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBackClick}
          className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer mb-12"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO ALL SERVICES</span>
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-neutral-900 pb-16">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-400">
              OUR SERVICE — {serviceNumber}
            </span>
            <h1 className="font-mono font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
              {serviceTitle}
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
              {overview}
            </p>
            <button
              onClick={onTalkClick}
              className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase border-b border-white pb-1.5 hover:text-neutral-300 hover:border-neutral-300 transition-colors cursor-pointer mt-4"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="lg:col-span-5 h-[300px] flex items-center justify-center relative bg-neutral-950/40 border border-neutral-900 rounded-2xl p-8">
            <div className="w-full h-full max-w-xs flex items-center justify-center text-white">
              {graphic}
            </div>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-neutral-900">
          <div className="lg:col-span-4">
            <h2 className="font-mono font-bold text-xl tracking-wider uppercase text-white">
              KEY CAPABILITIES
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mt-2">
              Our core competencies engineered to drive excellence in execution.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex items-start gap-3 text-neutral-200 bg-neutral-950/40 border border-neutral-900/60 p-4 rounded-lg">
                <CheckCircle2 className="w-4.5 h-4.5 text-white shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-neutral-900">
          <div className="lg:col-span-4">
            <h2 className="font-mono font-bold text-xl tracking-wider uppercase text-white">
              DELIVERABLES
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mt-2">
              What you receive at the conclusion of the engagement.
            </p>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <ul className="list-disc list-inside text-sm sm:text-base text-neutral-300 space-y-2">
              {deliverables.map((del, i) => (
                <li key={i}>{del}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 bg-neutral-950 border border-neutral-900 p-6 flex flex-col justify-between">
            <span className="text-xs font-mono font-bold text-neutral-500 tracking-wider uppercase">
              TYPICAL TIMELINE
            </span>
            <span className="font-mono font-black text-2xl uppercase text-white mt-4">
              {typicalTimeline}
            </span>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="bg-neutral-950 border border-neutral-900 p-8 sm:p-16 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 rounded-2xl mt-16">
          <div className="space-y-4">
            <div className="text-[10px] font-mono font-bold tracking-[0.3em] text-neutral-400 uppercase">
              HAVE A PROJECT IN MIND?
            </div>
            <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
              Let's build something <br />
              great together.
            </h2>
          </div>

          <div className="max-w-md flex flex-col items-start gap-6 lg:border-l lg:border-neutral-900 lg:pl-10">
            <p className="text-sm font-sans text-neutral-400 leading-relaxed">
              Share your project vision with us. We'll deploy senior engineers and designers to build the perfect custom solution.
            </p>
            <button
              onClick={onTalkClick}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase rounded-full hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
