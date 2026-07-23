import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CaseStudy } from '../../types';
import { CASE_STUDIES_DATA } from '../../data/contentData';
import { ArrowUpRight, Search } from 'lucide-react';
import { Modal } from '../common/Modal';
import { analytics } from '../../utils/analytics';

export const WorkSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'AI & SaaS Platform', 'Digital Product', 'Brand & AI Integration'];

  const filteredCaseStudies = CASE_STUDIES_DATA.filter((item) => {
    const matchesFilter = activeFilter === 'ALL' || item.category === activeFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.services.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const handleOpenCase = (cs: CaseStudy) => {
    analytics.track('Case Study Open', 'CaseStudy', cs.title);
    setSelectedCase(cs);
  };

  return (
    <section id="work" className="bg-black text-white py-28 px-6 md:px-12 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
              FEATURED WORK
            </div>
            <h2 className="font-mono font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              MADE REAL. <br />
              MADE TO MATTER.
            </h2>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-neutral-300 transition-colors group"
          >
            <span>EXPLORE ALL PROJECTS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Case Studies Grid - 4 Cards in 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCaseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => handleOpenCase(cs)}
              className="group cursor-pointer bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all duration-300"
            >
              {/* Image Banner Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-900">
                <img
                  src={cs.imageUrl}
                  alt={`${cs.title} - ${cs.client}`}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Footer Details */}
              <div className="p-6 md:p-8 flex items-center justify-between border-t border-neutral-900 bg-black/60">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                    {cs.industry}
                  </span>
                  <h3 className="font-mono font-bold text-xl text-white uppercase group-hover:text-neutral-200 transition-colors">
                    {cs.title}
                  </h3>
                  <span className="text-xs font-sans text-neutral-400">
                    {cs.services[0]}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-white group-hover:bg-white transition-all">
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <Modal
        isOpen={!!selectedCase}
        onClose={() => setSelectedCase(null)}
        title={selectedCase ? `CASE STUDY / ${selectedCase.title}` : ''}
      >
        {selectedCase && (
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 uppercase">
                <span>{selectedCase.client}</span>
                <span>•</span>
                <span>{selectedCase.industry}</span>
                <span>•</span>
                <span>{selectedCase.year}</span>
              </div>
              <h2 className="font-mono font-black text-4xl text-white uppercase">
                {selectedCase.title}
              </h2>
            </div>

            <div className="h-72 w-full overflow-hidden border border-neutral-800">
              <img
                src={selectedCase.imageUrl}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-950 p-6 border border-neutral-800">
              {selectedCase.fullStory.results.map((res) => (
                <div key={res.label} className="flex flex-col">
                  <span className="font-mono font-black text-2xl text-white">{res.value}</span>
                  <span className="text-xs font-mono text-neutral-400 uppercase">{res.label}</span>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
              <div className="space-y-2">
                <h4 className="font-mono font-bold text-xs text-neutral-400 uppercase tracking-widest">
                  THE CHALLENGE
                </h4>
                <p className="text-neutral-300">{selectedCase.fullStory.challenge}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-mono font-bold text-xs text-neutral-400 uppercase tracking-widest">
                  THE YELWIN SOLUTION
                </h4>
                <p className="text-neutral-300">{selectedCase.fullStory.solution}</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-2 pt-4 border-t border-neutral-800">
              <h4 className="font-mono font-bold text-xs text-neutral-400 uppercase tracking-widest">
                TECHNOLOGY ARCHITECTURE
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCase.fullStory.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-neutral-900 border border-neutral-800 font-mono text-xs text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
