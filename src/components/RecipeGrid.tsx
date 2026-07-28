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
    title: 'Kangen® Hand Sanitizer',
    desc: 'The dangers of triclosan are well known and documented. Reduce your exposure to this harmful chemical by making your own Kangen® Hand Sanitizer.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop',
    link: '#shop',
  },
  {
    title: 'Cooking with Kangen Water®',
    desc: 'Learn how to integrate Kangen Water® into your favorite recipes by simply replacing tap water with one of the 3 different types of Kangen Water® for cooking.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
    link: '#shop',
  },
  {
    title: 'Powerful Stain Remover',
    desc: 'Stains happen. With Strong Kangen Water® make stains disappear like magic without harsh chemicals.',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1000&auto=format&fit=crop',
    link: '#shop',
  },
];

export const RecipeGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#333333]">
            Easier than ever to live eco-friendly!
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Your Kangen® Machine is designed to enhance your life by making it easier than ever to live the eco-friendly life you desire. Here are just a few of the countless ways Kangen Water® can change your life!
          </p>
        </div>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECIPES.map((recipe, index) => (
            <div
              key={index}
              className="group bg-slate-50 overflow-hidden border border-slate-200/80 rounded-xs shadow-xs hover:shadow-md transition duration-300 flex flex-col cursor-pointer"
            >
              {/* Card Image */}
              <div className="h-52 overflow-hidden bg-slate-100">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#333333] group-hover:text-emerald-700 transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {recipe.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
