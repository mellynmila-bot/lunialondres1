import React from 'react';

interface GoldenCrescentProps {
  className?: string;
  size?: number;
  withHalo?: boolean;
}

export const GoldenCrescent: React.FC<GoldenCrescentProps> = ({
  className = "w-5 h-5",
  size = 20,
  withHalo = false
}) => {
  return (
    <span className={`inline-flex items-center justify-center relative ${className}`}>
      {withHalo && (
        <span
          className="absolute inset-0 rounded-full blur-sm bg-[#E6CF9A]/40 animate-pulse"
          aria-hidden="true"
        />
      )}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 transition-transform duration-300"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="luniaGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6CF9A" />
            <stop offset="50%" stopColor="#C29F5B" />
            <stop offset="100%" stopColor="#8F7030" />
          </linearGradient>
        </defs>
        <path
          d="M14.5 3.5C8.701 3.5 4 8.201 4 14C4 19.799 8.701 24.5 14.5 24.5C11.605 21.82 9.778 17.986 9.778 14C9.778 10.014 11.605 6.18 14.5 3.5Z"
          fill="url(#luniaGoldGradient)"
          transform="scale(0.85) translate(1, -0.5)"
        />
        <circle cx="18" cy="7" r="0.9" fill="#C29F5B" />
      </svg>
    </span>
  );
};
