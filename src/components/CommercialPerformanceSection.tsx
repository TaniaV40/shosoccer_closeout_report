import React, { useState } from 'react';
import { 
  HISTORICAL_TRANSACTIONS, 
  POST_LAUNCH_MONTHS, 
  PAYBACK_SCENARIOS 
} from '../data/reportData';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  CreditCard, 
  Calculator, 
  ArrowUpRight, 
  ShieldCheck,
  CheckCircle2,
  PieChart,
  BarChart2
} from 'lucide-react';

interface BarChartGraphicProps {
  sectionId: string;
  title: string;
  badge: string;
  baselineValue: string;
  baselineLabel: string;
  baselineHeightPercent: number;
  currentValue: string;
  currentLabel: string;
  currentHeightPercent: number;
  subtext: string;
}

const BarChartGraphic: React.FC<BarChartGraphicProps> = ({
  sectionId,
  title,
  badge,
  baselineValue,
  baselineLabel,
  baselineHeightPercent,
  currentValue,
  currentLabel,
  currentHeightPercent,
  subtext,
}) => (
  <div className="bg-[#18122b] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between mb-8">
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-bold text-[#858bd1] uppercase tracking-wider block mb-1">
            {sectionId}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            {title}
          </h3>
        </div>
        <div className="text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1.5 rounded-full w-fit font-mono">
          {badge}
        </div>
      </div>

      {/* Visual Bar Chart Graphic (Matching PDF Visuals) */}
      <div className="bg-[#080512] rounded-2xl p-6 sm:p-8 border border-white/10 mb-5 relative">
        <div className="flex items-end justify-center gap-12 sm:gap-20 h-52 pb-4 border-b border-white/15">
          {/* Baseline Bar (Grey) */}
          <div className="flex flex-col items-center gap-2 group w-28 sm:w-36">
            <span className="text-xs sm:text-sm font-bold text-gray-200 font-mono tabular-nums bg-[#18122b] px-3 py-1 rounded-lg border border-white/15 shadow-xs">
              {baselineValue}
            </span>
            <div 
              style={{ height: `${baselineHeightPercent}%` }} 
              className="w-full bg-slate-500/80 rounded-t-xl transition-all group-hover:bg-slate-400 min-h-[24px]"
            />
          </div>

          {/* Current Bar (Vibrant Green) */}
          <div className="flex flex-col items-center gap-2 group w-28 sm:w-36">
            <span className="text-xs sm:text-sm font-bold text-emerald-300 font-mono tabular-nums bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-500/40 shadow-md">
              {currentValue}
            </span>
            <div 
              style={{ height: `${currentHeightPercent}%` }} 
              className="w-full bg-gradient-to-t from-emerald-700 via-emerald-600 to-emerald-400 rounded-t-xl transition-all group-hover:from-emerald-600 group-hover:to-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.35)] min-h-[48px]"
            />
          </div>
        </div>

        {/* X-Axis Category Labels */}
        <div className="flex justify-center gap-12 sm:gap-20 pt-4 text-xs sm:text-sm font-semibold text-gray-300 font-mono text-center">
          <div className="w-28 sm:w-36">{baselineLabel}</div>
          <div className="w-28 sm:w-36 text-emerald-400 font-bold">{currentLabel}</div>
        </div>
      </div>
    </div>

    <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed bg-[#0d091a] p-4 rounded-xl border border-white/10">
      {subtext}
    </p>
  </div>
);

export const CommercialPerformanceSection: React.FC = () => {
  const [selectedMargin, setSelectedMargin] = useState<number>(15.0);

  // Calculate dynamic payback based on user slider
  const monthlyRevenue = 5743; // average post-launch monthly volume
  const dynamicMonthlyBenefit = Math.round((monthlyRevenue * selectedMargin) / 100);
  const dynamicPaybackMonths = (4000 / dynamicMonthlyBenefit).toFixed(1);

  return (
    <section id="commercial-growth" className="py-16 bg-[#f8f7fd] text-[#18122b] border-b border-gray-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#ff5733] font-bold mb-1">
              Verified Platform Metrics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#18122b] font-display">
              3. Commercial Performance and Growth Analysis
            </h2>
          </div>
          <div className="text-xs text-gray-600 font-mono">
            Source: Live Admin Portal & Exported Stripe Records
          </div>
        </div>

        {/* Narrative Context */}
        <div className="p-5 rounded-2xl bg-[#18122b] border border-white/10 mb-8 text-sm text-gray-300 leading-relaxed shadow-lg">
          This section presents verified before-and-after performance across the metrics that matter most to the business. Figures are drawn from platform reporting, transaction exports, and business records.
        </div>

        {/* 3.1 & 3.2 Dual Metrics Comparison Grid with Visual Bar Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* 3.1 Session Volume Bar Chart */}
          <BarChartGraphic
            sectionId="3.1 Session Volume"
            title="Session Volume"
            badge="+963.6% (10.6x)"
            baselineValue="11"
            baselineLabel="2023"
            baselineHeightPercent={18}
            currentValue="117"
            currentLabel="Current"
            currentHeightPercent={100}
            subtext="Session volume has grown from 11 session types offered at founding to 117 session instances currently running, following the platform's post-launch stabilisation period."
          />

          {/* 3.2 Customer Growth Bar Chart */}
          <BarChartGraphic
            sectionId="3.2 Customer Growth"
            title="Customer Growth"
            badge="+39.3%"
            baselineValue="560"
            baselineLabel="Pre-PWA (560)"
            baselineHeightPercent={68}
            currentValue="780"
            currentLabel="Current (780)"
            currentHeightPercent={100}
            subtext="Customer count has grown from 560 (the base migrated at launch) to 780 today, the growth attributable to the period the PWA has been in use."
          />
        </div>

        {/* 3.3 & 3.4 Dual Metrics Comparison Grid with Visual Bar Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* 3.3 Revenue Growth Bar Chart */}
          <BarChartGraphic
            sectionId="3.3 Revenue Growth"
            title="Revenue Growth (Gross Volume)"
            badge="+152.4%"
            baselineValue="£21,618"
            baselineLabel="2023 (full year)"
            baselineHeightPercent={42}
            currentValue="£54,554"
            currentLabel="2026 (YTD)"
            currentHeightPercent={100}
            subtext="Gross transaction volume has grown from £21,618.50 in 2023 to £54,554.41 year-to-date in 2026. The 2026 figure is a year-to-date total, not a full year, so it will continue to grow before the year closes."
          />

          {/* 3.4 Order Volume Bar Chart */}
          <BarChartGraphic
            sectionId="3.4 Order Volume"
            title="Order Volume (Monthly Rate)"
            badge="+110.6%"
            baselineValue="140.8/mo"
            baselineLabel="Pre-launch"
            baselineHeightPercent={48}
            currentValue="296.6/mo"
            currentLabel="Post-launch"
            currentHeightPercent={100}
            subtext="Transaction frequency has more than doubled since launch, normalised to a monthly rate to account for the shorter post-launch period."
          />
        </div>

        {/* 3.5 Return on Investment and Asset Value */}
        <div className="bg-[#18122b] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-[#858bd1] uppercase tracking-wider block mb-1">
                3.5 Financial Return & IP Valuation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                3.5 Return on Investment and Asset Value
              </h3>
            </div>
            <div className="text-xs font-bold text-[#ff5733] bg-[#ff5733]/15 border border-[#ff5733]/20 px-3 py-1.5 rounded-full w-fit">
              4.31x Volume-to-Cost Multiple
            </div>
          </div>

          {/* Table 1: Volume vs Cost */}
          <div className="mb-6">
            <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#080512]">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-[#0d091a] text-[#858bd1] font-bold uppercase text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Measure</th>
                    <th className="py-3 px-4 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 font-mono text-xs sm:text-sm">
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-sans font-semibold text-white">Development cost</td>
                    <td className="py-3 px-4 text-right font-bold text-white tabular-nums">£4,000</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-sans font-semibold text-white">Gross volume handled since launch</td>
                    <td className="py-3 px-4 text-right font-bold text-[#ff5733] tabular-nums">£17,228.98</td>
                  </tr>
                  <tr className="bg-[#24174b]/50 hover:bg-[#24174b]">
                    <td className="py-3 px-4 font-sans font-bold text-emerald-400">Volume-to-cost multiple</td>
                    <td className="py-3 px-4 text-right font-bold text-emerald-400 tabular-nums">4.31x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 p-4 rounded-xl bg-[#0d091a] border border-white/10">
            A custom-built platform of this scope, comprising a multi-portal booking and membership system, integrated payment routing, and CRM automation, typically falls in the range of £15,000 to £40,000 or more when commissioned through a UK web development agency at standard market rates, before ongoing support and hosting are added. At £4,000, the ShoSoccer PWA was delivered at a fraction of that typical agency cost, reflecting Series Media&apos;s direct working relationship with the platform&apos;s original architect rather than a full agency build from a blank specification. This figure is an industry estimate for comparable scope, not a specific competing quote.
          </p>

          {/* Table 2: Asset Value ROI */}
          <div className="mb-6">
            <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#080512]">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-[#0d091a] text-[#858bd1] font-bold uppercase text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Measure</th>
                    <th className="py-3 px-4 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 font-mono text-xs sm:text-sm">
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-sans font-semibold text-white">Development cost</td>
                    <td className="py-3 px-4 text-right font-bold text-white tabular-nums">£4,000</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-sans font-semibold text-white">Estimated asset value</td>
                    <td className="py-3 px-4 text-right font-bold text-[#858bd1] tabular-nums">£20,000</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-sans font-semibold text-white">Estimated value created</td>
                    <td className="py-3 px-4 text-right font-bold text-emerald-400 tabular-nums">£16,000</td>
                  </tr>
                  <tr className="bg-[#24174b]/50 hover:bg-[#24174b]">
                    <td className="py-3 px-4 font-sans font-bold text-[#ff5733]">Asset-value ROI</td>
                    <td className="py-3 px-4 text-right font-bold text-[#ff5733] tabular-nums">400%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed p-4 rounded-xl bg-[#0d091a] border border-white/10 mb-8">
            *The £20,000 asset value is an estimate of the platform&apos;s value as a proprietary, owned asset, and is unrealised, not realised cash. It is reported separately from the development-cost comparison above to avoid double-counting the same underlying value under two different measures.
          </p>

          {/* Interactive Payback Sensitivity Calculator */}
          <div className="bg-[#0d091a] p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#858bd1] mb-4">
              <Calculator className="w-4 h-4 text-[#ff5733]" />
              <span>Interactive Payback Sensitivity Modeller</span>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-300 mb-2">
                <span>Attributable Contribution Margin:</span>
                <span className="text-base font-bold text-[#ff5733] font-mono tabular-nums">
                  {selectedMargin.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="35"
                step="0.5"
                value={selectedMargin}
                onChange={(e) => setSelectedMargin(parseFloat(e.target.value))}
                className="w-full h-2 bg-[#18122b] rounded-lg appearance-none cursor-pointer accent-[#ff5733]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1 font-mono">
                <span>5.8% (Contract Minimum)</span>
                <span>15.0% (Base Target)</span>
                <span>30.0% (High Margin)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 bg-[#18122b] rounded-xl border border-white/10 text-center">
              <div>
                <div className="text-[11px] text-gray-400 uppercase font-bold">
                  Monthly Operating Benefit
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-white mt-1 tabular-nums">
                  £{dynamicMonthlyBenefit}
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">Applied to £5,743 monthly volume</div>
              </div>
              <div className="border-l border-white/10 pl-4">
                <div className="text-[11px] text-[#ff5733] uppercase font-bold">
                  Estimated Time to Full Payback
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-emerald-400 mt-1 tabular-nums">
                  {dynamicPaybackMonths} Mos
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">To recover £4,000 dev cost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
