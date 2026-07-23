import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  onGoHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-lg">
        <span className="font-mono font-black text-8xl text-neutral-700 block">404</span>
        <h1 className="font-mono font-bold text-3xl uppercase tracking-tight text-white">
          VECTOR OUT OF BOUNDS
        </h1>
        <p className="text-neutral-400 font-sans text-sm leading-relaxed">
          The requested path or resource does not exist in the YELWIN system index.
        </p>
        <button
          onClick={onGoHome}
          className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO MAIN DIRECTORY</span>
        </button>
      </div>
    </div>
  );
};
