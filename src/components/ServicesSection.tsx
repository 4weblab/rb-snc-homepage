import { Factory, ShieldCheck, Hammer, Layers, Wrench } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Bonifica amianto",
    description: "Rimozione e smaltimento amianto in conformità alle normative vigenti.",
    href: "/servizi",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&fit=crop",
  },
  {
    icon: Factory,
    title: "Coperture industriali",
    description: "Progettazione e posa di coperture metalliche per edifici industriali e commerciali.",
    href: "/servizi",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80&fit=crop",
  },
  {
    icon: Hammer,
    title: "Rifacimento tetti",
    description: "Interventi completi di rifacimento e ristrutturazione coperture esistenti.",
    href: "/servizi",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&fit=crop",
  },
  {
    icon: Layers,
    title: "Sovracoperture",
    description: "Installazione di sovracoperture per migliorare isolamento e prestazioni.",
    href: "/servizi",
    image: "https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=600&q=80&fit=crop",
  },
  {
    icon: Wrench,
    title: "Manutenzione coperture",
    description: "Piani di manutenzione programmata per garantire durata e sicurezza.",
    href: "/servizi",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            I nostri servizi
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interventi specializzati per ogni esigenza nel settore delle coperture industriali.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="relative overflow-hidden w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group bg-card rounded-xl border border-border/60 shadow-[0_2px_16px_-4px_rgba(31,58,95,0.08),0_4px_32px_-8px_rgba(31,58,95,0.06)] hover:shadow-[0_8px_40px_-8px_rgba(31,58,95,0.15),0_4px_20px_-4px_rgba(31,58,95,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Accent line */}
              <div className="h-1 bg-primary lg:group-hover:opacity-0 transition-opacity duration-300" />

              {/* Hover image overlay — desktop only */}
              <div
                className="absolute inset-0 hidden lg:block opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300 ease-out bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/40 to-black/20 rounded-xl" />

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 lg:group-hover:bg-white/20 transition-colors ring-1 ring-primary/10">
                  <service.icon className="w-7 h-7 text-primary lg:group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground lg:group-hover:text-white transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground lg:group-hover:text-white/80 transition-colors leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-primary lg:group-hover:text-white transition-colors group-hover:underline">
                  Scopri di più →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
