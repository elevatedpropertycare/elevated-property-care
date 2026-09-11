import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative bg-coastal-950 text-white min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Stock Image (Replaceable: Coastal Luxury Beach Estate) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transform transition duration-1000"
          style={{
            /* STOCK IMAGE: Replace with your custom high-res photography */
            backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coastal-950 via-coastal-950/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-coastal-800/80 border border-sand-400/30 px-3.5 py-1.5 rounded-full text-sand-200 text-xs font-medium tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Dedicated Home & Property Care In Coastal Delaware</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight text-balance">
              Delaware’s Premier Luxury Beach Property Care & Absentee Home Watch
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl text-balance">
              Unrivaled property care, routine home reviews, and preventative maintenance across Sussex County’s premier beach communities. Dedicated asset protection with zero rental commissions.
            </p>

            {/* Core Value Badges */}
            <div className="pt-2 flex flex-wrap gap-2 sm:gap-3 text-xs text-sand-200">
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded border border-white/15 whitespace-nowrap">✓ Structured 3-Tier Care Plans</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded border border-white/15 whitespace-nowrap">✓ In-Arrears Monthly Invoicing</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded border border-white/15 whitespace-nowrap">✓ Bi-Weekly Mechanical Audits</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded border border-white/15 whitespace-nowrap">✓ Delaware Licensed Contractor</span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="/annual-estimate"
                className="bg-sand-400 hover:bg-sand-300 text-coastal-950 font-semibold px-8 py-4 rounded text-center text-sm uppercase tracking-wider shadow-lg transition duration-200"
              >
                Explore Home Watch Plans
              </Link>
              <Link
                href="/annual-estimate#walkthrough-form"
                className="border border-white/40 hover:bg-white/10 text-white font-medium px-8 py-4 rounded text-center text-sm uppercase tracking-wider backdrop-blur-sm transition duration-200"
              >
                Schedule Walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE ELEVATED ADVANTAGE (4 PILLARS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-widest text-coastal-600 uppercase">Convenience • Transparency • Protection</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Effortless Ownership. Complete Peace of Mind.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Owning a multi-million dollar beach house in Sussex County should be a source of relaxation, not friction. We serve as your dedicated professional advocate on the ground.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-coastal-50 flex items-center justify-center text-coastal-800 font-bold mb-4">01</div>
            <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">One Contact</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Each client is assigned a dedicated Primary Property Manager. No call centers or outsourced dispatchers. One professional representing your exact standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-coastal-50 flex items-center justify-center text-coastal-800 font-bold mb-4">02</div>
            <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">One Monthly Invoice</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We reconcile all routine maintenance vendors into a single transparent, itemized monthly bill invoiced in arrears. Zero surprise charges or scattered contractor receipts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-coastal-50 flex items-center justify-center text-coastal-800 font-bold mb-4">03</div>
            <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">One Warrantor</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              The buck stops with us. We stand behind all services we manage and direct-bill, ensuring quality control, licensed vendor coverage, and 100% satisfaction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-coastal-50 flex items-center justify-center text-coastal-800 font-bold mb-4">04</div>
            <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Zero Markup on Routine Care</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We negotiate volume commercial rates with trusted local vendors. We pass those savings directly to you with 0% management fee on all scheduled annual contract care.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SHOWCASE */}
      <section className="bg-sand-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-coastal-600 uppercase">Tailored Service Lines</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                Comprehensive Care for Coastal Assets
              </h2>
            </div>
            <Link href="/annual-estimate" className="text-coastal-800 hover:text-coastal-950 font-semibold text-sm flex items-center">
              View All Home Watch Tiers & Pricing →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Property Reviews */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded">From $45/visit</div>
              </div>
              <div className="p-6 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Property Reviews (Home Watch)</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  The cornerstone of our model. Structured weekly or bi-weekly interior and exterior inspections designed to identify subtle coastal failures before they escalate.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/services/property-reviews" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  View Checklist & Sample Report →
                </Link>
              </div>
            </div>

            {/* Card 2: Preventative Maintenance */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded">System Cycling</div>
              </div>
              <div className="p-6 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Preventative Maintenance</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Running plumbing traps to prevent sewer gas infiltration, cycling HVAC and dehumidification units against salt-air seizure, and winterization oversight.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/services/preventative-maintenance" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Learn About System Cycling →
                </Link>
              </div>
            </div>

            {/* Card 3: Handyman & Carpentry */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded">0/hr Flat Labor</div>
              </div>
              <div className="p-6 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Handyman & Skilled Carpentry</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Custom carpentry, punch list repairs, furniture assembly, paint touch-ups, and hardware adjustments handled in-house with full rate transparency.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/services/handyman-and-repairs" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Explore Handyman Rates →
                </Link>
              </div>
            </div>

            {/* Card 4: Landscaping Oversight */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded">Vendor QC</div>
              </div>
              <div className="p-6 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Landscaping & Exterior Care</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Overseeing landscape contractors to ensure adherence to coastal plant health, mulch replenishment, irrigation monitoring, and seasonal cleanups.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/services/landscaping-care" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Quality Control Standards →
                </Link>
              </div>
            </div>

            {/* Card 5: Pool and Spa */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded">Water Quality</div>
              </div>
              <div className="p-6 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Pool & Spa Coordination</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Auditing vendor chemical balances, ensuring filter cycles run properly, and coordinating winterization covers and spring openings.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/services/pool-and-spa-care" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Pool Maintenance Oversight →
                </Link>
              </div>
            </div>

            {/* Card 6: Concierge & Storm Prep */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute top-3 right-3 bg-coastal-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded">365 Response</div>
              </div>
              <div className="p-6 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Concierge & Storm Response</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Discreet package management, keyholder access for third-party trades, pre-storm patio furniture tie-downs, and immediate post-storm damage assessments.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/services/concierge" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Concierge Support Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3B. ASSET PRESERVATION & SELF-MANAGING RENTAL PARTNERSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-coastal-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-coastal-800 shadow-xl overflow-hidden relative">
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 mb-12">
            <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
              Our Operating Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              An Investment in Property Value — Not a Rental Commission Model
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Most local property management companies focus on booking volume, guest turnovers, and taking 20% to 30% cuts of your rental revenue. Our model is fundamentally different: pure, uncompromising asset stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Pillar 1: Why Caretaking Pays for Itself */}
            <div className="bg-coastal-900/90 rounded-2xl p-8 border border-coastal-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sand-400/20 text-sand-300 flex items-center justify-center font-serif text-xl font-bold">
                  01
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Preserving & Appreciating Property Value
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  We are not here to squeeze rental profit out of your home. Our mission is to keep your property in the absolute best shape possible. Regular property care and proactive maintenance is an investment that preserves and elevates market value.
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Our service directly pays for itself: catching minor leaks, electrical faults, salt-air HVAC corrosion, and storm vulnerabilities before they turn into tens of thousands of dollars in emergency damage and costly downtime.
                </p>
              </div>
              <div className="pt-4 border-t border-coastal-800 text-sand-300 text-xs font-medium">
                ✓ 100% focused on home longevity & structural health
              </div>
            </div>

            {/* Pillar 2: Self-Managing Rental Owners */}
            <div className="bg-coastal-900/90 rounded-2xl p-8 border border-coastal-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center font-serif text-xl font-bold">
                  02
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Self-Managing Your Rentals? Keep 100% of Your Revenue
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Homeowners who manage their own Airbnb, VRBO, or direct bookings find our service invaluable. You focus on guest bookings and enjoy collecting 100% of your rental revenue—we take zero commission on your rental earnings.
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  We handle the on-the-ground property demands: structured pre-rental readiness checks, post-checkout damage walkthroughs, prompt handyman repairs, and reliable tenant or owner assistance during emergencies.
                </p>
              </div>
              <div className="pt-4 border-t border-coastal-800 text-emerald-300 text-xs font-medium">
                ✓ Zero commission splits • Professional on-the-ground support
              </div>
            </div>
          </div>

          <div className="mt-12 text-center relative z-10">
            <Link
              href="/services/property-reviews"
              className="inline-block bg-sand-400 hover:bg-sand-300 text-coastal-950 font-semibold px-8 py-3.5 rounded text-xs uppercase tracking-wider transition"
            >
              Explore Our Property Review Checklists →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. GEOGRAPHIC COVERAGE (LOCAL SILOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-widest text-coastal-600 uppercase">Sussex County Coastal Footprint</span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Tailored Local Care Across Delaware Beaches</h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Every beach community has unique exposure to wind-driven salt air, coastal flooding, and seasonal temperature swings. Click below to explore our hyper-local care plans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/locations/rehoboth-beach" className="group block bg-white rounded-xl p-6 border border-sand-200 shadow-sm hover:border-coastal-500 hover:shadow-md transition">
            <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-coastal-700 transition">Rehoboth Beach</h3>
            <p className="text-slate-500 text-xs mt-2">The Pines, Country Club Estates, North Shores, and Henlopen Acres home care.</p>
            <span className="inline-block mt-4 text-xs font-semibold text-coastal-800 group-hover:translate-x-1 transition">View Rehoboth Services →</span>
          </Link>

          <Link href="/locations/bethany-beach" className="group block bg-white rounded-xl p-6 border border-sand-200 shadow-sm hover:border-coastal-500 hover:shadow-md transition">
            <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-coastal-700 transition">Bethany Beach</h3>
            <p className="text-slate-500 text-xs mt-2">Sea Colony, North Bethany oceanfronts, and South Bethany canal home maintenance.</p>
            <span className="inline-block mt-4 text-xs font-semibold text-coastal-800 group-hover:translate-x-1 transition">View Bethany Services →</span>
          </Link>

          <Link href="/locations/lewes" className="group block bg-white rounded-xl p-6 border border-sand-200 shadow-sm hover:border-coastal-500 hover:shadow-md transition">
            <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-coastal-700 transition">Lewes</h3>
            <p className="text-slate-500 text-xs mt-2">Historic District, Pilottown Village, Cape Shores, and bayfront property protection.</p>
            <span className="inline-block mt-4 text-xs font-semibold text-coastal-800 group-hover:translate-x-1 transition">View Lewes Services →</span>
          </Link>

          <Link href="/locations/fenwick-island" className="group block bg-white rounded-xl p-6 border border-sand-200 shadow-sm hover:border-coastal-500 hover:shadow-md transition">
            <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-coastal-700 transition">Fenwick Island</h3>
            <p className="text-slate-500 text-xs mt-2">Bayside, oceanfront, and barrier island piling, plumbing, and bulkheading reviews.</p>
            <span className="inline-block mt-4 text-xs font-semibold text-coastal-800 group-hover:translate-x-1 transition">View Fenwick Services →</span>
          </Link>
        </div>
      </section>

      {/* 5. 3-TIER HOME WATCH & STEWARDSHIP PLANS SHOWCASE */}
      <section className="bg-coastal-950 text-white py-20 border-t border-coastal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sand-300">Transparent Monthly Care Plans</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Delaware Beach Home Watch & Stewardship Tiers
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Predictable, structured plans for absentee coastal homeowners. Billed monthly in arrears with banked review credits when you are in residence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-md lg:max-w-none mx-auto">
            {/* Tier 1 */}
            <div className="bg-coastal-900/90 rounded-2xl p-6 border border-coastal-700 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-semibold text-sand-300 uppercase tracking-wider">Essential Watch</div>
                <div className="flex items-baseline space-x-2">
                  <span className="font-serif text-4xl font-bold text-white">$165</span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  1x monthly inspection, Account & Vendor Administration, keyholder custody, and photographic digital reports.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-coastal-800">
                  <li>✓ 12 Comprehensive Reviews / Year</li>
                  <li>✓ Keyholder & Managed Access</li>
                  <li>✓ Vendor COI & License Auditing</li>
                  <li>✓ Invoiced Monthly in Arrears</li>
                </ul>
              </div>
              <Link
                href="/annual-estimate"
                className="block w-full py-3 rounded-xl text-center text-xs uppercase tracking-wider font-semibold bg-coastal-800 hover:bg-coastal-700 text-white border border-coastal-600 transition"
              >
                View Essential Plan
              </Link>
            </div>

            {/* Tier 2 */}
            <div className="bg-coastal-900 rounded-2xl p-6 border-2 border-sand-400 relative flex flex-col justify-between space-y-6 shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sand-400 text-coastal-950 text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full">
                Most Popular Flagship
              </div>
              <div className="space-y-4">
                <div className="text-xs font-semibold text-sand-300 uppercase tracking-wider">Coastal Stewardship</div>
                <div className="flex items-baseline space-x-2">
                  <span className="font-serif text-4xl font-bold text-white">$295</span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Bi-weekly year-round reviews (summer mechanical audits + winter freeze checks) + 2 free concierge liaisons.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-coastal-800">
                  <li>✓ 26 Bi-Weekly Reviews / Year</li>
                  <li>✓ Summer HVAC & Dehumidifier Audits</li>
                  <li>✓ Winter Freeze & Pipe Protection</li>
                  <li>✓ 2 Included Concierge Liaisons / Year</li>
                  <li>✓ Priority Emergency Dispatch</li>
                </ul>
              </div>
              <Link
                href="/annual-estimate"
                className="block w-full py-3 rounded-xl text-center text-xs uppercase tracking-wider font-bold bg-sand-400 hover:bg-sand-300 text-coastal-950 transition shadow-md"
              >
                View Stewardship Plan
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="bg-coastal-900/90 rounded-2xl p-6 border border-coastal-700 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-semibold text-sand-300 uppercase tracking-wider">Executive Care</div>
                <div className="flex items-baseline space-x-2">
                  <span className="font-serif text-4xl font-bold text-white">$445</span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Weekly in off-season (24 checks) + bi-weekly in summer (12 checks) + post-storm sweeps + 4 liaisons.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-coastal-800">
                  <li>✓ 36 Total Reviews / Year</li>
                  <li>✓ Weekly Winter Freeze Defense</li>
                  <li>✓ Guaranteed Post-Storm Sweeps</li>
                  <li>✓ 4 Included Concierge Liaisons / Year</li>
                  <li>✓ Priority Project Scheduling</li>
                </ul>
              </div>
              <Link
                href="/annual-estimate"
                className="block w-full py-3 rounded-xl text-center text-xs uppercase tracking-wider font-semibold bg-coastal-800 hover:bg-coastal-700 text-white border border-coastal-600 transition"
              >
                View Executive Plan
              </Link>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/annual-estimate#walkthrough-form"
              className="inline-block bg-sand-400 hover:bg-sand-300 text-coastal-950 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition shadow-lg"
            >
              Schedule Your Complimentary Property Walkthrough →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
