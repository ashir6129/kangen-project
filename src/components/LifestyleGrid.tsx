'use client';

import React from 'react';

interface LifestyleGridProps {
  onNavigate?: (page: string) => void;
}

export const LifestyleGrid: React.FC<LifestyleGridProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-[#EDEEE7] font-sans" id="benefitsmap">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7AD1C4] bg-[#3E4C4C] px-4 py-1.5 rounded-full inline-block border border-[#7AD1C4]/40 shadow-xs">
            Sustainable Eco Living
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#293434] tracking-wide" id="meta-title">
            A Greener Lifestyle with Kangen Water®
          </h2>
          <p className="text-[#576a6a] text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto font-medium" id="meta-desc">
            Minimize consumption, eliminate toxins and live healthier by simply adding water. Kangen Water® is the water that will change your life. Begin your green journey by making Enagic® an integral part of your daily routine. Discover more about these amazing waters and the variety of ways they can help you achieve the cleaner, greener life you deserve.
          </p>
        </div>

        {/* 3-Column Masonry Lifestyle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">

          {/* Column 1: Cooking (Top) & Beauty (Bottom) */}
          <div className="flex flex-col gap-6">
            {/* COOKING */}
            <button
              onClick={() => onNavigate?.('food')}
              className="group relative rounded-2xl overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-md border border-[#3E4C4C]/15 hover:border-[#7AD1C4] transition duration-500 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop"
                alt="Cooking with Kangen Water"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500" />
              <div className="relative z-10 bg-[#1F292E]/90 text-white border border-[#7AD1C4]/40 px-6 py-2.5 rounded-full shadow-xl group-hover:bg-[#7AD1C4] group-hover:text-[#1F292E] transition duration-300">
                <span className="font-serif italic text-lg font-bold drop-shadow-md">Cooking</span>
              </div>
            </button>

            {/* BEAUTY */}
            <button
              onClick={() => onNavigate?.('beauty')}
              className="group relative rounded-2xl overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-md border border-[#3E4C4C]/15 hover:border-[#7AD1C4] transition duration-500 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
                alt="Beauty Care with Kangen Water"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500" />
              <div className="relative z-10 bg-[#1F292E]/90 text-white border border-[#7AD1C4]/40 px-6 py-2.5 rounded-full shadow-xl group-hover:bg-[#7AD1C4] group-hover:text-[#1F292E] transition duration-300">
                <span className="font-serif italic text-lg font-bold drop-shadow-md">Beauty</span>
              </div>
            </button>
          </div>

          {/* Column 2: Center Featured "Benefits of Kangen Water" */}
          <button
            onClick={() => onNavigate?.('water-types')}
            className="group relative rounded-2xl overflow-hidden flex items-center justify-center min-h-[536px] w-full text-left shadow-lg border border-[#3E4C4C]/15 hover:border-[#7AD1C4] transition duration-500 cursor-pointer"
          >
            <img
              src="/images/drink-glass.png"
              alt="Benefits of Kangen Water Glass"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition duration-500" />
            <div className="relative z-10 bg-[#1F292E]/90 text-white border border-[#7AD1C4]/40 text-center py-5 px-6 shadow-2xl rounded-2xl group-hover:bg-[#7AD1C4] group-hover:text-[#1F292E] transition duration-300">
              <span className="font-serif italic text-lg sm:text-xl font-bold leading-snug drop-shadow-md">
                Benefits of<br />Kangen Water®
              </span>
            </div>
          </button>

          {/* Column 3: Cleaning (Top) & Gardening (Bottom) */}
          <div className="flex flex-col gap-6">
            {/* CLEANING */}
            <button
              onClick={() => onNavigate?.('greener-home')}
              className="group relative rounded-2xl overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-md border border-[#3E4C4C]/15 hover:border-[#7AD1C4] transition duration-500 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop"
                alt="Non-Toxic Cleaning"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500" />
              <div className="relative z-10 bg-[#1F292E]/90 text-white border border-[#7AD1C4]/40 px-6 py-2.5 rounded-full shadow-xl group-hover:bg-[#7AD1C4] group-hover:text-[#1F292E] transition duration-300">
                <span className="font-serif italic text-lg font-bold drop-shadow-md">Cleaning</span>
              </div>
            </button>

            {/* GARDENING */}
            <button
              onClick={() => onNavigate?.('garden')}
              className="group relative rounded-2xl overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-md border border-[#3E4C4C]/15 hover:border-[#7AD1C4] transition duration-500 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1000&auto=format&fit=crop"
                alt="Gardening with Kangen Water"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500" />
              <div className="relative z-10 bg-[#1F292E]/90 text-white border border-[#7AD1C4]/40 px-6 py-2.5 rounded-full shadow-xl group-hover:bg-[#7AD1C4] group-hover:text-[#1F292E] transition duration-300">
                <span className="font-serif italic text-lg font-bold drop-shadow-md">Gardening</span>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
