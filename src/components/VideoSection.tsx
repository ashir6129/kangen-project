'use client';

import React from 'react';
import { Play } from 'lucide-react';

interface VideoSectionProps {
  onOpenVideoLibrary?: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onOpenVideoLibrary }) => {
  return (
    <section className="relative py-20 text-white overflow-hidden font-sans call-to-action-style-1">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://www.drinkfromheaven.com/affsites/eco/images/call-to-action/videos.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <p className="text-xs sm:text-sm text-slate-200 italic font-sans">
          All you need to know about Kangen Water
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white drop-shadow-md">
          Video Library
        </h2>

        <div className="pt-4">
          <button
            onClick={onOpenVideoLibrary}
            className="inline-flex items-center gap-2 bg-[#87b076] hover:bg-[#759e64] text-white px-10 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition shadow-lg cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" /> Watch
          </button>
        </div>
      </div>
    </section>
  );
};
