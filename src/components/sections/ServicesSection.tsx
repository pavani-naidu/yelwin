import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ServiceItem } from '../../types';
import { SERVICES_DATA } from '../../data/contentData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Modal } from '../common/Modal';
import { analytics } from '../../utils/analytics';

interface ServicesSectionProps {
  onStartProjectForService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onStartProjectForService,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleCardClick = (service: ServiceItem) => {
    analytics.track('Service Card Click', 'CaseStudy', service.title);
    setSelectedService(service);
  };

  return (
    <section id="services" className="bg-black text-white py-28 px-6 md:px-12 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
              WHAT WE DO
            </div>
            <h2 className="font-mono font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              BUILT FOR <br />
              WHAT’S NEXT.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-lg">
            <p className="text-sm font-sans text-neutral-400 leading-relaxed font-normal">
              From powerful digital solutions to brand experiences that connect — we build products and growth systems that last.
            </p>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-neutral-300 transition-colors shrink-0 group"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* 5 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICES_DATA.map((service, index) => {
            // Distinct 3D Graphic per card matching the model photo
            const renderGraphic = (id: string) => {
              if (id === 'digital-products') {
                return (
                  // 3D Isometric Cube Grid
                  <svg width="100" height="100" viewBox="0 0 120 120" fill="none" className="mx-auto">
                    <path d="M60 20 L95 40 L60 60 L25 40 Z" fill="#333" stroke="#555" strokeWidth="1" />
                    <path d="M25 40 L60 60 L60 100 L25 80 Z" fill="#1a1a1a" stroke="#444" strokeWidth="1" />
                    <path d="M60 60 L95 40 L95 80 L60 100 Z" fill="#262626" stroke="#444" strokeWidth="1" />
                    {/* Nested Floating Top Cube */}
                    <path d="M60 30 L80 41.5 L60 53 L40 41.5 Z" fill="#666" />
                    <path d="M40 41.5 L60 53 L60 76 L40 64.5 Z" fill="#333" />
                    <path d="M60 53 L80 41.5 L80 64.5 L60 76 Z" fill="#4a4a4a" />
                  </svg>
                );
              } else if (id === 'ai-automation') {
                return (
                  // 3D Spiral Ribbon Helix
                  <svg width="100" height="100" viewBox="0 0 120 120" fill="none" className="mx-auto">
                    <path d="M30 85 C40 95, 80 95, 90 85 C100 75, 20 65, 30 55 C40 45, 80 45, 90 35 C100 25, 60 15, 60 15" stroke="#777" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <path d="M30 85 C40 95, 80 95, 90 85 C100 75, 20 65, 30 55" stroke="#aaa" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                );
              } else if (id === 'brand-design') {
                return (
                  // 3D Octahedron Crystal Diamond
                  <svg width="100" height="100" viewBox="0 0 120 120" fill="none" className="mx-auto">
                    <path d="M60 15 L95 60 L60 105 L25 60 Z" fill="#181818" stroke="#555" strokeWidth="1" />
                    <path d="M60 15 L60 105" stroke="#666" strokeWidth="1" />
                    <path d="M25 60 L95 60" stroke="#666" strokeWidth="1" />
                    <path d="M60 15 L78 60 L60 105 L42 60 Z" fill="#2a2a2a" opacity="0.6" />
                  </svg>
                );
              } else if (id === 'digital-growth') {
                return (
                  // 3D Ascending Stairs Blocks
                  <svg width="100" height="100" viewBox="0 0 120 120" fill="none" className="mx-auto">
                    <rect x="20" y="75" width="16" height="25" fill="#222" stroke="#444" />
                    <rect x="42" y="60" width="16" height="40" fill="#333" stroke="#555" />
                    <rect x="64" y="45" width="16" height="55" fill="#444" stroke="#666" />
                    <rect x="86" y="30" width="16" height="70" fill="#555" stroke="#777" />
                  </svg>
                );
              } else {
                return (
                  // 3D Sphere Cluster / Molecule
                  <svg width="100" height="100" viewBox="0 0 120 120" fill="none" className="mx-auto">
                    <circle cx="60" cy="60" r="22" fill="#444" stroke="#777" strokeWidth="1" />
                    <circle cx="38" cy="42" r="16" fill="#222" stroke="#555" strokeWidth="1" />
                    <circle cx="82" cy="42" r="16" fill="#333" stroke="#666" strokeWidth="1" />
                    <circle cx="38" cy="78" r="16" fill="#2a2a2a" stroke="#555" strokeWidth="1" />
                    <circle cx="82" cy="78" r="16" fill="#383838" stroke="#666" strokeWidth="1" />
                    <circle cx="60" cy="60" r="12" fill="#666" opacity="0.8" />
                  </svg>
                );
              }
            };

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => handleCardClick(service)}
                className="group relative bg-neutral-950 border border-neutral-900 rounded-xl p-5 md:p-6 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 cursor-pointer overflow-hidden min-h-[380px]"
              >
                {/* 3D Visual Object Banner */}
                <div className="h-28 flex items-center justify-center bg-black/40 rounded-lg mb-4 border border-neutral-900 group-hover:border-neutral-800 transition-colors">
                  {renderGraphic(service.id)}
                </div>

                {/* Card Number & Content */}
                <div className="flex flex-col gap-2">
                  <span className="font-mono font-semibold text-xs text-neutral-500">
                    {service.number}
                  </span>
                  <h3 className="font-mono font-bold text-base md:text-lg uppercase tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed font-sans line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Circular Arrow Icon */}
                <div className="pt-4 mt-2 flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService ? `SERVICE / ${selectedService.title}` : ''}
      >
        {selectedService && (
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-neutral-400 tracking-widest uppercase">
                {selectedService.number} — OVERVIEW
              </span>
              <h2 className="font-mono font-black text-3xl md:text-4xl uppercase text-white">
                {selectedService.title}
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {selectedService.fullDetails?.overview || selectedService.description}
              </p>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <h4 className="text-xs font-mono font-bold text-neutral-400 tracking-widest uppercase">
                KEY CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedService.fullDetails?.capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3 text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-800">
              <div>
                <h4 className="text-xs font-mono font-bold text-neutral-400 tracking-widest uppercase mb-2">
                  DELIVERABLES
                </h4>
                <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1">
                  {selectedService.fullDetails?.deliverables.map((del) => (
                    <li key={del}>{del}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-neutral-400 tracking-widest uppercase mb-2">
                  TYPICAL TIMELINE
                </h4>
                <p className="text-sm font-mono text-white font-bold">
                  {selectedService.fullDetails?.typicalTimeline}
                </p>
              </div>
            </div>

            {/* Modal CTA */}
            <div className="pt-6 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onStartProjectForService(title);
                }}
                className="px-8 py-4 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors"
              >
                BUILD WITH THIS CAPABILITY →
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
