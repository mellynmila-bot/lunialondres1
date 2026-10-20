import React from 'react';
import { GoldenCrescent } from './GoldenCrescent';

interface SectionDividerProps {
  lightMode?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ lightMode = true }) => {
  return (
    <div className="w-full flex items-center justify-center py-6 px-4" aria-hidden="true">
      <div
        className={`h-[1px] flex-1 max-w-xs transition-all ${
          lightMode
            ? 'bg-gradient-to-r from-transparent via-[#C29F5B]/40 to-[#C29F5B]'
            : 'bg-gradient-to-r from-transparent via-[#E6CF9A]/40 to-[#E6CF9A]'
        }`}
      />
      <div className="mx-4 flex items-center gap-1.5 opacity-90">
        <span className="w-1 h-1 rounded-full bg-[#C29F5B]/60" />
        <GoldenCrescent size={18} withHalo />
        <span className="w-1 h-1 rounded-full bg-[#C29F5B]/60" />
      </div>
      <div
        className={`h-[1px] flex-1 max-w-xs transition-all ${
          lightMode
            ? 'bg-gradient-to-l from-transparent via-[#C29F5B]/40 to-[#C29F5B]'
            : 'bg-gradient-to-l from-transparent via-[#E6CF9A]/40 to-[#E6CF9A]'
        }`}
      />
    </div>
  );
};
