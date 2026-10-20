import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { siteData } from '../data/siteData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#F6EFE4] text-[#3F2E22] rounded-2xl border border-[#C29F5B] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#D9C7AC]/60 bg-[#EADFCC]/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#EADFCC] text-[#8F7030] border border-[#C29F5B]/30">
              {type === 'privacy' ? (
                <Shield className="w-5 h-5" />
              ) : (
                <FileText className="w-5 h-5" />
              )}
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-xl sm:text-2xl font-serif text-[#4A3727]">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
              </h3>
              <p className="text-xs text-[#8F7030] font-sans">
                {type === 'privacy'
                  ? 'UK GDPR & Data Protection Act 2018 Compliance'
                  : 'Governing Law: England and Wales'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#4A3727] hover:bg-[#EADFCC] transition-colors cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm leading-relaxed text-[#3F2E22]/90">
          {type === 'privacy' ? (
            <>
              <section>
                <h4 className="font-semibold text-sm text-[#4A3727] mb-1">
                  1. Data Controller
                </h4>
                <p>
                  Lúnia Aesthetics ({siteData.practitionerName}) operates this website. For any inquiries regarding your personal data or privacy practices, you can contact us at{' '}
                  <a href={`mailto:${siteData.contactEmail}`} className="text-[#8F7030] underline">
                    {siteData.contactEmail}
                  </a>.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-sm text-[#4A3727] mb-1">
                  2. Personal Data We Collect
                </h4>
                <p>We may collect and process the following information when you contact or book with us:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Identity & Contact details: name, phone number, email address, Instagram handle.</li>
                  <li>Booking specifics: requested service, preferred date and time, expectations.</li>
                  <li>Special category (health) data: health background you voluntarily disclose (such as skin conditions, medications, allergies, pregnancy or breastfeeding) strictly necessary for assessing clinical treatment safety and suitability.</li>
                  <li>Clinical records and before/after photographs (strictly taken and retained only with your explicit written consent).</li>
                </ul>
              </section>

              <section>
                <h4 className="font-semibold text-sm text-[#4A3727] mb-1">
                  3. Lawful Basis for Processing
                </h4>
                <p>
                  We process your data to perform pre-contractual steps (booking your assessment), to provide aesthetic services safely, to comply with professional insurance and legal obligations, and on the basis of explicit consent for health data and photographic records.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-sm text-[#4A3727] mb-1">
                  4. Data Sharing & Third Parties
                </h4>
                <p>
                  We never sell, rent, or trade your personal data. We interact with Meta platforms (Instagram, WhatsApp) when you initiate booking messages, and embed Google Maps to provide location guidance.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-sm text-[#4A3727] mb-1">
                  5. Data Retention & Your Rights
                </h4>
                <p>
                  Clinical consultation records are retained in accordance with UK medical aesthetics indemnity and insurance guidelines (typically 7 years for adult clients), after which they are securely destroyed. Under UK GDPR, you have the right to request access, rectification, erasure, restriction of processing, and withdrawal of consent. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at{' '}
                  <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-[#8F7030] underline">
                    ico.org.uk
                  </a>.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h4 className="font-semibold text-sm text-[#4A3727] mb-1">
                  1. General Information & Non-Medical Advice
                </h4>
                <p>
                  The content on this website is provided for general informational and educational purposes only. It does not constitute medical advice or substitute for a professional face-to-face consultation. All treatments require a prior individual clinical assessment and informed consent.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-sm text-[#4A3727] mb-1">
                  2. Age Restriction (18+ Only)
                </h4>
                <p>
                  In accordance with UK legislation and clinical safety best practice, all aesthetic treatments and injectable procedures offered by Lúnia Aesthetics are strictly restricted to persons aged 18 and over. Valid government-issued photo identification may be requested upon consultation.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-sm text-[#4A3727] mb-1">
                  3. Results, Transparency & Honest Disclosure
                </h4>
                <p>
                  Aesthetic outcomes vary from person to person depending on biological characteristics, skin type, active hair follicle presence, lifestyle, and adherence to aftercare. No guaranteed or permanent results are implied. Clients must disclose their medical history, allergies, and medications truthfully before any procedure.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-sm text-[#4A3727] mb-1">
                  4. Pricing & Booking Policies
                </h4>
                <p>
                  All treatment fees are tailored and confirmed during your individual assessment. Appointment rescheduling or cancellations should be communicated with at least 48 hours notice.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-sm text-[#4A3727] mb-1">
                  5. Governing Law
                </h4>
                <p>
                  These Terms of Use and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of England and Wales.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#D9C7AC]/60 bg-[#EADFCC]/30 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-5 rounded-lg bg-[#C29F5B] hover:bg-[#8F7030] text-[#F6EFE4] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
