import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg1 from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";

const heroImages = [
  { src: heroBg1, alt: "Coperture industriali - 4 WEBLAB" },
  { src: heroBg2, alt: "Installazione coperture metalliche" },
  { src: heroBg3, alt: "Capannoni industriali" },
  { src: heroBg4, alt: "Bonifica amianto su coperture" },
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
            RB snc - Il vostro partner per la bonifica amianto e rifacimento coperture in Veneto
          </h1>
          <p className="text-xl md:text-2xl font-heading font-semibold text-navy-foreground/85 mb-10 leading-relaxed max-w-2xl" style={{ animationDelay: "0.15s" }}>
            RB SNC interviene a Cittadella, Padova e in tutto il Veneto per bonifica amianto, smaltimento eternit e rifacimento coperture. Lavoriamo con aziende, capannoni industriali e privati, garantendo interventi rapidi, esperienza sul campo e gestione diretta dei lavori senza intermediari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="hero" size="xl" className="font-semibold">
              <Link to="/contatti">Richiedi un sopralluogo</Link>
            </Button>
          </div>
          {/* Micro Trust */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-navy-foreground/80" style={{ animationDelay: "0.45s" }}>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
              Interventi rapidi
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
              Esperienza consolidata
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
              Lavori gestiti direttamente
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
