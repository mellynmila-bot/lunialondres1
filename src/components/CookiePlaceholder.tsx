import React from 'react';
import { ShieldAlert, Cookie } from 'lucide-react';

interface CookiePlaceholderProps {
  onAccept: () => void;
  lang: 'pt' | 'en';
  title?: string;
  minHeight?: string;
}

export const CookiePlaceholder: React.FC<CookiePlaceholderProps> = ({
  onAccept,
  lang,
  title,
  minHeight = "min-h-[360px]"
}) => {
  return (
    <div
      className={`w-full ${minHeight} flex flex-col items-center justify-center p-6 rounded-2xl border border-[#C29F5B]/40 bg-[#EADFCC]/30 text-center text-[#4A3727]`}
    >
      <div className="p-3 rounded-full bg-[#EADFCC] text-[#8F7030] border border-[#C29F5B]/30 mb-3 shadow-inner">
        <Cookie className="w-6 h-6" />
      </div>

      <h5 className="font-serif text-base sm:text-lg text-[#4A3727] mb-1">
        {title || (lang === 'pt' ? 'Conteúdo externo integrado' : 'Third-party media embed')}
      </h5>

      <p className="text-xs text-[#3F2E22]/80 max-w-sm mb-4 leading-relaxed">
        {lang === 'pt'
          ? 'Aceite os cookies de terceiros para reproduzir este conteúdo diretamente na página.'
          : 'Please accept third-party cookies to view this interactive media directly on this page.'}
      </p>

      <button
        onClick={onAccept}
        className="inline-flex items-center gap-2 py-2 px-5 rounded-lg bg-[#C29F5B] hover:bg-[#8F7030] text-[#F6EFE4] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
      >
        <ShieldAlert className="w-4 h-4" />
        <span>{lang === 'pt' ? 'Aceitar e ver' : 'Accept & view'}</span>
      </button>
    </div>
  );
};
