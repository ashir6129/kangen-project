'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, ChevronDown, Award, Sparkles, Video, HelpCircle, PhoneCall, Droplets, Info } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenConsultation: () => void;
  onNavigate: (page: string) => void;
  activePage: string;
  onOpenCompare?: () => void;
  onOpenVideoLibrary?: () => void;
}

const PRODUCT_DROPDOWN_ITEMS = [
  { label: 'Browse Products Overview', page: 'shop' },
  { label: 'Compare All Products Side-by-Side', action: 'compare' },
  { label: 'Shop Machine Catalog', page: 'shop' },
  { label: 'The 5 Kangen Water Types', page: 'water-types' },
  { label: 'LeveLuk K8 (8-Plate Flagship)', page: 'shop' },
  { label: 'LeveLuk SD501DX (Modern Icon)', page: 'shop' },
  { label: 'SD501 Platinum (Sleek Finish)', page: 'shop' },
  { label: 'Super 501 (12-Plate Commercial)', page: 'shop' },
  { label: 'LeveLuk SD501U (Under-Counter)', page: 'shop' },
  { label: 'LeveLuk JRIV (Junior Starter)', page: 'shop' },
  { label: 'Anespa DX (Ionized Home Spa)', page: 'shop' },
  { label: 'Kangen Ukon Annual Supplement', page: 'shop' },
];

