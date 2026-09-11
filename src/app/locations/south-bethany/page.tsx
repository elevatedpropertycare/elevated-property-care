import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Luxury Home Watch & Property Management in South Bethany, DE',
  description: 'Premier absentee home watch, canal-front property inspections, and freeze defense for luxury residences in South Bethany, Delaware.',
  keywords: [
    'south bethany home watch',
    'south bethany property management',
    'absentee home services south bethany',
    'canal home maintenance south bethany de',
    'south bethany house watching',
    'vacation home inspection south bethany'
  ],
};

export default function SouthBethanyPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Elevated Property Care - South Bethany",
    "url": "https://elevatedpropertycare.com/locations/south-bethany",
    "telephone": "+1-302-278-0938",
    "priceRange": "41702",
    "description": "Luxury absentee home watch, canal bulkhead auditing, and winter freeze protection serving South Bethany, Delaware.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "South Bethany",
      "addressRegion": "DE",
      "postalCode": "19930",
      "addressCountry": "US"
    }
  };

  return (
    <>
      <SchemaMarkup data={localSchema} />
      <div className="w-full pb-20 overflow-hidden space-y-16">
        {/* Hero Section */}
        <section className="relative bg-coastal-950 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="inline-block bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded">
              South Bethany, Delaware Property Care
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              South Bethany Canal & Beach Home Stewardship
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Tailored absentee home watch, bulkhead and dock visual checks, piling freeze protection, and routine mechanical audits across "The Best Little Beach in Delaware."
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/annual-estimate" className="bg-sand-400 hover:bg-sand-300 text-coastal-950 font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-md">
                Get South Bethany Estimate
              </Link>
              <a href="tel:3022780938" className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition">
                Call (302) 278-0938
              </a>
            </div>
          </div>
        </section>

        {/* Environmental Vulnerabilities */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-coastal-600">Canal & Oceanfront Environmental Stressors</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Protecting South Bethany Homes from Coastal Waterway Hazards
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-2">
              <h3 className="font-serif text-lg font-bold text-slate-900">Canal Bulkheads & Dock Integrity</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                South Bethany&apos;s extensive canal network subjects bulkheads and private dock pilings to constant tidal fluctuations and brackish water wear. We conduct visual shoreline audits to catch shifting soil, tieback stress, and hardware oxidation early.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-2">
              <h3 className="font-serif text-lg font-bold text-slate-900">Elevated Piling Plumbing & Winter Freezes</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Most South Bethany homes are built on elevated timber or concrete pilings with exposed undercarriage plumbing and ground-level outdoor showers. Sustained sub-freezing coastal winds can quickly rupture uninsulated supply lines if not rigorously winterized.
              </p>
            </div>
          </div>
        </section>

        {/* Tailored Oversight Protocols */}
        <section className="bg-sand-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="font-serif text-2xl font-bold text-slate-900">Tailored Oversight Protocols for South Bethany</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-700">
              <div className="bg-white p-5 rounded-xl border border-sand-200 space-y-2 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900">Dock & Bulkhead Inspections</h4>
                <p>Visual surveys of canal bulkheads, boat lifts, dock decking, and mooring cleats following extreme high tides.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-sand-200 space-y-2 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900">Undercarriage Freeze Defense</h4>
                <p>Comprehensive winterization of all exposed piling water pipes, spigots, outdoor shower supply lines, and ground fixtures.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-sand-200 space-y-2 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900">Off-Season Mechanical Audits</h4>
                <p>Bi-weekly testing of heat zones, dehumidification drainage, water heaters, and electrical breaker panels.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Dedicated Stewardship for Your South Bethany Haven</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Enjoy total confidence that your South Bethany canal or oceanfront property is watched over by licensed local professionals.
          </p>
          <div className="pt-2">
            <Link href="/annual-estimate#walkthrough-form" className="inline-block bg-coastal-900 hover:bg-coastal-950 text-white font-semibold px-8 py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-md">
              Schedule Your Complimentary Walkthrough
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
