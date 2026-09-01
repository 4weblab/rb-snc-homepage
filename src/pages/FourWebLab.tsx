import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { localBusinessRef, SITE_URL } from "@/lib/business";
import {
  Camera,
  Gauge,
  MapPinned,
  Phone,
  ExternalLink,
  FileText,
  Quote,
} from "lucide-react";

const interventionCards = [
  {
    icon: Camera,
    title: "Portfolio Cantieri & Ristrutturazioni",
    description:
      "Galleria fotografica, schede progetto e descrizioni tecniche che mostrano bonifiche amianto, coperture industriali e tetti civili in Veneto.",
  },
  {
    icon: Gauge,
    title: "Prestazioni & Velocità su mobile",
    description:
      "Pagine leggere, caricamento rapido e navigazione fluida su smartphone e tablet, per non perdere contatti in movimento.",
  },
  {
    icon: MapPinned,
    title: "Struttura e SEO Locale Veneto",
    description:
      "Architettura ottimizzata per Google, schema markup, sitemap e contenuti geolocalizzati per Padova, Vicenza, Treviso, Venezia, Verona e oltre.",
  },
  {
    icon: Phone,
    title: "Punti di contatto e richiesta preventivi agevolata",
    description:
      "Numeri diretti, email, form di richiesta sopralluogo e link ai servizi posizionati strategicamente su ogni pagina.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/4weblab`,
      name: "La Presenza Digitale di RB snc: Progettata e Curata da 4 Web Lab",
      description:
        "Credit page e case study del sito web di R.B. s.n.c., progettato e curato da 4 Web Lab per l'edilizia, la bonifica amianto e le coperture in Veneto.",
      url: `${SITE_URL}/4weblab`,
      publisher: localBusinessRef,
      mainEntity: localBusinessRef,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "4 Web Lab", item: `${SITE_URL}/4weblab` },
      ],
    },
  ],
};

const FourWebLab = () => (
  <>
    <Helmet>
      <title>Sito web RB snc by 4 Web Lab | Credit & Case Study</title>
      <meta
        name="description"
        content="Scopri come 4 Web Lab ha progettato la presenza digitale di R.B. s.n.c.: sito web per edilizia, bonifica amianto e coperture in Veneto."
      />
      <link rel="canonical" href="https://rb-snc.it/4weblab" />
      <meta property="og:title" content="Sito web RB snc by 4 Web Lab | Credit & Case Study" />
      <meta
        property="og:description"
        content="Scopri come 4 Web Lab ha progettato la presenza digitale di R.B. s.n.c.: sito web per edilizia, bonifica amianto e coperture in Veneto."
      />
      <meta property="og:url" content="https://rb-snc.it/4weblab" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <main className="pt-16">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy/[0.95] via-navy/85 to-navy/70">
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Credits & Case Study
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              La Presenza Digitale di RB snc: Progettata e Curata da 4 Web Lab
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              Un sito web pensato per l'edilizia, le ristrutturazioni e la bonifica amianto in Veneto: veloce su mobile, ottimizzato per i motori di ricerca e progettato per trasformare ogni visita in una richiesta di preventivo.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border/60 shadow-card p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/20" />
            <blockquote className="relative z-10 text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-medium">
                "Siamo molto soddisfatti del nuovo sito web realizzato da 4 Web Lab. La presentazione dei nostri cantieri è chiara e professionale, e ricevere richieste di contatto è diventato più semplice che mai. Un investimento che ci ha permesso di raccontare al meglio il nostro lavoro sul campo."
              </p>
              <footer className="text-sm text-muted-foreground">
                <span className="block font-heading font-semibold text-foreground">R.B. s.n.c. di Bertoluzzo e Ragazzo</span>
                <span className="block">Bonifica amianto e coperture industriali — Veneto</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* GRIGLIA INTERVENTI TECNICI */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Gli interventi tecnici sul sito
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quattro aree di lavoro per rendere RB snc visibile, credibile e facile da contattare online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interventionCards.map((card) => (
              <div
                key={card.title}
                className="group bg-card rounded-xl border border-border/60 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOX AGENZIA & LINKS */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-navy/[0.95] via-navy/90 to-navy/80 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="shrink-0 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <FileText className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Agenzia web: 4 Web Lab
                </h2>
                <p className="text-white/85 leading-relaxed max-w-2xl">
                  4 Web Lab è lo studio specializzato in siti web per negozi, professionisti e aziende. Ha curato il restyling digitale di R.B. s.n.c. combinando design funzionale, velocità e strategia di visibilità locale per il settore edile e delle coperture in Veneto.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild variant="hero" size="lg" className="font-semibold">
                <a
                  href="https://4weblab.it"
                  target="_blank"
                  rel="noopener"
                >
                  Visita 4 Web Lab
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </main>

    <Footer />
  </>
);

export default FourWebLab;
