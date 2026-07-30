'use client';

import React from 'react';
import { Droplets, Sparkles, CheckCircle2, Shield, Heart, Coffee } from 'lucide-react';

interface WaterTypesProps {
  onNavigate?: (page: string) => void;
}

const WATER_TYPES = [
  {
    id: 'strong-kangen',
    title: 'Strong Kangen Water',
    ph: 'pH 11.5',
    color: 'bg-purple-600',
    borderColor: 'border-purple-500',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-900',
    badgeColor: 'bg-purple-100 text-purple-800',
    tagline: 'Non-toxic Heavy Duty Cleaning & Pesticide Stripper',
    desc: 'Strong Kangen Water has a detergent effect and preserves hygiene in your daily life. It has strong emulsifying properties that dissolve grease, remove oil-based pesticides from produce, and clean stubborn grime without chemical residue.',
    uses: [
      'Food Prep: Washes off oil-based pesticides, dirt, and chemicals from fruits & veggies.',
      'Cleaning: Cleans cutting boards, dishcloths, range hoods, and grease stains.',
      'Stain Removal: Removes coffee, soy sauce, oil stains, and carpet spots.',
      'Dishes: Uses less soap when washing oily pots and pans.'
    ],
    icon: Shield,
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'kangen-water',
    title: 'Kangen Water®',
    ph: 'pH 8.5 - 9.5',
    color: 'bg-blue-600',
    borderColor: 'border-blue-500',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-900',
    badgeColor: 'bg-blue-100 text-blue-800',
    tagline: 'Optimal Hydration, Cooking & Tea Infusion',
    desc: 'This electrolytic micro-clustered water is rich in hydrogen and alkaline minerals. Perfectly hydrating for daily drinking, bringing out rich flavors in cooking, and infusing tea/coffee with vibrant taste.',
    uses: [
      'Drinking: Drink 2-3 liters daily for superior cellular hydration.',
      'Cooking: Enhances the natural taste of vegetables, soups, and rice.',
      'Tea & Coffee: Micro-clustering extracts rich aroma and color with less coffee grounds/tea.',
      'Plants: Hydrates potted plants and extends fresh cut flower vitality.'
    ],
    icon: Coffee,
    img: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'clean-water',
    title: 'Clean Water',
    ph: 'pH 7.0',
    color: 'bg-teal-600',
    borderColor: 'border-teal-500',
    lightBg: 'bg-teal-50',
    textColor: 'text-teal-900',
    badgeColor: 'bg-teal-100 text-teal-800',
    tagline: 'Neutral Purified Water for Medications & Baby Food',
    desc: 'Purified water free of chlorine, rust, and cloudiness. Neutral pH 7.0 makes it ideal for consuming medication and preparing baby formula.',
    uses: [
      'Baby Food: Safe, pure water for infant formula and cereal.',
      'Medication: Drink with prescription medication for proper body absorption.'
    ],
    icon: CheckCircle2,
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'beauty-water',
    title: 'Slightly Acidic Beauty Water',
    ph: 'pH 6.0',
    color: 'bg-rose-500',
    borderColor: 'border-rose-400',
    lightBg: 'bg-rose-50',
    textColor: 'text-rose-900',
    badgeColor: 'bg-rose-100 text-rose-800',
    tagline: 'Skin Toning, Hair Rinse & Glass Shine',
    desc: 'Slightly acidic water matching skin’s natural pH (5.5 - 6.0). Known for its astringent properties, it tones skin, smooths hair cuticles, and cleans glass streak-free.',
    uses: [
      'Face Washing: Tones pores, tightens skin, and acts as an all-natural astringent.',
      'Hair Care: Rinse hair after shampooing for silky softness and tangle-free shine.',
      'Pet Care: Spray pets before brushing for soft, lustrous fur.',
      'Polishing: Cleans glass, mirrors, and stainless steel streak-free.'
    ],
    icon: Sparkles,
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'strong-acidic',
    title: 'Strong Acidic Water',
    ph: 'pH 2.5',
    color: 'bg-amber-600',
    borderColor: 'border-amber-500',
    lightBg: 'bg-amber-50',
    textColor: 'text-amber-900',
    badgeColor: 'bg-amber-100 text-amber-800',
    tagline: 'Sanitizing, Disinfecting & Hygiene Support',
    desc: 'Strong Acidic Water has powerful sanitizing properties. Used in hospitals, restaurants, and homes to sanitize utensils, countertops, and hands without harsh toxic chemicals.',
    uses: [
      'Sanitizing: Disinfects knives, cutting boards, dish towels, and kitchen counters.',
      'Hygiene: Wash hands, sanitize toothbrush, and rinse mouth.',
      'Commercial Use: Used in salons, dental clinics, and nurseries for sanitization.'
    ],
    icon: Heart,
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop',
  },
];

export const WaterTypesSection: React.FC<WaterTypesProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#EDEEE7] py-14 px-4 sm:px-6 font-sans text-[#3E4C4C]">
      {/* Hero Banner */}
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#7AD1C4]/20 text-[#7AD1C4] text-xs font-bold uppercase tracking-wider border border-[#7AD1C4]/40 shadow-xs">
          Enagic® Electrolyzed Water
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#293434]">
          The 5 Types of Kangen Water®
        </h1>
        <p className="text-[#576a6a] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
          Enagic® water ionizers produce 5 distinct water types through electrolysis. From healthy alkaline drinking water to non-toxic cleaning and sanitizing solutions, discover how water changes your life!
        </p>
      </div>

      {/* Grid of 5 Water Types */}
      <div className="max-w-6xl mx-auto space-y-12">
        {WATER_TYPES.map((water, idx) => {
          const Icon = water.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={water.id}
              className={`rounded-2xl border ${water.borderColor} ${water.lightBg} overflow-hidden shadow-md hover:shadow-lg transition p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white`}
            >
              {/* Text Side */}
              <div className={`md:col-span-7 space-y-4 ${isEven ? 'order-1' : 'order-1 md:order-2'}`}>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`px-3.5 py-1 rounded-full text-xs font-bold text-white ${water.color}`}>
                    {water.ph}
                  </span>
                  <span className={`px-3.5 py-1 rounded-full text-xs font-semibold ${water.badgeColor}`}>
                    {water.tagline}
                  </span>
                </div>

                <h3 className={`font-serif text-2xl sm:text-3xl font-bold ${water.textColor} flex items-center gap-2`}>
                  <Icon className="w-7 h-7 inline-block" /> {water.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {water.desc}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Primary Uses:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                    {water.uses.map((use, uIdx) => (
                      <li key={uIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#7AD1C4] shrink-0 mt-0.5" />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Side */}
              <div className={`md:col-span-5 ${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
                <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200 aspect-4/3">
                  <img
                    src={water.img}
                    alt={water.title}
                    className="w-full h-full object-cover transform hover:scale-108 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#293434]/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white font-serif text-lg font-bold drop-shadow-md">
                      {water.title} ({water.ph})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      {onNavigate && (
        <div className="max-w-3xl mx-auto text-center mt-16 p-8 rounded-2xl bg-[#3E4C4C] text-[#EDEEE7] border border-[#7AD1C4]/30 shadow-xl space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#7AD1C4]">Ready to Experience Kangen Water®?</h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto font-medium">
            Browse our full lineup of Enagic® machines and find the perfect model for your lifestyle.
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="btn-sage-pill uppercase text-xs font-bold tracking-wider px-8 py-3.5 bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] shadow-lg cursor-pointer transition hover:scale-103"
          >
            Browse Products & Pricing
          </button>
        </div>
      )}
    </div>
  );
};
