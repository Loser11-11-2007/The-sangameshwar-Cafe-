import React from 'react';
import { ArrowRight, ShoppingBag, Sparkles, Heart } from 'lucide-react';
import { CoffeeBeanSvg, LeafSvg, TinyStarSvg, SteamSwirlSvg } from './Decorations';
import { getAssetUrl } from '../utils/assetUrl';

export default function Hero({ onExploreMenu, onOrderNow }) {
  const marqueeItems = [
    "☕ Fresh Brews",
    "✨ Cozy Vibes",
    "🍰 Sweet Treats",
    "🌿 Good Company",
    "📸 Tag @thesangameshwarcafe",
    "🤎 Handcrafted with Love",
    "🎧 Lo-Fi & Warm Lights",
    "🍕 Sourdough Pizzas",
    "🧊 Signature Cold Brews",
  ];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-cream">
      {/* Background with warm ambient gradients & subtle photo overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={getAssetUrl("/images/hero-cafe.jpg")}
          alt="The Sangameshwar Cafe Cozy Interior"
          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
        />
        {/* Warm multi-layer overlay for crystal-clear readability & film warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/60 md:via-cream/80 md:to-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
      </div>

      {/* Floating Whimsical SVGs (Beans, Leaves, Stars) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-28 left-8 sm:left-24 animate-float opacity-75">
          <CoffeeBeanSvg className="w-6 h-6 text-coffee/80 rotate-12" />
        </div>
        <div className="absolute top-44 right-10 sm:right-32 animate-floatSlow opacity-70">
          <LeafSvg className="w-7 h-7 text-sage -rotate-45" />
        </div>
        <div className="absolute bottom-36 left-12 animate-floatSlow opacity-60">
          <TinyStarSvg className="w-5 h-5 text-beige-dark rotate-12" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float opacity-50">
          <CoffeeBeanSvg className="w-5 h-5 text-coffee/60 -rotate-12" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 max-w-2xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/90 backdrop-blur-md border border-beige/60 shadow-warm-sm">
              <span className="font-handwriting text-lg sm:text-xl text-coffee font-semibold">
                your cozy corner in the city ☕
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-sage/20 text-sage-dark font-medium">
                Pune
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-darkBrown tracking-tight leading-[1.1]">
              The Sangameshwar <br />
              <span className="relative inline-block text-coffee font-normal italic">
                Cafe
                {/* Steam animation above the 'Cafe' word */}
                <span className="absolute -top-7 right-4 flex gap-1 pointer-events-none opacity-80">
                  <span className="w-1 h-5 bg-coffee/40 rounded-full animate-steam-1" />
                  <span className="w-1 h-6 bg-coffee/50 rounded-full animate-steam-2" />
                  <span className="w-1 h-4 bg-coffee/30 rounded-full animate-steam-3" />
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-serif italic text-xl sm:text-2xl text-darkBrown/80 font-medium leading-relaxed">
              Where Every Sip Tells a Story.
            </p>

            {/* Warm narrative paragraph */}
            <p className="text-darkBrown/75 text-sm sm:text-base leading-relaxed max-w-xl">
              Slow mornings, lo-fi beats, velvety artisanal brews, and conversations that stretch into golden hour. Handcrafted with warm passion right beside you.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="px-8 py-3.5 rounded-full bg-darkBrown text-cream font-medium text-base hover:bg-coffee shadow-warm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5 group"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 text-beige group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOrderNow}
                className="px-8 py-3.5 rounded-full bg-cream/90 hover:bg-cream border border-darkBrown/30 text-darkBrown font-medium text-base hover:border-darkBrown shadow-warm-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group backdrop-blur-sm"
              >
                <ShoppingBag className="w-4 h-4 text-coffee group-hover:rotate-12 transition-transform" />
                <span>Order Now</span>
              </button>
            </div>

            {/* Microcopy & Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-darkBrown/70 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sage" />
                <span>100% Arabica Beans</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-coffee" />
                <span>Fresh Oven Bakes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                <span>Open till 11:30 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Gen Z Aesthetic Polaroid Collage */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md h-96 sm:h-[420px]">
              
              {/* Back Polaroid: Reading Nook */}
              <div className="absolute top-2 left-2 sm:left-4 w-52 sm:w-60 bg-cream-light p-3 pb-5 rounded-2xl polaroid-shadow border border-beige/60 -rotate-6 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="aspect-square rounded-xl overflow-hidden mb-2.5 bg-beige/30">
                  <img
                    src={getAssetUrl("/images/gallery/cozy-reading-nook.jpg")}
                    alt="Cozy reading corner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-1">
                  <p className="font-handwriting text-base text-darkBrown font-bold">
                    cozy nooks & books ♡
                  </p>
                  <span className="text-[10px] text-coffee/60">#vibes</span>
                </div>
              </div>

              {/* Front Polaroid: Swan Latte Art */}
              <div className="absolute bottom-4 right-2 sm:right-4 w-56 sm:w-64 bg-cream-light p-3 pb-5 rounded-2xl polaroid-shadow border border-beige/60 rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                {/* Washi tape accent on top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-beige/80 backdrop-blur-sm -rotate-2 rounded-sm shadow-xs border border-beige-dark/30 pointer-events-none" />
                
                <div className="aspect-square rounded-xl overflow-hidden mb-2.5 bg-beige/30">
                  <img
                    src={getAssetUrl("/images/menu/cappuccino.jpg")}
                    alt="Swan Latte Art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-1">
                  <p className="font-handwriting text-base text-darkBrown font-bold">
                    swan latte art ☕✨
                  </p>
                  <span className="text-xs font-semibold text-coffee">₹140</span>
                </div>
              </div>

              {/* Center Floating Sticker / Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-cream/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-darkBrown/20 shadow-warm-lg flex items-center gap-2 animate-pulseSoft">
                <Sparkles className="w-4 h-4 text-coffee" />
                <span className="font-handwriting text-base text-darkBrown font-bold">
                  Sip. Snap. Repeat.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Gen Z Ticker / Infinite Marquee Strip */}
      <div className="relative z-20 w-full mt-6 py-3 bg-darkBrown text-cream overflow-hidden shadow-warm border-y border-beige/30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="mx-4 text-xs sm:text-sm font-medium tracking-wider flex items-center gap-3 text-cream/90"
            >
              <span>{item}</span>
              <span className="text-beige/40">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
