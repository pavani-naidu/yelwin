import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { EnquiryFormData } from '../../types';
import { ArrowUpRight, CheckCircle2, Loader2, Mail, Calendar, MessageSquare, AlertCircle } from 'lucide-react';
import { analytics } from '../../utils/analytics';

interface ProjectEnquirySectionProps {
  initialServiceSelection?: string;
}

export const ProjectEnquirySection: React.FC<ProjectEnquirySectionProps> = ({
  initialServiceSelection,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    servicesNeeded: initialServiceSelection ? [initialServiceSelection] : ['Web Application'],
    budgetRange: '$25K – $50K',
    timeline: '1 – 2 Months',
    projectDetails: '',
    honeypot: '',
  });

  React.useEffect(() => {
    if (initialServiceSelection) {
      setFormData((prev) => ({
        ...prev,
        servicesNeeded: [initialServiceSelection],
      }));
    }
  }, [initialServiceSelection]);

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const serviceOptions = [
    'Website',
    'Web Application',
    'SaaS Product',
    'Mobile App',
    'AI Solution',
    'AI Automation',
    'Brand Identity',
    'UI/UX Design',
    'Digital Marketing',
    'Something Else',
  ];

  const budgetOptions = ['< $25K', '$25K – $50K', '$50K – $100K', '$100K+'];
  const timelineOptions = ['Immediate', '1 – 2 Months', '3 – 6 Months', 'Flexible'];

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(srv);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== srv)
          : [...prev.servicesNeeded, srv],
      };
    });
  };

  const validateStep1 = () => {
    if (!formData.fullName.trim()) return 'Please enter your full name.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const validateStep2 = () => {
    if (formData.servicesNeeded.length === 0) {
      return 'Please select at least one capability or service.';
    }
    return '';
  };

  const handleNextStep = () => {
    setErrorMessage('');
    if (currentStep === 1) {
      const err = validateStep1();
      if (err) {
        setErrorMessage(err);
        return;
      }
    } else if (currentStep === 2) {
      const err = validateStep2();
      if (err) {
        setErrorMessage(err);
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 10) {
      setErrorMessage('Please provide a brief summary of your project vision (at least 10 characters).');
      return;
    }

    setIsLoading(true);
    analytics.track('Form Submit Attempt', 'Form', 'Project Enquiry');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        analytics.track('Form Submit Success', 'Form', 'Project Enquiry');
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ffffff', '#888888', '#cccccc'],
          });
        } catch {
          // ignore confetti fallback
        }
      } else {
        setErrorMessage(result.error || 'Submission failed. Please try again.');
      }
    } catch {
      setErrorMessage('Network error connecting to YELWIN API. Please check connection and retry.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-28 px-6 md:px-12 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
                START A PROJECT
              </div>
              <h2 className="font-mono font-black text-4xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                LET’S BUILD SOMETHING WORTH REMEMBERING.
              </h2>
              <p className="text-neutral-300 text-base font-sans leading-relaxed">
                Fill out the project enquiry matrix below or schedule a direct executive briefing with our technical directors.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="space-y-4 pt-6 border-t border-neutral-900 font-mono text-sm">
              <a
                href="mailto:hello@yelwin.com"
                className="flex items-center gap-3 p-4 bg-neutral-950 border border-neutral-800 hover:border-white transition-colors text-neutral-200 hover:text-white"
              >
                <Mail className="w-5 h-5 text-white" />
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-widest">DIRECT EMAIL</div>
                  <div>hello@yelwin.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/15550192837"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-neutral-950 border border-neutral-800 hover:border-white transition-colors text-neutral-200 hover:text-white"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-widest">WHATSAPP DIRECT</div>
                  <div>+1 (555) YELWIN-AI</div>
                </div>
              </a>

              <button
                onClick={() => {
                  analytics.track('Meeting Booking Click', 'CTA', 'Executive Briefing');
                  alert('Opening Executive Briefing Schedule Calendar...');
                }}
                className="w-full flex items-center gap-3 p-4 bg-neutral-950 border border-neutral-800 hover:border-white transition-colors text-neutral-200 hover:text-white text-left cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-white" />
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-widest">DIRECT CALENDAR</div>
                  <div>Schedule 15-Min Executive Call</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-8 md:p-12">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-white animate-bounce" />
                <h3 className="font-mono font-black text-3xl uppercase text-white">
                  INQUIRY RECEIVED.
                </h3>
                <p className="text-neutral-300 text-base font-sans max-w-md leading-relaxed">
                  Thank you for starting a project conversation with YELWIN. Our executive product group will review your details and respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setCurrentStep(1);
                  }}
                  className="px-6 py-3 bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors mt-4"
                >
                  SUBMIT ANOTHER INQUIRY →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step Indicator */}
                <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                  <span className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase">
                    STEP 0{currentStep} / 03
                  </span>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`w-8 h-1 transition-colors ${
                          s <= currentStep ? 'bg-white' : 'bg-neutral-800'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {errorMessage && (
                  <div className="p-4 bg-red-950/40 border border-red-800 text-red-200 text-xs font-mono flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot Spam Field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Step 1: Contact Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="font-mono font-bold text-lg uppercase text-white">
                      01 / CONTACT & IDENTITY
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full bg-black border border-neutral-800 p-3.5 text-sm font-sans text-white focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="s.jenkins@company.com"
                          className="w-full bg-black border border-neutral-800 p-3.5 text-sm font-sans text-white focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                          Company / Venture
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Labs"
                          className="w-full bg-black border border-neutral-800 p-3.5 text-sm font-sans text-white focus:outline-none focus:border-white transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-black border border-neutral-800 p-3.5 text-sm font-sans text-white focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-8 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors"
                      >
                        NEXT: WHAT DO YOU WANT TO BUILD? →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Service Selection & Budget */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="font-mono font-bold text-lg uppercase text-white">
                      02 / CAPABILITIES & SCOPE
                    </h3>

                    <div>
                      <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                        What do you want to build? (Select all that apply) *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {serviceOptions.map((srv) => {
                          const isSelected = formData.servicesNeeded.includes(srv);
                          return (
                            <button
                              type="button"
                              key={srv}
                              onClick={() => toggleService(srv)}
                              className={`p-3 text-left font-mono text-xs uppercase tracking-wider border transition-all ${
                                isSelected
                                  ? 'bg-white text-black border-white font-bold'
                                  : 'bg-black text-neutral-400 border-neutral-800 hover:border-neutral-600'
                              }`}
                            >
                              {srv}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-900">
                      <div>
                        <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                          Budget Range
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {budgetOptions.map((b) => (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setFormData({ ...formData, budgetRange: b })}
                              className={`p-2.5 text-center font-mono text-xs uppercase border ${
                                formData.budgetRange === b
                                  ? 'bg-white text-black font-bold border-white'
                                  : 'bg-black text-neutral-400 border-neutral-800'
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                          Timeline
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {timelineOptions.map((t) => (
                            <button
                              type="button"
                              key={t}
                              onClick={() => setFormData({ ...formData, timeline: t })}
                              className={`p-2.5 text-center font-mono text-xs uppercase border ${
                                formData.timeline === t
                                  ? 'bg-white text-black font-bold border-white'
                                  : 'bg-black text-neutral-400 border-neutral-800'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="text-xs font-mono text-neutral-400 uppercase hover:text-white"
                      >
                        ← BACK TO CONTACT
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-8 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors"
                      >
                        NEXT: PROJECT VISION →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Project Details & Final Submission */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="font-mono font-bold text-lg uppercase text-white">
                      03 / PROJECT DETAILS & SUBMISSION
                    </h3>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                        Tell us about your idea & vision *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder="Describe your target audience, core feature requirements, existing infrastructure, or primary goals..."
                        className="w-full bg-black border border-neutral-800 p-4 text-sm font-sans text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div className="p-4 bg-black border border-neutral-800 text-xs font-mono text-neutral-400 space-y-1">
                      <div>SUMMARY OF INQUIRY:</div>
                      <div className="text-white">
                        {formData.fullName} ({formData.email}) • {formData.servicesNeeded.join(', ')} • {formData.budgetRange}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="text-xs font-mono text-neutral-400 uppercase hover:text-white"
                      >
                        ← BACK TO SCOPE
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer disabled:opacity-50"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>PROCESSING...</span>
                          </>
                        ) : (
                          <>
                            <span>LET’S BUILD →</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
