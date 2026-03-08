import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme, type ThemeId } from "@/contexts/ThemeContext";
import heroBg1 from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";

const heroImages = [
  { src: heroBg1, alt: "Coperture industriali - RB SNC" },
  { src: heroBg2, alt: "Installazione coperture metalliche" },
  { src: heroBg3, alt: "Capannoni industriali" },
  { src: heroBg4, alt: "Bonifica amianto su coperture" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentTheme, setTheme, themes } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const themeKeys = Object.keys(themes) as ThemeId[];

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
            Coperture industriali e bonifica amianto
          </h1>
          <p className="text-xl md:text-2xl font-heading font-semibold text-navy-foreground/85 mb-10 leading-relaxed max-w-2xl" style={{ animationDelay: "0.15s" }}>
            Interventi professionali su coperture industriali, capannoni e strutture produttive, con soluzioni sicure per la bonifica amianto e il rifacimento dei tetti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="font-semibold">
              Richiedi informazioni
            </Button>
          </div>
        </div>
      </div>

      {/* Theme selector */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2 py-1.5 shadow-lg">
          {themeKeys.map((id) => {
            const isActive = currentTheme === id;
            return (
              <button
                key={id}
                onClick={() => setTheme(id)}
                className={`
                  flex items-center gap-2 rounded-full px-4 py-2 text-xs font-body font-semibold tracking-wide transition-all duration-300
                  ${isActive
                    ? "bg-white/95 text-foreground shadow-md"
                    : "text-white/80 hover:bg-white/15 hover:text-white"
                  }
                `}
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0 border border-white/30"
                  style={{ backgroundColor: themes[id].dot }}
                />
                <span className="hidden sm:inline">{themes[id].label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
