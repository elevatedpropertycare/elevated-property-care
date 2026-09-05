import React from 'react';

interface SchemaProps {
  type?: 'LocalBusiness' | 'FAQPage' | 'Service';
  data?: any;
}

export default function SchemaMarkup({ type = 'LocalBusiness', data }: SchemaProps) {
  const defaultLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://elevatedpropertycare.com/#organization",
    "name": "Elevated Property Care",
    "url": "https://elevatedpropertycare.com",
    "telephone": "+1-302-278-0938",
    "email": "info@elevatedpropertycare.com",
    "priceRange": "28808",
    "description": "Luxury absentee property management, weekly home watch inspections, and preventative maintenance across coastal Sussex County, Delaware.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lewes",
      "addressRegion": "DE",
      "postalCode": "19958",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.7745,
      "longitude": -75.1393
    },
    "areaServed": [
      { "@type": "City", "name": "Rehoboth Beach" },
      { "@type": "City", "name": "Bethany Beach" },
      { "@type": "City", "name": "Lewes" },
      { "@type": "City", "name": "Fenwick Island" },
      { "@type": "City", "name": "Dewey Beach" },
      { "@type": "City", "name": "Ocean View" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const schemaPayload = data || defaultLocalBusinessSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPayload) }}
    />
  );
}
