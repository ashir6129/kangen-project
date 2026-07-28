'use client';

import React, { useState } from 'react';
import { PRODUCTS, REGIONS } from '@/data/products';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, ShieldCheck, Layers, Star, ExternalLink, Check } from 'lucide-react';

export const ShopSection: React.FC = () => {
  const { selectedRegion, setSelectedRegion, addToCart, formatPrice } = useCart();
  const [filter, setFilter] = useState<'all' | 'ionizers' | 'spa' | 'supplements'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedToast, setAddedToast] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === 'ionizers') return p.plates > 0;
    if (filter === 'spa') return p.code === 'anespa';
    if (filter === 'supplements') return p.code.includes('ukon');
    return true;
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    setAddedToast(product.name);
    setTimeout(() => setAddedToast(null), 2500);
  };

  return (
    <section id="shop" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Notification */}
        {addedToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-teal-500 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-300 font-medium text-sm">
            <Check className="w-5 h-5 bg-white/20 rounded-full p-0.5" />
            <span>Added <strong className="font-bold">{addedToast}</strong> to cart!</span>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold uppercase tracking-wider border border-sky-500/30">
            Authorized Enagic® Product Line
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Browse Kangen Water® Machines & Supplements
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans">
            Select your region to calculate accurate localized prices, warranties, and corporate order details.
          </p>
        </div>

        {/* Region Selector Ribbon */}
        <div className="bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 mb-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Select Destination Region:
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {REGIONS.map((r) => (
                <button
                  key={r.code}
                  onClick={() => setSelectedRegion(r)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    selectedRegion.code === r.code
                      ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25 font-bold scale-105'
                      : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span>{r.flag}</span>
                  <span>{r.code.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'ionizers', label: 'Water Ionizers' },
            { id: 'spa', label: 'Home Spa' },
            { id: 'supplements', label: 'Ukon Supplements' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === tab.id
                  ? 'bg-white text-slate-900 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const price = product.prices[selectedRegion.code] || product.prices.us || 0;

            return (
              <div
                key={product.code}
                className="group bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-700/80 shadow-xl hover:border-sky-500/50 hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-64 overflow-hidden bg-slate-950 p-6 flex items-center justify-center">
                    {product.popular && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-md z-10 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-white" /> Popular
                      </span>
                    )}

                    <img
                      src={product.img}
                      alt={product.name}
                      className="max-h-52 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-sky-400 font-mono mb-1">
                        <span>SKU: #{product.sku}</span>
                        {product.plates > 0 && (
                          <span className="flex items-center gap-1 bg-sky-950/80 text-sky-300 px-2 py-0.5 rounded border border-sky-800/50 text-[10px] font-sans">
                            <Layers className="w-3 h-3" /> {product.plates} Titanium Plates
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-300 italic mt-0.5">{product.tagline}</p>
                    </div>

                    <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed font-sans">
                      {product.desc}
                    </p>

                    {/* Warranty & Regional Price */}
                    <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between">
                      {product.warranty > 0 ? (
                        <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> {product.warranty}-Yr Warranty
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400 font-medium">Organic Supplement</span>
                      )}

                      <div className="text-right">
                        <span className="text-xs text-slate-400 font-mono block">{selectedRegion.currency}</span>
                        <span className="font-serif text-2xl font-bold text-sky-400">
                          {formatPrice(price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs transition-colors"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold text-xs shadow-lg shadow-sky-500/20 active:scale-95 transition-all flex items-center justify-center gap-1.5"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-white">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="bg-slate-950 p-4 rounded-2xl flex items-center justify-center">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="max-h-64 object-contain"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-sky-400 font-mono">SKU: #{selectedProduct.sku}</span>
                  <h3 className="font-serif text-3xl font-bold">{selectedProduct.name}</h3>
                  <p className="text-xs text-slate-400 italic mt-1">{selectedProduct.tagline}</p>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">{selectedProduct.desc}</p>

                <div className="space-y-1.5 text-xs text-slate-300 font-medium">
                  {selectedProduct.plates > 0 && <div>• Electrolysis Plates: {selectedProduct.plates} Titanium</div>}
                  {selectedProduct.warranty > 0 && <div>• Manufacturer Warranty: {selectedProduct.warranty} Years</div>}
                  <div>• Ships direct from Enagic® Corporate Fulfillment</div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">{selectedRegion.name} Price:</span>
                    <span className="font-serif text-3xl font-bold text-sky-400">
                      {formatPrice(selectedProduct.prices[selectedRegion.code] || selectedProduct.prices.us)}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Shopping Cart</span>
                  </button>

                  <a
                    href={selectedProduct.buylink || 'https://www.enagic.com/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5"
                  >
                    <span>Buy Direct</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
