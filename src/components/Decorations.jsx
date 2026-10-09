import React from 'react';

/**
 * Aesthetic inline SVG decorations for Gen Z Pinterest / warm scrapbook vibes.
 * Used sparingly, subtly rotated, non-intrusive.
 */

export function CoffeeBeanSvg({ className = "w-5 h-5 text-coffee/60" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.5 4.5C16.8 1.8 12.3 2 9.5 4.8C6.7 7.6 6.5 12.1 9.2 14.8C11.9 17.5 16.4 17.3 19.2 14.5C22 11.7 22.2 7.2 19.5 4.5ZM12.7 13.7C10.6 13.9 9.3 12.2 9.4 10.3C9.5 8.4 11.2 7.1 13.1 7.2C13.8 6.6 14.7 6.3 15.6 6.4C14.7 8.3 15 10.5 16.4 12C15.3 13.1 14 13.7 12.7 13.7Z" />
    </svg>
  );
}

export function LeafSvg({ className = "w-6 h-6 text-sage" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export function SteamSwirlSvg({ className = "w-6 h-10 text-cream/70" }) {
  return (
    <svg viewBox="0 0 32 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M10 60 C 2 46, 26 38, 14 24 C 6 14, 22 8, 16 2" opacity="0.8" />
    </svg>
  );
}

export function TinyStarSvg({ className = "w-4 h-4 text-beige" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
    </svg>
  );
}

export function InstagramSvg({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookSvg({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function VegBadge({ isVeg, size = "md" }) {
  const dotSize = size === "sm" ? "w-1.5 h-1.5" : "w-2.5 h-2.5";
  const boxSize = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";

  return (
    <span
      className={`inline-flex items-center justify-center ${boxSize} border ${
        isVeg ? 'border-sage' : 'border-terracotta'
      } rounded-sm p-0.5 bg-cream/90`}
      title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
    >
      <span
        className={`${dotSize} rounded-full ${
          isVeg ? 'bg-sage' : 'bg-terracotta'
        }`}
      />
    </span>
  );
}
