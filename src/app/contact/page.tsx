"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
            Prompt, Discreet & Confidential
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Contact Elevated Property Care
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reach out to our local Lewes team to discuss custom property care, weekly home watch inspections, or request an annual estimate.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details (Col 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-coastal-600">Local Operations</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Delaware Coastal Headquarters
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We are actively on the ground 365 days a year across Sussex County beaches. Whether you are in residence or away, we are always accessible.
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="bg-white p-5 rounded-xl border border-sand-200 shadow-sm space-y-1">
                <span className="font-bold text-slate-900 block">Direct Telephone</span>
                <a href="tel:3022780938" className="text-sm text-coastal-800 font-bold hover:underline">
                  (302) 278-0938
                </a>
                <p className="text-[11px] text-slate-500">Available daily for urgent requests & consultation</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-sand-200 shadow-sm space-y-1">
                <span className="font-bold text-slate-900 block">Email Inquiries</span>
                <a href="mailto:info@elevatedpropertycare.com" className="text-sm text-coastal-800 font-bold hover:underline">
                  info@elevatedpropertycare.com
                </a>
                <p className="text-[11px] text-slate-500">We respond to all inquiries within 24 hours</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-sand-200 shadow-sm space-y-1">
                <span className="font-bold text-slate-900 block">Primary Service Coverage</span>
                <p className="font-medium text-slate-800">Lewes, Rehoboth Beach, Bethany Beach, Fenwick Island, Dewey Beach, and Ocean View, Delaware.</p>
              </div>
            </div>
          </div>

          {/* Form (Col 6-12) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-sand-200 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-sand-200 pb-3">
              Request a Property Consultation
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-6 rounded-xl text-center space-y-3">
                <h4 className="font-serif text-lg font-bold text-emerald-900">Inquiry Received</h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you for contacting Elevated Property Care. A dedicated Property Manager will review your details and contact you shortly.
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
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">First Name *</label>
                    <input type="text" required className="w-full p-3 bg-sand-50 border border-sand-300 rounded-lg text-xs focus:outline-none focus:border-coastal-600" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">Last Name *</label>
                    <input type="text" required className="w-full p-3 bg-sand-50 border border-sand-300 rounded-lg text-xs focus:outline-none focus:border-coastal-600" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">Email Address *</label>
                    <input type="email" required className="w-full p-3 bg-sand-50 border border-sand-300 rounded-lg text-xs focus:outline-none focus:border-coastal-600" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">Phone Number</label>
                    <input type="tel" className="w-full p-3 bg-sand-50 border border-sand-300 rounded-lg text-xs focus:outline-none focus:border-coastal-600" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">Property Location (Town / Community) *</label>
                  <select required className="w-full p-3 bg-sand-50 border border-sand-300 rounded-lg text-xs focus:outline-none focus:border-coastal-600">
                    <option value="Rehoboth Beach">Rehoboth Beach</option>
                    <option value="Bethany Beach">Bethany Beach</option>
                    <option value="Lewes">Lewes</option>
                    <option value="Fenwick Island">Fenwick Island</option>
                    <option value="Dewey Beach">Dewey Beach</option>
                    <option value="Ocean View / South Bethany">Ocean View / South Bethany</option>
                    <option value="Other Coastal Area">Other Coastal Area</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">Your Message or Property Details *</label>
                  <textarea rows={4} required placeholder="Tell us about your property and services needed..." className="w-full p-3 bg-sand-50 border border-sand-300 rounded-lg text-xs focus:outline-none focus:border-coastal-600"></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-coastal-900 hover:bg-coastal-950 text-white font-bold py-3.5 rounded-lg text-xs uppercase tracking-wider transition shadow-md"
                >
                  Submit Property Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
