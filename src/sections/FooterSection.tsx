import React from 'react';
import { Instagram, Calendar } from 'lucide-react';
import { siteData } from '../data/siteData';
import { GoldenCrescent } from '../components/GoldenCrescent';

interface FooterSectionProps {
  lang: 'pt' | 'en';
  onOpenBooking: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenCookieSettings: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  lang,
  onOpenBooking,
  onOpenPrivacy,
  onOpenTerms,
  onOpenCookieSettings
}) => {
  const activeLegalText =
    siteData.legal.activeOption === 'A'
      ? siteData.legal.optionA
      : siteData.legal.optionB;

  return (
    <footer className="bg-[#4A3727] text-[#F6EFE4]/70 border-t border-[#C29F5B]/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6 text-xs leading-relaxed">
        {/* Line 1: Wordmark Logo + Instagram + Discrete Booking CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <GoldenCrescent size={20} />
            <span className="font-serif text-lg tracking-[0.2em] text-[#F6EFE4]">
              LÚNIA AESTHETICS
            </span>
          </div>

          <span className="text-[#C29F5B] hidden sm:inline">·</span>

          <a
            href={siteData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#F6EFE4] hover:text-[#E6CF9A] transition-colors"
            aria-label="Instagram @lunia.aesthetics"
          >
            <Instagram className="w-4 h-4 text-[#C29F5B]" />
            <span>@{siteData.instagramHandle}</span>
          </a>

          <span className="text-[#C29F5B] hidden sm:inline">·</span>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 py-1 px-3 rounded-lg border border-[#C29F5B]/60 text-[#E6CF9A] hover:bg-[#C29F5B] hover:text-[#4A3727] transition-all cursor-pointer font-semibold uppercase tracking-wider text-[11px]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Agendar' : 'Book'}</span>
          </button>
        </div>

        {/* Line 2: Copyright */}
        <div className="text-[#F6EFE4]/80">
          © 2026 {siteData.brandName}.{' '}
          {lang === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
        </div>

        {/* Line 3: UK Legal Registration Notice (Strictly in English as required by PRD) */}
        <div className="text-[11px] text-[#D9C7AC]/75 max-w-lg">
          {activeLegalText}
        </div>

        {/* Line 4: Mandatory Contact */}
        <div className="text-[11px] text-[#F6EFE4]/80">
          Contact:{' '}
          <a
            href={`mailto:${siteData.contactEmail}`}
            className="text-[#E6CF9A] hover:underline"
          >
            {siteData.contactEmail}
          </a>
        </div>

        {/* Line 5: Modal Links separated by golden dots */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs pt-1">
          <button
            onClick={onOpenPrivacy}
            className="hover:text-[#E6CF9A] transition-colors underline cursor-pointer"
          >
            Privacy Policy
          </button>
          <span className="text-[#C29F5B]">✦</span>
          <button
            onClick={onOpenTerms}
            className="hover:text-[#E6CF9A] transition-colors underline cursor-pointer"
          >
            Terms of Use
          </button>
          <span className="text-[#C29F5B]">✦</span>
          <button
            onClick={onOpenCookieSettings}
            className="hover:text-[#E6CF9A] transition-colors underline cursor-pointer"
          >
            {lang === 'pt' ? 'Preferências de Cookies' : 'Cookie Settings'}
          </button>
        </div>
      </div>
    </footer>
  );
};
