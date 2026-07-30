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
    id: 'garden-comm-1',
    name: 'Thomas H.',
    email: 'thomas@example.com',
    date: 'Dec 02',
    text: 'Testing our soil pH and watering our blue hydrangeas with Slightly Acidic Beauty Water resulted in the most vibrant blue blossoms we have ever seen!',
    likes: 12,
    avatarBg: 'bg-[#87b076]',
  },
  {
    id: 'garden-comm-2',
    name: 'Sarah M.',
    email: 'sarah@example.com',
    date: 'Nov 18',
    text: 'My kids love helping me water our vegetable garden every morning with Kangen Water. They actually eat all the spinach and carrots now!',
    likes: 9,
    avatarBg: 'bg-emerald-600',
  },
  {
    id: 'garden-comm-3',
    name: 'Robert C.',
    email: 'robert@example.com',
    date: 'Oct 05',
    text: 'The Neem Oil spray recipe with Beauty Water cleared up spider mites on my fiddle-leaf fig in just two applications.',
    likes: 14,
    avatarBg: 'bg-amber-700',
  },
];

const ARTICLES: ArticleDetailData[] = [
  {
    id: 'garden-detail-1',
    title: 'A Greener Garden',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
    desc: 'Spending time in the garden is one of the simplest ways to live more lightly on the planet while doing something good for yourself.',
    content: [
      'Spending time in the garden is one of the simplest ways to live more lightly on the planet while doing something good for yourself. Digging in the soil gets your body moving and pulls you outside to connect with nature — and it barely leaves a footprint compared to most hobbies. Growing your own herbs and vegetables cuts down on the fuel, packaging, and shipping normally needed to get produce to your table. There\'s also a psychological bonus: people who grow their own food tend to actually eat it, which naturally nudges you toward a healthier diet.',
      'Matching the Water to the Plant:\nEvery plant has a pH range where it grows best, and your existing soil may already lean acidic or alkaline. An Enagic® machine lets you dial in water at whatever pH your plants are asking for. Start by testing your soil to see where it currently sits, then look up the ideal range for each plant you\'re growing. From there you can choose between Neutral Water, the slightly alkaline Kangen Water®, or the slightly acidic Beauty Water® to match.',
      'Once you start feeding your garden the right water for the job, the difference in growth and vitality is hard to miss.'
    ],
    bulletPoints: [
      'Dial in exact water pH (acidic, neutral, alkaline) to match your soil and plant needs.',
      'Reduce carbon footprint by growing fresh organic herbs and produce at home.',
      'Hydrate plants with chlorine-free filtered Enagic® water for maximum root absorption.'
    ]
  },
  {
    id: 'garden-detail-2',
    title: 'Choosing the Right Water for Each Plant',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop',
    desc: 'Match each plant to the water it prefers — learn which crops thrive on Kangen Water®, Beauty Water®, or Neutral Water.',
    content: [
      'Once your seedlings are in the ground and you\'ve checked your soil, the next step is matching each plant to the water it prefers.',
      'Plants That Like Slightly Alkaline Water (Kangen Water®, pH 8.5–9.5):\nMany of these actually do best around 7.5–8.5, so it\'s worth testing both Kangen Water® (8.5) and Neutral Water (7.0) to see which your soil responds to better — soil chemistry plays a big role here. This group includes asparagus, beets, cabbage, cauliflower, celery, carrots, mushrooms, parsley, geraniums, irises, phlox, vinca, and lilacs. Hydrangeas are a special case: give them alkaline water and you\'ll get pink blooms.',
      'Plants That Like Slightly Acidic Water (pH 4.0–6.0):\nSome plants do better on the acidic side, including rhododendrons, begonias, azaleas, heathers, peanuts, cucumbers, potatoes, dill, leeks, chili peppers, eggplant, garlic, chives, artichokes, tomatoes, and most berries — plus hydrangeas grown for blue blooms instead of pink. Roses are happiest around 5.5–6.5, so try alternating Slightly Acidic Water (6.0) with Neutral Water (7.0) to find what your soil supports best. As always, check your soil\'s pH before deciding which Enagic® water to use.',
      'Plants That Like Neutral Water (pH 7.0):\nA neutral pH suits a wide range of vegetables and flowers: spinach, parsnips, dahlias, chrysanthemums, Brussels sprouts, sweet peas, broccoli, asparagus, beans, avocado, cantaloupe, kiwi, mint, lettuce, onions, yams, radishes, squash, bell peppers, and tulips. Neutral Water keeps this group hydrated and thriving.',
      'A Few Kangen® Gardening Tips:\n• Plan your layout before you plant — sketch it out so you know where everything goes and how much space it needs.\n• Water early in the morning or later in the evening to avoid scorching the leaves.\n• Check each plant\'s care instructions for its light, water, and spacing needs.\n• Windy conditions dry out soil faster, so plants may need extra watering during breezy stretches.'
    ]
  },
  {
    id: 'garden-detail-3',
    title: 'Kids Benefit From Gardening Too',
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1200&auto=format&fit=crop',
    desc: 'Get kids outside and hands-in-the-dirt! Gardening builds physical fitness, motor skills, and healthier eating habits.',
    content: [
      'Screens have taken over a lot of childhood, which makes getting kids outside and hands-in-the-dirt more important than ever. Time spent playing outdoors comes with real, documented benefits. The running, jumping, and general movement involved in outdoor play builds physical fitness and motor skills, and sunlight exposure supports vitamin D production and stronger bones. There\'s a mood boost too — sunlight helps regulate the pineal gland, which plays a role in both mood and immune function.',
      'Gardening gives kids a hands-on, purposeful way to engage with the outdoors. It lets them take part in real decisions — what to plant, where, and how to care for it — and teaches cause and effect in a way that\'s immediately visible. Kids who help grow the family\'s food are also more likely to actually eat it, which can lead to a better understanding of where food comes from and more openness to trying new things.',
      'Start seedlings off right with Kangen Water® — see the "Choosing the Right Water for Each Plant" guide for more on how to match water to your plants.'
    ],
    bulletPoints: [
      'Builds outdoor physical fitness, motor skills, and healthy sunlight exposure.',
      'Teaches kids hands-on responsibility, cause-and-effect, and food origins.',
      'Kids who grow vegetables are significantly more likely to enjoy eating healthy foods.'
    ]
  },
  {
    id: 'garden-detail-4',
    title: 'Composting Basics',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?q=80&w=1200&auto=format&fit=crop',
    desc: 'Turn kitchen scraps into rich organic fertilizer while reducing landfill waste with Enagic® water composting.',
    content: [
      'Composting has a reputation for being messy or complicated, but it\'s actually a fairly simple habit that can even smell pleasantly earthy when done right. It\'s also one of the more meaningful things you can do for the environment: the EPA estimates that around 72% of what ends up in landfills — wood, textiles, yard waste, food scraps, paper — could have been composted instead.',
      'Beyond cutting down on landfill waste and methane emissions, compost genuinely improves your soil. It boosts the physical, chemical, and biological makeup of the ground, delivering key nutrients like nitrogen, phosphorus, and potassium along with beneficial microbes that help plants resist disease. Recycling your organic scraps this way keeps both your garden and your conscience a little greener.',
      'Getting Started:\nYou can compost indoors or out, and garden centers sell bins in all shapes and sizes — or you can build one yourself from scrap wood, cement blocks, or chicken wire. A few ground rules to keep in mind:\n• Aim for roughly 3 parts "brown" material to 1 part "green".\n• Greens: grass clippings, leaves, weeds, and kitchen scraps like fruit and veggie trimmings, coffee grounds, and tea leaves.\n• Browns: dry leaves or grass, cornstalks, straw, and small amounts of wood shavings.\n• Skip meat, bones, dairy, ashes, and paper.\n• Turn the pile regularly so it stays aerated.\n• Moisture matters — aim for about half to 60% water content, roughly the feel of a damp, wrung-out sponge.',
      'Enagic® water is a solid choice for moistening compost since it\'s filtered and free of the chlorine or trace metals that tap or bottled water can carry. Test your soil\'s pH first — the sweet spot is about 6.3–6.8. If your soil runs acidic, add Kangen Water® to balance it out; if it\'s too alkaline, try Slightly Acidic Water instead; and if it\'s already balanced, Neutral Water works fine.',
      'Composting Without a Yard:\nIf outdoor space is tight, vermicomposting lets you compost indoors using red wiggler worms, which you can find at bait shops or online worm suppliers. All you need is a lidded container, shredded paper, soil, some Enagic® water (Slightly Acidic, Neutral, or Kangen), and food scraps. The worms happily break down fruit and veggie scraps, eggshells, tea bags, coffee grounds, and grains. It takes longer than outdoor composting — around 4 to 6 months compared to 3 to 4 weeks outside — but it\'s a great option if you\'re short on space or don\'t want to trek outside in cold weather.',
      'Putting Your Compost to Use:\nFinished compost is essentially free, fully organic fertilizer for your garden or houseplants. Mix it into outdoor soil anytime from spring through fall to boost fertility and disease resistance. For potted plants, add a tablespoon or two into a spray bottle of Enagic® water for a quick nutrient boost.',
      'At the end of the day, composting with Enagic® water is good for your garden, your wallet, and the planet.'
    ]
  },
  {
    id: 'garden-detail-5',
    title: 'Neem Oil Spray for Natural Pest Control',
    image: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?q=80&w=1200&auto=format&fit=crop',
    desc: 'Protect plants naturally from pests using Beauty Water (pH 6.0), neem oil, and mild Castile soap emulsifier.',
    content: [
      'Mixing It Up:\nCombine 1½ teaspoons of neem oil with a quart of Beauty Water (about 1 oz per gallon), then add ½ teaspoon of a mild dish soap or natural Castile soap per quart (roughly 2 tsp per gallon) — this acts as an emulsifier so the oil blends with the water instead of separating. Shake thoroughly before use. Neem oil tends to solidify in cooler temperatures, so keep it stored somewhere between 65°F and 95°F. If it\'s thickened up, sit the bottle in hot water for a few minutes to loosen it before mixing.',
      'Using It:\n1. Spray the mixture generously over all leaf surfaces, including the undersides — you can also use it to water plants directly. Reapply every 2 to 4 weeks.\n2. Best applied in the early morning or late afternoon.\n3. Avoid spraying in direct sun, and always test a small area first to check for sensitivity.\n4. This mix has worked well across a wide range of plants and pest issues, and it doubles nicely as a leaf shine for plants like fiddle-leaf figs.',
      'Safety Note:\nKeep neem oil away from kids and pets. Never eat, drink, vaporize, or smoke anything with neem residue on it, and always rinse edible plants well before eating them. Avoid using neem close to harvest time so it has time to break down. Always check product labels for specific safety and usage instructions.'
    ]
  }
];

