'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, Region } from '@/types';
import { REGIONS } from '@/data/products';

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  selectedRegion: Region;
  setIsOpen: (isOpen: boolean) => void;
  setSelectedRegion: (region: Region) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productCode: string) => void;
  updateQuantity: (productCode: string, delta: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  formatPrice: (amount: number) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<Region>(REGIONS[0]);

  // Load saved region or cart from localStorage on mount
  useEffect(() => {
    try {
      const savedRegionCode = localStorage.getItem('hwj_region');
      if (savedRegionCode) {
        const found = REGIONS.find((r) => r.code === savedRegionCode);
        if (found) setSelectedRegion(found);
      }
      const savedCart = localStorage.getItem('hwj_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hwj_cart', JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  // Save region
  const handleSetSelectedRegion = (region: Region) => {
    setSelectedRegion(region);
    try {
      localStorage.setItem('hwj_region', region.code);
    } catch {
      // Ignore
    }
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.code === product.code);
      if (existing) {
        return prevCart.map((item) =>
          item.product.code === product.code
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productCode: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.code !== productCode));
  };

  const updateQuantity = (productCode: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.code === productCode) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  const getSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = item.product.prices[selectedRegion.code] || item.product.prices.us || 0;
      return total + price * item.quantity;
    }, 0);
  };

  const formatPrice = (amount: number) => {
    return `${selectedRegion.symbol}${amount.toLocaleString()}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        selectedRegion,
        setIsOpen,
        setSelectedRegion: handleSetSelectedRegion,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getSubtotal,
        formatPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
