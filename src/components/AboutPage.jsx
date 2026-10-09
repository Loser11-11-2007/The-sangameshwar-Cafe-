import React from 'react';
import { Sparkles, Heart, Coffee, ShieldCheck, Flame, Users } from 'lucide-react';
import { CAFE_INFO } from '../menuData';
import { CoffeeBeanSvg, LeafSvg } from './Decorations';

export default function AboutPage({ onExploreMenu }) {
  const values = [
    {
      icon: Coffee,
      title: "Artisanal & Handcrafted",
      desc: "Every single espresso shot is weighed and extracted to golden standards using 100% estate-grown Arabica beans.",
    },
    {
      icon: Heart,
      title: "Cozy Pune Roots",
      desc: "Conceived as a haven near VIIT College, Kondhwa where students, creators, and families feel instantly at home.",
    },
    {
      icon: Flame,
      title: "Fresh Daily Oven Bakes",
      desc: "Our sourdough bases, chocolate lava centers, and fresh brioche buns are made fresh every single morning.",
    },
    {
      icon: Users,
      title: "Community & Slow Living",
      desc: "No rush, no corporate timers. Cozy velvet chairs, abundant power sockets, and soulful lo-fi playlists.",
    },
  ];

  return (
    <div className="pt-24 pb-28 min-h-screen bg-cream">
      
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-dark border border-beige/60 text-xs font-semibold text-coffee shadow-warm-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR JOURNEY & ROOTS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-darkBrown tracking-tight">
            A Story Brewed in Pune
          </h1>
          <p className="font-handwriting text-2xl text-coffee">
            where conversations linger longer than coffees ♡
          </p>
        </div>
      </div>

      {/* Main Narrative & Visual Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5 text-darkBrown/80 leading-relaxed text-sm sm:text-base">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-darkBrown">
              How The Sangameshwar Cafe Came to Life
            </h2>
            <p>
              It started with a simple longing: we wanted a space in Pune that didn't feel rushed, cold, or generic. A place with the aroma of freshly toasted hazelnuts and buttered garlic baguettes drifting through sun-drenched windows.
            </p>
            <p>
              Located along the vibrant college corridor in Kondhwa, <strong className="text-darkBrown">The Sangameshwar Cafe</strong> opened its doors as a tribute to daydreamers, night owls, exam warriors, and best friends seeking a comforting haven.
            </p>
            <p className="italic font-serif text-darkBrown/90 bg-beige/20 p-4 rounded-2xl border-l-4 border-coffee">
              "We don't just sell coffee; we craft peaceful pauses in people's busy days."
            </p>
            <div className="pt-2">
              <button
                onClick={onExploreMenu}
                className="px-6 py-3 rounded-full bg-darkBrown text-cream font-medium text-sm hover:bg-coffee shadow-warm transition-all"
              >
                Taste the Story (View Menu)
              </button>
            </div>
          </div>

          {/* Photo Collage on Right */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-warm border border-beige/50">
                  <img
                    src="/images/gallery/cozy-reading-nook.jpg"
                    alt="Cafe Reading Nook"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-cream-light p-4 rounded-2xl border border-beige/60 text-center">
                  <span className="font-serif font-extrabold text-2xl text-darkBrown block">100%</span>
                  <span className="text-xs text-coffee font-medium">Arabica Estate Coffee</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-darkBrown text-cream p-4 rounded-2xl text-center shadow-warm">
                  <span className="font-serif font-extrabold text-2xl text-beige block">50K+</span>
                  <span className="text-xs text-cream/80 font-medium">Cups Poured With Love</span>
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-warm border border-beige/50">
                  <img
                    src="/images/menu/cappuccino.jpg"
                    alt="Handcrafted Coffee"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Cafe Values Grid */}
        <div className="pt-12 border-t border-beige/40">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-darkBrown">
              What We Believe In
            </h3>
            <p className="text-xs sm:text-sm text-darkBrown/70 mt-1">
              Every detail is considered with intention and tenderness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-cream-light p-6 rounded-3xl border border-beige/60 shadow-warm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-coffee border border-beige/50 mb-4 shadow-warm-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-darkBrown mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs text-darkBrown/70 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