interface GreenerGardenDetailProps {
  initialArticleId?: string;
  onNavigate: (page: string, articleId?: string) => void;
  onOpenConsultation?: () => void;
}

export const GreenerGardenDetail: React.FC<GreenerGardenDetailProps> = ({
  initialArticleId = 'garden-detail-1',
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
      const savedComms = localStorage.getItem(`kangen_garden_comments_${selectedArticleId}`);
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
      localStorage.setItem(`kangen_garden_comments_${selectedArticleId}`, JSON.stringify(updatedComms));
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
      id: `garden-comm-${Date.now()}`,
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
            trimmed.startsWith('Plants That Like') ||
            trimmed.startsWith('A Few Kangen') ||
            trimmed === 'Getting Started' ||
            trimmed === 'Composting Without a Yard' ||
            trimmed === 'Putting Your Compost to Use' ||
            trimmed === 'Mixing It Up' ||
            trimmed === 'Using It' ||
            trimmed === 'Safety Note'
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

          // Bullet point lines for tips/ingredients/rules
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-[#293434]/60 backdrop-blur-xs"></div>
        <h1 className="relative z-10 font-serif text-3xl sm:text-5xl text-white font-bold drop-shadow-md tracking-wide">
          Greener Garden
        </h1>
      </section>

      {/* Search Header Bar matching screenshot */}
      <section className="bg-[#3E4C4C] py-3 px-4 shadow-inner border-y border-[#7AD1C4]/30">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
          <input
            type="text"
            placeholder="Search Greener Garden..."
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
                  onClick={() => onNavigate('garden')}
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
                    Gardening Highlights & Tips:
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
                className="font-bold text-emerald-800 hover:underline cursor-pointer"
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
                      id="rememberMeGarden"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="rememberMeGarden" className="text-xs text-slate-600 cursor-pointer">
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
