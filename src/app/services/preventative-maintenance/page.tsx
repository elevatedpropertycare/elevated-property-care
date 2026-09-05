import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coastal Preventative Maintenance & System Cycling | Elevated Property Care',
  description: 'Protecting luxury coastal homes from salt-air corrosion, humidity, and pipe freezes with structured system cycling in Delaware beaches.',
};

export default function PreventativeMaintenancePage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
            Elevated Property Services
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Preventative Maintenance & Mechanical System Cycling
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Protecting luxury coastal homes from salt-air corrosion, humidity, and pipe freezes with structured system cycling in Delaware beaches.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
      <p className="text-slate-700 text-sm leading-relaxed">
        When a luxury coastal home sits vacant for weeks or months, its complex mechanical, plumbing, and climate control systems begin to degrade. In Sussex County, the combination of coastal salt air, extreme humidity swings, and winter freezes creates acute mechanical failure points.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs text-slate-700">
        <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2">
          <h4 className="font-bold text-sm text-slate-900">Plumbing & Trap Cycling</h4>
          <p>Running all faucets, toilets, and disposals prevents P-traps from evaporating—stopping hazardous sewer gas from entering the home and preventing mineral buildup on internal gaskets.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2">
          <h4 className="font-bold text-sm text-slate-900">HVAC & Compressor Cycling</h4>
          <p>Cycling heating and cooling units keeps fans, motors, and electronic controls active. Prolonged idle compressors frequently seize upon sudden startup, resulting in costly replacements.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-sand-200 space-y-2">
          <h4 className="font-bold text-sm text-slate-900">Winterization & Freeze Protocols</h4>
          <p>Coordinating professional winterization of outdoor showers, hose bibs, and irrigation systems, alongside temperature monitoring during deep winter freezes.</p>
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
