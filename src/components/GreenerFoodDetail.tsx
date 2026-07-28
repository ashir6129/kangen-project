'use client';

import React, { useState, useEffect } from 'react';

interface Comment {
  id: string;
  name: string;
  email: string;
  date: string;
  text: string;
  likes: number;
  liked?: boolean;
  avatarBg?: string;
  replies?: Comment[];
}

interface ArticleSubSection {
  heading?: string;
  subtext?: string;
  image?: string;
  imageOverlayText?: string;
  text?: string;
}

interface ArticleDetailData {
  id: string;
  title: string;
  image: string;
  desc: string;
  content: string[];
  linkCallout?: { label: string; url: string };
  bulletPoints?: string[];
  subSections?: ArticleSubSection[];
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'food-comm-1',
    name: 'Melissa',
    email: 'melissa@example.com',
    date: 'Nov 04',
    text: 'Washing our farm fresh produce with Kangen 11.5 water removes so much yellow pesticide residue! Produce stays fresh in the fridge twice as long.',
    likes: 6,
    avatarBg: 'bg-[#87b076]',
  },
  {
    id: 'food-comm-2',
    name: 'David G.',
    email: 'davidg@example.com',
    date: 'Oct 19',
    text: 'We bought a CSA farm share this summer and washing the local veggies in Kangen Water made the flavor incredible!',
    likes: 4,
    avatarBg: 'bg-amber-600',
  },
  {
    id: 'food-comm-3',
    name: 'Sarah K.',
    email: 'sarahk@example.com',
    date: 'Aug 22',
    text: 'Organic produce plus Kangen 11.5 soak is the ultimate combo for clean healthy eating.',
    likes: 5,
    avatarBg: 'bg-sky-600',
  },
];

