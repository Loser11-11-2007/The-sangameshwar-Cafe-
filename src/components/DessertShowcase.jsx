import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { MENU_ITEMS } from '../menuData';
import ImageWithFallback from './ImageWithFallback';

export default function DessertShowcase({ onSelectCategory, onAddToCart, cartItems, onUpdateQuantity }) {
  // Filter dessert items
  const desserts = MENU_ITEMS.filter((item) => item.category === 'cakes-desserts').slice(0, 4);

  const getQuantity = (id) => {
    const item = cartItems.find((ci) => ci.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="font-handwriting text-xl sm:text-2xl text-coffee font-bold block">
              save room for sweetness ♡
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-darkBrown tracking-tight">
              Decadent Cakes & Desserts
            </h2>
            <p className="text-darkBrown/75 text-sm sm:text-base leading-relaxed">
              Baked daily in-house using pure Belgian cocoa, authentic cream cheese, and love. Never skip dessert!
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('cakes-desserts')}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-darkBrown text-cream font-medium text-sm hover:bg-coffee shadow-warm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group"
          >
            <span>View All Desserts (14)</span>
            <ArrowRight className="w-4 h-4 text-beige group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Staggered Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Main Hero Highlight Card: Molten Chocolate Lava Cake */}
          <div className="md:col-span-7 bg-cream-light rounded-3xl p-6 sm:p-8 border border-beige/60 shadow-warm-lg flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6">
              <img
                src="/images/menu/chocolate-lava-cake.jpg"
                alt="Molten Chocolate Lava Cake"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-darkBrown/90 text-cream px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-warm-sm">
                <Sparkles className="w-3.5 h-3.5 text-beige" />
                <span>Chef's Masterpiece</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-cream/95 text-darkBrown px-3.5 py-1.5 rounded-full font-serif font-extrabold text-base shadow-warm">
                ₹190
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-2xl text-darkBrown mb-1">
                  Molten Chocolate Lava Cake
                </h3>
                <p className="text-xs sm:text-sm text-darkBrown/70 max-w-md">
                  Warm, rich dark chocolate center that flows effortlessly with a scoop of Madagascar vanilla bean ice cream.
                </p>
              </div>

              <button
                onClick={() => {
                  const lavaCake = MENU_ITEMS.find((i) => i.slug === 'chocolate-lava-cake');
                  if (lavaCake) onAddToCart(lavaCake);
                }}
                className="px-6 py-2.5 rounded-full bg-darkBrown text-cream hover:bg-coffee text-xs font-bold tracking-wider uppercase transition-colors shrink-0 shadow-warm"
              >
                {getQuantity('cd-10') > 0 ? `Added (${getQuantity('cd-10')})` : 'Treat Yourself'}
              </button>
            </div>
          </div>

          {/* Right Column: 3 Staggered Mini Cards */}
          <div className="md:col-span-5 space-y-4">
            {desserts.filter(d => d.slug !== 'chocolate-lava-cake').slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-cream-light rounded-2xl p-3.5 sm:p-4 border border-beige/50 shadow-warm flex items-center gap-4 hover:bg-cream-dark/30 transition-colors group"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    fallbackSrc={item.fallbackUrl}
                    alt={item.name}
                    categoryEmoji="🍰"
                    categoryName="Desserts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-darkBrown truncate">
                      {item.name}
                    </h4>
                    <span className="font-serif font-bold text-sm text-darkBrown">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-xs text-darkBrown/65 line-clamp-1 mb-2">
                    {item.description}
                  </p>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="text-xs font-semibold text-coffee hover:text-darkBrown flex items-center gap-1"
                  >
                    <span>+ Add to order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
