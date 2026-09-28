import React from 'react';
import { Smartphone, Tablet, Monitor, CheckCircle2 } from 'lucide-react';
import adminDashboardImg from '../assets/images/admin_dashboard.png';
import parentPortalImg from '../assets/images/parent_portal.png';

export const PlatformShowcaseVisuals: React.FC = () => {
  return (
    <section className="py-12 bg-[#f8f7fd] border-b border-gray-200/80 text-[#18122b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#ff5733] font-bold block mb-1">
              Production Interface Verification
            </span>
            <h3 className="text-2xl font-bold font-display text-[#18122b]">
              Live Application Screenshots
            </h3>
          </div>
          <span className="text-xs text-gray-600 font-mono hidden sm:inline-block">
            Verified Production Platform Instances
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Card 1: Admin Dashboard Interface (Dark Block) */}
          <div className="rounded-2xl overflow-hidden border border-[#2e234c] bg-[#18122b] text-white hover:border-[#ff5733]/50 transition-all group shadow-xl">
            <div className="relative aspect-16/10 bg-[#080512] overflow-hidden">
              <img
                src={adminDashboardImg}
                alt="ShoSoccer Admin Dashboard Interface"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18122b] via-[#18122b]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="bg-[#ff5733]/20 text-[#ff5733] text-[11px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider border border-[#ff5733]/30 inline-block mb-2">
                  Admin Portal & Operations
                </span>
                <h4 className="text-xl font-bold font-display text-white">
                  Live Enterprise Admin Dashboard
                </h4>
              </div>
            </div>
            <div className="p-5 text-xs text-gray-300 leading-relaxed">
              Centralised management console providing live session rosters, multi-venue capacity tracking, member billing oversight, and direct financial export management without plugin dependencies.
            </div>
          </div>

          {/* Card 2: Parent & Player Portal Interface (Dark Block) */}
          <div className="rounded-2xl overflow-hidden border border-[#2e234c] bg-[#18122b] text-white hover:border-[#ff5733]/50 transition-all group shadow-xl">
            <div className="relative aspect-16/10 bg-[#080512] overflow-hidden">
              <img
                src={parentPortalImg}
                alt="ShoSoccer Parent & Player Portal Interface"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18122b] via-[#18122b]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="bg-[#ff5733]/20 text-[#ff5733] text-[11px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider border border-[#ff5733]/30 inline-block mb-2">
                  Player & Parent Experience
                </span>
                <h4 className="text-xl font-bold font-display text-white">
                  Parent & Player Digital Portal
                </h4>
              </div>
            </div>
            <div className="p-5 text-xs text-gray-300 leading-relaxed">
              Mobile-optimised Progressive Web App interface allowing parents to register players, manage active memberships, check training schedules, and execute 1-tap pitch attendance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
