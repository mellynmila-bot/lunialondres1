import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Sparkles, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';
import { SectionDivider } from '../components/SectionDivider';

interface ServicesSectionProps {
  lang: 'pt' | 'en';
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onOpenBooking
}) => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedService((prev) => (prev === id ? null : id));
  };

  return (
    <section id="servicos" className="py-24 bg-[#8B6B52] text-[#F6EFE4] relative overflow-hidden">
      {/* Decorative star sparkles on mocha background */}
      <div className="absolute top-12 left-10 text-[#E6CF9A]/30 animate-twinkle pointer-events-none">
        ✦
      </div>
      <div className="absolute bottom-16 right-12 text-[#E6CF9A]/30 animate-twinkle pointer-events-none">
        ✦
      </div>
      <div className="absolute top-1/2 right-8 text-[#E6CF9A]/20 animate-twinkle pointer-events-none">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E6CF9A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'PROCEDIMENTOS & SAÚDE DA PELE' : 'TREATMENTS & SKIN HEALTH'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6EFE4] text-balance font-normal">
            {lang === 'pt'
              ? 'Tratamentos pensados para valorizar, não transformar'
              : 'Treatments designed to enhance, not to change'}
          </h2>

          <p className="text-sm sm:text-base text-[#F6EFE4]/85 leading-relaxed font-normal">
            {lang === 'pt'
              ? 'Cada plano nasce de uma avaliação individual, para um resultado harmónico, seguro e com a sua cara.'
              : 'Every plan starts with an individual assessment, for a harmonious, safe result that looks like you.'}
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {siteData.services.map((service) => {
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col rounded-2xl border border-[#C29F5B]/50 bg-[#4A3727]/70 backdrop-blur-xs p-6 shadow-xl transition-all duration-300 hover:border-[#E6CF9A] hover:-translate-y-1"
              >
                {/* Square Photo Header inside card without rounded corners */}
                <div className="relative w-full aspect-square overflow-hidden border border-[#C29F5B]/60 bg-[#8B6B52] mb-5">
                  <img
                    src={service.image}
                    alt={service.name[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Tag */}
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#E6CF9A] mb-1.5">
                  {service.tag[lang]}
                </div>

                {/* Service Name */}
                <h3 className="text-xl sm:text-2xl font-serif text-[#F6EFE4] mb-3">
                  {service.name[lang]}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#F6EFE4]/85 leading-relaxed mb-4">
                  {service.shortDesc[lang]}
                </p>

                {/* Expandable Text for Premium Repair */}
                {service.fullDesc && (
                  <div className="mb-4">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E6CF9A] hover:text-white transition-colors cursor-pointer py-1"
                      aria-expanded={isExpanded}
                    >
                      <span>
                        {isExpanded
                          ? lang === 'pt'
                            ? 'Menos detalhes'
                            : 'Show less'
                          : lang === 'pt'
                          ? 'Ler mais sobre o protocolo'
                          : 'Read full protocol'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-4 rounded-xl bg-[#3F2E22]/90 border border-[#C29F5B]/30 text-xs text-[#F6EFE4]/90 whitespace-pre-line leading-relaxed animate-in fade-in duration-200">
                        {service.fullDesc[lang]}
                      </div>
                    )}
                  </div>
                )}

                {/* Card CTA Button */}
                <div className="mt-auto pt-4 border-t border-[#C29F5B]/30">
                  <button
                    onClick={onOpenBooking}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#C29F5B] hover:bg-[#E6CF9A] hover:text-[#4A3727] text-[#4A3727] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow cursor-pointer font-sans"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>
                      {lang === 'pt' ? 'Agendar avaliação' : 'Book assessment'}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Aesthetics Note under cards */}
        <div className="mt-12 p-4 rounded-xl border border-[#C29F5B]/30 bg-[#4A3727]/50 max-w-2xl mx-auto flex items-start gap-3 text-xs text-[#F6EFE4]/80">
          <ShieldCheck className="w-5 h-5 text-[#E6CF9A] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {lang === 'pt'
              ? 'Todos os tratamentos exigem avaliação inicial, consentimento informado e discussão de riscos e cuidados. Os resultados variam de pessoa para pessoa e dependem de resposta biológica individual.'
              : 'All treatments require an initial consultation, informed consent, and comprehensive discussion of risks and aftercare. Results vary from person to person depending on individual biology.'}
          </p>
        </div>

        {/* Section Final CTA Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg border-2 border-[#E6CF9A] hover:bg-[#E6CF9A] hover:text-[#4A3727] text-[#F6EFE4] text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>
              {lang === 'pt' ? 'Agendar minha avaliação' : 'Book my assessment'}
            </span>
          </button>
        </div>
      </div>

      <div className="mt-16">
        <SectionDivider lightMode={false} />
      </div>
    </section>
  );
};
