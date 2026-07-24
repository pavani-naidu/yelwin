import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { analytics } from '../../utils/analytics';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('yelwin_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('yelwin_cookie_consent', 'accepted');
    analytics.track('Cookie Consent', 'Legal', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('yelwin_cookie_consent', 'declined');
    analytics.track('Cookie Consent', 'Legal', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50 bg-black border border-neutral-800 p-6 shadow-2xl text-white font-sans text-xs"
        >
          <div className="flex flex-col gap-3">
            <div className="font-mono font-bold tracking-widest uppercase text-white">
              PRIVACY & COOKIES
            </div>
            <p className="text-neutral-400 leading-relaxed">
              YELWIN uses essential and privacy-conscious analytics cookies to optimize performance and refine digital experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-white text-black font-mono font-bold uppercase tracking-wider text-[11px] hover:bg-neutral-200 transition-colors"
              >
                ACCEPT ALL
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 border border-neutral-700 text-neutral-300 font-mono font-bold uppercase tracking-wider text-[11px] hover:border-white hover:text-white transition-colors"
              >
                ESSENTIAL ONLY
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
