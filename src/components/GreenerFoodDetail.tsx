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
  linkCallout?: { label: string; url: string };
  bulletPoints?: string[];
  subSections?: ArticleSubSection[];
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'food-comm-1',
    name: 'Samantha Miller (Verified Owner)',
    email: 'samantha.m@gmail.com',
    date: 'Jan 04, 2026',
    text: '★ ★ ★ ★ ★ Soaking fresh farm produce in 11.5 Strong Kangen Water removes oil-based yellow pesticide residue that tap water cannot touch! Our strawberries and grapes stay crisp in the fridge twice as long.',
    likes: 14,
    avatarBg: 'bg-[#3E4C4C]',
  },
  {
    id: 'food-comm-2',
    name: 'Chef David Thorne',
    email: 'david.thorne@bistro.com',
    date: 'Dec 19, 2025',
    text: '★ ★ ★ ★ ★ Cooking rice, quinoa, and vegetable stocks with 9.5 pH Kangen Water makes grains noticeably fluffier and locks in rich natural aromatics. Our distributor made machine ordering effortless!',
    likes: 11,
    avatarBg: 'bg-[#47a295]',
  },
  {
    id: 'food-comm-3',
    name: 'Maria Santos',
    email: 'maria.santos@yahoo.com',
    date: 'Nov 22, 2025',
    text: '★ ★ ★ ★ ★ Brewing morning espresso and teas with 9.0 pH Kangen Water brings out smooth herbal flavors without bitter acid stomach discomfort. Organic food + Kangen Water is life-changing!',
    likes: 10,
    avatarBg: 'bg-[#3E4C4C]',
  },
];

