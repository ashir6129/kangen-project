'use client';

import React from 'react';
import { X, Award, Droplets, Zap, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (productCode: string) => void;
}

const COMPARISON_DATA = [
  {
    code: 'k8',
    name: 'LeveLuk K8',
    tagline: 'Flagship 8-Plate Ionizer',
    plates: 8,
    warranty: '5 Years',
    phRange: '2.5 - 11.5 pH',
    orp: '-850 mV',
    languages: 8,
    power: 'Auto Voltage (100-240V)',
    popular: true,
    img: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=600&auto=format&fit=crop',
    usPrice: '$5,890',
  },
  {
    code: 'sd501dx',
    name: 'LeveLuk SD501DX',
    tagline: 'Modern Upgrade Icon',
    plates: 7,
    warranty: '5 Years',
    phRange: '2.5 - 11.5 pH',
    orp: '-800 mV',
    languages: 5,
    power: '100-240V Multi-Plug',
    popular: false,
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
    usPrice: '$5,360',
  },
  {
    code: 'sd501p',
    name: 'SD501 Platinum',
    tagline: 'Sleek Metallic Finish',
    plates: 7,
    warranty: '5 Years',
    phRange: '2.5 - 11.5 pH',
    orp: '-800 mV',
    languages: 5,
    power: '120V US / 220V EU',
    popular: true,
    img: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=600&auto=format&fit=crop',
    usPrice: '$4,820',
  },
  {
    code: 'super501',
    name: 'Super 501',
    tagline: '12-Plate Commercial Unit',
    plates: 12,
    warranty: '3 Years',
    phRange: '2.5 - 11.5 pH (High Volume)',
    orp: '-850 mV',
    languages: 1,
    power: 'High Power Dual Hose',
    popular: false,
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop',
    usPrice: '$7,080',
  },
  {
    code: 'sd501u',
    name: 'LeveLuk SD501U',
    tagline: 'Under-the-Counter Mount',
    plates: 7,
    warranty: '5 Years',
    phRange: '2.5 - 11.5 pH',
    orp: '-800 mV',
    languages: 1,
    power: '120V Under-Sink System',
    popular: false,
    img: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=600&auto=format&fit=crop',
    usPrice: '$5,890',
  },
  {
    code: 'jr4',
    name: 'LeveLuk JRIV',
    tagline: 'Starter 4-Plate Unit',
    plates: 4,
    warranty: '3 Years',
    phRange: '2.5 - 11.5 pH',
    orp: '-450 mV',
    languages: 1,
    power: 'Energy Saver Power',
    popular: false,
    img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    usPrice: '$3,530',
  },
  {
    code: 'anespa',
    name: 'Anespa DX',
    tagline: 'Ionized Mineral Home Spa',
    plates: 0,
    warranty: '3 Years',
    phRange: '6.0 - 7.0 (Mineral Bath)',
    orp: 'N/A',
    languages: 1,
    power: 'No Electrical Plug (Hydraulic)',
    popular: true,
    img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=600&auto=format&fit=crop',
    usPrice: '$3,420',
  },
];

