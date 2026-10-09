import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import ItemCard from './ItemCard';
import { TinyStarSvg } from './Decorations';

export default function PopularItems({
  popularItems,
  cartItems,
  onAddToCart,
  onUpdateQuantity,
  onViewAllMenu,
}) {
  const getQuantity = (itemId) => {
    const found = cartItems.find((ci) => ci.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section className="py-20 lg:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-coffee font-handwriting text-xl sm:text-2xl font-bold">
              <span>the crowd favorites ♡</span>
              <TinyStarSvg className="w-4 h-4 text-coffee" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-darkBrown tracking-tight">
              Most Loved by Our Besties
            </h2>
            <p className="text-darkBrown/70 text-sm sm:text-base leading-relaxed">
              Hand-picked treats our regulars order on repeat. Freshly prepared to order with love.
            </p>
          </div>

          <button
            onClick={onViewAllMenu}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-cream-light border border-darkBrown/20 text-darkBrown font-medium text-sm hover:border-darkBrown hover:bg-beige/20 shadow-warm-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4 text-coffee group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Responsive Grid: 4 columns desktop, 2 columns tablet, 1-2 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
          {popularItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              cartQuantity={getQuantity(item.id)}
              onAddToCart={onAddToCart}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
