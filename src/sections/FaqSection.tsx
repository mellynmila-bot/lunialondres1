import React, { useState } from 'react';
import { ChevronDown, Calendar, HelpCircle, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { SectionDivider } from '../components/SectionDivider';

interface FaqSectionProps {
  lang: 'pt' | 'en';
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  lang,
  onOpenBooking
}) => {
  const [openIds, setOpenIds] = useState<number[]>([1, 2]);

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 bg-[#F6EFE4] text-[#3F2E22] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7030]">
            <HelpCircle className="w-3.5 h-3.5 text-[#C29F5B]" />
            <span>{lang === 'pt' ? 'DÚVIDAS FREQUENTES' : 'FREQUENTLY ASKED QUESTIONS'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A3727] font-normal">
            {lang === 'pt' ? 'Perguntas frequentes' : 'Frequently asked questions'}
          </h2>

          <p className="text-sm sm:text-base text-[#3F2E22]/80 leading-relaxed font-normal">
            {lang === 'pt'
              ? 'Tudo o que você precisa saber antes de agendar.'
              : 'Everything you need to know before booking.'}
          </p>
        </div>

        {/* 12 Accordion Items */}
        <div className="space-y-3.5">
          {siteData.faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-[#C29F5B]/40 bg-white/70 shadow-xs transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif text-base sm:text-lg text-[#4A3727] hover:text-[#8F7030] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#8F7030] opacity-75">
                      {String(faq.id).padStart(2, '0')}.
                    </span>
                    <span>{faq.question[lang]}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8F7030] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#C29F5B]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#3F2E22]/85 leading-relaxed border-t border-[#D9C7AC]/30 animate-in fade-in duration-200">
                    <div className="flex items-start gap-2 pt-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C29F5B] shrink-0 mt-0.5" />
                      <div>{faq.answer[lang]}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Final CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg bg-[#C29F5B] hover:bg-[#8F7030] text-[#F6EFE4] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>
              {lang === 'pt' ? 'Agendar minha avaliação' : 'Book my assessment'}
            </span>
          </button>
        </div>
      </div>

      <div className="mt-16">
        <SectionDivider lightMode={true} />
      </div>
    </section>
  );
};
