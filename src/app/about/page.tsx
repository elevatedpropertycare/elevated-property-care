import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us & Hamptons-Standard Estate Care | Elevated Property Care',
  description: 'Learn about Elevated Property Care: Delaware licensed contractor, seasoned Hamptons estate caretaking background, and dedicated Sussex County home watch.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
            Our Foundation & Standards
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            About Elevated Property Care
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Founded on the belief that luxury coastal homeownership should be defined by effortless enjoyment, transparent pricing, and proactive asset protection.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <span className="text-xs font-semibold uppercase tracking-widest text-coastal-600">Hamptons Precision, Delaware Roots</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              A Higher Benchmark in Coastal Property Oversight
            </h2>
            <p>
              Elevated Property Care was established by drawing directly on extensive experience caring for high-profile private homes, luxury beach houses, and complex coastal residences in the Hamptons. In premier resort markets, second-home owners understand that simple drive-bys or occasional contractor visits are insufficient to defend against coastal degradation and weather events.
            </p>
            <p>
              As a licensed General Services and Resident Contractor in Delaware, Elevated Property Care operates exclusively across Coastal Sussex County—including Lewes, Rehoboth Beach, Bethany Beach, and Fenwick Island. We do not manage short-term tenant rentals or vacation booking turnovers; our sole loyalty is to the homeowner and the enduring physical health of their private property.
            </p>
          </div>
          <div className="bg-sand-100 p-8 rounded-2xl border border-sand-300 space-y-4 text-xs text-slate-700">
            <h3 className="font-serif text-lg font-bold text-slate-900">Corporate Credentials & Integrity</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">✓</span> Delaware Licensed General Services & Resident Contractor</li>
              <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">✓</span> Fully Insured & Bonded with Comprehensive Liability Coverage</li>
              <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">✓</span> 100% In-House Property Managers (No Outsourced Contractors)</li>
              <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">✓</span> Published, Predictable Labor Rates ($50/hr Flat Rate)</li>
              <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">✓</span> 365 Days a Year Rapid Emergency Response</li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="border-t border-sand-200 pt-12">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h3 className="font-serif text-2xl font-bold text-slate-900">Our Core Operating Commitments</h3>
            <p className="text-slate-600 text-xs sm:text-sm">The principles guiding every client relationship across coastal Delaware.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2 shadow-sm">
              <h4 className="font-bold text-sm text-slate-900">Absolute Transparency</h4>
              <p>Every service and vendor cost is itemized. Zero hidden fees, zero markups on routine contracts, and transparent billing in arrears.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2 shadow-sm">
              <h4 className="font-bold text-sm text-slate-900">Proactive Prevention</h4>
              <p>We believe small, early interventions prevent catastrophic structural and mechanical failures. We run systems before they seize.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2 shadow-sm">
              <h4 className="font-bold text-sm text-slate-900">Single-Source Accountability</h4>
              <p>You have one dedicated Property Manager who represents your interests, audits every sub-trade, and guarantees service satisfaction.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-coastal-900 text-white p-8 rounded-2xl text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold">Ready to Experience Effortless Ownership?</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
            Schedule a complimentary, confidential on-site consultation to review your property needs.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="inline-block bg-sand-400 hover:bg-sand-300 text-coastal-950 font-semibold px-8 py-3 rounded text-xs uppercase tracking-wider transition">
              Get in Touch Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
