import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../menuData';
import { LeafSvg } from './Decorations';

export default function CategoryTiles({ onSelectCategory }) {
  return (
    <section className="py-20 lg:py-28 bg-[#F6EDE2] relative overflow-hidden border-y border-beige/40">
      
      {/* Decorative leaf in the corner */}
      <div className="absolute top-8 right-8 pointer-events-none opacity-40">
        <LeafSvg className="w-12 h-12 text-sage rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18 space-y-3">
          <span className="font-handwriting text-xl sm:text-2xl text-coffee font-bold block">
            craving something special? ☕
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-darkBrown tracking-tight">
            Explore by Category
          </h2>
          <p className="text-darkBrown/75 text-sm sm:text-base leading-relaxed">
            From sunrise filter brews to midnight molten lava cakes, choose your mood below.
          </p>
        </div>

        {/* Categories Grid: 13 categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group text-left bg-cream p-4 sm:p-5 rounded-3xl border border-beige/60 shadow-warm card-hover flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-darkBrown/30"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF8ED] border border-beige/50 flex items-center justify-center text-2xl shadow-warm-sm group-hover:scale-110 transition-transform duration-200 mb-3">
                  {cat.emoji}
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-darkBrown group-hover:text-coffee transition-colors leading-snug">
                  {cat.name}
                </h3>
              </div>

              <div className="mt-4 pt-2 border-t border-beige/30 flex items-center justify-between text-[11px] text-coffee/70 font-medium">
                <span>View items</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-coffee group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
