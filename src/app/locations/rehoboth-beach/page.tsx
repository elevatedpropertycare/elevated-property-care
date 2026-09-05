import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Luxury Home Watch & Property Management in Rehoboth Beach, DE',
  description: 'Premier absentee home care, routine property review inspections, and preventative maintenance for luxury beach houses in Rehoboth Beach, Delaware.',
  keywords: ['home watch rehoboth beach de', 'property management rehoboth beach', 'beach house maintenance rehoboth beach', 'vacation home inspection rehoboth beach'],
};

export default function RehobothBeachPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Elevated Property Care - Rehoboth Beach",
    "url": "https://elevatedpropertycare.com/locations/rehoboth-beach",
    "telephone": "+1-302-278-0938",
    "priceRange": "$$",
    "description": "Luxury absentee home watch and preventative maintenance serving Rehoboth Beach, Delaware.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rehoboth Beach",
      "addressRegion": "DE",
      "postalCode": "19971",
      "addressCountry": "US"
    }
  };

  return (
    <div className="space-y-16 pb-20">
      <SchemaMarkup data={localSchema} />
      
      <section className="relative bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="inline-block bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded">
            Rehoboth Beach, Delaware Property Care
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            Rehoboth Beach Luxury Home Watch & Estate Management
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Providing dedicated absentee caretaking, weekly property inspections, and comprehensive vendor oversight for non-rental luxury homes across Rehoboth Beach.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/annual-estimate" className="bg-sand-400 hover:bg-sand-300 text-coastal-950 font-semibold px-6 py-3 rounded text-xs uppercase tracking-wider transition">
              Get Rehoboth Beach Estimate
            </Link>
            <a href="tel:3022780938" className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded text-xs uppercase tracking-wider font-semibold transition">
              Call (302) 278-0938
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-coastal-600">Local Environmental Vulnerabilities</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Protecting Rehoboth Beach Real Estate from Coastal Hazards
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-2">
            <h3 className="font-serif text-lg font-bold text-slate-900">Microclimate & Coastal Stressors</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Homes in Rehoboth Beach encounter intense salt fog and seasonal temperature volatility. Properties beneath dense pine canopies face roof drainage clogging and moss damage, while oceanfront dwellings experience extreme wind-driven salt corrosion on HVAC condenser coils.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-2">
            <h3 className="font-serif text-lg font-bold text-slate-900">Communities & Neighborhoods Served</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Serving premier enclaves including Henlopen Acres, The Pines, Country Club Estates, North Shores, Silver Lake waterfronts, and coastal communities along Route 1.</p>
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="font-serif text-2xl font-bold text-slate-900">Tailored Oversight Protocols for Rehoboth Beach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="bg-white p-5 rounded-lg border border-sand-200 space-y-2">
              <h4 className="font-bold text-sm text-slate-900">Weekly Property Reviews</h4>
              <p>50-point checklist covering moisture detection, crawlspace checks, and mechanical run tests.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-sand-200 space-y-2">
              <h4 className="font-bold text-sm text-slate-900">HVAC & Humidity Cycling</h4>
              <p>Ensuring dual refrigeration and dehumidification systems prevent mold during muggy summer spells.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-sand-200 space-y-2">
              <h4 className="font-bold text-sm text-slate-900">Storm & Freeze Response</h4>
              <p>Pre-storm securing and priority rapid-response walk-throughs following nor'easters and severe tides.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Experience Effortless Rehoboth Beach Beach Home Ownership</h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          Contact our dedicated team today to discuss your property specifications and receive a transparent, itemized annual proposal.
        </p>
        <div className="pt-2">
          <Link href="/contact" className="inline-block bg-coastal-800 hover:bg-coastal-900 text-white font-semibold px-8 py-3 rounded text-xs uppercase tracking-wider transition">
            Schedule a Private Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
