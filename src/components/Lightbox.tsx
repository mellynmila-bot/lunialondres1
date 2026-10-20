import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  images: Array<{
    url: string;
    title: { pt: string; en: string };
    subtitle: { pt: string; en: string };
  }>;
  lang: 'pt' | 'en';
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onPrev,
  onNext,
  images,
  lang
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const currentImg = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity select-none"
      role="dialog"
      aria-modal="true"
      aria-label={lang === 'pt' ? 'Visualizador de imagem' : 'Image lightbox'}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Bar with Counter and Close */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-[#F6EFE4] z-20">
        <div className="px-3 py-1 rounded-full bg-black/40 border border-[#C29F5B]/40 text-xs tracking-widest uppercase font-mono">
          {currentIndex + 1} / {images.length}
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-black/40 hover:bg-[#8F7030]/60 border border-[#C29F5B]/40 text-[#F6EFE4] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C29F5B] cursor-pointer"
          aria-label={lang === 'pt' ? 'Fechar galeria' : 'Close gallery'}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#8F7030]/80 border border-[#C29F5B]/50 text-[#F6EFE4] transition-all transform hover:scale-105 z-20 cursor-pointer"
        aria-label={lang === 'pt' ? 'Foto anterior' : 'Previous photo'}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-4xl max-h-[85vh] p-4 flex flex-col items-center justify-center z-10">
        <div className="relative overflow-hidden rounded-2xl border-2 border-[#C29F5B] shadow-2xl bg-[#4A3727]">
          <img
            src={currentImg.url}
            alt={currentImg.title[lang]}
            className="max-h-[72vh] w-auto max-w-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption */}
        <div className="mt-3 text-center text-[#F6EFE4]">
          <p className="text-base font-serif text-[#E6CF9A]">
            {currentImg.title[lang]}
          </p>
          <p className="text-xs text-[#F6EFE4]/80">
            {currentImg.subtitle[lang]}
          </p>
          <p className="text-[11px] text-[#D9C7AC]/70 mt-1 italic">
            {lang === 'pt'
              ? 'Resultados individuais podem variar de pessoa para pessoa.'
              : 'Individual results vary from person to person.'}
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#8F7030]/80 border border-[#C29F5B]/50 text-[#F6EFE4] transition-all transform hover:scale-105 z-20 cursor-pointer"
        aria-label={lang === 'pt' ? 'Próxima foto' : 'Next photo'}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
