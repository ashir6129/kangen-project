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

interface ArticleDetailData {
  id: string;
  title: string;
  image: string;
  desc: string;
  content: string[];
  bulletPoints?: string[];
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'pet-comm-1',
    name: 'Dr. Harrison Blake, DVM',
    email: 'dr.blake@veterinarycare.com',
    date: 'Jan 10, 2026',
    text: '★ ★ ★ ★ ★ Hydrating pets with fresh 8.5 - 9.0 pH Kangen Water supports optimal digestion, vitality, and coat health. Switching our golden retriever to Kangen Water and natural Beauty Water grooming completely stopped his skin itching!',
    likes: 21,
    avatarBg: 'bg-[#3E4C4C]',
  },
  {
    id: 'pet-comm-2',
    name: 'Linda & Tom Reynolds',
    email: 'linda.reynolds@gmail.com',
    date: 'Dec 14, 2025',
    text: '★ ★ ★ ★ ★ The DIY Kangen Pet Shampoo (Beauty Water + liquid castile soap) is so easy to mix and leaves our lab’s coat insanely soft without any perfume chemical smells.',
    likes: 13,
    avatarBg: 'bg-[#47a295]',
  },
  {
    id: 'pet-comm-3',
    name: 'Chloe Bennett',
    email: 'chloe.bennett@yahoo.com',
    date: 'Nov 19, 2025',
    text: '★ ★ ★ ★ ★ Our rescue cat used to barely drink water until we filled her pet fountain with Neutral 7.0 pH Kangen Water. Her energy levels are fantastic now! Shahina Sajid was so wonderful during consultation.',
    likes: 16,
    avatarBg: 'bg-[#3E4C4C]',
  },
];

