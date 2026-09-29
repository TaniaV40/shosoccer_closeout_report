import React from 'react';
import { Printer, Mail, Phone } from 'lucide-react';
import seriesMediaCube from '../assets/images/series_media_cube.png';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0d091a]/95 backdrop-blur-md border-b border-white/10 shadow-2xl transition-all">
      {/* Row 1: Brand Logo Block, Report Heading, Contact Details & Orange Print Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Prominent Series Media Logo & Closeout Report Heading */}
        <div className="flex items-center gap-4">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('top');
            }}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            {/* Logo Block with Series Media in White */}
            <div className="flex items-center gap-2.5 bg-[#18122b] px-3.5 py-2 rounded-xl border border-white/15 group-hover:border-[#a5b4fc]/50 transition-all shadow-md">
              <img 
                src={seriesMediaCube} 
                alt="Series Media Logo" 
                className="h-8 sm:h-9 w-auto object-contain" 
              />
              <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-white">
                SERIES<span className="text-white">MEDIA</span>
              </span>
            </div>
            
            <div className="h-9 w-px bg-white/15 hidden sm:block" />
            
            {/* Heading: ShoSoccer Closeout Report */}
            <div>
              <h1 className="font-display font-bold text-lg sm:text-2xl text-white group-hover:text-[#a5b4fc] transition-colors leading-tight">
                ShoSoccer Closeout Report
              </h1>
              <div className="text-[11px] text-[#a5b4fc] font-medium tracking-wide hidden sm:block">
                Progressive Web App Development Closeout
              </div>
            </div>
          </a>
        </div>

        {/* Right: Contact Details & Orange Print Button */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {/* Email & Phone Contact Info */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-300 font-medium bg-[#18122b] px-3.5 py-2 rounded-xl border border-white/10">
            <a
              href="mailto:tania@seriesmedia.net"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#ff5733]" />
              <span>tania@seriesmedia.net</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="tel:+447727413035"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5733]" />
              <span>+44 7727 413035</span>
            </a>
          </div>

          {/* Orange Print Button */}
          <button
            onClick={handlePrint}
            title="Print or Save formal closeout report as PDF"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-full text-white bg-gradient-to-r from-[#ff5733] to-[#ff7b54] shadow-[0_4px_15px_rgba(255,87,51,0.4)] hover:shadow-[0_6px_25px_rgba(255,87,51,0.6)] hover:scale-[1.02] transition-all whitespace-nowrap cursor-pointer"
          >
            <Printer className="w-4 h-4 text-white" />
            Print Report
          </button>
        </div>
      </div>

      {/* Row 2 (New Line): Navigation Headings Bar */}
      <div className="bg-[#18122b] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-start sm:justify-between overflow-x-auto py-2.5 gap-6 text-xs sm:text-sm font-semibold text-gray-300 scrollbar-none">
            <button
              onClick={() => onNavigate('executive-summary')}
              className={`whitespace-nowrap transition-colors hover:text-[#a5b4fc] cursor-pointer py-1 ${
                activeSection === 'executive-summary' ? 'text-[#a5b4fc] font-bold border-b-2 border-[#a5b4fc]' : ''
              }`}
            >
              Executive Summary
            </button>
            <button
              onClick={() => onNavigate('tactical-pitch')}
              className={`whitespace-nowrap transition-colors hover:text-[#a5b4fc] cursor-pointer py-1 ${
                activeSection === 'tactical-pitch' ? 'text-[#a5b4fc] font-bold border-b-2 border-[#a5b4fc]' : ''
              }`}
            >
              Tactical Architecture
            </button>
            <button
              onClick={() => onNavigate('delivery-scope')}
              className={`whitespace-nowrap transition-colors hover:text-[#a5b4fc] cursor-pointer py-1 ${
                activeSection === 'delivery-scope' ? 'text-[#a5b4fc] font-bold border-b-2 border-[#a5b4fc]' : ''
              }`}
            >
              Scope Delivery Checklist
            </button>
            <button
              onClick={() => onNavigate('commercial-growth')}
              className={`whitespace-nowrap transition-colors hover:text-[#a5b4fc] cursor-pointer py-1 ${
                activeSection === 'commercial-growth' ? 'text-[#a5b4fc] font-bold border-b-2 border-[#a5b4fc]' : ''
              }`}
            >
              Commercial ROI
            </button>
            <button
              onClick={() => onNavigate('contract-terms')}
              className={`whitespace-nowrap transition-colors hover:text-[#a5b4fc] cursor-pointer py-1 ${
                activeSection === 'contract-terms' ? 'text-[#a5b4fc] font-bold border-b-2 border-[#a5b4fc]' : ''
              }`}
            >
              Warranty & Retainer
            </button>
            <button
              onClick={() => onNavigate('sign-off')}
              className={`whitespace-nowrap transition-colors hover:text-[#a5b4fc] cursor-pointer py-1 ${
                activeSection === 'sign-off' ? 'text-[#a5b4fc] font-bold border-b-2 border-[#a5b4fc]' : ''
              }`}
            >
              Legal Sign-Off
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
