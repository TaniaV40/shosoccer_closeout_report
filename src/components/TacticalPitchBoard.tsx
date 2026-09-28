import React, { useState } from 'react';
import { 
  DEFENSIVE_FAILURES, 
  STARTING_XI_MODULES, 
  TIME_THIEVES 
} from '../data/reportData';
import { DefensiveFailurePoint, StartingXIPlayer } from '../types';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Layers, 
  Network, 
  Users, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

export const TacticalPitchBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'starting-xi' | 'defensive-failures' | 'total-football' | 'time-thieves'>('starting-xi');
  const [selectedPlayer, setSelectedPlayer] = useState<StartingXIPlayer>(STARTING_XI_MODULES[0]);
  const [selectedDefensivePoint, setSelectedDefensivePoint] = useState<DefensiveFailurePoint>(DEFENSIVE_FAILURES[0]);

  return (
    <section id="tactical-pitch" className="py-16 bg-[#f8f7fd] text-[#18122b] border-b border-gray-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#ff5733] font-bold mb-1">
              Interactive Tactical Board
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#18122b] font-display">
              Tactical Architecture & Pitch Strategy
            </h2>
          </div>
          <div className="text-xs text-gray-600 font-mono">
            Interactive visual playbook inspired by operational transformation slides
          </div>
        </div>

        {/* Tab Controls (Segmented clean control) */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#18122b] rounded-full border border-white/10 mb-8 w-fit">
          <button
            onClick={() => setActiveTab('starting-xi')}
            className={`px-5 py-2 text-xs md:text-sm font-bold rounded-full transition-all cursor-pointer ${
              activeTab === 'starting-xi'
                ? 'bg-gradient-to-r from-[#ff5733] to-[#ff7b54] text-white shadow-[0_4px_15px_rgba(255,87,51,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            The Starting XI (Platform Core)
          </button>
          <button
            onClick={() => setActiveTab('defensive-failures')}
            className={`px-5 py-2 text-xs md:text-sm font-bold rounded-full transition-all cursor-pointer ${
              activeTab === 'defensive-failures'
                ? 'bg-gradient-to-r from-[#ff5733] to-[#ff7b54] text-white shadow-[0_4px_15px_rgba(255,87,51,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            7 Points of Defensive Failure
          </button>
          <button
            onClick={() => setActiveTab('total-football')}
            className={`px-5 py-2 text-xs md:text-sm font-bold rounded-full transition-all cursor-pointer ${
              activeTab === 'total-football'
                ? 'bg-gradient-to-r from-[#ff5733] to-[#ff7b54] text-white shadow-[0_4px_15px_rgba(255,87,51,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            &ldquo;Total Football&rdquo; Ecosystem
          </button>
          <button
            onClick={() => setActiveTab('time-thieves')}
            className={`px-5 py-2 text-xs md:text-sm font-bold rounded-full transition-all cursor-pointer ${
              activeTab === 'time-thieves'
                ? 'bg-gradient-to-r from-[#ff5733] to-[#ff7b54] text-white shadow-[0_4px_15px_rgba(255,87,51,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            600-Hour Admin Ceiling
          </button>
        </div>

        {/* TAB 1: THE STARTING XI (SQUAD FORMATION ON PITCH) */}
        {activeTab === 'starting-xi' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* The Football Pitch */}
            <div className="lg:col-span-7 bg-[#080512] rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl relative overflow-hidden select-none min-h-[540px] flex flex-col justify-between">
              {/* Pitch Visual Markings */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                {/* Touchline border */}
                <div className="absolute inset-3 border-2 border-[#858bd1]/50 rounded-sm" />
                {/* Halfway line */}
                <div className="absolute top-1/2 left-3 right-3 h-0.5 bg-[#858bd1]/50 -translate-y-1/2" />
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 w-28 h-28 border-2 border-[#858bd1]/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#858bd1] rounded-full -translate-x-1/2 -translate-y-1/2" />
                {/* Top Penalty Area */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-48 h-20 border-2 border-t-0 border-[#858bd1]/50" />
                {/* Bottom Penalty Area */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-48 h-20 border-2 border-b-0 border-[#858bd1]/50" />
              </div>

              {/* Pitch Header Overlay */}
              <div className="relative z-10 flex items-center justify-between text-xs text-[#858bd1] mb-2 font-mono">
                <span className="font-bold tracking-wider uppercase">Formation: 4-3-3 (Enterprise Architecture)</span>
                <span className="text-gray-400">Click any position pin to inspect</span>
              </div>

              {/* Pitch Player Pins */}
              <div className="relative z-10 flex-1 w-full min-h-[440px]">
                {STARTING_XI_MODULES.map((player) => {
                  const isSelected = selectedPlayer.id === player.id;
                  return (
                    <button
                      key={player.id}
                      onClick={() => setSelectedPlayer(player)}
                      style={{ top: player.pitchCoords.top, left: player.pitchCoords.left }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-hidden transition-transform duration-200 ${
                        isSelected ? 'scale-115 z-30' : 'hover:scale-110 z-20'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold font-display shadow-lg transition-all ${
                          isSelected
                            ? 'bg-[#ff5733] text-white ring-4 ring-[#ff7b54]/60 shadow-[0_0_20px_rgba(255,87,51,0.6)]'
                            : 'bg-[#18122b] text-[#858bd1] hover:bg-[#858bd1]/20 ring-2 ring-white/10'
                        }`}
                      >
                        {player.position}
                      </div>
                      <div
                        className={`mt-1 text-[10px] sm:text-[11px] font-semibold whitespace-nowrap px-2 py-0.5 rounded-full shadow-xs text-center transition-colors ${
                          isSelected
                            ? 'bg-[#ff5733] text-white font-bold'
                            : 'bg-[#0d091a]/90 text-gray-300 group-hover:bg-[#18122b] border border-white/10'
                        }`}
                      >
                        {player.title.split(' ')[0]}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Pitch Footer Note */}
              <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                <span>Opposing Half: Automated Stripe & GHL Pipelining</span>
                <span>Defence: Unified Database & Safeguarding</span>
              </div>
            </div>

            {/* Selected Module Detail Panel */}
            <div className="lg:col-span-5 bg-[#18122b] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xs flex flex-col justify-between min-h-[540px]">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff5733] to-[#ff7b54] text-white font-display font-bold text-sm flex items-center justify-center shadow-[0_2px_10px_rgba(255,87,51,0.4)]">
                      {selectedPlayer.position}
                    </span>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-[#858bd1] font-bold">
                        {selectedPlayer.category}
                      </div>
                      <h3 className="text-xl font-bold text-white font-display">
                        {selectedPlayer.title}
                      </h3>
                    </div>
                  </div>
                  <span className="bg-[#858bd1]/15 text-[#858bd1] text-[11px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider border border-[#858bd1]/20">
                    Delivered
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {selectedPlayer.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                    Technical Specifications Implemented:
                  </div>
                  {selectedPlayer.specDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-200 bg-[#0d091a] p-3 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0d091a] border border-white/10 text-xs text-gray-400">
                <div className="font-bold text-[#858bd1] mb-1 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#858bd1]" />
                  Starting XI Rationale
                </div>
                Every position in the Starting XI represents a verified module delivered inside the bespoke PWA. This eliminates third-party plugin drag and secures an owned digital asset valued at £20,000+.
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 7 POINTS OF DEFENSIVE FAILURE */}
        {activeTab === 'defensive-failures' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Pitch with Red Defensive Failures */}
            <div className="lg:col-span-7 bg-[#080512] rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl relative overflow-hidden min-h-[520px] flex flex-col justify-between">
              {/* Pitch Visual Markings */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute inset-3 border-2 border-white/30 rounded-sm" />
                <div className="absolute top-1/2 left-3 right-3 h-0.5 bg-white/30 -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-28 h-28 border-2 border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-48 h-20 border-2 border-t-0 border-white/30" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-48 h-20 border-2 border-b-0 border-white/30" />
              </div>

              <div className="relative z-10 flex items-center justify-between text-xs text-[#ff5733] mb-2 font-mono">
                <span className="font-bold tracking-wider uppercase">Pre-Launch Defensive Vulnerabilities</span>
                <span className="text-gray-400">Click marker to inspect resolution</span>
              </div>

              {/* Red Failure Point Markers */}
              <div className="relative z-10 flex-1 w-full min-h-[420px]">
                {DEFENSIVE_FAILURES.map((point) => {
                  const isSelected = selectedDefensivePoint.id === point.id;
                  return (
                    <button
                      key={point.id}
                      onClick={() => setSelectedDefensivePoint(point)}
                      style={{ top: `${point.pitchPosition.y}%`, left: `${point.pitchPosition.x}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-hidden transition-all duration-200 ${
                        isSelected ? 'scale-115 z-30' : 'hover:scale-110 z-20'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-all ${
                          isSelected
                            ? 'bg-[#ff5733] text-white ring-4 ring-white shadow-[0_0_20px_rgba(255,87,51,0.6)]'
                            : 'bg-[#ff5733]/80 text-white ring-2 ring-[#ff5733]/40 hover:bg-[#ff5733]'
                        }`}
                      >
                        ✕
                      </div>
                      <div
                        className={`mt-1 text-[10px] font-bold whitespace-nowrap px-2 py-0.5 rounded-full shadow text-center transition-colors ${
                          isSelected
                            ? 'bg-[#ff5733] text-white font-bold'
                            : 'bg-[#0d091a]/90 text-gray-300 group-hover:bg-[#18122b] border border-white/10'
                        }`}
                      >
                        {point.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="relative z-10 pt-2 border-t border-white/10 text-[11px] text-gray-400 font-mono">
                Defensive Audit: 7 distinct operational failure zones identified and resolved via custom architecture.
              </div>
            </div>

            {/* Detail Diagnosis & Resolution Card */}
            <div className="lg:col-span-5 bg-[#18122b] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xs flex flex-col justify-between min-h-[520px]">
              <div>
                <div className="flex items-center gap-2 text-[#ff5733] text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  Point of Defensive Failure
                </div>
                <h3 className="text-2xl font-bold text-white font-display mb-1">
                  {selectedDefensivePoint.title}
                </h3>
                <div className="text-xs text-[#ff5733] font-bold mb-6 font-mono">
                  Vulnerability Metric: {selectedDefensivePoint.stat}
                </div>

                {/* Threat Box */}
                <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 mb-5">
                  <div className="text-xs font-bold text-rose-300 uppercase tracking-wide mb-1">
                    The Threat (Pre-Launch Baseline)
                  </div>
                  <p className="text-xs sm:text-sm text-rose-200 leading-relaxed">
                    {selectedDefensivePoint.problem}
                  </p>
                </div>

                {/* Resolution Box */}
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 mb-6">
                  <div className="text-xs font-bold text-emerald-300 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    The Implemented Resolution
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                    {selectedDefensivePoint.resolution}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#0d091a] rounded-xl border border-white/10 text-xs text-gray-400">
                Core Result: Operational drag removed. The platform handles 1,000+ members without adding administrative headcount.
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: "TOTAL FOOTBALL" ECOSYSTEM */}
        {activeTab === 'total-football' && (
          <div className="bg-[#18122b] rounded-2xl p-6 sm:p-10 border border-white/10 shadow-xs">
            <div className="max-w-3xl mb-8">
              <div className="text-xs uppercase tracking-wider text-[#858bd1] font-bold mb-1">
                Architectural Blueprint
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Ecosystem Architecture: The &ldquo;Total Football&rdquo; System
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Just as total football demands fluid coordination across all pitch zones, the custom PWA connects payments, CRM automation, and live reporting through uninterrupted two-way data syncs.
              </p>
            </div>

            {/* Architecture Node Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Stripe Connect Card */}
              <div className="p-6 rounded-2xl bg-[#0d091a] border border-white/10 hover:border-[#858bd1]/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-[#858bd1] uppercase tracking-wider">Financial Engine</div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">2-Way Sync</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-display">Stripe Connect</h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  Handles PCI compliance, automated customer portal, and instant refunds.
                </p>
                <div className="p-3 bg-[#18122b] rounded-xl border border-white/10 text-xs text-gray-300">
                  <strong className="text-white block mb-1">3-Way Split Routing:</strong>
                  Routes memberships, sessions, and shop merchandise into designated accounts automatically.
                </div>
              </div>

              {/* Center Playmaker (Custom PWA Core) */}
              <div className="p-8 rounded-2xl bg-gradient-to-b from-[#24174b] to-[#18122b] text-white shadow-xl relative border-2 border-[#858bd1]/40 text-center">
                <div className="inline-block px-3 py-1 rounded-full bg-[#858bd1]/20 text-[#858bd1] text-xs font-bold uppercase tracking-wider mb-3 border border-[#858bd1]/30">
                  Center Playmaker
                </div>
                <h4 className="text-2xl font-bold font-display text-white mb-2">
                  Custom PWA Core
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Houses bespoke booking logic, family records, multi-venue calendars, and real-time capacity management.
                </p>
                <div className="text-[11px] text-[#858bd1] font-mono py-1.5 px-3 bg-[#0d091a] rounded-full inline-block border border-white/10">
                  Proprietary Owned Asset · Zero Plugin Drag
                </div>
              </div>

              {/* GoHighLevel CRM Card */}
              <div className="p-6 rounded-2xl bg-[#0d091a] border border-white/10 hover:border-[#858bd1]/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-[#858bd1] uppercase tracking-wider">CRM & Messaging</div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">2-Way Sync</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-display">GoHighLevel CRM</h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  Powers the unified database, marketing automation, consent storage, and automated dunning SMS/emails.
                </p>
                <div className="p-3 bg-[#18122b] rounded-xl border border-white/10 text-xs text-gray-300">
                  <strong className="text-white block mb-1">Safeguarding Hub:</strong>
                  Player medical disclosures and emergency consents stored directly on member profiles.
                </div>
              </div>
            </div>

            {/* Bottom BI Anchor Card */}
            <div className="mt-6 p-5 rounded-2xl bg-[#0d091a] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#858bd1]">
                  Intelligence Subsystem
                </div>
                <div className="text-base font-bold text-white font-display">
                  Business Intelligence & Live Reporting
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  Delivers real-time views of Revenue, Churn, Attendance, and Session fill rates.
                </div>
              </div>
              <div className="text-xs text-emerald-400 bg-emerald-500/15 px-3 py-1.5 rounded-full border border-emerald-500/20 font-bold shrink-0">
                15-Minute Sync Intervals Active
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 600-HOUR ADMINISTRATIVE CEILING */}
        {activeTab === 'time-thieves' && (
          <div className="bg-[#18122b] rounded-2xl p-6 sm:p-10 border border-white/10 shadow-xs">
            <div className="max-w-3xl mb-8">
              <div className="text-xs uppercase tracking-wider text-[#ff5733] font-bold mb-1">
                The Industry Baseline
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Opposing the 600-Hour Administrative Ceiling
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                UK coaches lose 12+ hours every week to manual administration—equal to 78 working days stolen annually, capping revenue potential by £37,440. Below is how the ShoSoccer custom platform removed each thief.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TIME_THIEVES.map((thief) => (
                <div
                  key={thief.id}
                  className="p-6 rounded-2xl bg-[#0d091a] border border-white/10 hover:border-[#858bd1]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold font-mono text-[#858bd1]">
                        Time Thief #{thief.number}
                      </span>
                      <span className="text-xs font-bold text-[#ff5733] bg-[#ff5733]/15 px-2.5 py-0.5 rounded-full border border-[#ff5733]/20">
                        {thief.hours}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-3 font-display">
                      {thief.title}
                    </h4>

                    <div className="mb-4">
                      <div className="text-[11px] font-bold text-[#ff5733] uppercase tracking-wide mb-1">
                        Operational Drag:
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {thief.threat}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 bg-[#18122b] p-3 rounded-xl">
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Platform Resolution:
                    </div>
                    <p className="text-xs text-gray-200 font-medium leading-relaxed">
                      {thief.resolution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Total Reclaimed Callout */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#ff5733] to-[#ff7b54] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_4px_25px_rgba(255,87,51,0.3)]">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/80 font-bold">
                  Cumulative Operational Impact
                </div>
                <div className="text-xl font-bold font-display text-white mt-0.5">
                  26–38 Hours Reclaimed Weekly Across the Organisation
                </div>
                <div className="text-xs text-white/90">
                  Equivalent to £33,800–£49,400 in manual labour cost removed every year.
                </div>
              </div>
              <div className="text-2xl font-bold font-display text-white tabular-nums shrink-0 bg-white/20 px-4 py-2 rounded-xl backdrop-blur-xs">
                100% Automated
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
