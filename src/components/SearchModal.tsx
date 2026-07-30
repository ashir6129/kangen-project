'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Droplets, Sparkles, ShoppingBag, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onNavigate?: (page: string, articleId?: string) => void;
}

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Product' | 'Water Type' | 'Recipe' | 'Article';
  tag: string;
  img?: string;
  pageTarget: string;
  articleTarget?: string;
}

const WATER_TYPES_SEARCH: SearchItem[] = [
  {
    id: 'w-1',
    title: 'Strong Kangen Water® (pH 11.5)',
    subtitle: 'Powerful emulsifier that dissolves oil, removes pesticides from produce, and cleans heavy grease.',
    category: 'Water Type',
    tag: '11.5 pH',
    pageTarget: 'water-types',
  },
  {
    id: 'w-2',
    title: 'Kangen Water® (pH 8.5 - 9.5)',
    subtitle: 'Delicious, micro-clustered, antioxidant-rich alkaline drinking water for ultimate daily hydration.',
    category: 'Water Type',
    tag: '8.5-9.5 pH',
    pageTarget: 'water-types',
  },
  {
    id: 'w-3',
    title: 'Clean Water (pH 7.0)',
    subtitle: 'Purified, chlorine-free neutral water ideal for baby formula and taking prescription medications.',
    category: 'Water Type',
    tag: '7.0 pH',
    pageTarget: 'water-types',
  },
  {
    id: 'w-4',
    title: 'Beauty Water (pH 6.0)',
    subtitle: 'Slightly acidic water matching human skin pH. Perfect facial toner, hair conditioner, and skin mist.',
    category: 'Water Type',
    tag: '6.0 pH',
    pageTarget: 'water-types',
  },
  {
    id: 'w-5',
    title: 'Strong Acidic Water (pH 2.5)',
    subtitle: 'Natural non-toxic disinfectant for kitchen cutting boards, sanitizing hands, and household surfaces.',
    category: 'Water Type',
    tag: '2.5 pH',
    pageTarget: 'water-types',
  },
  {
    id: 'w-6',
    title: 'Anespa Mineral Ionized Spa Water',
    subtitle: 'Removes chlorine and heavy metals for luxurious bath and shower mineral rejuvenation.',
    category: 'Water Type',
    tag: 'Shower Spa',
    pageTarget: 'water-types',
  },
];

const RECIPES_SEARCH: SearchItem[] = [
  {
    id: 'r-1',
    title: 'Beauty Water Hair Conditioner',
    subtitle: '1 cup Beauty Water (6.0 pH) + 1 egg yolk + 1 tsp Acai Berry or Sweet Almond Oil for silky smooth hair.',
    category: 'Recipe',
    tag: 'Beauty DIY',
    pageTarget: 'greener-beauty-detail',
    articleTarget: 'beauty-detail-4',
  },
  {
    id: 'r-2',
    title: 'Enagic Non-Toxic Hand Sanitizer',
    subtitle: 'Strong Acidic Water (2.5 pH) + 10 drops Tea Tree or Peppermint Essential Oil in a mist bottle.',
    category: 'Recipe',
    tag: 'Sanitizer DIY',
    pageTarget: 'greener-beauty-detail',
    articleTarget: 'beauty-detail-4',
  },
  {
    id: 'r-3',
    title: 'Produce Pesticide Emulsifier Soak',
    subtitle: 'Soak fresh fruits & vegetables in 11.5 Strong Kangen Water to strip wax and oil-based pesticides.',
    category: 'Recipe',
    tag: 'Food Wash',
    pageTarget: 'greener-food-detail',
    articleTarget: 'food-detail-1',
  },
  {
    id: 'r-4',
    title: 'Non-Toxic Dish & Stove Degreaser',
    subtitle: 'Mix 11.5 Strong Kangen Water with liquid castile soap to break down heavy stove grease effortlessly.',
    category: 'Recipe',
    tag: 'Home Cleaning',
    pageTarget: 'greener-home-detail',
    articleTarget: 'detail-3',
  },
  {
    id: 'r-5',
    title: 'Natural Pet Disinfectant Spray',
    subtitle: 'Gentle 2.5 pH Strong Acidic Water mist to sanitize paws, pet toys, and neutralize odor safely.',
    category: 'Recipe',
    tag: 'Pet Care',
    pageTarget: 'greener-pet-detail',
    articleTarget: 'pet-detail-1',
  },
  {
    id: 'r-6',
    title: 'Acid-Loving Garden Soil Acidifier',
    subtitle: 'Use 5.0 - 6.0 pH Beauty Water to hydrate blueberries, roses, and azaleas for optimal growth.',
    category: 'Recipe',
    tag: 'Garden Care',
    pageTarget: 'greener-garden-detail',
    articleTarget: 'garden-detail-1',
  },
];

