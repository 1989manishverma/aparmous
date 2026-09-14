import { SITE, SITE_URL } from "@/lib/site";

export const projectSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE_URL}/#project`,
      name: SITE.name,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}${SITE.ogImage}`,
      description: SITE.description,
      telephone: SITE.phoneTel,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sushant Golf City",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226030",
        addressCountry: "IN",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Floating paddle court" },
        { "@type": "LocationFeatureSpecification", name: "750-metre elevated skywalk" },
        { "@type": "LocationFeatureSpecification", name: "9-hole mini golf" },
        { "@type": "LocationFeatureSpecification", name: "66,000 sq.ft. clubhouse" },
        { "@type": "LocationFeatureSpecification", name: "Sky Lounge" },
        { "@type": "LocationFeatureSpecification", name: "Sky Villa" },
      ],
    },
    {
      "@type": "RealEstateListing",
      "@id": `${SITE_URL}/#listing`,
      name: "Luxury 3, 4 and 5 BHK homes at Jashn Golf Estate, Lucknow",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}${SITE.ogImage}`,
      description: SITE.description,
      mainEntity: { "@id": `${SITE_URL}/#project` },
    },
    {
      "@type": "Organization",
      name: "Aparamous Solutions Pvt. Ltd.",
      url: SITE_URL,
      email: "office@aparamous.com",
      telephone: "+918009227605",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No. 205 & 206, Millennium Place, Sector B, Ansal API, Sushant Golf City",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226030",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      name: SITE.name,
      url: `${SITE_URL}/`,
    },
  ],
};
