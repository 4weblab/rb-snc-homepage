/**
 * Dati aziendali canonici di R.B. s.n.c..
 * Unica fonte di verità per i JSON-LD del sito.
 */

export const SITE_URL = "https://rb-snc.it";

export const businessAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: "Via Sansughe 6",
  addressLocality: "Cittadella",
  postalCode: "35013",
  addressRegion: "PD",
  addressCountry: "IT",
};

export const areaServed = {
  "@type": "AdministrativeArea" as const,
  name: "Veneto",
};

export const contactPoints = [
  {
    "@type": "ContactPoint" as const,
    telephone: "+393356010096",
    contactType: "customer service",
    areaServed: "IT",
    availableLanguage: ["Italian"],
  },
];

/**
 * LocalBusiness completo da usare come entità canonica.
 * Importato e referenziato/embedded da tutte le pagine.
 */
export const localBusiness = {
  "@type": "RoofingContractor" as const,
  "@id": `${SITE_URL}/#business`,
  name: "R.B. s.n.c. di Bertoluzzo e Ragazzo",
  image: `${SITE_URL}/og-image.webp`,
  logo: `${SITE_URL}/favicon.webp`,
  url: SITE_URL,
  telephone: "+393356010096",
  taxID: "04244010288",
  vatID: "04244010288",
  priceRange: "€€",
  address: businessAddress,
  geo: {
    "@type": "GeoCoordinates" as const,
    latitude: 45.6379303,
    longitude: 11.7905672,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed,
  contactPoint: contactPoints,
  sameAs: ["https://share.google/vVq1eG5PIttanZ00O"],
  knowsAbout: [
    "Coperture industriali",
    "Bonifica amianto",
    "Smaltimento eternit",
    "Rifacimento tetti civili",
    "Lattoneria",
    "Sovracoperture coibentate",
    "Edilizia civile",
  ],
};

/** Reference compatta al LocalBusiness via @id (per evitare duplicazioni). */
export const localBusinessRef = { "@id": `${SITE_URL}/#business` };

/** LocalBusiness JSON-LD pronto da serializzare nel <head>. */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  ...localBusiness,
};