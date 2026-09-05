import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Luxury Concierge & Storm Response Services | Elevated Property Care',
  description: 'Keyholder access, package handling, vendor coordination, and 24/7 storm preparedness across coastal Delaware.',
};

export default function ConciergePage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
            Elevated Property Services
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Luxury Concierge, Keyholder & Storm Preparedness
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Keyholder access, package handling, vendor coordination, and 24/7 storm preparedness across coastal Delaware.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
      <p className="text-slate-700 text-sm leading-relaxed">
        Enjoy effortless beach home ownership with tailored on-demand concierge assistance. Whether receiving specialized deliveries or securing your home ahead of severe coastal storms, our team acts as your trusted ground team.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs text-slate-700">
        <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2">
          <h4 className="font-bold text-sm text-slate-900">Vendor Access & Package Management</h4>
          <p>We provide supervised keyholder access for third-party deliveries, high-value furniture installations, and specialized technicians. We bring packages inside to maintain an occupied appearance.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2">
          <h4 className="font-bold text-sm text-slate-900">Storm Prep & Rapid Response</h4>
          <p>Prior to coastal storms or nor'easters, we secure outdoor furniture and check drainage channels. Immediately following weather events, we complete priority walk-throughs to report any damage.</p>
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