const ARTICLES: ArticleDetailData[] = [
  {
    id: 'food-detail-1',
    title: 'Best Produce',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1200&auto=format&fit=crop',
    desc: 'Buying local and organic produce ensures fresher, healthier food while reducing exposure to pesticides and GMOs.',
    content: [
      'Even the most accomplished Kangen Gardener has to purchase fruits and veggies to supplement the growing season. Local produce is the second best option to growing your own food. Buying local ensures that you are sampling the best selection of seasonally available produce. Seasonal produce is healthier and fresher, with the added advantage of saving you money since it doesn’t have to travel as far as out-of-season goods. Purchasing a share in a CSA (Community-Supported Agriculture) is an awesome way to discover exactly what’s in season and support your local farmers.',
      'However, there are times when a recipe calls for something that can’t be found locally. Always make sure to purchase certified organic produce to reduce your exposure to pesticides and GMO’s. Most grocery stores now carry a wide variety of organic fruits and vegetables making it easier than ever to eat cleaner, fresher food. Remember, once you bring home your produce, wash it with Kangen Water®.'
    ],
    linkCallout: {
      label: 'To find local food near you, go here.',
      url: 'https://www.ams.usda.gov/local-food-directories/farmersmarkets'
    },
    bulletPoints: [
      'Buy local & seasonal produce to maximize nutrient density and save money.',
      'Support Community-Supported Agriculture (CSA) to discover what is in season.',
      'Choose certified organic produce to minimize chemical pesticide and GMO exposure.',
      'Always soak and wash produce in Strong Kangen Water® (11.5 pH) upon bringing it home.'
    ]
  },
  {
    id: 'food-detail-2',
    title: 'Cleaning Produce with Kangen Water®',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop',
    desc: 'Washing your produce with Kangen Water® removes dirt, pathogens, and oily pesticides that tap water cannot wash off.',
    content: [
      'As previously suggested, washing your produce is a must. Organic produce isn’t protected from pathogens in dirt and germs from various hands checking for ripeness. This is when your Kangen Water® really comes in handy. The Kangen machine produces up to 5 types of healthy water to get your food clean! Utilizing the various waters available like: Strong Acidic Water® (pH 2.5), Strong Kangen Water® (pH 11.0), and Kangen Water® (pH 9.5), you can ensure that your food is super clean and ready to eat.',
      'If you don\'t have the luxury or availability of organic produce it’s even more important to wash your fruits and veggies considering they have been treated with pesticides. Strong Kangen Water® is powerful enough to break apart the pesticide, leaving your food clean and chemical-free. Tap water itself can’t clean your produce and produce sprays are expensive and leave an aftertaste on the more porous produce. Using your Kangen® machine in the kitchen is the healthiest and most cost-effective way to clean your produce!'
    ],
    bulletPoints: [
      'Always buy in season to ensure freshness.',
      'Always examine produce for ripeness and bruising.',
      'Wash hands before and after handling food.',
      'Now that everything is clean and ready to use, check out our favorite recipes substituting Kangen Water®!'
    ]
  },
  {
    id: 'food-detail-3',
    title: 'Cooking with Kangen Water®',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop',
    desc: 'Learn how to integrate Kangen Water® into your favorite recipes by simply replacing tap water with appropriate Kangen Water®.',
    content: [
      'Water is the single most important ingredient in your kitchen. Replacing tap water with Kangen Water® enhances flavors, tenderizes ingredients, and preserves natural colors.',
      'Use Kangen 9.5 for boiling pasta and rice to absorb moisture quickly, and Neutral Water (7.0 pH) for baby food and prescriptions.'
    ]
  },
  {
    id: 'food-detail-4',
    title: 'Kangen Tea',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop',
    desc: 'Infuse tea effortlessly! Kangen Water\'s micro-clustered molecules penetrate tea leaves quickly even with room-temp water.',
    content: [
      'Kangen Water® micro-clustering allows water to penetrate tea leaves and coffee grounds rapidly, drawing out rich aromas and antioxidants without bitterness.'
    ]
  },
  {
    id: 'food-detail-5',
    title: 'Brining & Tenderizing Meat with Kangen Water®',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    desc: 'Soak meats in Kangen 9.5 before cooking to draw out gamey odors, tenderize tough fibers, and lock in savory natural juices.',
    content: [
      'Soaking chicken, beef, or fish in Kangen 9.5 or 11.5 for 20 minutes before cooking removes gamey smells and tenderizes meat fibers naturally.'
    ]
  },
  {
    id: 'food-detail-6',
    title: 'Green Smoothie',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=1200&auto=format&fit=crop',
    desc: 'Boost your daily morning smoothie by blending organic greens with Kangen Water for maximum nutrient absorption.',
    content: [
      'Blend organic kale, spinach, banana, and chia seeds with cold Kangen 9.5 Water for optimal cell hydration and antioxidant absorption.'
    ]
  },
  {
    id: 'food-detail-7',
    title: "Sayra's Cornbread",
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=1200&auto=format&fit=crop',
    desc: 'Bake lighter, fluffier cornbread using Kangen 9.5 Water. Micro-clustering enhances texture and preserves rich corn flavor.',
    content: [
      'Bake fluffier, moist cornbread by substituting milk or tap water with Kangen 9.5 Water in your favorite batter recipe.'
    ]
  },
  {
    id: 'food-detail-8',
    title: 'Kangen Water® with a Twist',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop',
    desc: 'Drink Green, Drink Healthy: Liven up your alkaline Kangen Water® with natural citrus, fresh berries, mint, and tea infusions.',
    content: [
      'Staying hydrated with alkaline Kangen Water® is an important step toward physical health, but a healthy diet is also paramount in overall wellness. Healthy eating supports a healthy body.',
      'Here\'s a ranking of the most consumed beverages in the U.S.:\n1. Carbonated Soft Drinks (almost twice as much as any other beverage)\n2. Bottled Water\n3. Coffee\n4. Milk\n5. Beer',
      'Aside from what some of these beverages can do to your overall health, they are also harmful to our environment. Over 75% of all plastic bottles end up in landfills (taking 500 years to biodegrade). PET plastic generates 13 lbs of CO2 per 1 lb of plastic. US coffee drinkers use 65 billion paper & plastic cups annually—wrapping around Earth 55 times!',
      'Kangen Water® hydrates your body with clean, healthy water without wasteful packaging. Simply fill up a BPA-free reusable Enagic® water bottle with Kangen Water® before leaving the house and enjoy healthy, green hydration all day.'
    ],
    bulletPoints: [
      'Say NO to plastic bottles and wasteful disposable paper packaging.',
      'Fill a BPA-free reusable Enagic® bottle with Kangen Water® before leaving home.',
      'Fight the urge to fill your body with unhealthy sugary soda drinks.',
      'Be smart: hydrate with fresh Kangen Water® for better health and a greener life.'
    ],
    subSections: [
      {
        heading: "Making the Switch: Natural Flavor Ideas for Kangen Water®",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
        imageOverlayText: "Natural Fruit & Herb Infusions",
        text: "Sometimes it's not so easy to replace sugary or caffeinated drinks. Use these ideas to liven up your Kangen Water® with natural flavors:\n\n• Crushed Herbs: Add mint or lemongrass for refreshing aroma and flavor.\n• Citrus & Berries: Cut or squeeze oranges, limes, blueberries, or strawberries. Try mixing lemon and lime.\n• Pitcher Slices: Fill a pitcher with lemon slices and Kangen Water® for cool, refreshing water all day.\n• Natural Juices: Add unsweetened fruit juices such as cranberry cocktail for stronger flavor.\n• Fruit Ice Cubes: Freeze small fruit slices (clementine oranges, mango, berries) as delicious ice cubes in your Kangen Water®.\n• Afternoon Iced Tea: Add Fair Trade herbal tea bags to cold Kangen Water® for effortless infusion."
      }
    ]
  }
];

