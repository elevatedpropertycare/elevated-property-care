"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sand-200">
      {/* Top utility notification bar */}
      <div className="bg-coastal-900 text-sand-100 text-xs py-2 px-4 text-center font-medium tracking-wide flex justify-between items-center max-w-7xl mx-auto">
        <span>Serving Coastal Sussex County: Lewes • Rehoboth Beach • Bethany Beach • Fenwick Island</span>
        <div className="hidden md:flex items-center space-x-6">
          <span>Available 365 Days a Year</span>
          <a href="tel:3022780938" className="text-sand-300 hover:text-white font-semibold underline">
            Call: (302) 278-0938
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-coastal-950 uppercase">
              Elevated Property Care
            </span>
            <span className="text-[10px] tracking-[0.25em] text-coastal-600 font-medium uppercase">
              Delaware Coastal Estate Management & Home Watch
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium text-sm text-slate-700">
            <Link href="/" className="hover:text-coastal-700 transition">Home</Link>
            
            <div className="relative group py-2">
              <span className="cursor-pointer hover:text-coastal-700 transition flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </span>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-sand-200 py-3 hidden group-hover:block transition-all duration-200 z-50">
                <Link href="/services/property-reviews" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Property Reviews (Home Watch)
                  <span className="block text-xs text-slate-500 font-normal">Weekly/bi-weekly inspection checklists</span>
                </Link>
                <Link href="/services/preventative-maintenance" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Preventative Maintenance
                  <span className="block text-xs text-slate-500 font-normal">HVAC cycling, plumbing & winterization</span>
                </Link>
                <Link href="/services/landscaping-care" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Landscaping & Exterior
                  <span className="block text-xs text-slate-500 font-normal">Curb appeal & vendor quality control</span>
                </Link>
                <Link href="/services/pool-and-spa-care" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Pool & Spa Oversight
                  <span className="block text-xs text-slate-500 font-normal">Chemistry audit & opening/closing</span>
                </Link>
                <Link href="/services/handyman-and-repairs" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Handyman & Skilled Carpentry
                  <span className="block text-xs text-slate-500 font-normal">Transparent 0/hr technical labor</span>
                </Link>
                <Link href="/services/concierge" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Concierge & Storm Prep
                  <span className="block text-xs text-slate-500 font-normal">Keyholder, deliveries & emergency response</span>
                </Link>
              </div>
            </div>

            <div className="relative group py-2">
              <span className="cursor-pointer hover:text-coastal-700 transition flex items-center">
                Locations
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-sand-200 py-3 hidden group-hover:block transition-all duration-200 z-50">
                <Link href="/locations/rehoboth-beach" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">Rehoboth Beach</Link>
                <Link href="/locations/bethany-beach" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">Bethany Beach</Link>
                <Link href="/locations/lewes" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">Lewes</Link>
                <Link href="/locations/fenwick-island" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">Fenwick Island</Link>
              </div>
            </div>

            <Link href="/annual-estimate" className="hover:text-coastal-700 transition">Annual Estimate</Link>
            <Link href="/faq" className="hover:text-coastal-700 transition">FAQ & Pricing</Link>
            <Link href="/about" className="hover:text-coastal-700 transition">About Us</Link>
            <Link href="/resources" className="hover:text-coastal-700 transition">Resources</Link>
            <Link href="/contact" className="hover:text-coastal-700 transition">Contact</Link>
          </nav>

          {/* Direct CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/annual-estimate"
              className="bg-coastal-800 hover:bg-coastal-900 text-white text-xs uppercase tracking-wider font-semibold py-3 px-5 rounded shadow-sm transition"
            >
              Request Annual Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-sand-200 px-4 pt-3 pb-6 space-y-3 font-medium">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700">Home</Link>
          <div className="pl-2 border-l-2 border-coastal-400 space-y-2 py-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-coastal-800">Services</span>
            <Link href="/services/property-reviews" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Property Reviews (Home Watch)</Link>
            <Link href="/services/preventative-maintenance" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Preventative Maintenance</Link>
            <Link href="/services/landscaping-care" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Landscaping & Exterior</Link>
            <Link href="/services/pool-and-spa-care" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Pool & Spa Care</Link>
            <Link href="/services/handyman-and-repairs" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Handyman & Carpentry (0/hr)</Link>
            <Link href="/services/concierge" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Concierge & Storm Response</Link>
          </div>
          <div className="pl-2 border-l-2 border-coastal-400 space-y-2 py-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-coastal-800">Locations</span>
            <Link href="/locations/rehoboth-beach" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Rehoboth Beach</Link>
            <Link href="/locations/bethany-beach" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Bethany Beach</Link>
            <Link href="/locations/lewes" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Lewes</Link>
            <Link href="/locations/fenwick-island" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Fenwick Island</Link>
          </div>
          <Link href="/annual-estimate" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700">Annual Estimate Calculator</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700">FAQ & Pricing</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700">About Us</Link>
          <Link href="/resources" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700">Resources & Guides</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700">Contact Us</Link>
          <div className="pt-2">
            <a
              href="tel:3022780938"
              className="block text-center bg-coastal-800 text-white font-semibold py-3 rounded-md text-sm"
            >
              Call (302) 278-0938
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
