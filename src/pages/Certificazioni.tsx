import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { localBusiness } from "@/lib/business";
import {
  ShieldCheck,
  ScrollText,
  FileCheck,
  Search,
  ClipboardList,
  HardHat,
  Truck,
  FileText,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import heroImg from "@/assets/certificazioni-hero.jpg";
import sicurezzaImg from "@/assets/certificazioni-sicurezza.jpg";
import docImg from "@/assets/certificazioni-documentazione.jpg";

const phases = [
  { icon: Search, title: "Sopralluogo e valutazione iniziale", description: "Analisi diretta del sito per capire condizioni, materiali e contesto dell'intervento." },
  { icon: ClipboardList, title: "Analisi e definizione dell'intervento", description: "Studio della situazione e definizione delle modalità più corrette per procedere." },
  { icon: HardHat, title: "Organizzazione del cantiere", description: "Allestimento delle aree di lavoro e predisposizione delle misure di sicurezza." },
  { icon: ShieldCheck, title: "Esecuzione del lavoro", description: "Realizzazione dell'intervento seguendo le procedure tecniche richieste." },
  { icon: Truck, title: "Gestione dello smaltimento", description: "Conferimento dei materiali presso impianti autorizzati con la documentazione di trasporto." },
];

const benefits = [
  "Evitare interventi improvvisati",
  "Ridurre i rischi legati alla gestione dei materiali",
  "Avere una gestione ordinata del lavoro",
  "Ricevere indicazioni chiare su come procedere",
];

const webPage = {
  "@type": "WebPage",
  name: "Sicurezza e normativa amianto in Veneto",
  description:
    "RB SNC opera nel rispetto della normativa amianto (Legge 257/92 e D.M. 6 settembre 1994), gestendo sicurezza, smaltimento e documentazione degli interventi.",
  url: "https://rb-snc.it/certificazioni",
  about: {
    "@type": "Thing",
    name: "Normativa amianto e sicurezza interventi",
  },
  publisher: { "@id": "https://rb-snc.it/#business" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@context": "https://schema.org", ...localBusiness },
    webPage,
  ],
};

const Certificazioni = () => {
  return (
    <>
      <Helmet>
        <title>Sicurezza e normativa amianto in Veneto | RB SNC</title>
        <meta
          name="description"
          content="RB SNC opera nel rispetto della normativa amianto (Legge 257/92 e D.M. 6 settembre 1994). Scopri come vengono gestiti sicurezza, smaltimento e documentazione."
        />
        <link rel="canonical" href="https://rb-snc.it/certificazioni" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Operatore con dispositivi di sicurezza su copertura"
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/[0.97] via-navy/90 to-navy/70" />
            <div className="absolute inset-0 bg-navy/20" />
          </div>
          <div className="relative container mx-auto px-4 lg:px-8 py-24 md:py-28 lg:py-32">
            <div className="max-w-3xl animate-fade-in-up">
              <span className="inline-flex items-center gap-2 bg-accent/15 backdrop-blur-sm border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Sicurezza e conformità
              </span>
              <p className="text-sm md:text-base text-navy-foreground/80 font-medium mb-4 tracking-wide">
                Interventi eseguiti nel rispetto della normativa vigente
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-foreground leading-[1.1] mb-6">
                Sicurezza, normativa e gestione degli interventi su amianto
              </h1>
              <p className="text-lg md:text-xl text-navy-foreground/95 leading-relaxed mb-8 max-w-2xl">
                Gli interventi su amianto e coperture richiedono attenzione, competenza e rispetto delle normative. RB SNC opera seguendo procedure precise, gestendo ogni fase del lavoro in modo ordinato, dalla valutazione iniziale fino alla documentazione finale.
              </p>
              <Button asChild variant="hero" size="xl" className="font-semibold">
                <Link to="/contatti">Richiedi sopralluogo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* INTRO STRIP */}
        <section className="bg-muted/40 border-b border-border/60">
          <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: ScrollText, label: "Riferimenti normativi reali" },
                { icon: ShieldCheck, label: "Procedure di sicurezza chiare" },
                { icon: FileCheck, label: "Documentazione tracciabile" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-card rounded-xl border border-border/60 p-5 shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm md:text-base font-semibold text-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEZIONE 1 - NORMATIVA */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
              <div className="lg:col-span-7 animate-fade-in-up">
                <span className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider mb-4">
                  <BookOpen className="w-4 h-4" />
                  Normativa
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5 leading-tight">
                  Normativa di riferimento per la gestione dell'amianto
                </h2>
                <div className="w-20 h-1 bg-accent rounded-full mb-7" />
                <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    La gestione dei materiali contenenti amianto è regolata da normative specifiche a livello nazionale. RB SNC opera nel rispetto della <strong className="text-foreground font-semibold">Legge 27 marzo 1992, n. 257</strong>, che disciplina la cessazione dell'impiego dell'amianto, e del <strong className="text-foreground font-semibold">D.M. 6 settembre 1994</strong>, che definisce le metodologie tecniche per la valutazione, il controllo e la bonifica dei materiali presenti negli edifici.
                  </p>
                  <p>
                    Questi riferimenti normativi stabiliscono come devono essere valutati i rischi, come devono essere eseguiti gli interventi e come deve essere gestito lo smaltimento dei materiali.
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="relative bg-muted/60 rounded-2xl border-2 border-accent/30 shadow-card-hover p-7 md:p-8 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                  <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
                    <div className="w-11 h-11 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
                      <ScrollText className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground">Riferimenti normativi</h3>
                  </div>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="w-1.5 rounded-full bg-accent shrink-0" />
                      <div>
                        <p className="font-bold text-foreground mb-1.5">Legge 27 marzo 1992, n. 257</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Cessazione dell'utilizzo dell'amianto e norme per la sua gestione.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1.5 rounded-full bg-accent shrink-0" />
                      <div>
                        <p className="font-bold text-foreground mb-1.5">D.M. 6 settembre 1994</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Metodologie tecniche per la gestione e la bonifica dei materiali contenenti amianto.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* SEZIONE 2 - COSA SIGNIFICA */}
        <section className="py-20 lg:py-28 bg-muted/40 border-y border-border/60">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={sicurezzaImg}
                    alt="Intervento di bonifica amianto in sicurezza"
                    width={1280}
                    height={900}
                    loading="lazy"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 animate-fade-in-up">
                <span className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  Conformità nella pratica
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5 leading-tight">
                  Cosa significa lavorare nel rispetto della normativa
                </h2>
                <div className="w-20 h-1 bg-accent rounded-full mb-7" />
                <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Per chi deve intervenire su una copertura o su materiali contenenti amianto, la normativa può sembrare complessa. In realtà, il suo obiettivo è semplice: garantire che ogni intervento venga eseguito in sicurezza e con procedure corrette.
                  </p>
                  <p className="text-foreground font-medium">Affidarsi a un'azienda che opera nel rispetto della normativa significa:</p>
                </div>
                <ul className="mt-7 space-y-4">
                  {benefits.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 bg-card rounded-xl border-2 border-border/70 px-5 py-4 shadow-sm hover:shadow-card hover:border-accent/40 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-foreground font-medium leading-relaxed pt-1">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                  Questa attenzione si riflette su tutto il lavoro, dal sopralluogo fino alla conclusione dell'intervento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEZIONE 3 - GESTIONE COMPLETA */}
        <section className="py-24 lg:py-36 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider mb-4">
                <ClipboardList className="w-4 h-4" />
                Processo
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5 leading-tight">
                Gestione completa dell'intervento
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Un intervento su amianto o su una copertura non riguarda solo l'esecuzione pratica del lavoro. È un processo che deve essere gestito in modo preciso in ogni fase.
              </p>
              <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                RB SNC segue un percorso strutturato:
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
                {phases.map((phase, i) => (
                  <div
                    key={i}
                    className="group relative bg-card rounded-2xl border-2 border-border/70 p-6 lg:p-7 shadow-sm hover:shadow-card-hover hover:-translate-y-2 hover:border-accent/40 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="absolute -top-3.5 left-6 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {i + 1}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mt-2 group-hover:bg-accent/15 transition-colors">
                      <phase.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="font-heading text-base lg:text-lg font-bold text-foreground mb-3 leading-snug">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                ))}
              </div>

              <p className="mt-12 text-center text-base md:text-lg text-muted-foreground">
                Per maggiori dettagli sui{" "}
                <Link to="/servizi" className="text-primary font-semibold underline underline-offset-4 hover:text-accent transition-colors">
                  servizi di bonifica amianto e coperture
                </Link>
                , consulta la pagina dedicata.
              </p>
            </div>
          </div>
        </section>

        {/* SEZIONE 4 - DOCUMENTAZIONE */}
        <section className="py-20 lg:py-28 bg-muted/40 border-y border-border/60">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-7 animate-fade-in-up">
                <span className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider mb-4">
                  <FileText className="w-4 h-4" />
                  Documentazione
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5 leading-tight">
                  Documentazione e tracciabilità
                </h2>
                <div className="w-20 h-1 bg-accent rounded-full mb-7" />
                <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Un aspetto fondamentale degli interventi su amianto è la gestione della documentazione. Ogni fase del lavoro deve essere accompagnata da una corretta tracciabilità, in linea con le normative di riferimento.
                  </p>
                  <p>
                    Al termine dell'intervento, il cliente riceve la documentazione collegata al lavoro svolto, utile per avere un quadro chiaro delle attività eseguite.
                  </p>
                  <p>
                    Questo approccio consente di affrontare l'intervento con maggiore tranquillità, sapendo che ogni fase è stata gestita in modo corretto.
                  </p>
                  <p className="text-foreground font-medium">
                    Al termine dell'intervento, il cliente ha un quadro chiaro e documentato del lavoro svolto.
                  </p>
                  <p>
                    Puoi vedere{" "}
                    <Link to="/realizzazioni" className="text-primary font-semibold underline underline-offset-4 hover:text-accent transition-colors">
                      alcuni interventi realizzati
                    </Link>{" "}
                    per avere un'idea concreta del nostro lavoro.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={docImg}
                    alt="Documentazione tecnica intervento amianto"
                    width={1280}
                    height={1280}
                    loading="lazy"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="relative py-20 lg:py-28 bg-navy text-navy-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-accent/30 via-transparent to-primary/30" />
          <div className="relative container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm md:text-base text-accent font-semibold uppercase tracking-wider mb-4">
                Parlaci del tuo caso, ti ricontattiamo dopo una prima valutazione
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                Hai bisogno di verificare la tua situazione?
              </h2>
              <p className="text-lg md:text-xl text-navy-foreground/85 leading-relaxed mb-10">
                Se hai dubbi su una copertura, sulla presenza di amianto o sulla necessità di intervenire, il primo passo è una valutazione. RB SNC può analizzare la situazione e indicarti come procedere in modo chiaro e senza complicazioni.
              </p>
              <Button asChild variant="hero" size="xl" className="font-semibold">
                <Link to="/contatti">
                  Richiedi sopralluogo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Certificazioni;