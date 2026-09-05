import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Routine Property Reviews & Home Watch Checklists | Delaware Beaches',
  description: 'Exhaustive interior and exterior home inspection checklists starting at $50/visit for luxury beach homes in Rehoboth, Bethany, Lewes, and Fenwick Island.',
  keywords: ['property review delaware', 'home watch checklist beach house', 'vacation home inspection rehoboth', 'house watching sussex county'],
};

export default function PropertyReviewsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Routine Property Reviews (Home Watch)",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Elevated Property Care",
      "telephone": "+1-302-278-0938"
    },
    "description": "Structured weekly or bi-weekly interior and exterior property inspections for coastal Delaware homes.",
    "offers": {
      "@type": "Offer",
      "price": "45.00",
      "priceCurrency": "USD",
      "unitText": "per visit"
    }
  };

  return (
    <div className="space-y-16 pb-20">
      <SchemaMarkup data={serviceSchema} />

      {/* Hero */}
      <section className="bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
            The Cornerstone of Elevated Care
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Routine Property Reviews & Home Watch Program
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Having our eyes on your property is the single most critical defense against catastrophic and concealed coastal damage. Comprehensive, customizable walk-throughs starting at $45 per visit.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs">
            <span className="bg-white/10 px-3 py-1.5 rounded border border-white/20">✓ Digital Report with Photos</span>
            <span className="bg-white/10 px-3 py-1.5 rounded border border-white/20">✓ Weekly in Winter / Bi-Weekly in Summer</span>
            <span className="bg-white/10 px-3 py-1.5 rounded border border-white/20">✓ Dedicated Assigned Property Manager</span>
          </div>
        </div>
      </section>

      {/* Philosophy & Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white p-8 rounded-2xl border border-sand-200 shadow-sm space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Proactive Oversight Built for Vacation Homeowners
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            The cornerstone of Elevated Property Care's approach is our Property Review program, often referred to as our House Watching Program. This customizable and comprehensive service empowers your dedicated Property Manager to be proactive: providing you with regular updates, ensuring quality control, offering expert recommendations, and completing routine tasks you would rather not handle yourself.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Property Reviews are included in all annual estimates, priced depending on property size, complexity, and other criteria. Property Reviews can be arranged on a weekly, bi-weekly, or monthly schedule. Having our eyes on your property is what allows us to deliver seamless, stress-free homeownership.
          </p>
        </div>

        {/* Sample Property Review Reports Gallery */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-widest text-coastal-600 uppercase">
              Digital Inspection Reports
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Sample Property Review Reports
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Here is an authentic look at the detailed digital reports delivered directly to homeowners after every visit—complete with timestamped photography, system checks, and actionable observations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/SPR1.webp"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden hover:shadow-lg hover:border-coastal-400 transition duration-200"
            >
              <div className="overflow-hidden bg-slate-50">
                <img
                  src="/SPR1.webp"
                  alt="Sample Property Review Report Page 1"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition duration-300"
                />
              </div>
              <div className="p-4 text-center border-t border-sand-200">
                <span className="text-xs font-semibold text-slate-800 group-hover:text-coastal-700 transition">
                  Report Preview 1 (Click to enlarge) ↗
                </span>
              </div>
            </a>

            <a
              href="/SPR2.webp"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden hover:shadow-lg hover:border-coastal-400 transition duration-200"
            >
              <div className="overflow-hidden bg-slate-50">
                <img
                  src="/SPR2.webp"
                  alt="Sample Property Review Report Page 2"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition duration-300"
                />
              </div>
              <div className="p-4 text-center border-t border-sand-200">
                <span className="text-xs font-semibold text-slate-800 group-hover:text-coastal-700 transition">
                  Report Preview 2 (Click to enlarge) ↗
                </span>
              </div>
            </a>

            <a
              href="/SPR3.webp"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden hover:shadow-lg hover:border-coastal-400 transition duration-200"
            >
              <div className="overflow-hidden bg-slate-50">
                <img
                  src="/SPR3.webp"
                  alt="Sample Property Review Report Page 3"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition duration-300"
                />
              </div>
              <div className="p-4 text-center border-t border-sand-200">
                <span className="text-xs font-semibold text-slate-800 group-hover:text-coastal-700 transition">
                  Report Preview 3 (Click to enlarge) ↗
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Specialized Turnover Reviews for Self-Managing Vacation Rental Owners */}
        <div className="bg-coastal-950 text-white p-8 sm:p-10 rounded-2xl border border-coastal-800 space-y-6 shadow-md">
          <div className="space-y-2">
            <span className="bg-sand-400 text-coastal-950 font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded inline-block">
              Vacation Rental Partnership
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Specialized Turnover Reviews for Self-Managing Rental Owners
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
              Many Sussex County coastal homeowners manage their own Airbnb, VRBO, or direct guest bookings to maximize their income. Elevated Property Care provides the professional, on-the-ground property stewardship you need without charging any commission on your rental earnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="bg-coastal-900/80 p-5 rounded-xl border border-coastal-800 space-y-2">
              <h4 className="font-bold text-sm text-sand-300">Pre-Rental Readiness Checks</h4>
              <p>We verify HVAC set points, test plumbing fixtures, inspect lighting and smart locks, and ensure all amenities are pristine, safe, and ready for arriving guests.</p>
            </div>
            <div className="bg-coastal-900/80 p-5 rounded-xl border border-coastal-800 space-y-2">
              <h4 className="font-bold text-sm text-sand-300">Post-Checkout Damage Reviews</h4>
              <p>Following guest departures, we complete detailed interior and exterior inspections, documenting any damage, excessive wear, or maintenance needs with timestamped photos before your next turnover.</p>
            </div>
            <div className="bg-coastal-900/80 p-5 rounded-xl border border-coastal-800 space-y-2">
              <h4 className="font-bold text-sm text-sand-300">Tenant & Owner Ground Assistance</h4>
              <p>When unexpected maintenance issues arise during a guest stay—from a tripped breaker to an appliance malfunction—our licensed local team provides rapid assistance to resolve issues and protect your asset.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-coastal-800/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-sand-200">
            <span><strong>Zero Rental Commission:</strong> You keep 100% of your booking revenue. We simply keep your home in prime condition.</span>
          </div>
        </div>

        {/* Perks & Recommendations */}
        <div className="bg-sand-100 p-8 rounded-2xl border border-sand-300 space-y-4">
          <h3 className="font-serif text-xl font-bold text-slate-900">Thoughtful Perks & Recommendations</h3>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Every Elevated Property Review goes beyond a mere visual check; it includes a thoughtful perk designed to lighten your load. Your Property Manager will dedicate time during each visit to a menial task you won't have to worry about—such as sweeping your garage floor, clearing cobwebs, clearing pool skimmers, adjusting house clocks after daylight savings, tidying your porch, or watering indoor plants.
          </p>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Furthermore, with each review, your Property Manager will provide insightful recommendations for improvements, upcoming preventative repairs, and maintenance suggestions. None of these recommendations are mandatory; they represent our professional commitment to your peace of mind.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-6">
          <Link href="/annual-estimate" className="inline-block bg-coastal-800 hover:bg-coastal-900 text-white font-semibold px-8 py-3.5 rounded text-xs uppercase tracking-wider transition">
            Calculate Property Review Pricing on Your Annual Estimate →
          </Link>
        </div>
      </section>
    </div>
  );
}
