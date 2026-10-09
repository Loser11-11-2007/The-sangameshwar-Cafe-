import React from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { VegBadge } from './Decorations';

export default function ItemCard({
  item,
  cartQuantity = 0,
  onAddToCart,
  onUpdateQuantity,
}) {
  const { id, name, price, description, isVeg, image, fallbackUrl, badge, category } = item;

  return (
    <div className="group relative bg-cream-light rounded-3xl p-3.5 sm:p-4 border border-beige/50 shadow-warm card-hover flex flex-col justify-between overflow-hidden">
      
      {/* Top Media Container */}
      <div className="relative mb-3.5 overflow-hidden rounded-2xl">
        <ImageWithFallback
          src={image}
          fallbackSrc={fallbackUrl}
          alt={name}
          aspectRatio="aspect-[4/3]"
          categoryEmoji="☕"
          categoryName={category}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Veg / Non-Veg Indicator in Top-Left */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <VegBadge isVeg={isVeg} size="sm" />
        </div>

        {/* Playful Sticker Badge in Top-Right */}
        {badge && (
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-warm-sm bg-darkBrown text-cream border border-beige/30 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-beige" />
              <span>{badge}</span>
            </span>
          </div>
        )}
      </div>

      {/* Item Information */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-serif font-bold text-base sm:text-lg text-darkBrown leading-snug group-hover:text-coffee transition-colors line-clamp-1">
              {name}
            </h3>
          </div>

          <p className="text-xs text-darkBrown/70 leading-relaxed line-clamp-2 mb-3">
            {description}
          </p>
        </div>

        {/* Price & Add to Cart Controls */}
        <div className="pt-2 border-t border-beige/40 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-coffee/70 uppercase tracking-wider font-semibold">
              Price
            </span>
            <span className="font-serif font-extrabold text-lg text-darkBrown">
              ₹{price}
            </span>
          </div>

          {/* Interactive Cart Button / Stepper */}
          {cartQuantity === 0 ? (
            <button
              onClick={() => onAddToCart(item)}
              className="px-4 py-2 rounded-full bg-darkBrown text-cream hover:bg-coffee text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-warm-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
              aria-label={`Add ${name} to order`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>ADD</span>
            </button>
          ) : (
            <div className="flex items-center bg-darkBrown text-cream rounded-full p-1 shadow-warm-sm">
              <button
                onClick={() => onUpdateQuantity(id, cartQuantity - 1)}
                className="w-7 h-7 rounded-full hover:bg-coffee flex items-center justify-center text-cream transition-colors"
                aria-label={`Decrease ${name} quantity`}
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="px-2.5 text-xs font-bold text-cream select-none min-w-[20px] text-center">
                {cartQuantity}
              </span>
              <button
                onClick={() => onUpdateQuantity(id, cartQuantity + 1)}
                className="w-7 h-7 rounded-full hover:bg-coffee flex items-center justify-center text-cream transition-colors"
                aria-label={`Increase ${name} quantity`}
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
