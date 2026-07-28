'use client';

import React from 'react';

interface LifestyleGridProps {
  onNavigate?: (page: string) => void;
}

export const LifestyleGrid: React.FC<LifestyleGridProps> = ({ onNavigate }) => {
  return (
    <section className="py-14 bg-white font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#333333]">
            A Greener Lifestyle with Kangen Water®
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Minimize consumption, eliminate toxins and live healthier by simply adding water. Kangen Water® is the water that will change your life. Begin your green journey by making Enagic® an integral part of your daily routine. Discover more about these amazing waters and the variety of ways they can help you achieve the cleaner, greener life you deserve.
          </p>
        </div>

        {/* 3-Column Lifestyle Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          {/* Col 1: Cooking (Top) & Beauty (Bottom) */}
          <div className="flex flex-col gap-6">
            <button
              onClick={() => onNavigate?.('food')}
              className="group relative rounded-sm overflow-hidden flex items-center justify-center h-64 w-full text-left"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop')" }}
              />
              <div className="category-white-box">
                <span className="font-serif italic text-lg text-[#333333] font-normal">Cooking</span>
              </div>
            </button>

            <button
              onClick={() => onNavigate?.('beauty')}
              className="group relative rounded-sm overflow-hidden flex items-center justify-center h-64 w-full text-left"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512290900673-7002004117b9?q=80&w=800&auto=format&fit=crop')" }}
              />
              <div className="category-white-box">
                <span className="font-serif italic text-lg text-[#333333] font-normal">Beauty</span>
              </div>
            </button>
          </div>

          {/* Col 2: Center Tall Benefits Tile */}
          <button
            onClick={() => onNavigate?.('shop')}
            className="group relative rounded-sm overflow-hidden flex items-center justify-center min-h-[536px] w-full text-left"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=1200&auto=format&fit=crop')" }}
            />
            <div className="category-white-box text-center py-6 px-4">
              <span className="font-serif italic text-lg sm:text-xl text-[#333333] font-normal leading-snug">
                Benefits of<br />Kangen Water®
              </span>
            </div>
          </button>

          {/* Col 3: Cleaning (Top) & Gardening (Bottom) */}
          <div className="flex flex-col gap-6">
            <button
              onClick={() => onNavigate?.('greener-home')}
              className="group relative rounded-sm overflow-hidden flex items-center justify-center h-64 w-full text-left"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop')" }}
              />
              <div className="category-white-box">
                <span className="font-serif italic text-lg text-[#333333] font-normal">Cleaning</span>
              </div>
            </button>

            <button
              onClick={() => onNavigate?.('garden')}
              className="group relative rounded-sm overflow-hidden flex items-center justify-center h-64 w-full text-left"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop')" }}
              />
              <div className="category-white-box">
                <span className="font-serif italic text-lg text-[#333333] font-normal">Gardening</span>
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
