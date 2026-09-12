import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions & Pricing Transparency | Elevated Property Care',
  description: 'Detailed answers on property care rates ($50/hr), tailored annual stewardship plans, contractor quality control, and 365-day availability in coastal Delaware.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What is your hourly rate for in-house repairs and handyman services?",
      a: "Elevated Property Care charges a transparent hourly rate of $50/hr for our in-house technical labor, including finish carpentry, cabinetry adjustments, furniture assembly, lock hardware tuning, and deck repairs. We publish our rates so our clients always have complete billing predictability."
    },
    {
      q: "How are property care and home check schedules determined?",
      a: "Every coastal residence has distinct square footage, mechanical configurations, and seasonal occupancy. During our initial on-site walkthrough, we tailor a prudent schedule—typically bi-weekly checks year-round, or weekly during winter freeze months and bi-weekly during summer. Each visit includes an exhaustive digital checklist, climate and plumbing run tests, and high-resolution photo reports delivered immediately to your portal or inbox."
    },
    {
      q: "How are routine property care and vendor services priced?",
      a: "All routine services—including scheduled home checks, lawn care, pool service, and preventative maintenance—are custom-scoped and clearly itemized on your Annual Care Plan. You receive turnkey management: we vet and schedule licensed trades, supervise on-site work, audit all billing, and stand behind the quality with one reconciled monthly statement invoiced in arrears."
    },
    {
      q: "What is your availability throughout the year?",
      a: "Elevated Property Care is available 365 days a year for all your property needs. Each property is assigned a dedicated Primary Property Manager. We also provide priority response for urgent emergencies, freeze alerts, and severe coastal storms."
    },
    {
      q: "Why hire a professional property care and home watch team for a private home?",
      a: "Vacation homes require a local professional to inspect the property, provide access to and oversee maintenance vendors, verify quality control, and handle storm preparations. A professional 'one-stop-shop' makes sense for a simple, convenient, and reliable solution to luxury homeownership."
    },
    {
      q: "Do you provide a warranty on work performed?",
      a: "Yes. The buck stops with us. We provide a full warranty on all services we manage and bill directly. This gives you one accountable point of contact and ensures we are always motivated to deliver 100% satisfaction. Elevated Property Care is fully licensed and insured in Delaware. We also verify that all sub-vendors have active workers' compensation and general liability coverage."
    },
    {
      q: "What is the difference between routine care and non-routine projects?",
      a: "Routine services are recurring preventative maintenance and home check visits scheduled across your annual care calendar. Non-routine work encompasses unscheduled repairs, ad-hoc trade dispatch, or custom home improvements (such as deck renovations, interior painting, or fixture upgrades). In-house repairs are billed at our straightforward $50/hr technical rate, while specialty contractor projects are presented with a detailed, pre-approved estimate before any work commences."
    },
    {
      q: "How does your monthly billing system work?",
      a: "Elevated Property Care invoices in arrears at the end of each month. We rigorously reconcile all vendor invoices and consolidate them into a single, itemized, easy-to-read monthly bill for your convenience."
    },
    {
      q: "Do you provide handyman and carpentry services in-house?",
      a: "Yes. We offer skilled in-house services across carpentry, cabinetry adjustments, furniture assembly, hardware installation, deck maintenance, and general punch lists at our published $50/hr rate."
    },
    {
      q: "How does Elevated Property Care differ from traditional rental property management companies?",
      a: "Most property management companies in Sussex County focus primarily on marketing short-term rentals, booking guest reservations, and taking 20% to 30% of your gross rental income. Elevated Property Care is a dedicated property care and home watch firm. We do not manage rental booking contracts or take any percentage of your rental income. Our sole mission is keeping your home in peak physical condition. Our preventative care model is an investment that preserves and elevates property equity, paying for itself by averting catastrophic water leaks, mechanical breakdowns, and emergency contractor premiums."
    },
    {
      q: "I manage my own vacation rental on Airbnb or VRBO. Can I use Elevated Property Care?",
      a: "Yes. Many of our clients self-manage their vacation rentals to retain 100% of their booking revenue. We partner with self-managing homeowners by handling the critical physical operations on the ground: pre-arrival readiness walkthroughs, post-departure damage reviews with timestamped photos, prompt handyman maintenance, and local tenant/owner assistance during unexpected issues. You enjoy your full rental revenue while resting assured that your property is rigorously protected."
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
    <>
      <SchemaMarkup data={faqSchema} />
      <div className="w-full pb-20 overflow-hidden">
        <section className="bg-coastal-950 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
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
    </>
  );
}
