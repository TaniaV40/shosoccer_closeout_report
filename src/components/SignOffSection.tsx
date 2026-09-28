import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck, PenTool, Check, Download, Printer } from 'lucide-react';
import { CONTRACT_METADATA } from '../data/reportData';

export const SignOffSection: React.FC = () => {
  const [isClientSigned, setIsClientSigned] = useState(false);
  const [clientSignDate, setClientSignDate] = useState<string>('');

  const handleClientSign = () => {
    setIsClientSigned(true);
    setClientSignDate(new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="sign-off" className="py-16 bg-[#f8f7fd] text-[#18122b] border-b border-gray-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#ff5733] font-bold mb-1">
              Final Legal Ratification
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#18122b] font-display">
              10. Sign-Off & Verification
            </h2>
          </div>
          <div className="text-xs text-gray-600 font-mono">
            Agreement Milestone Cleared · Section 10 Execution
          </div>
        </div>

        {/* Legal Sign-Off Confirmation Text */}
        <div className="max-w-4xl mx-auto mb-10 p-6 rounded-2xl bg-[#18122b] border border-white/10 text-center shadow-xl">
          <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
            &ldquo;This report confirms that the Progressive Web App has been delivered in accordance with the Progressive Web App Development Agreement dated 20 February 2026, that all milestone payments have been received, and that the platform is in working condition with no outstanding defects at the time of this report.&rdquo;
          </p>
        </div>

        {/* Two Signature Cards: Series Media Limited & ShoSoccer Football Coaching Limited */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {/* Series Media Limited (Tania Vorster) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#18122b] border-2 border-[#858bd1]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#858bd1] uppercase tracking-wider">
                  Service Provider
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Executed
                </span>
              </div>

              <div className="text-xs text-gray-400">Organisation:</div>
              <div className="text-lg font-bold text-white font-display mb-4">
                Series Media Limited
              </div>

              <div className="p-4 rounded-xl bg-[#0d091a] border border-white/10 mb-4">
                <div className="font-serif italic text-2xl text-[#858bd1] tracking-wide mb-1">
                  Tania Vorster
                </div>
                <div className="text-xs text-white font-bold">Tania Vorster</div>
                <div className="text-[11px] text-gray-400">Founder and Director</div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>Date:</span>
              <span className="font-mono font-bold text-[#858bd1]">25 September 2026</span>
            </div>
          </div>

          {/* ShoSoccer Football Coaching Limited (Harry Childs) */}
          <div className={`p-6 sm:p-7 rounded-2xl bg-[#18122b] border-2 transition-all shadow-xl flex flex-col justify-between ${
            isClientSigned ? 'border-emerald-500/60 bg-emerald-950/20' : 'border-white/10'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#858bd1] uppercase tracking-wider">
                  Client Ratification
                </span>
                {isClientSigned ? (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Confirmed & Signed
                  </span>
                ) : (
                  <span className="text-xs font-bold text-amber-300 bg-amber-500/15 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                    Pending Digital Verification
                  </span>
                )}
              </div>

              <div className="text-xs text-gray-400">Organisation:</div>
              <div className="text-lg font-bold text-white font-display mb-4">
                ShoSoccer Football Coaching Limited
              </div>

              <div className="p-4 rounded-xl bg-[#0d091a] border border-white/10 mb-4 min-h-[92px] flex flex-col justify-center">
                {isClientSigned ? (
                  <>
                    <div className="font-serif italic text-2xl text-emerald-400 tracking-wide mb-1">
                      Harry Childs
                    </div>
                    <div className="text-xs text-white font-bold">Harry Childs</div>
                    <div className="text-[11px] text-gray-400">Founder and Director</div>
                  </>
                ) : (
                  <div className="text-center py-2">
                    <button
                      onClick={handleClientSign}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#ff5733] to-[#ff7b54] shadow-[0_4px_15px_rgba(255,87,51,0.4)] hover:shadow-[0_6px_25px_rgba(255,87,51,0.6)] hover:scale-[1.02] rounded-full transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      <PenTool className="w-3.5 h-3.5" />
                      Sign Off Platform Delivery
                    </button>
                    <div className="text-[10px] text-gray-400 mt-2">
                      Click to record Harry Childs digital sign-off
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>Date:</span>
              <span className="font-mono font-bold text-[#858bd1]">
                {isClientSigned ? clientSignDate : '[Awaiting Signature]'}
              </span>
            </div>
          </div>
        </div>

        {/* Closeout Document Actions */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#18122b] border border-white/10">
          <div className="text-xs text-gray-300">
            <strong className="text-white block text-sm mb-0.5 font-bold">Formal Documentation Record:</strong>
            Progressive Web App Development Agreement completed in full. Retain this verified digital closeout record for company archives.
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 text-xs font-semibold rounded-full text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#858bd1]" />
              Print / Save PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
