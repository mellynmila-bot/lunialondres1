import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { GoldenCrescent } from './GoldenCrescent';

interface FloatingBookingButtonProps {
  onOpenBooking: () => void;
  lang: 'pt' | 'en';
}

export const FloatingBookingButton: React.FC<FloatingBookingButtonProps> = ({
  onOpenBooking,
  lang
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Visible after scrolling 450px (past hero)
      setVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom duration-300">
      <button
        onClick={onOpenBooking}
        className="relative group flex items-center gap-2.5 py-3 px-5 rounded-full bg-gradient-to-r from-[#C29F5B] to-[#8F7030] text-[#F6EFE4] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-[#E6CF9A]/40 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C29F5B]"
        aria-label={lang === 'pt' ? 'Agendar consulta' : 'Book consultation'}
      >
        {/* Soft pulsing halo */}
        <span
          className="absolute inset-0 rounded-full bg-[#E6CF9A]/30 blur-md group-hover:blur-lg transition-all"
          aria-hidden="true"
        />

        <GoldenCrescent size={18} className="relative z-10" />
        <Calendar className="w-4 h-4 text-[#F6EFE4] relative z-10 hidden sm:inline-block" />
        <span className="relative z-10 text-xs font-semibold uppercase tracking-widest font-sans">
          {lang === 'pt' ? 'Agendar' : 'Book Now'}
        </span>
      </button>
    </div>
  );
};
