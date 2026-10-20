import React, { useState } from 'react';
import { Eye, Calendar, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import { Lightbox } from '../components/Lightbox';
import { SectionDivider } from '../components/SectionDivider';

interface GallerySectionProps {
  lang: 'pt' | 'en';
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  lang,
  onOpenBooking
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // We repeat the gallery images to create a truly seamless infinite marquee
  const baseImages = siteData.galleryImages;
  const loopImages = [...baseImages, ...baseImages, ...baseImages, ...baseImages];

  const openLightbox = (originalIndex: number) => {
    setCurrentIndex(originalIndex % baseImages.length);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? baseImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === baseImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="galeria" className="py-20 sm:py-24 bg-[#F6EFE4] text-[#3F2E22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7030]">
            <Sparkles className="w-3.5 h-3.5 text-[#C29F5B]" />
            <span>{lang === 'pt' ? 'GALERIA DE RESULTADOS' : 'RESULTS GALLERY'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A3727] font-normal">
            {lang === 'pt'
              ? 'Delicadeza que se vê nos detalhes'
              : 'Delicacy you can see in the details'}
          </h2>

          <p className="text-sm sm:text-base text-[#3F2E22]/80 leading-relaxed font-normal">
            {lang === 'pt'
              ? 'Resultados naturais, pensados para cada rosto.'
              : 'Natural results, designed for every face.'}
          </p>
        </div>
      </div>

      {/* Infinite Carousel Track */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Gradient fades on left and right edges for seamless illusion */}
        <div
          className="absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-[#F6EFE4] to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-[#F6EFE4] to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Marquee Container */}
        <div className="flex animate-marquee-infinite gap-4 sm:gap-6 px-4">
          {loopImages.map((img, index) => {
            const originalIndex = index % baseImages.length;

            return (
              <div
                key={`${img.url}-${index}`}
                onClick={() => openLightbox(originalIndex)}
                className="group cursor-pointer relative shrink-0 w-[240px] sm:w-[280px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#C29F5B]/50 bg-[#EADFCC] shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-102 hover:border-[#C29F5B]"
              >
                <img
                  src={img.url}
                  alt={img.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay with eye icon */}
                <div className="absolute inset-0 bg-[#4A3727]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-[#F6EFE4]/95 text-[#4A3727] transform scale-80 group-hover:scale-100 transition-transform duration-300 shadow-lg border border-[#C29F5B]/40">
                    <Eye className="w-5 h-5 text-[#8F7030]" />
                  </div>
                </div>

                {/* Subtle top golden light line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#E6CF9A] to-transparent" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation hint & arrows */}
        <div className="flex items-center justify-center gap-3 mt-4 text-xs text-[#8F7030]/80">
          <span className="italic">
            {lang === 'pt' ? 'Passe o mouse ou toque para pausar • Clique na foto para expandir' : 'Hover or touch to pause • Click any photo to expand'}
          </span>
        </div>

        {/* Disclaimer Note */}
        <p className="text-xs text-center text-[#3F2E22]/70 mt-4 italic">
          {lang === 'pt'
            ? 'Resultados individuais podem variar de pessoa para pessoa após avaliação clínica personalizada.'
            : 'Individual results may vary from person to person following a bespoke clinical assessment.'}
        </p>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg bg-[#C29F5B] hover:bg-[#8F7030] text-[#F6EFE4] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>
              {lang === 'pt' ? 'Quero um resultado natural' : 'I want a natural result'}
            </span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
        images={baseImages}
        lang={lang}
      />

      <div className="mt-16">
        <SectionDivider lightMode={true} />
      </div>
    </section>
  );
};
