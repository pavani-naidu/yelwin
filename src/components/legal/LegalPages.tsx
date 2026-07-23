import React, { useState } from 'react';
import { Modal } from '../common/Modal';

interface LegalPagesProps {
  activePolicy: 'privacy' | 'terms' | 'cookie' | null;
  onClose: () => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ activePolicy, onClose }) => {
  const [currentTab, setCurrentTab] = useState<'privacy' | 'terms' | 'cookie'>(
    activePolicy || 'privacy'
  );

  React.useEffect(() => {
    if (activePolicy) setCurrentTab(activePolicy);
  }, [activePolicy]);

  if (!activePolicy) return null;

  return (
    <Modal isOpen={!!activePolicy} onClose={onClose} title={`LEGAL / ${currentTab.toUpperCase()}`}>
      <div className="space-y-6">
        {/* Navigation Tabs */}
        <div className="flex border-b border-neutral-800 pb-3 gap-4 font-mono text-xs">
          <button
            onClick={() => setCurrentTab('privacy')}
            className={`pb-1 transition-colors ${
              currentTab === 'privacy' ? 'text-white border-b-2 border-white font-bold' : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            PRIVACY POLICY
          </button>
          <button
            onClick={() => setCurrentTab('terms')}
            className={`pb-1 transition-colors ${
              currentTab === 'terms' ? 'text-white border-b-2 border-white font-bold' : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            TERMS & CONDITIONS
          </button>
          <button
            onClick={() => setCurrentTab('cookie')}
            className={`pb-1 transition-colors ${
              currentTab === 'cookie' ? 'text-white border-b-2 border-white font-bold' : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            COOKIE POLICY
          </button>
        </div>

        {/* Content Body */}
        <div className="text-neutral-300 font-sans text-sm leading-relaxed space-y-4">
          {currentTab === 'privacy' && (
            <>
              <h4 className="font-mono font-bold text-white uppercase text-base">
                YELWIN GLOBAL PRIVACY POLICY
              </h4>
              <p>Effective Date: July 22, 2026</p>
              <p>
                At YELWIN, we respect your privacy and are committed to protecting personal data collected through our digital platforms, project inquiry tools, and engineering interactions.
              </p>
              <h5 className="font-mono font-bold text-white uppercase text-xs pt-2">
                1. Data Collection & Processing
              </h5>
              <p>
                We collect information voluntarily provided when you submit a project enquiry (e.g., name, email, company, project details) to evaluate commercial engagements and provide custom technical proposals.
              </p>
              <h5 className="font-mono font-bold text-white uppercase text-xs pt-2">
                2. Use of Information
              </h5>
              <p>
                Collected data is used strictly for technical communication, project scoping, contract fulfillment, and internal analytics. We never sell or license client data to third parties.
              </p>
            </>
          )}

          {currentTab === 'terms' && (
            <>
              <h4 className="font-mono font-bold text-white uppercase text-base">
                YELWIN TERMS OF SERVICE & ENGAGEMENT
              </h4>
              <p>Effective Date: July 22, 2026</p>
              <p>
                By accessing or using the YELWIN website and services, you agree to comply with these terms of engagement and applicable international laws.
              </p>
              <h5 className="font-mono font-bold text-white uppercase text-xs pt-2">
                1. Intellectual Property
              </h5>
              <p>
                All visual design systems, custom 3D shaders, proprietary code components, and branding assets displayed on this site are the exclusive intellectual property of YELWIN.
              </p>
              <h5 className="font-mono font-bold text-white uppercase text-xs pt-2">
                2. Project Engagements
              </h5>
              <p>
                All custom software development, AI integration, and design engagements are governed by individual Master Services Agreements (MSA) executed between YELWIN and client organizations.
              </p>
            </>
          )}

          {currentTab === 'cookie' && (
            <>
              <h4 className="font-mono font-bold text-white uppercase text-base">
                YELWIN COOKIE POLICY
              </h4>
              <p>Effective Date: July 22, 2026</p>
              <p>
                YELWIN uses essential cookies to enable smooth site navigation, preserve active user session state, and log anonymous performance telemetry.
              </p>
              <h5 className="font-mono font-bold text-white uppercase text-xs pt-2">
                1. Essential Cookies
              </h5>
              <p>
                Required for core navigation, modal state persistence, and form security validations.
              </p>
              <h5 className="font-mono font-bold text-white uppercase text-xs pt-2">
                2. Analytics Cookies
              </h5>
              <p>
                Privacy-conscious event tracking to evaluate campaign performance and refine site performance.
              </p>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};
