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
              <span className="font-semibold text-[#7AD1C4]">Shahina Sajid 6A8-6</span>
            </p>
            <p className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 shrink-0 text-[#7AD1C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:4696488298" className="hover:text-[#7AD1C4] font-mono transition">469-648-8298</a>
            </p>
            <p className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 shrink-0 text-[#7AD1C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:Shanz.javed@gmail.com" className="hover:text-[#7AD1C4] transition">Shanz.javed@gmail.com</a>
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://www.drinkfromheaven.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] text-[10px] font-bold px-3.5 py-1.5 rounded-full inline-block transition shadow"
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
          Copyright © 2026 EnagicWebSystem.com. All rights reserved. Serviced by Shahina Sajid 6A8-6.
        </p>
      </div>
    </footer>
  );
};
