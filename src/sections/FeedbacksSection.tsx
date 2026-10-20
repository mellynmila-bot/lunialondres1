import React from 'react';
import { Star, Calendar, MessageSquareQuote, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { SectionDivider } from '../components/SectionDivider';

interface FeedbacksSectionProps {
  lang: 'pt' | 'en';
  onOpenBooking: () => void;
}

export const FeedbacksSection: React.FC<FeedbacksSectionProps> = ({
  lang,
  onOpenBooking
}) => {
  return (
    <section id="avaliacoes" className="py-24 bg-[#F6EFE4] text-[#3F2E22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7030]">
            <Sparkles className="w-3.5 h-3.5 text-[#C29F5B]" />
            <span>{lang === 'pt' ? 'EXPERIÊNCIAS REAIS' : 'CLIENT EXPERIENCES'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A3727] font-normal">
            {lang === 'pt'
              ? 'Quem vive, sente a diferença'
              : 'Those who experience it feel the difference'}
          </h2>

          <p className="text-sm sm:text-base text-[#3F2E22]/80 leading-relaxed font-normal">
            {lang === 'pt'
              ? 'Palavras de quem confiou a Lúnia o seu cuidado.'
              : 'Words from those who trusted Lúnia with their care.'}
          </p>
        </div>

        {/* 6 Feedback Cards Grid 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.feedbacks.map((fb) => (
            <div
              key={fb.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[#C29F5B]/40 bg-white/70 backdrop-blur-xs shadow-sm hover:shadow-md hover:border-[#C29F5B] transition-all duration-300"
            >
              <div>
                {/* 5 Gold Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(fb.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C29F5B] text-[#C29F5B]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-5 h-5 text-[#C29F5B]/60" />
                </div>

                {/* Quote Text */}
                <p className="font-serif italic text-sm sm:text-base text-[#4A3727] leading-relaxed mb-6">
                  {fb.quote[lang]}
                </p>
              </div>

              {/* Author & Treatment */}
              <div className="pt-4 border-t border-[#D9C7AC]/40 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-xs text-[#4A3727]">
                    {fb.name}
                  </div>
                  <div className="text-[11px] text-[#8F7030]">
                    {fb.treatment[lang]}
                  </div>
                </div>
                <div className="text-[11px] text-[#D9C7AC] font-mono uppercase">
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Disclaimer */}
        <p className="text-[11px] text-center text-[#3F2E22]/60 mt-8 italic">
          {lang === 'pt'
            ? 'Depoimentos autorizados por clientes. Resultados individuais variam conforme a resposta biológica de cada organismo.'
            : 'Authorised client testimonials. Individual results vary based on personal biological characteristics.'}
        </p>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg bg-[#C29F5B] hover:bg-[#8F7030] text-[#F6EFE4] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>
              {lang === 'pt' ? 'Quero viver essa experiência' : 'I want this experience'}
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
