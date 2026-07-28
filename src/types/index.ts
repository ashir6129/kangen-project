export interface ProductPrice {
  [regionCode: string]: number;
}

export interface Product {
  code: string;
  sku: string;
  name: string;
  tagline: string;
  desc: string;
  plates: number;
  warranty: number;
  popular?: boolean;
  img: string;
  imgangle?: string;
  gallery: string[];
  prices: ProductPrice;
  buylink?: string;
}

export interface Region {
  code: string;
  name: string;
  flag: string;
  currency: string;
  symbol: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface EbookFormData {
  email: string;
}
