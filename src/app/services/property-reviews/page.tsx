import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Routine Property Reviews & Home Watch Checklists | Delaware Beaches',
  description: 'Exhaustive interior and exterior home inspection checklists starting at 5/visit for luxury beach homes in Rehoboth, Bethany, Lewes, and Fenwick Island.',
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
            Having our eyes on your property is the single most critical defense against catastrophic and concealed coastal damage. Comprehensive, customizable walk-throughs starting at 5 per visit.
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

        {/* Checklists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Interior Checklist */}
          <div className="bg-white p-8 rounded-2xl border border-sand-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-lg bg-coastal-100 flex items-center justify-center text-coastal-800 font-bold">
              INT
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">Interior Property Checklist</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Our comprehensive Interior Property Review focuses on maintaining immaculate conditions and optimal functionality of vital systems:
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start"><span className="text-coastal-700 mr-2 font-bold">•</span><strong>HVAC & Dehumidification:</strong> Confirming thermostat operation and humidity levels to prevent mold growth in closets and crawlspaces.</li>
              <li className="flex items-start"><span className="text-coastal-700 mr-2 font-bold">•</span><strong>Plumbing & Freeze Checks:</strong> Operating faucets, flushing toilets, running disposals, and inspecting under-sink traps for silent leaks.</li>
              <li className="flex items-start"><span className="text-coastal-700 mr-2 font-bold">•</span><strong>Electrical & Appliances:</strong> Cycling refrigerators, dishwashers, and wine chillers to prevent seals from drying out.</li>
              <li className="flex items-start"><span className="text-coastal-700 mr-2 font-bold">•</span><strong>Security & Smart Systems:</strong> Verifying door locks, sensor alignments, and internet connectivity.</li>
              <li className="flex items-start"><span className="text-coastal-700 mr-2 font-bold">•</span><strong>Pest & Rodent Detection:</strong> Inspecting mechanical rooms, basements, and attic access points for early intrusion.</li>
            </ul>
          </div>

          {/* Exterior Checklist */}
          <div className="bg-white p-8 rounded-2xl border border-sand-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-lg bg-coastal-100 flex items-center justify-center text-coastal-800 font-bold">
              EXT
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">Exterior Property Checklist</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Our Exterior Review safeguards curb appeal, structural envelope integrity, and general grounds safety:
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start"><span className="text-coastal-700 mr-2 font-bold">•</span><strong>Roof & Drainage:</strong> Visual inspection of downspouts, gutter lines, flashing, and soffit vents for storm displacement.</li>
              <li className="flex items-start"><span className="text-coastal-700 mr-2 font-bold">•</span><strong>Envelope & Siding:</strong> Auditing wind-driven salt wear, siding integrity, window seals, and deck fasteners.</li>
              <li className="flex items-start"><span className="text-coastal-700 mr-2 font-bold">•</span><strong>Vendor Quality Control:</strong> Verifying that contracted lawn and pool services performed complete, quality work.</li>
              <li className="flex items-start"><span className="text-coastal-700 mr-2 font-bold">•</span><strong>Grounds & Perimeter:</strong> Checking gates, fence lines, bulkhead edges, and outdoor showers.</li>
              <li className="flex items-start"><span className="text-coastal-700 mr-2 font-bold">•</span><strong>Storm Readiness:</strong> Inspecting outdoor furniture, covers, and loose accessories before forecast weather events.</li>
            </ul>
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
