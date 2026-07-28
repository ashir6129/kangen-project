'use client';

import React from 'react';
import { Play } from 'lucide-react';

interface VideoSectionProps {
  onOpenVideoLibrary?: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onOpenVideoLibrary }) => {
  return (
    <section className="relative py-20 text-white overflow-hidden font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=1800&auto=format&fit=crop)',
        }}
      />
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <p className="text-xs sm:text-sm text-slate-300 italic font-sans">
          All you need to know about Kangen Water®
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white drop-shadow-md">
          Video Library
        </h2>

        <div className="pt-4">
          <button
            onClick={onOpenVideoLibrary}
            className="inline-flex items-center gap-2 bg-[#87b076] hover:bg-[#759e64] text-white px-10 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition shadow-lg cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" /> Watch Demonstrations
          </button>
        </div>
      </div>
    </section>
  );
};
