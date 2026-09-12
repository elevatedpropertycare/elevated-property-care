import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative bg-coastal-950 text-white min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Stock Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transform transition duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coastal-950 via-coastal-950/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-coastal-800/80 border border-sand-400/30 px-3.5 py-1.5 rounded-full text-sand-200 text-xs font-medium tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Dedicated Home & Property Care In Coastal Delaware</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight text-balance">
              Delaware’s Premier Luxury Beach Property Care & Absentee Home Watch
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl text-balance">
              Unrivaled property care, routine home checks, professional and timely preventative maintenance across Sussex County’s beach communities. Dedicated asset protection and full-service routine service execution and quality control.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/annual-estimate"
                className="bg-sand-400 hover:bg-sand-300 text-coastal-950 font-semibold px-8 py-4 rounded-xl text-center text-sm uppercase tracking-wider shadow-lg transition duration-200"
              >
                Explore Home Watch Plans
              </Link>
              <Link
                href="/annual-estimate#walkthrough-form"
                className="border border-white/40 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-xl text-center text-sm uppercase tracking-wider backdrop-blur-sm transition duration-200"
              >
                Schedule Walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE ELEVATED ADVANTAGE (4 PILLARS) */}
      <section className="bg-white py-16 sm:py-20 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-semibold tracking-widest text-coastal-600 uppercase">Convenience • Transparency • Protection</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Effortless Ownership. Complete Peace of Mind.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Owning a multi-million dollar beach house in Sussex County is impressive, and it should be a source of relaxation and enjoyment, not friction and a part time job chasing vendors on weekends. We serve as your dedicated professional advocate on the ground, so you can use your beach house as intended - relaxing!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-sand-50/70 p-6 rounded-xl border border-sand-200 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-coastal-100 flex items-center justify-center text-coastal-800 font-bold mb-4">01</div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">One Contact</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                No call centers or outsourced dispatchers. One professional contact representing your exact standards. Available when needed, and genuinely happy to assist.
              </p>
            </div>

            <div className="bg-sand-50/70 p-6 rounded-xl border border-sand-200 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-coastal-100 flex items-center justify-center text-coastal-800 font-bold mb-4">02</div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">One Monthly Invoice</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We carefully check and reconcile all routine maintenance vendor invoices and repairs into a single transparent, itemized monthly bill invoiced in arrears.
              </p>
            </div>

            <div className="bg-sand-50/70 p-6 rounded-xl border border-sand-200 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-coastal-100 flex items-center justify-center text-coastal-800 font-bold mb-4">03</div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">One Warrantor</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                The buck stops with us. We stand behind all services we manage and direct-bill, ensuring quality control, licensed vendor coverage, and 100% satisfaction.
              </p>
            </div>

            </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SHOWCASE */}
      <section className="bg-sand-100 py-16 sm:py-20 border-b border-sand-300">
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
              <div className="h-48 bg-cover bg-center bg-sand-200" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')" }} />
              <div className="p-6 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Property Reviews (Home Watch)</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  The cornerstone of our model. Structured bi-weekly interior and exterior inspections designed to identify subtle coastal failures before they escalate into costly damage.
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
              <div className="h-48 bg-cover bg-center bg-sand-200" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80')" }} />
              <div className="p-6 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Preventative Maintenance</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Running plumbing traps to prevent sewer gas infiltration, cycling HVAC and dehumidification units against salt-air seizure, and comprehensive freeze defense.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/services/preventative-maintenance" className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Learn About System Cycling →
                </Link>
              </div>
            </div>

            {/* Card 3: Furniture assembly, hardware installation */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-sand-200 flex flex-col justify-between">
              <div className="h-48 bg-cover bg-center bg-sand-200" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=800&q=80')" }} />
              <div className="p-6 flex-grow space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">Furniture assembly, hardware installation</h3>
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
              <div className="h-48 bg-cover bg-center bg-sand-200" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=800&q=80')" }} />
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
              <div className="h-48 bg-cover bg-center bg-sand-200" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80')" }} />
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
              <div className="h-48 bg-cover bg-center bg-sand-200" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=800&q=80')" }} />
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

      {/* 4. NON-ROUTINE JOBS, REPAIRS & CONSTRUCTION PROJECT MANAGEMENT */}
      <section className="bg-sand-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-coastal-700">
              High-End Construction & Trade Project Management
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Skilled Repairs, Construction Oversight & Home Improvements
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
              With deep expertise in luxury coastal construction, custom carpentry, and complex mechanical systems, Elevated Property Care manages, oversees, and executes residential projects of any scope—from precision punch lists to transformative renovations.
            </p>
          </div>

          {/* Capabilities Grid - 2 Cards Perfectly Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-sand-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-coastal-900 text-sand-300 flex items-center justify-center font-bold text-lg">
                🔨
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">In-House Repairs</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Skilled finish carpentry, cabinetry adjustments, furniture assembly, door and lock hardware tuning, deck repairs and maintenance handled in-house
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-sand-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-coastal-900 text-sand-300 flex items-center justify-center font-bold text-lg">
                📐
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">Major Improvements & Renovations</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Planning a bathroom remodel, outdoor kitchen, composite decking upgrade, or dual-fuel HVAC replacement? We leverage trusted trade relationships to source, bid, and manage licensed sub-contractors on your behalf.
              </p>
            </div>
          </div>

          {/* Transparent Management Fee Structure */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-300 shadow-md">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  Transparent Pricing: Routine vs. Non-Routine Work
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
                  We believe in total upfront clarity regarding fees. You always know exactly how work is priced before any tool touches your home.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 space-y-3">
                  <div className="inline-block bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    Routine Contract Services
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-900">0% Management Fee</h4>
                  <p className="text-slate-700 text-xs leading-relaxed">
                    All services included on your agreed Annual Care plan (home checks, scheduled preventative maintenance, pool/lawn care) carry zero management fee surcharge.
                  </p>
                </div>

                <div className="bg-coastal-50/70 border border-coastal-200 rounded-2xl p-6 space-y-3">
                  <div className="inline-block bg-coastal-900 text-sand-300 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    Non-Routine Jobs & Trade Projects
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-900">15% Management & Admin Fee</h4>
                  <p className="text-slate-700 text-xs leading-relaxed">
                    For unscheduled repairs, ad-hoc trade work, emergency dispatch, and custom improvement projects outside your annual plan, a transparent <strong>15% Management and Administration Fee</strong> applies to the trade invoice. No non-routine work is ever started without your explicit written approval.
                  </p>
                </div>
              </div>

              <div className="text-center pt-2 text-xs text-slate-500">
                Every project includes contractor COI verification, milestone photo updates, and consolidated monthly invoice reconciliation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TAILORED ANNUAL CARE CONTRACT SHOWCASE (Replaces 3 static tiers) */}
      <section className="bg-coastal-950 text-white py-16 sm:py-24 border-t border-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sand-300">Predictable Annual Stewardship</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Tailored Annual Care Contract
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Rather than choosing from rigid, generic tiers, every home receives a tailored annual care contract built specifically around your property's square footage, mechanical layout, and personal usage schedule.
            </p>
          </div>

          <div className="bg-coastal-900/90 rounded-3xl p-8 sm:p-12 border-2 border-sand-400/80 max-w-4xl mx-auto shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-coastal-800">
              <div className="space-y-2 pt-4 md:pt-0">
                <span className="text-xs font-semibold text-sand-300 uppercase tracking-wider block">Step 01</span>
                <h3 className="font-serif text-lg font-bold text-white">Property Walkthrough</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We walk your property together (or via lockbox) to review mechanical configurations, shutoff valves, exterior exposures, and seasonal priorities.
                </p>
              </div>

              <div className="space-y-2 pt-6 md:pt-0 md:pl-8">
                <span className="text-xs font-semibold text-sand-300 uppercase tracking-wider block">Step 02</span>
                <h3 className="font-serif text-lg font-bold text-white">Custom Annual Contract</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You receive a customized annual plan outlining your scheduled home checks, seasonal preventative packages, and transparent monthly in-arrears billing.
                </p>
              </div>

              <div className="space-y-2 pt-6 md:pt-0 md:pl-8">
                <span className="text-xs font-semibold text-sand-300 uppercase tracking-wider block">Step 03</span>
                <h3 className="font-serif text-lg font-bold text-white">Effortless Living</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Enjoy your beach home without vendor friction or weekend chores. One dedicated point of contact, detailed digital reports, and complete peace of mind.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-coastal-800 text-center">
              <Link
                href="/annual-estimate#walkthrough-form"
                className="inline-block bg-sand-400 hover:bg-sand-300 text-coastal-950 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition shadow-lg"
              >
                Schedule Your Complimentary Property Walkthrough →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
