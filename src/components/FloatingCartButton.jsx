import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function FloatingCartButton({ cartCount, totalAmount, onClick }) {
  if (cartCount === 0) return null;

  return (
    <div className="fixed bottom-6 right-5 z-30 md:hidden animate-in slide-in-from-bottom duration-300">
      <button
        onClick={onClick}
        className="px-5 py-3 rounded-full bg-darkBrown text-cream shadow-warm-xl flex items-center gap-3 border border-beige/40 active:scale-95 transition-transform"
        aria-label="View current cart"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 text-beige" />
          <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-sage text-white text-[10px] font-bold flex items-center justify-center">
            {cartCount}
          </span>
        </div>

        <div className="text-left font-serif leading-none pr-1">
          <span className="text-[10px] uppercase tracking-wider text-beige/80 block">
            View Cart
          </span>
          <span className="text-sm font-bold text-cream">
            ₹{totalAmount}
          </span>
        </div>
      </button>
    </div>
  );
}
