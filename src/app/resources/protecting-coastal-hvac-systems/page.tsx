import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mitigating Coastal Salt Air Corrosion on Luxury HVAC Systems | Elevated Property Care',
  description: 'How wind-driven salt particles and prolonged idle periods accelerate condenser failure in Delaware beach homes.',
};

export default function ProtectingHvacArticlePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
      <div className="space-y-4 border-b border-sand-200 pb-8">
        <div className="text-xs font-semibold uppercase tracking-widest text-coastal-700">
          Mechanical Care • 4 min read
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
          Salt Air & Atmospheric Humidity: Mitigating Coastal HVAC and Dehumidification Seizures
        </h1>
        <p className="text-sm text-slate-600 font-light leading-relaxed">
          How airborne sodium chloride and long idle periods accelerate heat pump and dehumidifier failure across Rehoboth Beach, Bethany Beach, and Fenwick Island oceanfront properties.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
        <p>
          Oceanfront and near-beach properties in Sussex County live in a harsh microclimate. Airborne salt aerosols deposited by ocean breezes react with aluminum condenser fins and copper coils, causing galvanic corrosion and premature refrigerant leaks.
        </p>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 pt-4">The Danger of Long Idle Intervals</h2>
        <p>
          When vacation homeowners depart in September and turn their HVAC systems to low passive settings, compressors and fan motor bearings sit motionless in high-salinity air. Internal lubrication drains away, allowing corrosive particles to settle on delicate electrical contacts and mechanical bearings. Cycling the systems weekly keeps components warm, dry, and lubricated.
        </p>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 pt-4">Condenser Coil Washing & Protective Coatings</h2>
        <p>
          Regular low-pressure fresh water rinses on outdoor condenser units remove accumulated salt crusts before they pit the metal. Combined with our weekly mechanical run tests, coastal homeowners can effectively double the operating lifespan of expensive heating and cooling investments.
        </p>
      </div>

      <div className="bg-sand-100 p-8 rounded-2xl border border-sand-300 text-center space-y-4">
        <h3 className="font-serif text-xl font-bold text-slate-900">Protect Your Mechanical Investments</h3>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
          Discover how our structured Property Review and system cycling protocols safeguard your home.
        </p>
        <Link href="/services/preventative-maintenance" className="inline-block bg-coastal-900 hover:bg-coastal-950 text-white font-semibold px-8 py-3 rounded text-xs uppercase tracking-wider transition">
          Explore Preventative Maintenance →
        </Link>
      </div>
    </div>
  );
}
