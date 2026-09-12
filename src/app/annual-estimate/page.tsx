"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function AnnualCarePlanPage() {
  const [town, setTown] = useState('Bethany Beach');
  const [usage, setUsage] = useState('Personal Second Home / Vacation Retreat');
  const [submitted, setSubmitted] = useState(false);

  const maintenanceAddons = [
    { name: 'Annual Smoke & CO Detector Sweep', price: 'Custom Scoped', desc: 'Spring testing, full battery replacement across all sensors, and device date audits.' },
    { name: 'Dryer Duct Safety Cleaning', price: 'Custom Scoped', desc: 'Full lint cleanout from dryer to exterior exhaust flapper to reduce fire hazards and boost efficiency.' },
    { name: 'Outdoor Shower & Spigot Winterization', price: 'Custom Scoped', desc: 'Fall line draining, compressed-air blowout, and valve shut-off to prevent catastrophic freeze bursts.' },
    { name: 'Seasonal Furniture Staging & Storage', price: 'Custom Scoped', desc: 'Spring patio staging and fall protective wrap and secure indoor storage by our crew.' },
  ];

  const planSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Elevated Property Care - Coastal Delaware Property Stewardship",
    "description": "Tailored absentee home watch and coastal property management plans for Bethany Beach, Rehoboth Beach, Lewes, Dewey Beach, Ocean View, South Bethany, and Fenwick Island.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Elevated Property Care",
      "telephone": "+1-302-278-0938"
    }
  };

  return (
    <>
      <SchemaMarkup data={planSchema} />

      <div className="w-full pb-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-coastal-950 text-white pt-8 pb-12 sm:pt-14 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-coastal-900/40 via-coastal-950 to-coastal-950" />
          
          <div className="relative max-w-5xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 bg-coastal-800/90 border border-sand-400/30 px-3.5 py-1.5 rounded-full text-sand-200 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Coastal Delaware Property Stewardship</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight text-balance">
              Tailored Annual Property Stewardship
            </h1>
            
            <p className="text-slate-300 text-xs sm:text-base sm:leading-relaxed max-w-3xl mx-auto font-light text-balance">
              Predictable, comprehensive property care built around your home's unique layout, mechanical systems, and family occupancy schedule across Sussex County. One dedicated advocate for your home and one itemized monthly statement.
            </p>

            <div className="pt-2">
              <span className="inline-block bg-coastal-900/90 text-sand-300 border border-coastal-700 text-[11px] sm:text-xs px-4 py-1.5 rounded-full font-semibold">
                ✓ One Dedicated Contact • Turnkey Vendor Quality Control • Invoiced Monthly in Arrears
              </span>
            </div>
          </div>
        </section>

        {/* Core Inclusions Overview (Replaces the 3 static tier cards) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:-mt-6 lg:-mt-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-sand-200 shadow-xl space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-coastal-600">The Bespoke Care Model</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
                What's Included in Your Annual Stewardship Plan
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Rather than generic, one-size-fits-all packages, we formulate a single transparent care agreement customized to your property during our initial mechanical walkthrough.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="bg-sand-50/70 rounded-2xl p-6 border border-sand-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-coastal-900 text-sand-300 flex items-center justify-center font-bold text-sm">
                    01
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Routine Home Checks</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Scheduled interior and exterior inspections. We cycle plumbing fixtures, verify HVAC functionality, monitor crawlspace humidity, and inspect for leaks or storm wear.
                  </p>
                </div>
                <ul className="text-[11px] text-slate-500 space-y-1 pt-3 border-t border-sand-200">
                  <li>• 50-point inspection checklist</li>
                  <li>• High-resolution digital photo logs</li>
                  <li>• Delivered immediately to your portal</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-sand-50/70 rounded-2xl p-6 border border-sand-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-coastal-900 text-sand-300 flex items-center justify-center font-bold text-sm">
                    02
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Mechanical & Weather Defense</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Active defense against coastal elements: cycling condenser units against salt seizure, winter freeze checks, line blowouts, and priority post-storm sweeps.
                  </p>
                </div>
                <ul className="text-[11px] text-slate-500 space-y-1 pt-3 border-t border-sand-200">
                  <li>• Summer dehumidification monitoring</li>
                  <li>• Comprehensive pipe freeze protection</li>
                  <li>• Rapid storm damage assessments</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-sand-50/70 rounded-2xl p-6 border border-sand-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-coastal-900 text-sand-300 flex items-center justify-center font-bold text-sm">
                    03
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Turnkey Vendor Oversight</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We coordinate, schedule, and supervise your routine exterior maintenance—lawn care, landscaping, pool and spa service, and seasonal cleanups.
                  </p>
                </div>
                <ul className="text-[11px] text-slate-500 space-y-1 pt-3 border-t border-sand-200">
                  <li>• Vendor licensing & COI auditing</li>
                  <li>• On-site quality inspection before billing</li>
                  <li>• Zero vendor coordination headache</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-sand-50/70 rounded-2xl p-6 border border-sand-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-coastal-900 text-sand-300 flex items-center justify-center font-bold text-sm">
                    04
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">One Consolidated Statement</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All scheduled home checks, routine maintenance, and approved repair expenses are carefully reconciled into a single transparent monthly invoice in arrears.
                  </p>
                </div>
                <ul className="text-[11px] text-slate-500 space-y-1 pt-3 border-t border-sand-200">
                  <li>• Billed monthly in arrears</li>
                  <li>• Completely itemized accounting</li>
                  <li>• Single point of accountability</li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-2">
              <a
                href="#walkthrough-form"
                className="inline-block bg-coastal-900 hover:bg-coastal-950 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition shadow-md"
              >
                Schedule Walkthrough For Your Custom Plan →
              </a>
            </div>
          </div>
        </section>

        {/* The 3-Step Walkthrough Process */}
        <section className="bg-sand-50 border-y border-sand-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 my-12 sm:my-16">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-coastal-700">How It Works</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Three Simple Steps to Effortless Ownership
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-coastal-900 text-sand-300 flex items-center justify-center font-serif text-lg font-bold">
                  1
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">20-Min Property Walkthrough</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We walk your property together (or access via lockbox) to review mechanical configurations, shutoff valves, exterior exposures, and seasonal priorities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-coastal-900 text-sand-300 flex items-center justify-center font-serif text-lg font-bold">
                  2
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Itemized Care Proposal</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You receive a clear, transparent annual proposal specifying your inspection cadence, routine service schedule, and predictable monthly billing in arrears.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-coastal-900 text-sand-300 flex items-center justify-center font-serif text-lg font-bold">
                  3
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Hands-Off Coastal Living</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We take full custody of your property operations. You receive timely digital reports after every check and use your beach home as intended—relaxing!
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
                  Customized seasonal care designed around your property's layout, square footage, and system age. Scoped with complete itemized clarity during your initial walkthrough.
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
                      placeholder="Your Full Name"
                      className="w-full p-3 bg-coastal-900 border border-coastal-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sand-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="youremail@example.com"
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
                      placeholder="Your Phone Number"
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
                      <option value="South Bethany">South Bethany</option>
                      <option value="Rehoboth Beach">Rehoboth Beach</option>
                      <option value="Lewes">Lewes</option>
                      <option value="Dewey Beach">Dewey Beach</option>
                      <option value="Ocean View">Ocean View</option>
                      <option value="Fenwick Island">Fenwick Island</option>
                      <option value="North Bethany">North Bethany</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">Primary Property Usage</label>
                    <select
                      value={usage}
                      onChange={(e) => setUsage(e.target.value)}
                      className="w-full p-3 bg-coastal-900 border border-coastal-700 rounded-xl text-xs text-white focus:outline-none focus:border-sand-400"
                    >
                      <option value="Personal Second Home / Vacation Retreat">Personal Second Home / Vacation Retreat</option>
                      <option value="Seasonal Family Retreat">Seasonal Family Retreat</option>
                      <option value="Full-Time Residence">Full-Time Residence</option>
                      <option value="Hybrid Vacation Rental & Personal Use">Hybrid Vacation Rental & Personal Use</option>
                      <option value="New Construction / Recent Purchase">New Construction / Recent Purchase</option>
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
