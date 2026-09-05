"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function AnnualEstimatePage() {
  const [town, setTown] = useState('Rehoboth Beach');
  const [size, setSize] = useState('medium'); // small, medium, large, estate
  const [frequency, setFrequency] = useState('seasonal'); // weekly, seasonal, biweekly
  const [addons, setAddons] = useState({
    landscaping: true,
    pool: false,
    winterization: true,
    hvacCycling: true
  });
  const [submitted, setSubmitted] = useState(false);

  // Pricing formula logic
  // Base rates per visit
  const baseRateMap: Record<string, number> = {
    small: 50,      // < 2,500 sq ft
    medium: 60,     // 2,500 - 4,000 sq ft
    large: 75,      // 4,000 - 6,000 sq ft
    estate: 95      // 6,000+ sq ft
  };

  const visitsMap: Record<string, number> = {
    weekly: 52,
    seasonal: 38, // Weekly in winter, bi-weekly in summer
    biweekly: 26
  };

  const currentBaseRate = baseRateMap[size];
  const totalVisits = visitsMap[frequency];
  const reviewsAnnualCost = currentBaseRate * totalVisits;

  // Addon routine estimates
  const addonCosts: Record<string, number> = {
    landscaping: 350,   // Annual vendor QC and audits
    pool: 400,          // Pool/spa inspection & chemistry oversight
    winterization: 250, // Seasonal shutdown/startup verification
    hvacCycling: 200    // Specialized climate & dehumidification monitoring
  };

  let totalAddons = 0;
  if (addons.landscaping) totalAddons += addonCosts.landscaping;
  if (addons.pool) totalAddons += addonCosts.pool;
  if (addons.winterization) totalAddons += addonCosts.winterization;
  if (addons.hvacCycling) totalAddons += addonCosts.hvacCycling;

  const totalAnnualEstimate = reviewsAnnualCost + totalAddons;
  const monthlyAverage = Math.round(totalAnnualEstimate / 12);

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons({ ...addons, [key]: !addons[key] });
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
            Zero Management Fees on Routine Care
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Interactive Annual Estimate Calculator
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We use our annual estimate as a transparent roadmap to service delivery. Calculate your estimated routine property care costs below with full line-item clarity.
          </p>
        </div>
      </section>

      {/* Interactive Calculator Container */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls (Col 1-7) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-sand-200 shadow-sm space-y-6">
            <h2 className="font-serif text-2xl font-bold text-slate-900 border-b border-sand-200 pb-4">
              1. Property Specifications
            </h2>

            {/* Town */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Property Location
              </label>
              <select
                value={town}
                onChange={(e) => setTown(e.target.value)}
                className="w-full p-3 bg-sand-50 border border-sand-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-coastal-600"
              >
                <option value="Rehoboth Beach">Rehoboth Beach</option>
                <option value="Bethany Beach">Bethany Beach</option>
                <option value="Lewes">Lewes</option>
                <option value="Fenwick Island">Fenwick Island</option>
                <option value="Dewey Beach">Dewey Beach</option>
                <option value="Ocean View / Millville">Ocean View / Millville</option>
              </select>
            </div>

            {/* Size */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Approximate Home Square Footage
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'small', label: '< 2,500 sq ft' },
                  { id: 'medium', label: '2,500 - 4,000' },
                  { id: 'large', label: '4,000 - 6,000' },
                  { id: 'estate', label: '6,000+ sq ft' }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSize(s.id)}
                    className={`p-3 text-xs font-semibold rounded-lg border text-center transition ${
                      size === s.id
                        ? 'bg-coastal-900 text-white border-coastal-900'
                        : 'bg-sand-50 text-slate-700 border-sand-300 hover:bg-sand-100'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Property Review (Home Watch) Schedule
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'seasonal', title: 'Seasonal Standard', desc: 'Weekly Winter / Bi-Weekly Summer (38 visits)' },
                  { id: 'weekly', title: 'Weekly Year-Round', desc: '52 comprehensive reviews' },
                  { id: 'biweekly', title: 'Bi-Weekly Year-Round', desc: '26 comprehensive reviews' }
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFrequency(f.id)}
                    className={`p-3 text-left rounded-lg border transition ${
                      frequency === f.id
                        ? 'bg-coastal-900 text-white border-coastal-900'
                        : 'bg-sand-50 text-slate-700 border-sand-300 hover:bg-sand-100'
                    }`}
                  >
                    <div className="text-xs font-bold">{f.title}</div>
                    <div className="text-[11px] opacity-80 mt-1 leading-tight">{f.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Addons */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Routine Annual Oversight Options
              </label>
              <div className="space-y-2 text-xs">
                {[
                  { key: 'landscaping' as const, label: 'Landscaping & Grounds Vendor QC', cost: '+$350/yr' },
                  { key: 'pool' as const, label: 'Pool & Spa Oversight & Skimmer Cleaning', cost: '+$400/yr' },
                  { key: 'winterization' as const, label: 'Winterization & Anti-Freeze Protocol Verification', cost: '+$250/yr' },
                  { key: 'hvacCycling' as const, label: 'High-Humidity HVAC & Dehumidification System Cycling', cost: '+$200/yr' }
                ].map((item) => (
                  <label
                    key={item.key}
                    onClick={() => toggleAddon(item.key)}
                    className="flex items-center justify-between p-3 rounded-lg border border-sand-200 bg-sand-50 cursor-pointer hover:bg-sand-100 transition"
                  >
                    <span className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={addons[item.key]}
                        onChange={() => {}}
                        className="rounded text-coastal-800 focus:ring-coastal-500 w-4 h-4"
                      />
                      <span className="font-medium text-slate-800">{item.label}</span>
                    </span>
                    <span className="text-coastal-800 font-bold">{item.cost}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Summary Card (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-coastal-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
            <div className="space-y-6">
              <div className="border-b border-coastal-700 pb-4">
                <span className="text-xs uppercase tracking-widest text-sand-300 font-semibold">Preliminary Roadmap</span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">Estimated Care Plan</h3>
                <p className="text-xs text-slate-300 mt-1">Target Location: {town}</p>
              </div>

              {/* Line item breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-300">Inspection Rate:</span>
                  <span className="font-semibold text-white">${currentBaseRate} / review</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Scheduled Reviews:</span>
                  <span className="font-semibold text-white">{totalVisits} visits / year</span>
                </div>
                <div className="flex justify-between border-b border-coastal-800 pb-2">
                  <span className="text-slate-300">Reviews Subtotal:</span>
                  <span className="font-semibold text-white">${reviewsAnnualCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-coastal-800 pb-2">
                  <span className="text-slate-300">Oversight & Management Add-ons:</span>
                  <span className="font-semibold text-white">${totalAddons.toLocaleString()}</span>
                </div>
              </div>

              {/* Totals highlight */}
              <div className="bg-coastal-950 p-4 rounded-xl border border-coastal-800 space-y-2 text-center">
                <span className="text-xs uppercase tracking-widest text-sand-300 font-semibold">Estimated Annual Total</span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  ${totalAnnualEstimate.toLocaleString()}
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  Avg. ~${monthlyAverage}/mo (Invoiced in arrears)
                </div>
                <div className="text-[10px] text-slate-400 pt-1">
                  Includes 0% management fee on routine scheduled care
                </div>
              </div>
            </div>

            {/* Submission form */}
            <div className="bg-coastal-800/80 p-4 rounded-xl border border-coastal-700 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sand-200">
                Lock In Your Official Free Proposal
              </h4>
              {submitted ? (
                <div className="bg-emerald-900/60 border border-emerald-500/50 p-3 rounded text-center text-xs text-emerald-200">
                  Thank you! We have received your preliminary specs and will prepare a customized formal estimate for {town}.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-2"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full p-2.5 bg-coastal-950 border border-coastal-600 rounded text-xs text-white placeholder-slate-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    required
                    className="w-full p-2.5 bg-coastal-950 border border-coastal-600 rounded text-xs text-white placeholder-slate-400 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-2.5 bg-coastal-950 border border-coastal-600 rounded text-xs text-white placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-sand-400 hover:bg-sand-300 text-coastal-950 font-bold py-2.5 rounded text-xs uppercase tracking-wider transition shadow-md"
                  >
                    Request Formal Annual Proposal
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
