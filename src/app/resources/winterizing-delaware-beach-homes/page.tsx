import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preparing Sussex County Beach Houses for Winter Freezes | Elevated Property Care',
  description: 'Comprehensive winterization protocol for vacation homes in Rehoboth, Bethany, Lewes, and Fenwick Island.',
};

export default function WinterizingArticlePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
      <div className="space-y-4 border-b border-sand-200 pb-8">
        <div className="text-xs font-semibold uppercase tracking-widest text-coastal-700">
          Winterization & Freeze Protection • 5 min read
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
          Preparing Sussex County Beach Houses for Winter Freezes: The Complete Protocol
        </h1>
        <p className="text-sm text-slate-600 font-light leading-relaxed">
          Why simply turning off the main water shutoff valve is insufficient. Essential engineering steps to protect outdoor showers, tankless water heaters, and unheated crawlspaces during sub-zero nor'easters.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
        <p>
          Coastal Delaware experiences sudden, severe winter temperature plunges when arctic air masses collide with Atlantic moisture. For absentee homeowners residing in Washington D.C., Maryland, or Pennsylvania, an unexpected nor'easter can trigger catastrophic pipe bursts inside luxury beach homes within hours.
        </p>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 pt-4">Outdoor Showers & Exterior Plumbing Manifolds</h2>
        <p>
          The most frequent freeze failure occurs in luxury outdoor shower fixtures and exterior hose bibs. Trapped water in exposed mixer valves expands upon freezing, fracturing the brass housing. Proper winterization requires isolating interior isolation valves, opening bleeder caps, and using compressed air blowouts to purge all remaining water droplets from the lines.
        </p>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 pt-4">Tankless Water Heater Freeze Safeguards</h2>
        <p>
          Modern luxury coastal builds frequently utilize exterior-vented tankless water heaters. While these units feature internal electric heating elements, a winter power failure during a storm immediately neutralizes freeze protection. System purging and mechanical freeze valves are critical defenses.
        </p>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 pt-4">Crawlspace Vent Management & Humidity Regulation</h2>
        <p>
          Many coastal homes in Lewes and Bethany Beach feature encapsulated or conditioned crawlspaces. Winter management requires verifying that crawlspace foundation vents are sealed, dehumidifiers remain powered with functioning drain lines, and pipe insulation remains intact.
        </p>
      </div>

      <div className="bg-sand-100 p-8 rounded-2xl border border-sand-300 text-center space-y-4">
        <h3 className="font-serif text-xl font-bold text-slate-900">Need Professional Winterization Oversight?</h3>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
          Include seasonal winterization and freeze verification in your annual estimate.
        </p>
        <Link href="/annual-estimate" className="inline-block bg-coastal-900 hover:bg-coastal-950 text-white font-semibold px-8 py-3 rounded text-xs uppercase tracking-wider transition">
          View Annual Estimate Options →
        </Link>
      </div>
    </div>
  );
}