const ARTICLES: ArticleDetailData[] = [
  {
    id: 'pet-detail-1',
    title: 'Keeping Your Pet Safe from Fleas and Ticks',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
    desc: 'Protect your pets naturally from parasites without harsh chemical pesticides using Beauty Water and essential oils.',
    content: [
      'Flea and tick prevention matters — these parasites carry real diseases, and nobody wants their dog or cat suffering through an infestation (or dealing with the mess of fleas taking over the house). The problem is that a lot of standard treatments come loaded with harsh chemicals, and the statistics on pets getting sick or even dying from these products are genuinely concerning.',
      'Spot-on treatments are essentially pesticide applied straight to your pet\'s skin, and they\'ve been linked to skin burns, irritation, seizures, and worse. They\'re not great for your household or the environment either. Pills and chewables aren\'t much of an improvement — they come with their own set of side effects.',
      'A better starting point is your pet\'s overall health. Giving them clean Kangen Water® to drink helps keep them in good shape, and washing them with a Kangen Water®-based shampoo keeps their skin and coat healthy — regular grooming alone goes a long way toward keeping pests away. On top of that, a homemade flea and tick spray can add another natural layer of protection.',
      'Homemade Flea & Tick Spray:\nIngredients:\n• 2 tsp essential oil (rose geranium or palmarosa)\n• 2 cups Beauty Water\n\nDirections:\nCombine in a spray bottle and shake well. Spray directly on your pet and on the spots where they like to sleep.'
    ],
    bulletPoints: [
      'Chemical-free protection using natural essential oils and Kangen Beauty Water®.',
      'Prevents skin irritation and avoids toxic chemical pesticide absorption.',
      'Safe for daily spritzing on pet coats, bedding, and sleeping spots.'
    ]
  },
  {
    id: 'pet-detail-2',
    title: 'Getting Rid of Pet Odors the Green Way',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
    desc: 'Tackle pet odors, upholstery stains, bad breath, and toy sanitation using chemical-free Enagic® water solutions.',
    content: [
      'Loving your pets doesn\'t mean loving the smells they can leave behind. Here are some eco-friendly ways to tackle everything from urine stains to less-than-fresh breath.',
      'Dealing With Accidents Fast:\nEven well-trained pets slip up occasionally. To stop odors before they set in:\n• Clean up messes right away — don\'t let them sit and dry, since dried-in urine is much harder to remove from upholstery.\n• Blot up liquid with paper towels before you apply any cleaner.\n• Rinse the area with cold Kangen Water®.\n• For tougher or older stains, spot-treat with Enagic® Stain Remover.\n• A wet-vac is a good chemical-free option for carpet cleanup.\n• If the carpet padding got wet, consider replacing it — damp padding is prone to mildew.\n• Wash any affected pet blankets or linens using Kangen Laundry Detergent.',
      'All-Natural Grooming Habits:\nRegular grooming is one of the best odor-prevention tools you have:\n• Brush your pet\'s fur and teeth daily (or as needed). A mix of baking soda and Neutral Water works as a gentle, natural toothpaste.\n• If your pet needs help keeping their ears clean of dirt or yeast, check with your vet first. If they give the green light, dampen a cotton ball with Kangen Water® and gently wipe the inner ear flap.\n• Bathe your pet with a homemade Kangen Water® Pet Shampoo instead of relying on chemical-heavy store-bought versions.\n\nSince fur pH varies by animal and breed, it\'s worth asking your vet what\'s ideal for your pet — you can then fine-tune the shampoo recipe using Beauty Water or Neutral Water accordingly. Your Enagic® machine makes it easy to dial in whatever pH your pet needs. Always dry your pet thoroughly after a bath to cut down on that "wet dog" smell.',
      'Keeping Toys and Feeding Areas Fresh:\n• Wash food and water bowls 2–3 times a week: spray first with Strong Kangen Water®, then hand-wash with Strong Kangen Water® Dish Soap.\n• Wash pet bedding and linens weekly or biweekly with Kangen Laundry Detergent.\n• Spray toys with Strong Acidic Water, then hand-wash with Strong Kangen Water® Dish Soap.\n• Use biodegradable litter for a greener litter box — conventional cat litter adds up to over 2 million tons of landfill waste in the US each year. Wash the litter box weekly with Strong Kangen Dish Soap.',
      'Your Enagic® water system gives you plenty of natural ways to keep your pet (and your home) smelling fresh. Skip the pet store aisles full of chemical-laden products — you can handle it all at home while spending more quality time with your furry companion.'
    ]
  },
  {
    id: 'pet-detail-3',
    title: 'Homemade Kangen Water® Pet Shampoo',
    image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?q=80&w=1200&auto=format&fit=crop',
    desc: 'Formulate a gentle, chemical-free pet shampoo with glycerine, Enagic® soap, and Kangen Water® for a shiny, soft coat.',
    content: [
      'Store-bought pet shampoos often contain harsh synthetic fragrances and sulfates that strip natural skin oils. This simple 3-ingredient DIY pet shampoo cleanses thoroughly while keeping coats soft and hydrated.',
      'Ingredients:\n• 1/3 cup glycerine\n• 1 cup Strong Kangen Water® Dish Soap\n• 1 qt Kangen Water®',
      'Directions:\nMix everything together in a large reused/recycled bottle and use as needed.'
    ],
    bulletPoints: [
      'Glycerine locks in moisture to prevent dry skin and dandruff.',
      'Enagic® soap cleanses fur gently without harsh artificial dyes or sulfates.',
      'Can be customized with Beauty Water (pH 6.0) or Neutral Water (7.0 pH) depending on breed coat pH.'
    ]
  },
  {
    id: 'pet-detail-4',
    title: 'Don\'t Forget Your Pet\'s Hydration',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop',
    desc: 'Keep pets energized, healthy, and properly hydrated with clean Enagic® water to prevent heat stress and organ strain.',
    content: [
      'It\'s easy to focus on your own water intake and forget that your pet needs just as much attention when it comes to staying hydrated — especially when you\'re out enjoying the outdoors together.',
      'Animals are roughly 60% water, so they need a steady water supply to replace what they lose throughout the day. Unlike humans, pets can\'t sweat to cool down, which makes proper hydration even more important for regulating their body temperature. A thirsty pet without access to clean water may resort to drinking from puddles — so it\'s worth always having a bottle of Kangen Water® on hand for them instead.',
      'Warning signs of dehydration in pets include sunken-looking eyes, unusual tiredness or low energy, dry gums, and skin that stays "tented" when gently pinched instead of springing back. If you notice these signs, get your pet to a vet right away — dehydration can be serious.',
      'Tips for Keeping Your Pet Hydrated:\n• Keep clean Kangen Water® available throughout the day in a clean, sanitized bowl. Wash feeding bowls 2–3 times a week — spray first with Strong Kangen Water®, then hand-wash with Strong Kangen Water® Dish Soap.\n• Try canned food instead of dry — if your pet isn\'t interested, warming it slightly in the microwave can make the smell more appealing.\n• Experiment with different bowl shapes and placements. Some pets dislike their whiskers touching the sides of a narrow bowl, so a wider one might help — and moving the bowl to a more convenient spot can also encourage more drinking.\n• If your pet seems to avoid still water, a pet water fountain can help. Enagic® Neutral Water works great in these filtered systems that keep water circulating all day. Avoid leaving the tap running as an alternative — it wastes water and just gets your pet drinking chlorinated tap water instead.',
      'Bottom line: pets need consistent hydration just as much as we do.'
    ]
  }
];

