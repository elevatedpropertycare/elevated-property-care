import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Elevated Property Care',
  description: 'Clear, straightforward answers about our coastal Home Checks, preferred in-house handyman rates, vendor coordination, and single monthly itemized invoicing in coastal Delaware.',
  keywords: [
    'elevated property care faq',
    'delaware home watch questions',
    'property management cost sussex county',
    'rehoboth beach home checks',
    'bethany beach property management questions',
    'handyman rates coastal delaware'
  ],
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Our Service Model & How We Work",
      description: "Understanding our dedicated private care philosophy and how we differ from rental agencies.",
      questions: [
        {
          q: "What exactly is Elevated Property Care, and what do you do?",
          a: "Elevated Property Care is a dedicated private property care and Home Watch company serving coastal Delaware. We provide routine physical Home Checks, preventative maintenance oversight, in-house handyman and carpentry assistance, and vendor coordination (landscaping, pool/spa, HVAC) for second homes and luxury coastal residences. Our sole focus is protecting your home's physical condition, preserving its value, and removing the stress of absentee homeownership."
        },
        {
          q: "How does Elevated Property Care differ from traditional rental management companies?",
          a: "Most property management companies in Sussex County are rental booking agencies—they focus on marketing short-term rentals, acquiring guest bookings, and taking 20% to 30% of your gross rental income. Elevated Property Care does not manage rental bookings and does not take any percentage of your revenue. We are strictly physical property caretakers. Our proactive care model is an investment that preserves your equity, paying for itself by averting catastrophic water leaks, freeze bursts, mold issues, and emergency contractor premiums."
        },
        {
          q: "I manage my own vacation rental on Airbnb or VRBO. Can I use Elevated Property Care?",
          a: "Yes, absolutely. Many of our clients self-manage their vacation rentals to retain 100% of their booking revenue. We partner with self-managing hosts by handling the boots-on-the-ground physical operations: pre-arrival readiness checks, post-checkout visual audits with timestamped photography, prompt handyman repairs, and local owner support during unexpected maintenance issues."
        },
        {
          q: "What towns and areas in Delaware do you service?",
          a: "We operate 365 days a year across Coastal Sussex County, primarily serving Rehoboth Beach, Bethany Beach, Lewes, Dewey Beach, South Bethany, Fenwick Island, and Ocean View."
        }
      ]
    },
    {
      category: "Home Checks & Digital Inspection Reports",
      description: "How our routine walk-throughs protect your home against concealed coastal hazards.",
      questions: [
        {
          q: "What is a 'Home Check,' and how often do you visit?",
          a: "A Home Check is a comprehensive, scheduled walk-through of your property's interior and exterior. Visits typically take place weekly during the critical winter freeze season and bi-weekly during the spring and summer, though we customize the cadence to your exact occupancy schedule. Home Check pricing starts at $65 per visit."
        },
        {
          q: "What is inspected during a routine Home Check?",
          a: "We follow an exhaustive 30-point coastal inspection checklist. We cycle all plumbing fixtures to keep trap seals filled and detect hidden leaks, verify HVAC heating and cooling performance, monitor indoor and crawlspace humidity levels, inspect major appliances and electrical panels, check windows and exterior doors for weather tightness, and assess the roofline and grounds for storm or pest activity."
        },
        {
          q: "How and when do I receive the inspection report?",
          a: "After every completed check, a detailed digital report is delivered in real-time directly to your preferred email recipients. Each report contains GPS-verified timestamped photography, sensor readings, system statuses, and actionable notes from your dedicated Property Manager."
        },
        {
          q: "What happens if an urgent issue (like a leak or heating failure) is detected?",
          a: "If an urgent situation is discovered, we take immediate protective action on the spot—such as shutting off the main water valve to prevent flooding or diagnosing an HVAC lockout. We contact you immediately with high-resolution photos, a clear explanation of the situation, and an immediate plan of action to resolve it promptly."
        }
      ]
    },
    {
      category: "In-House Handyman, Carpentry & Assembly",
      description: "Quality craft, furniture assembly, and small repairs without contractor delays.",
      questions: [
        {
          q: "What handyman, carpentry, and assembly services do you handle in-house?",
          a: "We handle a wide spectrum of punch-list and craft tasks: unboxing and white-glove assembly of high-end furniture (Restoration Hardware, Pottery Barn, Arhaus), soft-close cabinet hinge and drawer slide adjustments, planing sticking doors and window sashes, bathroom hardware and grab bar installations, heavy mirror and art hanging, TV mounting, drywall patching, caulking renewal, and exterior punch-list repairs."
        },
        {
          q: "Why do retained annual clients receive preferred, affordable labor rates?",
          a: "We intentionally structure our in-house handyman and carpentry rates to be fair and exceptionally affordable as an exclusive perk of having an annual property care agreement with Elevated Property Care. Because we already manage your home and know its systems, we want you to comfortably rely on your trusted Property Manager rather than spending valuable weekends searching for, vetting, and waiting on unpredictable outside contractors."
        },
        {
          q: "Can clients without an annual care contract hire you for handyman work?",
          a: "Yes, but our primary scheduling commitment is always to our retained annual clients. Property owners who do not have an annual care contract with Elevated Property Care are billed at standard higher trade rates and are booked subject to crew availability."
        }
      ]
    },
    {
      category: "Exterior & Grounds Management (Landscaping, Pool & HVAC)",
      description: "Accountability, contractor auditing, and stopping unnecessary vendor charges.",
      questions: [
        {
          q: "How does Elevated Property Care manage routine landscaping and lawn care?",
          a: "All grounds care managed through Elevated Property Care receives complete hands-on oversight. We ensure that even basic services like weekly lawn mowing are executed to high standards—verifying proper blade height to avoid scalping sandy coastal soil, crisp spade edging, power blowing of patios and porches, and secure latching of all gates."
        },
        {
          q: "Can I choose my own preferred landscaping company?",
          a: "Yes. We maintain active partnerships with several vetted, insured local landscaping companies across Sussex County. This allows you to choose the crew, equipment style, and pricing tier you feel most comfortable with, while Elevated Property Care handles all the day-to-day scheduling, instructions, and quality auditing on your behalf."
        },
        {
          q: "How do you protect homeowners from vendor overselling and duplicate work?",
          a: "Service providers and tree care specialists often oversell homeowners on unnecessary chemical treatments, redundant fertilizations, or overlapping services. Because Elevated Property Care serves strictly as your independent advocate on the ground, our horticultural knowledge allows us to review every proposal critically. We eliminate fluff, prevent overlapping services, and ensure you only pay for what is genuinely necessary and beneficial for your grounds."
        },
        {
          q: "Do you coordinate pool, spa, and HVAC maintenance as well?",
          a: "Yes. We coordinate certified pool and spa maintenance (seasonal opening, weekly chemical balancing, filter cleaning, and winterization) and HVAC preventative maintenance tune-ups to protect heat pumps and condenser coils from coastal salt air corrosion."
        }
      ]
    },
    {
      category: "Billing, Invoicing & Getting Started",
      description: "Frictionless accounting, itemized transparency, and simple onboarding.",
      questions: [
        {
          q: "How does your monthly billing system work?",
          a: "We invoice once a month, in arrears, at the end of each billing cycle. Every completed Home Check, routine maintenance task, and approved repair is detailed on a single, clean statement with full date and description transparency."
        },
        {
          q: "Why is a consolidated monthly invoice better than paying vendors directly?",
          a: "Managing multiple separate landscape cutters, pool techs, and maintenance workers for a vacation home can quickly become overwhelming and difficult to track. With Elevated Property Care, all services land on one reconciled monthly bill. We verify that every service was completed on time, to our quality standard, and at the agreed price before you are invoiced—with line-item breakdowns that outside vendors rarely provide."
        },
        {
          q: "Is Elevated Property Care licensed and insured?",
          a: "Yes. Elevated Property Care is a fully registered Delaware corporation, carrying comprehensive commercial general liability insurance. We also strictly require and verify that all affiliated trade partners and subcontractors maintain active general liability and statutory workers' compensation policies."
        },
        {
          q: "What are the first steps to get started?",
          a: "Getting started begins with a complimentary on-site property walkthrough. We walk your home together (or coordinate access via lockbox) to review mechanical systems, shutoff valves, exterior exposures, and seasonal priorities. Within 24–48 hours, we provide a clear, itemized annual proposal tailored specifically to your home."
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap(c => c.questions);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(f => ({
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

      <div className="w-full pb-20 overflow-hidden space-y-16">
        {/* Hero Section */}
        <section className="bg-coastal-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="bg-sand-400 text-coastal-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded inline-block">
              Homeowner Manual & Knowledge Base
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              A straightforward guide to our coastal Home Checks, preferred in-house labor rates, vendor quality control, and consolidated monthly billing.
            </p>

            {/* Quality Badges */}
            <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs">
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ 365-Day Dedicated Local Oversight
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ Real-Time Photo Reports After Every Check
              </span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-sand-200">
                ✓ One Reconciled Monthly Invoice
              </span>
            </div>
          </div>
        </section>

        {/* FAQ Content Sections */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {faqCategories.map((cat, catIdx) => (
            <section key={catIdx} className="space-y-6">
              <div className="border-b border-sand-200 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-coastal-700">
                  Section 0{catIdx + 1}
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                  {cat.category}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {cat.description}
                </p>
              </div>

              <div className="space-y-4">
                {cat.questions.map((faq, faqIdx) => (
                  <div
                    key={faqIdx}
                    className="bg-white p-6 sm:p-7 rounded-2xl border border-sand-200 shadow-sm hover:border-coastal-300 transition duration-200 space-y-2.5"
                  >
                    <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.q}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sand-100 p-8 sm:p-12 rounded-3xl border border-sand-300 text-center space-y-5">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Have a Specific Question About Your Home?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Every coastal property has unique requirements. We are available 365 days a year to answer your questions or schedule a complimentary walkthrough.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/annual-estimate#walkthrough-form"
                className="bg-coastal-900 hover:bg-coastal-950 text-white font-semibold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-sm transition"
              >
                Schedule Complimentary Walkthrough
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-sand-50 text-coastal-900 border border-sand-300 font-semibold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition"
              >
                Send Us a Message
              </Link>
              <a
                href="tel:3022780938"
                className="bg-white hover:bg-sand-50 text-coastal-900 border border-sand-300 font-semibold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center"
              >
                Call (302) 278-0938
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
