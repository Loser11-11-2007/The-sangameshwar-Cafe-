import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Coffee, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../menuData';
import { CoffeeBeanSvg } from './Decorations';

export default function Navbar({
  activePage,
  setActivePage,
  cartCount,
  onOpenCart,
  selectedCategory,
  setSelectedCategory,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'About Us', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-warm border-b border-beige/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-darkBrown text-cream flex items-center justify-center shadow-warm group-hover:scale-105 transition-transform">
              <CoffeeBeanSvg className="w-5 h-5 text-beige" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg sm:text-xl text-darkBrown tracking-tight leading-none block">
                The Sangameshwar Cafe
              </span>
              <span className="font-handwriting text-sm text-coffee tracking-wide leading-none mt-0.5 block">
                fresh brewed with love ♡
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-darkBrown text-cream shadow-warm-sm'
                      : 'text-darkBrown/80 hover:text-darkBrown hover:bg-beige/30'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

            {/* Order Now Pill Button */}
            <button
              onClick={onOpenCart}
              className="ml-3 px-5 py-2.5 rounded-full bg-darkBrown text-cream hover:bg-coffee text-sm font-medium flex items-center gap-2 shadow-warm hover:-translate-y-0.5 transition-all duration-200 group relative"
            >
              <ShoppingBag className="w-4 h-4 text-beige group-hover:rotate-12 transition-transform" />
              <span>Order Now</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-sage text-white rounded-full ml-0.5 animate-pulseSoft">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Right Action Area */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenCart}
              className="p-2.5 rounded-full bg-darkBrown text-cream hover:bg-coffee relative shadow-warm focus:outline-none"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-sage text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-cream-dark/80 text-darkBrown border border-beige/60 hover:bg-beige/40 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-darkBrown/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-4/5 max-w-xs h-full bg-cream border-l border-beige shadow-warm-xl flex flex-col justify-between p-6 z-10 animate-in slide-in-from-right duration-300">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-beige/50">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-darkBrown text-cream flex items-center justify-center shadow-warm">
                    <CoffeeBeanSvg className="w-4 h-4 text-beige" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-base text-darkBrown">
                      The Sangameshwar
                    </span>
                    <span className="font-handwriting text-xs text-coffee block">
                      your cozy corner ☕
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-beige/30 text-darkBrown"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="py-6 space-y-2">
                {navLinks.map((link) => {
                  const isActive = activePage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-2xl text-base font-medium flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-darkBrown text-cream shadow-warm-sm'
                          : 'text-darkBrown hover:bg-beige/30'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-beige" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom info in drawer */}
            <div className="pt-6 border-t border-beige/50 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full py-3 px-4 rounded-full bg-darkBrown text-cream font-medium flex items-center justify-center gap-2 shadow-warm"
              >
                <ShoppingBag className="w-4 h-4 text-beige" />
                <span>Open Cart ({cartCount})</span>
              </button>

              <div className="text-center text-xs text-coffee/80 space-y-1">
                <p>{CAFE_INFO.openingHours.weekdays}</p>
                <p className="font-handwriting text-sm text-darkBrown">
                  made with ☕ & love in Pune
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
