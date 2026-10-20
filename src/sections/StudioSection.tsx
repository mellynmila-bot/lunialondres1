import React from 'react';
import {
  ShieldCheck,
  Sparkles,
  Lock,
  Heart,
  MapPin,
  FileCheck2,
  Calendar,
  Navigation,
  CheckCircle2
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { SectionDivider } from '../components/SectionDivider';
import { CookiePlaceholder } from '../components/CookiePlaceholder';

interface StudioSectionProps {
  lang: 'pt' | 'en';
  onOpenBooking: () => void;
  hasCookieConsent: boolean;
  onAcceptCookies: () => void;
}

export const StudioSection: React.FC<StudioSectionProps> = ({
  lang,
  onOpenBooking,
  hasCookieConsent,
  onAcceptCookies
}) => {
  const icons = [
    <ShieldCheck className="w-5 h-5" key="1" />,
    <Sparkles className="w-5 h-5" key="2" />,
    <Lock className="w-5 h-5" key="3" />,
    <Heart className="w-5 h-5" key="4" />,
    <MapPin className="w-5 h-5" key="5" />,
    <FileCheck2 className="w-5 h-5" key="6" />
  ];

  const hasTransparency = Boolean(
    siteData.legal.qualifications ||
    siteData.legal.insurance ||
    siteData.legal.professionalRegistry
  );

  return (
    <section id="studio" className="py-24 bg-[#EADFCC] text-[#3F2E22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7030]">
            <MapPin className="w-3.5 h-3.5 text-[#C29F5B]" />
            <span>{lang === 'pt' ? 'NOSSO ESPAÇO & ATENDIMENTO' : 'OUR STUDIO & CLINIC'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A3727] font-normal leading-tight">
            {lang === 'pt'
              ? 'Um espaço criado para você se sentir segura e acolhida'
              : 'A space created for you to feel safe and welcome'}
          </h2>

          <p className="text-sm sm:text-base text-[#3F2E22]/85 leading-relaxed font-normal">
            {lang === 'pt'
              ? 'Higiene, tecnologia, privacidade e conforto, no coração de Bournemouth.'
              : 'Hygiene, technology, privacy and comfort, in the heart of Bournemouth.'}
          </p>
        </div>

        {/* 6 Feature Cards (Grid 3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {siteData.studioCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-[#C29F5B]/40 bg-[#F6EFE4]/80 backdrop-blur-xs shadow-xs hover:shadow-md hover:border-[#C29F5B] transition-all duration-300"
            >
              <div className="p-2.5 w-fit rounded-xl bg-[#EADFCC] text-[#8F7030] border border-[#C29F5B]/30 mb-4">
                {icons[idx]}
              </div>
              <h3 className="font-serif text-lg text-[#4A3727] mb-2 font-medium">
                {card.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-[#3F2E22]/80 leading-relaxed font-normal">
                {card.desc[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Space Reel & Location Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Studio Video Reel Embed */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[380px] rounded-2xl overflow-hidden border-2 border-[#C29F5B] bg-[#4A3727] shadow-xl p-2">
              {hasCookieConsent ? (
                <div className="relative w-full aspect-[9/16] max-h-[580px] rounded-xl overflow-hidden bg-black/30">
                  <iframe
                    src={siteData.spaceReelEmbedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                    title={lang === 'pt' ? 'Reel do Studio da Lúnia Aesthetics' : 'Lúnia Aesthetics Studio Space Reel'}
                    loading="lazy"
                  />
                </div>
              ) : (
                <CookiePlaceholder
                  onAccept={onAcceptCookies}
                  lang={lang}
                  title={lang === 'pt' ? 'Tour pelo Studio da Lúnia' : 'Tour Lúnia’s Studio'}
                  minHeight="min-h-[460px]"
                />
              )}
            </div>
            <div className="text-xs text-[#8F7030] mt-3 font-medium text-center">
              {lang === 'pt' ? '✦ Conheça nosso ambiente clínico' : '✦ Tour our clinical sanctuary'}
            </div>
          </div>

          {/* Google Maps & Address Information */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="rounded-2xl overflow-hidden border-2 border-[#C29F5B] bg-white shadow-xl">
              {hasCookieConsent ? (
                <div className="w-full h-[380px] sm:h-[420px] bg-[#EADFCC]">
                  <iframe
                    src={siteData.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={lang === 'pt' ? 'Localização em Bournemouth, Reino Unido' : 'Location in Bournemouth, United Kingdom'}
                  />
                </div>
              ) : (
                <CookiePlaceholder
                  onAccept={onAcceptCookies}
                  lang={lang}
                  title={lang === 'pt' ? 'Mapa Interativo de Bournemouth' : 'Bournemouth Interactive Map'}
                  minHeight="h-[380px] sm:h-[420px]"
                />
              )}
            </div>

            {/* Address Banner / Notice */}
            <div className="p-4 rounded-xl border border-[#C29F5B]/40 bg-[#F6EFE4]/90 text-xs text-[#3F2E22]">
              {siteData.showAddress ? (
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <span className="font-semibold text-[#4A3727] block">Studio Address:</span>
                    <span>{siteData.studioAddress}</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteData.studioAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#C29F5B] text-white font-semibold uppercase tracking-wider"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{lang === 'pt' ? 'Como chegar' : 'Get directions'}</span>
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-2.5 text-[#4A3727]">
                  <MapPin className="w-4 h-4 text-[#8F7030] shrink-0" />
                  <p className="font-medium">
                    {lang === 'pt'
                      ? 'Localizado em Bournemouth, Reino Unido. O endereço exato é enviado após a confirmação do agendamento para resguardar a privacidade e segurança do atendimento.'
                      : 'Located in Bournemouth, United Kingdom. The exact address is provided upon booking confirmation to ensure privacy and clinical security.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Optional Transparency Block */}
        {hasTransparency && (
          <div className="p-5 rounded-2xl border border-[#C29F5B]/40 bg-[#F6EFE4]/70 max-w-3xl mx-auto mb-10 text-xs text-[#3F2E22]">
            <div className="text-center font-serif text-sm font-semibold text-[#4A3727] mb-3">
              {lang === 'pt' ? 'Transparência Clínica & Credenciais' : 'Clinical Transparency & Credentials'}
            </div>
            <div className="flex flex-wrap items-center justify-around gap-4 text-center">
              {siteData.legal.qualifications && (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8F7030]" />
                  <span>
                    <strong>{lang === 'pt' ? 'Qualificação: ' : 'Qualification: '}</strong>
                    {siteData.legal.qualifications}
                  </span>
                </div>
              )}
              {siteData.legal.insurance && (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8F7030]" />
                  <span>
                    <strong>{lang === 'pt' ? 'Seguro: ' : 'Insurance: '}</strong>
                    {siteData.legal.insurance}
                  </span>
                </div>
              )}
              {siteData.legal.professionalRegistry && (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8F7030]" />
                  <span>
                    <strong>{lang === 'pt' ? 'Registro: ' : 'Registry: '}</strong>
                    {siteData.legal.professionalRegistry}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg bg-[#C29F5B] hover:bg-[#8F7030] text-[#F6EFE4] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>
              {lang === 'pt' ? 'Agendar minha visita' : 'Book my visit'}
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
