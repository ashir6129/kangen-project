'use client';

import React, { useState, useEffect } from 'react';
import { EbookBanner } from './EbookBanner';

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
  bulletPoints?: string[];
  subSections?: ArticleSubSection[];
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'comm-1',
    name: 'Eleanor Vance (Verified Owner)',
    email: 'eleanor.vance@gmail.com',
    date: 'Jan 14, 2026',
    text: '★ ★ ★ ★ ★ Soaking our greasy baking sheets in 11.5 Strong Kangen Water has saved us so much time! The grease literally wipes right off without any toxic fumes or synthetic dish detergent.',
    likes: 12,
    avatarBg: 'bg-[#3E4C4C]',
  },
  {
    id: 'comm-2',
    name: 'Marcus Sterling',
    email: 'marcus.sterling@outlook.com',
    date: 'Dec 27, 2025',
    text: '★ ★ ★ ★ ★ We use 2.5 pH Strong Acidic Water on cutting boards after chopping raw meat. Gives us total peace of mind without chemical bleach smells. Our distributor guided us on how to use it safely!',
    likes: 9,
    avatarBg: 'bg-[#47a295]',
  },
  {
    id: 'comm-3',
    name: 'Dr. Rachel & T. Simmons',
    email: 'rachel.simmons@healthmed.org',
    date: 'Nov 18, 2025',
    text: '★ ★ ★ ★ ★ The two specialty waters (2.5 pH and 11.5 pH) produced by our K8 machine have replaced every single synthetic cleaner in our home. We are saving hundreds every year on paper towels and chemical sprays.',
    likes: 15,
    avatarBg: 'bg-[#3E4C4C]',
  },
  {
    id: 'comm-4',
    name: 'Navpreet Singh',
    email: 'navpreet.singh@techcorp.com',
    date: 'Oct 04, 2025',
    text: '★ ★ ★ ★ ★ I carry a small mist bottle of 2.5 pH Strong Acidic Water everywhere — for hand hygiene, desk cleaning, and sanitizing touchpoints. Our distributor provided top-tier support during machine setup!',
    likes: 8,
    avatarBg: 'bg-[#47a295]',
  },
];

