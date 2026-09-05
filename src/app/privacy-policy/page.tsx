import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Elevated Property Care',
  description: 'Privacy policy and data protection commitments for Elevated Property Care LLC.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="text-xs text-slate-500">Last updated: September 2026</p>

      <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <p>
          Elevated Property Care LLC respects your privacy. We hold all client, home access, and property records in the strictest professional confidentiality.
        </p>
        <h2 className="font-serif text-lg font-bold text-slate-900 pt-2">Information We Collect</h2>
        <p>
          When you request an estimate or contact us, we collect basic identification details such as your name, email address, phone number, and property location. We do not sell, rent, or trade your personal data to any third parties under any circumstances.
        </p>
        <h2 className="font-serif text-lg font-bold text-slate-900 pt-2">Security of Property Records</h2>
        <p>
          All digital property review inspection reports, access protocols, and mechanical schedules are maintained in encrypted, secure environments accessible only to your designated Property Manager.
        </p>
      </div>
    </div>
  );
}
