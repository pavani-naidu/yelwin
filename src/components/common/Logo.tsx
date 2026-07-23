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
          {/* Upper Floating Ring / Torus */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 50 12 C 63.8 12 75 19.6 75 29 C 75 38.4 63.8 46 50 46 C 36.2 46 25 38.4 25 29 C 25 19.6 36.2 12 50 12 Z M 50 20 C 58.3 20 65 24 65 29 C 65 34 58.3 38 50 38 C 41.7 38 35 34 35 29 C 35 24 41.7 20 50 20 Z"
          />
          {/* Lower Sweeping Base Arch */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 12 88 C 12 58 29 48 50 48 C 71 48 88 58 88 88 L 76 88 C 76 66 64 58 50 58 C 36 58 24 66 24 88 L 12 88 Z"
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
