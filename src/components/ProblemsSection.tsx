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
    <section className="py-20 lg:py-28 bg-muted/60 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-destructive/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-destructive mb-3">
            Perché intervenire
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Amianto e coperture danneggiate: quando intervenire
          </h2>
          <p className="text-muted-foreground text-lg">
            Non tutti i problemi sono visibili subito, ma ignorarli può avere conseguenze serie nel tempo.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="group relative flex flex-col rounded-2xl bg-card border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 md:p-8"
              >
                {/* Icon Header */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-destructive" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {problem.title}
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {problem.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {problem.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-destructive/30 via-accent/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contatti"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Richiedi un sopralluogo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
