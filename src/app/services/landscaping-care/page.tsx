import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Coastal Landscaping Management & Grounds Care | Elevated Property Care',
  description: 'Comprehensive annual landscaping plans, routine mowing, shrub and tree pruning, mulching, and local professional oversight for luxury homes in Rehoboth, Bethany Beach, Lewes, and Fenwick Island.',
  keywords: [
    'landscaping services coastal delaware',
    'luxury lawn care bethany beach',
    'shrub and tree pruning rehoboth beach',
    'annual landscape management lewes de',
    'beach house grounds care sussex county',
    'irrigation and mulching fenwick island'
  ],
};

export default function LandscapingCarePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Coastal Landscaping Management & Grounds Care",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Elevated Property Care",
      "telephone": "+1-302-278-0938"
    },
    "description": "Full-spectrum annual landscape management, precision lawn mowing, shrub pruning, mulching, and local professional grounds care for luxury coastal Delaware properties."
  };

  const landscapePillars = [
    {
      title: "Weekly Lawn Mowing & Precision Detailing",
      tag: "Weekly Grounds Care",
      description: "Dependable mowing calibrated to coastal growing cycles. We make sure crews cut at the proper blade height, trim crisp edges along walks and driveways, blow off all porches and patios, and latch every gate.",
      items: [
        "Reliable weekly cuts scheduled strategically ahead of weekend arrivals",
        "Crisp line trimming and spade edging along driveways, patios, and beds",
        "Thorough power blowing of all walkways, pool decks, and porches",
        "Blade height management to avoid lawn scalping in sandy coastal soils"
      ]
    },
    {
      title: "Shrub, Hedge & Ornamental Tree Pruning",
      tag: "Plant Health & Shaping",
      description: "Proper pruning requires horticultural knowledge and correct timing. We oversee seasonal trimming to encourage vibrant flowering, maintain clean architectural shapes, and remove deadwood.",
      items: [
        "Timed pruning for hydrangeas, crape myrtles, roses, and coastal ornamentals",
        "Formal boxwood and privet hedge shaping and uniform height control",
        "Selective branch thinning to improve sunlight penetration and air circulation",
        "Clearance trimming to keep heavy branches safely away from siding and roofs"
      ]
    },
    {
      title: "Spring & Fall Property Cleanups",
      tag: "Seasonal Resets",
      description: "Coastal storms and coastal winds leave heavy organic debris on beach properties. We coordinate comprehensive spring and fall cleanups to reset your yard for the upcoming season.",
      items: [
        "Spring bed raking, windblown debris haul-away, and perennial cutbacks",
        "Autumn leaf removal, turf de-thatching, and winter bed protection",
        "Storm debris collection, fallen branch clearing, and pine needle cleanup",
        "Full disposal of all yard waste, leaving exterior living areas spotless"
      ]
    },
    {
      title: "Bed Edging & Premium Hardwood Mulching",
      tag: "Curb Appeal & Soil Vitality",
      description: "Sandy coastal soil dries out quickly under the summer sun. Natural mulch helps retain crucial root moisture, suppresses stubborn weeds, and gives your home a polished look.",
      items: [
        "Deep mechanical trench edging for clean, defined borders between grass and beds",
        "Thorough hand weeding and pre-emergent weed defense prior to mulching",
        "High-grade, double-shredded natural dark hardwood or cedar bark mulch",
        "Careful root-flare clearance around trees and shrubs to prevent wood rot"
      ]
    },
    {
      title: "Irrigation Oversight & Smart Watering",
      tag: "Water Management",
      description: "Coastal irrigation requires continuous balance: preventing dry, burnt turf while avoiding excessive watering that breeds fungus and disease in humid Delaware summers.",
      items: [
        "Spring activation, zone pressurization, and spray head alignment checks",
        "Smart timer programming adjusted for weather changes and municipal guidelines",
        "Rain sensor testing and seasonal duration adjustments",
        "Thorough autumn compressed-air blowouts to protect pipes against freezing"
      ]
    },
    {
      title: "Targeted Turf Nutrition & Soil Treatments",
      tag: "Agronomic Vitality",
      description: "We optimize your lawn through targeted, appropriate turf treatments—ensuring your grass receives exactly what it needs without paying for redundant or useless chemical applications.",
      items: [
        "Balanced slow-release seasonal fertilizers designed for sandy coastal soils",
        "Crabgrass and broadleaf weed control timed to seasonal germination windows",
        "Soil pH testing and targeted lime applications to balance coastal acidity",
        "Fall core aeration paired with premium, salt-tolerant coastal grass seed"
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
              Coastal Landscaping Management & Grounds Care
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Deep understanding of lush coastal landscaping, customized yearly maintenance plans, and trusted local execution for homeowners across Sussex County, Delaware.
            </p>

            {/* Quality Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Hands-On Oversight on Every Service
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Choose From Several Vetted Local Providers
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Clear, Detailed Monthly Itemized Invoicing
              </span>
            </div>
          </div>
        </section>

        {/* The Client Advantage & Quality Control Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-sand-50 p-8 sm:p-10 rounded-2xl border border-sand-300 shadow-sm space-y-6">
            <div className="border-b border-sand-200 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-coastal-700">
                Our Landscape Philosophy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Your Dedicated Advocate on the Ground
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 leading-relaxed">
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Every Service Needs Quality Control
                </h3>
                <p>
                  It is easy to assume that basic services like routine lawn mowing do not need supervision—until mowers scalp the turf, miss hard-to-reach edges, blow clippings into pool water, or leave side gates wide open.
                </p>
                <p>
                  We provide continuous hands-on oversight to ensure you actually get what you are paying for. Regardless of whether your property is a manageable townhome lawn or an expansive multi-acre coastal estate, our knowledge and experience ensure your grounds receive the exact care they need without compromise.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Protecting You From Overselling
                </h3>
                <p>
                  In the landscaping industry, service providers and tree specialists frequently oversell homeowners on unnecessary treatments, redundant fertilizations, or overlapping services that drive up bills without improving plant health.
                </p>
                <p>
                  Because we act as your independent advocate, our horticultural experience lets us review every proposal with a critical eye. We eliminate fluff, prevent overlapping services, and make sure you only pay for work that is genuinely required and beneficial for your property.
                </p>
              </div>
            </div>

            {/* Caveat Note */}
            <div className="p-4 bg-sand-100/80 rounded-xl border border-sand-200 text-xs text-slate-700">
              <span className="font-bold text-slate-900 block mb-1">Managed in Full Through Elevated Property Care:</span>
              All of our vendor vetting, quality control inspections, contractor auditing, and advocacy benefits apply when your landscaping services are arranged and managed in full through Elevated Property Care as part of your annual property care agreement.
            </div>
          </div>
        </section>

        {/* Benefits Cards: Choice of Providers & Itemized Billing */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Provider Choice */}
            <div className="bg-white p-8 rounded-2xl border border-sand-300 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-coastal-50 border border-coastal-200 flex items-center justify-center text-coastal-800 font-bold">
                  🌱
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Multiple Vetted Companies to Choose From
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Every property owner has distinct preferences regarding crew size, equipment types, and pricing. We partner with several reputable, fully insured local landscaping companies across Sussex County.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  This gives you the freedom to choose the specific provider you like best. Whichever team you select, Elevated Property Care serves as your direct liaison—handling all scheduling, instructions, and communication on your behalf.
                </p>
              </div>
              <div className="pt-3 border-t border-sand-100 text-xs text-coastal-800 font-medium">
                ✓ Local selection with professional management
              </div>
            </div>

            {/* Card 2: Frictionless Itemized Invoicing */}
            <div className="bg-white p-8 rounded-2xl border border-sand-300 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-coastal-50 border border-coastal-200 flex items-center justify-center text-coastal-800 font-bold">
                  📄
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Clear, Monthly Itemized Billing
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Managing landscape bills for a beach home can be overwhelming. Homeowners frequently receive scattered invoices from multiple lawn cutters, mulch suppliers, and chemical applicators with no way to verify when or if the work was completed.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  When included in your annual Elevated Property Care agreement, all services appear on a single, easy-to-read monthly invoice. We verify that each service was performed properly, on time, and at the agreed price. We detailed-itemize each individual service—something vendors rarely do when billing homeowners directly.
                </p>
              </div>
              <div className="pt-3 border-t border-sand-100 text-xs text-coastal-800 font-medium">
                ✓ Verified completion before you are billed
              </div>
            </div>
          </div>
        </section>

        {/* The Full Spectrum Advantage Card */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-coastal-900 text-white p-8 sm:p-10 rounded-2xl border border-coastal-800 shadow-md space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-sand-300">
                The Single-Source Advantage
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Why Clients Get the Most Value When We Manage All Services
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Homeowners experience the greatest value and seamless ease when Elevated Property Care coordinates the full spectrum of their residential needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-xs text-slate-300">
              <div className="bg-white/5 p-5 rounded-xl border border-white/10 space-y-2">
                <h4 className="font-bold text-sand-200 text-sm">Synchronized Scheduling</h4>
                <p>
                  Lawn mowing, bed edging, pool care, and irrigation checks are coordinated cohesively with your arrival dates. Your home is always fresh and ready.
                </p>
              </div>

              <div className="bg-white/5 p-5 rounded-xl border border-white/10 space-y-2">
                <h4 className="font-bold text-sand-200 text-sm">Inspected on Home Checks</h4>
                <p>
                  During every routine Home Check, we visually inspect the grounds. We audit lawn cuts, hedge pruning, and debris removal before signing off on work.
                </p>
              </div>

              <div className="bg-white/5 p-5 rounded-xl border border-white/10 space-y-2">
                <h4 className="font-bold text-sand-200 text-sm">One Accountable Partner</h4>
                <p>
                  No coordinating separate lawn services, irrigation techs, and tree cutters. One direct call to your Primary Property Manager handles everything.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services Grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest text-coastal-700 uppercase">
              Comprehensive Care Pillars
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
              End-to-End Exterior Maintenance Solutions
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We design and oversee customized yearly maintenance programs tailored to your property’s layout, botanical species, and aesthetic preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landscapePillars.map((pillar, idx) => (
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
              Ready for Effortless, Pristine Grounds?
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Discover how incorporating full-spectrum landscape management into your annual property care agreement delivers exceptional curb appeal, verified quality control, and complete peace of mind.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/annual-estimate"
                className="bg-coastal-900 hover:bg-coastal-950 text-white font-semibold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-sm transition"
              >
                Request an Annual Grounds Estimate
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-sand-50 text-coastal-900 border border-sand-300 font-semibold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition"
              >
                Speak with Our Grounds Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
