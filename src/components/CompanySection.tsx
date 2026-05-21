import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Award, Users } from "lucide-react";

const stats = [
  { value: "25+", label: "Anni di esperienza nel settore" },
  { value: "500+", label: "Interventi realizzati tra aziende e privati" },
  { value: "Veneto", label: "Area principale di intervento" },
  { value: "H24", label: "Disponibilità per urgenze" },
];

const strengths = [
  {
    icon: Zap,
    title: "Interventi rapidi",
    description: "Siamo organizzati per intervenire in tempi brevi su tutto il territorio.",
  },
  {
    icon: Award,
    title: "Esperienza consolidata",
    description: "Anni di attività nel settore amianto e coperture.",
  },
  {
    icon: Users,
    title: "Gestione diretta",
    description: "Lavori seguiti direttamente dal nostro team, senza intermediari.",
  },
];

const CompanySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header label */}
        <div className="text-center mb-12">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-accent relative">
            Esperienza sul campo
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-accent/50 rounded-full" />
          </span>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
              Esperienza e affidabilità nel settore amianto e coperture
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              R.B. s.n.c. opera a Cittadella, Padova e in tutto il Veneto nel settore della{" "}
              <Link
                to="/servizi"
                className="text-primary font-semibold underline-offset-4 hover:underline"
              >
                bonifica amianto e delle coperture
              </Link>
              , offrendo interventi professionali per aziende, capannoni industriali e abitazioni private.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Nel tempo abbiamo maturato esperienza diretta sul campo, gestendo ogni intervento senza intermediari e garantendo tempi rapidi,{" "}
              <Link
                to="/certificazioni"
                className="text-primary font-semibold underline-offset-4 hover:underline"
              >
                lavorazioni a norma e documentazione completa
              </Link>
              .
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/servizi">Scopri i nostri servizi</Link>
            </Button>
          </div>

          {/* RIGHT — Numbers */}
          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-card rounded-xl border border-border/70 p-6 lg:p-7 text-center shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths block */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 pt-10 border-t border-border/50">
          {strengths.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex items-start gap-4 p-2"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 ring-1 ring-accent/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
