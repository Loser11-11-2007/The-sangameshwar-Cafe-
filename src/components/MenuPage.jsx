import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, X, ChevronRight } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../menuData';
import ItemCard from './ItemCard';
import { VegBadge } from './Decorations';

export default function MenuPage({
  selectedCategory,
  setSelectedCategory,
  cartItems,
  onAddToCart,
  onUpdateQuantity,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'non-veg'

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Search filter
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Dietary filter
      const matchesDietary =
        dietaryFilter === 'all'
          ? true
          : dietaryFilter === 'veg'
          ? item.isVeg
          : !item.isVeg;

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  const getQuantity = (id) => {
    const found = cartItems.find((ci) => ci.id === id);
    return found ? found.quantity : 0;
  };

  const activeCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="pt-24 pb-28 min-h-screen bg-cream">
      
      {/* Menu Page Hero / Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-dark border border-beige/60 text-xs font-semibold text-coffee shadow-warm-sm mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>HANDCRAFTED RECIPES</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-darkBrown tracking-tight">
          The Sangameshwar Menu
        </h1>
        <p className="text-darkBrown/70 text-sm sm:text-base mt-2 max-w-xl font-handwriting text-xl text-coffee">
          fresh brewed coffee, oven-baked goodness & cozy plates ♡
        </p>
      </div>

      {/* Sticky Filter & Category Navigation Bar */}
      <div className="sticky top-16 z-30 bg-cream/95 backdrop-blur-md border-y border-beige/50 shadow-warm-sm py-3 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          {/* Top row: Search and Veg/Non-Veg Toggles */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-coffee/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee, pizza, desserts..."
                className="w-full pl-10 pr-9 py-2 rounded-full bg-cream-light border border-beige/80 text-sm text-darkBrown placeholder:text-darkBrown/40 focus:outline-none focus:ring-2 focus:ring-darkBrown/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-darkBrown/60 hover:text-darkBrown"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dietary Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-cream-dark p-1 rounded-full border border-beige/60 self-start sm:self-auto">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-darkBrown text-cream shadow-warm-sm'
                    : 'text-darkBrown hover:text-coffee'
                }`}
              >
                All
              </button>

              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  dietaryFilter === 'veg'
                    ? 'bg-sage text-white shadow-warm-sm'
                    : 'text-darkBrown hover:text-sage-dark'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-sage" />
                <span>Veg Only</span>
              </button>

              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-terracotta text-white shadow-warm-sm'
                    : 'text-darkBrown hover:text-terracotta'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                <span>Non-Veg</span>
              </button>
            </div>

          </div>

          {/* Bottom row: Category Pill Bar (horizontally scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-darkBrown text-cream shadow-warm'
                  : 'bg-cream-light border border-beige/60 text-darkBrown hover:border-darkBrown/40'
              }`}
            >
              ✨ All Items ({MENU_ITEMS.length})
            </button>

            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-darkBrown text-cream shadow-warm'
                      : 'bg-cream-light border border-beige/60 text-darkBrown hover:border-darkBrown/40'
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-cream/20 text-cream' : 'bg-beige/40 text-darkBrown/70'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Main Items Listing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Header Meta */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-beige/40">
          <div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-darkBrown">
              {selectedCategory === 'all' ? 'All Handcrafted Delights' : activeCategoryObj?.name}
            </h2>
            <p className="text-xs sm:text-sm text-darkBrown/60 mt-0.5">
              {selectedCategory === 'all'
                ? 'Showing every handcrafted item from our Pune kitchen'
                : activeCategoryObj?.desc}
            </p>
          </div>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cream-dark text-darkBrown border border-beige/60">
            {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-24 bg-cream-light rounded-3xl border border-beige/60 p-8 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-cream-dark mx-auto flex items-center justify-center text-3xl mb-4">
              ☕
            </div>
            <h3 className="font-serif font-bold text-xl text-darkBrown mb-2">
              No matching items found
            </h3>
            <p className="text-sm text-darkBrown/70 mb-6">
              We couldn't find anything matching "{searchQuery}". Try searching for something else or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                setSelectedCategory('all');
              }}
              className="px-6 py-2.5 rounded-full bg-darkBrown text-cream text-xs font-semibold hover:bg-coffee transition-colors shadow-warm"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Grid: 4 cols on desktop, 2 on tablet, 1-2 on mobile */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                cartQuantity={getQuantity(item.id)}
                onAddToCart={onAddToCart}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
