import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions & Pricing Transparency | Elevated Property Care',
  description: 'Detailed answers on property management rates ($50/hr), routine review pricing ($45/visit), 0% routine markup policy, and 365-day availability.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What is the hourly rate of a property manager?",
      a: "Elevated Property Care charges a transparent hourly rate of $50/hr for our Property Manager non-routine labor. We publish all trade labor rates annually so our clients are never surprised by an invoice."
    },
    {
      q: "How much do you charge for a \"Property Review\" (inspection) and how often do you visit?",
      a: "Property Review pricing starts at $45 per visit and includes an exhaustive digital checklist with bespoke comments and high-resolution images delivered in a digital report. We tailor a prudent schedule to your property and preferences, with a typical schedule being weekly in winter and every two weeks from April through October."
    },
    {
      q: "Do you charge a management fee on routine care?",
      a: "Elevated Property Care differentiates itself by not charging a management fee on any routine care and maintenance services that are included in your annual estimate. We do apply a 15% management fee on all non-routine emergency or bespoke jobs."
    },
    {
      q: "What is your availability throughout the year?",
      a: "Elevated Property Care is available 365 days a year for all your property needs. Each property is assigned a dedicated Primary Property Manager. We also offer after-hours assistance for urgent emergencies and maintain a network of local vendors available around the clock."
    },
    {
      q: "Why use a caretaker / property management company for a private home?",
      a: "Vacation homes require a local professional to inspect the property, provide access to and oversee maintenance vendors, verify quality control, and handle storm preparations. A professional 'one-stop-shop' makes sense for a simple, convenient, and reliable solution to luxury homeownership."
    },
    {
      q: "Do you provide a warranty on work performed?",
      a: "Yes. The buck stops with us. We provide a full warranty on all services we manage and bill directly. This gives you one accountable point of contact and ensures we are always motivated to deliver 100% satisfaction. Elevated Property Care is fully licensed and insured in Delaware. We also verify that all sub-vendors have appropriate workers' compensation and general liability coverage."
    },
    {
      q: "What is the difference between a \"routine\" and \"non-routine\" service?",
      a: "A routine service is a recurring service that can be priced and scheduled annually—such as house watching reviews, seasonal pest control, pool care, and routine landscaping. We charge 0% management fee on routine services. A non-routine service cannot be easily predicted in advance and occurs 'as required' (such as emergency repairs or custom installations). Non-routine services are only completed with your explicit authorization and carry a standard 15% coordination fee."
    },
    {
      q: "How does your monthly billing system work?",
      a: "Elevated Property Care invoices in arrears at the end of each month. We rigorously reconcile all vendor invoices and consolidate them into a single, itemized, easy-to-read monthly bill for your convenience."
    },
    {
      q: "Do you provide handyman and carpentry services in-house?",
      a: "Yes. We offer skilled in-house services across painting, carpentry, structural repairs, furniture assembly, power washing, and general punch lists at our published $50/hr rate."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="space-y-16 pb-20">
      <SchemaMarkup data={faqSchema} />

      <section className="bg-coastal-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
            Complete Fiscal Transparency
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our rates, inspection protocols, vendor reconciliation, and property management standards in coastal Delaware.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm space-y-2">
              <h3 className="font-serif text-lg font-bold text-slate-900">{f.q}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-sand-100 p-8 rounded-2xl border border-sand-300 text-center space-y-4 mt-8">
          <h3 className="font-serif text-xl font-bold text-slate-900">Have a specific question about your home?</h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
            Our team is available 365 days a year to answer inquiries and draft a complimentary annual proposal.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link href="/contact" className="bg-coastal-800 hover:bg-coastal-900 text-white font-semibold px-6 py-3 rounded text-xs uppercase tracking-wider transition">
              Contact Us Directly
            </Link>
            <a href="tel:3022780938" className="border border-coastal-800 text-coastal-900 font-semibold px-6 py-3 rounded text-xs uppercase tracking-wider hover:bg-coastal-50 transition">
              Call (302) 278-0938
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
