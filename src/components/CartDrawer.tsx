'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    getSubtotal,
    selectedRegion,
    formatPrice,
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState({ name: '', email: '', phone: '', address: '' });
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);

    // Save order locally
    try {
      const orders = JSON.parse(localStorage.getItem('hwj_orders') || '[]');
      orders.push({
        id: 'HWJ-' + Math.floor(100000 + Math.random() * 900000),
        customer: checkoutData,
        items: cart,
        total: getSubtotal(),
        currency: selectedRegion.currency,
        region: selectedRegion.name,
        date: new Date().toISOString(),
      });
      localStorage.setItem('hwj_orders', JSON.stringify(orders));
    } catch {
      // Ignore
    }

    setTimeout(() => {
      clearCart();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-6 h-6 text-sky-400" />
              <div>
                <h2 className="font-serif text-lg font-bold">Shopping Cart</h2>
                <p className="text-[11px] text-slate-400">Destination: {selectedRegion.name} ({selectedRegion.flag})</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-800">Your cart is empty</h3>
                <p className="text-slate-500 text-xs max-w-xs mx-auto font-sans">
                  Browse our authorized Enagic® Kangen Water machines and add items to your cart.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-full shadow-md"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const itemPrice = item.product.prices[selectedRegion.code] || item.product.prices.us || 0;

                return (
                  <div
                    key={item.product.code}
                    className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 items-center justify-between"
                  >
                    <div className="w-16 h-16 bg-white p-2 rounded-xl border border-slate-200 shrink-0 flex items-center justify-center">
                      <img src={item.product.img} alt={item.product.name} className="max-h-full object-contain" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-bold text-slate-900 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-sky-700 font-bold mt-0.5">
                        {formatPrice(itemPrice)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.code, -1)}
                          className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-800 w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.code, 1)}
                          className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.code)}
                      className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="font-medium text-emerald-600">Calculated at Checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Warranty:</span>
                  <span className="font-medium text-slate-800">Included</span>
                </div>
                <div className="flex justify-between font-serif text-base font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Subtotal ({selectedRegion.currency}):</span>
                  <span className="text-sky-700">{formatPrice(getSubtotal())}</span>
                </div>
              </div>

              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full py-4 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white font-bold text-sm rounded-2xl shadow-xl shadow-sky-600/20 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Order Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Direct Enagic® Corporate Fulfillment Guaranteed
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Checkout Order Inquiry Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {orderComplete ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-teal-500 mx-auto animate-bounce" />
                <h3 className="font-serif text-2xl font-bold text-slate-900">Order Inquiry Received!</h3>
                <p className="text-slate-600 text-sm font-sans max-w-sm mx-auto">
                  Your order inquiry for <strong className="text-slate-900">{formatPrice(getSubtotal())}</strong> has been logged. An official corporate specialist will email your checkout details.
                </p>
                <button
                  onClick={() => {
                    setCheckoutModalOpen(false);
                    setOrderComplete(false);
                    setIsOpen(false);
                  }}
                  className="mt-4 px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-full shadow-lg"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs font-medium text-slate-700">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">Complete Your Order</h3>
                  <p className="text-slate-500 text-xs">Destination: {selectedRegion.name} ({selectedRegion.currency})</p>
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-slate-800">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={checkoutData.name}
                    onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-slate-800">Email Address</label>
                  <input
                    type="email"
                    required
                    value={checkoutData.email}
                    onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-slate-800">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={checkoutData.phone}
                    onChange={(e) => setCheckoutData({ ...checkoutData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-slate-800">Shipping Address</label>
                  <textarea
                    rows={2}
                    required
                    value={checkoutData.address}
                    onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
                    placeholder="123 Street Name, City, Country"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>

                <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm font-bold">
                  <span>Total Amount:</span>
                  <span className="text-sky-700 text-base">{formatPrice(getSubtotal())}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl shadow-lg"
                >
                  Submit Order Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
