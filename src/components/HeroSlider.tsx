'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSliderProps {
  onNavigate?: (page: string) => void;
}

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  desc?: string;
  btnText: string;
  page: string;
  bgImage: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: 'Green Your Home',
    subtitle: 'with Kangen Water®',
    desc: '',
    btnText: 'Greener Home',
    page: 'greener-home',
    bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'In the Kitchen',
    subtitle: 'Cook, Clean & Sanitize',
    desc: 'Cook, clean, rinse produce, sanitize surfaces and wash dishes with Kangen Water!',
    btnText: 'Greener Food',
    page: 'food',
    bgImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Beauty Care',
    subtitle: 'Nontoxic Chemical-Free Beauty',
    desc: 'Ingredients in beauty products are not stringently tested for safety, leaving you exposed as a consumer. Safely green your beauty routine with Enagic!',
    btnText: 'Greener Beauty',
    page: 'beauty',
    bgImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Gardening',
    subtitle: 'Lush Organic Plants',
    desc: 'Gardening is beneficial for both you and the Earth. Take your outdoor skills to the next level with Kangen Water!',
    btnText: 'Greener Garden',
    page: 'garden',
    bgImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Pet Care',
    subtitle: 'Pure Hydration for Pets',
    desc: 'Caring for your beloved pets has never been easier, or greener with Kangen Water!',
    btnText: 'Greener Pet',
    page: 'pet',
    bgImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2000&auto=format&fit=crop',
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] overflow-hidden bg-slate-900 group font-sans" id="slider-2">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide absolute inset-0 ${
            index === currentSlide ? 'active' : 'inactive'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />

          {/* Dark Overlay for Ultra-Crisp Text Readability */}
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

          {index === 0 && (
            <div className="hidden md:block absolute inset-0 max-w-6xl mx-auto pointer-events-none z-10">
              <span className="hero-badge-black absolute top-1/2 left-20">COOKING</span>
              <span className="hero-badge-black absolute top-1/3 left-1/3">DISHWASHING</span>
              <span className="hero-badge-black absolute top-1/2 left-1/2">GARDENING</span>
              <span className="hero-badge-black absolute top-1/3 right-1/4">DAILY CLEANING</span>
              <span className="hero-badge-black absolute top-1/2 right-24">LAUNDRY</span>
              <span className="hero-badge-black absolute bottom-24 right-1/3">CLEANSING</span>
            </div>
          )}

          <div className="relative max-w-5xl mx-auto h-full px-4 flex flex-col justify-center items-center text-center text-white z-10">
            <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-tight drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="font-serif italic text-3xl sm:text-5xl font-bold text-white mt-1 drop-shadow-md">
              {slide.subtitle}
            </p>
            {slide.desc && (
              <p className="max-w-2xl text-sm sm:text-base font-medium text-slate-100 drop-shadow-md font-sans mt-4 mb-4">
                {slide.desc}
              </p>
            )}
            <div className="mt-8">
              <button
                onClick={() => onNavigate?.(slide.page)}
                className="btn-sage-pill font-sans shadow-lg cursor-pointer"
              >
                {slide.btnText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rotate-45 border border-white/60 bg-black/30 hover:bg-black/60 backdrop-blur-xs flex items-center justify-center text-white transition-all cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 -rotate-45" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rotate-45 border border-white/60 bg-black/30 hover:bg-black/60 backdrop-blur-xs flex items-center justify-center text-white transition-all cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 -rotate-45" />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
