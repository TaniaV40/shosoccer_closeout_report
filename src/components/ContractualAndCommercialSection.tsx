import React, { useState } from 'react';
import { 
  MILESTONE_PAYMENTS, 
  OUTSIDE_SCOPE_ITEMS, 
  WARRANTY_SLAS, 
  CONTRACT_METADATA 
} from '../data/reportData';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Server, 
  Database, 
  Key, 
  GitBranch, 
  FileCode, 
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const ContractualAndCommercialSection: React.FC = () => {
  const [showAllOutsideScope, setShowAllOutsideScope] = useState(false);

  return (
    <div id="contract-terms" className="py-16 bg-[#f8f7fd] text-[#18122b] space-y-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION 4: MILESTONE PAYMENTS */}
        <section className="bg-[#18122b] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4 mb-6 gap-2">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#858bd1] font-bold mb-1">
                Contractual Consideration
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                4. Milestone Payments
              </h3>
            </div>
            <div className="text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              100% Cleared (£4,000 Received in Full)
            </div>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#080512] mb-6">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-[#0d091a] text-[#858bd1] uppercase text-[11px] font-bold border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Milestone</th>
                  <th className="py-3 px-4 text-right">Amount</th>
                  <th className="py-3 px-4">Timing (per Agreement)</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 font-mono text-xs text-gray-300">
                {MILESTONE_PAYMENTS.map((m) => (
                  <tr key={m.milestone} className="hover:bg-white/5">
                    <td className="py-3.5 px-4 font-sans font-semibold text-white">
                      {m.milestone}
                    </td>
                    <td className="py-3.5 px-4 text-right tabular-nums font-bold text-[#ff5733]">
                      {m.amount}
                    </td>
                    <td className="py-3.5 px-4 font-sans text-gray-400">
                      {m.timing}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 font-sans text-emerald-400 bg-emerald-500/15 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {m.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-[#0d091a] border border-white/10 text-xs sm:text-sm text-gray-300 leading-relaxed">
            All milestone payments totalling £4,000 have been received and cleared. Per Section 3.3 of the Agreement, this satisfies the payment condition for delivery of source code, repository access, documentation, and licensing rights.
          </div>
        </section>

        {/* SECTION 5: ITEMS OUTSIDE CONTRACTED SCOPE */}
        <section className="bg-[#18122b] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4 mb-6 gap-2">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#858bd1] font-bold mb-1">
                Scope Governance
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                5. Items Outside Contracted Scope
              </h3>
            </div>
            <span className="text-xs text-amber-300 bg-amber-500/15 border border-amber-500/20 px-3 py-1.5 rounded-full w-fit font-bold">
              Future Scope Register
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
            The following items have been raised by the Client and Developer following the delivery confirmed in Section 2. None of these appear in the original Agreement (Sections 2.1 to 2.6) and none are currently built. They are recorded here as future scope, not as outstanding obligations under the Agreement:
          </p>

          <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#080512] mb-6">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-[#0d091a] text-[#858bd1] uppercase text-[11px] font-bold border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Requested Item</th>
                  <th className="py-3 px-4">Contract Basis & Technical Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-gray-300">
                {(showAllOutsideScope ? OUTSIDE_SCOPE_ITEMS : OUTSIDE_SCOPE_ITEMS.slice(0, 5)).map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5">
                    <td className="py-3.5 px-4 font-semibold text-white">
                      {item.item}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-gray-400">
                      {item.basis}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {OUTSIDE_SCOPE_ITEMS.length > 5 && (
            <div className="text-center mb-6">
              <button
                onClick={() => setShowAllOutsideScope(!showAllOutsideScope)}
                className="text-xs font-bold text-[#858bd1] hover:text-[#ff5733] transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                {showAllOutsideScope ? (
                  <>Show Fewer Items <ChevronUp className="w-3.5 h-3.5" /></>
                ) : (
                  <>Show All {OUTSIDE_SCOPE_ITEMS.length} Future Items <ChevronDown className="w-3.5 h-3.5" /></>
                )}
              </button>
            </div>
          )}

          <div className="p-4 rounded-xl bg-[#0d091a] border border-amber-500/30 text-xs sm:text-sm text-amber-200 leading-relaxed">
            <strong className="block mb-1 text-amber-400 font-bold">Section 2.4 Upgrade Allowance Notice:</strong>
            Section 2.4 of the Agreement permits up to two platform upgrades within six months of launch, each capped at eight development hours and billed separately at the agreed hourly rate. The Agreement expressly excludes new features, functional expansions, or integrations not set out in the Agreement from this upgrade allowance. As the items above constitute new features rather than enhancements to existing contracted functionality, they fall outside the Section 2.4 upgrade allowance and would need to be scoped and quoted as new work, should the Client wish to proceed.
          </div>
        </section>

        {/* SECTION 6: WARRANTY & SLA TABLE */}
        <section className="bg-[#18122b] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4 mb-6 gap-2">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#858bd1] font-bold mb-1">
                Post-Launch Protection
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                6. Warranty
              </h3>
            </div>
            <div className="text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              90-Day Bug-Fix Window Active to 30 September 2026
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
            A 90-day bug-fix warranty applies under Section 5.1 of the Agreement, commencing at launch and running to <strong className="text-white">30 September 2026</strong>. No defects are currently recorded against the platform. Response and resolution times are structured as follows:
          </p>

          <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#080512] mb-6">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-[#0d091a] text-[#858bd1] uppercase text-[11px] font-bold border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Priority Level</th>
                  <th className="py-3 px-4">Response Time</th>
                  <th className="py-3 px-4">Resolution Time</th>
                  <th className="py-3 px-4 hidden sm:table-cell">Operational Definition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 font-mono text-xs text-gray-300">
                {WARRANTY_SLAS.map((sla) => (
                  <tr key={sla.priority} className="hover:bg-white/5">
                    <td className="py-3.5 px-4 font-sans font-bold text-[#ff5733]">
                      {sla.priority}
                    </td>
                    <td className="py-3.5 px-4 text-white font-bold">
                      {sla.responseTime}
                    </td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold">
                      {sla.resolutionTime}
                    </td>
                    <td className="py-3.5 px-4 font-sans text-xs text-gray-400 hidden sm:table-cell">
                      {sla.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-[#0d091a] border border-white/10 text-xs text-gray-400 leading-relaxed">
            Warranty coverage excludes Client modifications, third-party service issues (Stripe, GoHighLevel, hosting, or messaging providers), and feature requests beyond agreed scope, per Section 5.3. Series Media Limited monitors warranty activity through to the 30 September 2026 conclusion date.
          </div>
        </section>

        {/* SECTION 7: ONGOING HOSTING COSTS */}
        <section className="bg-[#18122b] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4 mb-6 gap-2">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#858bd1] font-bold mb-1">
                Infrastructure Architecture
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                7. Ongoing Hosting Costs (Post-Warranty)
              </h3>
            </div>
            <div className="text-xs font-bold text-[#858bd1] bg-[#858bd1]/15 border border-[#858bd1]/20 px-3 py-1.5 rounded-full w-fit">
              Direct Billing Transition
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
            The PWA runs on two third-party infrastructure services: <strong className="text-white">Vercel</strong>, which hosts the application itself, and <strong className="text-white">Supabase</strong>, which provides the underlying database, procured through the Vercel Marketplace. These are not optional add-ons; the platform cannot run without them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-2xl bg-[#0d091a] border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-[#858bd1]">
                <Server className="w-5 h-5 text-[#858bd1]" />
                <h4 className="text-base font-bold font-display text-white">Vercel (Application Hosting)</h4>
              </div>
              <div className="text-2xl font-bold font-display text-[#ff5733] tabular-nums mt-1">
                $24.40 / mo
              </div>
              <div className="text-xs text-gray-400 mt-0.5 font-mono">Approx. £18 at time of charge</div>
              <p className="mt-3 text-xs text-gray-300 leading-relaxed">
                Powers edge CDN distribution, SSL certificates, instant web app delivery, and continuous deployment pipelines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d091a] border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-[#858bd1]">
                <Database className="w-5 h-5 text-[#858bd1]" />
                <h4 className="text-base font-bold font-display text-white">Supabase (Relational Database)</h4>
              </div>
              <div className="text-2xl font-bold font-display text-[#ff5733] tabular-nums mt-1">
                $30.50 / mo
              </div>
              <div className="text-xs text-gray-400 mt-0.5 font-mono">Approx. £23 at time of charge</div>
              <p className="mt-3 text-xs text-gray-300 leading-relaxed">
                Procured via Vercel Marketplace. Stores booking tables, player rosters, authentication keys, and capacity tables.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0d091a] border border-white/10 text-xs sm:text-sm text-gray-300 leading-relaxed">
            Both services are currently being paid for directly by Series Media Limited to avoid any interruption to the build, and are entirely separate from the <strong className="text-white">£300 per month Platform Management & Operations Retainer</strong>, which covers technical maintenance, CRM workflow management, and reporting. Responsibility for the Vercel and Supabase charges transfers to ShoSoccer Football Coaching Limited from 30 September 2026. Account access will be handed over to ensure an uninterrupted billing transfer.
          </div>
        </section>

        {/* SECTION 8 & 9: DEVELOPER RETAINER & HANDOVER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SECTION 8: PROPOSED DEVELOPER RETAINER */}
          <section className="lg:col-span-6 bg-[#18122b] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xs flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#858bd1] font-bold mb-1">
                Technical Continuity
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-4">
                8. Proposed Developer Retainer (Post-Warranty)
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Once the 90-day warranty ends on 30 September 2026, Peter Phelan / Thirdwave Software will no longer be obligated to respond to defects under the warranty SLA matrix.
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Series Media Limited recommends putting a modest monthly retainer in place with the developer, rather than moving to a per-incident or per-project quote basis. A standing retainer maintains developer engagement, secures priority response, avoids onboarding delays with an unfamiliar engineer, and guarantees continuity with the architect who constructed the codebase.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0d091a] border border-white/10 text-xs text-gray-400">
              <strong className="text-white block mb-1 font-bold">Status:</strong>
              Rate requested from Peter Phelan; specific terms (monthly hours allowance and guaranteed response window) will be forwarded to ShoSoccer once confirmed.
            </div>
          </section>

          {/* SECTION 9: HANDOVER & IP RIGHTS */}
          <section className="lg:col-span-6 bg-[#18122b] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#858bd1] font-bold mb-1">
                Intellectual Property & Licensing
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-4">
                9. Handover
              </h3>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4">
                Final payment has been received and cleared. In accordance with Section 3.3 and Section 6.1 of the Agreement, the Client holds a perpetual, non-exclusive, irrevocable licence to use its customised platform instance for internal business purposes.
              </p>

              <div className="p-4 rounded-xl bg-[#0d091a] border border-white/10 text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                <strong className="text-white block mb-1 font-bold font-sans">Source Code & Infrastructure Transfer:</strong>
                The source code for the Client-specific instance is held on Vercel and Supabase. When responsibility for these accounts transfers to ShoSoccer Football Coaching Limited at the end of the warranty period (Section 7), the source code becomes directly accessible to the Client on those platforms as part of that transfer.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0d091a] border border-white/10 text-xs text-gray-400 leading-relaxed">
              Per Section 6.2 of the Agreement, the underlying Base Platform architecture and reusable components remain the property of Series Media Limited and its development partners; no ownership of the Base Platform transfers to the Client.
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};
