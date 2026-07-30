'use client';

import React, { useState } from 'react';
import { X, Play, Video, Sparkles, CheckCircle2 } from 'lucide-react';

interface VideoLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VIDEOS = [
  {
    id: 'demo-1',
    title: 'Kangen Water® Full Demonstration & pH Testing',
    category: 'Demonstration',
    duration: '14:20',
    thumbnail: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=600&auto=format&fit=crop',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', // fallback embed
    desc: 'Watch the complete live demonstration showing pH testing, oxidation-reduction potential (ORP), and oil emulsification with Strong Kangen 11.5.',
  },
  {
    id: 'demo-2',
    title: 'Pesticide & Chemical Emulsification Test (pH 11.5)',
    category: 'Kitchen & Produce',
    duration: '08:45',
    thumbnail: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    desc: 'See how Strong Kangen Water strips oil-based toxic pesticides from fresh tomatoes and grapes that tap water leaves behind.',
  },
  {
    id: 'demo-3',
    title: 'ORP Meter Test: Tap Water vs Bottled Water vs Kangen',
    category: 'Science & Anti-Oxidation',
    duration: '10:15',
    thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    desc: 'Comparing negative ORP (anti-aging potential) of Kangen Water against acidic tap and store-bought bottled waters.',
  },
  {
    id: 'demo-4',
    title: 'Enagic® LeveLuk K8 Unboxing & Installation Guide',
    category: 'Machine Setup',
    duration: '06:30',
    thumbnail: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=600&auto=format&fit=crop',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    desc: 'Step-by-step setup guide for connecting your Enagic K8 machine to any kitchen faucet in under 5 minutes.',
  },
];

export const VideoLibraryModal: React.FC<VideoLibraryModalProps> = ({ isOpen, onClose }) => {
  const [selectedVideo, setSelectedVideo] = useState(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 font-sans">
      <div className="relative w-full max-w-5xl bg-[#3E4C4C] text-[#EDEEE7] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-[#7AD1C4]/30">
        {/* Modal Header */}
        <div className="bg-[#293434] px-6 py-4 flex items-center justify-between border-b border-[#7AD1C4]/30">
          <div className="flex items-center gap-3">
            <Video className="w-6 h-6 text-[#7AD1C4]" />
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">Kangen Water® Video Library</h2>
              <p className="text-xs text-[#7AD1C4] font-medium">Watch live demonstrations, pH experiments & machine tutorials</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#293434]/90">
          {/* Main Video Player Container */}
          <div className="relative w-full rounded-xl overflow-hidden bg-black aspect-16/9 shadow-lg border border-[#7AD1C4]/20">
            {isPlaying ? (
              <iframe
                src={`${selectedVideo.embedUrl}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-between p-6">
                  <span className="inline-block px-3 py-1 bg-[#7AD1C4] text-[#293434] text-xs font-bold rounded-full self-start shadow-md">
                    {selectedVideo.category} ({selectedVideo.duration})
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold drop-shadow-md text-white">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 max-w-2xl drop-shadow font-medium">
                      {selectedVideo.desc}
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="inline-flex items-center gap-2 bg-[#7AD1C4] hover:bg-[#61c2b5] text-[#293434] px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition shadow-lg cursor-pointer hover:scale-103"
                      >
                        <Play className="w-4 h-4 fill-[#293434]" /> Watch Demonstration Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Video List Selector Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7AD1C4]">Select Video:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VIDEOS.map((vid) => {
                const isActive = vid.id === selectedVideo.id;
                return (
                  <button
                    key={vid.id}
                    onClick={() => {
                      setSelectedVideo(vid);
                      setIsPlaying(false);
                    }}
                    className={`flex items-center gap-4 p-3 rounded-xl border text-left transition cursor-pointer ${
                      isActive
                        ? 'bg-[#3E4C4C] border-[#7AD1C4] ring-2 ring-[#7AD1C4]/50'
                        : 'bg-[#1e2626]/80 border-slate-700 hover:bg-[#3E4C4C]/60'
                    }`}
                  >
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border border-slate-700">
                      <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white fill-white" />
                      </div>
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="text-xs font-semibold text-white truncate">{vid.title}</div>
                      <div className="text-[11px] text-slate-300 flex items-center gap-2">
                        <span>{vid.category}</span>
                        <span>•</span>
                        <span>{vid.duration}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#293434] px-6 py-3 border-t border-[#7AD1C4]/20 flex items-center justify-between text-xs text-slate-300">
          <span>Serviced by <strong className="text-[#7AD1C4]">Shahina Sajid 6A8-6</strong> • Enagic® Independent Distributor</span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 bg-[#3E4C4C] text-white rounded-full hover:bg-[#576a6a] transition cursor-pointer font-semibold border border-[#7AD1C4]/30"
          >
            Close Library
          </button>
        </div>
      </div>
    </div>
  );
};
