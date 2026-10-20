import React from 'react';
import { Instagram, Star, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { SectionDivider } from '../components/SectionDivider';
import { CookiePlaceholder } from '../components/CookiePlaceholder';

interface InstagramVipSectionProps {
  lang: 'pt' | 'en';
  onOpenBooking: () => void;
  hasCookieConsent: boolean;
  onAcceptCookies: () => void;
}

export const InstagramVipSection: React.FC<InstagramVipSectionProps> = ({
  lang,
  onOpenBooking,
  hasCookieConsent,
  onAcceptCookies
}) => {
  return (
    <section id="instagram" className="py-24 bg-[#8B6B52] text-[#F6EFE4] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 right-16 text-[#E6CF9A]/30 animate-twinkle pointer-events-none">
        ✦
      </div>
      <div className="absolute bottom-12 left-12 text-[#E6CF9A]/20 animate-twinkle pointer-events-none">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E6CF9A]">
            <Instagram className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'COMUNIDADE & BASTIDORES' : 'COMMUNITY & BEHIND THE SCENES'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6EFE4] font-normal">
            {lang === 'pt'
              ? 'Acompanhe a Lúnia por trás da cena'
              : 'Follow Lúnia behind the scenes'}
          </h2>

          <p className="text-sm sm:text-base text-[#F6EFE4]/85 leading-relaxed font-normal">
            {lang === 'pt'
              ? 'Tratamentos, dicas de cuidado e novidades, tudo no Instagram.'
              : 'Treatments, care tips and news, all on Instagram.'}
          </p>

          {/* Profile Bar */}
          <div className="pt-2 flex items-center justify-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#C29F5B] via-[#E6CF9A] to-[#8F7030] shadow-md">
                <img
                  src={siteData.heroImage}
                  alt="Lúnia avatar"
                  className="w-full h-full rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="text-left">
              <div className="font-serif text-lg font-medium text-[#F6EFE4]">@{siteData.instagramHandle}</div>
              <div className="text-xs text-[#E6CF9A]">Bournemouth, UK</div>
            </div>
            <a
              href={siteData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 py-1.5 px-4 rounded-lg bg-[#F6EFE4] text-[#4A3727] hover:bg-[#E6CF9A] text-xs font-semibold uppercase tracking-wider transition-colors shadow"
            >
              <Instagram className="w-3.5 h-3.5 text-[#8F7030]" />
              <span>{lang === 'pt' ? 'Seguir' : 'Follow'}</span>
            </a>
          </div>
        </div>

        {/* 2-Column Content: Reel Embed + VIP Group Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Reel Embed */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[380px] rounded-2xl overflow-hidden border-2 border-[#C29F5B]/70 bg-[#4A3727] shadow-2xl p-2">
              {hasCookieConsent ? (
                <div className="relative w-full aspect-[9/16] max-h-[580px] rounded-xl overflow-hidden bg-black/40">
                  <iframe
                    src={siteData.reelEmbedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                    title={lang === 'pt' ? 'Instagram Reel da Lúnia Aesthetics' : 'Lúnia Aesthetics Instagram Reel'}
                    loading="lazy"
                  />
                </div>
              ) : (
                <CookiePlaceholder
                  onAccept={onAcceptCookies}
                  lang={lang}
                  title={lang === 'pt' ? 'Instagram Reel da Lúnia' : 'Lúnia’s Instagram Reel'}
                  minHeight="min-h-[480px]"
                />
              )}
            </div>
          </div>

          {/* VIP Group Card */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="relative rounded-2xl border-2 border-[#E6CF9A]/80 bg-gradient-to-br from-[#4A3727] to-[#3F2E22] p-8 shadow-2xl overflow-hidden">
              {/* Shimmer glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 bg-[#E6CF9A]/15 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#C29F5B]/30 border border-[#E6CF9A]/40 text-[#E6CF9A] text-xs font-semibold uppercase tracking-wider mb-4">
                <Star className="w-3.5 h-3.5 fill-[#E6CF9A]" />
                <span>{lang === 'pt' ? 'COMUNIDADE EXCLUSIVA' : 'EXCLUSIVE COMMUNITY'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#F6EFE4] mb-3">
                {lang === 'pt' ? 'Entre no Grupo VIP' : 'Join the VIP Group'}
              </h3>

              <p className="text-sm text-[#F6EFE4]/85 leading-relaxed mb-6 font-normal">
                {lang === 'pt'
                  ? 'Receba em primeira mão: oportunidades para modelos, condições especiais, novidades e abertura de agenda.'
                  : 'Get first access to model opportunities, special offers, news and new appointment openings.'}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-xs text-[#E6CF9A]">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{lang === 'pt' ? 'Vagas prioritárias para modelos de procedimentos' : 'Priority spots for treatment models'}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#E6CF9A]">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{lang === 'pt' ? 'Condições exclusivas de abertura de agenda' : 'Exclusive early agenda release'}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#E6CF9A]">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{lang === 'pt' ? 'Avisos e dicas científicas para a saúde da pele' : 'Direct scientific skin health tips'}</span>
                </div>
              </div>

              <a
                href={siteData.vipGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#C29F5B] hover:bg-[#E6CF9A] text-[#4A3727] text-xs font-semibold uppercase tracking-widest transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{lang === 'pt' ? 'Entrar no Grupo VIP no WhatsApp' : 'Join the WhatsApp VIP Group'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Bottom Button Pair */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-[#E6CF9A]/60 text-[#F6EFE4] hover:bg-white/10 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@{siteData.instagramHandle}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#F6EFE4] hover:bg-[#EADFCC] text-[#4A3727] text-xs font-semibold uppercase tracking-widest transition-colors shadow"
              >
                <Calendar className="w-4 h-4 text-[#8F7030]" />
                <span>{lang === 'pt' ? 'Agendar' : 'Book'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionDivider lightMode={false} />
      </div>
    </section>
  );
};
