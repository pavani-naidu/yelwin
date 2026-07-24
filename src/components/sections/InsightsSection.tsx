import React, { useState } from 'react';
import { InsightArticle } from '../../types';
import { INSIGHTS_ARTICLES } from '../../data/contentData';
import { Search, ArrowUpRight, Clock } from 'lucide-react';
import { Modal } from '../common/Modal';
import { analytics } from '../../utils/analytics';

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'AI', 'Technology', 'Startups', 'Design', 'Branding', 'Digital Growth'];

  const filteredArticles = INSIGHTS_ARTICLES.filter((art) => {
    const matchesCategory = activeCategory === 'ALL' || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenArticle = (art: InsightArticle) => {
    analytics.track('Insight Read Click', 'Insight', art.title);
    setSelectedArticle(art);
  };

  return (
    <section id="insights" className="bg-black text-white py-28 px-6 md:px-12 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
              INSIGHTS / BLOG
            </div>
            <h2 className="font-mono font-black text-4xl sm:text-6xl uppercase tracking-tight text-white">
              THINKING BEYOND THE BUILD.
            </h2>
          </div>

          {/* Search input for blog */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights..."
              className="w-full bg-neutral-950 border border-neutral-800 text-white text-xs font-mono pl-9 pr-4 py-2.5 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-neutral-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black font-bold'
                  : 'bg-neutral-950 text-neutral-400 border border-neutral-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => handleOpenArticle(art)}
              className="group bg-neutral-950 border border-neutral-800 p-8 flex flex-col justify-between hover:border-white transition-all cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase mb-4">
                  <span className="px-2 py-0.5 bg-black border border-neutral-800 text-white font-bold">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="font-mono font-bold text-xl text-white uppercase mb-3 group-hover:text-neutral-200 transition-colors">
                  {art.title}
                </h3>

                <p className="text-neutral-400 text-xs font-sans leading-relaxed line-clamp-3 mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono font-bold tracking-widest uppercase text-white group-hover:translate-x-1 transition-transform">
                <span>READ ARTICLE</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <Modal
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        title={selectedArticle ? `INSIGHT / ${selectedArticle.category}` : ''}
      >
        {selectedArticle && (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 uppercase">
                <span>{selectedArticle.author.name}</span>
                <span>•</span>
                <span>{selectedArticle.publishedAt}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <h2 className="font-mono font-black text-3xl md:text-4xl text-white uppercase">
                {selectedArticle.title}
              </h2>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-800 text-neutral-300 font-sans leading-relaxed text-base">
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
