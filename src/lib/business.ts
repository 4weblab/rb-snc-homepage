/**
 * Dati aziendali canonici di RB SNC.
 * Unica fonte di verità per i JSON-LD del sito.
 */

export const SITE_URL = "https://www.rb-snc.it";

export const businessAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: "Via Sansughe 3",
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
    telephone: "+39 049 7382238",
    contactType: "customer service",
    email: "info@rb-snc.it",
    areaServed: "IT",
    availableLanguage: ["Italian"],
  },
  {
    "@type": "ContactPoint" as const,
    telephone: "+39 335 6010096",
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
  "@type": "LocalBusiness" as const,
  "@id": `${SITE_URL}/#business`,
  name: "RB SNC di Bertoluzzo e Ragazzo",
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: "+39 049 7382238",
  email: "info@rb-snc.it",
  taxID: "04244010288",
  vatID: "04244010288",
  address: businessAddress,
  areaServed,
  contactPoint: contactPoints,
};

/** Reference compatta al LocalBusiness via @id (per evitare duplicazioni). */
export const localBusinessRef = { "@id": `${SITE_URL}/#business` };

/** LocalBusiness JSON-LD pronto da serializzare nel <head>. */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  ...localBusiness,
};