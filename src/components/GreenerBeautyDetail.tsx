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
    id: 'beauty-comm-1',
    name: 'Nancy M.',
    email: 'nancy@example.com',
    date: 'Nov 12',
    text: 'Rinsing my hair with Beauty Water 6.0 has changed everything! My curls are so soft and no longer frizzy.',
    likes: 8,
    avatarBg: 'bg-[#87b076]',
  },
  {
    id: 'beauty-comm-2',
    name: 'Elena R.',
    email: 'elena@example.com',
    date: 'Oct 28',
    text: 'The "Be Green, Be Ravishing!" shea butter lotion recipe works absolute wonders for dry winter elbows and knees!',
    likes: 6,
    avatarBg: 'bg-purple-600',
  },
  {
    id: 'beauty-comm-3',
    name: 'Sophia L.',
    email: 'sophia@example.com',
    date: 'Sep 14',
    text: 'Replacing expensive toner with fresh Kangen Beauty Water saved me hundreds of dollars a year!',
    likes: 9,
    avatarBg: 'bg-rose-500',
  },
];

const ARTICLES: ArticleDetailData[] = [
  {
    id: 'beauty-detail-1',
    title: 'Clean Green Beauty',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    desc: 'Now that you\'ve transformed your home into a tranquil green oasis, take a closer look at adding green living to your personal care.',
    content: [
      'Now that you\'ve transformed your home into a tranquil and green oasis, it\'s time to take a closer look at how you can add green living to your personal care with Clean Green Beauty. Beauty Water is an essential ingredient that supports the 6.0 pH level for your delicate skin. Tap water contains harmful chlorine which strips the skin of natural oils essential for hydration.',
      'Beauty Water takes the place of harsh, expensive toners and daily misting sprays, leaving your skin renewed, healthy, and hydrated. Plus, not only is this an amazing water beauty solution, but it means you can also make all your own custom all-natural beauty products. So, whether you\'re looking to make soap, lotion, or spray, Kangen Water® gives you the power and freedom to choose what ingredients you want to pamper your skin with and keep your skin moist, glowing, and radiant. Transform your skin, hair, and beauty care products with Beauty Water today!'
    ],
    bulletPoints: [
      'Use Beauty Water (pH 6.0) as a daily toner to maintain skin\'s natural acidic mantle.',
      'Replace synthetic chemical toner sprays with pure Kangen Beauty Water®.',
      'Protects skin from harsh tap water chlorine and chemical pollutants.'
    ]
  },
  {
    id: 'beauty-detail-2',
    title: 'Hair Care with Kangen Water®',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    desc: 'Rinse your hair with Beauty Water (6.0 pH) to lock in natural moisture, reduce tangles, and achieve incredible shine.',
    content: [
      'Hair thrives at a slightly acidic pH. Tap water is often alkaline and filled with minerals that leave dull buildup on hair follicles.',
      'Rinsing your hair after shampooing with Beauty Water (pH 6.0) closes hair cuticles, smooths tangles, and leaves your hair noticeably softer and shinier.',
      'Ingredients:\n• 2 cups Beauty Water (pH 6.0)\n• 1 tbsp organic apple cider vinegar\n• 5 drops lavender essential oil',
      'Directions:\n1. Wash hair with natural shampoo.\n2. Pour Beauty Water rinse over hair from root to tip.\n3. Massage scalp gently for 1 minute.\n4. Rinse with cool Beauty Water for luminous shine.'
    ],
    bulletPoints: [
      'Acidic Beauty Water (pH 6.0) seals hair cuticle to prevent moisture loss.',
      'Eliminates mineral buildup caused by hard municipal tap water.',
      'Natural lavender infusion soothes scalp irritation.'
    ]
  },
  {
    id: 'beauty-detail-3',
    title: 'A New Approach to Skin Care',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    desc: 'Replacing harsh chemical astringents with Kangen Beauty Water® keeps skin clean, hydrated, and youthful.',
    content: [
      'The organic skin care industry has grown exponentially as a result of consumer awareness. We are finally waking up to the fact that natural beauty products are simply better and more environmentally responsible. However, some of the natural beauty products come with a hefty price tag and most don’t live up to their claims. It’s time to take the matter into your own hands with Beauty Water.',
      'SKIN DEEP:\nYour skin is your body’s largest organ and requires the same nutrients as the rest of the human body in order to stay healthy. Due to the porous nature of the epidermis, absorption of chemicals is something we need to always consider when applying anything to our skin. The Food and Drug Administration (FDA) does not approve cosmetics. This includes perfumes, makeup, moisturizers, face and body cleansers and shampoo amongst other products. In light of this information, we need to be especially diligent regarding the ingredients in our beauty products. We should feed our skin the same way we feed our body, with healthy, organic ingredients as close to nature as possible.',
      'But let’s not forget the environmental impact of the chemicals present in skin care being rinsed down the drain and into our water sources. Water treatment centers are unable to filter out these harsh chemicals and as a result, over 100 different chemicals have been detected in our tap water and eco-system.',
      'Thankfully, there is an alternative. With a Kangen machine, you can readily produce your main ingredient in all-natural, homemade beauty products: Enagic® Beauty Water!',
      'Daily Routine:\n• Morning Mist: Spray face with Beauty Water (6.0 pH) before moisturizer.\n• Makeup Remover: Use Strong Kangen Water (11.5 pH) to lift stubborn oils.\n• Night Tone: Pat face with Beauty Water to restore natural pH balance before sleep.'
    ]
  },
  {
    id: 'beauty-detail-4',
    title: 'Be Green, Be Ravishing!',
    image: 'https://images.unsplash.com/photo-1512290900676-26c2a5a545b6?q=80&w=1200&auto=format&fit=crop',
    desc: 'To have a routine that keeps you healthy and hydrated can make you feel beautiful inside and out! Pamper yourself with all-natural beauty solutions.',
    content: [
      'Be Green, Be Ravishing! Self-care isn\'t just luxury—it\'s a fundamental part of daily health. Creating custom green beauty recipes with Kangen Water® nourishes your skin without toxic chemical exposure.',
      'Ingredients:\n• 1/2 cup raw organic shea butter\n• 2 tbsp jojoba oil or sweet almond oil\n• 1 tbsp Kangen Beauty Water® (pH 6.0)\n• 10 drops organic rose hip or frankincense essential oil\n• 1 tsp vitamin E oil',
      'Directions:\n1. Melt shea butter over low heat in a double boiler.\n2. Whisk in jojoba oil, vitamin E oil, and Kangen Beauty Water® until creamy.\n3. Allow mixture to cool in fridge for 20 minutes.\n4. Add essential oils and whip with electric mixer until light and fluffy.\n5. Store in clean glass jar and apply daily to face, hands, and body for ravishing, radiant skin!'
    ],
    bulletPoints: [
      'Whipping Kangen Beauty Water® into shea butter creates a light, ultra-hydrating lotion.',
      'Vitamin E and Jojoba oil nourish deep skin layers with essential fatty acids.',
      '100% free of synthetic preservatives, parabens, and artificial fragrances.'
    ]
  },
  {
    id: 'beauty-detail-5',
    title: 'Kangen Fragrance',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
    desc: 'Create custom chemical-free body sprays and linen mists using Beauty Water and essential oils.',
    content: [
      'Commercial perfumes contain phthalates and synthetic fixatives. Craft your own signature natural body mist with Kangen Beauty Water®.',
      'Ingredients:\n• 4 oz Kangen Beauty Water® (pH 6.0)\n• 1 tbsp witch hazel or vodka (natural emulsifier)\n• 15 drops citrus or floral essential oil (jasmine, bergamot, or ylang-ylang)\n• 5 drops vanilla extract',
      'Directions:\n1. Combine witch hazel and essential oils in a 4 oz glass spray bottle.\n2. Top off with fresh Kangen Beauty Water®.\n3. Shake well before each use and spritz over hair, skin, or linens for a fresh, uplifting fragrance.'
    ]
  },
  {
    id: 'beauty-detail-6',
    title: 'Herbal All-Natural Shampoo',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1200&auto=format&fit=crop',
    desc: 'Formulate a gentle, sulphate-free herbal shampoo using Kangen Water® and botanical extracts.',
    content: [
      'Ditch harsh sulfates! This DIY herbal shampoo cleanses without stripping natural oils from your scalp.',
      'Ingredients:\n• 1/2 cup liquid castile soap (unscented)\n• 1/2 cup brewed chamomile or rosemary tea (brewed with Kangen 9.5 Water)\n• 1 tsp jojoba oil\n• 1/2 tsp vegetable glycerin\n• 10 drops tea tree or peppermint essential oil',
      'Directions:\n1. Brew herbal tea with Kangen 9.5 Water and let cool.\n2. Mix liquid castile soap, herbal tea, jojoba oil, and glycerin gently in a bottle.\n3. Add essential oils and shake lightly.\n4. Apply to wet hair, lather, and rinse thoroughly with cold Kangen Beauty Water® (6.0 pH).'
    ]
  },
  {
    id: 'beauty-detail-7',
    title: 'Beauty Water Lotion',
    image: 'https://images.unsplash.com/photo-1607006482602-76ca97ac2a0c?q=80&w=1200&auto=format&fit=crop',
    desc: 'Nourish dry skin with a soothing, fast-absorbing body lotion crafted with Kangen Beauty Water®.',
    content: [
      'Handmade lotion infused with micro-clustered Beauty Water absorbs quickly without leaving a greasy residue.',
      'Ingredients:\n• 1/4 cup coconut oil\n• 1/4 cup beeswax pellets\n• 1/2 cup sweet almond oil\n• 1/3 cup Kangen Beauty Water® (pH 6.0)\n• 10 drops lavender or chamomile essential oil',
      'Directions:\n1. Melt coconut oil, beeswax, and sweet almond oil in a heatproof bowl over simmering water.\n2. Slowly pour Kangen Beauty Water® into melted oils while blending with an immersion blender.\n3. Blend continuously until smooth emulsified lotion forms.\n4. Stir in essential oils, transfer to glass jar, and let cool.'
    ]
  },
  {
    id: 'beauty-detail-8',
    title: 'Enagic Non-Toxic Hand Sanitizer Recipe',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=1200&auto=format&fit=crop',
    desc: 'Have you ever investigated what is in your antibacterial products? You might be surprised at the chemicals necessary for making your life germ-free. Try our natural Strong Acidic Water recipe instead.',
    content: [
      'Have you ever investigated what is in your antibacterial products? You might be surprised at the chemicals necessary for making your life germ-free. Try our natural Strong Acidic Water recipe instead.',
      'Ingredients:\n• 10 drops of essential oil (peppermint or tea tree)\n• Strong Acidic Water',
      'Directions:\nCombine ingredients in small spray bottle. Spray on hands and rub together.'
    ],
    bulletPoints: [
      'Use Strong Acidic Water (2.5 pH) to naturally eliminate germs without chemical triclosan.',
      'Essential oils (tea tree or peppermint) add a fresh, natural botanical aroma.',
      'Non-drying and alcohol-free formula keeps hands soft and protected.'
    ]
  },
  {
    id: 'beauty-detail-9',
    title: 'Beauty Water Conditioner',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop',
    desc: 'Deeply nourish and hydrate hair with fresh Beauty Water, egg yolk, and natural Acai Berry or Sweet Almond oil. No harsh chemicals!',
    content: [
      'No harsh chemicals! No cocamidopropyl betaine, sulfates (SLS, SLES, SCS), formaldehyde, salicylates, parabens, phosphates, MEA, DEA, TEA, petroleum-based ingredients, animal by-products, perfumes, dyes or caustics. Non-toxic, hypoallergenic, gluten-free, biodegradable, cruelty-free.',
      'Ingredients:\n• 1 tsp Acai Berry Oil or Sweet Almond Oil\n• 1 egg yolk\n• 1 cup Beauty Water',
      'Directions:\n1. Beat the egg yolk until frothy.\n2. Add the oil and beat again.\n3. Slowly add the yolk mixture to the Beauty Water.\n4. Massage into the scalp and rinse well.\n\n*This is a one-use conditioner, and is not meant to be stored.'
    ],
    bulletPoints: [
      '100% all-natural single-use hair conditioner made with Kangen Beauty Water®.',
      'Hypoallergenic, gluten-free, cruelty-free, and 100% free of synthetic sulfates.',
      'Acai Berry / Almond oil deeply nourishes hair follicles for smooth, silky hair.'
    ]
  }
];

