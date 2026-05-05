import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Award, HardHat } from "lucide-react";
import heroBg1 from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";

const heroImages = [
  { src: heroBg1, alt: "Rifacimento copertura industriale R.B. s.n.c. a Cittadella, Padova" },
  { src: heroBg2, alt: "Installazione coperture metalliche su capannone in Veneto" },
  { src: heroBg3, alt: "Capannoni industriali con nuove coperture realizzate da R.B. s.n.c." },
  { src: heroBg4, alt: "Bonifica amianto e smaltimento eternit su copertura industriale" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={image.alt}
            src={image.src}
            alt={image.alt}
            width={1920}
            height={1080}
            decoding="async"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.35)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-foreground leading-tight mb-6 animate-fade-in-up">
            R.B. s.n.c. - Il vostro partner per la bonifica amianto e rifacimento coperture in Veneto
          </h1>
          <p className="text-xl md:text-2xl font-heading font-semibold text-navy-foreground/85 mb-10 leading-relaxed max-w-2xl" style={{ animationDelay: "0.15s" }}>
            R.B. s.n.c. interviene a Cittadella, Padova e in tutto il Veneto per{" "}
            <Link
              to="/servizi"
              className="text-accent hover:text-accent/80 underline-offset-4 hover:underline transition-colors"
            >
              bonifica amianto, smaltimento eternit e rifacimento coperture
            </Link>
            . Lavoriamo con aziende, capannoni industriali e privati, garantendo interventi rapidi, esperienza sul campo e{" "}
            <Link
              to="/realizzazioni"
              className="text-accent hover:text-accent/80 underline-offset-4 hover:underline transition-colors"
            >
              gestione diretta dei lavori
            </Link>{" "}
            senza intermediari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="hero" size="xl" className="font-semibold">
              <Link to="/contatti">Richiedi un sopralluogo</Link>
            </Button>
          </div>
          {/* Micro Trust */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-navy-foreground/80" style={{ animationDelay: "0.45s" }}>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              Interventi rapidi
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              Esperienza consolidata
            </span>
            <span className="flex items-center gap-2">
              <HardHat className="w-4 h-4 text-accent" />
              Lavori gestiti direttamente
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
