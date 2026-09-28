import React from 'react';
import { ArrowRight, Flame, Trophy, CheckCircle2, TrendingUp } from 'lucide-react';

export const FinancialComparisonRentingVsOwning: React.FC = () => {
  return (
    <section className="py-16 bg-[#f8f7fd] text-[#18122b] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-wider text-[#ff5733] font-bold mb-2">
            Strategic Investment Analysis
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#18122b] font-display text-balance">
            The Financial Logic: Renting vs. Owning (5-Year Horizon)
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-700 font-medium">
            ShoSoccer was capped by operational drag. The solution was not to rent more third-party software, but to build an owned proprietary asset.
          </p>
        </div>

        {/* 2-Column Comparison Graphic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10 items-stretch">
          {/* Renting Card (Red / Burning Waste) */}
          <div className="rounded-2xl border-2 border-rose-500/40 bg-rose-950/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 p-4 opacity-15">
              <Flame className="w-24 h-24 text-rose-500" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-500/30">
                <Flame className="w-3.5 h-3.5" />
                Renting Generic Plugins
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-2">
                Renting Third-Party Software
              </h3>
              <p className="text-xs text-rose-200/80 leading-relaxed mb-6">
                Monthly SaaS subscriptions across form builders, booking plugins, calendar connectors, and fee surcharges that escalate as membership grows.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#0d091a] border border-rose-500/30">
                  <div className="text-xs text-rose-400 uppercase font-bold">Total 5-Year Spend</div>
                  <div className="text-3xl sm:text-4xl font-bold font-display text-rose-200 mt-1 tabular-nums">
                    £24,100
                  </div>
                  <div className="text-[11px] text-rose-300/70 mt-0.5">Recurring SaaS fees & transaction surcharges</div>
                </div>

                <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40">
                  <div className="text-xs text-rose-400 uppercase font-bold">Retained Asset Value</div>
                  <div className="text-3xl sm:text-4xl font-bold font-display text-rose-200 mt-1 tabular-nums">
                    £0
                  </div>
                  <div className="text-[11px] text-rose-300/80 mt-0.5">Zero equity; access terminates if payments stop</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-500/20 text-xs text-rose-300/80 font-medium">
              Vulnerability: Trapped on third-party product roadmaps with zero customisation control.
            </div>
          </div>

          {/* Owning Card (Emerald / Trophy / Owned Asset) */}
          <div className="rounded-2xl border-2 border-[#858bd1]/40 bg-gradient-to-b from-[#24174b] to-[#18122b] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_30px_rgba(133,139,209,0.15)] text-white">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Trophy className="w-24 h-24 text-[#858bd1]" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#858bd1]/20 text-[#858bd1] text-xs font-bold uppercase tracking-wider mb-4 border border-[#858bd1]/30">
                <Trophy className="w-3.5 h-3.5" />
                Owning The Custom PWA
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-2">
                Owned Infrastructure Asset
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                One-time development cost, clean cloud hosting, bespoke coaching workflows, and permanent intellectual property belonging to ShoSoccer.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#0d091a] border border-white/10">
                  <div className="text-xs text-[#858bd1] uppercase font-bold">Total 5-Year Spend</div>
                  <div className="text-3xl sm:text-4xl font-bold font-display text-white mt-1 tabular-nums">
                    £25,420
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Dev cost + hosting + maintenance retainer</div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                  <div className="text-xs text-emerald-400 uppercase font-bold">Retained Asset Value</div>
                  <div className="text-3xl sm:text-4xl font-bold font-display text-emerald-300 mt-1 tabular-nums">
                    £20,000+
                  </div>
                  <div className="text-[11px] text-emerald-400/80 mt-0.5">Proprietary business equity & standalone valuation</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#858bd1] font-medium">
              Competitive Edge: Infinitely expandable architecture built for 1,000+ members.
            </div>
          </div>
        </div>

        {/* The Bottom Line Callout Banner */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#18122b] border border-white/10 text-white text-center shadow-xl">
          <div className="text-xs uppercase tracking-wider text-[#858bd1] font-bold mb-1">
            The Bottom Line
          </div>
          <div className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
            The spend difference over 5 years is just £1,320.
          </div>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Cost is nearly identical (£24,100 vs £25,420). <strong className="text-white">Value is vastly different</strong> (£0 vs £20,000+ owned asset).
          </p>
        </div>

        {/* The Takeaway Playbook Rule */}
        <div className="mt-8 max-w-4xl mx-auto p-5 rounded-2xl border-2 border-[#ff5733] bg-[#ff5733]/15 text-center">
          <div className="text-xs font-bold text-[#ff5733] uppercase tracking-widest mb-1">
            The Takeaway Playbook Rule
          </div>
          <div className="text-lg sm:text-xl font-bold text-white font-display">
            &ldquo;You don&apos;t need more rented software. You need owned infrastructure.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
};
