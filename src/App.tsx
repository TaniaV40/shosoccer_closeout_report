/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExecutiveSummarySection } from './components/ExecutiveSummarySection';
import { PlatformShowcaseVisuals } from './components/PlatformShowcaseVisuals';
import { TacticalPitchBoard } from './components/TacticalPitchBoard';
import { DeliveryScopeChecklist } from './components/DeliveryScopeChecklist';
import { CommercialPerformanceSection } from './components/CommercialPerformanceSection';
import { FinancialComparisonRentingVsOwning } from './components/FinancialComparisonRentingVsOwning';
import { ContractualAndCommercialSection } from './components/ContractualAndCommercialSection';
import { SignOffSection } from './components/SignOffSection';
import { Footer } from './components/Footer';
import { CONTRACT_METADATA } from './data/reportData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('top');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'executive-summary',
        'tactical-pitch',
        'delivery-scope',
        'commercial-growth',
        'contract-terms',
        'sign-off',
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f7fd] text-[#18122b] selection:bg-[#ff5733]/20 selection:text-[#ff5733]">
      <div id="top" />

      {/* Top Bar Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Closeout Body */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToSection={handleNavigate}
        />

        {/* Section 1: Executive Summary */}
        <ExecutiveSummarySection />

        {/* Tactical Image & Device Parity Showcase */}
        <PlatformShowcaseVisuals />

        {/* Interactive Tactical Football Pitch */}
        <TacticalPitchBoard />

        {/* Section 2: Delivery Record Against Contracted Scope */}
        <DeliveryScopeChecklist />

        {/* Section 3: Commercial Performance and Growth Analysis */}
        <CommercialPerformanceSection />

        {/* Financial Logic: Renting vs Owning (5-Year Horizon) */}
        <FinancialComparisonRentingVsOwning />

        {/* Sections 4 to 9: Milestone Payments, Scope Governance, Warranty SLA, Hosting, Retainer, Handover */}
        <ContractualAndCommercialSection />

        {/* Section 10: Sign-Off & Verification */}
        <SignOffSection />
      </main>

      {/* Quiet Footer */}
      <Footer
        onNavigate={handleNavigate}
      />
    </div>
  );
}

