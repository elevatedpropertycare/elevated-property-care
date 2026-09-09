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
            Serving Coastal Sussex County: Lewes • Rehoboth Beach • Bethany Beach • Fenwick Island
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
          
          {/* Brand Logo Image (Enlarged to fill vertical space) */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <img
              src="/logo.png"
              alt="Elevated Property Care - Managing Delaware's Finest Homes"
              className="h-11 sm:h-13 md:h-[54px] w-auto object-contain transition duration-200 group-hover:opacity-85"
            />
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
