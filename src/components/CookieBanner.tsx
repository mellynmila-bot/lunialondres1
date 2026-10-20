import React from 'react';
import { Cookie, ShieldCheck } from 'lucide-react';

interface CookieBannerProps {
  show: boolean;
  onAccept: () => void;
  onDecline: () => void;
  lang: 'pt' | 'en';
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  show,
  onAccept,
  onDecline,
  lang
}) => {
  if (!show) return null;

  return (
    <div
      role="region"
      aria-label={lang === 'pt' ? 'Configurações de privacidade e cookies' : 'Cookie privacy settings'}
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 p-4 sm:p-5 rounded-2xl bg-[#F6EFE4]/95 backdrop-blur-md border border-[#C29F5B] shadow-2xl text-[#3F2E22] animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#EADFCC] text-[#8F7030] shrink-0 mt-0.5 border border-[#C29F5B]/30">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h4 className="text-sm font-semibold text-[#4A3727] flex items-center gap-1.5">
            <span>{lang === 'pt' ? 'Privacidade e Cookies' : 'Privacy & Cookies'}</span>
            <ShieldCheck className="w-4 h-4 text-[#C29F5B]" />
          </h4>
          <p className="text-xs text-[#3F2E22]/80 leading-relaxed">
            {lang === 'pt'
              ? 'Utilizamos apenas cookies e integrações essenciais (como Instagram Reels e Google Maps) para proporcionar a melhor experiência de navegação.'
              : 'We only use necessary cookies and external media integrations (such as Instagram Reels and Google Maps) to offer the best viewing experience.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={onAccept}
              className="py-1.5 px-3.5 rounded-lg bg-[#C29F5B] hover:bg-[#8F7030] text-[#F6EFE4] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              {lang === 'pt' ? 'Aceitar todos' : 'Accept all'}
            </button>
            <button
              onClick={onDecline}
              className="py-1.5 px-3 rounded-lg border border-[#D9C7AC] text-[#4A3727] hover:bg-[#EADFCC] text-xs font-medium transition-colors cursor-pointer"
            >
              {lang === 'pt' ? 'Apenas essenciais' : 'Decline non-essential'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
