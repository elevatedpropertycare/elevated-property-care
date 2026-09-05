import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pool & Spa Maintenance Oversight | Elevated Property Care',
  description: 'Independent quality control for luxury coastal pools and spas in Rehoboth, Bethany, Lewes, and Fenwick Island.',
};

export default function PoolAndSpaCarePage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
            Elevated Property Services
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Pool & Spa Caretaking & Quality Assurance
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Independent quality control for luxury coastal pools and spas in Rehoboth, Bethany, Lewes, and Fenwick Island.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
      <p className="text-slate-700 text-sm leading-relaxed">
        Your swimming pool and hot tub are major lifestyle investments that require consistent chemical balance and mechanical filtration. During our property reviews, our Property Managers visually inspect your pool and spa systems to hold service companies accountable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs text-slate-700">
        <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2">
          <h4 className="font-bold text-sm text-slate-900">Water Clarity & Surface Checks</h4>
          <p>We clear surface skimmers, check water levels to prevent pump burnout, and verify that water clarity remains sparkling clean prior to your or your guests arrival.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2">
          <h4 className="font-bold text-sm text-slate-900">Opening & Closing Coordination</h4>
          <p>We oversee spring openings and rigorous autumn winterizations, confirming proper safety covers, line blowouts, and anti-freeze additions are executed properly.</p>
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
