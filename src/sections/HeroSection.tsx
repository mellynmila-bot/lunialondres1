import React from 'react';
import { MapPin, Dna, Leaf, Calendar, ArrowDown, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

interface HeroSectionProps {
  lang: 'pt' | 'en';
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenBooking
}) => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('servicos');
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F6EFE4]">
      {/* Background Soft Gold Ambient Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#E6CF9A]/20 via-[#C29F5B]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-16 right-10 w-32 h-32 bg-[#E6CF9A]/25 rounded-full blur-2xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Photo of Lúnia - Mobile: order-1 (first), Desktop: order-2 (right side) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto">
              {/* Offset Gold Border Frame */}
              <div
                className="absolute inset-0 arch-frame border-2 border-[#C29F5B]/40 translate-x-2.5 translate-y-2.5 sm:translate-x-3 sm:translate-y-3 pointer-events-none -z-0"
                aria-hidden="true"
              />

              {/* Main Arch Frame Container without blinking glows */}
              <div className="relative arch-frame overflow-hidden border-2 border-[#C29F5B] bg-[#EADFCC] shadow-xl z-10 aspect-[3/4] sm:aspect-[4/5]">
                <img
                  src={siteData.heroImage}
                  alt={lang === 'pt' ? 'Lúnia - Aesthetic Practitioner em Bournemouth' : 'Lúnia - Aesthetic Practitioner in Bournemouth'}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                />

                {/* Bottom subtle gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#4A3727]/75 via-[#4A3727]/25 to-transparent flex items-end p-4 sm:p-5">
                  <div className="text-[#F6EFE4]">
                    <div className="font-serif text-base sm:text-lg tracking-wide text-[#E6CF9A]">Lúnia</div>
                    <div className="text-[10px] sm:text-xs text-[#F6EFE4]/90 tracking-wider uppercase font-sans">
                      Aesthetic Practitioner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column - Mobile: order-2 (after photo), Desktop: order-1 (left side) */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start space-y-5 sm:space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8F7030]">
              <Sparkles className="w-3.5 h-3.5 text-[#C29F5B]" />
              <span>ADVANCED AESTHETICS • BOURNEMOUTH</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#4A3727] leading-[1.18] sm:leading-[1.15] text-balance font-normal">
              {lang === 'pt' ? (
                <>
                  Realce o que já é seu, com <span className="text-[#8F7030] italic">ciência</span>, delicadeza e <span className="text-[#8F7030] italic">naturalidade</span>
                </>
              ) : (
                <>
                  Enhance what is already yours, with <span className="text-[#8F7030] italic">science</span>, gentleness and <span className="text-[#8F7030] italic">natural results</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#3F2E22]/85 max-w-xl font-normal leading-relaxed">
              {lang === 'pt'
                ? 'Estética avançada, saúde da pele e sobrancelhas em Bournemouth. Avaliação personalizada, resultados naturais e cuidado em cada detalhe.'
                : 'Advanced aesthetics, skin health and brows in Bournemouth. Personalised assessment, natural results and care in every detail.'}
            </p>

            {/* Chips / Unboxed Clean Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#8F7030]">
              <span className="py-1 px-3 rounded-full bg-[#EADFCC]/80 border border-[#C29F5B]/30">
                Skin Health
              </span>
              <span aria-hidden="true" className="text-[#C29F5B]">✦</span>
              <span className="py-1 px-3 rounded-full bg-[#EADFCC]/80 border border-[#C29F5B]/30">
                Brows
              </span>
              <span aria-hidden="true" className="text-[#C29F5B]">✦</span>
              <span className="py-1 px-3 rounded-full bg-[#EADFCC]/80 border border-[#C29F5B]/30">
                Natural Results
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="relative overflow-hidden w-full sm:w-auto py-3.5 px-8 rounded-lg bg-[#C29F5B] hover:bg-[#8F7030] text-[#F6EFE4] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg group cursor-pointer text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {lang === 'pt' ? 'Agendar minha avaliação' : 'Book my assessment'}
                  </span>
                </span>
              </button>

              <a
                href="#servicos"
                onClick={scrollToServices}
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 rounded-lg border border-[#C29F5B] text-[#4A3727] hover:bg-[#EADFCC] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                <ArrowDown className="w-4 h-4 text-[#8F7030]" />
                <span>
                  {lang === 'pt' ? 'Ver tratamentos' : 'View treatments'}
                </span>
              </a>
            </div>

            {/* 3 Trust Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 sm:pt-6">
              <div className="p-3 sm:p-3.5 rounded-xl border border-[#C29F5B]/30 bg-white/60 backdrop-blur-xs flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#EADFCC] text-[#8F7030] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-[#4A3727]">Bournemouth, UK</div>
                  <div className="text-[#3F2E22]/70 text-[11px]">{lang === 'pt' ? 'Reino Unido' : 'United Kingdom'}</div>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl border border-[#C29F5B]/30 bg-white/60 backdrop-blur-xs flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#EADFCC] text-[#8F7030] shrink-0">
                  <Dna className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-[#4A3727]">{lang === 'pt' ? 'Abordagem científica' : 'Scientific approach'}</div>
                  <div className="text-[#3F2E22]/70 text-[11px]">BSc Biomedicina</div>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl border border-[#C29F5B]/30 bg-white/60 backdrop-blur-xs flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#EADFCC] text-[#8F7030] shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-[#4A3727]">{lang === 'pt' ? 'Resultados naturais' : 'Natural results'}</div>
                  <div className="text-[#3F2E22]/70 text-[11px]">{lang === 'pt' ? 'Após avaliação clínica' : 'Bespoke assessment'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
