import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { analytics } from '../../utils/analytics';

interface NavbarProps {
  onStartProjectClick: () => void;
  onCareersClick: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartProjectClick,
  onCareersClick,
  activeSection = '',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    analytics.track('Nav Click', 'Navigation', id);
    if (id === 'careers') {
      onCareersClick();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Insights', id: 'insights' },
    { label: 'Careers', id: 'careers' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-black/40 backdrop-blur-sm border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="group focus:outline-none focus:ring-1 focus:ring-white p-1 rounded"
        >
          <Logo size="md" variant="light" />
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-[11px] tracking-widest uppercase font-mono font-medium transition-colors relative py-1 hover:text-white ${
                  isActive ? 'text-white' : 'text-neutral-400'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Desktop CTA + Menu Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => {
              analytics.track('Header CTA Click', 'CTA', 'START SOMETHING');
              onStartProjectClick();
            }}
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-[11px] font-mono font-bold tracking-widest uppercase border border-neutral-700 bg-black/60 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full cursor-pointer"
          >
            <span>START SOMETHING</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full border border-neutral-700 bg-black/60 text-white flex items-center justify-center hover:border-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none focus:ring-1 focus:ring-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-8 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-2xl font-mono font-bold tracking-wider text-neutral-200 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-2xl font-mono font-bold tracking-wider text-neutral-200 hover:text-white transition-colors"
              >
                Contact
              </button>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartProjectClick();
                  }}
                  className="w-full flex items-center justify-between px-6 py-4 bg-white text-black font-mono font-bold text-sm tracking-widest uppercase"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
