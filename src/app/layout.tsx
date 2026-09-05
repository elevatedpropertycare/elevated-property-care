import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  metadataBase: new URL('https://elevatedpropertycare.com'),
  title: {
    default: 'Elevated Property Care | Delaware Luxury Home Watch & Estate Management',
    template: '%s | Elevated Property Care',
  },
  description: 'Premier absentee home watch, routine property reviews, and preventative maintenance for luxury beach houses in Rehoboth Beach, Bethany Beach, Lewes, and Fenwick Island.',
  keywords: [
    'home watch rehoboth beach de',
    'property management coastal delaware',
    'home watch bethany beach',
    'property maintenance lewes de',
    'vacation home inspection delaware',
    'estate caretaking fenwick island',
    'absentee homeowner services sussex county',
  ],
  openGraph: {
    title: 'Elevated Property Care | Delaware Luxury Beach Home Management',
    description: 'Hamptons-standard preventative care and absentee home watch for luxury vacation homes in Coastal Sussex County, Delaware.',
    url: 'https://elevatedpropertycare.com',
    siteName: 'Elevated Property Care',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-sans">
        <SchemaMarkup />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
