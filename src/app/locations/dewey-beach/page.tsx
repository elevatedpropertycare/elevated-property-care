import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Luxury Home Watch & Property Management in Dewey Beach, DE',
  description: 'Premier absentee home watch, routine property review inspections, and preventative maintenance for luxury beach houses in Dewey Beach, Delaware.',
  keywords: [
    'dewey beach home watch',
    'dewey beach property management',
    'absentee home services dewey beach',
    'dewey beach house watching',
    'vacation home care dewey beach de',
    'coastal property management dewey'
  ],
};

export default function DeweyBeachPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Elevated Property Care - Dewey Beach",
    "url": "https://elevatedpropertycare.com/locations/dewey-beach",
    "telephone": "+1-302-278-0938",
    "priceRange": "41702",
    "description": "Luxury absentee home watch, storm response, and preventative maintenance serving Dewey Beach, Delaware.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dewey Beach",
      "addressRegion": "DE",
      "postalCode": "19971",
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
              Dewey Beach, Delaware Property Care
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Dewey Beach Luxury Home Watch & Property Care
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Specialized ocean-to-bay barrier strip caretaking, storm shutter deployment, salt-air corrosion defense, and bi-weekly mechanical audits for private Dewey Beach homes.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/annual-estimate" className="bg-sand-400 hover:bg-sand-300 text-coastal-950 font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-md">
                Get Dewey Beach Estimate
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
            <span className="text-xs font-semibold uppercase tracking-widest text-coastal-600">Barrier Spit Microclimate & Hazards</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Protecting Dewey Beach Properties From Severe Coastal Exposure
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-2">
              <h3 className="font-serif text-lg font-bold text-slate-900">Ocean-to-Bay Salt Spray & Wind Shear</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                As a narrow barrier strip bordered by the Atlantic Ocean and Rehoboth Bay, Dewey residences experience relentless salt fog and windblown sand that foul outdoor condenser fins, seize sliding door tracks, and rapidly oxidize exterior fasteners.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-2">
              <h3 className="font-serif text-lg font-bold text-slate-900">High Water Tables & Tidal Surges</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                King tides and nor&apos;easters often push bay waters into bayside streets and ground-level storage areas. We perform priority pre-storm securement and immediate post-storm walkthroughs to verify piling, sump pump, and bulkheading integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Tailored Oversight Protocols */}
        <section className="bg-sand-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="font-serif text-2xl font-bold text-slate-900">Tailored Oversight Protocols for Dewey Beach</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-700">
              <div className="bg-white p-5 rounded-xl border border-sand-200 space-y-2 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900">Bi-Weekly Mechanical Audits</h4>
                <p>Thorough cycling of HVAC systems, interior dehumidifiers, plumbing traps, and water shut-off valves to eliminate stagnancy.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-sand-200 space-y-2 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900">Storm Preparation & Sweeps</h4>
                <p>Securing deck furniture and loose exterior items before weather events, followed by post-storm photo inspection logs.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-sand-200 space-y-2 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900">Winter Freeze Defense</h4>
                <p>Outdoor shower blowouts, spigot draining, temperature sensor audits, and heating zone verification throughout off-season freezes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Experience Effortless Dewey Beach Home Stewardship</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Contact Elevated Property Care today to schedule an on-site property walkthrough and receive a customized, transparent care proposal.
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
