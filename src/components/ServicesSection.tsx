import { ShieldCheck, Factory, Home, ArrowRight, Star, Timer, Award, Users } from "lucide-react";
import serviceAmianto from "@/assets/service-amianto.jpg";
import serviceCoperture from "@/assets/service-coperture-industriali.jpg";
import serviceTetto from "@/assets/service-tetto-civile.jpg";

const services = [
  {
    icon: ShieldCheck,
    title: "Bonifica amianto e smaltimento eternit",
    description:
      "Rimozione e smaltimento amianto su capannoni, aziende e abitazioni nel rispetto delle normative vigenti.",
    href: "/servizi",
    image: serviceAmianto,
    featured: true,
  },
  {
    icon: Factory,
    title: "Rifacimento coperture industriali",
    description:
      "Interventi su tetti e coperture per aziende e capannoni industriali, con soluzioni durevoli e sicure.",
    href: "/servizi",
    image: serviceCoperture,
    featured: false,
  },
  {
    icon: Home,
    title: "Rifacimento tetti civili",
    description:
      "Ristrutturazione e sostituzione coperture per abitazioni private.",
    href: "/servizi",
    image: serviceTetto,
    featured: false,
  },
];

const trustItems = [
  {
    icon: Timer,
    title: "Interventi rapidi",
    description: "Siamo organizzati per intervenire in tempi brevi.",
  },
  {
    icon: Award,
    title: "Esperienza consolidata",
    description:
      "Oltre 20 anni di esperienza nel settore delle coperture e della bonifica amianto.",
  },
  {
    icon: Users,
    title: "Gestione diretta",
    description: "Lavori gestiti direttamente dal nostro team, senza intermediari.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/40 relative overflow-hidden">
      {/* Soft decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Cosa facciamo
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            I nostri servizi
          </h2>
          <p className="text-muted-foreground text-lg">
            Interventi professionali per aziende, capannoni e privati in tutto il Veneto.
          </p>
        </div>

        {/* SERVICE CARDS — 3 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;
            const isFeatured = service.featured;
            return (
              <a
                key={service.title}
                href={service.href}
                className={`group relative flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  isFeatured
                    ? "bg-primary text-primary-foreground ring-1 ring-primary/30"
                    : "bg-card text-card-foreground border border-border/60"
                }`}
              >
                {/* Top visual */}
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {isFeatured && (
                    <>
                      <div className="absolute inset-0 bg-primary/55" />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                        <Star className="w-3 h-3 fill-current" />
                        Servizio principale
                      </div>
                    </>
                  )}

                  {/* Icon badge — overlapping */}
                  <div className="absolute -bottom-7 left-6 w-14 h-14 rounded-xl bg-card shadow-lg ring-1 ring-border/60 flex items-center justify-center">
                    <Icon
                      className={`w-7 h-7 ${isFeatured ? "text-accent" : "text-primary"}`}
                      strokeWidth={1.75}
                    />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 pt-10 flex flex-col flex-grow">
                  <h3
                    className={`text-2xl font-heading font-bold leading-snug ${
                      isFeatured ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <div className="w-12 h-1 bg-accent rounded-full my-4" />
                  <p
                    className={`leading-relaxed flex-grow ${
                      isFeatured ? "text-primary-foreground/85" : "text-muted-foreground"
                    }`}
                  >
                    {service.description}
                  </p>

                  <span
                    className={`inline-flex items-center gap-2 mt-6 text-sm font-semibold group-hover:gap-3 transition-all ${
                      isFeatured ? "text-accent" : "text-primary"
                    }`}
                  >
                    Scopri di più
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* TRUST STRIP */}
        <div className="mt-8 lg:mt-10 rounded-2xl bg-card border border-border/60 shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-border gap-6 md:gap-0">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 md:px-6 first:md:pl-0 last:md:pr-0"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
