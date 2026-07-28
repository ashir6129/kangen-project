import { Product, Region } from '@/types';

export const REGIONS: Region[] = [
  { code: 'us', name: 'United States', flag: '🇺🇸', currency: 'USD', symbol: '$' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦', currency: 'CAD', symbol: '$' },
  { code: 'eu', name: 'Europe', flag: '🇪🇺', currency: 'EUR', symbol: '€' },
  { code: 'gb', name: 'United Kingdom', flag: '🇬🇧', currency: 'GBP', symbol: '£' },
  { code: 'au', name: 'Australia', flag: '🇦🇺', currency: 'AUD', symbol: '$' },
  { code: 'jp', name: 'Japan', flag: '🇯🇵', currency: 'JPY', symbol: '¥' },
  { code: 'in', name: 'India', flag: '🇮🇳', currency: 'INR', symbol: '₹' },
  { code: 'mx', name: 'Mexico', flag: '🇲🇽', currency: 'MXN', symbol: '$' },
  { code: 'hk', name: 'Hong Kong', flag: '🇭🇰', currency: 'HKD', symbol: '$' },
  { code: 'sg', name: 'Singapore', flag: '🇸🇬', currency: 'SGD', symbol: '$' },
];

export const PRODUCTS: Product[] = [
  {
    code: 'k8',
    sku: '1016',
    name: 'LeveLuk K8',
    tagline: 'The Mighty 8-Plate Anti-Oxidizer',
    desc: 'The Kangen® 8 is Enagic®\'s most powerful antioxidant machine - featuring 8 platinum-dipped titanium plates for improved water ionization and increased antioxidant production potential. Features worldwide multi-voltage power supply and multi-language display.',
    plates: 8,
    warranty: 5,
    popular: true,
    img: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop'
    ],
    prices: {
      us: 5890,
      ca: 6380,
      eu: 4600,
      gb: 4100,
      au: 6170,
      jp: 498000,
      in: 343000,
      mx: 72930,
      hk: 38600,
      sg: 6812
    },
    buylink: 'https://www.enagic.com/'
  },
  {
    code: 'sd501dx',
    sku: '1064',
    name: 'LeveLuk SD501DX',
    tagline: 'The Power You Know, With a Bold New Look',
    desc: 'The SD501DX is a modern upgrade of the classic SD501, offering the same powerful water ionization performance with a sleek new design, improved LCD display, LED-lit electrolysis tank, and universal power supply.',
    plates: 7,
    warranty: 5,
    popular: false,
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop'
    ],
    prices: {
      us: 5360,
      ca: 5820,
      eu: 3740,
      gb: 3450,
      au: 6050,
      jp: 440000,
      in: 310000,
      mx: 65000,
      hk: 34000,
      sg: 6104
    },
    buylink: 'https://www.enagic.com/'
  },
  {
    code: 'sd501p',
    sku: '1008',
    name: 'SD501 Platinum',
    tagline: 'The Ultimate Home Use Model in Platinum Finish',
    desc: 'Features a revamped modern platinum design that coordinates beautifully with today\'s stylish kitchens. It has 7 platinum-coated pure titanium electrode plates for maximum electrolysis.',
    plates: 7,
    warranty: 5,
    popular: true,
    img: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&auto=format&fit=crop'
    ],
    prices: {
      us: 4820,
      ca: 5120,
      eu: 3500,
      gb: 3200,
      au: 4770,
      jp: 398000,
      in: 297000,
      mx: 58100,
      hk: 32900,
      sg: 5886
    },
    buylink: 'https://www.enagic.com/'
  },
  {
    code: 'super501',
    sku: '1007',
    name: 'Super 501',
    tagline: 'The Heavy Duty Commercial & Large Family Unit',
    desc: 'The top of the line model for heavy home use or small businesses. Featuring 12 platinum-coated titanium electrode plates, generating high volumes of all 5 types of Enagic® water.',
    plates: 12,
    warranty: 3,
    popular: false,
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop'
    ],
    prices: {
      us: 7080,
      ca: 7360,
      eu: 5200,
      gb: 4800,
      au: 6850,
      jp: 698000,
      in: 397000,
      mx: 73870,
      hk: 42800,
      sg: 7673
    },
    buylink: 'https://www.enagic.com/'
  },
  {
    code: 'sd501u',
    sku: '1010',
    name: 'LeveLuk SD501U',
    tagline: 'The Under-the-Counter Space Saver',
    desc: 'Nestles discreetly under your sink while offering the full power of the SD501 with a beautiful wall-mounted compact LCD control panel.',
    plates: 7,
    warranty: 5,
    popular: false,
    img: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=800&auto=format&fit=crop'
    ],
    prices: {
      us: 5890,
      ca: 6380,
      eu: 4600,
      gb: 4100,
      au: 6170,
      jp: 498000,
      in: 343000,
      mx: 72930,
      hk: 38600,
      sg: 6812
    },
    buylink: 'https://www.enagic.com/'
  },
  {
    code: 'jr4',
    sku: '1062',
    name: 'LeveLuk JRIV',
    tagline: 'The Junior Model Starter Unit',
    desc: 'The JRIV has 4 solid electrode plates for lower energy consumption. Perfect entry level choice for individuals or couples seeking Kangen Water.',
    plates: 4,
    warranty: 3,
    popular: false,
    img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop'
    ],
    prices: {
      us: 3530,
      ca: 4240,
      eu: 2900,
      gb: 2600,
      au: 4300,
      jp: 280000,
      in: 218000,
      mx: 39000,
      hk: 22900,
      sg: 4578
    },
    buylink: 'https://www.enagic.com/'
  },
  {
    code: 'anespa',
    sku: '1041',
    name: 'Anespa DX',
    tagline: 'Your Home Spa Ionized Mineral Shower System',
    desc: 'Transforms your bathroom into a natural hot spring resort. Removes chlorine and harmful impurities while adding moisturizing minerals that nourish skin and hair.',
    plates: 0,
    warranty: 3,
    popular: true,
    img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop'
    ],
    prices: {
      us: 3420,
      ca: 3850,
      eu: 2800,
      gb: 2500,
      au: 3450,
      jp: 340000,
      in: 200000,
      mx: 39000,
      hk: 21000,
      sg: 3815
    },
    buylink: 'https://www.enagic.com/'
  },
  {
    code: 'ukonannual',
    sku: '2006',
    name: 'Kangen Ukon Annual',
    tagline: 'Nature\'s Oldest Healer and Antioxidant Protector',
    desc: 'Wild Okinawa Turmeric (Ukon Σ™) grown organically with Kangen Water. Packed with essential oils, curcumin, and antioxidant minerals. 12-month supply (30 boxes).',
    plates: 0,
    warranty: 0,
    popular: false,
    img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop'
    ],
    prices: {
      us: 2660,
      ca: 2950,
      eu: 2100,
      gb: 1900,
      au: 2800,
      jp: 240000,
      in: 160000,
      mx: 29000,
      hk: 16500,
      sg: 3270
    },
    buylink: 'https://www.enagic.com/'
  }
];