const ARTICLES: ArticleDetailData[] = [
  {
    id: 'food-detail-1',
    title: 'Best Produce',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1200&auto=format&fit=crop',
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
    desc: 'Adapted from Sakara, The 10-Day Reset. Boost your morning smoothie by blending organic greens with Kangen Water.',
    content: [
      'Adapted from: Sakara, The 10-Day Reset',
      'Ingredients:\n• 1/2 a medium banana\n• 1 handful spinach, washed in Kangen 11.5 Water\n• 1 cup almond milk (or non-dairy milk of choice)\n• 1 tbsp healthy fat (try coconut oil, nut butter or seeds)\n• 1 scoop protein powder\n• 3–4 Kangen Water® ice cubes\n• Optional: sweeten to taste w/ 1–2 tsp maple syrup or raw honey',
      'Directions:\nCombine all ingredients in high-speed blender, blend until smooth and enjoy!'
    ],
    bulletPoints: [
      'Wash spinach & greens in Strong Kangen Water® (11.5 pH) before blending.',
      'Use Kangen Water® ice cubes for maximum cell hydration and antioxidant absorption.',
      'Add healthy fats (nut butter, coconut oil) to sustain clean energy throughout the day.'
    ]
  },
  {
    id: 'food-detail-7',
    title: "Sayra's Cornbread",
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=1200&auto=format&fit=crop',
    desc: 'Recipe from Sundays At Moosewood Restaurant. Bake lighter, fluffier cornbread using Kangen 9.5 Water.',
    content: [
      'Recipe from: Sundays At Moosewood Restaurant',
      'Ingredients:\n• 2 eggs\n• 1 cup milk or buttermilk (or Kangen 9.5 Water)\n• 1/4 cup cooking oil\n• 1/4 tsp salt\n• 1/4 cup brown sugar (optional)\n• 4 tsp baking powder\n• 1 cup white or yellow cornmeal (preferably good quality stone ground)\n• 1 cup unbleached white flour (or half whole wheat, half white)',
      'Directions:\n1. Preheat the oven to 400°F.\n2. In a large bowl, beat together the eggs, milk (or Kangen Water®), oil, salt, and brown sugar (if desired) until well blended.\n3. Sift in the baking powder and whisk until foamy. Quickly mix in the cornmeal and flour. Beat until the batter is smooth.\n4. Pour into an oiled 9-inch square or 10-inch round baking pan. Bake for 20 to 25 minutes, or until a knife inserted in the center comes out clean.'
    ],
    bulletPoints: [
      'Substitute part or all of liquid with Kangen 9.5 Water for extra light texture.',
      'Use high quality stone-ground white or yellow cornmeal.',
      'Bake at 400°F for 20 to 25 minutes until golden brown and center tests clean.'
    ]
  },
  {
    id: 'food-detail-8',
    title: 'Kangen Water® with a Twist',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
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
  },
  {
    id: 'food-detail-9',
    title: 'Chicken with Artichokes in Creamy Mustard Sauce',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop',
    desc: 'Recipe from dinneralovestory.com. Tender chicken thighs with artichokes in a rich creamy Dijon mustard sauce.',
    content: [
      'Recipe from: dinneralovestory.com',
      'Ingredients:\n• 1 1/3 lb chicken thighs, salted and peppered (pre-soaked in Kangen 9.5 Water for 20 mins)\n• 3 tbsp olive oil\n• 1 small onion, chopped (about 1/2 cup)\n• 1/2 cup chopped grape tomatoes\n• 8 oz (about 1 1/2 cups) thawed frozen or canned artichokes, drained\n• Zest from 1 lemon (about 1/2 tsp)\n• Salt and freshly ground pepper\n• 1/2 cup Kangen Water® (or white wine)\n• 1/2 cup chicken broth (or 1/4 cup Kangen Water® + 1/4 cup broth)\n• 1/4 – 1/3 cup cream\n• 2 tsp Dijon mustard\n• Chopped parsley or thyme',
      'Directions:\n1. In a large skillet, brown chicken pieces in olive oil over medium-high heat (about 2-3 minutes per side). Remove and decrease heat to medium.\n2. Add chopped onion. Cook 1-2 minutes, scraping brown bits leftover from chicken.\n3. Add tomatoes, artichokes, lemon zest, salt, and pepper. Cook another 2-3 minutes.\n4. Nestle chicken thighs in the vegetables, then add Kangen Water® and chicken broth. Bring to a boil, then reduce to a simmer and cover. Cook another 8 to 10 minutes.\n5. While simmering, whisk together cream and mustard. Remove skillet from heat and stir in creamy mustard mixture. Garnish with fresh parsley or thyme.'
    ],
    bulletPoints: [
      'Soak chicken thighs in Kangen 9.5 Water for 20 minutes before cooking for maximum tenderness.',
      'Substitute Kangen Water® for white wine and half of the chicken broth for a clean, rich reduction sauce.',
      'Whisk cream and Dijon mustard separately before stirring in at the end to prevent curdling.'
    ]
  },
  {
    id: 'food-detail-10',
    title: 'Chicken and Barley Soup',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop',
    desc: 'Recipe from Dinner the Playbook. A comforting, nutrient-dense chicken and barley soup diluted & simmered with Kangen Water®.',
    content: [
      'Recipe from: Dinner the Playbook',
      'Ingredients:\n• 2 tbsp olive oil\n• 1/2 tsp red pepper flakes\n• 1 cup chopped yellow onion\n• 1 cup peeled and chopped carrots (about 1 large carrot)\n• 1 cup chopped celery (about 2 celery stalks)\n• 1/2 cup chopped red bell pepper\n• Salt and pepper to taste\n• 4 cups chicken broth (or 2 cups chicken broth + 2 cups Kangen 9.5 Water)\n• 1 bay leaf\n• 4 fresh thyme sprigs\n• 3 to 4 boneless chicken breast halves\n• 1/2 cup uncooked barley\n• Handful of chopped fresh parsley, for garnish',
      'Directions:\n1. In a large stockpot, warm olive oil and red pepper flakes over medium heat for 1 to 2 minutes.\n2. Add onions, carrots, celery, bell pepper, salt, and pepper. Cook for 10 to 12 minutes until onions are soft.\n3. Add broth (and Kangen Water®), bay leaf, and thyme. Bring to a boil.\n4. Add uncooked chicken breast halves and simmer over medium-low heat for 15 to 20 minutes.\n5. Remove chicken from pot and shred using two forks.\n6. Return shredded chicken to pot, add barley, and simmer covered on low heat for 20-25 minutes until barley is tender but not mushy.\n7. Add Kangen Water® if soup becomes too thick. Discard bay leaf, sprinkle with fresh parsley, and serve warm!'
    ],
    bulletPoints: [
      'Use Kangen 9.5 Water to adjust soup thickness and lock in vegetable minerals.',
      'Shred chicken breast with two forks for tender, juicy texture in every spoonful.',
      'Barley absorbs liquid rapidly—add Kangen Water® as needed while simmering.'
    ]
  },
  {
    id: 'food-detail-11',
    title: 'Boiled Kale with a Fried Egg and Toast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop',
    desc: 'Adapted from The Zuni Café Cookbook. Tender dino kale simmered in Kangen Water® served over garlic-rubbed toast with a fried egg.',
    content: [
      'Adapted from: The Zuni Café Cookbook & Orangette',
      'Ingredients:\n• About 8 oz kale (lacinato/dino kale is best)\n• 5 tbsp olive oil\n• 1 medium yellow onion, diced\n• Pinch of dried red pepper flakes\n• 2 large garlic cloves, thinly sliced\n• 3 to 4 cups Kangen Water® (or mild chicken stock / combination)\n\nTo Serve:\n• Thick slices of country bread\n• Fresh eggs\n• Olive oil\n• Prosciutto, torn into bite-sized bits (optional)\n• Freshly grated Parmigiano Reggiano or Pecorino Romano',
      'Directions:\n1. Prepare Kale: Trim discolored spots, remove thick stems, and slice into 1/4-inch ribbons. Wash thoroughly in Kangen 11.5 Water in a salad spinner to remove trapped dirt, then spin dry.\n2. Cook Kale: In a 4-quart saucepan, warm oil over medium-low heat. Add onions and cook until translucent. Add red pepper flakes, garlic, and kale; stir until wilted. Add Kangen Water® to cover by 1/2 inch. Simmer covered for 30 minutes until tender. Season generously with salt.\n3. Serve: Toast country bread and lightly rub both sides with raw garlic while hot. Place toast in soup bowls, pile warm kale on top with broth, add olive-oil fried egg, optional prosciutto bits, and grated Parmigiano Reggiano!'
    ],
    bulletPoints: [
      'Wash dino kale ribbons in Kangen 11.5 Water in a salad spinner to lift hidden dirt & residue.',
      'Simmer kale in Kangen Water® to preserve vibrant green pigments and tenderize fibers without losing nutrients.',
      'Rub hot toasted country bread with fresh garlic cloves before layering simmered kale and olive-oil fried eggs.'
    ]
  },
  {
    id: 'food-detail-12',
    title: 'Salmon Baked in Parchment',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200&auto=format&fit=crop',
    desc: 'Recipe from Moosewood Restaurant Celebrates. Tender salmon fillets baked in parchment with a shallot, wine & fresh herb reduction.',
    content: [
      'Recipe from: Moosewood Restaurant Celebrates',
      'Ingredients:\n• 4 inch-thick salmon fillets (about 6 oz each, washed in Kangen Water®)\n• 3 tbsp butter\n• 1 1/2 cup minced shallots\n• 1 1/2 cup dry white wine (or Kangen Water® reduction)\n• 1/3 cup chopped fresh Italian parsley\n• 1 1/2 tbsp minced fresh dill\n• Salt and ground black pepper to taste\n• 4 pieces of 9x15 inch parchment paper\n• 4 fresh Italian parsley sprigs\n• 4 fresh dill sprigs',
      'Directions:\n1. Prepare Salmon: Gently rinse salmon fillets in cold Kangen Water®, pat them dry with paper towels, and set aside.\n2. Shallot Reduction: Melt butter in a medium skillet. Add shallots and sauté over medium heat for 10 minutes until translucent and golden. Add wine, simmering uncovered for ~20 minutes until reduced to a syrupy 3/4 to 1 cup sauce. Stir in chopped parsley, dill, salt, and pepper.\n3. Prepare Packets & Preheat: Fold parchment paper pieces into 9x7.5 inch rectangles, rounding opposite corners to form ovals. Preheat oven to 350°F.\n4. Assemble & Crimp: Lightly butter inside of parchment oval. Place salmon fillet on one side, spoon 3-4 tbsp of shallot sauce over top, and top with parsley & dill sprigs. Fold parchment over and crimp open edges twice around the perimeter to form a tight seal.\n5. Bake & Serve: Bake at 350°F for ~15 minutes. Snip packets open with scissors and serve immediately!'
    ],
    bulletPoints: [
      'Rinse & clean salmon fillets in cold Kangen 9.5 Water before cooking to draw out fishy odors and lock in natural moisture.',
      'Baking in parchment locks in aromatic steam, keeping salmon ultra tender and flaky without drying out.',
      'Double crimp packet edges to prevent savory shallot and wine reduction from leaking during baking.'
    ]
  },
  {
    id: 'food-detail-13',
    title: 'Honey Sesame Seared Tuna with Wasabi Cucumber Salad',
    image: 'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?q=80&w=1200&auto=format&fit=crop',
    desc: 'Recipe from wildoats.com. Sesame-crusted seared ahi tuna served over chilled wasabi cucumber, carrot & green onion salad.',
    content: [
      'Recipe from: wildoats.com',
      'Ingredients:\n• 1/4 cup plus 2 tbsp rice wine vinegar\n• 2 tbsp olive oil\n• 1/4 tsp wasabi powder or paste (to taste)\n• 1 tsp turbinado sugar\n• 2 large seedless cucumbers, thinly sliced (washed in Kangen 11.5 Water)\n• 1 bunch green onions, sliced\n• 1 carrot, shredded\n• 1/4 cup soy sauce or tamari\n• 2 tbsp honey\n• 1 tbsp sesame oil\n• 1 reclosable gallon-size bag\n• 4 6-oz tuna steaks (washed in cold Kangen 9.5 Water)\n• 1/2 cup toasted sesame seeds\n• 1 tbsp olive oil for searing',
      'Directions:\n1. Wasabi Cucumber Salad: Mix 1/4 cup rice wine vinegar, olive oil, wasabi, and sugar in a bowl. Stir in cucumbers, green onions, and shredded carrot. Cover and chill in fridge.\n2. Marinate Tuna: In a gallon bag, mix soy sauce, honey, sesame oil, and 2 tbsp rice wine vinegar. Add tuna steaks and refrigerate for 15 minutes.\n3. Sesame Crust & Sear: Spread toasted sesame seeds on a baking sheet. Press one side of each tuna steak into sesame seeds. Heat 1 tbsp olive oil in a skillet over high heat.\n4. Sear: Place tuna in skillet sesame-side down; sear for 1 minute. Turn and cook 2 minutes longer for medium-rare steaks.\n5. Assemble & Serve: Divide chilled wasabi cucumber salad onto 4 plates, slice tuna steaks diagonally, layer over salad, garnish with extra sesame seeds, and enjoy!'
    ],
    bulletPoints: [
      'Clean fresh tuna steaks & cucumbers in cold Kangen 9.5 and 11.5 Water before marinating.',
      'Sear tuna over high heat for just 1-2 minutes per side to maintain a tender, medium-rare center.',
      'Wasabi cucumber salad provides a crisp, refreshing, low-calorie pairing rich in antioxidants.'
    ]
  }
];

