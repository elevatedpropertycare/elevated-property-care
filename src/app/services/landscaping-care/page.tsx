import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Luxury Landscaping & Grounds Oversight | Elevated Property Care',
  description: 'Professional grounds oversight, irrigation winterization, storm prep, and vendor quality control for coastal Delaware beach residences.',
};

export default function LandscapingCarePage() {
  return (
    <div className="w-full pb-20 overflow-hidden space-y-16">
      <section className="bg-coastal-950 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="inline-block bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded">
            Service Line 03
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            Landscaping & Exterior Property Care
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Delivering immaculate curb appeal, plant health protection against salt spray, and rigorous contractor quality control across Sussex County.
          </p>
          <div className="pt-2">
            <Link href="/annual-estimate" className="bg-sand-400 hover:bg-sand-300 text-coastal-950 font-semibold px-6 py-3 rounded text-xs uppercase tracking-wider transition">
              Get an Annual Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
          Supervised Exterior Standards for Absentee Owners
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
          A pristine coastal property requires landscape care specifically tailored to sandy soils, salt exposure, and seasonal growth cycles. However, absentee homeowners frequently pay premium rates to lawn services that simply mow and leave without attending to plant vitality or irrigation calibration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs text-slate-700">
          <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2">
            <h3 className="font-bold text-sm text-slate-900">Vendor Quality Control</h3>
            <p>We audit your contracted landscape crew on every property review. We confirm edging, pruning, debris clearing, and bed weeding meet our rigorous standards before signing off on vendor invoices.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2">
            <h3 className="font-bold text-sm text-slate-900">Turnkey Vendor Oversight</h3>
            <p>Routine contracted landscape care is clearly itemized on your tailored annual care plan. Elevated Property Care manages vendor scheduling, audits work quality, and reconciles all charges onto your monthly statement.</p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-sand-200 space-y-4">
          <h3 className="font-serif text-xl font-bold text-slate-900">Ready to discuss your property needs?</h3>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-coastal-800 hover:bg-coastal-900 text-white font-semibold px-6 py-3 rounded text-xs uppercase tracking-wider transition">
              Contact Our Team
            </Link>
            <a href="tel:3022780938" className="border border-coastal-800 text-coastal-900 font-semibold px-6 py-3 rounded text-xs uppercase tracking-wider hover:bg-coastal-50 transition">
              Call (302) 278-0938
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
