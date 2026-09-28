import React from 'react';
import { ShieldCheck, Calendar, ArrowUpRight, Award, Compass, CheckCircle2 } from 'lucide-react';
import { CONTRACT_METADATA, CORE_METRICS } from '../data/reportData';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  return (
    <section className="relative bg-[#f8f7fd] text-[#18122b] pt-12 pb-16 border-b border-gray-200/80 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ff5733]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#858bd1]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top metadata line with typographic separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600 font-medium tracking-wide mb-6">
          <span className="font-bold text-white uppercase tracking-wider bg-[#ff5733] px-3 py-1 rounded-full shadow-xs">
            PROJECT CLOSEOUT REPORT
          </span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span className="text-[#18122b] font-semibold">ShoSoccer Football Coaching Limited</span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span className="text-gray-600">Prepared by Series Media Limited</span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span className="text-emerald-600 flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Warranty Active
          </span>
        </div>

        {/* H1 Display: Space Grotesk Bold with High-Contrast Dark Heading & Orange Accent */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#18122b] leading-tight font-display text-balance">
            Operational Transformation & <span className="text-[#ff5733]">Asset Creation</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl">
            Transitioning ShoSoccer from manual administration to an owned, proprietary digital platform.
          </p>

          {/* Core Mantra Quote Box */}
          <div className="mt-5 inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#18122b] text-white shadow-lg border border-[#2e234c]">
            <Compass className="w-4 h-4 text-[#ff5733] shrink-0" />
            <span className="text-sm font-semibold tracking-wide">
              Core Principle: &ldquo;{CONTRACT_METADATA.mantra}&rdquo;
            </span>
          </div>
        </div>

        {/* Contract Parties & Delivery Metadata Grid (Dark Block) */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#18122b] text-white border border-[#2e234c] text-xs sm:text-sm shadow-xl">
          <div>
            <div className="text-[#a5b4fc] uppercase tracking-wider text-[11px] font-bold">Client</div>
            <div className="font-bold text-white mt-1 text-base">{CONTRACT_METADATA.client}</div>
            <div className="text-gray-300 text-xs">{CONTRACT_METADATA.clientDirector} (Founder)</div>
          </div>
          <div>
            <div className="text-[#a5b4fc] uppercase tracking-wider text-[11px] font-bold">Service Provider</div>
            <div className="font-bold text-white mt-1 text-base">{CONTRACT_METADATA.provider}</div>
            <div className="text-gray-300 text-xs">{CONTRACT_METADATA.providerDirector} (Director)</div>
          </div>
          <div>
            <div className="text-[#a5b4fc] uppercase tracking-wider text-[11px] font-bold">Agreement Timeline</div>
            <div className="font-bold text-white mt-1 text-base">20 Feb 2026 — 25 Sep 2026</div>
            <div className="text-emerald-400 text-xs font-semibold">Milestones 100% Cleared</div>
          </div>
          <div>
            <div className="text-[#a5b4fc] uppercase tracking-wider text-[11px] font-bold">Warranty Status</div>
            <div className="font-bold text-emerald-400 mt-1 text-base">Active to 30 Sep 2026</div>
            <div className="text-gray-300 text-xs">0 Outstanding Defects</div>
          </div>
        </div>

        {/* Marquee Metrics Grid (Dark Blocks with Orange Accents) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#18122b] text-white border border-[#2e234c] transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="text-xs font-bold text-[#ff5733] tracking-wide uppercase">
                  {metric.pillText}
                </div>
                <div className="text-3xl lg:text-4xl font-bold font-display text-white mt-2 tabular-nums">
                  {metric.value}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-gray-300 leading-normal">
                <span className="font-bold text-white block">{metric.label}</span>
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Nav Anchors */}
        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-700">
          <span className="text-gray-500 font-bold uppercase tracking-wider text-[11px]">Quick jump:</span>
          <button
            onClick={() => onScrollToSection('executive-summary')}
            className="hover:text-[#ff5733] transition-colors cursor-pointer text-[#18122b] font-bold"
          >
            1. Executive Summary
          </button>
          <span className="text-gray-300">·</span>
          <button
            onClick={() => onScrollToSection('tactical-pitch')}
            className="hover:text-[#ff5733] transition-colors cursor-pointer text-[#18122b] font-bold"
          >
            Tactical Architecture
          </button>
          <span className="text-gray-300">·</span>
          <button
            onClick={() => onScrollToSection('delivery-scope')}
            className="hover:text-[#ff5733] transition-colors cursor-pointer text-[#18122b] font-bold"
          >
            2. Scope Verification
          </button>
          <span className="text-gray-300">·</span>
          <button
            onClick={() => onScrollToSection('commercial-growth')}
            className="hover:text-[#ff5733] transition-colors cursor-pointer text-[#18122b] font-bold"
          >
            3. Commercial Data & ROI
          </button>
          <span className="text-gray-300">·</span>
          <button
            onClick={() => onScrollToSection('sign-off')}
            className="hover:text-[#ff5733] transition-colors cursor-pointer text-[#18122b] font-bold"
          >
            10. Formal Sign-Off
          </button>
        </div>
      </div>
    </section>
  );
};
