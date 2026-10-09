import React, { useEffect, useState } from 'react';
import { CoffeeBeanSvg } from './Decorations';

export default function PageLoader({ onFinish }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        onFinish();
      }, 400);
    }, 1000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#FFF8ED] flex flex-col items-center justify-center transition-opacity duration-400 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Steam Lines */}
        <div className="flex gap-1.5 mb-2 h-7">
          <span className="w-1.5 h-6 bg-coffee/50 rounded-full animate-steam-1" />
          <span className="w-1.5 h-7 bg-coffee/70 rounded-full animate-steam-2" />
          <span className="w-1.5 h-5 bg-coffee/40 rounded-full animate-steam-3" />
        </div>

        {/* Cup / Bean Icon */}
        <div className="w-16 h-16 rounded-full bg-darkBrown text-cream flex items-center justify-center shadow-warm-lg">
          <CoffeeBeanSvg className="w-8 h-8 text-beige animate-pulse" />
        </div>

        {/* Brand Name */}
        <h2 className="font-serif font-bold text-xl sm:text-2xl text-darkBrown mt-4 tracking-tight">
          The Sangameshwar Cafe
        </h2>
        <p className="font-handwriting text-base text-coffee mt-1">
          brewing your cozy corner... ☕
        </p>
      </div>
    </div>
  );
}
