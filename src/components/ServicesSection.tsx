import { Factory, ShieldCheck, Hammer, Layers, Wrench } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Bonifica amianto",
    description: "Rimozione e smaltimento amianto in conformità alle normative vigenti.",
    href: "/servizi",
  },
  {
    icon: Factory,
    title: "Coperture industriali",
    description: "Progettazione e posa di coperture metalliche per edifici industriali e commerciali.",
    href: "/servizi",
  },
  {
    icon: Hammer,
    title: "Rifacimento tetti",
    description: "Interventi completi di rifacimento e ristrutturazione coperture esistenti.",
    href: "/servizi",
  },
  {
    icon: Layers,
    title: "Sovracoperture",
    description: "Installazione di sovracoperture per migliorare isolamento e prestazioni.",
    href: "/servizi",
  },
  {
    icon: Wrench,
    title: "Manutenzione coperture",
    description: "Piani di manutenzione programmata per garantire durata e sicurezza.",
    href: "/servizi/manutenzione-coperture",
  },
];
const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            I nostri servizi
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interventi specializzati per ogni esigenza nel settore delle coperture industriali.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group bg-card rounded-lg border border-border p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-primary group-hover:underline">
                Scopri di più →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
