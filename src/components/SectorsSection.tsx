import { Factory, Warehouse, Truck, Store, Building2 } from "lucide-react";

const sectors = [
  { icon: Factory, title: "Industria", description: "Stabilimenti produttivi e impianti industriali." },
  { icon: Warehouse, title: "Capannoni produttivi", description: "Coperture per capannoni e strutture prefabbricate." },
  { icon: Truck, title: "Logistica", description: "Centri logistici, magazzini e piattaforme distributive." },
  { icon: Store, title: "Strutture commerciali", description: "Centri commerciali e grandi superfici di vendita." },
  { icon: Building2, title: "Edifici industriali", description: "Uffici, laboratori e strutture direzionali." },
];

const SectorsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Settori serviti
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Operiamo in diversi contesti del settore industriale e commerciale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="text-center p-6 rounded-lg hover:bg-muted transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <sector.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{sector.title}</h3>
              <p className="text-sm text-muted-foreground">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
