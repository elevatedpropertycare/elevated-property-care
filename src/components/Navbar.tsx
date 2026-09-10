"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sand-200">
      {/* Top Utility Announcement Bar */}
      <div className="bg-coastal-900 text-sand-100 text-[11px] sm:text-xs py-1.5 px-4 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 text-center sm:text-left">
          <span className="truncate">Serving Coastal Sussex County: Lewes • Rehoboth Beach • Bethany Beach • Fenwick Island</span>
          <div className="flex items-center space-x-4 text-[11px] flex-shrink-0">
            <span className="hidden md:inline text-slate-300">Available 365 Days a Year</span>
            <a href="tel:3022780938" className="text-sand-300 hover:text-white font-semibold underline whitespace-nowrap">
              (302) 278-0938
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo - Supports /logo.png directly */}
          <Link href="/" className="flex items-center flex-shrink-0 mr-4 sm:mr-6">
            <img
              src="/logo.png"
              alt="Elevated Property Care"
              className="h-10 sm:h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('navbar-text-logo');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div id="navbar-text-logo" className="hidden flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-coastal-950 uppercase whitespace-nowrap">
                Elevated Property Care
              </span>
              <span className="text-[9px] tracking-wider text-coastal-600 font-medium uppercase whitespace-nowrap">
                Delaware Coastal Property Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: No text wrapping, clean luxury spacing */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 font-medium text-sm text-slate-700">
            {/* Services Dropdown */}
            <div className="relative group py-2">
              <span className="cursor-pointer hover:text-coastal-700 transition flex items-center whitespace-nowrap">
                Services
                <svg className="w-4 h-4 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-sand-200 py-3 hidden group-hover:block transition-all duration-200 z-50">
                <Link href="/services/property-reviews" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Property Reviews (Home Watch)
                  <span className="block text-xs text-slate-500 font-normal">Bi-weekly seasonal & mechanical audits</span>
                </Link>
                <Link href="/services/preventative-maintenance" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Preventative Maintenance
                  <span className="block text-xs text-slate-500 font-normal">HVAC cycling, plumbing & freeze defense</span>
                </Link>
                <Link href="/services/landscaping-care" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Landscaping & Grounds
                  <span className="block text-xs text-slate-500 font-normal">Curb appeal & vendor quality control</span>
                </Link>
                <Link href="/services/pool-and-spa-care" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Pool & Spa Oversight
                  <span className="block text-xs text-slate-500 font-normal">Chemistry audit & opening/closing</span>
                </Link>
                <Link href="/services/handyman-and-repairs" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Handyman & Carpentry
                  <span className="block text-xs text-slate-500 font-normal">Transparent $50/hr technical labor</span>
                </Link>
                <Link href="/services/concierge" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">
                  Concierge & Storm Prep
                  <span className="block text-xs text-slate-500 font-normal">Keyholder, deliveries & emergency access</span>
                </Link>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group py-2">
              <span className="cursor-pointer hover:text-coastal-700 transition flex items-center whitespace-nowrap">
                Locations
                <svg className="w-4 h-4 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-sand-200 py-3 hidden group-hover:block transition-all duration-200 z-50">
                <Link href="/locations/rehoboth-beach" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">Rehoboth Beach</Link>
                <Link href="/locations/bethany-beach" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">Bethany Beach</Link>
                <Link href="/locations/lewes" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">Lewes</Link>
                <Link href="/locations/fenwick-island" className="block px-4 py-2 hover:bg-coastal-50 text-slate-800 font-medium">Fenwick Island</Link>
              </div>
            </div>

            <Link href="/annual-estimate" className="hover:text-coastal-700 transition whitespace-nowrap font-semibold text-coastal-950">
              Home Watch Plans
            </Link>
            <Link href="/faq" className="hover:text-coastal-700 transition whitespace-nowrap">
              FAQ & Pricing
            </Link>
            <Link href="/about" className="hover:text-coastal-700 transition whitespace-nowrap">
              About Us
            </Link>
            <Link href="/resources" className="hover:text-coastal-700 transition whitespace-nowrap">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-coastal-700 transition whitespace-nowrap">
              Contact
            </Link>
          </nav>

          {/* Direct CTA Button (Single, high-converting, non-wrapping) */}
          <div className="hidden xl:flex items-center flex-shrink-0 ml-4">
            <Link
              href="/annual-estimate#walkthrough-form"
              className="bg-coastal-900 hover:bg-coastal-950 text-white text-xs uppercase tracking-wider font-semibold py-3 px-5 rounded-xl shadow-sm transition whitespace-nowrap"
            >
              Schedule Walkthrough
            </Link>
          </div>

          {/* Mobile / Tablet Hamburger Toggle */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 p-2 focus:outline-none rounded-lg hover:bg-sand-100 transition"
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

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-sand-200 px-4 pt-3 pb-6 space-y-3 font-medium max-h-[85vh] overflow-y-auto shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700">Home</Link>
          <div className="pl-2 border-l-2 border-coastal-400 space-y-2 py-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-coastal-800">Services</span>
            <Link href="/services/property-reviews" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Property Reviews (Home Watch)</Link>
            <Link href="/services/preventative-maintenance" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Preventative Maintenance</Link>
            <Link href="/services/landscaping-care" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Landscaping & Exterior</Link>
            <Link href="/services/pool-and-spa-care" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Pool & Spa Care</Link>
            <Link href="/services/handyman-and-repairs" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Handyman & Carpentry ($50/hr)</Link>
            <Link href="/services/concierge" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Concierge & Storm Response</Link>
          </div>
          <div className="pl-2 border-l-2 border-coastal-400 space-y-2 py-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-coastal-800">Locations</span>
            <Link href="/locations/rehoboth-beach" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Rehoboth Beach</Link>
            <Link href="/locations/bethany-beach" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Bethany Beach</Link>
            <Link href="/locations/lewes" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Lewes</Link>
            <Link href="/locations/fenwick-island" onClick={() => setIsOpen(false)} className="block text-sm text-slate-700">Fenwick Island</Link>
          </div>
          <Link href="/annual-estimate" onClick={() => setIsOpen(false)} className="block py-2 text-coastal-950 font-bold hover:text-coastal-700">Home Watch Plans & Tiers</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700">FAQ & Pricing</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700">About Us</Link>
          <Link href="/resources" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700">Resources & Guides</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700">Contact Us</Link>
          <div className="pt-2 space-y-2">
            <Link
              href="/annual-estimate#walkthrough-form"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-sand-400 hover:bg-sand-300 text-coastal-950 font-bold py-3 rounded-md text-xs uppercase tracking-wider transition shadow-md"
            >
              Schedule Property Walkthrough
            </Link>
            <a
              href="tel:3022780938"
              className="block text-center bg-coastal-900 text-white font-semibold py-3 rounded-md text-sm"
            >
              Call (302) 278-0938
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
