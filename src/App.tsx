import { useEffect, useState } from 'react';
import { LogoReveal } from './components/common/LogoReveal';
import { Navbar } from './components/common/Navbar';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { Footer } from './components/common/Footer';
import { CookieConsent } from './components/common/CookieConsent';
import { HeroSection } from './components/sections/HeroSection';
import { TrustSection } from './components/sections/TrustSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WorkSection } from './components/sections/WorkSection';
import { WhyYelwinSection } from './components/sections/WhyYelwinSection';
import { HowWeWorkSection } from './components/sections/HowWeWorkSection';
import { AiSection } from './components/sections/AiSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { MetricsSection } from './components/sections/MetricsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { AboutSection } from './components/sections/AboutSection';
import { InsightsSection } from './components/sections/InsightsSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { ProjectEnquirySection } from './components/sections/ProjectEnquirySection';
import { LegalPages } from './components/legal/LegalPages';
import { updateSEOMetadata } from './utils/seo';
import { analytics } from './utils/analytics';

export default function App() {
  const [showLogoReveal, setShowLogoReveal] = useState<boolean>(true);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'cookie' | null>(null);
  const [selectedServiceForProject, setSelectedServiceForProject] = useState<string>('Web Application');

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

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForProject(serviceTitle);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          <Navbar onStartProjectClick={() => scrollToContact()} />

          {/* Main Sections */}
          <main>
            {/* 01: Hero */}
            <HeroSection
              onStartProjectClick={() => scrollToContact()}
              onExploreWorkClick={() => scrollToWork()}
            />

            {/* 02: Trust / Positioning */}
            <TrustSection />

            {/* 03: What We Do / Services */}
            <ServicesSection
              onStartProjectForService={(title) => scrollToContact(title)}
            />

            {/* 04: Selected Work / Case Studies */}
            <WorkSection />

            {/* 05: Why YELWIN */}
            <WhyYelwinSection />

            {/* 06: How We Work */}
            <HowWeWorkSection />

            {/* 07: AI Section */}
            <AiSection
              onExploreAiClick={() => scrollToContact('AI Solution')}
            />

            {/* 08: Technology Stack */}
            <TechStackSection />

            {/* 09: Results & Impact */}
            <MetricsSection />

            {/* 10: Testimonials */}
            <TestimonialsSection />

            {/* 11: About YELWIN */}
            <AboutSection />

            {/* 12: Insights / Blog */}
            <InsightsSection />

            {/* 13: Final CTA */}
            <FinalCtaSection
              onStartProjectClick={() => scrollToContact()}
              onTalkToUsClick={() => scrollToContact()}
            />

            {/* 14: Project Enquiry Form */}
            <ProjectEnquirySection
              initialServiceSelection={selectedServiceForProject}
            />
          </main>

          {/* Footer */}
          <Footer
            onOpenLegal={(policy) => setActiveLegalModal(policy)}
            onNavigate={(id) => scrollToSection(id)}
          />

          {/* Cookie Consent Banner */}
          <CookieConsent />

          {/* Legal Policy Modals */}
          <LegalPages
            activePolicy={activeLegalModal}
            onClose={() => setActiveLegalModal(null)}
          />
        </>
      )}
    </div>
  );
}
