import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coastal Homeowner Resources & Guides | Elevated Property Care',
  description: 'Expert guides on coastal home maintenance, salt-air corrosion defense, winterization, and property oversight in Sussex County, Delaware.',
};

export default function ResourcesPage() {
  const articles = [
    {
      slug: 'why-weekly-property-checks-are-non-negotiable',
      title: 'The Elevated Standard: Why Weekly Property Checks Are Non-Negotiable for Coastal Properties',
      readTime: '4 min read',
      tag: 'Preventative Maintenance',
      desc: 'Coastal homes face unique threats. Discover our detailed weekly protocol for system cycling, security verification, and quality control that ensures your property is always perfect.'
    },
    {
      slug: 'winterizing-delaware-beach-homes',
      title: 'Preparing Sussex County Beach Houses for Winter Freezes: The Complete Protocol',
      readTime: '5 min read',
      tag: 'Winterization & Freeze Protection',
      desc: 'Why turning off the main valve is not enough. Learn the essential steps to protect outdoor showers, tankless heaters, and unheated crawlspaces during severe nor\'easters.'
    },
    {
      slug: 'protecting-coastal-hvac-systems',
      title: 'Salt Air & Atmospheric Humidity: Mitigating Coastal HVAC and Dehumidification Seizures',
      readTime: '4 min read',
      tag: 'Mechanical Care',
      desc: 'How wind-driven salt particles and prolonged idle periods accelerate compressor corrosion in oceanfront Rehoboth, Bethany, and Fenwick properties.'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
            Knowledge & Advisory
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Coastal Property Care Resources
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Practical advice, engineering checklists, and seasonal insights for absentee homeowners across coastal Delaware.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-sand-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center text-[11px] font-semibold text-coastal-700">
                  <span>{art.tag}</span>
                  <span className="text-slate-400">{art.readTime}</span>
                </div>
                <h2 className="font-serif text-lg font-bold text-slate-900 leading-snug hover:text-coastal-800 transition">
                  <Link href={'/resources/' + art.slug}>{art.title}</Link>
                </h2>
                <p className="text-slate-600 text-xs leading-relaxed">{art.desc}</p>
              </div>
              <div className="p-6 pt-0">
                <Link href={'/resources/' + art.slug} className="text-coastal-800 font-semibold text-xs uppercase tracking-wider hover:underline">
                  Read Full Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
