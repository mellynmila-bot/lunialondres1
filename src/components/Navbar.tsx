import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Globe } from 'lucide-react';
import { GoldenCrescent } from './GoldenCrescent';

interface NavbarProps {
  lang: 'pt' | 'en';
  onToggleLang: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenBooking
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicos', label: lang === 'pt' ? 'Tratamentos' : 'Treatments' },
    { href: '#galeria', label: lang === 'pt' ? 'Galeria' : 'Gallery' },
    { href: '#sobre', label: lang === 'pt' ? 'Sobre' : 'About' },
    { href: '#instagram', label: 'Instagram' },
    { href: '#avaliacoes', label: lang === 'pt' ? 'Avaliações' : 'Reviews' },
    { href: '#studio', label: 'Studio' },
    { href: '#faq', label: 'FAQ' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
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
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6EFE4]/95 backdrop-blur-md border-b border-[#C29F5B]/30 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="Lúnia Aesthetics Home"
        >
          <GoldenCrescent size={24} withHalo />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-medium text-[#4A3727] group-hover:text-[#8F7030] transition-colors leading-none">
              LÚNIA
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#8F7030] uppercase font-sans font-semibold mt-0.5">
              AESTHETICS
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-wider text-[#4A3727]/80"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#8F7030] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C29F5B] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Toggle & CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language pill */}
          <button
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full border border-[#C29F5B]/60 bg-[#F6EFE4]/80 hover:bg-[#EADFCC] text-xs font-medium text-[#4A3727] transition-all hover:border-[#C29F5B] cursor-pointer"
            title={lang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
          >
            <Globe className="w-3.5 h-3.5 text-[#8F7030]" />
            <span className="tracking-wide">
              {lang === 'pt' ? 'Read in English' : 'Ler em português'}
            </span>
          </button>

          {/* Booking CTA Button */}
          <button
            onClick={onOpenBooking}
            className="relative overflow-hidden py-2 px-5 rounded-lg bg-[#C29F5B] hover:bg-[#8F7030] text-[#F6EFE4] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow group cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{lang === 'pt' ? 'Agendar' : 'Book'}</span>
            </span>
            <span
              className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Action & Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleLang}
            className="py-1 px-2.5 rounded-full border border-[#C29F5B]/60 text-[11px] font-medium text-[#4A3727] bg-[#F6EFE4]"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#4A3727] hover:bg-[#EADFCC] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C29F5B]"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F6EFE4] border-b border-[#C29F5B]/30 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold uppercase tracking-wider text-[#4A3727] hover:text-[#8F7030] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#D9C7AC]/60 flex flex-col gap-3">
              <button
                onClick={() => {
                  onToggleLang();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-[#C29F5B]/70 bg-white/60 text-xs font-semibold uppercase tracking-wider text-[#4A3727]"
              >
                <Globe className="w-4 h-4 text-[#8F7030]" />
                <span>
                  {lang === 'pt' ? 'Read in English' : 'Ler em português'}
                </span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#C29F5B] text-[#F6EFE4] text-xs font-semibold uppercase tracking-widest shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'pt' ? 'Agendar consulta' : 'Book assessment'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
