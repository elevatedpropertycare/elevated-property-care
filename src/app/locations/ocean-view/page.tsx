import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Luxury Home Watch & Property Management in Ocean View, DE',
  description: 'Premier absentee home watch, routine property inspections, and preventative maintenance for residences in Ocean View and Bear Trap Dunes, Delaware.',
  keywords: [
    'ocean view de home watch',
    'ocean view delaware property management',
    'absentee home services ocean view',
    'bear trap dunes home watch',
    'bethany bay home maintenance',
    'vacation home inspection ocean view de'
  ],
};

export default function OceanViewPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Elevated Property Care - Ocean View",
    "url": "https://elevatedpropertycare.com/locations/ocean-view",
    "telephone": "+1-302-278-0938",
    "priceRange": "41702",
    "description": "Premier absentee home watch, crawlspace humidity monitoring, and preventative maintenance serving Ocean View, Delaware.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ocean View",
      "addressRegion": "DE",
      "postalCode": "19970",
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
              Ocean View, Delaware Property Care
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Ocean View Home Watch & Absentee Care
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Dedicated property stewardship, crawlspace dehumidification auditing, irrigation winterization, and scheduled inspections for homes in Bear Trap Dunes, Bethany Bay, and Ocean View.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/annual-estimate" className="bg-sand-400 hover:bg-sand-300 text-coastal-950 font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-md">
                Get Ocean View Estimate
              </Link>
              <a href="tel:3022780938" className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition">
                Call (302) 278-0938
              </a>
            </div>
          </div>
        </section>

        {/* Environmental Vulnerabilities & Communities */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-coastal-600">Inland Coastal Vulnerabilities</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Preventative Protection for Ocean View Neighborhoods
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-2">
              <h3 className="font-serif text-lg font-bold text-slate-900">Crawlspace Moisture & Humidity Spikes</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Ocean View homes frequently feature encapsulated crawlspaces with dedicated commercial dehumidifiers. A single tripped GFCI breaker or drain blockage in mid-summer can lead to mold proliferation within 72 hours. We test and log crawlspace conditions during every review.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-2">
              <h3 className="font-serif text-lg font-bold text-slate-900">Master-Planned & Golf Communities</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Specialized oversight across Bear Trap Dunes, Bethany Bay, Country Club at Bear Trap, Silver Woods, and surrounding Sussex Route 26 corridors, ensuring full HOA landscape compliance and off-season security.
              </p>
            </div>
          </div>
        </section>

        {/* Tailored Oversight Protocols */}
        <section className="bg-sand-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="font-serif text-2xl font-bold text-slate-900">Tailored Oversight Protocols for Ocean View</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-700">
              <div className="bg-white p-5 rounded-xl border border-sand-200 space-y-2 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900">Crawlspace Dehumidifier Checks</h4>
                <p>Digital hygrometer auditing, condensate line clear-outs, filter checks, and foundation vent inspections.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-sand-200 space-y-2 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900">Dual-Fuel HVAC Run Tests</h4>
                <p>Verifying smooth cycling between electric heat pump and propane auxiliary backup during severe winter cold snaps.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-sand-200 space-y-2 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900">Irrigation & Turf Monitoring</h4>
                <p>Auditing sprinkler zones for head leaks, coordinating fall line compressed-air blowouts, and spring backflow testing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Protect Your Ocean View Investment With Elevated Property Care</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Get complete peace of mind while away from your Delaware getaway. Reach out today for a complimentary on-site walkthrough.
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
