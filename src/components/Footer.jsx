import React from 'react';
import { MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { CAFE_INFO, CATEGORIES } from '../menuData';
import { CoffeeBeanSvg, LeafSvg, InstagramSvg, FacebookSvg } from './Decorations';

export default function Footer({ onNavigate, onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkBrown text-cream pt-16 pb-12 relative overflow-hidden border-t border-beige/20">
      
      {/* Decorative leaf element */}
      <div className="absolute bottom-6 left-6 pointer-events-none opacity-10">
        <LeafSvg className="w-24 h-24 text-sage" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-cream/15">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-cream text-darkBrown flex items-center justify-center shadow-warm">
                <CoffeeBeanSvg className="w-5 h-5 text-coffee" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-cream tracking-tight block">
                  {CAFE_INFO.name}
                </span>
                <span className="font-handwriting text-sm text-beige/80 block">
                  {CAFE_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream/75 leading-relaxed max-w-sm">
              Your cozy neighborhood sanctuary for freshly pulled espresso, sourdough woodfired pizzas, and soul-comforting desserts. Made with passion for every dreamer.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream hover:text-darkBrown flex items-center justify-center transition-colors text-cream"
                aria-label="Instagram"
              >
                <InstagramSvg className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${CAFE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors text-cream"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream hover:text-darkBrown flex items-center justify-center transition-colors text-cream"
                aria-label="Facebook"
              >
                <FacebookSvg className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-beige tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream/80">
              {['Home', 'Menu', 'About Us', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link.toLowerCase().replace(' ', ''))}
                    className="hover:text-cream transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-beige tracking-wide">
              Cravings
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream/80">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onNavigate('menu');
                      onSelectCategory(cat.id);
                    }}
                    className="hover:text-cream transition-colors text-left"
                  >
                    {cat.emoji} {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Location */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-beige tracking-wide">
              Hours & Location
            </h4>
            <div className="text-xs sm:text-sm text-cream/80 space-y-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=The+Sangameshwaram+Cafe+VIIT+College+Yashodhan+Society+Kapil+Nagar+Kondhwa+Budruk+Pune+Maharashtra+411048"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-snug block hover:text-cream text-cream/80 transition-colors"
              >
                The Sangameshwaram Cafe<br />
                VIIT College, Yashodhan Society,<br />
                Kapil Nagar, Kondhwa Budruk,<br />
                Pune, Maharashtra 411048
              </a>
              <div className="pt-2 text-xs text-beige/90 space-y-1">
                <p>Weekdays: {CAFE_INFO.openingHours.weekdays}</p>
                <p>Weekends: {CAFE_INFO.openingHours.weekends}</p>
              </div>
              <p className="pt-1 text-xs text-cream/60">
                Phone: {CAFE_INFO.phone}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p className="font-handwriting text-base text-cream/90">
            Made with ☕ & love in Pune • © {new Date().getFullYear()} {CAFE_INFO.name}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
