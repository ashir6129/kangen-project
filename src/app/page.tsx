'use client';

import React, { useState, useEffect } from 'react';
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
import { GreenerFoodDetail } from '@/components/GreenerFoodDetail';
import { GreenerBeautyDetail } from '@/components/GreenerBeautyDetail';
import { GreenerGardenDetail } from '@/components/GreenerGardenDetail';
import { GreenerPetDetail } from '@/components/GreenerPetDetail';
import { ContactFormSection } from '@/components/ContactFormSection';

export default function Home() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedDetailArticleId, setSelectedDetailArticleId] = useState<string>('detail-1');
  const [selectedFoodArticleId, setSelectedFoodArticleId] = useState<string>('food-detail-1');
  const [selectedBeautyArticleId, setSelectedBeautyArticleId] = useState<string>('beauty-detail-4');
  const [selectedGardenArticleId, setSelectedGardenArticleId] = useState<string>('garden-detail-1');
  const [selectedPetArticleId, setSelectedPetArticleId] = useState<string>('pet-detail-1');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [compareOpen, setCompareOpen] = useState<boolean>(false);
  const [videoLibraryOpen, setVideoLibraryOpen] = useState<boolean>(false);

  const handleOpenSearch = (query: string = '') => {
    setSearchQuery(query);
    setSearchOpen(true);
  };

  // Sync active page with URL hash and listen for browser Back/Forward button clicks
  useEffect(() => {
    const parseUrlHash = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (!hash) {
        setActivePage('home');
        return;
      }

      const [page, queryString] = hash.split('?');
      const params = new URLSearchParams(queryString || '');

      if (page) setActivePage(page);

      const homeArt = params.get('homeArt');
      if (homeArt) setSelectedDetailArticleId(homeArt);

      const foodArt = params.get('foodArt');
      if (foodArt) setSelectedFoodArticleId(foodArt);

      const beautyArt = params.get('beautyArt');
      if (beautyArt) setSelectedBeautyArticleId(beautyArt);

      const gardenArt = params.get('gardenArt');
      if (gardenArt) setSelectedGardenArticleId(gardenArt);

      const petArt = params.get('petArt');
      if (petArt) setSelectedPetArticleId(petArt);
    };

    parseUrlHash();

    const handlePopState = () => {
      parseUrlHash();
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (page: string, targetArticleId?: string) => {
    let newHomeArt = selectedDetailArticleId;
    let newFoodArt = selectedFoodArticleId;
    let newBeautyArt = selectedBeautyArticleId;
    let newGardenArt = selectedGardenArticleId;
    let newPetArt = selectedPetArticleId;

    if (page === 'greener-home-detail' && targetArticleId) {
      newHomeArt = targetArticleId;
      setSelectedDetailArticleId(targetArticleId);
    }
    if (page === 'greener-food-detail' && targetArticleId) {
      newFoodArt = targetArticleId;
      setSelectedFoodArticleId(targetArticleId);
    }
    if (page === 'greener-beauty-detail' && targetArticleId) {
      newBeautyArt = targetArticleId;
      setSelectedBeautyArticleId(targetArticleId);
    }
    if (page === 'greener-garden-detail' && targetArticleId) {
      newGardenArt = targetArticleId;
      setSelectedGardenArticleId(targetArticleId);
    }
    if (page === 'greener-pet-detail' && targetArticleId) {
      newPetArt = targetArticleId;
      setSelectedPetArticleId(targetArticleId);
    }

    setActivePage(page);

    let newHash = `#${page}`;
    if (page === 'greener-home-detail') {
      newHash += `?homeArt=${targetArticleId || newHomeArt}`;
    } else if (page === 'greener-food-detail') {
      newHash += `?foodArt=${targetArticleId || newFoodArt}`;
    } else if (page === 'greener-beauty-detail') {
      newHash += `?beautyArt=${targetArticleId || newBeautyArt}`;
    } else if (page === 'greener-garden-detail') {
      newHash += `?gardenArt=${targetArticleId || newGardenArt}`;
    } else if (page === 'greener-pet-detail') {
      newHash += `?petArt=${targetArticleId || newPetArt}`;
    }

    if (window.location.hash !== newHash) {
      window.history.pushState(
        { page, homeArt: newHomeArt, foodArt: newFoodArt, beautyArt: newBeautyArt, gardenArt: newGardenArt, petArt: newPetArt },
        '',
        newHash
      );
    }

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

          <div className="bg-[#3E4C4C] py-4 px-4 shadow-inner border-y border-[#7AD1C4]/30">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
              <input
                type="text"
                placeholder="Search Greener Home..."
                className="w-72 sm:w-96 px-5 py-2.5 rounded-full text-xs text-[#293434] bg-white shadow-inner outline-none focus:ring-2 focus:ring-[#7AD1C4] font-medium"
              />
              <button className="bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] px-6 py-2.5 text-xs font-bold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
                Search
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#293434]">
              Create a chemical and toxin-free home with Kangen Water®.
            </h2>
            <p className="text-[#576a6a] text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto font-medium">
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
                { id: 'detail-6', title: 'Kangen Water® Liquid Castile Cleaner', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop', desc: 'Castile soap infused with Kangen Water provides multi-surface cleaning power for counters, floors, and sinks.' },
                { id: 'detail-8', title: 'Strong Kangen Water Window Cleaner', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop', desc: 'Learn how to make a streak-free, non-toxic window cleaner using Strong Kangen Water® and white vinegar.' },
                { id: 'detail-9', title: 'All-Purpose Strong Kangen Water Cleaner', img: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&auto=format&fit=crop', desc: 'Learn how to make a versatile, all-natural All-Purpose Spray Cleaner using Strong Kangen Water®, washing soda, and borax.' }
              ].map((card, i) => (
                <div
                  key={i}
                  onClick={() => {
                    handleNavigate('greener-home-detail', card.id);
                  }}
                  className="modern-card bg-white border border-[#3E4C4C]/15 rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="h-52 overflow-hidden relative">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-108 transition duration-700 ease-out" />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-[#293434] group-hover:text-[#47a295] transition">{card.title}</h3>
                      <p className="text-xs text-[#576a6a] leading-relaxed font-sans">{card.desc}</p>
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
          initialArticleId={selectedDetailArticleId}
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

          <div className="bg-[#3E4C4C] py-4 px-4 shadow-inner border-y border-[#7AD1C4]/30">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
              <input
                type="text"
                placeholder="Search Greener Food..."
                className="w-72 sm:w-96 px-5 py-2.5 rounded-full text-xs text-[#293434] bg-white shadow-inner outline-none focus:ring-2 focus:ring-[#7AD1C4] font-medium"
              />
              <button className="bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] px-6 py-2.5 text-xs font-bold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
                Search
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#293434] mb-2">
              Kangen Water® in the Kitchen
            </h2>
            <p className="font-serif italic text-sm text-[#47a295] font-semibold mb-6">Tasty, Healthy, and Clean recipes for your table.</p>
            <p className="text-[#576a6a] text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto font-medium">
              Water is the single, most important ingredient in your kitchen. Consider what type of water you are using when working in your kitchen. Tap water is full of contaminants. Simply replacing tap water with appropriate Kangen Water® makes a world of difference in flavor and quality.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { id: 'food-detail-1', title: 'Best Produce', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop', desc: 'Buying local and organic produce ensures fresher, healthier food while reducing exposure to pesticides and GMOs.' },
                { id: 'food-detail-2', title: 'Cleaning Produce with Kangen Water®', img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop', desc: 'Washing your produce with Kangen Water® removes dirt, pathogens, and oily pesticides that tap water cannot wash off.' },
                { id: 'food-detail-3', title: 'Cooking with Kangen Water®', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop', desc: 'Learn how to integrate Kangen Water® into your favorite recipes by simply replacing tap water with one of the 3 different types of Kangen Water® for cooking.' },
                { id: 'food-detail-4', title: 'Kangen Tea', img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop', desc: 'Infuse tea effortlessly! Kangen Water\'s micro-clustered molecules penetrate tea leaves quickly even with cold or room-temp water.' },
                { id: 'food-detail-5', title: 'Brining & Tenderizing Meat with Kangen Water®', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop', desc: 'Soak meats in Kangen 9.5 before cooking to draw out gamey odors, tenderize tough fibers, and lock in savory natural juices.' },
                { id: 'food-detail-6', title: 'Green Smoothie', img: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=800&auto=format&fit=crop', desc: 'Adapted from Sakara, The 10-Day Reset. Boost your morning smoothie by blending organic greens with Kangen Water.' },
                { id: 'food-detail-7', title: 'Sayra\'s Cornbread', img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=800&auto=format&fit=crop', desc: 'Recipe from Sundays At Moosewood Restaurant. Bake lighter, fluffier cornbread using Kangen 9.5 Water.' },
                { id: 'food-detail-8', title: 'Kangen Water® with a Twist', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop', desc: 'Drink Green, Drink Healthy: Liven up your alkaline Kangen Water® with natural citrus, fresh berries, mint, and tea infusions.' },
                { id: 'food-detail-9', title: 'Chicken with Artichokes in Creamy Mustard Sauce', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop', desc: 'Recipe from dinneralovestory.com. Tender chicken thighs with artichokes in a rich creamy Dijon mustard sauce.' },
                { id: 'food-detail-10', title: 'Chicken and Barley Soup', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop', desc: 'Recipe from Dinner the Playbook. A comforting, nutrient-dense chicken and barley soup diluted & simmered with Kangen Water®.' },
                { id: 'food-detail-11', title: 'Boiled Kale with a Fried Egg and Toast', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop', desc: 'Adapted from The Zuni Café Cookbook. Tender dino kale simmered in Kangen Water® served over garlic-rubbed toast with a fried egg.' },
                { id: 'food-detail-12', title: 'Salmon Baked in Parchment', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop', desc: 'Recipe from Moosewood Restaurant Celebrates. Tender salmon fillets baked in parchment with a shallot, wine & fresh herb reduction.' },
                { id: 'food-detail-13', title: 'Honey Sesame Seared Tuna with Wasabi Cucumber Salad', img: 'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?q=80&w=800&auto=format&fit=crop', desc: 'Recipe from wildoats.com. Sesame-crusted seared ahi tuna served over chilled wasabi cucumber, carrot & green onion salad.' }
              ].map((card, i) => (
                <div
                  key={i}
                  onClick={() => {
                    handleNavigate('greener-food-detail', card.id);
                  }}
                  className="modern-card bg-white border border-[#3E4C4C]/15 rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="h-52 overflow-hidden relative">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-108 transition duration-700 ease-out" />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-[#293434] group-hover:text-[#47a295] transition">{card.title}</h3>
                      <p className="text-xs text-[#576a6a] leading-relaxed font-sans">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GREENER FOOD DETAIL VIEW */}
      {activePage === 'greener-food-detail' && (
        <GreenerFoodDetail
          initialArticleId={selectedFoodArticleId}
          onNavigate={handleNavigate}
          onOpenConsultation={() => setConsultationOpen(true)}
        />
      )}

      {/* GREENER BEAUTY CATEGORY VIEW */}
      {activePage === 'beauty' && (
        <div className="bg-[#EDEEE7]">
          <div
            className="relative w-full h-72 sm:h-80 bg-cover bg-center flex items-center justify-center shadow-inner"
            style={{ backgroundImage: "url('https://www.drinkfromheaven.com/affsites/eco/images/slide/home_beauty_spa.jpg')" }}
          >
            <div className="absolute inset-0 bg-[#293434]/50 backdrop-blur-xs"></div>
            <h1 className="relative z-10 font-serif text-4xl sm:text-6xl text-white font-bold drop-shadow-lg tracking-wide">Greener Beauty</h1>
          </div>

          <div className="bg-[#3E4C4C] py-4 px-4 shadow-inner border-y border-[#7AD1C4]/30">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
              <input
                type="text"
                placeholder="Search Greener Beauty..."
                className="w-72 sm:w-96 px-5 py-2.5 rounded-full text-xs text-[#293434] bg-white shadow-inner outline-none focus:ring-2 focus:ring-[#7AD1C4] font-medium"
              />
              <button className="bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] px-6 py-2.5 text-xs font-bold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
                Search
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#293434] mb-4">
              Go Green and Be Beautiful!
            </h2>
            <p className="text-[#576a6a] text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto font-medium">
              As your skin absorbs 60% of what you put on it, it's time to start replacing chemical-based products with all-natural ingredients! Your skin is your largest organ, and by replacing chemical-laden beauty products with Kangen Water®, you can unlock a world of clean, green, all-natural beauty solutions. Discover how Kangen Water® can rejuvenate your skin, hair, and overall beauty routine!
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { id: 'beauty-detail-1', title: 'Clean Green Beauty', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop', desc: 'Now that you\'ve transformed your home into a tranquil green oasis, take a closer look at adding green living to your personal care.' },
                { id: 'beauty-detail-2', title: 'Hair Care with Kangen Water®', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop', desc: 'Rinse your hair with Beauty Water (6.0 pH) to lock in natural moisture, reduce tangles, and achieve incredible shine.' },
                { id: 'beauty-detail-3', title: 'A New Approach to Skin Care', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop', desc: 'Replacing harsh chemical astringents with Kangen Beauty Water® keeps skin clean, hydrated, and youthful.' },
                { id: 'beauty-detail-4', title: 'Be Green, Be Ravishing!', img: 'https://images.unsplash.com/photo-1512290900676-26c2a5a545b6?q=80&w=800&auto=format&fit=crop', desc: 'To have a routine that keeps you healthy and hydrated can make you feel beautiful inside and out!' },
                { id: 'beauty-detail-5', title: 'Kangen Fragrance', img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop', desc: 'Create custom chemical-free body sprays and linen mists using Beauty Water and essential oils.' },
                { id: 'beauty-detail-6', title: 'Herbal All-Natural Shampoo', img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop', desc: 'Formulate a gentle, sulphate-free herbal shampoo using Kangen Water® and botanical extracts.' },
                { id: 'beauty-detail-7', title: 'Beauty Water Lotion', img: 'https://images.unsplash.com/photo-1607006482602-76ca97ac2a0c?q=80&w=800&auto=format&fit=crop', desc: 'Nourish dry skin with a soothing, fast-absorbing body lotion crafted with Kangen Beauty Water®.' },
                { id: 'beauty-detail-8', title: 'Enagic Non-Toxic Hand Sanitizer Recipe', img: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=800&auto=format&fit=crop', desc: 'Have you ever investigated what is in your antibacterial products? Try our natural Strong Acidic Water recipe instead.' },
                { id: 'beauty-detail-9', title: 'Beauty Water Conditioner', img: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop', desc: 'Deeply nourish and hydrate hair with fresh Beauty Water, egg yolk, and natural Acai Berry or Sweet Almond oil. No harsh chemicals!' }
              ].map((card, i) => (
                <div
                  key={i}
                  onClick={() => {
                    handleNavigate('greener-beauty-detail', card.id);
                  }}
                  className="modern-card bg-white border border-[#3E4C4C]/15 rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="h-52 overflow-hidden relative">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-108 transition duration-700 ease-out" />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-[#293434] group-hover:text-[#47a295] transition">{card.title}</h3>
                      <p className="text-xs text-[#576a6a] leading-relaxed font-sans">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GREENER BEAUTY DETAIL VIEW */}
      {activePage === 'greener-beauty-detail' && (
        <GreenerBeautyDetail
          initialArticleId={selectedBeautyArticleId}
          onNavigate={handleNavigate}
          onOpenConsultation={() => setConsultationOpen(true)}
        />
      )}

      {/* GREENER GARDEN CATEGORY VIEW */}
      {activePage === 'garden' && (
        <div className="bg-[#EDEEE7]">
          <div
            className="relative w-full h-72 sm:h-80 bg-cover bg-center flex items-center justify-center shadow-inner"
            style={{ backgroundImage: "url('https://www.drinkfromheaven.com/affsites/eco/images/slide/home_garden_plant.jpg')" }}
          >
            <div className="absolute inset-0 bg-[#293434]/50 backdrop-blur-xs"></div>
            <h1 className="relative z-10 font-serif text-4xl sm:text-6xl text-white font-bold drop-shadow-lg tracking-wide">Greener Garden</h1>
          </div>

          <div className="bg-[#3E4C4C] py-4 px-4 shadow-inner border-y border-[#7AD1C4]/30">
            <div className="max-w-xl mx-auto flex items-center justify-center gap-3">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-72 sm:w-80 px-5 py-2.5 rounded-full text-xs text-[#293434] bg-white shadow-inner outline-none focus:ring-2 focus:ring-[#7AD1C4] font-medium"
              />
              <button className="bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] px-6 py-2.5 text-xs font-bold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
                SEND THE EBOOK
              </button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 pt-14 pb-20">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#293434] mb-4">
                Reconnect with the Earth
              </h2>
              <p className="text-[#576a6a] text-xs sm:text-sm leading-relaxed font-medium">
                Gardening is great, but gardening with Kangen Water® is even better! Just like your body needs Kangen Water® for optimal hydration, your plants need this remarkable water for optimal growth, hydration, and mineralization. Kangen Water® stimulates germination and improves seedling development, keeping your plants in peak condition without the use of harmful chemicals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              <div className="space-y-8">
                <div className="text-center p-6 border border-[#3E4C4C]/15 rounded-2xl bg-white space-y-2.5 shadow-md">
                  <div className="w-24 h-24 rounded-full border-4 border-[#7AD1C4] mx-auto overflow-hidden shadow">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Shahina Sajid" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#293434]">Shahina Sajid 6A8-6</h4>
                  <p className="text-[11px] text-[#47a295] font-bold">Enagic® International Distributor</p>
                  <p className="text-[11px] text-slate-700 font-mono font-bold">469-648-8298</p>
                </div>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'garden-detail-1', title: 'A Greener Garden', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop', desc: 'Spending time in the garden is one of the simplest ways to live more lightly on the planet while doing something good for yourself.' },
                  { id: 'garden-detail-2', title: 'Choosing the Right Water for Each Plant', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop', desc: 'Match each plant to the water it prefers — learn which crops thrive on Kangen Water®, Beauty Water®, or Neutral Water.' },
                  { id: 'garden-detail-3', title: 'Kids Benefit From Gardening Too', img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=800&auto=format&fit=crop', desc: 'Get kids outside and hands-in-the-dirt! Gardening builds physical fitness, motor skills, and healthier eating habits.' },
                  { id: 'garden-detail-4', title: 'Composting Basics', img: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?q=80&w=800&auto=format&fit=crop', desc: 'Turn kitchen scraps into rich organic fertilizer while reducing landfill waste with Enagic® water composting.' },
                  { id: 'garden-detail-5', title: 'Neem Oil Spray for Natural Pest Control', img: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?q=80&w=800&auto=format&fit=crop', desc: 'Protect plants naturally from pests using Beauty Water (pH 6.0), neem oil, and mild Castile soap emulsifier.' }
                ].map((card, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      handleNavigate('greener-garden-detail', card.id);
                    }}
                    className="modern-card bg-white border border-[#3E4C4C]/15 rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="h-48 overflow-hidden relative">
                        <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-108 transition duration-700 ease-out" />
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="font-serif text-lg font-bold text-[#293434] group-hover:text-[#47a295] transition">{card.title}</h3>
                        <p className="text-xs text-[#576a6a] leading-relaxed font-sans">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GREENER GARDEN DETAIL VIEW */}
      {activePage === 'greener-garden-detail' && (
        <GreenerGardenDetail
          initialArticleId={selectedGardenArticleId}
          onNavigate={handleNavigate}
          onOpenConsultation={() => setConsultationOpen(true)}
        />
      )}

      {/* GREENER PET CATEGORY VIEW */}
      {activePage === 'pet' && (
        <div className="bg-[#EDEEE7]">
          <div
            className="relative w-full h-72 sm:h-80 bg-cover bg-center flex items-center justify-center shadow-inner"
            style={{ backgroundImage: "url('https://www.drinkfromheaven.com/affsites/eco/images/slide/home_pet.jpg')" }}
          >
            <div className="absolute inset-0 bg-[#293434]/50 backdrop-blur-xs"></div>
            <h1 className="relative z-10 font-serif text-4xl sm:text-6xl text-white font-bold drop-shadow-lg tracking-wide">Greener Pet</h1>
          </div>

          <div className="bg-[#3E4C4C] py-4 px-4 shadow-inner border-y border-[#7AD1C4]/30">
            <div className="max-w-xl mx-auto flex items-center justify-center gap-3">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-72 sm:w-80 px-5 py-2.5 rounded-full text-xs text-[#293434] bg-white shadow-inner outline-none focus:ring-2 focus:ring-[#7AD1C4] font-medium"
              />
              <button className="bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] px-6 py-2.5 text-xs font-bold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
                SEND THE EBOOK
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#293434]">
              Protect your Pets
            </h2>
            <p className="text-[#576a6a] text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto font-medium">
              Alarming amounts of heavy metals, lead, and chemical toxins have been discovered in tap water at levels much higher than those found in municipal standards, meaning that our beloved pets are much more susceptible to toxic buildup than we are. Grooming products, flea and tick treatments, and even pet food are found to contain harmful contaminants and chemicals, increasing the risk of sickness and shortening the lives of our pets. Pet owners are studying these risks of exposure and long-term effects. This means that we are the first line of defense when it comes to our fur babies, and Kangen Water® is the key to protecting our pets. Use Kangen Water® to optimally hydrate your pet, create natural holistic remedies for ailments, and to even make your own organic pet food!
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { id: 'pet-detail-1', title: 'Keeping Your Pet Safe from Fleas and Ticks', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop', desc: 'Protect your pets naturally from parasites without harsh chemical pesticides using Beauty Water and essential oils.' },
                { id: 'pet-detail-2', title: 'Getting Rid of Pet Odors the Green Way', img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop', desc: 'Tackle pet odors, upholstery stains, bad breath, and toy sanitation using chemical-free Enagic® water solutions.' },
                { id: 'pet-detail-3', title: 'Homemade Kangen Water® Pet Shampoo', img: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?q=80&w=800&auto=format&fit=crop', desc: 'Formulate a gentle, chemical-free pet shampoo with glycerine, Enagic® soap, and Kangen Water® for a shiny, soft coat.' },
                { id: 'pet-detail-4', title: 'Don\'t Forget Your Pet\'s Hydration', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop', desc: 'Keep pets energized, healthy, and properly hydrated with clean Enagic® water to prevent heat stress and organ strain.' }
              ].map((card, i) => (
                <div
                  key={i}
                  onClick={() => {
                    handleNavigate('greener-pet-detail', card.id);
                  }}
                  className="modern-card bg-white border border-[#3E4C4C]/15 rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="h-48 overflow-hidden relative">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-108 transition duration-700 ease-out" />
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="font-serif text-base font-bold text-[#293434] group-hover:text-[#47a295] transition leading-snug">{card.title}</h3>
                      <p className="text-xs text-[#576a6a] leading-relaxed font-sans">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GREENER PET DETAIL VIEW */}
      {activePage === 'greener-pet-detail' && (
        <GreenerPetDetail
          initialArticleId={selectedPetArticleId}
          onNavigate={handleNavigate}
          onOpenConsultation={() => setConsultationOpen(true)}
        />
      )}

      {/* SHOP VIEW */}
      {activePage === 'shop' && <ShopSection />}

      {/* 5 WATER TYPES VIEW */}
      {activePage === 'water-types' && <WaterTypesSection onNavigate={handleNavigate} />}

      {/* CONTACT PAGE VIEW */}
      {activePage === 'contact' && <ContactFormSection onNavigate={handleNavigate} />}

      {/* CERTIFICATIONS / ABOUT VIEWS */}
      {(activePage === 'about' || activePage === 'certifications') && (
        <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
          <div className="inline-block p-3 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            Enagic® International 6A8-6 Distributor
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
            {activePage === 'certifications' ? 'Enagic® WQA Gold Seal Certifications' : 'Shahina Sajid 6A8-6'}
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
