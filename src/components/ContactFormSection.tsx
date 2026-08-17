'use client';

import React, { useState } from 'react';
import { Mail, Phone, User, Send, CheckCircle2, MessageSquare, Clock, MapPin } from 'lucide-react';

interface ContactFormSectionProps {
  onNavigate?: (page: string) => void;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Kangen Water Machine Consultation',
    message: '',
    preferredMethod: 'email',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#EDEEE7] min-h-screen font-sans text-[#3E4C4C]">
      {/* Header Banner */}
      <section className="relative w-full h-64 sm:h-72 bg-cover bg-center flex items-center justify-center shadow-inner" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop')` }}>
        <div className="absolute inset-0 bg-[#293434]/70 backdrop-blur-xs"></div>
        <div className="relative z-10 text-center space-y-2 max-w-2xl px-4">
          <span className="px-4 py-1.5 rounded-full bg-[#7AD1C4]/20 text-[#7AD1C4] text-xs font-bold uppercase tracking-wider border border-[#7AD1C4]/40 shadow-xs inline-block">
            Direct Distributor Contact
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-white font-bold drop-shadow-md tracking-wide">
            Contact Us
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm font-sans font-medium">
            Get in touch with your Enagic® Independent Distributor
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT COLUMN: Distributor Contact Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Primary Profile Card */}
            <div className="p-6 border border-[#3E4C4C]/15 rounded-2xl bg-white text-center space-y-4 shadow-md">
              <div className="w-28 h-28 rounded-full border-4 border-[#7AD1C4] mx-auto overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                  alt="Enagic® Distributor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-[#293434]">
                  Your Enagic® Distributor
                </h3>
                <p className="text-xs text-[#47a295] font-bold mt-0.5">
                  Enagic® Independent Distributor
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-3.5 text-left text-xs text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#7AD1C4]/20 text-[#3E4C4C] flex items-center justify-center shrink-0 font-bold border border-[#7AD1C4]/30">
                    <Phone className="w-4 h-4 text-[#3E4C4C]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Direct Phone</span>
                    <a href="#" className="font-mono font-bold text-[#293434] hover:text-[#7AD1C4] transition">
                      Contact via Phone
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#7AD1C4]/20 text-[#3E4C4C] flex items-center justify-center shrink-0 font-bold border border-[#7AD1C4]/30">
                    <Mail className="w-4 h-4 text-[#3E4C4C]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Direct Email</span>
                    <a href="#" className="font-sans font-bold text-[#293434] hover:text-[#7AD1C4] transition break-all">
                      Contact via Email
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#7AD1C4]/20 text-[#3E4C4C] flex items-center justify-center shrink-0 font-bold border border-[#7AD1C4]/30">
                    <Clock className="w-4 h-4 text-[#3E4C4C]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Response Time</span>
                    <span className="font-sans text-slate-700 font-medium">Within 24 Hours Worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Benefits Note */}
            <div className="p-5 bg-[#3E4C4C] text-[#EDEEE7] border border-[#7AD1C4]/30 rounded-2xl space-y-2.5 text-xs shadow-md">
              <h4 className="font-serif font-bold text-[#7AD1C4] text-sm">
                Why Contact Us?
              </h4>
              <ul className="space-y-2 text-slate-200 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-[#7AD1C4] font-bold">✓</span> Personalized Kangen Water® machine advice
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7AD1C4] font-bold">✓</span> Free home or virtual water demonstration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7AD1C4] font-bold">✓</span> Financing & regional shipping guidance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7AD1C4] font-bold">✓</span> Customized eco-friendly recipe consultation
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Fillable Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-[#3E4C4C]/15 rounded-2xl p-6 sm:p-10 shadow-md space-y-6">
              
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#293434]">
                  Send a Direct Message
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 font-medium">
                   Fill out the form below to reach us directly. We are happy to assist with any questions.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-[#EDEEE7]/60 rounded-2xl p-8 border border-slate-200 shadow-inner">
                  <CheckCircle2 className="w-16 h-16 text-[#7AD1C4] mx-auto animate-bounce" />
                  <h3 className="font-serif text-2xl font-bold text-[#293434]">Message Received!</h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your message regarding <span className="font-semibold text-[#3E4C4C]">&quot;{formData.subject}&quot;</span> has been sent to our team. We will follow up via {formData.preferredMethod === 'phone' ? 'phone' : 'email'} at <span className="font-semibold text-slate-900">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Kangen Water Machine Consultation',
                        message: '',
                        preferredMethod: 'email',
                      });
                    }}
                    className="mt-4 px-8 py-3 bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] text-xs font-bold rounded-full uppercase tracking-wider shadow cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs font-medium text-slate-700">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1.5 font-bold text-slate-800">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7AD1C4] text-xs bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1.5 font-bold text-slate-800">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. sarah@example.com"
                          className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7AD1C4] text-xs bg-slate-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1.5 font-bold text-slate-800">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 555-000-0000"
                          className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7AD1C4] text-xs bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1.5 font-bold text-slate-800">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7AD1C4] text-xs bg-white"
                      >
                        <option value="Kangen Water Machine Consultation">Kangen Water Machine Consultation</option>
                        <option value="Product Pricing & Financing">Product Pricing & Financing</option>
                        <option value="Free Water Trial / Demonstration">Free Water Trial / Demonstration</option>
                        <option value="Greener Lifestyle & Recipe Questions">Greener Lifestyle & Recipe Questions</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-1.5 font-bold text-slate-800">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message or question here..."
                        className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7AD1C4] text-xs bg-slate-50/50 text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block mb-1.5 font-bold text-slate-800">
                      Preferred Contact Method
                    </label>
                    <div className="flex items-center gap-6 pt-1">
                      <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-semibold">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.preferredMethod === 'email'}
                          onChange={() => setFormData({ ...formData, preferredMethod: 'email' })}
                          className="text-[#7AD1C4] focus:ring-[#7AD1C4]"
                        />
                        Email
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-semibold">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.preferredMethod === 'phone'}
                          onChange={() => setFormData({ ...formData, preferredMethod: 'phone' })}
                          className="text-[#7AD1C4] focus:ring-[#7AD1C4]"
                        />
                        Phone Call
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-semibold">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="sms"
                          checked={formData.preferredMethod === 'sms'}
                          onChange={() => setFormData({ ...formData, preferredMethod: 'sms' })}
                          className="text-[#7AD1C4] focus:ring-[#7AD1C4]"
                        />
                        SMS Text Message
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
