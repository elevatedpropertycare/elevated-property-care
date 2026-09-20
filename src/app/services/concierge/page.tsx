import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Storm Prep, Weather Defense & Concierge | Elevated Property Care',
  description: 'Year-round coastal weather monitoring, pre-storm securing, post-storm checks, winter freeze defense, and keyholder assistance across coastal Delaware.',
  keywords: [
    'storm prep coastal delaware',
    'freeze protection rehoboth beach',
    'keyholder services bethany beach',
    'post storm home inspection lewes de',
    'weather defense sussex county',
    'concierge property care fenwick island'
  ],
};

export default function ConciergePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Storm Prep, Weather Defense & Concierge Care",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Elevated Property Care",
      "telephone": "+1-302-278-0938"
    },
    "description": "Year-round weather monitoring, pre-storm patio securing, post-storm damage inspections, cold snap freeze protocols, and keyholder assistance in coastal Delaware."
  };

  const conciergePillars = [
    {
      title: "Pre-Storm Prep & Securing Outdoor Items",
      tag: "High Winds",
      description: "High winds can easily turn patio furniture and outdoor decor into flying objects that break windows or damage siding.",
      items: [
        "Gathering and securing patio tables, chairs, and loungers",
        "Closing, strapping down, or moving umbrellas into the garage",
        "Storing trash cans, loose planters, and grill covers in sheltered spots",
        "Checking that gates, exterior doors, and storm shutters are securely closed"
      ]
    },
    {
      title: "Post-Storm Property Checks",
      tag: "After the Storm",
      description: "As soon as conditions are safe, we visit your property to check for damage and report back to you immediately.",
      items: [
        "Walking the entire perimeter to check rooflines, siding, and gutters",
        "Checking grounds for fallen tree branches, wind debris, and standing water",
        "Inspecting indoors for any signs of water leaks around windows or ceilings",
        "Sending you an email report with timestamped photos showing your home’s condition"
      ]
    },
    {
      title: "Winter Freeze Protection",
      tag: "Cold Snaps",
      description: "Sudden winter freezes can quickly cause outdoor showers, spigots, and interior pipes to freeze and burst.",
      items: [
        "Checking thermostats to confirm heat is running at the right temperature",
        "Making sure crawlspace doors and vents are closed tight",
        "Verifying outdoor showers and garden spigots are shut off and drained",
        "Taking immediate emergency action if heating fails or freezing risks are detected"
      ]
    },
    {
      title: "Keyholder Help & Package Management",
      tag: "Concierge & Access",
      description: "Let us be your trusted set of hands on the ground when you cannot be there in person.",
      items: [
        "Meeting delivery drivers or technicians and letting them inside safely",
        "Bringing packages inside from your porch so they stay dry and safe",
        "Adjusting thermostats and turning on lights before you or your guests arrive",
        "Being the local emergency contact for alarm companies or service calls"
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
              Storm Prep, Weather Defense & Concierge
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              We watch the weather year-round, secure your home before storms hit, inspect for damage right after, and handle packages and vendor access so you never have to worry.
            </p>

            {/* Quality Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Year-Round Weather Monitoring
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Pre-Storm Securing & Post-Storm Checks
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Freezing Weather Protection & Keyholder Help
              </span>
            </div>
          </div>
        </section>

        {/* The Client Advantage & Quality Control Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-sand-50 p-8 sm:p-10 rounded-2xl border border-sand-300 shadow-sm space-y-6">
            <div className="border-b border-sand-200 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-coastal-700">
                Weather Defense
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                We Watch the Weather So You Don't Have To
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 leading-relaxed">
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Proactive Protection
                </h3>
                <p>
                  Coastal Delaware gets its fair share of harsh weather—from summer nor’easters and heavy windstorms to sudden winter deep freezes. When you live hours away, wondering if your beach home is safe during a storm causes unnecessary stress.
                </p>
                <p>
                  We monitor local weather forecasts year-round. When severe weather or freezing temperatures are predicted, we take action ahead of time. We secure loose outdoor items, check your home’s perimeter, and return as soon as the storm passes to verify everything is safe.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  A Local Team You Can Depend On
                </h3>
                <p>
                  When a storm warning or deep freeze alert pops up on your phone, you don't have to scramble to find someone local to check on your house.
                </p>
                <p>
                  We are already on it—securing your property before the storm, checking it right after, and keeping you updated every step of the way with clear, timestamped photo reports.
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
              Storm Defense & Hands-On Help
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              From securing your patio ahead of high winds to emergency freeze interventions and keyholder visits, we keep your home secure in every season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conciergePillars.map((pillar, idx) => (
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
              Protect Your Beach Home Year-Round
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Add storm response and concierge care to your annual agreement so your home is always prepared, no matter what the weather brings.
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                href="/contact"
                className="inline-block bg-coastal-900 hover:bg-coastal-950 text-white font-semibold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-sm transition"
              >
                Discuss Your Property Protection Today
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
