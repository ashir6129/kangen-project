'use client';

import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.desc.toLowerCase().includes(query.toLowerCase()) ||
          p.tagline.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-[#293434]/80 backdrop-blur-md flex items-start justify-center pt-20 p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 border border-[#3E4C4C]/20">
        
        {/* Top Input Bar */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-6 h-6 text-[#7AD1C4]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, ionizers, or recipes..."
              className="w-full text-base sm:text-lg font-sans font-medium text-[#293434] placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto space-y-3">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-xs text-slate-400 font-medium">
              Type something above to search the Kangen Water® store catalog.
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-sm font-medium text-slate-500">
              No matching products found for "{query}".
            </div>
          ) : (
            results.map((product) => (
              <a
                key={product.code}
                href="#shop"
                onClick={onClose}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-[#7AD1C4]/15 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 p-1 rounded-xl flex items-center justify-center border border-slate-200">
                    <img src={product.img} alt={product.name} className="max-h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#293434] group-hover:text-[#47a295]">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#576a6a] font-sans line-clamp-1">{product.tagline}</p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#7AD1C4] group-hover:translate-x-1 transition-all" />
              </a>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
