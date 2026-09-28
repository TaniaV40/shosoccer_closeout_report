import React, { useState } from 'react';
import { 
  DELIVERABLES_LIST 
} from '../data/reportData';
import { DeliverableItem } from '../types';
import { 
  CheckCircle2, 
  Search, 
  Filter, 
  AlertCircle, 
  Sparkles, 
  FileText, 
  Layers, 
  Info,
  Check
} from 'lucide-react';

export const DeliveryScopeChecklist: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<DeliverableItem | null>(null);

  const filteredItems = DELIVERABLES_LIST.filter((item) => {
    const matchesCategory =
      filterCategory === 'all'
        ? true
        : filterCategory === 'contracted'
        ? item.category !== 'beyond-scope'
        : filterCategory === 'beyond-scope'
        ? item.category === 'beyond-scope'
        : item.status.includes('Complete');

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const contractedCount = DELIVERABLES_LIST.filter((i) => i.category !== 'beyond-scope').length;
  const beyondScopeCount = DELIVERABLES_LIST.filter((i) => i.category === 'beyond-scope').length;
  const completedCount = DELIVERABLES_LIST.filter((i) => i.status.includes('Complete')).length;

  return (
    <section id="delivery-scope" className="py-16 bg-[#f8f7fd] text-[#18122b] border-b border-gray-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#ff5733] font-bold mb-1">
              Contract Verification Matrix
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#18122b] font-display">
              2. Delivery Record Against Contracted Scope
            </h2>
          </div>
          <div className="text-xs text-gray-600 font-mono">
            Verified against live Admin Portal and confirmed by Client
          </div>
        </div>

        {/* Narrative Intro Box */}
        <div className="p-5 rounded-2xl bg-[#18122b] border border-white/10 mb-8 text-sm text-gray-300 leading-relaxed">
          The following interactive ledger records delivery status for every deliverable specified in Sections 2.1 to 2.6 of the Agreement, verified against the live Admin Portal and confirmed by the Client. In addition, Section 2.8 details 8 major functional modules delivered beyond the contracted scope.
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#18122b] rounded-full border border-white/10">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-gradient-to-r from-[#ff5733] to-[#ff7b54] text-white shadow-[0_2px_10px_rgba(255,87,51,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Deliverables ({DELIVERABLES_LIST.length})
            </button>
            <button
              onClick={() => setFilterCategory('contracted')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filterCategory === 'contracted'
                  ? 'bg-gradient-to-r from-[#ff5733] to-[#ff7b54] text-white shadow-[0_2px_10px_rgba(255,87,51,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Contracted Scope ({contractedCount})
            </button>
            <button
              onClick={() => setFilterCategory('beyond-scope')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filterCategory === 'beyond-scope'
                  ? 'bg-gradient-to-r from-[#ff5733] to-[#ff7b54] text-white shadow-[0_2px_10px_rgba(255,87,51,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Beyond Scope Bonus ({beyondScopeCount})
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search deliverables, notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-[#080512] border border-white/15 focus:border-[#858bd1] focus:outline-hidden text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Deliverables Table */}
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#18122b] shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#080512] border-b border-white/10 text-[#858bd1] uppercase tracking-wider text-[11px] font-bold">
                <tr>
                  <th className="py-3.5 px-4">Section / Category</th>
                  <th className="py-3.5 px-4">Deliverable Item</th>
                  <th className="py-3.5 px-4 text-center">Status</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Technical Notes / Contract Basis</th>
                  <th className="py-3.5 px-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredItems.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="hover:bg-white/5 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4 font-bold text-[#858bd1] whitespace-nowrap text-xs">
                      {item.section}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-white">
                      <div className="flex items-center gap-2">
                        {item.category === 'beyond-scope' && (
                          <span className="text-[10px] uppercase font-bold text-[#ff5733] bg-[#ff5733]/15 border border-[#ff5733]/20 px-2 py-0.5 rounded-full">
                            Bonus
                          </span>
                        )}
                        <span>{item.name}</span>
                      </div>
                      {item.adminLocation && (
                        <div className="text-[11px] text-gray-400 font-normal mt-0.5">
                          Admin Location: {item.adminLocation}
                        </div>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {item.status === 'Complete' && (
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold text-xs bg-emerald-500/15 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                          <Check className="w-3.5 h-3.5" />
                          Complete
                        </span>
                      )}
                      {item.status === 'Complete (via GHL)' && (
                        <span className="inline-flex items-center gap-1 text-[#858bd1] font-semibold text-xs bg-[#858bd1]/15 border border-[#858bd1]/20 px-2.5 py-1 rounded-full">
                          Complete (via GHL)
                        </span>
                      )}
                      {item.status === 'Complete (declined by client)' && (
                        <span className="inline-flex items-center gap-1 text-amber-300 font-semibold text-xs bg-amber-500/15 border border-amber-500/20 px-2.5 py-1 rounded-full">
                          Complete (Declined)
                        </span>
                      )}
                      {item.status === 'Not built, deliberate omission' && (
                        <span className="inline-flex items-center gap-1 text-gray-400 font-medium text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                          Agreed Omission
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-gray-300 hidden md:table-cell max-w-md truncate">
                      {item.notes || item.contractBasis}
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedItem(item);
                        }}
                        className="text-xs font-bold text-[#858bd1] hover:text-[#ff5733] transition-colors cursor-pointer"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnotes & Scope Clarifications from Contract */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
          <div className="p-5 rounded-2xl bg-[#18122b] border border-white/10">
            <strong className="text-[#858bd1] block mb-1 font-bold">Section 2.2 Note: Admin Portal Architecture</strong>
            The Admin Portal is a distinct application from the Parent/Player and Coach-facing experience, and by the nature of its function was not built as a mobile-optimised interface. This is addressed further in Section 5.
          </div>
          <div className="p-5 rounded-2xl bg-[#18122b] border border-white/10">
            <strong className="text-[#858bd1] block mb-1 font-bold">Section 2.3 Note: Waitlist Automation</strong>
            Waitlist automation was built into the contracted scope and made available on the platform. The Client subsequently confirmed this feature was not required for launch. Recorded as delivered and declined, not as an outstanding item.
          </div>
          <div className="p-5 rounded-2xl bg-[#18122b] border border-white/10">
            <strong className="text-[#858bd1] block mb-1 font-bold">Section 2.6 Note: Quick Start Guide Omission</strong>
            A standalone Quick Start Guide was omitted by mutual agreement. Admin users require comprehensive working knowledge of the portal; a separate quick-start would duplicate delivered operational guides.
          </div>
        </div>

        {/* Section 2.8 Highlights: Functions Delivered Beyond Contracted Scope */}
        <div className="mt-10 p-6 rounded-2xl bg-[#18122b] border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#ff5733]" />
              <h3 className="text-lg font-bold text-white font-display">
                2.8 Functions Delivered Beyond Contracted Scope
              </h3>
            </div>
            <span className="bg-[#ff5733]/15 text-[#ff5733] text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-[#ff5733]/20">
              8 Enterprise Modules Included at £0 Extra Charge
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
            The live Admin Portal contains a number of modules and functions with no corresponding line in Section 2 of the Agreement. These were built as part of the working platform and are already live and available for use:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-[#0d091a] rounded-xl border border-white/10">
              <span className="font-bold text-white block">1. Venue Management</span>
              <span className="text-[11px] text-gray-400">Admin Location: Dashboard</span>
            </div>
            <div className="p-3 bg-[#0d091a] rounded-xl border border-white/10">
              <span className="font-bold text-white block">2. Admin User Accounts</span>
              <span className="text-[11px] text-gray-400">Admin Location: Dashboard</span>
            </div>
            <div className="p-3 bg-[#0d091a] rounded-xl border border-white/10">
              <span className="font-bold text-white block">3. People & Role Management</span>
              <span className="text-[11px] text-gray-400">Admin Location: People</span>
            </div>
            <div className="p-3 bg-[#0d091a] rounded-xl border border-white/10">
              <span className="font-bold text-white block">4. Full Merchandise Shop</span>
              <span className="text-[11px] text-gray-400">Catalog, Orders, Shipping</span>
            </div>
            <div className="p-3 bg-[#0d091a] rounded-xl border border-white/10">
              <span className="font-bold text-white block">5. Coupons & Discounts Engine</span>
              <span className="text-[11px] text-gray-400">Admin Location: Finance</span>
            </div>
            <div className="p-3 bg-[#0d091a] rounded-xl border border-white/10">
              <span className="font-bold text-white block">6. Invoices & Routing Console</span>
              <span className="text-[11px] text-gray-400">Admin Location: Finance</span>
            </div>
            <div className="p-3 bg-[#0d091a] rounded-xl border border-white/10">
              <span className="font-bold text-white block">7. Broadcast Messaging & Templates</span>
              <span className="text-[11px] text-gray-400">Admin Location: Communication</span>
            </div>
            <div className="p-3 bg-[#0d091a] rounded-xl border border-white/10">
              <span className="font-bold text-white block">8. Settings & Scheduled Jobs</span>
              <span className="text-[11px] text-gray-400">Admin Location: Settings</span>
            </div>
          </div>

          <p className="mt-4 text-xs italic text-gray-400">
            *These functions do not affect the Section 6.1 upgrade allowance and are not billed separately; they are part of the delivered platform as it stands today.
          </p>
        </div>

        {/* Detail Modal for Selected Deliverable */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-[#18122b] rounded-2xl max-w-lg w-full p-6 border border-white/10 shadow-2xl relative text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#858bd1] font-bold">
                    {selectedItem.section}
                  </span>
                  <h4 className="text-lg font-bold text-white font-display">
                    {selectedItem.name}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-white text-lg font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                <div>
                  <strong className="text-white block mb-1 font-bold">Delivery Status:</strong>
                  <span className="inline-block px-3 py-1 rounded-full font-bold text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                    {selectedItem.status}
                  </span>
                </div>

                {selectedItem.adminLocation && (
                  <div>
                    <strong className="text-white block mb-1 font-bold">Live Admin Location:</strong>
                    <span>{selectedItem.adminLocation}</span>
                  </div>
                )}

                {selectedItem.contractBasis && (
                  <div>
                    <strong className="text-white block mb-1 font-bold">Contractual Basis:</strong>
                    <span className="italic text-gray-300">{selectedItem.contractBasis}</span>
                  </div>
                )}

                <div>
                  <strong className="text-white block mb-1 font-bold">Verification Records & Notes:</strong>
                  <p className="p-3 bg-[#0d091a] rounded-xl border border-white/10 leading-relaxed text-gray-300">
                    {selectedItem.notes || 'Verified live against production database and confirmed in platform testing.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Sign-Off Status: Complete</span>
                  <span className="font-mono text-[#858bd1]">Date Verified: {selectedItem.verifiedDate || '25 September 2026'}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 text-xs font-bold rounded-full text-white bg-gradient-to-r from-[#ff5733] to-[#ff7b54] shadow-[0_4px_15px_rgba(255,87,51,0.4)] cursor-pointer"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
