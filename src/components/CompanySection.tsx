import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CompanySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Esperienza e affidabilità nel settore delle coperture
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RB SNC opera nel settore dell'edilizia industriale con competenza tecnica consolidata. Ogni intervento viene eseguito nel rispetto delle normative di sicurezza e con l'utilizzo di materiali certificati.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dalla progettazione alla realizzazione, accompagniamo i clienti con soluzioni personalizzate e un servizio di assistenza dedicato.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/chi-siamo">Scopri l'azienda</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "20+", label: "Anni di esperienza" },
              { value: "500+", label: "Progetti realizzati" },
              { value: "100%", label: "Conformità normativa" },
              { value: "H24", label: "Assistenza tecnica" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-lg border border-border p-6 text-center shadow-card"
              >
                <div className="text-3xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
