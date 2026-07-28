'use client';

import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, User, Mail, Phone, Globe, Clock, ShieldCheck } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIMEZONES = [
  '(GMT-08:00) Pacific Time (US & Canada)',
  '(GMT-07:00) Mountain Time (US & Canada)',
  '(GMT-06:00) Central Time (US & Canada)',
  '(GMT-05:00) Eastern Time (US & Canada)',
  '(GMT+00:00) UTC / London (GMT)',
  '(GMT+01:00) Central European Time (Berlin, Paris)',
  '(GMT+05:30) India Standard Time',
  '(GMT+08:00) Singapore / Hong Kong',
  '(GMT+09:00) Japan Standard Time (Tokyo)',
  '(GMT+10:00) Australian Eastern Time (Sydney)',
];

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timezone: TIMEZONES[0],
    preferredDate: '',
    preferredTime: '10:00 AM',
    smsReminder: true,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 font-sans">
      <div className="relative w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#075f70] text-white px-6 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-emerald-300" />
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold">Schedule Your Free Consultation</h2>
              <p className="text-xs text-emerald-100 font-sans">Serviced worldwide by Cynthia Briganti 6A8-6</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#87b076] mx-auto animate-bounce" />
              <h3 className="font-serif text-2xl font-bold text-slate-900">Consultation Scheduled!</h3>
              <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your mentor meeting with <span className="font-semibold text-[#075f70]">Cynthia Briganti 6A8-6</span> has been reserved for <span className="font-semibold text-slate-800">{formData.preferredDate || 'tomorrow'} at {formData.preferredTime}</span> ({formData.timezone}). Confirmation details have been sent to your email.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-8 py-2.5 bg-[#87b076] hover:bg-[#759e64] text-white text-xs font-semibold rounded-full uppercase tracking-wider shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium text-slate-700">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-semibold text-slate-800">Your Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#075f70] text-xs bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-slate-800">Your Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#075f70] text-xs bg-slate-50/50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-semibold text-slate-800">Mobile Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (818) 859-0109"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#075f70] text-xs bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-slate-800">Your Timezone</label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.timezone}
                      onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#075f70] text-xs bg-white"
                    >
                      {TIMEZONES.map((tz, i) => (
                        <option key={i} value={tz}>{tz}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-semibold text-slate-800">Preferred Call Date</label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#075f70] text-xs bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-slate-800">Preferred Time Slot</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#075f70] text-xs bg-white"
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="01:30 PM">01:30 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                      <option value="07:00 PM">07:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="sms_reminder"
                  checked={formData.smsReminder}
                  onChange={(e) => setFormData({ ...formData, smsReminder: e.target.checked })}
                  className="rounded border-slate-300 text-[#075f70] focus:ring-[#075f70]"
                />
                <label htmlFor="sms_reminder" className="text-xs text-slate-600 cursor-pointer">
                  Send me a reminder text message before the consultation call
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#87b076] hover:bg-[#759e64] text-white font-semibold text-xs uppercase tracking-wider rounded-full shadow-md transition cursor-pointer"
                >
                  Reserve Consultation Time
                </button>
              </div>

              <div className="text-center pt-1 text-[11px] text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your information is strictly protected and never shared or sold.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
