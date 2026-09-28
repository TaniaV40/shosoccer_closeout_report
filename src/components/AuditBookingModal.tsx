import React from 'react';
import { X, Calendar, Clock, Compass, ShieldCheck } from 'lucide-react';
import { CONTRACT_METADATA } from '../data/reportData';

interface AuditBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditBookingModal: React.FC<AuditBookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#18122b] rounded-2xl max-w-2xl w-full border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#24174b] to-[#18122b] text-white p-6 relative border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white text-xl font-bold cursor-pointer p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs uppercase tracking-wider text-[#858bd1] font-bold mb-1">
            Series Media Consultation
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Book Your Free 30-Minute Time Recovery Audit
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-300">
            Map your custom digital transformation and remove operational drag permanently.
          </p>
        </div>

        {/* Audit Details Banner */}
        <div className="bg-[#0d091a] p-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-300 font-mono">
          <div className="flex items-center gap-1.5 font-semibold">
            <Clock className="w-3.5 h-3.5 text-[#ff5733]" />
            <span>Duration: 30 Minutes</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold">
            <Compass className="w-3.5 h-3.5 text-[#858bd1]" />
            <span>Led by: Tania Vorster</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-[#858bd1]">
            <span>Mantra: &ldquo;{CONTRACT_METADATA.mantra}&rdquo;</span>
          </div>
        </div>

        {/* GoHighLevel (GHL) Iframe Embed Container */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#18122b]">
          <div className="text-xs text-gray-400 mb-3 text-center font-mono">
            Select a convenient time slot below using our secure GoHighLevel scheduling calendar:
          </div>

          <div className="w-full min-h-[420px] rounded-2xl border border-white/10 overflow-hidden bg-[#0d091a] flex flex-col items-center justify-center p-2 relative">
            {/* Real GHL Booking Calendar Iframe */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/Dk3lT7vC19zR5s"
              title="Schedule Your 30-Minute Time Recovery Audit"
              style={{ width: '100%', border: 'none', minHeight: '440px' }}
              scrolling="no"
              id="ghl-booking-iframe"
            />
          </div>

          <div className="mt-4 p-3 rounded-xl bg-[#0d091a] border border-white/10 text-[11px] text-gray-400 text-center">
            Zero commitment required. We analyse your administrative bottlenecks and map an owned infrastructure roadmap.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#080512] border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-full text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
