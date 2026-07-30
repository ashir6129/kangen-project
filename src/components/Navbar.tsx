'use client';

import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, ChevronDown, Home as HomeIcon, UtensilsCrossed, Sparkles, Flower2, Dog, ShoppingBag, Mail } from 'lucide-react';
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
  { label: 'Browse Products' },
  { label: 'Compare Products' },
  { label: 'Shop' },
  { label: 'Kangen Water' },
  { label: 'LeveLuk K8' },
  { label: 'LeveLuk SD501DX' },
  { label: 'SD501 Platinum' },
  { label: 'Super 501' },
  { label: 'LeveLuk SD501U' },
  { label: 'LeveLuk JRIV' },
  { label: 'Anespa DX' },
  { label: 'Kangen Ukon Annual' },
  { label: 'Kangen Ukon Annual Combo' },
  { label: 'Kangen Ukon DD' },
];

const COMPANY_DROPDOWN_ITEMS = [
  { label: 'Contact' },
  { label: 'Enagic' },
  { label: 'Certifications' },
  { label: 'Water Problems' },
  { label: '5 Water Types' },
  { label: 'Get free ECO eBook' },
  { label: 'Demonstration Videos' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenConsultation,
  onNavigate,
  activePage,
}) => {
  const { getTotalItems, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#EDEEE7]/95 backdrop-blur-md border-t-4 border-[#7AD1C4] shadow-md border-b border-[#3E4C4C]/15 font-sans transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Left Action Buttons on Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-[#3E4C4C] hover:text-[#7AD1C4] hover:bg-[#3E4C4C]/10 focus:outline-none cursor-pointer transition"
              aria-label="Toggle Navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-[#3E4C4C] hover:text-[#7AD1C4] hover:bg-[#3E4C4C]/10 focus:outline-none cursor-pointer transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* KANGEN WATER Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 focus:outline-none group text-left cursor-pointer"
            >
              <img
                src="https://www.drinkfromheaven.com/affsites/eco/images/logo.png"
                alt="Kangen Water Logo"
                className="h-10 sm:h-11 w-auto object-contain transition group-hover:opacity-90 group-hover:scale-102"
              />
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center h-20 gap-1.5">
            {/* GREENER HOME */}
            <button
              onClick={() => onNavigate('greener-home')}
              className={`nav-link-item ${activePage === 'greener-home' ? 'active' : ''}`}
            >
              <HomeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
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
              <UtensilsCrossed className="w-5 h-5 transition-transform group-hover:scale-110" />
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
              <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110" />
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
              <Flower2 className="w-5 h-5 transition-transform group-hover:scale-110" />
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
              <Dog className="w-5 h-5 transition-transform group-hover:scale-110" />
              <div className="flex flex-col items-center leading-tight">
                <span className="nav-text-line1">GREENER</span>
                <span className="nav-text-line2">PET</span>
              </div>
            </button>

            {/* SHOP CATALOG */}
            <button
              onClick={() => onNavigate('shop')}
              className={`nav-link-item ${activePage === 'shop' ? 'active' : ''}`}
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
              <div className="flex flex-col items-center leading-tight">
                <span className="nav-text-line1">SHOP</span>
                <span className="nav-text-line2">PRODUCTS</span>
              </div>
            </button>

            {/* CONTACT LINK */}
            <button
              onClick={() => onNavigate('contact')}
              className={`nav-link-item ${activePage === 'contact' ? 'active' : ''}`}
            >
              <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
              <div className="flex flex-col items-center leading-tight">
                <span className="nav-text-line1">GET IN</span>
                <span className="nav-text-line2">TOUCH</span>
              </div>
            </button>
          </nav>

          {/* Right Action Icons: Search + Cart */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="hidden lg:flex p-2.5 rounded-full text-[#3E4C4C] hover:bg-[#3E4C4C]/10 hover:text-[#7AD1C4] transition focus:outline-none cursor-pointer"
              aria-label="Search site"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 bg-[#3E4C4C] text-[#7AD1C4] hover:bg-[#293434] transition focus:outline-none flex items-center gap-2 border border-[#7AD1C4]/40 rounded-full px-4 py-2 cursor-pointer shadow-sm hover:shadow-md hover:scale-102"
              aria-label="View Shopping Cart"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-xs font-bold text-[#EDEEE7] hidden sm:inline tracking-wider uppercase">Cart</span>
              {getTotalItems() > 0 && (
                <span className="bg-[#7AD1C4] text-[#293434] text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
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
          <div className="fixed inset-0 bg-[#293434]/75 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

          <div className="relative ml-auto w-4/5 max-w-sm bg-[#3E4C4C] text-[#EDEEE7] h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            {/* Mobile Header */}
            <div className="p-5 border-b border-[#576a6a]/40 flex items-center justify-between bg-[#293434]">
              <div className="flex items-center gap-2">
                <img src="https://www.drinkfromheaven.com/affsites/eco/images/logo-2-footer.png" alt="Logo" className="h-8" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full text-slate-300 hover:text-white cursor-pointer hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation List */}
            <div className="p-5 space-y-2">
              <button
                onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3.5 w-full py-3 px-3 rounded-lg text-left text-sm font-semibold text-[#EDEEE7] hover:bg-[#7AD1C4]/15 hover:text-[#7AD1C4] transition"
              >
                <HomeIcon className="w-5 h-5 text-[#7AD1C4]" />
                Home
              </button>
              <button
                onClick={() => { onNavigate('greener-home'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3.5 w-full py-3 px-3 rounded-lg text-left text-sm text-[#EDEEE7] hover:bg-[#7AD1C4]/15 hover:text-[#7AD1C4] transition"
              >
                <HomeIcon className="w-5 h-5 text-[#7AD1C4]" />
                Greener Home
              </button>
              <button
                onClick={() => { onNavigate('food'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3.5 w-full py-3 px-3 rounded-lg text-left text-sm text-[#EDEEE7] hover:bg-[#7AD1C4]/15 hover:text-[#7AD1C4] transition"
              >
                <UtensilsCrossed className="w-5 h-5 text-[#7AD1C4]" />
                Greener Food
              </button>
              <button
                onClick={() => { onNavigate('beauty'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3.5 w-full py-3 px-3 rounded-lg text-left text-sm text-[#EDEEE7] hover:bg-[#7AD1C4]/15 hover:text-[#7AD1C4] transition"
              >
                <Sparkles className="w-5 h-5 text-[#7AD1C4]" />
                Greener Beauty
              </button>
              <button
                onClick={() => { onNavigate('garden'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3.5 w-full py-3 px-3 rounded-lg text-left text-sm text-[#EDEEE7] hover:bg-[#7AD1C4]/15 hover:text-[#7AD1C4] transition"
              >
                <Flower2 className="w-5 h-5 text-[#7AD1C4]" />
                Greener Garden
              </button>
              <button
                onClick={() => { onNavigate('pet'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3.5 w-full py-3 px-3 rounded-lg text-left text-sm text-[#EDEEE7] hover:bg-[#7AD1C4]/15 hover:text-[#7AD1C4] transition"
              >
                <Dog className="w-5 h-5 text-[#7AD1C4]" />
                Greener Pet
              </button>
              <button
                onClick={() => { onNavigate('shop'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3.5 w-full py-3 px-3 rounded-lg text-left text-sm text-[#EDEEE7] hover:bg-[#7AD1C4]/15 hover:text-[#7AD1C4] transition"
              >
                <ShoppingBag className="w-5 h-5 text-[#7AD1C4]" />
                Shop Machine Catalog
              </button>
              <button
                onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                className="flex items-center gap-3.5 w-full py-3 px-3 rounded-lg text-left text-sm text-[#7AD1C4] font-bold hover:bg-[#7AD1C4]/20 transition"
              >
                <Mail className="w-5 h-5 text-[#7AD1C4]" />
                Contact Us
              </button>
            </div>

            {/* Mobile Footer Info */}
            <div className="mt-auto p-5 bg-[#293434] border-t border-[#576a6a]/40 text-center space-y-2.5">
              <p className="text-xs text-slate-300">Serviced by <span className="font-semibold text-[#7AD1C4]">Shahina Sajid 6A8-6</span></p>
              <p className="text-xs text-[#7AD1C4] font-mono font-bold">📱 469-648-8298</p>
              <button
                onClick={() => { onOpenConsultation(); setMobileMenuOpen(false); }}
                className="w-full py-2.5 bg-[#7AD1C4] text-[#293434] text-xs font-bold rounded-full uppercase tracking-wider shadow-md hover:bg-[#61c2b5] transition cursor-pointer"
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
