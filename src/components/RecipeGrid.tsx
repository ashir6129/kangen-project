'use client';

import React from 'react';

interface RecipeCard {
  title: string;
  desc: string;
  image: string;
  link: string;
}

const RECIPES: RecipeCard[] = [
  {
    title: 'Enagic Non-Toxic Hand Sanitizer Recipe',
    desc: 'Have you ever investigated what is in your antibacterial products? Try our natural Strong Acidic Water recipe instead.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop',
    link: '#shop',
  },
  {
    title: 'Cooking with Kangen Water®',
    desc: 'Learn how to integrate Kangen Water® into your favorite recipes by simply replacing tap water with one of the 3 different types of Kangen Water® for cooking.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1000&auto=format&fit=crop',
    link: '#shop',
  },
  {
    title: 'Powerful Stain Remover',
    desc: 'Stains happen. With Strong Kangen Water® make stains disappear like magic without harsh chemicals.',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=1000&auto=format&fit=crop',
    link: '#shop',
  },
];

export const RecipeGrid: React.FC = () => {
  return (
    <section className="py-16 bg-[#EDEEE7] font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7AD1C4] bg-[#3E4C4C] px-4 py-1.5 rounded-full inline-block border border-[#7AD1C4]/40 shadow-xs">
            Eco-Friendly Tips & Recipes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#293434]">
            Easier than ever to live eco-friendly!
          </h2>
          <p className="text-[#576a6a] text-xs sm:text-sm leading-relaxed font-medium">
            Your Kangen® Machine is designed to enhance your life by making it easier than ever to live the eco-friendly life you desire. Here are just a few of the countless ways Kangen Water® can change your life!
          </p>
        </div>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECIPES.map((recipe, index) => (
            <div
              key={index}
              className="group modern-card flex flex-col cursor-pointer"
            >
              {/* Card Image */}
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#293434]/40 to-transparent opacity-60 group-hover:opacity-20 transition" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#293434] group-hover:text-[#47a295] transition-colors leading-snug">
                    {recipe.title}
                  </h3>
                  <p className="text-[#576a6a] text-xs leading-relaxed font-sans">
                    {recipe.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#3E4C4C] group-hover:text-[#7AD1C4] transition">
                    Explore Recipe →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