interface GreenerFoodDetailProps {
  initialArticleId?: string;
  onNavigate: (page: string) => void;
  onOpenConsultation?: () => void;
}

export const GreenerFoodDetail: React.FC<GreenerFoodDetailProps> = ({
  initialArticleId = 'food-detail-1',
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(initialArticleId);
  const [showForm, setShowForm] = useState<boolean>(true);
  
  // Real-time comment form state
  const [commentText, setCommentText] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [notifyMe, setNotifyMe] = useState<boolean>(false);
  const [optinEbook, setOptinEbook] = useState<boolean>(false);

  // Reply state
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState<string>('');

  // Local state for comments, backed by localStorage for real-time persistence
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialArticleId) {
      setSelectedArticleId(initialArticleId);
    }
  }, [initialArticleId]);

  useEffect(() => {
    try {
      const savedComms = localStorage.getItem(`kangen_food_comments_${selectedArticleId}`);
      if (savedComms) {
        setComments(JSON.parse(savedComms));
      } else {
        setComments(INITIAL_COMMENTS);
      }
      const savedName = localStorage.getItem('kangen_comment_name');
      const savedEmail = localStorage.getItem('kangen_comment_email');
      if (savedName) setFullname(savedName);
      if (savedEmail) setEmail(savedEmail);
    } catch (e) {
      console.error('Error loading comments', e);
    }
  }, [selectedArticleId]);

  const saveCommentsToStorage = (updatedComms: Comment[]) => {
    setComments(updatedComms);
    try {
      localStorage.setItem(`kangen_food_comments_${selectedArticleId}`, JSON.stringify(updatedComms));
    } catch (e) {
      console.error('Error saving comments', e);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || !fullname.trim() || !email.trim()) return;

    if (rememberMe) {
      localStorage.setItem('kangen_comment_name', fullname);
      localStorage.setItem('kangen_comment_email', email);
    }

    const newComment: Comment = {
      id: `food-comm-${Date.now()}`,
      name: fullname,
      email: email,
      date: 'Just now',
      text: commentText,
      likes: 0,
      avatarBg: 'bg-[#87b076]',
    };

    const updated = [newComment, ...comments];
    saveCommentsToStorage(updated);
    setCommentText('');
    setToastMessage('Your comment has been published in real-time!');
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleReplySubmit = (parentId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !fullname.trim()) return;

    const replyObj: Comment = {
      id: `reply-${Date.now()}`,
      name: fullname || 'Guest',
      email: email || '',
      date: 'Just now',
      text: replyText,
      likes: 0,
      avatarBg: 'bg-slate-700',
    };

    const updated = comments.map((c) => {
      if (c.id === parentId) {
        return {
          ...c,
          replies: [...(c.replies || []), replyObj],
        };
      }
      return c;
    });

    saveCommentsToStorage(updated);
    setReplyingToId(null);
    setReplyText('');
    setToastMessage('Reply posted!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleLike = (id: string) => {
    const updated = comments.map((c) => {
      if (c.id === id) {
        const liked = !c.liked;
        return {
          ...c,
          liked,
          likes: liked ? c.likes + 1 : c.likes - 1,
        };
      }
      return c;
    });
    saveCommentsToStorage(updated);
  };

  const currentArticle = ARTICLES.find((a) => a.id === selectedArticleId) || ARTICLES[0];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#87b076] text-white px-5 py-3 rounded-md shadow-xl text-xs font-semibold animate-bounce flex items-center gap-2">
          <span>✓</span> {toastMessage}
        </div>
      )}

      {/* Sub Header Banner matching screenshot */}
      <section
        className="relative w-full h-64 sm:h-72 bg-cover bg-center flex items-center justify-center shadow-inner"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1600&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-black/45 backdrop-blur-xs"></div>
        <h1 className="relative z-10 font-serif text-3xl sm:text-5xl text-white font-normal drop-shadow-md tracking-wide">
          Greener Food
        </h1>
      </section>

      {/* Search Header Bar matching screenshot */}
      <section className="wood-consult-bg py-3 px-4 shadow-inner border-y border-slate-900/40">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
          <input
            type="text"
            placeholder="Search Greener Food..."
            className="w-64 sm:w-96 px-5 py-2 rounded-full text-xs text-slate-700 bg-white shadow-inner outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button className="bg-[#87b076] hover:bg-[#759e64] text-white px-6 py-2 text-xs font-semibold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
            SEARCH
          </button>
        </div>
      </section>

      {/* Main Content Layout (Sidebar + Article) */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT SIDEBAR (3 cols) */}
          <aside className="lg:col-span-3 space-y-6">
            {/* Distributor Profile Card */}
            <div className="p-6 border border-slate-200/80 rounded-lg bg-slate-50 text-center space-y-3 shadow-xs">
              <div className="w-24 h-24 rounded-full border-2 border-[#87b076] mx-auto overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                  alt="Cynthia Briganti"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif font-bold text-base text-[#333333]">
                Cynthia Briganti 6A8-6
              </h4>
              <p className="text-xs text-slate-500 leading-tight">
                Enagic® International Distributor
              </p>
              <p className="text-xs text-slate-700 font-mono font-semibold">
                📱 818 859-0109
              </p>
              <div>
                <button
                  onClick={() => onOpenConsultation?.()}
                  className="text-xs text-emerald-700 font-semibold underline hover:text-emerald-900 cursor-pointer"
                >
                  contact
                </button>
              </div>
            </div>

            {/* Sidebar Article List */}
            <div className="space-y-3">
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                {ARTICLES.map((art) => {
                  const isActive = art.id === selectedArticleId;
                  return (
                    <button
                      key={art.id}
                      onClick={() => {
                        setSelectedArticleId(art.id);
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className={`w-full text-left p-2 rounded-lg border transition flex items-center gap-3 cursor-pointer ${
                        isActive
                          ? 'border-blue-500 bg-slate-100 shadow-xs ring-1 ring-blue-500'
                          : 'border-slate-200/80 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <img
                        src={art.image}
                        alt={art.title}
                        className={`w-14 h-12 rounded object-cover border ${
                          isActive ? 'grayscale-0' : 'grayscale-20'
                        }`}
                      />
                      <span
                        className={`text-xs font-serif font-semibold leading-snug line-clamp-2 ${
                          isActive ? 'text-slate-900 font-bold' : 'text-slate-700'
                        }`}
                      >
                        {art.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* MAIN ARTICLE AREA (9 cols) */}
          <main className="lg:col-span-9 space-y-10">

            {/* Article Detail Header */}
            <article className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#333333]">
                  {currentArticle.title}
                </h2>
                <button
                  onClick={() => onNavigate('food')}
                  className="text-xs font-semibold text-slate-500 hover:text-emerald-700 transition flex items-center gap-1 cursor-pointer"
                >
                  ‹ OVERVIEW
                </button>
              </div>

              {/* Main Feature Image */}
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs max-h-[440px]">
                <img
                  src={currentArticle.image}
                  alt={currentArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-sans pt-2">
                {currentArticle.content.map((paragraph, idx) => (
                  <React.Fragment key={idx}>
                    <p className="text-slate-600 leading-relaxed">
                      {paragraph}
                    </p>
                    {idx === 0 && currentArticle.linkCallout && (
                      <p className="py-2">
                        <a
                          href={currentArticle.linkCallout.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-emerald-700 font-semibold underline hover:text-emerald-900"
                        >
                          {currentArticle.linkCallout.label}
                        </a>
                      </p>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Bullet Points List if present */}
              {currentArticle.bulletPoints && currentArticle.bulletPoints.length > 0 && (
                <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-5 space-y-3">
                  <h4 className="font-serif font-bold text-base text-[#333333]">
                    Best Produce Tips & Highlights:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-sans">
                    {currentArticle.bulletPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-[#87b076] font-bold text-base">✓</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </article>

            {/* Category Breadcrumbs Nav Bar */}
            <div className="bg-slate-100 rounded-lg p-3 text-xs text-slate-600 border border-slate-200/80 flex flex-wrap items-center gap-2 font-serif">
              <button
                onClick={() => onNavigate('greener-home')}
                className="text-slate-600 hover:text-emerald-700 hover:underline cursor-pointer"
              >
                Greener Home
              </button>
              <span>/</span>
              <button
                onClick={() => onNavigate('food')}
                className="font-bold text-emerald-800 hover:underline cursor-pointer"
              >
                Greener Food
              </button>
              <span>/</span>
              <button
                onClick={() => onNavigate('beauty')}
                className="text-slate-600 hover:text-emerald-700 hover:underline cursor-pointer"
              >
                Greener Beauty
              </button>
              <span>/</span>
              <button
                onClick={() => onNavigate('garden')}
                className="text-slate-600 hover:text-emerald-700 hover:underline cursor-pointer"
              >
                Greener Garden
              </button>
              <span>/</span>
              <button
                onClick={() => onNavigate('pet')}
                className="text-slate-600 hover:text-emerald-700 hover:underline cursor-pointer"
              >
                Greener Pet
              </button>
              <span>/</span>
              <button
                onClick={() => onNavigate('shop')}
                className="text-slate-600 hover:text-emerald-700 hover:underline cursor-pointer"
              >
                Products
              </button>
              <span>/</span>
              <button
                onClick={() => onNavigate('home')}
                className="text-slate-600 hover:text-emerald-700 hover:underline cursor-pointer"
              >
                Video Demonstrations
              </button>
            </div>

            {/* REAL-TIME INTERACTIVE COMMENTS SECTION */}
            <section className="space-y-8 pt-4 border-t border-slate-200">

              {/* Comments Section Header */}
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-normal text-[#333333]">
                  {comments.length} Comments
                </h3>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition shadow cursor-pointer"
                >
                  {showForm ? 'hide form' : 'add comment'}
                </button>
              </div>

              {/* Leave a Comment or Question Form */}
              {showForm && (
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 space-y-4 shadow-xs">
                  <h4 className="font-serif text-lg text-[#333333] font-semibold">
                    Leave a Comment or Question
                  </h4>
                  <p className="text-xs text-slate-500">
                    Your email address will not be published. Your data is kept safe; never sold or rented.{' '}
                    <span className="text-slate-700 underline cursor-pointer">Privacy Policy</span>
                  </p>

                  <form onSubmit={handleCommentSubmit} className="space-y-4">
                    <div>
                      <textarea
                        rows={5}
                        required
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Your Comment or Question *"
                        className="w-full p-4 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder="Your Name *"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email *"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                        />
                        <span>Remember me</span>
                        <span
                          title="If checked, your browser will remember your name and email for future visits."
                          className="w-4 h-4 rounded-full bg-slate-200 text-slate-600 inline-flex items-center justify-center text-[10px] font-bold cursor-help"
                        >
                          ?
                        </span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={notifyMe}
                          onChange={(e) => setNotifyMe(e.target.checked)}
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                        />
                        <span>Notify me of any replies</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={optinEbook}
                          onChange={(e) => setOptinEbook(e.target.checked)}
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                        />
                        <span>Send me the Eco-Living eBook</span>
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="bg-[#87b076] hover:bg-[#759e64] text-white px-8 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition shadow cursor-pointer"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Real-time Comment List */}
              <div className="space-y-6">
                {comments.map((comm) => (
                  <div
                    key={comm.id}
                    className="border border-slate-200/80 bg-white rounded-xl p-5 shadow-xs space-y-4"
                  >
                    {/* Comment Header */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full text-white font-serif font-bold text-sm flex items-center justify-center shadow-xs ${
                          comm.avatarBg || 'bg-[#87b076]'
                        }`}
                      >
                        {comm.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h5 className="font-serif font-bold text-sm text-[#333333]">
                          {comm.name}
                        </h5>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {comm.date}
                        </span>
                      </div>
                    </div>

                    {/* Comment Body */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                      {comm.text}
                      <span className="ml-2 inline-block">
                        <button className="text-[11px] text-emerald-700 hover:underline cursor-pointer">
                          translate
                        </button>
                      </span>
                    </p>

                    {/* Actions: Likes & Reply */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
                      <button
                        onClick={() => toggleLike(comm.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition cursor-pointer ${
                          comm.liked
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold'
                            : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <span>👍</span>
                        <span>{comm.likes}</span>
                      </button>

                      <button
                        onClick={() =>
                          setReplyingToId(replyingToId === comm.id ? null : comm.id)
                        }
                        className="font-serif font-semibold text-slate-600 hover:text-emerald-700 uppercase tracking-wider text-[11px] flex items-center gap-1 cursor-pointer"
                      >
                        ↩ REPLY
                      </button>
                    </div>

                    {/* Reply Sub-form */}
                    {replyingToId === comm.id && (
                      <form
                        onSubmit={(e) => handleReplySubmit(comm.id, e)}
                        className="mt-3 p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3"
                      >
                        <textarea
                          rows={3}
                          required
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder={`Reply to ${comm.name}...`}
                          className="w-full p-3 text-xs bg-white border border-slate-300 rounded outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setReplyingToId(null)}
                            className="text-xs text-slate-500 hover:text-slate-700"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="bg-[#87b076] hover:bg-[#759e64] text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase"
                          >
                            Post Reply
                          </button>
                        </div>
                      </form>
                    )}

                    {/* Render Reply Threads if any */}
                    {comm.replies && comm.replies.length > 0 && (
                      <div className="mt-4 pl-6 border-l-2 border-slate-200 space-y-4">
                        {comm.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/60 space-y-2"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-slate-700 text-white text-xs font-bold flex items-center justify-center">
                                {reply.name.charAt(0)}
                              </div>
                              <span className="font-serif font-bold text-xs text-slate-800">
                                {reply.name}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">
                                {reply.date}
                              </span>
                            </div>
                            <p className="text-xs text-slate-700">{reply.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </section>

          </main>
        </div>
      </div>
    </div>
  );
};
