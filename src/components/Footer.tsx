import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-coastal-950 text-slate-300 border-t border-coastal-800">
      {/* Upper Footer: Municipalities strip - All linked cleanly */}
      <div className="bg-coastal-900 border-b border-coastal-800 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs tracking-wider uppercase text-sand-300 space-x-2 md:space-x-5 flex flex-wrap justify-center gap-y-2">
          <Link href="/locations/rehoboth-beach" className="hover:text-white transition">Rehoboth Beach</Link>
          <span>•</span>
          <Link href="/locations/bethany-beach" className="hover:text-white transition">Bethany Beach</Link>
          <span>•</span>
          <Link href="/locations/lewes" className="hover:text-white transition">Lewes</Link>
          <span>•</span>
          <Link href="/locations/dewey-beach" className="hover:text-white transition">Dewey Beach</Link>
          <span>•</span>
          <Link href="/locations/south-bethany" className="hover:text-white transition">South Bethany</Link>
          <span>•</span>
          <Link href="/locations/fenwick-island" className="hover:text-white transition">Fenwick Island</Link>
          <span>•</span>
          <Link href="/locations/ocean-view" className="hover:text-white transition">Ocean View</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 text-sm">
        {/* Col 1: Brand story & Logo */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block hover:opacity-90 transition">
            <img
              src="/logo.png"
              alt="Elevated Property Care"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Delaware’s premier full-service property care and absentee home watch business. Built on transparency, proactive preventative care, and meticulous residential oversight.
          </p>
        </div>

        {/* Col 2: Services */}
        <div>
          <h4 className="font-serif text-white font-semibold text-base mb-4 tracking-wide">Services</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><Link href="/services/property-reviews" className="hover:text-white transition">Property Reviews (Home Watch)</Link></li>
            <li><Link href="/services/preventative-maintenance" className="hover:text-white transition">Preventative Maintenance</Link></li>
            <li><Link href="/services/landscaping-care" className="hover:text-white transition">Landscaping & Grounds</Link></li>
            <li><Link href="/services/pool-and-spa-care" className="hover:text-white transition">Pool & Spa Care</Link></li>
            <li><Link href="/services/handyman-and-repairs" className="hover:text-white transition">Handyman & Carpentry ($50/hr)</Link></li>
            <li><Link href="/services/concierge" className="hover:text-white transition">Concierge & Keyholder</Link></li>
          </ul>
        </div>

        {/* Col 3: Areas Served - All fully linked */}
        <div>
          <h4 className="font-serif text-white font-semibold text-base mb-4 tracking-wide">Target Areas</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><Link href="/locations/bethany-beach" className="hover:text-white transition">Bethany Beach Care</Link></li>
            <li><Link href="/locations/rehoboth-beach" className="hover:text-white transition">Rehoboth Beach Care</Link></li>
            <li><Link href="/locations/lewes" className="hover:text-white transition">Lewes Property Care</Link></li>
            <li><Link href="/locations/dewey-beach" className="hover:text-white transition">Dewey Beach Care</Link></li>
            <li><Link href="/locations/south-bethany" className="hover:text-white transition">South Bethany Care</Link></li>
            <li><Link href="/locations/fenwick-island" className="hover:text-white transition">Fenwick Island Care</Link></li>
            <li><Link href="/locations/ocean-view" className="hover:text-white transition">Ocean View Care</Link></li>
            <li><Link href="/annual-estimate" className="hover:text-white transition font-semibold text-sand-300">Annual Care Plans</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact & Direct Inquiries */}
        <div>
          <h4 className="font-serif text-white font-semibold text-base mb-4 tracking-wide">Contact</h4>
          <div className="space-y-3 text-xs text-slate-400">
            <div>
              <span className="block text-slate-500 font-medium">Telephone:</span>
              <a href="tel:3022780938" className="text-sand-300 hover:text-white font-semibold text-sm transition">
                (302) 278-0938
              </a>
            </div>
            <div>
              <span className="block text-slate-500 font-medium">Email:</span>
              <a href="mailto:info@elevatedpropertycare.com" className="text-sand-300 hover:text-white transition">
                info@elevatedpropertycare.com
              </a>
            </div>
            <div>
              <span className="block text-slate-500 font-medium">Direct Billing Policy:</span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Invoiced in arrears monthly with full itemization. Zero management fee on routine contracted services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimers */}
      <div className="border-t border-coastal-900 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <span>© {new Date().getFullYear()} Elevated Property Care LLC. All rights reserved.</span>
          <div className="space-x-4">
            <Link href="/faq" className="hover:text-slate-400 transition">FAQ</Link>
            <Link href="/privacy-policy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-400 transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
