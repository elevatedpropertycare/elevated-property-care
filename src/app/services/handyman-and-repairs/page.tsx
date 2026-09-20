import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Skilled Handyman, Carpentry & High-End Assembly | Elevated Property Care',
  description: 'Precision carpentry, high-end furniture assembly, cabinetry adjustments, and coastal home repairs across Rehoboth Beach, Bethany Beach, Lewes, and Fenwick Island.',
  keywords: [
    'handyman services coastal delaware',
    'luxury furniture assembly delaware beaches',
    'carpentry repairs bethany beach',
    'cabinet adjustments rehoboth beach',
    'punch list repairs lewes de',
    'high end assembly sussex county',
    'door and window adjustments delaware beach house'
  ],
};

export default function HandymanAndRepairsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Skilled Handyman, Carpentry & High-End Assembly",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Elevated Property Care",
      "telephone": "+1-302-278-0938"
    },
    "description": "In-house precision carpentry, luxury furniture assembly, cabinetry tuning, and coastal home punch-list repairs for residential properties in coastal Delaware."
  };

  const servicesList = [
    {
      title: "High-End Furniture Assembly & Staging",
      tag: "Assembly & White-Glove Staging",
      description: "Extensive hands-on experience unboxing, assembling, and staging luxury designer furniture. We ensure meticulous care with delicate veneers, stone tops, and custom upholstery.",
      items: [
        "Restoration Hardware, Pottery Barn, Arhaus, Serena & Lily & CB2 assembly",
        "Large modular sectionals, designer bed frames & complex dining tables",
        "Luxury outdoor patio sets, teak loungers & heavy-gauge umbrellas",
        "Surface protection during assembly, precision leveling & debris haul-away"
      ]
    },
    {
      title: "Cabinetry & Furniture Adjustments",
      tag: "Millwork & Fine Tuning",
      description: "Coastal humidity swings cause fine millwork and cabinetry to shift over time. We fine-tune and align hinges, drawer glides, and architectural built-ins for flawless operation.",
      items: [
        "Kitchen and bathroom vanity cabinet door realignment",
        "European soft-close hinge calibration and tension adjustment",
        "Drawer glide leveling, realignment, and soft-close mechanism repair",
        "Custom floating shelf installation, closet systems & built-in shelving"
      ]
    },
    {
      title: "Door, Lock & Window Precision Adjustments",
      tag: "Access & Weather Defense",
      description: "Salt air, moisture, and seasonal thermal swings cause coastal doors and windows to stick, bind, or fail to seal. We restore smooth gliding, secure latching, and tight seals.",
      items: [
        "Planing and adjusting sticking interior and exterior doors",
        "Hinge lubrication, tightening, and brass/stainless hinge replacement",
        "Smart deadbolt, keyless entry keypad, and mortise lock installation",
        "Sliding glass door track cleanout, roller realignment & weatherstripping replacement",
        "Window sash adjustments, locking hardware repair & screen restoration"
      ]
    },
    {
      title: "Bathroom Hardware & Fixture Installation",
      tag: "Fixtures & Accents",
      description: "Upgrading or replacing bath accessories requires clean, secure mounting into drywall, tile, or studs without damaging expensive coastal tile work or stone.",
      items: [
        "Designer towel bars, towel rings, and heated towel racks",
        "Tissue holders, double robe hooks, and accessory shelving",
        "Heavy-duty ADA-compliant grab bars anchored securely into blocking",
        "Vanity mirror mounting, cabinet pull upgrades & vanity hardware swaps"
      ]
    },
    {
      title: "Architectural Hardware & Fixture Upgrades",
      tag: "Hardware & Trim",
      description: "From updating all interior door handles to hanging high-end window treatments, we ensure every element is aligned, secure, and cosmetically seamless.",
      items: [
        "Kitchen cabinet knobs, pulls, and edge-pull installation with precision jig templates",
        "Interior passage, privacy, and dummy lever set replacements",
        "Curtain rods, custom drapery tracks & blind hanging with laser-level accuracy",
        "Crown molding touch-ups, baseboard caulking & architectural trim repairs"
      ]
    },
    {
      title: "Wall Mounts, Heavy Art & Electronics",
      tag: "Precision Mounting",
      description: "Protecting valuable coastal art, mirrors, and displays with professional-grade wall anchors and stud-fastened brackets.",
      items: [
        "Heavy decorative mirrors, oversized framed art & gallery wall arrangements",
        "Ultra-slim TV wall mounting with clean in-wall wire concealment kits",
        "Soundbar, Sonos speaker mounts & smart home device mounting",
        "Drop-cloth floor protection and HEPA vacuum cleanup after all drilling"
      ]
    },
    {
      title: "Drywall, Touch-Up Painting & Surface Care",
      tag: "Cosmetic Repairs",
      description: "Beach homes naturally experience settling cracks, luggage scuffs, and minor drywall dents from seasonal family and guest use.",
      items: [
        "Drywall puncture patching, settling hairline crack taping & smooth texture matching",
        "Spot primer and precision paint touch-ups on walls, doors, and trim",
        "Baseboard, countertop, and backsplash silicone/caulk renewal",
        "Minor water stain remediation and sealing on ceilings and millwork"
      ]
    },
    {
      title: "Exterior Coastal Punch Lists & General Help",
      tag: "Exterior & Grounds",
      description: "Essential handyman maintenance to keep decks, outdoor showers, and entryways safe, sound, and ready for every season.",
      items: [
        "Loose deck board fastening, exterior railing tightening & screw replacement",
        "Outdoor shower fixture repairs, hose bib bracket securing & wand replacements",
        "Exterior gate latch adjustment, heavy-duty drop-rod installations & fence fixes",
        "Targeted entryway, stair, and patio pressure washing and salt residue removal"
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
              Handyman, Carpentry & High-End Assembly
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Highly skilled, experienced in-house craftsmanship and technical maintenance tailored specifically for luxury coastal Delaware residences.
            </p>

            {/* Quality Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Highly Skilled & Experienced Craft
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Exclusive Preferred Rates for Retained Clients
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ White-Glove High-End Furniture Assembly
              </span>
            </div>
          </div>
        </section>

        {/* The Client Advantage / Pricing Philosophy Card */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-sand-50 p-8 sm:p-10 rounded-2xl border border-sand-300 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sand-200 pb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-coastal-700">
                  Our Service Model
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Fair, Affordable Rates as an Exclusive Client Perk
                </h2>
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-coastal-900 text-sand-100 text-xs font-semibold tracking-wide uppercase">
                Annual Client Benefit
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700 leading-relaxed">
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Designed for Our Retained Homeowners
                </h3>
                <p>
                  Luxury beach properties constantly develop punch-list tasks—doors sticking from summer humidity, new designer furniture arriving, cabinet hinges loosening, or bathroom hardware needing replacement.
                </p>
                <p>
                  Rather than forcing homeowners to search for, vet, and wait on outside contractors, we intentionally keep our in-house handyman, carpentry, and assembly rates <strong className="text-coastal-950 font-semibold">exceptionally fair and affordable</strong>. It is structured as an exclusive perk and core benefit of having an annual property care agreement with Elevated Property Care.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Standalone / Non-Contract Policy
                </h3>
                <p>
                  Because our primary commitment is always to the homes under our annual management, clients who do not maintain an annual care agreement with Elevated Property Care pay higher standard rates for handyman, carpentry, and assembly services, subject to our scheduling availability.
                </p>
                <div className="p-4 bg-sand-100/70 rounded-xl border border-sand-200 text-xs text-slate-600">
                  <span className="font-semibold text-slate-900 block mb-1">Why this matters:</span>
                  You enjoy trusted, familiar property managers who already know your home’s floor plan, shutoff valves, and finish materials—tackling your projects promptly at a preferred rate with zero compromise on craftsmanship.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services Grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest text-coastal-700 uppercase">
              Our Craft & Capabilities
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
              Skilled In-House Handyman & Carpentry Services
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              From delicate designer assembly to architectural millwork adjustments, we handle the technical punch-list tasks that keep your beach retreat in pristine condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md hover:border-coastal-300 transition duration-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-coastal-600 bg-coastal-50 px-2.5 py-1 rounded-md border border-coastal-100">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-3 border-t border-sand-100 text-xs text-slate-700">
                  {service.items.map((item, itemIdx) => (
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

        {/* Why Choose In-House Assistance Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-coastal-950 text-white p-8 sm:p-12 rounded-3xl space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-sand-300">
                The Elevated Standard
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                Why Our In-House Approach Outperforms Outside Contractors
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-300">
              <div className="space-y-2 bg-white/5 p-5 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-base">We Know Your Home</h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  Because we conduct routine home checks, we already know where every shutoff valve, circuit breaker, and touch-up paint can is stored.
                </p>
              </div>

              <div className="space-y-2 bg-white/5 p-5 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-base">White-Glove Respect</h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  We use protective shoe covers, clean moving blankets, and HEPA vacuums. Your hardwood floors, custom stonework, and delicate surfaces remain completely unblemished.
                </p>
              </div>

              <div className="space-y-2 bg-white/5 p-5 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-base">No Exorbitant Minimums</h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  Outside trade contractors often refuse small tasks or charge steep half-day minimums. We readily resolve both 15-minute quick adjustments and multi-day assembly projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mindset Pull-Quote */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sand-100 via-sand-50 to-sand-100 border border-sand-300 p-6 sm:p-8 text-center shadow-sm">
            <span className="text-sand-400 font-serif text-5xl sm:text-6xl block leading-none select-none opacity-40">“</span>
            <blockquote className="font-serif italic text-base sm:text-xl text-slate-900 max-w-2xl mx-auto leading-snug -mt-3">
              Your time is your life. The two are inseparable. To waste your time is to waste your life, but to master your time is to master your life.
            </blockquote>
            <cite className="block text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-coastal-700 mt-2.5 not-italic">
              — Alan Lakein
            </cite>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-sand-100 p-10 sm:p-14 rounded-2xl border border-sand-300 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Have a Punch List or New Furniture Arriving?
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Explore how an annual property care agreement gives you priority access to our skilled in-house carpentry, assembly, and handyman services at preferred client rates.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/annual-estimate"
                className="bg-coastal-900 hover:bg-coastal-950 text-white font-semibold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-sm transition"
              >
                Explore Annual Care Plans
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-sand-50 text-coastal-900 border border-sand-300 font-semibold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition"
              >
                Inquire About a Project
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
