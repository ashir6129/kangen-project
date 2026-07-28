'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSlider } from '@/components/HeroSlider';
import { EbookBanner } from '@/components/EbookBanner';
import { LifestyleGrid } from '@/components/LifestyleGrid';
import { RecipeGrid } from '@/components/RecipeGrid';
import { ShopSection } from '@/components/ShopSection';
import { CartDrawer } from '@/components/CartDrawer';
import { ConsultationModal } from '@/components/ConsultationModal';
import { SearchModal } from '@/components/SearchModal';
import { ProductComparisonModal } from '@/components/ProductComparisonModal';
import { WaterTypesSection } from '@/components/WaterTypesSection';
import { VideoLibraryModal } from '@/components/VideoLibraryModal';
import { VideoSection } from '@/components/VideoSection';
import { Footer } from '@/components/Footer';
import { GreenerHomeDetail } from '@/components/GreenerHomeDetail';

export default function Home() {
  const [activePage, setActivePage] = useState<string>('home');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [compareOpen, setCompareOpen] = useState<boolean>(false);
  const [videoLibraryOpen, setVideoLibraryOpen] = useState<boolean>(false);

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex flex-col bg-white font-sans text-slate-800" id="my-page">
      {/* 1. Header Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenCompare={() => setCompareOpen(true)}
        onOpenVideoLibrary={() => setVideoLibraryOpen(true)}
      />

      {/* 2. DYNAMIC PAGE VIEWS */}

      {/* HOME LANDING VIEW */}
      {activePage === 'home' && (
        <div className="space-y-0" id="page">
          <HeroSlider onNavigate={handleNavigate} />
          <EbookBanner />
          <LifestyleGrid onNavigate={handleNavigate} />

          {/* Cooking Banner CTA matching drinkfromheaven.com */}
          <section
            className="relative py-20 text-white overflow-hidden font-sans shadow-md call-to-action-style-1"
            style={{
              backgroundImage:
                "url('https://www.drinkfromheaven.com/affsites/eco/images/call-to-action/tips.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
              <p className="text-xs sm:text-sm text-slate-200 font-semibold italic tracking-wide">
                Cooking with Kangen Water
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white drop-shadow-md">
                Healthy - Clean - Fresh
              </h2>
              <div className="pt-3">
                <button
                  onClick={() => handleNavigate('food')}
                  className="btn-sage-pill font-sans shadow-lg cursor-pointer"
                >
                  Recipes and tips for daily use.
                </button>
              </div>
            </div>
          </section>

          <RecipeGrid />
        </div>
      )}

      {/* GREENER HOME CATEGORY VIEW */}
      {activePage === 'greener-home' && (
        <div className="bg-white">
          <div
            className="relative w-full h-72 sm:h-80 bg-cover bg-center flex items-center justify-center shadow-inner"
            style={{ backgroundImage: "url('https://www.drinkfromheaven.com/affsites/eco/images/slide/home_1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <h1 className="relative z-10 font-serif text-4xl sm:text-6xl text-white font-normal drop-shadow-lg tracking-wide">Greener Home</h1>
          </div>

          <div className="wood-consult-bg py-4 px-4 shadow-inner border-y border-slate-900/40">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
              <input
                type="text"
                placeholder="Search Greener Home..."
                className="w-72 sm:w-96 px-5 py-2.5 rounded-full text-xs text-slate-700 bg-white shadow-inner outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-[#87b076] hover:bg-[#759e64] text-white px-6 py-2.5 text-xs font-semibold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
                Search
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#333333]">
              Create a chemical and toxin-free home with Kangen Water®.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
              Your home should be a safe haven for your family. Unfortunately, conventional household cleaners are loaded with harsh toxins, chemical residues, and artificial fragrances that can harm your health and the environment. By switching to Kangen Water®, you can eliminate chemical cleaners completely while maintaining a clean, greener home with Kangen.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { id: 'detail-1', title: 'A Greener Home', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', desc: 'Greener home solutions save time and money while keeping your family safe from harmful chemical residue.' },
                { id: 'detail-2', title: 'Non-toxic Cleaning', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop', desc: 'Powerful Strong Kangen Water (pH 11.5) dissolves grease and tough grime without any harsh chemicals or fumes.' },
                { id: 'detail-3', title: 'Doing the Dishes', img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=800&auto=format&fit=crop', desc: 'Rinse and sanitize dishes, cutting boards, and cutlery naturally using Strong Acidic Water (pH 2.5).' },
                { id: 'detail-4', title: 'In the Laundry room', img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=800&auto=format&fit=crop', desc: 'Replace harsh chemical detergents with Kangen Water to keep your linens fresh, soft, and non-toxic.' },
                { id: 'detail-5', title: 'Powerful Stain remover', img: 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?q=80&w=800&auto=format&fit=crop', desc: 'Soaking spots in Strong Kangen Water 11.5 removes stubborn stains without harsh chemical bleaches.' },
                { id: 'detail-6', title: 'Kangen Water® Liquid Castile Cleaner', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop', desc: 'Castile soap infused with Kangen Water provides multi-surface cleaning power for counters, floors, and sinks.' }
              ].map((card, i) => (
                <div
                  key={i}
                  onClick={() => handleNavigate('greener-home-detail')}
                  className="bg-slate-50 border border-slate-200/80 shadow-xs rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-md transition cursor-pointer group"
                >
                  <div>
                    <img src={card.img} alt={card.title} className="w-full h-52 object-cover group-hover:scale-105 transition duration-500" />
                    <div className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-[#333333] group-hover:text-emerald-700 transition">{card.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GREENER HOME DETAIL VIEW */}
      {activePage === 'greener-home-detail' && (
        <GreenerHomeDetail
          onNavigate={handleNavigate}
          onOpenConsultation={() => setConsultationOpen(true)}
        />
      )}

      {/* GREENER FOOD CATEGORY VIEW */}
      {activePage === 'food' && (
        <div className="bg-white">
          <div
            className="relative w-full h-72 sm:h-80 bg-cover bg-center flex items-center justify-center shadow-inner"
            style={{ backgroundImage: "url('https://www.drinkfromheaven.com/affsites/eco/images/slide/home_food.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/35"></div>
            <h1 className="relative z-10 font-serif text-4xl sm:text-6xl text-white font-normal drop-shadow-lg tracking-wide">Greener Food</h1>
          </div>

          <div className="wood-consult-bg py-4 px-4 shadow-inner border-y border-slate-900/40">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
              <input
                type="text"
                placeholder="Search Greener Food..."
                className="w-72 sm:w-96 px-5 py-2.5 rounded-full text-xs text-slate-700 bg-white shadow-inner outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-[#87b076] hover:bg-[#759e64] text-white px-6 py-2.5 text-xs font-semibold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
                Search
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#333333] mb-2">
              Kangen Water® in the Kitchen
            </h2>
            <p className="font-serif italic text-sm text-slate-500 mb-6">Tasty, Healthy, and Clean recipes for your table.</p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
              Water is the single, most important ingredient in your kitchen. Consider what type of water you are using when working in your kitchen. Tap water is full of contaminants. Simply replacing tap water with appropriate Kangen Water® makes a world of difference in flavor and quality.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Clean Produce', img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop', desc: 'Soaking fruits and vegetables in Strong Kangen Water (pH 11.5) removes oily pesticides and residue that tap water cannot wash off.' },
                { title: 'Cooking with Kangen Water®', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop', desc: 'Learn how to integrate Kangen Water® into your favorite recipes by simply replacing tap water with one of the 3 different types of Kangen Water® for cooking.' },
                { title: 'Kangen Tea', img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop', desc: 'Infuse tea effortlessly! Kangen Water\'s micro-clustered molecules penetrate tea leaves quickly even with cold or room-temp water.' },
                { title: 'Brining & Tenderizing Meat with Kangen Water®', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop', desc: 'Soak meats in Kangen 9.5 before cooking to draw out gamey odors, tenderize tough fibers, and lock in savory natural juices.' },
                { title: 'Green Smoothie', img: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=800&auto=format&fit=crop', desc: 'Boost your daily morning smoothie by blending organic greens with Kangen Water for maximum nutrient absorption and energy.' },
                { title: 'Sayra\'s Cornbread', img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=800&auto=format&fit=crop', desc: 'Bake lighter, fluffier cornbread using Kangen 9.5 Water. The micro-clustering enhances texture and preserves rich corn flavor.' }
              ].map((card, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200/80 shadow-xs rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <img src={card.img} alt={card.title} className="w-full h-52 object-cover" />
                    <div className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-[#333333]">{card.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GREENER BEAUTY CATEGORY VIEW */}
      {activePage === 'beauty' && (
        <div className="bg-white">
          <div
            className="relative w-full h-72 sm:h-80 bg-cover bg-center flex items-center justify-center shadow-inner"
            style={{ backgroundImage: "url('https://www.drinkfromheaven.com/affsites/eco/images/slide/home_beauty_spa.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/35"></div>
            <h1 className="relative z-10 font-serif text-4xl sm:text-6xl text-white font-normal drop-shadow-lg tracking-wide">Greener Beauty</h1>
          </div>

          <div className="wood-consult-bg py-4 px-4 shadow-inner border-y border-slate-900/40">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
              <input
                type="text"
                placeholder="Search Greener Beauty..."
                className="w-72 sm:w-96 px-5 py-2.5 rounded-full text-xs text-slate-700 bg-white shadow-inner outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-[#87b076] hover:bg-[#759e64] text-white px-6 py-2.5 text-xs font-semibold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
                Search
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#333333] mb-4">
              Go Green and Be Beautiful!
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
              As your skin absorbs 60% of what you put on it, it's time to start replacing chemical-based products with all-natural ingredients! Your skin is your largest organ, and by replacing chemical-laden beauty products with Kangen Water®, you can unlock a world of clean, green, all-natural beauty solutions. Discover how Kangen Water® can rejuvenate your skin, hair, and overall beauty routine!
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Be Green, Be Beautiful!', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop', desc: 'To have a routine that keeps you healthy and hydrated can make you feel beautiful inside and out!' },
                { title: 'A New Approach to Skin Care', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop', desc: 'Replacing harsh chemicals with Kangen Water for daily cleansing, toning, and hydration can make all the difference.' },
                { title: 'Kangen® Hand Sanitizer', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop', desc: 'Learn how to make hand sanitizer without chemical alcohol using Strong Acidic Water (pH 2.5).' },
                { title: 'Beauty Water Soap', img: 'https://images.unsplash.com/photo-1607006482602-76ca97ac2a0c?q=80&w=800&auto=format&fit=crop', desc: 'These beautiful soaps make wonderful gifts, or can be used daily to nourish skin with gentle Beauty Water.' }
              ].map((card, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200/80 shadow-xs rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <img src={card.img} alt={card.title} className="w-full h-52 object-cover" />
                    <div className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-[#333333]">{card.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GREENER GARDEN CATEGORY VIEW */}
      {activePage === 'garden' && (
        <div className="bg-white">
          <div
            className="relative w-full h-72 sm:h-80 bg-cover bg-center flex items-center justify-center shadow-inner"
            style={{ backgroundImage: "url('https://www.drinkfromheaven.com/affsites/eco/images/slide/home_garden_plant.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/35"></div>
            <h1 className="relative z-10 font-serif text-4xl sm:text-6xl text-white font-normal drop-shadow-lg tracking-wide">Greener Garden</h1>
          </div>

          <div className="wood-consult-bg py-4 px-4 shadow-inner border-y border-slate-900/40">
            <div className="max-w-xl mx-auto flex items-center justify-center gap-3">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-72 sm:w-80 px-5 py-2.5 rounded-full text-xs text-slate-700 bg-white shadow-inner outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-[#87b076] hover:bg-[#759e64] text-white px-6 py-2.5 text-xs font-semibold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
                SEND THE EBOOK
              </button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 pt-14 pb-20">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#333333] mb-4">
                Reconnect with the Earth
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Gardening is great, but gardening with Kangen Water® is even better! Just like your body needs Kangen Water® for optimal hydration, your plants need this remarkable water for optimal growth, hydration, and mineralization. Kangen Water® stimulates germination and improves seedling development, keeping your plants in peak condition without the use of harmful chemicals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              <div className="space-y-8">
                <div className="text-center p-6 border border-slate-200/80 rounded-xl bg-slate-50 space-y-2.5 shadow-xs">
                  <div className="w-24 h-24 rounded-full border-2 border-emerald-600 mx-auto overflow-hidden shadow">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Cynthia Briganti" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#333333]">Cynthia Briganti 6A8-6</h4>
                  <p className="text-[11px] text-slate-500">Enagic® International Distributor</p>
                  <p className="text-[11px] text-slate-700 font-mono font-semibold">818 859-0109</p>
                </div>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Benefits of Gardening', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop', desc: 'Health professionals have long touted the benefits of gardening on your mental health, budget, overall wellness, and building of the community.' },
                  { title: 'Gardening With Kangen Water®', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop', desc: 'Gardening with Kangen Water is a great way to keep your plants and flowers healthy, vibrant, and fresh.' },
                  { title: 'Gardening with Kids', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop', desc: 'Children who garden show heightened environmental awareness, responsibility, interpersonal skills, and team skills.' }
                ].map((card, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200/80 shadow-xs rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-md transition">
                    <div>
                      <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
                      <div className="p-5 space-y-2">
                        <h3 className="font-serif text-lg font-bold text-[#333333]">{card.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GREENER PET CATEGORY VIEW */}
      {activePage === 'pet' && (
        <div className="bg-white">
          <div
            className="relative w-full h-72 sm:h-80 bg-cover bg-center flex items-center justify-center shadow-inner"
            style={{ backgroundImage: "url('https://www.drinkfromheaven.com/affsites/eco/images/slide/home_pet.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/35"></div>
            <h1 className="relative z-10 font-serif text-4xl sm:text-6xl text-white font-normal drop-shadow-lg tracking-wide">Greener Pet</h1>
          </div>

          <div className="wood-consult-bg py-4 px-4 shadow-inner border-y border-slate-900/40">
            <div className="max-w-xl mx-auto flex items-center justify-center gap-3">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-72 sm:w-80 px-5 py-2.5 rounded-full text-xs text-slate-700 bg-white shadow-inner outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-[#87b076] hover:bg-[#759e64] text-white px-6 py-2.5 text-xs font-semibold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
                SEND THE EBOOK
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#333333]">
              Protect your Pets
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
              Alarming amounts of heavy metals, lead, and chemical toxins have been discovered in tap water at levels much higher than those found in municipal standards, meaning that our beloved pets are much more susceptible to toxic buildup than we are. Grooming products, flea and tick treatments, and even pet food are found to contain harmful contaminants and chemicals, increasing the risk of sickness and shortening the lives of our pets. Pet owners are studying these risks of exposure and long-term effects. This means that we are the first line of defense when it comes to our fur babies, and Kangen Water® is the key to protecting our pets. Use Kangen Water® to optimally hydrate your pet, create natural holistic remedies for ailments, and to even make your own organic pet food!
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Flea and Tick Treatments',
                  img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop',
                  desc: 'How safe are the flea and tick treatments you are currently using?'
                },
                {
                  title: 'Eliminate Pet Odors',
                  img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop',
                  desc: 'As much as you love your pets, you probably don\'t want pet odors or urine to dominate your green home.'
                },
                {
                  title: 'Pets Need Water, Too!',
                  img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop',
                  desc: 'A member of the family whose hydration may be overlooked at times is your beloved pet.'
                }
              ].map((card, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200/80 shadow-xs rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <img src={card.img} alt={card.title} className="w-full h-52 object-cover" />
                    <div className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-[#333333]">{card.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SHOP VIEW */}
      {activePage === 'shop' && <ShopSection />}

      {/* 5 WATER TYPES VIEW */}
      {activePage === 'water-types' && <WaterTypesSection onNavigate={handleNavigate} />}

      {/* CERTIFICATIONS / ABOUT / CONTACT VIEWS */}
      {(activePage === 'about' || activePage === 'contact' || activePage === 'certifications') && (
        <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
          <div className="inline-block p-3 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            Enagic® International 6A8-6 Distributor
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
            {activePage === 'certifications' ? 'Enagic® WQA Gold Seal Certifications' : 'Cynthia Briganti 6A8-6'}
          </h1>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Authorized Enagic® Distributor serving clients worldwide. Providing high-performance Kangen Water® ionizers, home mineral spa units, and organic Okinawa Ukon supplements.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setConsultationOpen(true)}
              className="btn-sage-pill font-sans shadow-md cursor-pointer"
            >
              Schedule Free Consultation Call
            </button>
            <button
              onClick={() => handleNavigate('shop')}
              className="px-8 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider transition cursor-pointer"
            >
              Browse Machine Catalog
            </button>
          </div>
        </div>
      )}

      {/* 3. GLOBAL FIXED VIDEO LIBRARY SECTION */}
      <VideoSection onOpenVideoLibrary={() => setVideoLibraryOpen(true)} />

      {/* 4. GLOBAL FIXED CONSULTATION BANNER */}
      <section className="wood-consult-bg py-12 px-4 text-center shadow-lg border-t border-amber-950/40 font-sans">
        <div className="max-w-2xl mx-auto space-y-3">
          <h3 className="text-white font-normal text-lg sm:text-xl font-serif">Schedule your FREE consultation. No obligation to buy.</h3>
          <div>
            <button onClick={() => setConsultationOpen(true)} className="btn-sage-pill uppercase text-xs font-semibold tracking-wider px-8 py-2.5 shadow-md cursor-pointer">Pick a time</button>
          </div>
          <button onClick={() => handleNavigate('about')} className="text-slate-300 text-xs underline hover:text-white transition inline-block pt-1 cursor-pointer">Learn More</button>
        </div>
      </section>

      {/* 5. GLOBAL FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* MODALS & DRAWERS */}
      <CartDrawer />
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ProductComparisonModal isOpen={compareOpen} onClose={() => setCompareOpen(false)} onSelectProduct={() => handleNavigate('shop')} />
      <VideoLibraryModal isOpen={videoLibraryOpen} onClose={() => setVideoLibraryOpen(false)} />
    </main>
  );
}
