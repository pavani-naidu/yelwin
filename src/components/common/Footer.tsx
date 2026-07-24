import React from 'react';
import { Logo } from './Logo';
import { analytics } from '../../utils/analytics';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'cookie') => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onNavigate }) => {
  const currentYear = 2026;

  const socialLinks = [
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Instagram', url: 'https://instagram.com' },
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'YouTube', url: 'https://youtube.com' },
    { label: 'X', url: 'https://x.com' },
  ];

  return (
    <footer className="bg-black text-white border-t border-neutral-800 pt-20 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Logo size="lg" showTagline={true} />
            <p className="text-neutral-400 text-sm font-sans max-w-md leading-relaxed mt-2">
              YELWIN is a modern technology and digital innovation company turning ambitious ideas into high-performance digital products, intelligent AI technology, and scalable brand systems.
            </p>
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              Technology. Creativity. Growth.
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 font-mono text-sm">
              {['work', 'services', 'about', 'insights', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      analytics.track('Footer Nav Click', 'Navigation', id);
                      onNavigate(id);
                    }}
                    className="text-neutral-300 hover:text-white uppercase transition-colors"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Connect Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
              Global Presence
            </h4>
            <div className="text-sm text-neutral-300 font-mono space-y-1">
              <p>hello@yelwin.com</p>
              <p>Global Engineering & Innovation Labs</p>
            </div>

            <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mt-4">
              Social Connect
            </h4>
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analytics.track('Social Click', 'Navigation', s.label)}
                  className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-500">
          <div>© {currentYear} YELWIN. All rights reserved. BE BEYOND.</div>

          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onOpenLegal('cookie')}
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