interface GreenerPetDetailProps {
  initialArticleId?: string;
  onNavigate: (page: string, articleId?: string) => void;
  onOpenConsultation?: () => void;
  onOpenSearch?: (initialQuery?: string) => void;
}

export const GreenerPetDetail: React.FC<GreenerPetDetailProps> = ({
  initialArticleId = 'pet-detail-1',
  onNavigate,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(initialArticleId);
  const [searchText, setSearchText] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [commentText, setCommentText] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialArticleId) {
      setSelectedArticleId(initialArticleId);
    }
  }, [initialArticleId]);

  useEffect(() => {
    try {
      const savedComms = localStorage.getItem(`kangen_pet_comments_${selectedArticleId}`);
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
      localStorage.setItem(`kangen_pet_comments_${selectedArticleId}`, JSON.stringify(updatedComms));
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
      id: `pet-comm-${Date.now()}`,
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

  const renderFormattedParagraph = (paragraph: string, pIdx: number) => {
    if (!paragraph.includes('\n')) {
      return (
        <p key={pIdx} className="text-slate-600 leading-relaxed text-sm sm:text-base">
          {paragraph}
        </p>
      );
    }

    const lines = paragraph.split('\n');
    return (
      <div key={pIdx} className="space-y-2 py-1">
        {lines.map((line, lIdx) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={lIdx} className="h-2" />;

          // Header lines ending with colon or specific headings
          if (
            trimmed.endsWith(':') ||
            trimmed.startsWith('Homemade Flea') ||
            trimmed === 'Dealing With Accidents Fast' ||
            trimmed === 'All-Natural Grooming Habits' ||
            trimmed === 'Keeping Toys and Feeding Areas Fresh' ||
            trimmed.startsWith('Tips for Keeping')
          ) {
            return (
              <h4
                key={lIdx}
                className="font-serif font-bold text-[#333333] text-base sm:text-lg mt-4 mb-2 border-b border-slate-200 pb-1"
              >
                {trimmed}
              </h4>
            );
          }

          // Bullet point lines for ingredients/rules/tips
          if (trimmed.startsWith('•')) {
            const contentText = trimmed.replace(/^•\s*/, '');
            return (
              <div
                key={lIdx}
                className="flex items-start gap-2.5 text-slate-700 text-sm sm:text-base pl-3 py-1.5 bg-slate-50/70 rounded-md border border-slate-200/60 my-1 font-sans"
              >
                <span className="text-[#87b076] font-bold text-base select-none mt-0.5">•</span>
                <span className="leading-relaxed font-medium">{contentText}</span>
              </div>
            );
          }

          // Numbered list lines for directions
          const numMatch = trimmed.match(/^(\d+\.)\s*(.*)$/);
          if (numMatch) {
            return (
              <div
                key={lIdx}
                className="flex items-start gap-2.5 text-slate-700 text-sm sm:text-base pl-2 py-1.5"
              >
                <span className="font-bold text-emerald-800 text-sm font-mono min-w-[24px] select-none">
                  {numMatch[1]}
                </span>
                <span className="leading-relaxed">{numMatch[2]}</span>
              </div>
            );
          }

          // Regular line
          return (
            <p key={lIdx} className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {trimmed}
            </p>
          );
        })}
      </div>
    );
  };

  const currentArticle = ARTICLES.find((a) => a.id === selectedArticleId) || ARTICLES[0];

  return (
    <div className="bg-[#EDEEE7] min-h-screen font-sans text-[#3E4C4C]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#7AD1C4] text-[#293434] px-5 py-3 rounded-full shadow-xl text-xs font-bold animate-bounce flex items-center gap-2 border border-[#7AD1C4]/40">
          <span>✓</span> {toastMessage}
        </div>
      )}

      {/* Sub Header Banner matching screenshot */}
      <section
        className="relative w-full h-64 sm:h-72 bg-cover bg-center flex items-center justify-center shadow-inner"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-[#293434]/60 backdrop-blur-xs"></div>
        <h1 className="relative z-10 font-serif text-3xl sm:text-5xl text-white font-bold drop-shadow-md tracking-wide">
          Greener Pet
        </h1>
      </section>

      {/* Search Header Bar matching screenshot */}
      <section className="bg-[#3E4C4C] py-3 px-4 shadow-inner border-y border-[#7AD1C4]/30">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && onOpenSearch) onOpenSearch(searchText);
            }}
            placeholder="Search Greener Pet..."
            className="w-64 sm:w-96 px-5 py-2 rounded-full text-xs text-[#293434] bg-white shadow-inner outline-none focus:ring-2 focus:ring-[#7AD1C4] font-medium"
          />
          <button
            onClick={() => onOpenSearch && onOpenSearch(searchText)}
            className="bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] px-6 py-2 text-xs font-bold rounded-full uppercase tracking-wider transition shadow cursor-pointer"
          >
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
            <div className="p-6 border border-[#3E4C4C]/15 rounded-2xl bg-white text-center space-y-3 shadow-md">
              <div className="w-24 h-24 rounded-full border-4 border-[#7AD1C4] mx-auto overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                  alt="Shahina Sajid"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif font-bold text-base text-[#293434]">
                Shahina Sajid 6A8-6
              </h4>
              <p className="text-xs text-[#47a295] font-bold leading-tight">
                Enagic® International Distributor
              </p>
              <p className="text-xs text-slate-700 font-mono font-bold">
                📱 469-648-8298
              </p>
              <div>
                <button
                  onClick={() => onOpenConsultation?.()}
                  className="text-xs text-[#3E4C4C] font-bold underline hover:text-[#7AD1C4] cursor-pointer transition"
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
                  onClick={() => onNavigate('pet')}
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
                    {renderFormattedParagraph(paragraph, idx)}
                  </React.Fragment>
                ))}
              </div>

              {/* Bullet Points List if present */}
              {currentArticle.bulletPoints && currentArticle.bulletPoints.length > 0 && (
                <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-5 space-y-3">
                  <h4 className="font-serif font-bold text-base text-[#333333]">
                    Pet Care Highlights & Tips:
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
                className="text-slate-600 hover:text-emerald-700 hover:underline cursor-pointer"
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
                className="font-bold text-emerald-800 hover:underline cursor-pointer"
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

            {/* REAL-TIME COMMENTS SECTION */}
            <section className="space-y-6 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-[#333333]">
                  {comments.length} Comments
                </h3>
                <button
                  onClick={() => window.scrollTo({ top: 9999, behavior: 'smooth' })}
                  className="bg-slate-800 text-white text-xs px-4 py-2 rounded font-semibold uppercase tracking-wider hover:bg-slate-700 cursor-pointer"
                >
                  ADD COMMENT
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comm) => (
                  <div
                    key={comm.id}
                    className="p-4 sm:p-5 rounded-lg border border-slate-200/80 bg-slate-50 space-y-3"
                  >
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

                    {/* Inline Reply Form */}
                    {replyingToId === comm.id && (
                      <form
                        onSubmit={(e) => handleReplySubmit(comm.id, e)}
                        className="mt-3 pt-3 border-t border-slate-200 space-y-3 animate-in fade-in"
                      >
                        <textarea
                          rows={2}
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder={`Reply to ${comm.name}...`}
                          className="w-full p-3 rounded-md text-xs border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setReplyingToId(null)}
                            className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700 cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-4 py-1.5 bg-[#87b076] text-white text-xs font-semibold rounded hover:bg-[#759e64] cursor-pointer"
                          >
                            Post Reply
                          </button>
                        </div>
                      </form>
                    )}

                    {/* Nested Replies */}
                    {comm.replies && comm.replies.length > 0 && (
                      <div className="ml-6 sm:ml-10 space-y-3 pt-3 border-l-2 border-slate-200 pl-4">
                        {comm.replies.map((rep) => (
                          <div key={rep.id} className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-serif font-bold text-xs text-slate-800">
                                {rep.name}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">
                                {rep.date}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {rep.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* REAL-TIME COMMENT FORM */}
              <form
                onSubmit={handleCommentSubmit}
                className="bg-slate-50 border border-slate-200/80 rounded-lg p-6 space-y-4 shadow-xs"
              >
                <h4 className="font-serif font-bold text-base text-[#333333]">
                  Leave a Comment
                </h4>
                <div className="space-y-3">
                  <textarea
                    rows={4}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write your comment here..."
                    required
                    className="w-full p-3 text-xs sm:text-sm rounded-md border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500 outline-none text-slate-700"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      placeholder="Your Name *"
                      required
                      className="w-full p-3 text-xs sm:text-sm rounded-md border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500 outline-none text-slate-700"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email Address *"
                      required
                      className="w-full p-3 text-xs sm:text-sm rounded-md border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500 outline-none text-slate-700"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="rememberMePet"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="rememberMePet" className="text-xs text-slate-600 cursor-pointer">
                      Save my name and email in this browser for the next time I comment.
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#87b076] hover:bg-[#759e64] text-white px-6 py-2.5 text-xs font-semibold rounded uppercase tracking-wider transition cursor-pointer shadow-xs"
                >
                  POST COMMENT
                </button>
              </form>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};