const ARTICLES_SEARCH: SearchItem[] = [
  {
    id: 'a-1',
    title: 'A Greener Home: Chemical-Free Living',
    subtitle: 'Replace toxic household cleaners with Enagic 2.5 pH and 11.5 pH specialty waters.',
    category: 'Article',
    tag: 'Greener Home',
    pageTarget: 'greener-home-detail',
    articleTarget: 'detail-2',
  },
  {
    id: 'a-2',
    title: 'Greener Food: Pesticide Removal & Flavor',
    subtitle: 'How 11.5 Strong Kangen Water strips oil-based agricultural chemicals from your food.',
    category: 'Article',
    tag: 'Greener Food',
    pageTarget: 'greener-food-detail',
    articleTarget: 'food-detail-1',
  },
  {
    id: 'a-3',
    title: 'Greener Beauty: Skin & Hair pH Balance',
    subtitle: 'Maintain your skin natural acid mantle with chemical-free 6.0 pH Beauty Water recipes.',
    category: 'Article',
    tag: 'Greener Beauty',
    pageTarget: 'greener-beauty-detail',
    articleTarget: 'beauty-detail-4',
  },
  {
    id: 'a-4',
    title: 'Greener Garden: Soil pH & Plant Care',
    subtitle: 'Optimize plant nutrients by dialing in custom pH water for vegetables, herbs, and flowers.',
    category: 'Article',
    tag: 'Greener Garden',
    pageTarget: 'greener-garden-detail',
    articleTarget: 'garden-detail-1',
  },
  {
    id: 'a-5',
    title: 'Greener Pet: Safe Parasite & Paw Protection',
    subtitle: 'Keep your dogs and cats healthy with clean Kangen hydration and chemical-free care.',
    category: 'Article',
    tag: 'Greener Pet',
    pageTarget: 'greener-pet-detail',
    articleTarget: 'pet-detail-1',
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  initialQuery = '',
  onNavigate,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
    }
  }, [isOpen, initialQuery]);

  if (!isOpen) return null;

  // Build unified search list
  const productSearchItems: SearchItem[] = PRODUCTS.map((p) => ({
    id: p.code,
    title: p.name,
    subtitle: `${p.tagline} • ${p.desc}`,
    category: 'Product',
    tag: 'Enagic® Machine',
    img: p.img,
    pageTarget: 'shop',
  }));

  const ALL_SEARCH_ITEMS: SearchItem[] = [
    ...productSearchItems,
    ...WATER_TYPES_SEARCH,
    ...RECIPES_SEARCH,
    ...ARTICLES_SEARCH,
  ];

  const trimmedQuery = query.trim().toLowerCase();

  const filteredItems = ALL_SEARCH_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategoryFilter === 'All' || item.category === activeCategoryFilter;
    const matchesQuery =
      !trimmedQuery ||
      item.title.toLowerCase().includes(trimmedQuery) ||
      item.subtitle.toLowerCase().includes(trimmedQuery) ||
      item.tag.toLowerCase().includes(trimmedQuery);

    return matchesCategory && matchesQuery;
  });

  const handleSelectResult = (item: SearchItem) => {
    onClose();
    if (onNavigate) {
      onNavigate(item.pageTarget, item.articleTarget);
    } else {
      window.location.hash = `#${item.pageTarget}`;
    }
  };

  const QUICK_SUGGESTIONS = [
    'LeveLuk K8',
    'Hand Sanitizer',
    'Beauty Water',
    'Conditioner',
    'pH 11.5',
    'Pesticide Wash',
    'Pet Care',
    'SD501',
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#1F292E]/80 backdrop-blur-sm flex items-start justify-center pt-12 sm:pt-20 p-4 animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] border border-[#3E4C4C]/20">
        
        {/* Top Input Bar */}
        <div className="p-4 sm:p-6 bg-[#3E4C4C] text-[#EDEEE7] space-y-4">
          <div className="flex items-center justify-between gap-3 border-b border-[#7AD1C4]/30 pb-3">
            <div className="flex items-center gap-3 flex-1">
              <Search className="w-6 h-6 text-[#7AD1C4] shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search machines, water pH, recipes, or articles..."
                className="w-full text-base sm:text-lg font-sans font-medium text-white placeholder:text-slate-300 outline-none bg-transparent"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-slate-300 hover:text-white cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
            {['All', 'Product', 'Water Type', 'Recipe', 'Article'].map((cat) => {
              const isActive = activeCategoryFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategoryFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-bold transition whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#7AD1C4] text-[#293434] shadow-sm'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  {cat === 'All' ? 'All Items' : cat + 's'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#EDEEE7]/40 space-y-4">
          
          {/* Quick Suggestions when empty */}
          {!query && (
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#3E4C4C] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#7AD1C4]" />
                <span>Popular Search Keywords</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {QUICK_SUGGESTIONS.map((sug) => (
                  <button
                    key={sug}
                    onClick={() => setQuery(sug)}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-700 hover:border-[#7AD1C4] hover:text-[#3E4C4C] font-medium shadow-2xs transition cursor-pointer"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
            <span>
              {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''} found
            </span>
            {query && <span>Filtering for: "{query}"</span>}
          </div>

          {/* List items */}
          <div className="space-y-2.5">
            {filteredItems.length === 0 ? (
              <div className="py-12 text-center space-y-3 bg-white rounded-2xl border border-slate-200 p-6">
                <Search className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-[#293434]">No matches found</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try searching for "LeveLuk K8", "Beauty Water", "Hand Sanitizer", or "pH 11.5".
                </p>
              </div>
            ) : (
              filteredItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelectResult(item)}
                    className="group flex items-center justify-between p-3.5 bg-white border border-slate-200/80 rounded-xl hover:border-[#7AD1C4] hover:shadow-md transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 min-w-0 pr-3">
                      {item.img ? (
                        <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 p-1 shrink-0 flex items-center justify-center">
                          <img src={item.img} alt={item.title} className="max-h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-[#3E4C4C]/10 text-[#3E4C4C] shrink-0 flex items-center justify-center border border-slate-200">
                          {item.category === 'Water Type' && <Droplets className="w-6 h-6 text-[#7AD1C4]" />}
                          {item.category === 'Recipe' && <Sparkles className="w-6 h-6 text-[#7AD1C4]" />}
                          {item.category === 'Article' && <BookOpen className="w-6 h-6 text-[#7AD1C4]" />}
                        </div>
                      )}

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif font-bold text-sm text-[#293434] group-hover:text-[#3E4C4C] truncate">
                            {item.title}
                          </h4>
                          <span className="px-2 py-0.5 rounded-full bg-[#EDEEE7] text-[#3E4C4C] text-[10px] font-bold uppercase tracking-wide shrink-0">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 font-sans line-clamp-1 mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-[#3E4C4C] group-hover:text-[#7AD1C4] shrink-0 pl-2">
                      <span className="hidden sm:inline">View</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#3E4C4C] text-[#EDEEE7] border-t border-[#7AD1C4]/20 flex items-center justify-between text-xs px-6">
          <span className="text-slate-300 font-medium">Serviced by <strong className="text-[#7AD1C4]">Shahina Sajid 6A8-6</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-1 bg-white/10 text-white rounded-full hover:bg-white/20 transition cursor-pointer"
          >
            Close Search
          </button>
        </div>

      </div>
    </div>
  );
};
