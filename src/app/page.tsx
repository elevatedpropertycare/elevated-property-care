import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative bg-coastal-950 text-white min-h-[80vh] flex items-center overflow-hidden">
        {/* Coastal Estate Hero Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity scale-105 transform transition duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coastal-950 via-coastal-950/85 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-coastal-900/90 border border-sand-400/30 px-3.5 py-1.5 rounded-full text-sand-200 text-xs font-medium tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Hamptons-Standard Property Care In Coastal Delaware</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              Delaware’s Premier Luxury Beach Property Management & Home Watch
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl text-balance">
              Unrivaled absentee caretaking, routine property reviews, and preventative maintenance across Sussex County’s premier beach communities. Absolute peace of mind for your vacation home.
            </p>

            {/* Value Trust Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5 text-xs text-sand-200">
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/15">✓ No Markup on Routine Care</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/15">✓ Transparent $50/hr Labor</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/15">✓ $45 Baseline Property Reviews</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/15">✓ 365 Days a Year Coverage</span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/annual-estimate"
                className="bg-sand-400 hover:bg-sand-300 text-coastal-950 font-bold px-8 py-4 rounded-lg text-center text-xs sm:text-sm uppercase tracking-wider shadow-lg transition duration-200"
              >
                Calculate Annual Estimate
              </Link>
              <Link
                href="/services/property-reviews"
                className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg text-center text-xs sm:text-sm uppercase tracking-wider backdrop-blur-sm transition duration-200"
              >
                Explore Property Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE ELEVATED ADVANTAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-widest text-coastal-600 uppercase">Convenience • Transparency • Protection</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Effortless Ownership. Complete Peace of Mind.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Owning a luxury beach house in Sussex County should be a source of relaxation, not friction. We serve as your dedicated professional advocate on the ground.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-10 h-10 rounded-xl bg-coastal-50 flex items-center justify-center text-coastal-800 font-bold text-sm">01</div>
            <h3 className="font-serif text-lg font-bold text-slate-900">One Contact</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Each client is assigned a dedicated Primary Property Manager. No call centers or outsourced dispatchers. One professional representing your exact standards.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-10 h-10 rounded-xl bg-coastal-50 flex items-center justify-center text-coastal-800 font-bold text-sm">02</div>
            <h3 className="font-serif text-lg font-bold text-slate-900">One Monthly Invoice</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We reconcile all routine maintenance vendors into a single transparent, itemized monthly bill invoiced in arrears. Zero surprise charges or scattered contractor receipts.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-10 h-10 rounded-xl bg-coastal-50 flex items-center justify-center text-coastal-800 font-bold text-sm">03</div>
            <h3 className="font-serif text-lg font-bold text-slate-900">One Warrantor</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              The buck stops with us. We stand behind all services we manage and direct-bill, ensuring quality control, licensed vendor coverage, and 100% satisfaction.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition space-y-3">
            <div className="w-10 h-10 rounded-xl bg-coastal-50 flex items-center justify-center text-coastal-800 font-bold text-sm">04</div>
            <h3 className="font-serif text-lg font-bold text-slate-900">Zero Markup on Routine Care</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We negotiate volume commercial rates with trusted local vendors. We pass those savings directly to you with 0% management fee on all scheduled annual contract care.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="bg-sand-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-coastal-600 uppercase">Tailored Service Lines</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                Comprehensive Care for Coastal Assets
              </h2>
            </div>
            <Link href="/annual-estimate" className="text-coastal-800 hover:text-coastal-950 font-semibold text-sm flex items-center">
              View All Services on Annual Estimate →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-52 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full">From $45/visit</div>
              </div>
              <div className="p-7 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Property Reviews (Home Watch)</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  The cornerstone of our model. Structured weekly or bi-weekly interior and exterior inspections designed to identify subtle coastal failures before they escalate.
                </p>
              </div>
              <div className="p-7 pt-0">
                <Link href="/services/property-reviews" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  View Checklist & Sample Report →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-52 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full">System Cycling</div>
              </div>
              <div className="p-7 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Preventative Maintenance</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Running plumbing traps to prevent sewer gas infiltration, cycling HVAC and dehumidification units against salt-air seizure, and winterization oversight.
                </p>
              </div>
              <div className="p-7 pt-0">
                <Link href="/services/preventative-maintenance" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Learn About System Cycling →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-52 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full">$50/hr Flat Labor</div>
              </div>
              <div className="p-7 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Handyman & Skilled Carpentry</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Custom carpentry, punch list repairs, furniture assembly, paint touch-ups, and hardware adjustments handled in-house with full rate transparency.
                </p>
              </div>
              <div className="p-7 pt-0">
                <Link href="/services/handyman-and-repairs" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Explore Handyman Rates →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-52 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full">Vendor QC</div>
              </div>
              <div className="p-7 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Landscaping & Exterior Care</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Overseeing landscape contractors to ensure adherence to coastal plant health, mulch replenishment, irrigation monitoring, and seasonal cleanups.
                </p>
              </div>
              <div className="p-7 pt-0">
                <Link href="/services/landscaping-care" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Quality Control Standards →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-52 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full">Water Quality</div>
              </div>
              <div className="p-7 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Pool & Spa Coordination</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Auditing vendor chemical balances, ensuring filter cycles run properly, and coordinating winterization covers and spring openings.
                </p>
              </div>
              <div className="p-7 pt-0">
                <Link href="/services/pool-and-spa-care" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Pool Maintenance Oversight →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-52 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full">365 Response</div>
              </div>
              <div className="p-7 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Concierge & Storm Response</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Discreet package management, keyholder access for third-party trades, pre-storm patio furniture tie-downs, and immediate post-storm damage assessments.
                </p>
              </div>
              <div className="p-7 pt-0">
                <Link href="/services/concierge" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Concierge Support Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GEOGRAPHIC COVERAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-widest text-coastal-600 uppercase">Sussex County Coastal Footprint</span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Tailored Local Care Across Delaware Beaches</h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Every beach community has unique exposure to wind-driven salt air, coastal flooding, and seasonal temperature swings. Click below to explore our hyper-local care plans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/locations/rehoboth-beach" className="group block bg-white rounded-2xl p-7 border border-sand-200 shadow-sm hover:border-coastal-500 hover:shadow-md transition">
            <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-coastal-700 transition">Rehoboth Beach</h3>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed">The Pines, Country Club Estates, North Shores, and Henlopen Acres estate oversight.</p>
            <span className="inline-block mt-4 text-xs font-semibold text-coastal-800 group-hover:translate-x-1 transition">View Rehoboth Services →</span>
          </Link>

          <Link href="/locations/bethany-beach" className="group block bg-white rounded-2xl p-7 border border-sand-200 shadow-sm hover:border-coastal-500 hover:shadow-md transition">
            <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-coastal-700 transition">Bethany Beach</h3>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed">Sea Colony, North Bethany oceanfronts, and South Bethany canal home maintenance.</p>
            <span className="inline-block mt-4 text-xs font-semibold text-coastal-800 group-hover:translate-x-1 transition">View Bethany Services →</span>
          </Link>

          <Link href="/locations/lewes" className="group block bg-white rounded-2xl p-7 border border-sand-200 shadow-sm hover:border-coastal-500 hover:shadow-md transition">
            <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-coastal-700 transition">Lewes</h3>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed">Historic District, Pilottown Village, Cape Shores, and bayfront property protection.</p>
            <span className="inline-block mt-4 text-xs font-semibold text-coastal-800 group-hover:translate-x-1 transition">View Lewes Services →</span>
          </Link>

          <Link href="/locations/fenwick-island" className="group block bg-white rounded-2xl p-7 border border-sand-200 shadow-sm hover:border-coastal-500 hover:shadow-md transition">
            <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-coastal-700 transition">Fenwick Island</h3>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed">Bayside, oceanfront, and barrier island piling, plumbing, and bulkheading reviews.</p>
            <span className="inline-block mt-4 text-xs font-semibold text-coastal-800 group-hover:translate-x-1 transition">View Fenwick Services →</span>
          </Link>
        </div>
      </section>

      {/* 5. INTERACTIVE ESTIMATE TEASER */}
      <section className="bg-coastal-950 text-white py-20 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-sand-300">Transparent Pricing In Coastal Delaware</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Calculate Your Home Care Estimate Online
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            We believe in total fiscal clarity. Use our interactive estimator to calculate anticipated costs for routine property reviews, seasonal winterization, and vendor management tailored to your specific square footage.
          </p>
          <div className="pt-4">
            <Link
              href="/annual-estimate"
              className="inline-block bg-sand-400 hover:bg-sand-300 text-coastal-950 font-bold px-8 py-4 rounded-lg text-xs sm:text-sm uppercase tracking-wider shadow-lg transition"
            >
              Launch Interactive Estimate Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
