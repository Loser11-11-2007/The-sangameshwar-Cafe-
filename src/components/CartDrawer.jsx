import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CAFE_INFO } from '../menuData';
import ImageWithFallback from './ImageWithFallback';
import { VegBadge } from './Decorations';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
  onExploreMenu,
}) {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState('dine-in'); // 'dine-in' | 'takeaway'
  const [tableNumber, setTableNumber] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    // Trigger joyful confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#5C4033', '#D8C3A5', '#87986A', '#FFF8ED'],
    });

    // Format WhatsApp Message
    let message = `☕ *NEW ORDER - ${CAFE_INFO.name.toUpperCase()}*\n`;
    message += `------------------------------------\n`;
    if (customerName) message += `👤 *Customer:* ${customerName}\n`;
    message += `📍 *Order Type:* ${orderType === 'dine-in' ? `Dine-In (Table: ${tableNumber || 'To be seated'})` : 'Takeaway / Self-Pickup'}\n`;
    message += `------------------------------------\n`;
    message += `*ORDER ITEMS:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    message += `------------------------------------\n`;
    message += `💰 *TOTAL AMOUNT: ₹${totalAmount}*\n`;

    if (specialInstructions.trim()) {
      message += `📝 *Notes:* ${specialInstructions}\n`;
    }

    message += `------------------------------------\n`;
    message += `Thank you! Looking forward to my cozy treat! ♡`;

    const encodedUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(encodedUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
      
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-darkBrown/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-cream h-full shadow-warm-xl flex flex-col justify-between z-10 border-l border-beige/60 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-beige/50 flex items-center justify-between bg-cream-light">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-darkBrown text-cream flex items-center justify-center shadow-warm-sm">
              <ShoppingBag className="w-5 h-5 text-beige" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-darkBrown">
                Your Cozy Cart
              </h2>
              <p className="text-xs text-coffee font-medium">
                {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-[11px] font-semibold text-terracotta hover:underline px-2 py-1"
                title="Clear entire cart"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-beige/30 text-darkBrown"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-cream-dark flex items-center justify-center text-4xl shadow-warm-sm">
                ☕
              </div>
              <h3 className="font-serif font-bold text-xl text-darkBrown">
                Your cart is waiting!
              </h3>
              <p className="text-xs sm:text-sm text-darkBrown/70 max-w-xs font-handwriting text-lg text-coffee">
                your cup is waiting... add something delicious to get started ♡
              </p>
              <button
                onClick={() => {
                  onClose();
                  onExploreMenu();
                }}
                className="mt-2 px-6 py-3 rounded-full bg-darkBrown text-cream text-xs font-bold tracking-wider uppercase hover:bg-coffee shadow-warm transition-all flex items-center gap-2"
              >
                <span>Browse Menu</span>
                <ArrowRight className="w-4 h-4 text-beige" />
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-cream-light p-3.5 rounded-2xl border border-beige/60 shadow-warm-sm flex items-center gap-3.5"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        fallbackSrc={item.fallbackUrl}
                        alt={item.name}
                        categoryEmoji="☕"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <div className="flex items-center gap-1.5 truncate">
                          <VegBadge isVeg={item.isVeg} size="sm" />
                          <h4 className="font-serif font-bold text-sm text-darkBrown truncate">
                            {item.name}
                          </h4>
                        </div>
                        <span className="font-serif font-bold text-sm text-darkBrown shrink-0">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>

                      <div className="text-[11px] text-coffee/70 mb-2">
                        ₹{item.price} each
                      </div>

                      {/* Stepper Quantity */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-cream-dark rounded-full p-0.5 border border-beige/60">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full hover:bg-beige flex items-center justify-center text-darkBrown text-xs"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-darkBrown">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full hover:bg-beige flex items-center justify-center text-darkBrown text-xs"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onUpdateQuantity(item.id, 0)}
                          className="text-darkBrown/40 hover:text-terracotta transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Info Inputs */}
              <div className="mt-6 pt-5 border-t border-beige/60 space-y-3.5 bg-cream-light p-4 rounded-2xl border">
                <h4 className="font-serif font-bold text-sm text-darkBrown">
                  Order Details
                </h4>

                {/* Dine-In or Takeaway Selector */}
                <div className="grid grid-cols-2 gap-2 bg-cream-dark p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setOrderType('dine-in')}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      orderType === 'dine-in'
                        ? 'bg-darkBrown text-cream shadow-xs'
                        : 'text-darkBrown hover:text-coffee'
                    }`}
                  >
                    Dine-In 🍽️
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      orderType === 'takeaway'
                        ? 'bg-darkBrown text-cream shadow-xs'
                        : 'text-darkBrown hover:text-coffee'
                    }`}
                  >
                    Takeaway 🛍️
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-darkBrown mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Yash"
                      className="w-full px-3 py-1.5 rounded-xl bg-cream border border-beige text-xs text-darkBrown focus:outline-none focus:ring-1 focus:ring-darkBrown"
                    />
                  </div>

                  {orderType === 'dine-in' && (
                    <div>
                      <label className="block text-[11px] font-semibold text-darkBrown mb-1">
                        Table No. (Optional)
                      </label>
                      <input
                        type="text"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        placeholder="e.g. 4"
                        className="w-full px-3 py-1.5 rounded-xl bg-cream border border-beige text-xs text-darkBrown focus:outline-none focus:ring-1 focus:ring-darkBrown"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-darkBrown mb-1">
                    Special Notes
                  </label>
                  <input
                    type="text"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="Less sugar, extra spicy, warm milk..."
                    className="w-full px-3 py-1.5 rounded-xl bg-cream border border-beige text-xs text-darkBrown focus:outline-none focus:ring-1 focus:ring-darkBrown"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer & Checkout Action */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-beige/60 bg-cream-light space-y-4 shadow-lg">
            
            {/* Bill Summary */}
            <div className="space-y-1.5 text-xs text-darkBrown/80">
              <div className="flex justify-between">
                <span>Subtotal ({totalItemCount} items)</span>
                <span className="font-bold">₹{totalAmount}</span>
              </div>
              <div className="flex justify-between text-sage-dark font-medium">
                <span>Taxes & Service Charge</span>
                <span>Included</span>
              </div>
              <div className="pt-2 border-t border-beige/60 flex justify-between text-base font-serif font-extrabold text-darkBrown">
                <span>Grand Total</span>
                <span className="text-lg">₹{totalAmount}</span>
              </div>
            </div>

            {/* WhatsApp Checkout Button */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-warm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Place Order on WhatsApp</span>
            </button>

            <p className="text-[11px] text-center text-darkBrown/60">
              Opens WhatsApp with your full order summary. Instant confirmation from our barista! ☕
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
