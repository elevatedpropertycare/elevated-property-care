"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function HomeWatchPlansPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedTier, setSelectedTier] = useState<string>('stewardship');
  const [town, setTown] = useState('Bethany Beach');
  const [submitted, setSubmitted] = useState(false);

  const tiers = [
    {
      id: 'essential',
      name: 'Essential Watch',
      tagline: 'Baseline Peace of Mind',
      description: 'Ideal for frequent visitors or low-complexity beach properties seeking dependable keyholder security and monthly oversight.',
      monthlyPrice: 165,
      annualPrice: 1980,
      popular: false,
      features: [
        '1x Monthly Comprehensive Property Review (12 visits/yr)',
        'Full interior & exterior digital report with date-stamped photos',
        'Account & Vendor Administration ($90/mo value included)',
        'Secure keyholder custody and managed property access',
        'Trade vendor insurance (COI) & license compliance auditing',
        'Local contact listing for alarm monitoring & incident escalation',
        'Banked Review Credit policy (reschedule when you are in town)',
        'Billed monthly in arrears strictly for services rendered',
      ],
      reviewsText: '12 Reviews / Year'
    },
    {
      id: 'stewardship',
      name: 'Coastal Stewardship',
      tagline: 'Our Most Popular Flagship Plan',
      description: 'Engineered specifically for absentee owners of $2M–$4M coastal homes requiring proactive year-round mechanical and security defense.',
      monthlyPrice: 295,
      annualPrice: 3540,
      popular: true,
      features: [
        'Bi-Weekly Year-Round Property Reviews (26 visits/yr)',
        'In-Season Summer Mechanical Audits (HVAC load, dehumidifiers, moisture)',
        'Off-Season Winter Freeze Audits (pipe integrity, heat check, storm surge)',
        'Account & Vendor Administration ($90/mo value included)',
        '2 Included Concierge & Vendor Access Liaisons annually ($120 value)',
        'Secure keyholder custody and access management',
        'Vendor insurance auditing & consolidated monthly billing',
        'Priority emergency contractor dispatch with partner trades',
        'Banked Review Credit policy (convert skipped reviews to credits)',
        'Billed monthly in arrears with itemized accounting',
      ],
      reviewsText: '26 Reviews / Year (Every 2 Weeks)'
    },
    {
      id: 'executive',
      name: 'Executive Care',
      tagline: 'Maximum Protection & Priority',
      description: 'High-touch, intensive stewardship for oceanfront homes, high-complexity systems, or remote owners demanding maximum oversight.',
      monthlyPrice: 445,
      annualPrice: 5340,
      popular: false,
      features: [
        '36 Comprehensive Property Reviews / Year',
        'Weekly Reviews in Off-Season (Nov–Apr: 24 weekly inspections)',
        'Bi-Weekly Reviews in Summer (May–Oct: 12 bi-weekly inspections)',
        'Account & Vendor Administration ($90/mo value included)',
        '4 Included Concierge & Vendor Access Liaisons annually ($240 value)',
        'Guaranteed Post-Storm Property Sweeps within 24 hours of severe coastal weather',
        'Dedicated Primary Property Manager',
        'Priority scheduling for all handyman, carpentry, and repair projects',
        'Full vendor management with zero routine trade markup',
        'Billed monthly in arrears with flexible cancellation credits',
      ],
      reviewsText: '36 Reviews / Year (Weekly in Winter / Bi-Weekly in Summer)'
    }
  ];

  const maintenanceAddons = [
    { name: 'Annual Smoke & CO Detector Sweep', price: '$95/yr', desc: 'Spring testing, full battery replacement across all sensors, and date audit.' },
    { name: 'Dryer Duct Safety Cleaning', price: '$125/yr', desc: 'Full lint cleanout from dryer to exterior vent to reduce fire risk and boost efficiency.' },
    { name: 'Outdoor Shower & Spigot Winterization', price: '$175/yr', desc: 'Fall blowout, line draining, and valve shut-off to prevent freeze-burst catastrophes.' },
    { name: 'Seasonal Furniture Staging & Storage', price: 'T&M ($130 1st hr)', desc: 'Spring patio setup and fall wrap/secure storage by our 2-person crew.' },
  ];

  const planSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Elevated Property Care - Coastal Delaware Home Watch Plans",
    "description": "Transparent, structured absentee home watch and coastal property management plans for Bethany Beach, Rehoboth Beach, Lewes, and Fenwick Island.",
    "brand": {
      "@type": "Brand",
      "name": "Elevated Property Care"
    },
    "offers": tiers.map(tier => ({
      "@type": "Offer",
      "name": tier.name,
      "price": tier.monthlyPrice.toString(),
      "priceCurrency": "USD",
      "unitText": "MONTH",
      "description": tier.description
    }))
  };

  return (
    <>
      <SchemaMarkup data={planSchema} />

      <div className="w-full pb-20 overflow-hidden">
        {/* Hero Section - Flushes cleanly against navbar with zero white gap */}
        <section className="relative bg-coastal-950 text-white pt-8 pb-10 sm:pt-14 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-coastal-900/40 via-coastal-950 to-coastal-950" />
          
          <div className="relative max-w-5xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 bg-coastal-800/90 border border-sand-400/30 px-3.5 py-1.5 rounded-full text-sand-200 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Coastal Delaware Absentee Home Watch</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight text-balance">
              Transparent Home Watch & Coastal Stewardship Plans
            </h1>
            
            <p className="text-slate-300 text-xs sm:text-base sm:leading-relaxed max-w-3xl mx-auto font-light text-balance">
              Structured, predictable property care tailored for absentee beach homeowners in Bethany Beach, Rehoboth Beach, Lewes, and Fenwick Island. Billed monthly in arrears with zero surprise markups.
            </p>

            {/* Segmented Billing Control - Unified Pill: Never wraps or breaks on mobile */}
            <div className="pt-2 flex justify-center">
              <div className="inline-flex items-center p-1 bg-coastal-900/95 border border-coastal-700/80 rounded-xl shadow-inner max-w-xs sm:max-w-md w-full sm:w-auto justify-center">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    billingCycle === 'monthly'
                      ? 'bg-sand-400 text-coastal-950 font-bold shadow-md'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Monthly In Arrears
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-1.5 ${
                    billingCycle === 'annual'
                      ? 'bg-sand-400 text-coastal-950 font-bold shadow-md'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>Annual Plan</span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    billingCycle === 'annual'
                      ? 'bg-coastal-950 text-sand-300'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  }`}>
                    12-Mo
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Grid - Starts cleanly below the hero with zero empty black gap */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:-mt-6 lg:-mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-md lg:max-w-none mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? 'bg-white border-2 border-coastal-950 shadow-2xl scale-100 lg:-translate-y-2 z-10'
                    : 'bg-white border border-sand-200 shadow-md hover:shadow-lg'
                } p-6 sm:p-8`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-coastal-950 text-sand-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    Most Popular Across Sussex Beaches
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-semibold text-coastal-600 uppercase tracking-wider">
                      {tier.tagline}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                      {tier.name}
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="border-y border-sand-200 py-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-coastal-950">
                        ${billingCycle === 'monthly' ? tier.monthlyPrice : tier.annualPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {billingCycle === 'monthly' ? '/ month' : '/ year'}
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-1">
                      {tier.reviewsText} • Billed monthly in arrears
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block">
                      Plan Specifications & Inclusions:
                    </span>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <svg className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6 sm:pt-8 mt-6 border-t border-sand-100">
                  <a
                    href="#walkthrough-form"
                    onClick={() => setSelectedTier(tier.id)}
                    className={`block w-full py-3.5 px-4 rounded-xl text-center text-xs uppercase tracking-wider font-bold transition shadow-sm ${
                      tier.popular
                        ? 'bg-coastal-900 hover:bg-coastal-950 text-white shadow-coastal-900/20'
                        : 'bg-sand-100 hover:bg-sand-200 text-coastal-950 border border-sand-300'
                    }`}
                  >
                    Request On-Site Walkthrough
                  </a>
                  <div className="text-[10px] text-center text-slate-400 mt-2">
                    Complimentary on-site mechanical walkthrough included
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Elevated Standard: Core Inclusions */}
        <section className="bg-sand-50 border-y border-sand-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 my-12 sm:my-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
                The Standard of Excellence in Every Plan
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Every Elevated Property Care membership includes our core operating principles designed to make beach homeownership convenient, simple, and rewarding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-coastal-900 text-sand-300 flex items-center justify-center font-serif text-lg font-bold">
                  1
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Banked Review Credits</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Visiting your beach house? If you or guests are in residence, simply notify us 48 hours in advance to skip a property review. Your review credit is preserved for future post-storm checks or liaison visits—you never lose money.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-coastal-900 text-sand-300 flex items-center justify-center font-serif text-lg font-bold">
                  2
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Account & Vendor Administration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Includes your dedicated Property Manager, secure keyholder custody, vendor COI and licensing verification, centralized digital service logs, and priority emergency trade dispatch.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-coastal-900 text-sand-300 flex items-center justify-center font-serif text-lg font-bold">
                  3
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Billed in Arrears</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Zero large upfront prepayments. We bill on the 1st of each month for services rendered during the preceding month, accompanied by full itemization and documentation for complete financial peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Routine Preventative Maintenance Packages (Add-on Menu) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16">
          <div className="border border-sand-200 bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 sm:space-y-8">
            <div className="border-b border-sand-200 pb-6 flex flex-col md:flex-row justify-between md:items-end gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-coastal-600">
                  Optional Preventative Maintenance Menu
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Proactive Home Health Packages
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  Add essential seasonal maintenance to your routine plan. Each service is performed by our licensed crew or certified specialists at agreed turnkey rates.
                </p>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Added directly to your monthly statement as scheduled
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {maintenanceAddons.map((addon, i) => (
                <div key={i} className="p-4 rounded-xl border border-sand-200 bg-sand-50/50 flex justify-between items-start space-x-4">
                  <div className="space-y-1">
                    <div className="font-semibold text-slate-900 text-sm">{addon.name}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{addon.desc}</div>
                  </div>
                  <div className="font-bold text-xs text-coastal-900 bg-white px-3 py-1.5 rounded-md border border-sand-200 whitespace-nowrap shadow-sm">
                    {addon.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Managed Trades Note */}
            <div className="bg-coastal-50 border border-coastal-200 p-5 sm:p-6 rounded-xl space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-coastal-950">
                Full-Service Managed Care Available:
              </h4>
              <p className="text-xs text-coastal-900 leading-relaxed">
                We also provide turnkey management for <strong>Landscaping & Lawn Care</strong>, <strong>Pool & Spa Maintenance</strong>, <strong>Irrigation Start/Winterization</strong>, and <strong>HVAC Biannual Contracts</strong>. These are custom-scoped based on your property’s exact layout during our initial walkthrough.
              </p>
            </div>
          </div>
        </section>

        {/* On-Site Walkthrough Lead Form */}
        <section id="walkthrough-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 scroll-mt-28">
          <div className="bg-coastal-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-6 sm:space-y-8">
            <div className="text-center space-y-2.5">
              <span className="text-xs uppercase tracking-widest text-sand-300 font-semibold">
                The Next Step in Asset Protection
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Schedule Your On-Site Property Walkthrough
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-light">
                Before delivering a formal agreement, we walk your home together to review mechanical systems, coastal exposure, and your seasonal schedule.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-900/60 border border-emerald-500/50 p-6 rounded-2xl text-center space-y-2">
                <h3 className="font-serif text-xl font-bold text-emerald-200">Walkthrough Request Received</h3>
                <p className="text-xs text-emerald-300 leading-relaxed max-w-md mx-auto">
                  Thank you! Eimantas Sakalauskas will contact you within 24 hours to coordinate a convenient time for your on-site property walkthrough.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Kevin Bloom"
                      className="w-full p-3 bg-coastal-900 border border-coastal-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sand-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="kevin@example.com"
                      className="w-full p-3 bg-coastal-900 border border-coastal-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sand-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="(302) 555-0199"
                      className="w-full p-3 bg-coastal-900 border border-coastal-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sand-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Property Municipality</label>
                    <select
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      className="w-full p-3 bg-coastal-900 border border-coastal-700 rounded-xl text-xs text-white focus:outline-none focus:border-sand-400"
                    >
                      <option value="Bethany Beach">Bethany Beach</option>
                      <option value="Rehoboth Beach">Rehoboth Beach</option>
                      <option value="Lewes">Lewes</option>
                      <option value="Fenwick Island">Fenwick Island</option>
                      <option value="South Bethany">South Bethany</option>
                      <option value="North Bethany">North Bethany</option>
                      <option value="Dewey Beach">Dewey Beach</option>
                      <option value="Ocean View / Millville">Ocean View / Millville</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Preferred Plan Tier</label>
                    <select
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="w-full p-3 bg-coastal-900 border border-coastal-700 rounded-xl text-xs text-white focus:outline-none focus:border-sand-400"
                    >
                      <option value="essential">Tier 1: Essential Watch ($165/mo)</option>
                      <option value="stewardship">Tier 2: Coastal Stewardship ($295/mo) - Recommended</option>
                      <option value="executive">Tier 3: Executive Care ($445/mo)</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Approximate Square Footage</label>
                    <input
                      type="text"
                      placeholder="e.g. 4,200 sq ft"
                      className="w-full p-3 bg-coastal-900 border border-coastal-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sand-400"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-sand-400 hover:bg-sand-300 text-coastal-950 font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition shadow-lg"
                  >
                    Schedule Complimentary Property Walkthrough
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    No obligation. We respect your privacy and never share homeowner contact details.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
