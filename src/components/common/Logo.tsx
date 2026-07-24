import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'auto';
  symbolOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = false,
  size = 'md',
  variant = 'light', // light = white logo for dark background
  symbolOnly = false,
}) => {
  const sizeMap = {
    sm: { symbol: 24, wordmark: 'text-base gap-1', height: 'h-6' },
    md: { symbol: 32, wordmark: 'text-xl md:text-2xl gap-1.5', height: 'h-8' },
    lg: { symbol: 44, wordmark: 'text-3xl md:text-4xl gap-2', height: 'h-11' },
    xl: { symbol: 68, wordmark: 'text-5xl md:text-6xl gap-3', height: 'h-16' },
  };

  const currentSize = sizeMap[size];
  const fillColor = variant === 'dark' ? 'fill-black' : 'fill-white';
  const textColor = variant === 'dark' ? 'text-black' : 'text-white';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* YELWIN Arch + Ring Sculpture Emblem */}
      <svg
        width={currentSize.symbol}
        height={currentSize.symbol}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105 shrink-0"
        aria-label="YELWIN Symbol"
      >
        <g className={fillColor}>
          {/* Circle Ring */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 50 15 C 58.28 15 65 21.72 65 30 C 65 38.28 58.28 45 50 45 C 41.72 45 35 38.28 35 30 C 35 21.72 41.72 15 50 15 Z M 50 20 C 55.52 20 60 24.48 60 30 C 60 35.52 55.52 40 50 40 C 44.48 40 40 35.52 40 30 C 40 24.48 44.48 20 50 20 Z"
          />
          {/* Outer Arch */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 27 88 C 27 63 37 51 50 51 C 63 51 73 63 73 88 C 69 82 61 58 50 58 C 39 58 31 82 27 88 Z"
          />
          {/* Inner Arch */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 34 84 C 34 71 41 66 50 66 C 59 66 66 71 66 84 C 63 80 57 72 50 72 C 43 72 37 80 34 84 Z"
          />
        </g>
      </svg>

      {/* YELWIN Wordmark with Stylized 'E' */}
      {!symbolOnly && (
        <div className="flex flex-col leading-none">
          <div className={`flex items-center font-mono font-bold tracking-[0.2em] uppercase ${currentSize.wordmark} ${textColor}`}>
            <span>Y</span>
            {/* Custom Stylized 'E' with 3 horizontal bars */}
            <span className="inline-flex flex-col justify-between h-[0.62em] w-[0.52em] my-auto mx-[0.04em] shrink-0">
              <span className={`h-[18%] w-full rounded-xs ${variant === 'dark' ? 'bg-black' : 'bg-white'}`} />
              <span className={`h-[18%] w-full rounded-xs ${variant === 'dark' ? 'bg-black' : 'bg-white'}`} />
              <span className={`h-[18%] w-full rounded-xs ${variant === 'dark' ? 'bg-black' : 'bg-white'}`} />
            </span>
            <span>LWIN</span>
          </div>

          {showTagline && (
            <span
              className={`font-mono tracking-[0.35em] uppercase text-[9px] sm:text-[10px] font-bold mt-1 opacity-70 ${
                variant === 'dark' ? 'text-neutral-700' : 'text-neutral-300'
              }`}
            >
              BE BEYOND.
            </span>
          )}
        </div>
      )}
    </div>
  );
};
