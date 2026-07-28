'use client';

import React from 'react';

interface LifestyleGridProps {
  onNavigate?: (page: string) => void;
}

export const LifestyleGrid: React.FC<LifestyleGridProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-white font-sans" id="benefitsmap">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#333333] tracking-wide" id="meta-title">
            A Greener Lifestyle with Kangen Water
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto" id="meta-desc">
            Minimize consumption, eliminate toxins and live healthier by simply adding water. Kangen Water is the water that will change your life. Begin your green journey by making Enagic® an integral part of your daily routine. Discover more about these amazing waters and the variety of ways they can help you achieve the cleaner, greener life you deserve.
          </p>
        </div>

        {/* 3-Column Masonry Lifestyle Grid matching drinkfromheaven.com */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">

          {/* Column 1: Cooking (Top) & Beauty (Bottom) */}
          <div className="flex flex-col gap-6">
            {/* COOKING */}
            <button
              onClick={() => onNavigate?.('food')}
              className="group relative rounded-xs overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-xs border border-slate-200 cursor-pointer"
            >
              <img
                src="https://www.drinkfromheaven.com/affsites/eco/images/blog/cook.jpg?v=3"
                alt="Cooking"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="category-white-box shadow-md rounded-xs">
                <span className="font-serif italic text-lg text-[#333333] font-semibold">Cooking</span>
              </div>
            </button>

            {/* BEAUTY */}
            <button
              onClick={() => onNavigate?.('beauty')}
              className="group relative rounded-xs overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-xs border border-slate-200 cursor-pointer"
            >
              <img
                src="https://www.drinkfromheaven.com/affsites/eco/images/blog/beauty.jpg?v=3"
                alt="Beauty"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="category-white-box shadow-md rounded-xs">
                <span className="font-serif italic text-lg text-[#333333] font-semibold">Beauty</span>
              </div>
            </button>
          </div>

          {/* Column 2: Center Featured "Benefits of Kangen Water" (Tall Card) */}
          <button
            onClick={() => onNavigate?.('water-types')}
            className="group relative rounded-xs overflow-hidden flex items-center justify-center min-h-[536px] w-full text-left shadow-xs border border-slate-200 cursor-pointer"
          >
            <img
              src="https://www.drinkfromheaven.com/affsites/eco/images/blog/drink.jpg?v=3"
              alt="Benefits of Kangen Water"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="category-white-box text-center py-6 px-4 shadow-lg rounded-xs">
              <span className="font-serif italic text-lg sm:text-xl text-[#333333] font-semibold leading-snug">
                Benefits of<br />Kangen Water®
              </span>
            </div>
          </button>

          {/* Column 3: Cleaning (Top) & Gardening (Bottom) */}
          <div className="flex flex-col gap-6">
            {/* CLEANING */}
            <button
              onClick={() => onNavigate?.('greener-home')}
              className="group relative rounded-xs overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-xs border border-slate-200 cursor-pointer"
            >
              <img
                src="https://www.drinkfromheaven.com/affsites/eco/images/blog/clean.jpg?v=3"
                alt="Cleaning"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="category-white-box shadow-md rounded-xs">
                <span className="font-serif italic text-lg text-[#333333] font-semibold">Cleaning</span>
              </div>
            </button>

            {/* GARDENING */}
            <button
              onClick={() => onNavigate?.('garden')}
              className="group relative rounded-xs overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-xs border border-slate-200 cursor-pointer"
            >
              <img
                src="https://www.drinkfromheaven.com/affsites/eco/images/blog/garden.jpg?v=3"
                alt="Gardening"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="category-white-box shadow-md rounded-xs">
                <span className="font-serif italic text-lg text-[#333333] font-semibold">Gardening</span>
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