export const ProductComparisonModal: React.FC<ProductComparisonModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 font-sans">
      <div className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#075f70] text-white px-6 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-300" />
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold">Compare Enagic® Water Ionizers</h2>
              <p className="text-xs text-emerald-100 font-sans">Find the perfect Kangen Water® machine for your home or business</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Table Container */}
        <div className="p-4 overflow-x-auto overflow-y-auto flex-1">
          <table className="w-full min-w-[800px] border-collapse text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-4 font-semibold text-slate-700 w-44 sticky left-0 bg-slate-50 z-10 shadow-r">
                  Features
                </th>
                {COMPARISON_DATA.map((item) => (
                  <th key={item.code} className="p-4 font-semibold text-center min-w-[160px] align-top">
                    {item.popular && (
                      <span className="inline-block bg-amber-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full mb-1">
                        Popular
                      </span>
                    )}
                    <img src={item.img} alt={item.name} className="w-24 h-24 object-cover mx-auto rounded-md shadow-xs mb-2 border border-slate-200" />
                    <div className="font-serif font-bold text-slate-900 text-base">{item.name}</div>
                    <div className="text-[11px] text-slate-500 font-normal leading-tight h-8 flex items-center justify-center">{item.tagline}</div>
                    <div className="text-emerald-700 font-bold text-sm mt-1">{item.usPrice}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Titanium Plates */}
              <tr>
                <td className="p-3 font-semibold text-slate-700 sticky left-0 bg-white z-10 shadow-r flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600" /> Titanium Plates
                </td>
                {COMPARISON_DATA.map((item) => (
                  <td key={item.code} className="p-3 text-center font-semibold text-slate-800">
                    {item.plates > 0 ? `${item.plates} Solid Plates` : 'N/A (Futama Mineral Filters)'}
                  </td>
                ))}
              </tr>

              {/* pH Output Range */}
              <tr className="bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-700 sticky left-0 bg-slate-50/50 z-10 shadow-r flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-600" /> pH Range
                </td>
                {COMPARISON_DATA.map((item) => (
                  <td key={item.code} className="p-3 text-center text-slate-700">
                    {item.phRange}
                  </td>
                ))}
              </tr>

              {/* ORP Antioxidant Potential */}
              <tr>
                <td className="p-3 font-semibold text-slate-700 sticky left-0 bg-white z-10 shadow-r">
                  ORP Antioxidant Level
                </td>
                {COMPARISON_DATA.map((item) => (
                  <td key={item.code} className="p-3 text-center text-emerald-700 font-medium">
                    {item.orp}
                  </td>
                ))}
              </tr>

              {/* Warranty */}
              <tr className="bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-700 sticky left-0 bg-slate-50/50 z-10 shadow-r flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600" /> Full Warranty
                </td>
                {COMPARISON_DATA.map((item) => (
                  <td key={item.code} className="p-3 text-center text-slate-700">
                    {item.warranty}
                  </td>
                ))}
              </tr>

              {/* Display & Languages */}
              <tr>
                <td className="p-3 font-semibold text-slate-700 sticky left-0 bg-white z-10 shadow-r">
                  Screen & Voice Languages
                </td>
                {COMPARISON_DATA.map((item) => (
                  <td key={item.code} className="p-3 text-center text-slate-600">
                    {item.languages > 1 ? `${item.languages} Languages` : 'Single Language'}
                  </td>
                ))}
              </tr>

              {/* Power Supply */}
              <tr className="bg-slate-50/50">
                <td className="p-3 font-semibold text-slate-700 sticky left-0 bg-slate-50/50 z-10 shadow-r">
                  Power Specifications
                </td>
                {COMPARISON_DATA.map((item) => (
                  <td key={item.code} className="p-3 text-center text-slate-600 text-xs">
                    {item.power}
                  </td>
                ))}
              </tr>

              {/* Select / View Button */}
              <tr>
                <td className="p-4 font-semibold text-slate-700 sticky left-0 bg-white z-10 shadow-r">
                  Actions
                </td>
                {COMPARISON_DATA.map((item) => (
                  <td key={item.code} className="p-4 text-center">
                    <button
                      onClick={() => {
                        if (onSelectProduct) onSelectProduct(item.code);
                        onClose();
                      }}
                      className="w-full bg-[#87b076] hover:bg-[#759e64] text-white py-2 px-3 rounded-full text-xs font-semibold uppercase tracking-wider transition shadow-xs cursor-pointer"
                    >
                      View Details
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
          <span>* All machines generate 5 water types: Strong Kangen (11.5), Kangen Water (8.5-9.5), Clean Water (7.0), Beauty Water (6.0), Strong Acidic (2.5).</span>
          <button onClick={onClose} className="px-5 py-1.5 bg-slate-800 text-white rounded-full hover:bg-slate-700 text-xs transition cursor-pointer">
            Close Table
          </button>
        </div>
      </div>
    </div>
  );
};
