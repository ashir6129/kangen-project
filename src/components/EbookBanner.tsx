'use client';

import React, { useState } from 'react';
import { CheckCircle2, FileText } from 'lucide-react';

export const EbookBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const EBOOK_LINK = 'https://ekw.to/ZKsB93vE';

  const validateEmail = (val: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(val.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
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

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      try {
        const saved = JSON.parse(localStorage.getItem('kw_ebook_emails') || '[]');
        saved.push({ email: email.trim(), date: new Date().toISOString() });
        localStorage.setItem('kw_ebook_emails', JSON.stringify(saved));
      } catch {}
      window.open(EBOOK_LINK, '_blank');
    }, 500);
  };

  return (
    <section
      className="relative py-14 text-white overflow-hidden font-sans shadow-md call-to-action-style-3 ebookfooter"
      id="ebookfooter0"
      style={{
        backgroundImage:
          'url(https://www.drinkfromheaven.com/affsites/eco/images/call-to-action/ebook.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-3">
        {success ? (
          <div className="space-y-3 py-2">
            <CheckCircle2 className="w-12 h-12 text-[#87b076] mx-auto animate-bounce" />
            <p className="text-white font-serif font-bold text-2xl">Your Free ECO eBook is Ready!</p>
            <p className="text-xs text-slate-300">
              We&apos;ve dispatched your eBook download link. If your browser didn&apos;t open it automatically,{' '}
              <a href={EBOOK_LINK} target="_blank" rel="noopener noreferrer" className="underline text-emerald-300 font-semibold">
                click here to view the 29-Page PDF
              </a>.
            </p>
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

            <form onSubmit={handleSubmit} className="pt-3">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Your email address..."
                  className="w-full sm:w-80 px-6 py-3.5 rounded-full text-xs text-[#293434] bg-white shadow-inner outline-none focus:ring-2 focus:ring-[#7AD1C4] font-medium"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] text-xs font-bold rounded-full uppercase tracking-wider transition shadow-lg hover:scale-103 disabled:opacity-70 whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND THE EBOOK'}
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
  );
};
