import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4 py-20 bg-sand-50">
      <div className="max-w-md mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-coastal-600">Page Not Found</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">404 — Page Not Found</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          The property care page or resource you are looking for does not exist or has been moved.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-coastal-900 hover:bg-coastal-950 text-white text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded-xl transition shadow-md"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
