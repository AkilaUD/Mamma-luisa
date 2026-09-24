import { site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    image: "https://mammaluisa.com/images/gallery/10.jpg",
    url: site.website,
    telephone: site.phone.display,
    email: site.email,
    servesCuisine: "Italian",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: "RI",
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    description: site.hours,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday", "Monday"],
        opens: "17:00",
        closes: "22:00",
      },
    ],
    sameAs: [site.links.facebook, site.links.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
