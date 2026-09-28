import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { CONTRACT_METADATA } from '../data/reportData';
import seriesMediaCube from '../assets/images/series_media_cube.png';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#080512] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Logo, Wordmark & Core Principle */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 bg-[#18122b] px-3.5 py-2 rounded-xl border border-white/15 shadow-md">
                <img 
                  src={seriesMediaCube} 
                  alt="Series Media Logo" 
                  className="h-8 w-auto object-contain" 
                />
                <span className="font-display font-extrabold text-base tracking-wider text-white">
                  SERIES<span className="text-white">MEDIA</span>
                </span>
              </div>
              <span className="text-xl font-bold font-display text-white">
                Series Media Limited
              </span>
            </div>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Bespoke digital architecture and proprietary platform engineering for elite sports academies and performance coaching organisations.
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 font-medium pt-1">
              <a
                href="mailto:tania@seriesmedia.net"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#ff5733]" />
                <span>tania@seriesmedia.net</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href="tel:+447727413035"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff5733]" />
                <span>+44 7727 413035</span>
              </a>
            </div>

            <div className="text-xs text-[#a5b4fc] font-semibold pt-1">
              &ldquo;{CONTRACT_METADATA.mantra}&rdquo;
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="space-y-2 text-xs">
            <div className="text-gray-400 font-bold uppercase tracking-wider mb-2">
              Report Sections
            </div>
            <div>
              <button
                onClick={() => onNavigate('executive-summary')}
                className="text-gray-400 hover:text-[#ff5733] transition-colors cursor-pointer"
              >
                1. Executive Summary
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigate('tactical-pitch')}
                className="text-gray-400 hover:text-[#ff5733] transition-colors cursor-pointer"
              >
                Tactical Architecture
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigate('delivery-scope')}
                className="text-gray-400 hover:text-[#ff5733] transition-colors cursor-pointer"
              >
                2. Scope Delivery Checklist
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigate('commercial-growth')}
                className="text-gray-400 hover:text-[#ff5733] transition-colors cursor-pointer"
              >
                3. Commercial Performance & ROI
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigate('contract-terms')}
                className="text-gray-400 hover:text-[#ff5733] transition-colors cursor-pointer"
              >
                Terms, SLA & Retainer
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigate('sign-off')}
                className="text-gray-400 hover:text-[#ff5733] transition-colors cursor-pointer"
              >
                10. Legal Sign-Off
              </button>
            </div>
          </div>

          {/* Col 3: Meta & Contact */}
          <div className="space-y-3 text-xs">
            <div className="text-gray-400 font-bold uppercase tracking-wider mb-2">
              Contract Metadata
            </div>
            <div className="text-gray-400 text-[11px] leading-relaxed">
              Client: {CONTRACT_METADATA.client}
              <br />
              Developer: Peter Phelan / Thirdwave Software
              <br />
              Director: {CONTRACT_METADATA.providerDirector}
            </div>
          </div>
        </div>

        {/* Quiet Legal Notices */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © 2026 Series Media Limited. All rights reserved. Base Platform architecture protected under Section 6.2.
          </div>
          <div className="text-right">
            ShoSoccer Football Coaching Limited Platform Instance
          </div>
        </div>
      </div>
    </footer>
  );
};