interface GreenerBeautyDetailProps {
  initialArticleId?: string;
  onNavigate: (page: string, articleId?: string) => void;
  onOpenConsultation?: () => void;
}

export const GreenerBeautyDetail: React.FC<GreenerBeautyDetailProps> = ({
  initialArticleId = 'beauty-detail-1',
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(initialArticleId);
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
      const savedComms = localStorage.getItem(`kangen_beauty_comments_${selectedArticleId}`);
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
      localStorage.setItem(`kangen_beauty_comments_${selectedArticleId}`, JSON.stringify(updatedComms));
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
      id: `beauty-comm-${Date.now()}`,
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

          // Header lines like "Ingredients:", "Directions:", "Daily Routine:"
          if (
            trimmed.endsWith(':') ||
            trimmed === 'Ingredients' ||
            trimmed === 'Directions' ||
            trimmed === 'Daily Routine'
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

          // Bullet point lines for ingredients/items
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
                <span className="font-bold text-[#3E4C4C] text-sm font-mono min-w-[24px] select-none">
                  {numMatch[1]}
                </span>
                <span className="leading-relaxed">{numMatch[2]}</span>
              </div>
            );
          }

          // Regular line
          return (
            <p key={lIdx} className="text-[#576a6a] leading-relaxed text-sm sm:text-base font-medium">
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-[#293434]/60 backdrop-blur-xs"></div>
        <h1 className="relative z-10 font-serif text-3xl sm:text-5xl text-white font-bold drop-shadow-md tracking-wide">
          Greener Beauty
        </h1>
      </section>

      {/* Search Header Bar matching screenshot */}
      <section className="bg-[#3E4C4C] py-3 px-4 shadow-inner border-y border-[#7AD1C4]/30">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
          <input
            type="text"
            placeholder="Search Greener Beauty..."
            className="w-64 sm:w-96 px-5 py-2 rounded-full text-xs text-[#293434] bg-white shadow-inner outline-none focus:ring-2 focus:ring-[#7AD1C4] font-medium"
          />
          <button className="bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] px-6 py-2 text-xs font-bold rounded-full uppercase tracking-wider transition shadow cursor-pointer">
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
                  onClick={() => onNavigate('beauty')}
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
                    Beauty Tips & Highlights:
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
                className="font-bold text-emerald-800 hover:underline cursor-pointer"
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
                      id="rememberMeBeauty"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="rememberMeBeauty" className="text-xs text-slate-600 cursor-pointer">
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
