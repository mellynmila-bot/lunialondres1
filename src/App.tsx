import React, { useState, useEffect } from 'react';
import { siteData } from './data/siteData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { GallerySection } from './sections/GallerySection';
import { AboutSection } from './sections/AboutSection';
import { InstagramVipSection } from './sections/InstagramVipSection';
import { FeedbacksSection } from './sections/FeedbacksSection';
import { StudioSection } from './sections/StudioSection';
import { BookingSection } from './sections/BookingSection';
import { FaqSection } from './sections/FaqSection';
import { FooterSection } from './sections/FooterSection';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './components/LegalModals';
import { CookieBanner } from './components/CookieBanner';
import { FloatingBookingButton } from './components/FloatingBookingButton';

export function App() {
  // 1. Language state with localStorage try/catch
  const [lang, setLang] = useState<'pt' | 'en'>(() => {
    try {
      const saved = localStorage.getItem('lunia_lang');
      return saved === 'en' ? 'en' : 'pt';
    } catch {
      return 'pt';
    }
  });

  // 2. Cookie consent state ('granted' | 'declined' | null)
  const [cookieConsent, setCookieConsent] = useState<'granted' | 'declined' | null>(() => {
    try {
      const saved = localStorage.getItem('lunia_cookie_consent');
      if (saved === 'granted' || saved === 'declined') return saved;
      return null;
    } catch {
      return null;
    }
  });

  // Show banner if no consent choice made yet
  const [showCookieBanner, setShowCookieBanner] = useState(() => cookieConsent === null);

  // 3. Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [customBookingMessage, setCustomBookingMessage] = useState<string | undefined>(undefined);

  // 4. Legal modal state
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync document language, title, and SEO meta
  useEffect(() => {
    try {
      localStorage.setItem('lunia_lang', lang);
    } catch {
      // Storage unavailable fallback
    }

    // Dynamic HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-GB';

    // Dynamic document title
    if (lang === 'pt') {
      document.title = 'Lúnia Aesthetics | Estética Avançada, Sobrancelhas e Preenchimento Labial em Bournemouth';
    } else {
      document.title = 'Lúnia Aesthetics | Advanced Aesthetics, Brow Treatments & Lip Filler in Bournemouth';
    }

    // Dynamic meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        lang === 'pt'
          ? 'Estética avançada em Bournemouth: Premium Repair Brows, Brow Lamination e preenchimento labial com resultados naturais. Agende a sua avaliação.'
          : 'Advanced aesthetics in Bournemouth: Premium Repair Brows, Brow Lamination and lip filler with natural results. Book your assessment.'
      );
    }
  }, [lang]);

  // Cookie handlers
  const handleAcceptCookies = () => {
    setCookieConsent('granted');
    setShowCookieBanner(false);
    try {
      localStorage.setItem('lunia_cookie_consent', 'granted');
    } catch {
      // ignore
    }
  };

  const handleDeclineCookies = () => {
    setCookieConsent('declined');
    setShowCookieBanner(false);
    try {
      localStorage.setItem('lunia_cookie_consent', 'declined');
    } catch {
      // ignore
    }
  };

  const handleReopenCookieSettings = () => {
    setShowCookieBanner(true);
  };

  // Language toggle
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  // Booking modal helpers
  const handleOpenStandardBooking = () => {
    setCustomBookingMessage(undefined);
    setIsBookingOpen(true);
  };

  const handleOpenCustomBooking = (formattedMessage: string) => {
    setCustomBookingMessage(formattedMessage);
    setIsBookingOpen(true);
  };

  // JSON-LD Structured Data for LocalBusiness & FAQPage
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BeautySalon',
        '@id': 'https://lunia-aesthetics.co.uk/#business',
        name: 'Lúnia Aesthetics',
        alternateName: 'Lunia Aesthetics Bournemouth',
        image: siteData.heroImage,
        url: 'https://lunia-aesthetics.co.uk',
        telephone: `+${siteData.whatsappPhone}`,
        priceRange: '££',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bournemouth',
          addressRegion: 'Dorset',
          addressCountry: 'GB'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.7192,
          longitude: -1.8808
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Bournemouth' },
          { '@type': 'AdministrativeArea', name: 'Poole' },
          { '@type': 'AdministrativeArea', name: 'Christchurch' },
          { '@type': 'AdministrativeArea', name: 'Dorset' }
        ],
        founder: {
          '@type': 'Person',
          name: siteData.practitionerName,
          jobTitle: 'Aesthetic Practitioner'
        },
        sameAs: [siteData.instagramUrl],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Aesthetic Treatments',
          itemListElement: siteData.services.map((s, idx) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.name.en,
              description: s.shortDesc.en
            },
            position: idx + 1
          }))
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://lunia-aesthetics.co.uk/#faq',
        mainEntity: siteData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question.en,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer.en
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F6EFE4] text-[#3F2E22] flex flex-col font-sans selection:bg-[#E6CF9A] selection:text-[#4A3727]">
      {/* Inject Structured Data JSON-LD for SEO & AI recommenders */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* 1. Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenBooking={handleOpenStandardBooking}
      />

      <main className="flex-1">
        {/* 2. Hero Section (Marfim) */}
        <HeroSection
          lang={lang}
          onOpenBooking={handleOpenStandardBooking}
        />

        {/* 3. Serviços (Mocha) */}
        <ServicesSection
          lang={lang}
          onOpenBooking={handleOpenStandardBooking}
        />

        {/* 4. Galeria (Marfim) */}
        <GallerySection
          lang={lang}
          onOpenBooking={handleOpenStandardBooking}
        />

        {/* 5. Sobre a profissional (Bege) */}
        <AboutSection
          lang={lang}
          onOpenBooking={handleOpenStandardBooking}
        />

        {/* 6. Instagram e Grupo VIP (Mocha) */}
        <InstagramVipSection
          lang={lang}
          onOpenBooking={handleOpenStandardBooking}
          hasCookieConsent={cookieConsent === 'granted'}
          onAcceptCookies={handleAcceptCookies}
        />

        {/* 7. Feedbacks (Marfim) */}
        <FeedbacksSection
          lang={lang}
          onOpenBooking={handleOpenStandardBooking}
        />

        {/* 8. Studio e Localização (Bege) */}
        <StudioSection
          lang={lang}
          onOpenBooking={handleOpenStandardBooking}
          hasCookieConsent={cookieConsent === 'granted'}
          onAcceptCookies={handleAcceptCookies}
        />

        {/* 9. Agendamento + Educação (Mocha) */}
        <BookingSection
          lang={lang}
          onOpenBookingWithMessage={handleOpenCustomBooking}
        />

        {/* 10. FAQ (Marfim) */}
        <FaqSection
          lang={lang}
          onOpenBooking={handleOpenStandardBooking}
        />
      </main>

      {/* 11. Rodapé (Marrom Profundo) */}
      <FooterSection
        lang={lang}
        onOpenBooking={handleOpenStandardBooking}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenCookieSettings={handleReopenCookieSettings}
      />

      {/* Floating Booking Button */}
      <FloatingBookingButton
        onOpenBooking={handleOpenStandardBooking}
        lang={lang}
      />

      {/* Central Booking Modal (Option 5.1: Instagram DM + WhatsApp) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
        customMessage={customBookingMessage}
      />

      {/* Privacy Policy & Terms of Use Modal (UK English) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Cookie Consent Banner (PECR) */}
      <CookieBanner
        show={showCookieBanner}
        onAccept={handleAcceptCookies}
        onDecline={handleDeclineCookies}
        lang={lang}
      />
    </div>
  );
}

export default App;
