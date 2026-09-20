import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Pool & Spa Care & Maintenance Coordination | Elevated Property Care',
  description: 'Seasonal pool openings and closings, weekly water testing, filter care, and heater maintenance for luxury beach homes in Rehoboth, Bethany Beach, Lewes, and Fenwick Island.',
  keywords: [
    'pool maintenance coastal delaware',
    'spa care bethany beach',
    'pool opening and closing rehoboth beach',
    'hot tub maintenance lewes de',
    'pool heater repair sussex county',
    'pool cleaning fenwick island'
  ],
};

export default function PoolAndSpaCarePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pool & Spa Care & Maintenance Coordination",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Elevated Property Care",
      "telephone": "+1-302-278-0938"
    },
    "description": "Seasonal pool openings and closings, weekly cleaning, water testing, filter care, and equipment repairs for luxury homes across coastal Delaware."
  };

  const poolPillars = [
    {
      title: "Spring Openings & Winter Closings",
      tag: "Seasonal Care",
      description: "Getting your pool ready for summer and safely closing it down before freezing Delaware winter weather sets in.",
      items: [
        "Removing, cleaning, and storing safety covers",
        "Starting up the system, balancing chemicals, and testing equipment",
        "Blowing out plumbing lines with compressed air in the fall to prevent frozen, burst pipes",
        "Securing winter covers and winterizing pumps and heaters"
      ]
    },
    {
      title: "Weekly Cleaning & Water Testing",
      tag: "Routine Service",
      description: "Keeping water crystal clear and healthy so it is always ready for you and your guests.",
      items: [
        "Testing chlorine, salt levels, and pH balance",
        "Skimming surface debris, vacuuming the pool floor, and brushing tiles",
        "Checking water levels so pumps do not run dry and burn out",
        "Logging photos and clarity notes in your routine digital reports"
      ]
    },
    {
      title: "Filter Cleaning & Pump Maintenance",
      tag: "Filtration & Circulation",
      description: "Clean filters and working pumps keep water clear and save energy.",
      items: [
        "Cleaning and rinsing cartridge filters",
        "Backwashing DE and sand filters and adding fresh media",
        "Emptying skimmer and pump strainer baskets",
        "Checking water pressure gauges to catch clogs early"
      ]
    },
    {
      title: "Heater Repairs, New Installations & Diagnostics",
      tag: "Equipment & Repairs",
      description: "When equipment breaks down or needs an upgrade, we bring in licensed technicians to fix it quickly.",
      items: [
        "Troubleshooting and repairing gas heaters and heat pumps",
        "Installing new energy-efficient heaters and variable-speed pumps",
        "Cleaning and replacing salt water chlorine generator cells",
        "Setting up smartphone apps so you can control your pool temperature remotely"
      ]
    }
  ];

  return (
    <>
      <SchemaMarkup data={serviceSchema} />

      <div className="w-full pb-20 overflow-hidden space-y-16">
        {/* Hero Section */}
        <section className="bg-coastal-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-5">
            <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
              Elevated Property Services
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight text-balance">
              Pool & Spa Care & Coordination
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              We handle everything your pool and hot tub need throughout the year—from seasonal openings and closings to weekly cleanings, equipment checks, and heater repairs.
            </p>

            {/* Quality Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Spring Openings & Fall Winterizations
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Weekly Cleaning & Chemical Balance
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Heater Installation, Filter Care & Repairs
              </span>
            </div>
          </div>
        </section>

        {/* The Client Advantage & Quality Control Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-sand-50 p-8 sm:p-10 rounded-2xl border border-sand-300 shadow-sm space-y-6">
            <div className="border-b border-sand-200 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-coastal-700">
                Quality Assurance
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Keep Your Pool Sparkling Without the Headaches
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 leading-relaxed">
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Reliable Quality Control
                </h3>
                <p>
                  A swimming pool or hot tub should be a place to relax, not another chore to manage from miles away. Too often, pool services rush through visits, skimming the top without checking if the water chemistry is actually balanced or if the equipment is running properly.
                </p>
                <p>
                  When we manage your pool care, we make sure the job is done right. We coordinate with trusted local pool technicians, inspect the water and equipment during our routine Home Checks, and ensure your pool is clean, balanced, and warm for your arrival.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  One Account, One Clear Monthly Invoice
                </h3>
                <p>
                  Instead of getting random bills from different pool openers, cleaners, and repair technicians, all of your pool services appear clearly on your single monthly invoice from Elevated Property Care.
                </p>
                <p>
                  We verify that each service was completed properly and on time before you are billed. You get total peace of mind knowing the water is crystal clear and equipment is protected year-round.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services Grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest text-coastal-700 uppercase">
              Our Services
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
              Complete Pool & Spa Maintenance
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              From seasonal changeovers to routine cleaning and mechanical diagnostics, we keep your pool and hot tub in prime condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {poolPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md hover:border-coastal-300 transition duration-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-coastal-600 bg-coastal-50 px-2.5 py-1 rounded-md border border-coastal-100">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-3 border-t border-sand-100 text-xs text-slate-700">
                  {pillar.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <span className="text-coastal-600 mr-2 font-bold flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-sand-100 p-10 sm:p-14 rounded-2xl border border-sand-300 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Ready for Effortless Pool & Spa Care?
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Add pool and spa management to your annual property care agreement so your water is always ready when you walk through the door.
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                href="/contact"
                className="inline-block bg-coastal-900 hover:bg-coastal-950 text-white font-semibold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-sm transition"
              >
                Discuss Your Pool & Spa Needs Today
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
