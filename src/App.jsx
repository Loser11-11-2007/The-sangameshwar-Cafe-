import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularItems from './components/PopularItems';
import CategoryTiles from './components/CategoryTiles';
import DessertShowcase from './components/DessertShowcase';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import CartDrawer from './components/CartDrawer';
import FloatingCartButton from './components/FloatingCartButton';
import PageLoader from './components/PageLoader';
import { MENU_ITEMS } from './menuData';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home'); // 'home' | 'menu' | 'about' | 'gallery' | 'contact'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('sangameshwar_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sangameshwar_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  // Cart operations
  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((ci) => ci.id === item.id);
      if (exists) {
        return prev.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    setCartItems((prev) => {
      if (newQty <= 0) {
        return prev.filter((ci) => ci.id !== id);
      }
      return prev.map((ci) =>
        ci.id === id ? { ...ci, quantity: newQty } : ci
      );
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Navigation helpers
  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    setActivePage('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreMenu = () => {
    setSelectedCategory('all');
    setActivePage('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // The 8 Popular Best-Sellers for Home Page
  const popularBestSellers = MENU_ITEMS.filter((item) => item.isPopular);

  return (
    <div className="relative min-h-screen bg-cream selection:bg-beige/60 selection:text-darkBrown text-darkBrown flex flex-col justify-between">
      
      {/* Short Tasteful Initial Page Loader */}
      {loading && <PageLoader onFinish={() => setLoading(false)} />}

      {/* Sticky Header / Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onExploreMenu={handleExploreMenu}
              onOrderNow={() => setIsCartOpen(true)}
            />

            {/* 2. Popular Items (8 Best Sellers) */}
            <PopularItems
              popularItems={popularBestSellers}
              cartItems={cartItems}
              onAddToCart={handleAddToCart}
              onUpdateQuantity={handleUpdateQuantity}
              onViewAllMenu={handleExploreMenu}
            />

            {/* 3. Coffee & Food Categories */}
            <CategoryTiles onSelectCategory={handleSelectCategory} />

            {/* 4. Cakes & Desserts Showcase */}
            <DessertShowcase
              onSelectCategory={handleSelectCategory}
              onAddToCart={handleAddToCart}
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
            />

            {/* 5. Café Photo Gallery */}
            <GallerySection />

            {/* 6. Customer Reviews */}
            <ReviewsSection />

            {/* 7. Location & Contact */}
            <LocationContact />
          </>
        )}

        {activePage === 'menu' && (
          <MenuPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            onUpdateQuantity={handleUpdateQuantity}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onExploreMenu={handleExploreMenu} />
        )}

        {activePage === 'gallery' && (
          <div className="pt-16">
            <GallerySection />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="pt-16">
            <LocationContact />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCategory={handleSelectCategory}
      />

      {/* WhatsApp Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onExploreMenu={handleExploreMenu}
      />

      {/* Mobile Floating Cart Indicator */}
      <FloatingCartButton
        cartCount={totalCartCount}
        totalAmount={totalCartAmount}
        onClick={() => setIsCartOpen(true)}
      />

    </div>
  );
}