const ARTICLES: ArticleDetailData[] = [
  {
    id: 'detail-3',
    title: 'Doing the Dishes',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop',
    desc: 'Rinse and sanitize dishes, cutting boards, and cutlery naturally using Strong Acidic Water (pH 2.5) and Strong Kangen Water (pH 11.5).',
    content: [
      'Dishes, cutting boards, and cutlery can be cleaned and sanitized naturally using Strong Acidic Water (pH 2.5) and Strong Kangen Water (pH 11.5).'
    ],
    bulletPoints: [
      "Clean dirty dishes with 11.5 Strong Kangen Water to emulsify oil and grease without soap residue.",
      "Wash cutting boards, dishcloths, sponges, and knives with 2.5 Strong Acidic Water to sanitize and disinfect without harmful chemicals.",
      "Rinse glassware with Beauty Water (6.0 pH) or Kangen 9.5 for a streak-free, crystal-clear shine.",
      "Soak fruits & vegetables with Kangen 11.5 Water to wash off oil-based pesticides that tap water cannot wash away."
    ],
    subSections: [
      {
        heading: "Disinfecting Dishes without Chemical Residue",
        image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
        imageOverlayText: "Glassware Disinfection",
        text: "Soak wine glasses, glass cups, and food containers in Strong Kangen Water (11.5 pH) to remove oily film, then spray with 2.5 pH Strong Acidic Water to sanitize. Rinse with Beauty Water for a sparkling shine without spots or film."
      },
      {
        heading: "A Dishwashing Superstar!",
        subtext: "Make your own natural dish soap using Kangen Water and liquid castile soap for a chemical-free kitchen.",
        image: "https://images.unsplash.com/photo-1607006482602-76ca97ac2a0c?q=80&w=800&auto=format&fit=crop",
        imageOverlayText: "Strong Kangen Water® Dish Soap",
        text: "Mix 1 cup of Liquid Castile Soap with 1/2 cup of Strong Kangen Water (11.5 pH) and 10 drops of lemon or orange essential oil in a dispenser bottle. Use as your daily eco-friendly dish soap for cutting grease effortlessly while staying gentle on skin."
      }
    ]
  },
  {
    id: 'detail-2',
    title: 'Green Cleaning / Non-toxic Cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    desc: 'Powerful Strong Kangen Water (pH 11.5) dissolves grease and tough grime without any harsh chemicals or fumes.',
    content: [
      'Powerful Strong Kangen Water (pH 11.5) has strong emulsifying properties that break down oils and grime on stovetops, counters, and floors naturally.',
      'By replacing toxic commercial spray cleaners with Kangen 11.5 Water, you protect your family and pets from hazardous chemical fumes and chemical residues.'
    ],
    bulletPoints: [
      "Clean your entire home with non-toxic, chemical-free Kangen Water solutions.",
      "Dissolve heavy grease on stovetops, range hoods, and oven doors using 11.5 Strong Kangen Water.",
      "Sanitize bathroom fixtures, toilets, sinks, and countertops using 2.5 Strong Acidic Water.",
      "Wipe windows, mirrors, and glass surfaces with 6.0 Beauty Water for a streak-free shine."
    ],
    subSections: [
      {
        heading: "Multi-Surface All-Purpose Spray",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
        imageOverlayText: "All-Purpose Spray Cleaner",
        text: "Fill a spray bottle with Strong Kangen Water (11.5 pH) for heavy grease on stovetops, range hoods, and oven doors. For general daily dusting and counter wiping, use Neutral Water (7.0 pH) or Beauty Water (6.0 pH)."
      },
      {
        heading: "Bathroom & Mirror Sanitizer",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
        imageOverlayText: "Streak-Free Mirror & Tile Cleaner",
        text: "Spray Strong Acidic Water (2.5 pH) on sinks, faucets, tiles, and toilet surfaces to eliminate bacteria and mold. Wipe mirrors with Beauty Water (6.0 pH) for a streak-free shine without glass cleaner chemicals."
      }
    ]
  },
  {
    id: 'detail-4',
    title: 'In the Laundry room',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1200&auto=format&fit=crop',
    desc: 'Replace harsh chemical detergents with Kangen Water to keep your linens fresh, soft, and non-toxic.',
    content: [
      'Pouring Strong Kangen Water 11.5 into your wash cycle lifts oils and dirt out of clothes fibers naturally, reducing the need for chemical laundry detergent.',
      'Your towels and clothes remain soft, hypoallergenic, and completely free of artificial synthetic perfumes.'
    ],
    bulletPoints: [
      "Replace synthetic laundry detergents with Strong Kangen Water (pH 11.5).",
      "Soak stained clothes, towels, and gym wear in 11.5 Kangen Water to loosen oils and odors naturally.",
      "Add Beauty Water (pH 6.0) to rinse cycles as a natural fabric softener without artificial chemicals."
    ],
    subSections: [
      {
        heading: "Detergent-Free Laundry Refresh",
        image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop",
        imageOverlayText: "Fresh Cotton Linens",
        text: "Add 1 to 2 liters of Strong Kangen Water (11.5 pH) directly into your washer drum during the soak cycle to loosen tough grime and odors naturally."
      }
    ]
  },
  {
    id: 'detail-1',
    title: 'A Greener Home',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    desc: "A green home means a home free of chemicals and other materials that are harsh on our Earth. Whether you're cleaning, laundering, or washing the dishes, you should be cautious of the products you use and their effect on your home and the environment.",
    content: [
      "A green home means a home free of chemicals and other materials that are harsh on our Earth. Whether you're cleaning, laundering, or washing the dishes, you should be cautious of the products you use and their effect on your home and the environment.",
      "In a perfect world, your cleaning products would be gentle and safe for everyday use, but still powerful on dirt, stains, and germs. Thanks to your multi-purpose Enagic machine, this IS possible!",
      "You can make your own eco-friendly products that actually work!",
      "Learn how you can conveniently maintain a clean and green home with the power of Enagic. Get the most of Kangen Water®, and discover a chemical-free lifestyle today!"
    ]
  },
  {
    id: 'detail-7',
    title: 'Strong Kangen Water® Dish Soap',
    image: 'https://images.unsplash.com/photo-1607006482602-76ca97ac2a0c?q=80&w=1200&auto=format&fit=crop',
    desc: 'Stains happen. With Strong Kangen Water® make stains disappear like magic without harsh chemicals.',
    content: [
      'Mix liquid castile soap with Strong Kangen Water for a powerful natural dish soap that cuts through stubborn grease while keeping your hands moisturized.'
    ]
  },
  {
    id: 'detail-5',
    title: 'Stain Remover',
    image: 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?q=80&w=1200&auto=format&fit=crop',
    desc: 'Keep a spray bottle of Strong Kangen Water® on hand for stains. It works amazingly well on oily stains and food-based stains on clothing.',
    content: [
      'Keep a spray bottle of Strong Kangen Water® on hand for stains. It works amazingly well on oily stains and other food-based stains on clothing.',
      'For stains on white clothing, add some lemon oil or lemon juice, spray on stained whites and line dry in the sun to remove stains.',
      'For difficult and/or set-in stains: Fill a bucket with Strong Kangen Water® and soak whites overnight, then wash in washing machine the next day, and line dry in bright sunlight to whiten whites.'
    ],
    bulletPoints: [
      'No harsh chemicals!',
      'No cocamidopropyl betaine, sulfates (SLS, SLES, SCS), formaldehyde, or salicylates.',
      'No parabens, phosphates, MEA, DEA, TEA, or petroleum-based ingredients.',
      'No animal by-products, perfumes, dyes, or caustics.',
      '100% Non-toxic, hypoallergenic, gluten-free, biodegradable, cruelty-free.'
    ],
    subSections: [
      {
        heading: "Ingredients & Stain Treatment Guide",
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=800&auto=format&fit=crop",
        imageOverlayText: "Chemical-Free Stain Removal",
        text: "Strong Kangen Water (11.5 pH) acts as a powerful natural grease emulsifier. By pre-treating fabric spots with Kangen 11.5 Water and lemon juice, stains lift effortlessly without damaging sensitive clothing fibers or leaving toxic residue."
      }
    ]
  },
  {
    id: 'detail-6',
    title: 'Kangen Water® Liquid Castile Cleaner',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop',
    desc: 'Learn how to make your own all-natural Liquid Castile Soap using pure Kangen Water® and sunflower oil.',
    content: [
      'Ingredients:\n• 16 oz Sunflower Oil\n• 5.5 oz Potassium Chloride\n• 16 oz distilled Kangen Water (collected with a steam boiler)\n• 40 oz Kangen Water\n• Essential Oil (optional)',
      'Blend: Pour the sunflower oil into a crock pot, with the heat on high. In a separate bowl, mix the potassium chloride with the distilled Kangen Water®. This mixture will become a lye. Add the lye to the crock pot. Mix together using a hand-held stick blender on low until you create a paste. Pour the regular Kangen Water® into the crock pot and combine using the stick blender.',
      'Cook: Check the crock pot every hour. If the paste is separating, mix it with the stick blender. If not, stir with a wooden spoon. The consistency will change from a paste to something resembling applesauce. If it ever looks sticky and hard like taffy, use a potato masher to break it up. Once the mixture resembles petroleum jelly, your liquid castile soap is almost done.',
      'Test: Now you must test the soap to see if it is done. Boil some Kangen Water® in a kettle and measure 2 oz into a clear measuring cup along with 1 oz of the soap mixture. Stir it with a spoon until the soap dissolves in the water. If it is cloudy, the soap is ready. If the mixture appears milky, the soap has not cooked long enough and needs to go back to the crock pot.',
      'Once the consistency of the mixture is a bit cloudy, you can add a few drops of essential oil for a light scent (6-8 drops is usually enough). Pour warm liquid castile soap into bottles and allow to cool before using.'
    ],
    bulletPoints: [
      'No harsh chemicals!',
      'No cocamidopropyl betaine, sulfates (SLS, SLES, SCS), formaldehyde, or salicylates.',
      'No parabens, phosphates, MEA, DEA, TEA, or petroleum-based ingredients.',
      'No animal by-products, perfumes, dyes, or caustics.',
      '100% Non-toxic, hypoallergenic, gluten-free, biodegradable, cruelty-free.'
    ],
    subSections: [
      {
        heading: "DIY Liquid Castile Soap Recipe & Directions",
        image: "https://images.unsplash.com/photo-1607006482602-76ca97ac2a0c?q=80&w=800&auto=format&fit=crop",
        imageOverlayText: "Liquid Castile Soap Recipe",
        text: "Homemade Liquid Castile Soap infused with Kangen Water® provides multi-surface cleaning power for counters, floors, sinks, and dishwashing naturally without synthetic chemical residues."
      }
    ]
  },
  {
    id: 'detail-8',
    title: 'Strong Kangen Water Window Cleaner',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    desc: 'Learn how to make a streak-free, non-toxic window cleaner using Strong Kangen Water® and white vinegar.',
    content: [
      'Ingredients:\n• 1/4 cup distilled white vinegar\n• 1/2 tsp Strong Kangen Water® Dish Soap\n• 2 cups Strong Kangen Water®\n• 10 drops essential oil (optional)',
      'Directions:\nCombine all ingredients in a spray bottle and shake well to blend.',
      'Spray on windows, glass surfaces, and mirrors, then wipe clean with a lint-free microfiber cloth for a crystal-clear, streak-free shine without chemical ammonia fumes!'
    ],
    bulletPoints: [
      'No harsh chemicals!',
      'No cocamidopropyl betaine, sulfates (SLS, SLES, SCS), formaldehyde, or salicylates.',
      'No parabens, phosphates, MEA, DEA, TEA, or petroleum-based ingredients.',
      'No animal by-products, perfumes, dyes, or caustics.',
      '100% Non-toxic, hypoallergenic, gluten-free, biodegradable, cruelty-free.'
    ],
    subSections: [
      {
        heading: "Streak-Free Window & Glass Cleaning Guide",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop",
        imageOverlayText: "Streak-Free Window Spray",
        text: "Combining Strong Kangen Water® with white vinegar and natural castile soap creates a powerful glass cleaner that cuts through grime, smudges, and fingerprints without leaving streaky chemical films."
      }
    ]
  },
  {
    id: 'detail-9',
    title: 'All-Purpose Strong Kangen Water Cleaner',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop',
    desc: 'Learn how to make a versatile, all-natural All-Purpose Spray Cleaner using Strong Kangen Water®, washing soda, and borax.',
    content: [
      'Ingredients:\n• 1/2 tsp washing soda\n• 2 tsp borax powder\n• 1/2 tsp liquid soap\n• 2 cups Strong Kangen Water®\n• 10-12 drops of essential oil (optional)',
      'Directions:\nPut all ingredients into a spray bottle, tighten lid, and shake thoroughly to blend ingredients.',
      'Spray on kitchen counters, appliances, stovetops, sinks, and bathroom surfaces for a powerful, chemical-free all-purpose cleaning spray!'
    ],
    bulletPoints: [
      'No harsh chemicals!',
      'No cocamidopropyl betaine, sulfates (SLS, SLES, SCS), formaldehyde, or salicylates.',
      'No parabens, phosphates, MEA, DEA, TEA, or petroleum-based ingredients.',
      'No animal by-products, perfumes, dyes, or caustics.',
      '100% Non-toxic, hypoallergenic, gluten-free, biodegradable, cruelty-free.'
    ],
    subSections: [
      {
        heading: "All-Purpose Household Cleaning Guide",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
        imageOverlayText: "All-Purpose Kangen Spray",
        text: "Combining washing soda, borax, and liquid soap with Strong Kangen Water® creates an all-surface cleaning spray that dissolves grease, grime, and water spots without leaving hazardous chemical residues."
      }
    ]
  }
];

