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
      title: "Routine Lawn Mowing & Turf Care",
      tag: "Weekly Grounds Care",
      description: "Consistent mowing calibrated to coastal turf growth rates. We ensure clean cut lines, precision hardscape edging along driveways and walkways, and thorough debris cleanups.",
      items: [
        "Reliable weekly mowing schedule scheduled strategically ahead of weekends",
        "Crisp edge trimming along curbs, garden beds, pavers, and fences",
        "Power blowing of all walkways, patios, decks, and driveways",
        "Blade height adjustments suited for summer heat and sandy coastal soils"
      ]
    },
    {
      title: "Shrub, Hedge & Ornamental Tree Pruning",
      tag: "Plant Health & Shaping",
      description: "Pruning coastal plants requires timing and horticultural knowledge. We oversee precise seasonal trimming to promote vigorous growth, healthy flowering, and architectural beauty.",
      items: [
        "Seasonal pruning of hydrangeas, crape myrtles, roses & coastal ornamentals",
        "Formal boxwood, privet, and hedge shaping and height maintenance",
        "Deadwood removal and selective thinning to improve airflow and sunlight",
        "Post-storm limb trimming and seasonal clearance away from siding and rooflines"
      ]
    },
    {
      title: "Spring & Fall Property Cleanups",
      tag: "Seasonal Resets",
      description: "Coastal storms, autumn nor'easters, and winter winds deposit significant organic debris across beach properties. We coordinate thorough property cleanups to reset your grounds.",
      items: [
        "Spring bed raking, winter debris haul-away & perennial cutbacks",
        "Autumn leaf cleanup, turf de-thatching, and garden bed winter preparation",
        "Storm debris collection, branch removal, and pine needle clearance",
        "Disposal of all yard waste, leaving exterior living areas pristine"
      ]
    },
    {
      title: "Bed Edging, Weed Defense & Premium Mulching",
      tag: "Curb Appeal & Soil Vitality",
      description: "Sandy coastal soil dries out rapidly under Delaware summer sun. High-quality natural mulch conserves essential root moisture, suppresses weeds, and elevates curb appeal.",
      items: [
        "Deep, spade-trench mechanical edging for crisp, clean bed borders",
        "Pre-emergent weed treatment and hand weeding prior to mulch installation",
        "Premium, dye-free double-shredded dark hardwood or cedar bark mulch",
        "Careful root-flare clearance around trees and shrubs to prevent collar rot"
      ]
    },
    {
      title: "Irrigation Oversight & Smart Watering",
      tag: "Water Management",
      description: "Coastal irrigation requires continuous balance: preventing turf burnout while avoiding overwatering that breeds fungus in humid summer conditions.",
      items: [
        "Spring system activation, zone pressurization, and head alignment audits",
        "Smart controller scheduling tailored to local precipitation and municipal restrictions",
        "Rain sensor testing and seasonal duration adjustments",
        "Thorough autumn compressed-air winterization blowouts to prevent pipe bursts"
      ]
    },
    {
      title: "Turf Health, Soil Care & Treatments",
      tag: "Agronomic Vitality",
      description: "We optimize your lawn's health through targeted, appropriate turf treatments—ensuring your grass receives exactly what it needs without costly, unnecessary applications.",
      items: [
        "Balanced slow-release seasonal fertilizer applications",
        "Crabgrass and broadleaf weed control timed to coastal germination windows",
        "Soil pH testing and targeted lime applications for acidic coastal soils",
        "Fall core aeration and high-performance coastal seed overseeding"
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
              Deep understanding of lush coastal landscaping, tailored yearly maintenance plans, and trusted local execution for discerning homeowners in Sussex County, Delaware.
            </p>

            {/* Quality Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Customized Annual Maintenance Plans
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Vetted Local Landscape Professionals
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Seamless Full-Spectrum Property Oversight
              </span>
            </div>
          </div>
        </section>

        {/* The Client Advantage / Philosophy Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-sand-50 p-8 sm:p-10 rounded-2xl border border-sand-300 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sand-200 pb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-coastal-700">
                  Our Landscape Philosophy
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Deep Horticultural Understanding & Tailored Execution
                </h2>
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-coastal-900 text-sand-100 text-xs font-semibold tracking-wide uppercase">
                Turnkey Grounds Care
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 leading-relaxed">
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Expertise in Lush, Coastal Grounds
                </h3>
                <p>
                  A vibrant, healthy coastal property requires specialized knowledge of Delaware beach microclimates—sandy soils, high-salinity ocean air, heavy seasonal rainfall, and intense summer sun.
                </p>
                <p>
                  We have a deep understanding of what it takes to cultivate and maintain lush, beautiful landscaping. We assist you with optimizing and executing comprehensive yearly maintenance plans—including routine lawn mowing, ornamental shrub and tree care, meticulous prunings, seasonal cleanups, and premium mulching.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Maximizing Value & Eliminating Unneeded Services
                </h3>
                <p>
                  We collaborate with several trusted, high-caliber local landscape professionals to execute your property’s maintenance. Because we manage the relationship on your behalf, we actively maximize value by ensuring that <strong className="text-coastal-950 font-semibold">only appropriate and genuinely needed services</strong> are added to your scope.
                </p>
                <div className="p-4 bg-sand-100/70 rounded-xl border border-sand-200 text-xs text-slate-600">
                  <span className="font-semibold text-slate-900 block mb-1">Your Advocate on the Ground:</span>
                  You never have to worry about inflated contractor scopes or paying for unnecessary treatments. Every line item is vetted for real agronomic benefit and pristine curb appeal.
                </div>
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
                <h4 className="font-bold text-sand-200 text-sm">Accountability & Inspection</h4>
                <p>
                  During every routine Home Check, we visually inspect the grounds. We audit lawn cuts, hedge pruning, and debris removal before signing off on work.
                </p>
              </div>

              <div className="bg-white/5 p-5 rounded-xl border border-white/10 space-y-2">
                <h4 className="font-bold text-sand-200 text-sm">One Trusted Partner</h4>
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
              Ready for a Seamlessly Managed Landscape?
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Discover how incorporating full-spectrum landscape management into your annual property care agreement delivers exceptional curb appeal, trusted local quality control, and complete peace of mind.
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
