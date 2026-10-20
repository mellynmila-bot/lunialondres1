import React from 'react';
import { Calendar, Award, GraduationCap, Sparkles, HeartHandshake } from 'lucide-react';
import { siteData } from '../data/siteData';
import { SectionDivider } from '../components/SectionDivider';

interface AboutSectionProps {
  lang: 'pt' | 'en';
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onOpenBooking
}) => {
  return (
    <section id="sobre" className="py-24 bg-[#EADFCC] text-[#3F2E22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Arch Portrait of Lúnia */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Offset Gold Border Frame */}
              <div
                className="absolute inset-0 arch-frame border-2 border-[#C29F5B]/50 -translate-x-3 -translate-y-3 pointer-events-none -z-0"
                aria-hidden="true"
              />

              {/* Main Arch Frame */}
              <div className="relative arch-frame overflow-hidden border-2 border-[#C29F5B] bg-[#D9C7AC] shadow-2xl aspect-[3/4] sm:aspect-[4/5] z-10">
                <img
                  src={siteData.aboutImage}
                  alt={lang === 'pt' ? 'Lúnia - Biomédica em formação e Aesthetic Practitioner' : 'Lúnia - Aesthetic Practitioner & BSc Biomedical Science student'}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer-sweep pointer-events-none"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#4A3727]/70 via-[#4A3727]/20 to-transparent flex items-end p-5">
                  <div className="text-[#F6EFE4]">
                    <span className="text-xs uppercase tracking-widest text-[#E6CF9A] font-semibold">
                      Bournemouth, Dorset 🇬🇧
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7030] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C29F5B]" />
                <span>{lang === 'pt' ? 'SOBRE A PROFISSIONAL' : 'ABOUT THE PRACTITIONER'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A3727] font-normal leading-tight">
                {lang === 'pt' ? 'Conheça a Lúnia' : 'Meet Lúnia'}
              </h2>

              <p className="text-base text-[#8F7030] font-sans font-medium mt-1">
                {lang === 'pt'
                  ? 'Onde a ciência encontra o cuidado e a beleza natural.'
                  : 'Where science meets care and natural beauty.'}
              </p>
            </div>

            {/* Quote with gold quotation marks */}
            <div className="relative p-5 rounded-2xl border-l-2 border-[#C29F5B] bg-[#F6EFE4]/80 shadow-xs">
              <span className="font-serif text-3xl text-[#C29F5B] leading-none select-none">“</span>
              <p className="font-serif italic text-base sm:text-lg text-[#4A3727] leading-relaxed -mt-2">
                {lang === 'pt'
                  ? 'Beleza natural não é fazer menos, é fazer com critério. Quero que você se olhe no espelho e se reconheça, só que mais confiante.'
                  : 'Natural beauty isn’t doing less, it’s doing it with care. I want you to look in the mirror and recognise yourself, just more confident.'}
              </p>
              <div className="text-right text-xs font-semibold uppercase tracking-wider text-[#8F7030] mt-2">
                — Lúnia
              </div>
            </div>

            {/* Paragraph 1: Emotional / Autoestima */}
            <p className="text-sm sm:text-base text-[#3F2E22]/90 leading-relaxed font-normal">
              {lang === 'pt'
                ? 'Para a Lúnia, a beleza começa na forma como você se sente. Cada pessoa chega com uma história, uma insegurança ou um desejo, e o atendimento é um espaço de escuta, acolhimento e respeito pelos seus traços. O objetivo não é mudar quem você é, e sim realçar o que já é lindo e devolver a confiança no seu próprio olhar.'
                : 'For Lúnia, beauty begins in how you feel in your own skin. Every client arrives with a personal story, a desire, or an insecurity, and consultations are a safe sanctuary of attentive listening, warmth, and respect for your natural features. The goal is never to change who you are, but to enhance your existing beauty and restore confidence in your gaze.'}
            </p>

            {/* Paragraph 2: Technical / Biomedicina */}
            <p className="text-sm sm:text-base text-[#3F2E22]/90 leading-relaxed font-normal">
              {lang === 'pt'
                ? 'Com mais de 3 anos de experiência em estética avançada e tratamentos para a pele e sobrancelhas, a Lúnia une técnica e conhecimento científico, reforçado pela sua formação em Biomedicina (BSc, em curso). Cada plano começa com uma avaliação individual, com foco em saúde da pele, segurança, naturalidade e protocolos rigorosos de higiene.'
                : 'With over 3 years of clinical practice in advanced aesthetics, skin treatments, and brow enhancement, Lúnia unites precise technical artistry with scientific rigor, bolstered by her undergraduate degree in Biomedical Science (BSc, ongoing). Every treatment plan begins with an individual clinical assessment focused on skin health, safety, natural results, and uncompromising hospital-grade hygiene standards.'}
            </p>

            {/* 4 Animated Credentials / Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/70 border border-[#C29F5B]/40 text-center">
                <Award className="w-5 h-5 text-[#8F7030] mx-auto mb-1.5" />
                <div className="text-xs font-bold text-[#4A3727]">+3 Anos</div>
                <div className="text-[10px] text-[#3F2E22]/70 leading-tight">
                  {lang === 'pt' ? 'de experiência' : 'experience'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/70 border border-[#C29F5B]/40 text-center">
                <GraduationCap className="w-5 h-5 text-[#8F7030] mx-auto mb-1.5" />
                <div className="text-xs font-bold text-[#4A3727]">BSc Biomed</div>
                <div className="text-[10px] text-[#3F2E22]/70 leading-tight">
                  {lang === 'pt' ? 'em curso (Reino Unido)' : 'in progress (UK)'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/70 border border-[#C29F5B]/40 text-center">
                <Sparkles className="w-5 h-5 text-[#8F7030] mx-auto mb-1.5" />
                <div className="text-xs font-bold text-[#4A3727]">Pele & Brows</div>
                <div className="text-[10px] text-[#3F2E22]/70 leading-tight">
                  {lang === 'pt' ? 'foco em saúde' : 'follicle health'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/70 border border-[#C29F5B]/40 text-center">
                <HeartHandshake className="w-5 h-5 text-[#8F7030] mx-auto mb-1.5" />
                <div className="text-xs font-bold text-[#4A3727]">100% Natural</div>
                <div className="text-[10px] text-[#3F2E22]/70 leading-tight">
                  {lang === 'pt' ? 'harmonia e critério' : 'harmonious balance'}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg bg-[#C29F5B] hover:bg-[#8F7030] text-[#F6EFE4] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>
                  {lang === 'pt' ? 'Agendar com a Lúnia' : 'Book with Lúnia'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionDivider lightMode={true} />
      </div>
    </section>
  );
};