interface GreenerHomeDetailProps {
  initialArticleId?: string;
  onNavigate: (page: string) => void;
  onOpenConsultation?: () => void;
  onOpenSearch?: (initialQuery?: string) => void;
}

export const GreenerHomeDetail: React.FC<GreenerHomeDetailProps> = ({
  initialArticleId = 'detail-3',
  onNavigate,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(initialArticleId);
  const [searchText, setSearchText] = useState<string>('');
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
      const savedComms = localStorage.getItem(`kangen_comments_${selectedArticleId}`);
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
      localStorage.setItem(`kangen_comments_${selectedArticleId}`, JSON.stringify(updatedComms));
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
      id: `comm-${Date.now()}`,
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

          // Header lines like "Ingredients:", "Directions:", "To Serve:"
          if (
            trimmed.endsWith(':') ||
            trimmed === 'Ingredients' ||
            trimmed === 'Directions' ||
            trimmed === 'To Serve'
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
        style={{ backgroundImage: `url('${currentArticle.image}')` }}
      >
        <div className="absolute inset-0 bg-[#293434]/60 backdrop-blur-xs"></div>
        <h1 className="relative z-10 font-serif text-3xl sm:text-5xl text-white font-bold drop-shadow-md tracking-wide">
          Greener Home
        </h1>
      </section>

      {/* Eco-Living Ebook Banner section matching screenshot */}
      <EbookBanner />

      {/* Main Content Layout (Sidebar + Article) */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT SIDEBAR (3 cols) */}
          <aside className="lg:col-span-3 space-y-6">
            {/* Distributor Circle Profile Card */}
            <div className="p-6 border border-[#3E4C4C]/15 rounded-2xl bg-white text-center space-y-3 shadow-md">
              <div className="w-24 h-24 rounded-full border-4 border-[#7AD1C4] mx-auto overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                  alt="Enagic® Distributor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif font-bold text-base text-[#293434]">
                Enagic® Distributor 6A8-6
              </h4>
              <p className="text-xs text-[#47a295] font-bold leading-tight">
                Enagic® International Distributor
              </p>
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

            {/* Sidebar Article List matching exact screenshot */}
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
                  onClick={() => onNavigate('greener-home')}
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

              {/* Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm leading-relaxed font-sans pt-2">
                {currentArticle.content.map((paragraph, idx) => (
                  renderFormattedParagraph(paragraph, idx)
                ))}
              </div>

              {/* Bullet Points List if present */}
              {currentArticle.bulletPoints && currentArticle.bulletPoints.length > 0 && (
                <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-5 space-y-3">
                  <h4 className="font-serif font-bold text-base text-[#333333]">
                    Key Uses & Benefits:
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

              {/* Sub-sections (for rich pages like Doing the Dishes & Non-toxic Cleaning) */}
              {currentArticle.subSections && currentArticle.subSections.length > 0 && (
                <div className="space-y-10 pt-6">
                  {currentArticle.subSections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-4 border-t border-slate-100 pt-6">
                      {sub.heading && (
                        <h3 className="font-serif text-2xl font-bold text-[#333333]">
                          {sub.heading}
                        </h3>
                      )}
                      {sub.subtext && (
                        <p className="text-xs sm:text-sm text-slate-500 italic font-serif">
                          {sub.subtext}
                        </p>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                        {sub.image && (
                          <div className="md:col-span-6 relative rounded-lg overflow-hidden border border-slate-200 shadow-xs h-56 group">
                            <img
                              src={sub.image}
                              alt={sub.heading || 'Sub Feature'}
                              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />
                            {sub.imageOverlayText && (
                              <div className="absolute bottom-4 left-4 right-4 bg-[#3E4C4C]/95 backdrop-blur-xs py-2.5 px-4 text-center rounded-md shadow-lg border border-[#7AD1C4]/40">
                                <span className="font-serif text-xs sm:text-sm text-white font-bold tracking-wide drop-shadow-md">
                                  {sub.imageOverlayText}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        <div className={sub.image ? 'md:col-span-6 space-y-3' : 'md:col-span-12 space-y-3'}>
                          {sub.text && renderFormattedParagraph(sub.text, sIdx)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </article>

            {/* Category Breadcrumbs Nav Bar matching screenshot */}
            <div className="bg-slate-100 rounded-lg p-3 text-xs text-slate-600 border border-slate-200/80 flex flex-wrap items-center gap-2 font-serif">
              <button
                onClick={() => onNavigate('greener-home')}
                className="font-bold text-emerald-800 hover:underline cursor-pointer"
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

            {/* REAL-TIME INTERACTIVE COMMENTS SECTION matching screenshot */}
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
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-medium">
                      {comm.text}
                      <span className="ml-2 inline-block">
                        <button className="text-[11px] text-[#47a295] font-bold hover:underline cursor-pointer">
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
                            ? 'bg-[#7AD1C4]/20 border-[#7AD1C4] text-[#293434] font-bold'
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
                        className="font-serif font-bold text-[#3E4C4C] hover:text-[#7AD1C4] uppercase tracking-wider text-[11px] flex items-center gap-1 cursor-pointer transition"
                      >
                        ↩ REPLY
                      </button>
                    </div>

                    {/* Reply Sub-form */}
                    {replyingToId === comm.id && (
                      <form
                        onSubmit={(e) => handleReplySubmit(comm.id, e)}
                        className="mt-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3"
                      >
                        <textarea
                          rows={3}
                          required
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder={`Reply to ${comm.name}...`}
                          className="w-full p-3 text-xs bg-white border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-[#7AD1C4]"
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
                            className="bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] px-4 py-1.5 rounded-full text-xs font-bold uppercase cursor-pointer shadow"
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
