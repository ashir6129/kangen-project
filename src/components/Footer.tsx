'use client';

import React from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#3E4C4C] text-[#EDEEE7] border-t border-[#7AD1C4]/30 text-xs mt-auto font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand col */}
        <div className="space-y-3">
          <button
            onClick={() => { onNavigate?.('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-left focus:outline-none"
          >
            <img
              src="https://www.drinkfromheaven.com/affsites/eco/images/logo-2-footer.png"
              alt="Kangen Water Logo"
              className="h-10 w-auto object-contain"
            />
          </button>

          <div className="space-y-2 text-slate-300 text-[11px]">
            <p className="flex items-start gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#7AD1C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-semibold text-[#7AD1C4]">Enagic® Distributor 6A8-6</span>
            </p>

          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/?text=Hello%2C%20I%20have%20a%20question%20about%20Kangen%20Water"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold px-4 py-2 rounded-full inline-flex items-center gap-2 transition shadow w-fit"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.183-1.096z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="https://www.drinkfromheaven.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] text-[10px] font-bold px-3.5 py-1.5 rounded-full inline-block transition shadow w-fit"
            >
              Visit other great Kangen sites! »
            </a>
          </div>
        </div>

        {/* BLOG Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-[#7AD1C4] uppercase tracking-wider text-[11px]">BLOG</h4>
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li><button onClick={() => onNavigate?.('greener-home')} className="hover:text-[#7AD1C4] transition">Greener Home</button></li>
            <li><button onClick={() => onNavigate?.('food')} className="hover:text-[#7AD1C4] transition">Greener Food</button></li>
            <li><button onClick={() => onNavigate?.('beauty')} className="hover:text-[#7AD1C4] transition">Greener Beauty</button></li>
            <li><button onClick={() => onNavigate?.('garden')} className="hover:text-[#7AD1C4] transition">Greener Garden</button></li>
            <li><button onClick={() => onNavigate?.('pet')} className="hover:text-[#7AD1C4] transition">Greener Pet</button></li>
          </ul>
        </div>

        {/* SUPPORT Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-[#7AD1C4] uppercase tracking-wider text-[11px]">SUPPORT</h4>
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li><button onClick={() => onNavigate?.('contact')} className="hover:text-[#7AD1C4] transition">Contact Us</button></li>
            <li><button onClick={() => onNavigate?.('about')} className="hover:text-[#7AD1C4] transition">Privacy Policy</button></li>
            <li><button onClick={() => onNavigate?.('about')} className="hover:text-[#7AD1C4] transition">Return & Cancellation Policy</button></li>
          </ul>
        </div>

        {/* MY ACCOUNT Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-[#7AD1C4] uppercase tracking-wider text-[11px]">MY ACCOUNT</h4>
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li><button onClick={() => onNavigate?.('shop')} className="hover:text-[#7AD1C4] transition">Shop Machine Catalog</button></li>
            <li><button onClick={() => onNavigate?.('shop')} className="hover:text-[#7AD1C4] transition">My Cart</button></li>
            <li><button onClick={() => onNavigate?.('shop')} className="hover:text-[#7AD1C4] transition">Check Out</button></li>
          </ul>
        </div>

      </div>

      {/* Disclaimer Bottom Bar */}
      <div className="bg-[#293434] border-t border-[#576a6a]/40 py-6 px-4 text-center space-y-2">
        <p className="text-[10px] text-slate-300 max-w-4xl mx-auto leading-relaxed">
          Our products are designed to promote general well-being, but it is important to remember that we cannot provide specific medical advice. Our products are not intended to diagnose, treat, cure, or prevent any disease.
        </p>
        <p className="text-[10px] text-slate-400 font-mono">
          Copyright © 2026 EnagicWebSystem.com. All rights reserved. Serviced by Enagic® Distributor 6A8-6.
        </p>
      </div>
    </footer>
  );
};
