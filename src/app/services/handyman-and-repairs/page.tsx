import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Skilled Handyman & Carpentry Services (0/hr) | Elevated Property Care',
  description: 'Transparent 0/hr property manager labor for custom carpentry, punch lists, assembly, and minor repairs in coastal Delaware.',
};

export default function HandymanAndRepairsPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
            Elevated Property Services
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Handyman, Carpentry & Technical Home Repairs
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Transparent 0/hr property manager labor for custom carpentry, punch lists, assembly, and minor repairs in coastal Delaware.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
      <p className="text-slate-700 text-sm leading-relaxed">
        From furniture assembly and custom carpentry to paint touch-ups and hardware replacements, beach homes regularly develop punch-list needs that busy homeowners do not have the time—or desire—to tackle themselves.
      </p>
      <div className="bg-white p-6 rounded-xl border border-sand-300 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b border-sand-200 pb-3">
          <div>
            <h4 className="font-bold text-base text-slate-900">Transparent Hourly Labor Rate</h4>
            <p className="text-xs text-slate-500">In-house Property Manager skilled labor</p>
          </div>
          <span className="text-2xl font-bold text-coastal-900 font-serif">0 / hour</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          We publish our labor rates openly so you are never surprised by an invoice. Scope includes carpentry repairs, door and lock adjustments, power washing, drywall patching, shelf installation, lighting fixture changes, and seasonal assembly.
        </p>
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
