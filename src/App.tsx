import { useEffect, useState } from 'react';
import { LogoReveal } from './components/common/LogoReveal';
import { Navbar } from './components/common/Navbar';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { Footer } from './components/common/Footer';
import { CookieConsent } from './components/common/CookieConsent';
import { Modal } from './components/common/Modal';
import { ServicesPage } from './components/sections/ServicesPage';
import { CinematicHome } from './components/sections/CinematicHome';
import { LegalPages } from './components/legal/LegalPages';
import { updateSEOMetadata } from './utils/seo';
import { analytics } from './utils/analytics';

export default function App() {
  const [showLogoReveal, setShowLogoReveal] = useState<boolean>(true);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'cookie' | null>(null);
  const [showCareersModal, setShowCareersModal] = useState<boolean>(false);
  const [selectedServiceForProject, setSelectedServiceForProject] = useState<string>('Web Application');
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');

  useEffect(() => {
    // Initialize SEO Metadata
    updateSEOMetadata();
    analytics.track('App Initialized', 'Navigation', 'Home Landing');

    // Check if user already saw logo reveal in session
    const hasSeenReveal = sessionStorage.getItem('yelwin_logo_reveal_seen');
    if (hasSeenReveal) {
      setShowLogoReveal(false);
    }
  }, []);

  const handleRevealComplete = () => {
    sessionStorage.setItem('yelwin_logo_reveal_seen', 'true');
    setShowLogoReveal(false);
  };

  const handlePageNavigation = (page: 'home' | 'services', targetSectionId?: string) => {
    setCurrentPage(page);
    setTimeout(() => {
      if (targetSectionId) {
        const element = document.getElementById(targetSectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      let mappedService = 'Web Application';
      const cleanTitle = serviceTitle.toUpperCase();
      if (cleanTitle.includes('PRODUCT')) {
        mappedService = 'Web Application';
      } else if (cleanTitle.includes('AI') || cleanTitle.includes('AUTOMATION')) {
        mappedService = 'AI Automation';
      } else if (cleanTitle.includes('BRAND') || cleanTitle.includes('DESIGN')) {
        mappedService = 'Brand Identity';
      } else if (cleanTitle.includes('GROWTH')) {
        mappedService = 'Digital Marketing';
      } else if (cleanTitle.includes('STRATEGY')) {
        mappedService = 'Something Else';
      } else {
        mappedService = serviceTitle;
      }
      setSelectedServiceForProject(mappedService);
    }
    handlePageNavigation('home', 'contact');
  };

  const scrollToWork = () => {
    handlePageNavigation('home', 'work');
  };

  const scrollToSection = (id: string) => {
    handlePageNavigation('home', id);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black antialiased">
      {/* 3-4s Logo Reveal Sequence */}
      {showLogoReveal && <LogoReveal onComplete={handleRevealComplete} />}

      {/* Main Website App Experience */}
      {!showLogoReveal && (
        <>
          {/* Top Reading Scroll Progress Indicator */}
          <ScrollProgressBar />

          {/* Header Navigation */}
          <Navbar
            onStartProjectClick={() => scrollToContact()}
            onCareersClick={() => setShowCareersModal(true)}
            currentPage={currentPage}
            onNavigate={(page, id) => handlePageNavigation(page, id)}
          />

          {/* Main Sections */}
          <main>
            {currentPage === 'services' ? (
              <ServicesPage onTalkClick={() => scrollToContact()} />
            ) : (
              <CinematicHome onTalkClick={() => scrollToContact()} />
            )}
          </main>

          {/* Footer */}
          <Footer
            onOpenLegal={(policy) => setActiveLegalModal(policy)}
            onNavigate={(id) => {
              if (id === 'services') {
                handlePageNavigation('services');
              } else {
                handlePageNavigation('home', id);
              }
            }}
          />

          {/* Cookie Consent Banner */}
          <CookieConsent />

          {/* Legal Policy Modals */}
          <LegalPages
            activePolicy={activeLegalModal}
            onClose={() => setActiveLegalModal(null)}
          />

          {/* Careers Modal */}
          <Modal
            isOpen={showCareersModal}
            onClose={() => setShowCareersModal(false)}
            title="CAREERS / JOIN THE TEAM"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-neutral-400 tracking-widest uppercase">
                  CAREERS AT YELWIN
                </span>
                <h2 className="font-mono font-black text-3xl uppercase text-white">
                  WE ARE LOOKING FOR THE TOP 1%.
                </h2>
                <p className="text-neutral-300 text-base leading-relaxed">
                  At YELWIN, we bring technology, AI, design, and strategy together to build what’s next. We are always looking for exceptional engineers, product managers, and creative designers to join our global team.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-neutral-800">
                <h3 className="font-mono font-bold text-sm uppercase text-white">
                  CURRENT FOCUS AREAS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-neutral-950 border border-neutral-900 p-5">
                    <h4 className="font-mono font-bold text-xs uppercase text-white mb-2">
                      01 / AI & SOFTWARE ENGINEERING
                    </h4>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Deep experience with TypeScript, React, Python, Vector DBs, LLM orchestration, and RAG pipelines.
                    </p>
                  </div>
                  <div className="bg-neutral-950 border border-neutral-900 p-5">
                    <h4 className="font-mono font-bold text-xs uppercase text-white mb-2">
                      02 / PRODUCT & UI DESIGN
                    </h4>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Atomic design systems, custom Figma configurations, motion design, and high-fidelity typography.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs font-mono text-neutral-400">
                  Submit resume to: <a href="mailto:careers@yelwin.com" className="text-white hover:underline">careers@yelwin.com</a>
                </p>
                <button
                  onClick={() => {
                    setShowCareersModal(false);
                    scrollToContact('Something Else');
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors text-center"
                >
                  SEND AN INQUIRY →
                </button>
              </div>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
}
