"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-sand-200 shadow-sm">
      {/* Top Utility Announcement Bar */}
      <div className="w-full bg-coastal-950 text-slate-300 text-xs py-2 px-4 border-b border-coastal-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-1">
          <span className="font-medium text-slate-300 tracking-wide text-[11px] sm:text-xs">
            Serving Sussex County Delaware: Lewes - Rehoboth Beach - Bethany Beach, Fenwick Island, Dewey Beach, Ocean View and other coastal towns
          </span>
          <div className="flex items-center space-x-4 text-[11px] sm:text-xs">
            <span className="text-emerald-400 font-medium flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
              Available 365 Days a Year
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a href="tel:3022780938" className="text-sand-300 hover:text-white font-semibold transition">
              Call: (302) 278-0938
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-nowrap justify-between items-center h-20 gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col flex-shrink-0 group">
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-coastal-950 uppercase group-hover:text-coastal-700 transition leading-tight">
              Elevated Property Care
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.18em] text-coastal-600 font-medium uppercase mt-0.5 leading-none">
              Delaware Coastal Estate Management & Home Watch
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 text-[13px] font-medium text-slate-700 whitespace-nowrap flex-nowrap">
            <Link href="/" className="hover:text-coastal-800 transition py-1">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <span className="cursor-pointer hover:text-coastal-800 transition flex items-center">
                Services
                <svg className="w-3.5 h-3.5 ml-1 text-slate-400 group-hover:text-coastal-800 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-sand-200 py-2 hidden group-hover:block transition-all duration-200 z-50">
                <Link href="/services/property-reviews" className="block px-4 py-2 hover:bg-sand-50 transition text-slate-800">
                  <div className="font-semibold text-xs text-slate-900">Property Reviews (Home Watch)</div>
                  <div className="text-[11px] text-slate-500 font-normal">Weekly/bi-weekly inspection checklists</div>
                </Link>
                <Link href="/services/preventative-maintenance" className="block px-4 py-2 hover:bg-sand-50 transition text-slate-800">
                  <div className="font-semibold text-xs text-slate-900">Preventative Maintenance</div>
                  <div className="text-[11px] text-slate-500 font-normal">HVAC cycling, plumbing & winterization</div>
                </Link>
                <Link href="/services/landscaping-care" className="block px-4 py-2 hover:bg-sand-50 transition text-slate-800">
                  <div className="font-semibold text-xs text-slate-900">Landscaping & Exterior</div>
                  <div className="text-[11px] text-slate-500 font-normal">Curb appeal & vendor quality control</div>
                </Link>
                <Link href="/services/pool-and-spa-care" className="block px-4 py-2 hover:bg-sand-50 transition text-slate-800">
                  <div className="font-semibold text-xs text-slate-900">Pool & Spa Oversight</div>
                  <div className="text-[11px] text-slate-500 font-normal">Chemistry audits & seasonal coordination</div>
                </Link>
                <Link href="/services/handyman-and-repairs" className="block px-4 py-2 hover:bg-sand-50 transition text-slate-800">
                  <div className="font-semibold text-xs text-slate-900">Handyman & Skilled Carpentry</div>
                  <div className="text-[11px] text-slate-500 font-normal">Transparent $50/hr technical labor</div>
                </Link>
                <Link href="/services/concierge" className="block px-4 py-2 hover:bg-sand-50 transition text-slate-800">
                  <div className="font-semibold text-xs text-slate-900">Concierge & Storm Prep</div>
                  <div className="text-[11px] text-slate-500 font-normal">Keyholder, deliveries & rapid response</div>
                </Link>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group py-2">
              <span className="cursor-pointer hover:text-coastal-800 transition flex items-center">
                Locations
                <svg className="w-3.5 h-3.5 ml-1 text-slate-400 group-hover:text-coastal-800 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-sand-200 py-2 hidden group-hover:block transition-all duration-200 z-50">
                <Link href="/locations/rehoboth-beach" className="block px-4 py-2 hover:bg-sand-50 transition text-xs font-semibold text-slate-800">
                  Rehoboth Beach
                </Link>
                <Link href="/locations/bethany-beach" className="block px-4 py-2 hover:bg-sand-50 transition text-xs font-semibold text-slate-800">
                  Bethany Beach
                </Link>
                <Link href="/locations/lewes" className="block px-4 py-2 hover:bg-sand-50 transition text-xs font-semibold text-slate-800">
                  Lewes
                </Link>
                <Link href="/locations/fenwick-island" className="block px-4 py-2 hover:bg-sand-50 transition text-xs font-semibold text-slate-800">
                  Fenwick Island
                </Link>
              </div>
            </div>

            <Link href="/faq" className="hover:text-coastal-800 transition py-1">
              Pricing & FAQ
            </Link>
            <Link href="/about" className="hover:text-coastal-800 transition py-1">
              About
            </Link>
            <Link href="/resources" className="hover:text-coastal-800 transition py-1">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-coastal-800 transition py-1">
              Contact
            </Link>
          </nav>

          {/* Desktop Right Action Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              href="/annual-estimate"
              className="bg-coastal-900 hover:bg-coastal-800 text-white text-xs uppercase tracking-wider font-semibold py-2.5 px-4 rounded-lg shadow-sm transition whitespace-nowrap flex items-center"
            >
              Request Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-coastal-800 p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
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
        <div className="lg:hidden bg-white border-b border-sand-200 px-5 pt-3 pb-8 space-y-4 font-medium shadow-lg">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700 font-semibold">
            Home
          </Link>

          <div className="pl-3 border-l-2 border-coastal-300 space-y-2.5 py-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-coastal-800 block">Services</span>
            <Link href="/services/property-reviews" onClick={() => setIsOpen(false)} className="block text-xs text-slate-700 hover:text-coastal-800">
              Property Reviews (Home Watch)
            </Link>
            <Link href="/services/preventative-maintenance" onClick={() => setIsOpen(false)} className="block text-xs text-slate-700 hover:text-coastal-800">
              Preventative Maintenance
            </Link>
            <Link href="/services/landscaping-care" onClick={() => setIsOpen(false)} className="block text-xs text-slate-700 hover:text-coastal-800">
              Landscaping & Exterior
            </Link>
            <Link href="/services/pool-and-spa-care" onClick={() => setIsOpen(false)} className="block text-xs text-slate-700 hover:text-coastal-800">
              Pool & Spa Oversight
            </Link>
            <Link href="/services/handyman-and-repairs" onClick={() => setIsOpen(false)} className="block text-xs text-slate-700 hover:text-coastal-800">
              Handyman & Carpentry ($50/hr)
            </Link>
            <Link href="/services/concierge" onClick={() => setIsOpen(false)} className="block text-xs text-slate-700 hover:text-coastal-800">
              Concierge & Storm Prep
            </Link>
          </div>

          <div className="pl-3 border-l-2 border-coastal-300 space-y-2 py-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-coastal-800 block">Target Locations</span>
            <Link href="/locations/rehoboth-beach" onClick={() => setIsOpen(false)} className="block text-xs text-slate-700 hover:text-coastal-800">
              Rehoboth Beach
            </Link>
            <Link href="/locations/bethany-beach" onClick={() => setIsOpen(false)} className="block text-xs text-slate-700 hover:text-coastal-800">
              Bethany Beach
            </Link>
            <Link href="/locations/lewes" onClick={() => setIsOpen(false)} className="block text-xs text-slate-700 hover:text-coastal-800">
              Lewes
            </Link>
            <Link href="/locations/fenwick-island" onClick={() => setIsOpen(false)} className="block text-xs text-slate-700 hover:text-coastal-800">
              Fenwick Island
            </Link>
          </div>

          <Link href="/annual-estimate" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700 text-sm">
            Annual Estimate Calculator
          </Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700 text-sm">
            Pricing & FAQ
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700 text-sm">
            About Us
          </Link>
          <Link href="/resources" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700 text-sm">
            Resources & Guides
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-slate-800 hover:text-coastal-700 text-sm">
            Contact
          </Link>

          <div className="pt-2">
            <Link
              href="/annual-estimate"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-coastal-900 text-white font-semibold py-3 rounded-lg text-xs uppercase tracking-wider shadow"
            >
              Request Annual Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
