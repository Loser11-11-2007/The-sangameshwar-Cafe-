import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { REVIEWS } from '../menuData';
import { TinyStarSvg } from './Decorations';

export default function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18 space-y-3">
          <span className="font-handwriting text-xl sm:text-2xl text-coffee font-bold block">
            passed the vibe check ♡
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-darkBrown tracking-tight">
            Hear From Our Besties
          </h2>
          <p className="text-darkBrown/75 text-sm sm:text-base leading-relaxed">
            Real love from fellow students, remote workers, coffee connoisseurs, and dessert lovers.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-cream-light rounded-3xl p-6 sm:p-7 border border-beige/60 shadow-warm card-hover flex flex-col justify-between relative"
            >
              {/* Top quote icon */}
              <div className="flex items-center justify-between mb-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-coffee">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-coffee text-coffee" />
                  ))}
                </div>

                {/* Badge Tag */}
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-beige/40 text-darkBrown">
                  {rev.tag}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-darkBrown/85 leading-relaxed italic font-serif flex-1 mb-6">
                "{rev.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-beige/40">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-beige shadow-warm-sm"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-sm sm:text-base text-darkBrown truncate">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-coffee/80 truncate">
                    {rev.handle} • {rev.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google / Zomato / Swiggy Rating Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cream-dark/60 border border-beige/70 shadow-warm-sm text-xs sm:text-sm text-darkBrown font-medium">
            <span className="flex items-center gap-1 text-coffee font-bold">
              ★ 4.9 / 5.0
            </span>
            <span className="text-beige-dark">•</span>
            <span>Over 1,200+ smiling reviews across Pune</span>
          </div>
        </div>

      </div>
    </section>
  );
}