interface GreenerFoodDetailProps {
  initialArticleId?: string;
  onNavigate: (page: string) => void;
  onOpenConsultation?: () => void;
  onOpenSearch?: (initialQuery?: string) => void;
}

export const GreenerFoodDetail: React.FC<GreenerFoodDetailProps> = ({
  initialArticleId = 'food-detail-1',
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
        <div className="absolute inset-0 bg-[#293434]/60 backdrop-blur-xs"></div>
        <h1 className="relative z-10 font-serif text-3xl sm:text-5xl text-white font-bold drop-shadow-md tracking-wide">
          Greener Food
        </h1>
      </section>

      {/* Eco-Living Ebook Banner section matching screenshot */}
      <EbookBanner />

      {/* Main Content Layout (Sidebar + Article) */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT SIDEBAR (3 cols) */}
          <aside className="lg:col-span-3 space-y-6">
            {/* Distributor Profile Card */}
            <div className="p-6 border border-slate-200/80 rounded-lg bg-slate-50 text-center space-y-3 shadow-xs">
              <div className="w-24 h-24 rounded-full border-2 border-[#87b076] mx-auto overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                  alt="Enagic® Distributor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif font-bold text-base text-[#333333]">
                Enagic® Distributor 6A8-6
              </h4>
              <p className="text-xs text-slate-500 leading-tight">
                Enagic® International Distributor
              </p>
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
                    {renderFormattedParagraph(paragraph, idx)}
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

              {/* Sub-sections (for rich pages like Natural Flavor Ideas) */}
              {currentArticle.subSections && currentArticle.subSections.length > 0 && (
                <div className="space-y-8 pt-6 border-t border-slate-200">
                  {currentArticle.subSections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-4">
                      {sub.heading && (
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#333333]">
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
                          <div className="md:col-span-5 relative rounded-lg overflow-hidden border border-slate-200 shadow-xs h-56 group">
                            <img
                              src={sub.image}
                              alt={sub.heading || 'Sub Feature'}
                              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />
                            {sub.imageOverlayText && (
                              <div className="absolute bottom-3 left-3 right-3 bg-[#3E4C4C]/95 backdrop-blur-xs py-2 px-3 text-center rounded-md shadow-lg border border-[#7AD1C4]/40">
                                <span className="font-serif text-xs text-white font-bold tracking-wide drop-shadow-md">
                                  {sub.imageOverlayText}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        <div className={sub.image ? 'md:col-span-7' : 'md:col-span-12'}>
                          {sub.text && renderFormattedParagraph(sub.text, sIdx)}
                        </div>
                      </div>
                    </div>
                  ))}
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
