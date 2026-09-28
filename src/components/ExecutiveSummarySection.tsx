import React from 'react';
import { CheckCircle2, ShieldCheck, FileCheck, Layers, Clock, TrendingUp } from 'lucide-react';
import { CONTRACT_METADATA } from '../data/reportData';

export const ExecutiveSummarySection: React.FC = () => {
  return (
    <section id="executive-summary" className="py-16 bg-[#f8f7fd] text-[#18122b] border-b border-gray-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#ff5733] font-bold mb-1">
              Contract Closeout Documentation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#18122b] font-display">
              1. Executive Summary
            </h2>
          </div>
          <div className="text-xs text-gray-600 font-mono">
            Agreement Date: 20 Feb 2026 · Closeout: 25 Sep 2026
          </div>
        </div>

        {/* Narrative & Verification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5 text-gray-800 leading-relaxed text-base">
            <p className="text-lg font-semibold text-[#18122b]">
              This report confirms delivery of the Progressive Web App (PWA) built for ShoSoccer Football Coaching Limited under the Progressive Web App Development Agreement dated 20 February 2026.
            </p>
            <p>
              All contracted deliverables across the Core Platform, Parent/Player Portal, Coach Portal, Admin Portal, platform features, integrations, and training and documentation have been completed and verified against the live environment.
            </p>
            <p>
              All milestone payments under Section 3.1 of the Agreement have been received in full, including the Final Payment due on completion. In accordance with Section 3.3 and Section 6.1 of the Agreement, delivery of source code, repository access, documentation, and the Client&apos;s licence to use its customised platform instance is therefore due and fulfilled.
            </p>
            <p>
              The 90-day bug-fix warranty under Section 5.1 is active and runs to 30 September 2026. No outstanding defects are recorded against the platform at the time of this report. The remaining obligation under the Agreement is warranty monitoring through to the warranty end date.
            </p>
            <p className="border-l-3 border-[#ff5733] pl-4 text-sm italic text-gray-700 bg-white p-3.5 rounded-r-xl border border-gray-200 shadow-xs">
              Section 3 of this report presents verified commercial performance data covering session volume, customer growth, transaction volume, and return on investment, drawn from platform reporting and transaction exports.
            </p>
          </div>

          {/* Executive Verification Summary Card (Dark Block) */}
          <div className="lg:col-span-5 bg-[#18122b] rounded-2xl p-6 border border-[#2e234c] text-white shadow-xl">
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-4 font-display">
              <ShieldCheck className="w-5 h-5 text-[#ff5733]" />
              <span>Executive Verification Checklist</span>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3 bg-[#080512] rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">All Core Modules Deployed</div>
                  <div className="text-xs text-gray-400">PWA, Parent Portal, Coach Mobile Register, Admin Portal</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#080512] rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Milestone Payments 100% Cleared</div>
                  <div className="text-xs text-gray-400">£4,000 received in full across Weeks 1, 3, and 6</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#080512] rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">90-Day Bug-Fix Warranty Active</div>
                  <div className="text-xs text-gray-400">Runs through 30 September 2026; zero open tickets</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#080512] rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Handover Rights Unlocked</div>
                  <div className="text-xs text-gray-400">Client instance licence, Git repository, and system documentation</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#080512] rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Commercial Velocity Proven</div>
                  <div className="text-xs text-gray-400">11 to 117 sessions (+963.6%); £17,228.98 handled post-launch</div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>Status: Ready for Final Sign-Off</span>
              <span className="font-mono text-[#ff5733] font-bold">Section 1 Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
