import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Coperture industriali - RB SNC"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-foreground leading-tight mb-6 animate-fade-in-up">
            Coperture industriali e bonifica amianto
          </h1>
          <p className="text-lg md:text-xl text-navy-foreground/80 mb-10 leading-relaxed max-w-2xl" style={{ animationDelay: "0.15s" }}>
            Interventi professionali su coperture industriali, capannoni e strutture produttive, con soluzioni sicure per la bonifica amianto e il rifacimento dei tetti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Richiedi informazioni
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
