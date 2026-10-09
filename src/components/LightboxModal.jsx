import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CAFE_INFO } from '../menuData';
import { getAssetUrl } from '../utils/assetUrl';

export default function LightboxModal({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkBrown/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-cream/20 hover:bg-cream/40 text-cream flex items-center justify-center transition-colors focus:outline-none"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-cream/20 hover:bg-cream/40 text-cream flex items-center justify-center transition-colors focus:outline-none"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-cream/20 hover:bg-cream/40 text-cream flex items-center justify-center transition-colors focus:outline-none"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image & Caption Container */}
      <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative max-h-[70vh] rounded-2xl overflow-hidden shadow-warm-xl border border-beige/40">
          <img
            src={getAssetUrl(currentItem.image)}
            alt={currentItem.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-lg px-4">
          <div className="inline-block px-3 py-0.5 rounded-full bg-cream/20 text-cream text-xs font-medium mb-1">
            {currentItem.category} • {currentIndex + 1} of {items.length}
          </div>
          <h3 className="font-serif font-bold text-xl text-cream">
            {currentItem.title}
          </h3>
          <p className="text-sm text-cream/80 mt-1 font-handwriting text-base">
            {currentItem.caption}
          </p>
        </div>
      </div>

    </div>
  );
}
