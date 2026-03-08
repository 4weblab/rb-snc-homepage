import { Factory, Warehouse, Truck, Store, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import sectorsBg from "@/assets/sectors-bg.jpg";

const sectors = [
  { icon: Factory, title: "Industria", description: "Stabilimenti produttivi e impianti industriali." },
  { icon: Warehouse, title: "Capannoni produttivi", description: "Coperture per capannoni e strutture prefabbricate." },
  { icon: Truck, title: "Logistica", description: "Centri logistici, magazzini e piattaforme distributive." },
  { icon: Store, title: "Strutture commerciali", description: "Centri commerciali e grandi superfici di vendita." },
  { icon: Building2, title: "Edifici industriali", description: "Uffici, laboratori e strutture direzionali." },
];

const TimelineItem = ({
  sector,
  index,
}: {
  sector: (typeof sectors)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isRight = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = sector.icon;

  return (
    <div ref={ref} className="relative flex items-center w-full">
      {/* Desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center gap-8">
        {/* Left column */}
        <div className={`flex ${isRight ? "justify-end" : "justify-end"}`}>
          {!isRight ? (
            <Link
              to="/settori"
              className={`block max-w-md w-full rounded-xl border border-border/60 bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              } transition-all duration-500 ease-out`}
            >
              <div className="h-1 bg-primary" />
              <div className="flex items-start gap-4 p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors ring-1 ring-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{sector.title}</h3>
                  <p className="text-sm text-muted-foreground">{sector.description}</p>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Center node */}
        <div className="flex flex-col items-center relative z-10 px-4">
          <div
            className={`w-4 h-4 rounded-full bg-primary border-2 border-background shadow-md transition-transform duration-500 ${
              isVisible ? "scale-100" : "scale-0"
            }`}
          />
        </div>

        {/* Right column */}
        <div className="flex justify-start">
          {isRight ? (
            <Link
              to="/settori"
              className={`block max-w-md w-full rounded-xl border border-border/60 bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              } transition-all duration-500 ease-out`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{sector.title}</h3>
                  <p className="text-sm text-muted-foreground">{sector.description}</p>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex lg:hidden items-center gap-6 w-full">
        <div className="flex flex-col items-center shrink-0">
          <div
            className={`w-3 h-3 rounded-full bg-primary border-2 border-background shadow-md transition-transform duration-500 ${
              isVisible ? "scale-100" : "scale-0"
            }`}
          />
        </div>
        <Link
          to="/settori"
          className={`block flex-1 p-5 rounded-lg border border-border bg-card hover:shadow-card-hover transition-all duration-300 group ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-6"
          } transition-all duration-500 ease-out`}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1 text-sm">{sector.title}</h3>
              <p className="text-xs text-muted-foreground">{sector.description}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const SectorsSection = () => {
  return (
    <section
      className="py-20 lg:py-28 relative bg-cover bg-center bg-fixed max-md:bg-scroll"
      style={{ backgroundImage: `url(${sectorsBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Settori serviti
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Operiamo in diversi contesti del settore industriale e commerciale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/30 -translate-x-1/2" />
          {/* Vertical line - mobile */}
          <div className="lg:hidden absolute left-[5px] top-0 bottom-0 w-0.5 bg-white/30" />

          <div className="flex flex-col gap-10 lg:gap-12">
            {sectors.map((sector, index) => (
              <TimelineItem key={sector.title} sector={sector} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
