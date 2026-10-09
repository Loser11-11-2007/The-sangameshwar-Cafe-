import React, { useState } from 'react';
import { ZoomIn, Camera, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, CAFE_INFO } from '../menuData';
import LightboxModal from './LightboxModal';
import { InstagramSvg } from './Decorations';
import { getAssetUrl } from '../utils/assetUrl';

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevPhoto = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
  };

  const nextPhoto = () => {
    setLightboxIndex((prev) => (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8EFE4] relative border-y border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cream border border-beige/60 text-xs font-semibold text-coffee shadow-warm-sm">
            <Camera className="w-3.5 h-3.5" />
            <span>PHOTO-OP CORNER</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-darkBrown tracking-tight">
            Vibes, Sips & Memories
          </h2>

          <p className="text-darkBrown/75 text-sm sm:text-base leading-relaxed">
            Our cafe is made for golden hour conversations, quiet reading dates, and snap-worthy moments.
          </p>

          {/* Instagram Tagline with Follow Button */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <span className="font-handwriting text-lg text-coffee font-bold">
              Tag us {CAFE_INFO.instagram} 📸
            </span>
            <a
              href={CAFE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-darkBrown text-cream text-xs font-semibold hover:bg-coffee transition-colors shadow-warm-sm"
            >
              <InstagramSvg className="w-3.5 h-3.5" />
              <span>Follow Us</span>
            </a>
          </div>
        </div>

        {/* Gallery Grid (Aesthetic Staggered Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            // Give some items taller heights for visual interest
            const isTall = index === 0 || index === 5;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-warm border border-beige/60 bg-cream ${
                  isTall ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img
                  src={getAssetUrl(item.image)}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Warm Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/80 via-darkBrown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 text-cream">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-beige mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm sm:text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-handwriting text-xs sm:text-sm text-cream/90 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-xs text-beige font-medium">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Tap to view</span>
                  </div>
                </div>

                {/* Subtle corner badge for Gen Z aesthetic */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/80 backdrop-blur-sm text-darkBrown flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Sparkles className="w-4 h-4 text-coffee" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  );
}
