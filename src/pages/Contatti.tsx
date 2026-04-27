import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Phone,
  Smartphone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
  Inbox,
  PhoneCall,
  ClipboardCheck,
  CheckCircle2,
  Briefcase,
  Layers,
  ShieldCheck,
} from "lucide-react";
import heroImg from "@/assets/contatti-hero.jpg";
import { localBusiness } from "@/lib/business";

const quickContacts = [
  {
    icon: Phone,
    title: "Telefono",
    lines: [
      { label: "049 7382238", href: "tel:+390497382238" },
      { label: "335 6010096", href: "tel:+393356010096", icon: Smartphone },
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [{ label: "info@rb-snc.it", href: "mailto:info@rb-snc.it" }],
  },
  {
    icon: MapPin,
    title: "Area di intervento",
    lines: [{ label: "Veneto", href: null as string | null }],
  },
];

const steps = [
  { icon: Inbox, title: "Riceviamo la tua richiesta", description: "Analizziamo i dettagli che ci hai inviato per inquadrare il caso." },
  { icon: PhoneCall, title: "Ti ricontattiamo per capire il caso", description: "Una breve chiamata per chiarire il contesto e le esigenze." },
  { icon: ClipboardCheck, title: "Se necessario, fissiamo un sopralluogo", description: "Concordiamo data e orario per una verifica diretta sul posto." },
  { icon: CheckCircle2, title: "Ti forniamo indicazioni chiare sull'intervento", description: "Spieghiamo come procedere, tempi e modalità di lavoro." },
];

const utilityLinks = [
  {
    icon: Briefcase,
    title: "Servizi",
    description: "Bonifica amianto, coperture industriali e tetti civili.",
    href: "/servizi",
  },
  {
    icon: Layers,
    title: "Realizzazioni",
    description: "Esempi concreti di interventi eseguiti in Veneto.",
    href: "/realizzazioni",
  },
  {
    icon: ShieldCheck,
    title: "Certificazioni",
    description: "Normativa, sicurezza e gestione corretta dei materiali.",
    href: "/certificazioni",
  },
];

const contactPage = {
  "@type": "ContactPage",
  name: "Contatti RB SNC",
  description:
    "Contatta RB SNC per sopralluoghi su amianto, coperture e tetti in Veneto.",
  url: "https://rb-snc.it/contatti",
  publisher: { "@id": "https://rb-snc.it/#business" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@context": "https://schema.org", ...localBusiness },
    contactPage,
  ],
};

const Contatti = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Contatti RB SNC | Richiedi sopralluogo in Veneto</title>
        <meta
          name="description"
          content="Contatta RB SNC per sopralluoghi su bonifica amianto, smaltimento eternit, coperture industriali e tetti civili in Veneto."
        />
        <link rel="canonical" href="https://rb-snc.it/contatti" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Cantiere RB SNC con operatori in sicurezza su copertura industriale"
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/[0.95] via-navy/85 to-navy/70" />
          </div>
          <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Contatti RB SNC
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Richiedi un sopralluogo
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                Hai bisogno di rimuovere amianto, sostituire una copertura in eternit o intervenire su un tetto civile o industriale? Contatta RB SNC: valuteremo la situazione e ti indicheremo come procedere in modo chiaro.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
                  <a href="#form">
                    Compila il form
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATTI RAPIDI */}
        <section className="py-20 lg:py-24 bg-muted/40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="w-16 h-1.5 bg-accent rounded-full mb-5" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Contatti diretti
              </h2>
              <p className="text-lg text-muted-foreground">
                Chiamaci o scrivici: rispondiamo nel più breve tempo possibile.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {quickContacts.map((c) => (
                <div
                  key={c.title}
                  className="group bg-card rounded-2xl border-2 border-border/70 p-7 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 ring-1 ring-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:ring-accent transition-all duration-300">
                    <c.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                    {c.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {c.lines.map((line, idx) => {
                      const LineIcon = (line as any).icon;
                      const content = (
                        <span className="inline-flex items-center gap-2.5">
                          {LineIcon && <LineIcon className="w-4 h-4 text-accent shrink-0" />}
                          <span>{line.label}</span>
                        </span>
                      );
                      return (
                        <li key={idx} className="text-lg md:text-xl font-heading text-foreground">
                          {line.href ? (
                            <a
                              href={line.href}
                              className="hover:text-accent transition-colors font-bold"
                            >
                              {content}
                            </a>
                          ) : (
                            <span className="font-bold">{content}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORM + PROCESSO */}
        <section id="form" className="py-24 lg:py-32 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* FORM */}
              <div className="lg:col-span-7">
                <div className="w-16 h-1.5 bg-accent rounded-full mb-5" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Richiedi un sopralluogo
                </h2>
                <p className="text-base text-muted-foreground mb-8">
                  Compila i campi qui sotto. I campi contrassegnati con * sono obbligatori.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-3xl border-2 border-border shadow-card p-8 md:p-10 space-y-6"
                >
                  <div>
                    <Label htmlFor="nome" className="text-sm font-semibold">
                      Nome e cognome <span className="text-accent">*</span>
                    </Label>
                    <Input id="nome" name="nome" required className="mt-2 h-12 rounded-xl border-2 focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:border-accent transition-colors" placeholder="Mario Rossi" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="telefono" className="text-sm font-semibold">
                        Telefono <span className="text-accent">*</span>
                      </Label>
                      <Input id="telefono" name="telefono" type="tel" required className="mt-2 h-12 rounded-xl border-2 focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:border-accent transition-colors" placeholder="+39 ..." />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold">
                        Email
                      </Label>
                      <Input id="email" name="email" type="email" className="mt-2 h-12 rounded-xl border-2 focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:border-accent transition-colors" placeholder="nome@email.it" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="zona" className="text-sm font-semibold">
                      Comune / zona intervento
                    </Label>
                    <Input id="zona" name="zona" className="mt-2 h-12 rounded-xl border-2 focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:border-accent transition-colors" placeholder="Es. Cittadella (PD)" />
                  </div>

                  <div>
                    <Label htmlFor="tipo" className="text-sm font-semibold">
                      Tipo di intervento
                    </Label>
                    <select
                      id="tipo"
                      name="tipo"
                      className="mt-2 flex h-12 w-full rounded-xl border-2 border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:border-accent transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleziona un'opzione
                      </option>
                      <option value="bonifica-amianto">Bonifica amianto / eternit</option>
                      <option value="copertura-industriale">Rifacimento copertura industriale</option>
                      <option value="tetto-civile">Rifacimento tetto civile</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="messaggio" className="text-sm font-semibold">
                      Messaggio
                    </Label>
                    <Textarea
                      id="messaggio"
                      name="messaggio"
                      rows={5}
                      className="mt-2 resize-none rounded-xl border-2 focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:border-accent transition-colors"
                      placeholder="Descrivi brevemente la situazione (tipologia di edificio, dimensioni indicative, eventuali urgenze)..."
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Checkbox id="privacy" required className="mt-0.5" />
                    <Label
                      htmlFor="privacy"
                      className="text-sm font-normal text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      Ho letto l'
                      <Link
                        to="/privacy-policy"
                        className="text-accent font-semibold hover:underline"
                      >
                        informativa privacy
                      </Link>
                      {" "}e acconsento al trattamento dei dati{" "}
                      <span className="text-accent">*</span>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="xl"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Invia Richiesta
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-5 text-center md:text-left">
                  Il form sarà attivato a breve. Per richieste urgenti, contattaci telefonicamente o via email.
                </p>
              </div>

              {/* PROCESSO */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="bg-muted/50 rounded-2xl border-2 border-border/70 p-7 md:p-8">
                  <div className="w-12 h-1 bg-accent rounded-full mb-4" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Cosa succede dopo la richiesta
                  </h2>
                  <ol className="space-y-5">
                    {steps.map((step, idx) => (
                      <li key={step.title} className="flex gap-4">
                        <div className="shrink-0 relative">
                          <div className="w-11 h-11 rounded-xl bg-card border-2 border-border flex items-center justify-center">
                            <step.icon className="w-5 h-5 text-accent" />
                          </div>
                          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center shadow-md">
                            {idx + 1}
                          </span>
                        </div>
                        <div className="pt-1">
                          <h3 className="font-heading font-bold text-base text-foreground mb-1">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AREA INTERVENTO */}
        <section className="py-24 lg:py-28 bg-muted/40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1.5 bg-accent rounded-full mb-5" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">
                  Interventi in tutto il Veneto
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  RB SNC opera in Veneto per interventi di bonifica amianto, smaltimento eternit, rifacimento coperture industriali e tetti civili.
                </p>
                <div className="flex items-center gap-3 text-sm text-foreground mb-6">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-semibold">Sede operativa: Cittadella (PD)</span>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=RB+SNC+Via+Sansughe+6+Cittadella"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 w-5 h-5" />
                    Apri Google Maps e raggiungici
                  </a>
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border-2 border-border/70 shadow-card overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 40%, hsl(var(--primary)) 0, transparent 40%), radial-gradient(circle at 70% 60%, hsl(var(--accent)) 0, transparent 40%)",
                  }} />
                  <div className="relative text-center px-8">
                    <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                    <p className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                      Veneto
                    </p>
                    <p className="text-muted-foreground">
                      Padova · Vicenza · Treviso · Venezia · Verona · Rovigo · Belluno
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LINK UTILI */}
        <section className="py-24 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="w-16 h-1.5 bg-accent rounded-full mb-5" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Vuoi approfondire prima di contattarci?
              </h2>
              <p className="text-lg text-muted-foreground">
                Scopri di più sui nostri interventi, sulle realizzazioni e sulla gestione normativa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {utilityLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group bg-card rounded-2xl border-2 border-border/70 p-7 hover:-translate-y-2 hover:border-accent hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <link.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {link.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Scopri di più
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="relative py-24 lg:py-28 bg-navy overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, hsl(var(--accent)) 0, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--primary)) 0, transparent 50%)",
          }} />
          <div className="relative container mx-auto px-4 lg:px-8 text-center">
            <p className="text-sm md:text-base text-accent font-semibold uppercase tracking-wider mb-4">
              Parlaci del tuo caso, ti ricontattiamo dopo una prima valutazione
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto">
              Hai bisogno di un intervento?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contattaci per una prima valutazione senza impegno.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-xl">
              <a href="#form">
                Richiedi sopralluogo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contatti;
