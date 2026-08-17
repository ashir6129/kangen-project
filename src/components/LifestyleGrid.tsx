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

        {/* 3-Column Masonry Lifestyle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">

          {/* Column 1: Cooking (Top) & Beauty (Bottom) */}
          <div className="flex flex-col gap-6">
            {/* COOKING */}
            <button
              onClick={() => onNavigate?.('food')}
              className="group relative rounded-xs overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-sm border border-slate-200 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop"
                alt="Cooking with Kangen Water"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
              <div className="category-white-box shadow-md rounded-xs">
                <span className="font-serif italic text-lg text-[#333333] font-semibold">Cooking</span>
              </div>
            </button>

            {/* BEAUTY */}
            <button
              onClick={() => onNavigate?.('beauty')}
              className="group relative rounded-xs overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-sm border border-slate-200 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
                alt="Beauty Care with Kangen Water"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />Ingredients
16 oz Sunflower Oil
5.5 oz Potassium Chloride
16 oz distilled Kangen Water (collected with a steam boiler)
40 oz Kangen Water
Essential Oil (optional)
Directions:
Blend Pour the sunflower oil into a crock pot, with the heat on high. In a separate bowl, mix the potassium chloride with the distilled Kangen Water®. This mixture will become a lye. Add the lye to the crock pot. Mix together using a hand-held stick blender on low until you create a paste. Pour the regular Kangen Water® into the crock pot and combine using the stick blender.

Cook Check the crock pot every hour. If the paste is separating, mix it with the stick blender. If not, stir with a wooden spoon. The consistency will change from a paste to something resembling applesauce. If it ever looks sticky and hard like taffy, use a potato masher to break it up. Once the mixture resembles petroleum jelly, your liquid castile soap is almost done.

Test Now you must test the soap to see if it is done. Boil some Kangen Water® in a kettle and measure 2 oz into a clear measuring cup along with 1 oz of the soap mixture. Stir it with a spoon until the soap dissolves in the water. If it is cloudy, the soap is ready. If the mixture appears milky, the soap has not cooked long enough and needs to go back to the crock pot.

Once the consistency of the mixture is a bit cloudy, you can add a few drops of essential oil for a light scent. 6-8 drops is usually enough.

Pour warm liquid castile soap into bottles and allow to cool before using.

No harsh chemicals!
No cocamidopropyl betaine, sulfates (SLS, SLES, SCS), formaldehyde, salicylates, parabens, phosphates, MEA, DEA, TEA, petroleum-based ingredients, animal by-products, perfumes, dyes or caustics, non-toxic, hypoallergenic, gluten-free, biodegradable, cruelty-free
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
              <div className="category-white-box shadow-md rounded-xs">
                <span className="font-serif italic text-lg text-[#333333] font-semibold">Beauty</span>
              </div>
            </button>
          </div>

          {/* Column 2: Center Featured "Benefits of Kangen Water" (User-Provided Glass Photo) */}
          <button
            onClick={() => onNavigate?.('water-types')}
            className="group relative rounded-xs overflow-hidden flex items-center justify-center min-h-[536px] w-full text-left shadow-sm border border-slate-200 cursor-pointer"
          >
            <img
              src="/images/drink-glass.png"
              alt="Benefits of Kangen Water Glass"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition" />
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
              className="group relative rounded-xs overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-sm border border-slate-200 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop"
                alt="Non-Toxic Cleaning"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
              <div className="category-white-box shadow-md rounded-xs">
                <span className="font-serif italic text-lg text-[#333333] font-semibold">Cleaning</span>
              </div>
            </button>

            {/* GARDENING */}
            <button
              onClick={() => onNavigate?.('garden')}
              className="group relative rounded-xs overflow-hidden flex items-center justify-center h-64 w-full text-left shadow-sm border border-slate-200 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1000&auto=format&fit=crop"
                alt="Lush Gardening with Kangen Water"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
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
