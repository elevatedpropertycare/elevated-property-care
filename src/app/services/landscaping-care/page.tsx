import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Landscaping & Exterior Plant Health Oversight | Elevated Property Care',
  description: 'Auditing landscape contractors, monitoring irrigation, and maintaining pristine curb appeal across Sussex County beach estates.',
};

export default function LandscapingCarePage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
            Elevated Property Services
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Coastal Landscaping Oversight & Plant Health Care
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Auditing landscape contractors, monitoring irrigation, and maintaining pristine curb appeal across Sussex County beach estates.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
      <p className="text-slate-700 text-sm leading-relaxed">
        A pristine coastal estate requires landscape care specifically tailored to sandy soils, salt exposure, and seasonal growth cycles. However, absentee homeowners frequently pay premium rates to lawn services that simply mow and leave without attending to plant vitality or irrigation calibration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs text-slate-700">
        <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2">
          <h4 className="font-bold text-sm text-slate-900">Vendor Quality Control</h4>
          <p>We audit your contracted landscape crew on every property review. We confirm edging, pruning, debris clearing, and bed weeding meet our rigorous standards before signing off on vendor invoices.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2">
          <h4 className="font-bold text-sm text-slate-900">Zero Management Fee on Routine Care</h4>
          <p>Routine contracted landscape care has a fully itemized cost on your annual estimate. Elevated Property Care passes negotiated commercial vendor rates directly to you with zero markup.</p>
        </div>
      </div>
    

        <div className="text-center pt-8 border-t border-sand-200 space-y-4">
          <h3 className="font-serif text-xl font-bold text-slate-900">Ready to discuss your property needs?</h3>
          <Link href="/annual-estimate" className="inline-block bg-coastal-800 hover:bg-coastal-900 text-white font-semibold px-8 py-3.5 rounded text-xs uppercase tracking-wider transition">
            Request a Free Annual Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
