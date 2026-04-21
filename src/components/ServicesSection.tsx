import { ShieldCheck, Factory, Home, ArrowRight, Star } from "lucide-react";

const primaryService = {
  icon: ShieldCheck,
  title: "Bonifica amianto e smaltimento eternit",
  description:
    "Rimozione e smaltimento amianto su capannoni, aziende e abitazioni nel rispetto delle normative vigenti.",
  href: "/servizi",
  badge: "Servizio principale",
};

const secondaryServices = [
  {
    icon: Factory,
    title: "Rifacimento coperture industriali",
    description:
      "Interventi su tetti e coperture per aziende e capannoni industriali, con soluzioni durevoli e sicure.",
    href: "/servizi",
  },
  {
    icon: Home,
    title: "Rifacimento tetti civili",
    description:
      "Ristrutturazione e sostituzione coperture per abitazioni private.",
    href: "/servizi",
  },
];

const ServicesSection = () => {
  const Primary = primaryService.icon;

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* PRIMARY CARD — bonifica amianto */}
          <a
            href={primaryService.href}
            className="group relative lg:col-span-1 lg:row-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/85 text-primary-foreground p-8 lg:p-10 shadow-[0_12px_40px_-12px_hsl(var(--primary)/0.45)] hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.55)] transition-all duration-300 hover:-translate-y-1 ring-1 ring-primary/20 lg:scale-[1.02]"
          >
            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-2xl rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-1.5 self-start bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <Star className="w-3 h-3 fill-current" />
                {primaryService.badge}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center mb-6 ring-1 ring-primary-foreground/20 group-hover:bg-primary-foreground/25 transition-colors">
                <Primary className="w-9 h-9 text-primary-foreground" strokeWidth={1.75} />
              </div>

              <h3 className="text-2xl lg:text-[1.7rem] font-heading font-bold leading-tight mb-3">
                {primaryService.title}
              </h3>
              <p className="text-primary-foreground/85 leading-relaxed mb-6 flex-grow">
                {primaryService.description}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                Scopri il servizio
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* SECONDARY CARDS */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {secondaryServices.map((service) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.title}
                  href={service.href}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border/60 p-8 shadow-[0_4px_20px_-6px_hsl(var(--primary)/0.08)] hover:shadow-[0_12px_36px_-8px_hsl(var(--primary)/0.18)] hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <Icon
                      className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors"
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Scopri di più
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
