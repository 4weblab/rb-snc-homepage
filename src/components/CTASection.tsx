import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
          Richiedi informazioni per il tuo progetto
        </h2>
        <p className="text-navy-foreground/70 max-w-lg mx-auto mb-10">
          Contattaci per un sopralluogo gratuito e un preventivo personalizzato.
        </p>
        <Button variant="cta" size="xl">
          Contattaci
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
