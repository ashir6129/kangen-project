'use client';

import React, { useState } from 'react';
import { CheckCircle2, FileText, HelpCircle, X } from 'lucide-react';

export const EbookBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [mobileNumber, setMobileNumber] = useState('');
  
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const EBOOK_LINK = 'https://ekw.to/ZKsB93vE';

  const validateEmail = (val: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(val.trim());
  };

  const handleBannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email (e.g. name@domain.com).');
      return;
    }

    // Open Modal matching Picture 3
    setShowModal(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(false);
      setSuccess(true);
      try {
        const saved = JSON.parse(localStorage.getItem('kw_ebook_subscribers') || '[]');
        saved.push({
          email: email.trim(),
          fullName: fullName.trim() || 'Valued Guest',
          phone: mobileNumber.trim() ? `${countryCode} ${mobileNumber.trim()}` : '',
          date: new Date().toISOString(),
        });
        localStorage.setItem('kw_ebook_subscribers', JSON.stringify(saved));
      } catch (err) {
        console.error(err);
      }
      window.open(EBOOK_LINK, '_blank');
    }, 600);
  };

  return (
    <>
      <section
        className="relative py-12 sm:py-16 text-white overflow-hidden font-sans shadow-md call-to-action-style-3 ebookfooter"
        id="ebookfooter0"
        style={{
          backgroundImage:
            'url(https://www.drinkfromheaven.com/affsites/eco/images/call-to-action/ebook.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-xs" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-3">
          {success ? (
            <div className="space-y-3 py-4">
              <CheckCircle2 className="w-14 h-14 text-[#7AD1C4] mx-auto animate-bounce" />
              <h3 className="text-white font-serif font-bold text-2xl sm:text-3xl">Your Free ECO eBook is Ready!</h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto leading-relaxed">
                Thank you! We&apos;ve dispatched your 29-page Kangen Water® ECO-Living eBook. If your browser didn&apos;t open it automatically:
              </p>
              <div className="pt-2">
                <a
                  href={EBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] text-xs font-bold rounded-full uppercase tracking-wider transition shadow-lg hover:scale-103"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download 29-Page eBook (PDF)</span>
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#7AD1C4]/20 text-[#7AD1C4] border border-[#7AD1C4]/40 text-xs font-bold uppercase tracking-wider mb-1 shadow-xs">
                <FileText className="w-3.5 h-3.5" />
                <span>29-Page Eco-Living Guide</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-white uppercase tracking-wide drop-shadow-md">
                GET YOUR FREE ECO-LIVING EBOOK!
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto font-sans leading-relaxed">
                29 pages of daily tips for a greener and healthier lifestyle with Kangen Water!
              </p>

              <form onSubmit={handleBannerSubmit} className="pt-3">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-lg mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="name@example.com"
                    className="w-full sm:w-80 px-6 py-3.5 rounded-full text-xs text-[#293434] bg-white shadow-inner outline-none focus:ring-2 focus:ring-[#7AD1C4] font-medium"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] text-xs font-bold rounded-full uppercase tracking-wider transition shadow-lg hover:scale-103 whitespace-nowrap cursor-pointer"
                  >
                    SEND THE EBOOK
                  </button>
                </div>
                {error && <p className="text-rose-300 text-xs mt-2 font-medium">{error}</p>}
                <p className="text-[11px] text-slate-300 mt-3">
                  The ebook is sent to you via email or sms. Your data is kept safe; never sold or rented. Feel free to read our Privacy Policy.
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      {/* MODAL MATCHING PICTURE 3 */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className="bg-[#293434] text-white px-5 py-3.5 flex items-center justify-between">
              <h3 className="font-sans font-medium text-sm text-slate-100">Send ECO-Living eBook</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-300 hover:text-white transition p-1 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleModalSubmit} className="p-6 space-y-5">
              <div className="flex items-start gap-4">
                {/* Left Question Mark Icon matching Picture 3 */}
                <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center shrink-0 shadow-md">
                  <HelpCircle className="w-7 h-7" />
                </div>

                <div className="flex-1 space-y-4">
                  {/* Full Name Row */}
                  <div className="flex items-center gap-3">
                    <label className="text-xs font-bold text-[#293434] w-20 shrink-0">Full name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full name"
                      className="flex-1 px-3 py-2 border border-slate-300 rounded text-xs text-[#293434] outline-none focus:border-[#7AD1C4] focus:ring-1 focus:ring-[#7AD1C4]"
                      required
                    />
                  </div>

                  {/* SMS Subheading */}
                  <p className="text-xs text-slate-700 font-medium pt-1">
                    Would you also like to receive this eBook by SMS?
                  </p>

                  {/* Mobile # Row */}
                  <div className="flex items-center gap-3">
                    <label className="text-xs font-bold text-[#293434] w-20 shrink-0">Mobile #</label>
                    <div className="flex-1 flex items-center border border-slate-300 rounded overflow-hidden focus-within:border-[#7AD1C4] focus-within:ring-1 focus-within:ring-[#7AD1C4]">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-slate-100 px-2 py-2 text-xs text-slate-700 font-medium outline-none border-r border-slate-200 cursor-pointer"
                      >
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+92">🇵🇰 +92</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+49">🇩🇪 +49</option>
                      </select>
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="469-648-8298"
                        className="flex-1 px-3 py-2 text-xs text-[#293434] outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button matching Picture 3 */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-2.5 bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] text-xs font-bold rounded-md shadow-md transition hover:scale-102 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
