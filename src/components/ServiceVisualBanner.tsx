import React from 'react';

interface ServiceVisualBannerProps {
  type: 'property-reviews' | 'preventative-maintenance' | 'handyman' | 'landscaping' | 'pool-spa' | 'storm-prep';
}

export default function ServiceVisualBanner({ type }: ServiceVisualBannerProps) {
  const configs = {
    'property-reviews': {
      num: '01',
      tag: 'HOME WATCH PROTOCOL',
      dotColor: 'bg-emerald-400',
      bottomLabel: '30-POINT AUDIT • REAL-TIME PHOTO LOGS',
      icon: (
        <svg className="w-8 h-8 text-sand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          <circle cx="12" cy="7" r="1.5" className="fill-sand-400/40" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" />
        </svg>
      ),
    },
    'preventative-maintenance': {
      num: '02',
      tag: 'SYSTEM INTEGRITY',
      dotColor: 'bg-sand-400',
      bottomLabel: 'HVAC • PLUMBING • APPLIANCES • FREEZE DEFENSE',
      icon: (
        <svg className="w-8 h-8 text-sand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 2.5" />
        </svg>
      ),
    },
    'handyman': {
      num: '03',
      tag: 'IN-HOUSE CRAFT',
      dotColor: 'bg-amber-300',
      bottomLabel: 'HIGH-END ASSEMBLY • CABINETRY • HARDWARE',
      icon: (
        <svg className="w-8 h-8 text-sand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 10l4 4m0-4l-4 4" />
        </svg>
      ),
    },
    'landscaping': {
      num: '04',
      tag: 'GROUNDS & TURF',
      dotColor: 'bg-emerald-400',
      bottomLabel: 'VETTED CREWS • MOWING • PRUNING • MULCHING',
      icon: (
        <svg className="w-8 h-8 text-sand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          <circle cx="12" cy="8" r="2" className="fill-sand-400/20" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 17c2-2 5-3 7-3s5 1 7 3" />
        </svg>
      ),
    },
    'pool-spa': {
      num: '05',
      tag: 'AQUATIC CARE',
      dotColor: 'bg-sky-400',
      bottomLabel: 'OPENINGS • CLOSINGS • WATER CHEMISTRY',
      icon: (
        <svg className="w-8 h-8 text-sand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h10a4 4 0 004-4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 11a4 4 0 014-4h10a4 4 0 014 4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6m-3-3h6" />
        </svg>
      ),
    },
    'storm-prep': {
      num: '06',
      tag: 'WEATHER DEFENSE',
      dotColor: 'bg-rose-400',
      bottomLabel: 'PRE-EVENT PREPARATION • POST-STORM AUDITS',
      icon: (
        <svg className="w-8 h-8 text-sand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  };

  const current = configs[type];

  return (
    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-coastal-950 via-[#14232c] to-coastal-950 p-5 flex flex-col justify-between border-b border-sand-200/20 group">
      {/* Background Architectural Blueprint Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id={`grid-${type}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#ded5c1" strokeWidth="0.5" strokeDasharray="2 2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${type})`} />
      </svg>

      {/* Decorative Radial Lighting Glow */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-sand-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sand-400/20 transition duration-500" />
      <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-coastal-700/20 rounded-full blur-2xl pointer-events-none" />

      {/* Large Subtle Watermark Number */}
      <div className="absolute right-4 bottom-1 font-serif text-7xl font-bold text-white/[0.04] pointer-events-none select-none tracking-tighter">
        {current.num}
      </div>

      {/* Top Bar: Tag & Number */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center space-x-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider text-sand-200 uppercase">
          <span className={`w-1.5 h-1.5 rounded-full ${current.dotColor} animate-pulse`} />
          <span>{current.tag}</span>
        </span>
        <span className="text-[11px] font-serif font-bold text-sand-400/60 tracking-wider">
          {current.num}
        </span>
      </div>

      {/* Centerpiece Emblem */}
      <div className="relative z-10 flex items-center justify-center my-auto">
        <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-sand-400/30 flex items-center justify-center shadow-lg backdrop-blur-md group-hover:border-sand-400 group-hover:scale-105 group-hover:bg-white/[0.08] transition duration-300">
          {current.icon}
        </div>
      </div>

      {/* Bottom Subtitle / Micro-spec */}
      <div className="relative z-10 text-center">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400 font-medium group-hover:text-sand-300 transition duration-300">
          {current.bottomLabel}
        </span>
      </div>
    </div>
  );
}
