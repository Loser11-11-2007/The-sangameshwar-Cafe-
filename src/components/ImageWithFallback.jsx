import React, { useState } from 'react';
import { Coffee } from 'lucide-react';

/**
 * ImageWithFallback component
 * 1. Tries primary local image (/images/menu/<slug>.jpg)
 * 2. Falls back to curated aesthetic Unsplash URL
 * 3. Falls back to an elegant beige card with category emoji and coffee bean illustration
 * Prevents Layout Shift using fixed aspect ratio container.
 */
export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt = "Menu item",
  className = "w-full h-full object-cover",
  aspectRatio = "aspect-square",
  categoryEmoji = "☕",
  categoryName = "Cafe Delights",
}) {
  const [stage, setStage] = useState(0); // 0: primary src, 1: fallbackSrc, 2: placeholder
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    if (stage === 0 && fallbackSrc) {
      setStage(1);
    } else {
      setStage(2);
    }
  };

  const currentSrc = stage === 0 ? src : stage === 1 ? fallbackSrc : null;

  return (
    <div className={`relative overflow-hidden bg-cream-dark/50 ${aspectRatio} w-full rounded-2xl`}>
      {/* Soft shimmer placeholder while loading */}
      {!loaded && stage < 2 && (
        <div className="absolute inset-0 bg-beige/30 animate-pulse flex items-center justify-center">
          <Coffee className="w-8 h-8 text-coffee/30 animate-bounce" />
        </div>
      )}

      {stage < 2 && currentSrc ? (
        <img
          src={currentSrc}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={handleError}
          className={`${className} transition-transform duration-500 hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        /* Graceful Beige Fallback Card */
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F5ECE0] to-[#EADDCB] p-4 text-center border border-beige/40">
          <div className="w-14 h-14 rounded-full bg-cream shadow-warm flex items-center justify-center text-2xl mb-2">
            {categoryEmoji}
          </div>
          <span className="text-xs font-serif font-bold text-darkBrown tracking-wide line-clamp-1">
            {alt}
          </span>
          <span className="text-[10px] text-coffee/70 font-medium mt-0.5">
            {categoryName}
          </span>
        </div>
      )}
    </div>
  );
}
