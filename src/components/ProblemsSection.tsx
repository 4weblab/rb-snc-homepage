import { AlertTriangle, Home, Clock, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Rischio amianto",
    points: ["Esposizione alle fibre", "Obblighi normativi", "Rischi per la salute"],
    description:
      "La presenza di amianto deteriorato può rappresentare un rischio reale per la salute e richiede interventi specifici nel rispetto delle normative vigenti.",
  },
  {
    icon: Home,
    title: "Danni alle coperture",
    points: ["Infiltrazioni d'acqua", "Degrado della struttura", "Perdita di isolamento"],
    description:
      "Una copertura danneggiata può causare infiltrazioni e peggioramenti strutturali, aumentando i costi di intervento nel tempo.",
  },
  {
    icon: Clock,
    title: "Intervento tardivo",
    points: ["Costi più elevati", "Lavori più invasivi", "Tempi più lunghi"],
    description:
      "Rimandare l'intervento porta spesso a situazioni più complesse, con lavori più lunghi e costosi rispetto a un intervento tempestivo.",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/70 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-destructive/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-destructive mb-4 relative">
            Perché intervenire
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-destructive/40 rounded-full" />
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-5">
            Amianto e coperture danneggiate: quando intervenire
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Non tutti i problemi sono visibili subito, ma ignorarli può avere conseguenze serie nel tempo.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-14">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="group relative flex flex-col rounded-2xl bg-card border border-border/80 shadow-lg hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-400 p-8 md:p-10"
              >
                {/* Icon Header */}
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 ring-1 ring-primary/15 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground tracking-tight">
                    {problem.title}
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {problem.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0 shadow-sm" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>

                {/* Bottom accent gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contatti"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/25 px-10 py-5 rounded-xl font-bold text-base tracking-wide transition-all duration-300 group"
          >
            Richiedi un sopralluogo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