const COMPANY_DROPDOWN_ITEMS = [
  { label: 'Contact Cynthia Briganti 6A8-6', page: 'contact' },
  { label: 'About Enagic® International', page: 'about' },
  { label: 'Certifications & WQA Gold Seal', page: 'certifications' },
  { label: 'Water Problems & Tap Contaminants', page: 'about' },
  { label: 'The 5 Kangen Water Types', page: 'water-types' },
  { label: 'Get Free ECO-Living eBook', action: 'ebook' },
  { label: 'Demonstration Video Library', action: 'videos' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenConsultation,
  onNavigate,
  activePage,
  onOpenCompare,
  onOpenVideoLibrary,
}) => {
  const { getTotalItems, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  const productDropdownRef = useRef<HTMLDivElement>(null);
  const companyDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (productDropdownRef.current && !productDropdownRef.current.contains(e.target as Node)) {
        setProductDropdownOpen(false);
      }
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(e.target as Node)) {
        setCompanyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-t-4 border-[#075f70] shadow-xs border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Left Action Buttons on Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-md text-slate-700 hover:text-emerald-700 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-md text-slate-700 hover:text-emerald-700 focus:outline-none cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* KANGEN WATER Logo in Center or Left */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 focus:outline-none group text-left cursor-pointer"
            >
              <img
                src="https://www.drinkfromheaven.com/affsites/eco/images/logo.png"
                alt="Kangen Water Logo"
                className="h-10 sm:h-11 w-auto object-contain transition group-hover:opacity-90"
              />
            </button>
          </div>

          {/* Desktop Nav Links (Dual-Line Upper-case Styling matching Bulma site) */}
          <nav className="hidden lg:flex items-center h-20 gap-1">
            {/* GREENER HOME */}
            <button
              onClick={() => onNavigate('greener-home')}
              className={`nav-link-item ${activePage === 'greener-home' ? 'active' : ''}`}
            >
              <img
                src="https://www.drinkfromheaven.com/affsites/e6/images/icon_home.png"
                alt="Home"
                className="nav-icon-img"
              />
              <div className="flex flex-col items-center leading-tight">
                <span className="nav-text-line1">GREENER</span>
                <span className="nav-text-line2">HOME</span>
              </div>
            </button>

            {/* GREENER FOOD */}
            <button
              onClick={() => onNavigate('food')}
              className={`nav-link-item ${activePage === 'food' ? 'active' : ''}`}
            >
              <img
                src="https://www.drinkfromheaven.com/affsites/e6/images/icon_kitchen.png"
                alt="Kitchen"
                className="nav-icon-img"
              />
              <div className="flex flex-col items-center leading-tight">
                <span className="nav-text-line1">GREENER</span>
                <span className="nav-text-line2">FOOD</span>
              </div>
            </button>

            {/* GREENER BEAUTY */}
            <button
              onClick={() => onNavigate('beauty')}
              className={`nav-link-item ${activePage === 'beauty' ? 'active' : ''}`}
            >
              <img
                src="https://www.drinkfromheaven.com/affsites/e6/images/icon_personal.png"
                alt="Beauty"
                className="nav-icon-img"
              />
              <div className="flex flex-col items-center leading-tight">
                <span className="nav-text-line1">GREENER</span>
                <span className="nav-text-line2">BEAUTY</span>
              </div>
            </button>

            {/* GREENER GARDEN */}
            <button
              onClick={() => onNavigate('garden')}
              className={`nav-link-item ${activePage === 'garden' ? 'active' : ''}`}
            >
              <img
                src="https://www.drinkfromheaven.com/affsites/e6/images/icon_garden.png"
                alt="Garden"
                className="nav-icon-img"
              />
              <div className="flex flex-col items-center leading-tight">
                <span className="nav-text-line1">GREENER</span>
                <span className="nav-text-line2">GARDEN</span>
              </div>
            </button>

            {/* GREENER PET */}
            <button
              onClick={() => onNavigate('pet')}
              className={`nav-link-item ${activePage === 'pet' ? 'active' : ''}`}
            >
              <img
                src="https://www.drinkfromheaven.com/affsites/e6/images/icon_pets.png"
                alt="Pet"
                className="nav-icon-img"
              />
              <div className="flex flex-col items-center leading-tight">
                <span className="nav-text-line1">GREENER</span>
                <span className="nav-text-line2">PET</span>
              </div>
            </button>

            {/* BROWSE PRODUCTS DROPDOWN */}
            <div className="relative h-20 flex items-center" ref={productDropdownRef}>
              <button
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                className={`nav-link-item ${activePage === 'shop' || activePage === 'water-types' ? 'active' : ''}`}
              >
                <div className="flex flex-col items-center leading-tight pt-2">
                  <span className="nav-text-line1">BROWSE</span>
                  <span className="nav-text-line2 flex items-center gap-0.5">
                    PRODUCTS <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                  </span>
                </div>
              </button>

              {productDropdownOpen && (
                <div className="absolute left-0 top-full mt-0 w-64 bg-white border border-slate-200 shadow-xl z-50 py-1.5 rounded-b-lg">
                  {PRODUCT_DROPDOWN_ITEMS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (item.action === 'compare' && onOpenCompare) {
                          onOpenCompare();
                        } else if (item.page) {
                          onNavigate(item.page);
                        }
                        setProductDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border-b border-slate-100 last:border-0 font-medium transition cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ABOUT COMPANY DROPDOWN */}
            <div className="relative h-20 flex items-center" ref={companyDropdownRef}>
              <button
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                className={`nav-link-item ${activePage === 'about' || activePage === 'contact' || activePage === 'certifications' ? 'active' : ''}`}
              >
                <div className="flex flex-col items-center leading-tight pt-2">
                  <span className="nav-text-line1">ABOUT</span>
                  <span className="nav-text-line2 flex items-center gap-0.5">
                    COMPANY <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                  </span>
                </div>
              </button>

              {companyDropdownOpen && (
                <div className="absolute right-0 top-full mt-0 w-60 bg-white border border-slate-200 shadow-xl z-50 py-1.5 rounded-b-lg">
                  {COMPANY_DROPDOWN_ITEMS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (item.action === 'videos' && onOpenVideoLibrary) {
                          onOpenVideoLibrary();
                        } else if (item.action === 'ebook') {
                          onOpenConsultation();
                        } else if (item.page) {
                          onNavigate(item.page);
                        }
                        setCompanyDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border-b border-slate-100 last:border-0 font-medium transition cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Icons: Search + Cart */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="hidden lg:flex p-2 text-slate-700 hover:text-emerald-700 transition focus:outline-none cursor-pointer"
              aria-label="Search site"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-[#075f70] hover:text-emerald-800 transition focus:outline-none flex items-center gap-1.5 border border-[#075f70]/30 rounded-full px-3 py-1.5 hover:bg-emerald-50 cursor-pointer"
              aria-label="View Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-xs font-bold text-slate-800 hidden sm:inline">Cart</span>
              {getTotalItems() > 0 && (
                <span className="bg-[#87b076] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE OFF-CANVAS SLIDING DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setMobileMenuOpen(false)} />

          <div className="relative ml-auto w-4/5 max-w-sm bg-slate-900 text-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            {/* Mobile Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div className="flex items-center gap-2">
                <img src="https://www.drinkfromheaven.com/affsites/eco/images/logo-2-footer.png" alt="Logo" className="h-8" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation List */}
            <div className="p-4 space-y-1 divide-y divide-slate-800/60">
              <button
                onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full py-3 text-left text-sm font-semibold text-white hover:text-emerald-400"
              >
                Home
              </button>
              <button
                onClick={() => { onNavigate('greener-home'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full py-3 text-left text-sm text-slate-200 hover:text-emerald-400"
              >
                <img src="https://www.drinkfromheaven.com/affsites/e6/images/icon_home.png" className="w-5 h-5 invert" alt="" />
                Greener Home
              </button>
              <button
                onClick={() => { onNavigate('food'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full py-3 text-left text-sm text-slate-200 hover:text-emerald-400"
              >
                <img src="https://www.drinkfromheaven.com/affsites/e6/images/icon_kitchen.png" className="w-5 h-5 invert" alt="" />
                Greener Food
              </button>
              <button
                onClick={() => { onNavigate('beauty'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full py-3 text-left text-sm text-slate-200 hover:text-emerald-400"
              >
                <img src="https://www.drinkfromheaven.com/affsites/e6/images/icon_personal.png" className="w-5 h-5 invert" alt="" />
                Greener Beauty
              </button>
              <button
                onClick={() => { onNavigate('garden'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full py-3 text-left text-sm text-slate-200 hover:text-emerald-400"
              >
                <img src="https://www.drinkfromheaven.com/affsites/e6/images/icon_garden.png" className="w-5 h-5 invert" alt="" />
                Greener Garden
              </button>
              <button
                onClick={() => { onNavigate('pet'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full py-3 text-left text-sm text-slate-200 hover:text-emerald-400"
              >
                <img src="https://www.drinkfromheaven.com/affsites/e6/images/icon_pets.png" className="w-5 h-5 invert" alt="" />
                Greener Pet
              </button>

              <div className="pt-3 pb-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Products</span>
                <button
                  onClick={() => { onNavigate('shop'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 text-xs text-slate-300 hover:text-white"
                >
                  Browse Products Catalog
                </button>
                <button
                  onClick={() => { if (onOpenCompare) onOpenCompare(); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  Compare Products Side-by-Side
                </button>
                <button
                  onClick={() => { onNavigate('water-types'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 text-xs text-slate-300 hover:text-white"
                >
                  The 5 Kangen Water Types
                </button>
              </div>

              <div className="pt-3 pb-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Company</span>
                <button
                  onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 text-xs text-slate-300 hover:text-white"
                >
                  Contact Cynthia Briganti 6A8-6
                </button>
                <button
                  onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 text-xs text-slate-300 hover:text-white"
                >
                  About Enagic®
                </button>
                <button
                  onClick={() => { onNavigate('certifications'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 text-xs text-slate-300 hover:text-white"
                >
                  Certifications
                </button>
                <button
                  onClick={() => { if (onOpenVideoLibrary) onOpenVideoLibrary(); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 text-xs text-slate-300 hover:text-white"
                >
                  Demonstration Video Library
                </button>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="mt-auto p-4 bg-slate-950 border-t border-slate-800 text-center space-y-2">
              <p className="text-xs text-slate-400">Serviced by Cynthia Briganti 6A8-6</p>
              <button
                onClick={() => { onOpenConsultation(); setMobileMenuOpen(false); }}
                className="w-full py-2 bg-[#87b076] hover:bg-[#759e64] text-white text-xs font-semibold rounded-full uppercase tracking-wider"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
