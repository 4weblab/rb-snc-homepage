import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { localBusiness, areaServed } from "@/lib/business";
import {
  ShieldCheck,
  Factory,
  Home,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  FileCheck,
  Search,
  ClipboardList,
  HardHat,
  Truck,
  FileText,
  Award,
  Building2,
  Warehouse,
  Wrench,
  Recycle,
  House,
  Car,
  Umbrella,
  Hammer,
} from "lucide-react";
import heroImg from "@/assets/servizi-hero.jpg";
import docImg from "@/assets/servizi-documentazione.jpg";
import amiantoImg from "@/assets/service-amianto.jpg";
import copertureImg from "@/assets/service-coperture-industriali.jpg";
import tettoImg from "@/assets/service-tetto-civile.jpg";

const summaryCards = [
  {
    icon: ShieldCheck,
    title: "Bonifica amianto e smaltimento eternit",
    description:
      "Il nostro servizio principale: rimozione di lastre in eternit e materiali contenenti amianto da capannoni, abitazioni e strutture civili.",
    href: "#bonifica-amianto",
    image: amiantoImg,
    alt: "Operatore specializzato in bonifica amianto su copertura in Veneto",
    featured: true,
  },
  {
    icon: Factory,
    title: "Rifacimento coperture industriali",
    description:
      "Interventi su tetti di capannoni, magazzini e strutture produttive, anche in continuità con la rimozione di vecchie lastre.",
    href: "#coperture-industriali",
    image: copertureImg,
    alt: "Rifacimento copertura industriale su capannone",
    featured: false,
  },
  {
    icon: Home,
    title: "Rifacimento tetti civili",
    description:
      "Sostituzione e rifacimento di tetti per abitazioni, garage, tettoie e pertinenze, con valutazione tecnica della copertura.",
    href: "#tetti-civili",
    image: tettoImg,
    alt: "Rifacimento tetto civile con copertura in tegole",
    featured: false,
  },
];

const amiantoMiniCards = [
  {
    icon: AlertTriangle,
    title: "Quando è necessario intervenire",
    text: "È consigliabile richiedere una valutazione quando sono presenti coperture in eternit datate, lastre danneggiate, infiltrazioni, rotture visibili o materiali sospetti su edifici civili e industriali. Anche in assenza di un’urgenza evidente, un sopralluogo permette di capire lo stato reale della copertura.",
  },
  {
    icon: Clock,
    title: "Perché non rimandare",
    text: "Una copertura deteriorata può peggiorare con il tempo, soprattutto se esposta a pioggia, vento, grandine o sbalzi termici. Intervenire in modo programmato consente di gestire meglio tempi, costi e sicurezza del cantiere.",
  },
  {
    icon: FileCheck,
    title: "Cosa riceve il cliente",
    text: "Il cliente riceve un servizio ordinato, con valutazione iniziale, organizzazione dell’intervento, smaltimento del materiale e rilascio della documentazione collegata al lavoro svolto.",
  },
];

const copertureMiniCards = [
  { icon: Building2, label: "Capannoni produttivi" },
  { icon: Warehouse, label: "Magazzini e depositi" },
  { icon: Wrench, label: "Coperture usurate o danneggiate" },
  { icon: Recycle, label: "Interventi dopo rimozione eternit" },
];

const tettiMiniCards = [
  { icon: House, label: "Abitazioni private" },
  { icon: Car, label: "Garage e pertinenze" },
  { icon: Umbrella, label: "Tettoie" },
  { icon: Hammer, label: "Coperture civili deteriorate" },
];

const processSteps = [
  {
    icon: Search,
    title: "Sopralluogo",
    text: "Valutiamo lo stato della copertura, il contesto dell’intervento e le eventuali criticità presenti.",
  },
  {
    icon: ClipboardList,
    title: "Analisi e preventivo",
    text: "Prepariamo una proposta chiara, coerente con il tipo di lavoro richiesto e con le condizioni rilevate.",
  },
  {
    icon: HardHat,
    title: "Organizzazione del cantiere",
    text: "Definiamo tempi, modalità operative e gestione dell’area di intervento.",
  },
  {
    icon: Truck,
    title: "Intervento e smaltimento",
    text: "Eseguiamo il lavoro previsto e gestiamo il corretto conferimento dei materiali rimossi.",
  },
  {
    icon: FileText,
    title: "Documentazione finale",
    text: "Al termine dell’intervento forniamo la documentazione collegata al lavoro svolto.",
    linkLabel: "documentazione collegata",
    linkHref: "/certificazioni",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@context": "https://schema.org", ...localBusiness },
    {
      "@type": "Service",
      name: "Servizi di bonifica amianto e rifacimento coperture in Veneto",
      provider: { "@id": localBusiness["@id"] },
      areaServed,
      serviceType: [
        "Bonifica amianto",
        "Smaltimento eternit",
        "Rifacimento coperture industriali",
        "Rifacimento tetti civili",
      ],
      description:
        "R.B. s.n.c. offre servizi di bonifica amianto, smaltimento eternit, rifacimento coperture industriali e tetti civili in Veneto, con gestione dell’intervento, smaltimento e documentazione finale.",
      url: "https://rb-snc.it/servizi",
    },
  ],
};

const Servizi = () => (
  <>
    <Helmet>
      <title>Servizi bonifica amianto e coperture Veneto | R.B. s.n.c.</title>
      <meta
        name="description"
        content="R.B. s.n.c. offre servizi di bonifica amianto, smaltimento eternit, rifacimento coperture industriali e tetti civili in Veneto. Richiedi un sopralluogo."
      />
      <link rel="canonical" href="https://rb-snc.it/servizi" />
      <meta property="og:title" content="Servizi bonifica amianto e coperture Veneto | R.B. s.n.c." />
      <meta property="og:description" content="Bonifica amianto, smaltimento eternit, rifacimento coperture industriali e tetti civili in Veneto." />
      <meta property="og:url" content="https://rb-snc.it/servizi" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <main className="pt-16">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Operatore specializzato in bonifica amianto su copertura industriale in Veneto"
            width={1920}
            height={1024}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/55" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-10 shadow-xl animate-fade-in-up">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              Servizi R.B. s.n.c.
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-5">
              Servizi di bonifica amianto e coperture in Veneto
            </h1>
            <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-2xl">
              R.B. s.n.c. affianca aziende, capannoni, condomini e privati con
              interventi professionali su amianto, eternit, coperture
              industriali e tetti civili in tutto il Veneto. Ogni lavoro viene
              gestito con attenzione alla sicurezza, alla normativa e alla
              corretta documentazione finale.
            </p>
            <Button asChild variant="cta" size="xl">
              <Link to="/contatti">Richiedi sopralluogo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* INTRO + SUMMARY CARDS */}
      <section className="py-24 lg:py-32 bg-muted/30 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              I nostri servizi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5">
              Interventi professionali per aziende, capannoni e privati
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-8" />
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Ogni edificio ha esigenze diverse: una copertura industriale
                da mettere in sicurezza, un tetto civile da rifare, una
                vecchia lastra in eternit da rimuovere o un intervento che
                richiede documentazione precisa. Per questo R.B. s.n.c. non propone
                soluzioni standard, ma valuta il contesto, lo stato della
                copertura e le necessità operative prima di programmare il
                lavoro.
              </p>
              <p>
                L’obiettivo è gestire ogni fase con ordine: sopralluogo,
                valutazione tecnica, intervento, smaltimento e rilascio della
                documentazione prevista. In questo modo il cliente ha un unico
                riferimento e può affrontare il lavoro con maggiore
                tranquillità.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {summaryCards.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.title}
                  href={c.href}
                  className={`group relative flex flex-col rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                    c.featured
                      ? "bg-primary text-primary-foreground ring-1 ring-primary/30"
                      : "bg-card text-card-foreground border border-border/60"
                  }`}
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.alt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {c.featured && (
                      <div className="absolute inset-0 bg-primary/55" />
                    )}
                    {c.featured && (
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                        Servizio principale
                      </div>
                    )}
                    {/* subtle mirror highlight */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  </div>
                  <div className="absolute top-[180px] left-6 -translate-y-1/2 w-14 h-14 rounded-xl bg-card shadow-lg ring-1 ring-border/60 flex items-center justify-center z-10">
                    <Icon
                      className={`w-7 h-7 ${c.featured ? "text-accent" : "text-primary"}`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="p-6 md:p-8 pt-10 flex flex-col flex-grow">
                    <h3
                      className={`text-xl font-heading font-bold leading-snug ${
                        c.featured ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {c.title}
                    </h3>
                    <div className="w-12 h-1 bg-accent rounded-full my-4" />
                    <p
                      className={`leading-relaxed flex-grow text-sm ${
                        c.featured ? "text-primary-foreground/85" : "text-muted-foreground"
                      }`}
                    >
                      {c.description}
                    </p>
                    <span
                      className={`inline-flex items-center gap-2 mt-6 text-sm font-semibold group-hover:gap-3 transition-all ${
                        c.featured ? "text-accent" : "text-primary"
                      }`}
                    >
                      Vai alla sezione
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* BONIFICA AMIANTO — main section */}
      <section
        id="bonifica-amianto"
        className="py-24 lg:py-36 relative overflow-hidden bg-background"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full mb-5 shadow-lg uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Servizio principale
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-[1.1]">
                Bonifica amianto e smaltimento eternit in Veneto
              </h2>
              <div className="w-24 h-1.5 bg-accent rounded-full mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  La bonifica amianto è un intervento delicato che non può
                  essere improvvisato. Lastre in eternit, vecchie coperture,
                  manufatti deteriorati o materiali contenenti amianto devono
                  essere valutati e gestiti con procedure corrette, personale
                  preparato e smaltimento presso canali autorizzati.
                </p>
                <p>
                  R.B. s.n.c. opera in Veneto occupandosi della rimozione e dello
                  smaltimento di materiali contenenti amianto, con particolare
                  attenzione a coperture di capannoni, edifici produttivi,
                  abitazioni private, garage, tettoie e strutture civili. Il
                  servizio è pensato per chi ha bisogno di mettere in
                  sicurezza un immobile, sostituire una copertura ormai
                  degradata o regolarizzare una situazione che richiede un
                  intervento tecnico.
                </p>
                <p>
                  L’amianto diventa particolarmente critico quando il
                  materiale è danneggiato, friabile, esposto agli agenti
                  atmosferici o soggetto a rotture. In questi casi è
                  importante evitare interventi fai-da-te e affidarsi a
                  professionisti in grado di valutare lo stato del manufatto,
                  organizzare il cantiere e seguire le procedure previste.
                </p>
                <p>
                  L’intervento non si limita alla rimozione fisica del
                  materiale. La parte più importante è la gestione completa
                  del lavoro: protezione dell’area, modalità operative
                  sicure, trasporto, conferimento e{" "}
                  <Link
                    to="/certificazioni"
                    className="text-primary font-semibold underline-offset-4 hover:underline"
                  >
                    documentazione e certificazioni previste
                  </Link>
                  . Per questo R.B. s.n.c. accompagna il cliente lungo tutto il
                  percorso, dalla prima valutazione fino alla chiusura
                  dell’intervento, con il supporto di esempi concreti tratti
                  dagli{" "}
                  <Link
                    to="/realizzazioni"
                    className="text-primary font-semibold underline-offset-4 hover:underline"
                  >
                    interventi già realizzati
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover ring-1 ring-border/60">
                <img
                  src={amiantoImg}
                  alt="Operatore specializzato in bonifica amianto su copertura in Veneto"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                {/* mirror highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden md:flex items-center gap-3 bg-card border border-border/60 shadow-lg rounded-xl px-5 py-3">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Operativi in</p>
                  <p className="font-heading font-bold text-foreground">
                    Tutto il Veneto
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MINI CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {amiantoMiniCards.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="relative rounded-2xl bg-card border border-border/60 p-7 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {m.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-accent rounded-full mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {m.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COPERTURE INDUSTRIALI */}
      <section
        id="coperture-industriali"
        className="py-20 lg:py-28 bg-muted/30"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1 lg:col-span-7 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/60 relative">
                <img
                  src={copertureImg}
                  alt="Rifacimento copertura industriale su capannone"
                  width={1280}
                  height={860}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[3/2]"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-4 hidden md:flex items-center gap-3 bg-card border border-border/60 shadow-lg rounded-xl px-5 py-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Factory className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Settore</p>
                  <p className="font-heading font-bold text-foreground text-sm">
                    Industriale
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                Industriale
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
                Rifacimento coperture industriali
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Le coperture industriali richiedono interventi pensati per
                  superfici ampie, strutture produttive e capannoni soggetti
                  a usura, infiltrazioni o necessità di adeguamento. R.B. s.n.c.
                  si occupa del rifacimento di coperture industriali
                  valutando lo stato del tetto, le condizioni della
                  struttura e le esigenze operative dell’attività.
                </p>
                <p>
                  Un intervento su un capannone non riguarda solo l’aspetto
                  estetico. Una copertura efficiente protegge macchinari,
                  merci, impianti e persone. Per questo è importante
                  scegliere soluzioni resistenti, durature e compatibili con
                  l’utilizzo dell’edificio.
                </p>
                <p>
                  Quando il lavoro è collegato alla rimozione di vecchie
                  lastre in eternit, il rifacimento della copertura può
                  diventare parte di un intervento più completo: prima la
                  bonifica, poi la posa della nuova copertura, con una
                  gestione più ordinata del cantiere.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-14">
            {copertureMiniCards.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="rounded-xl bg-card border border-border/60 p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-start gap-3"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <p className="font-heading font-semibold text-foreground leading-snug">
                    {m.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TETTI CIVILI */}
      <section id="tetti-civili" className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                Civile
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
                Rifacimento tetti civili
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  R.B. s.n.c. interviene anche su tetti civili, abitazioni
                  private, garage, pertinenze e piccole strutture che
                  necessitano di rifacimento o sostituzione della
                  copertura. Il lavoro viene valutato in base allo stato del
                  tetto, alla presenza di eventuali materiali critici e al
                  tipo di soluzione più adatta all’edificio.
                </p>
                <p>
                  Per un privato, affrontare un intervento sul tetto può
                  sembrare complesso: tempi, costi, sicurezza, scelta dei
                  materiali e gestione del cantiere. Per questo seguiamo il
                  cliente con un processo ordinato e comprensibile.
                </p>
                <p>
                  Il rifacimento di un tetto civile può essere necessario
                  in caso di infiltrazioni, tegole danneggiate, coperture
                  vecchie, strutture deteriorate o presenza di manufatti in
                  eternit. In ogni caso, il primo passo corretto è una
                  valutazione tecnica dello stato della copertura.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover ring-1 ring-border/60 relative">
                <img
                  src={tettoImg}
                  alt="Rifacimento tetto civile con copertura in tegole"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-14">
            {tettiMiniCards.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="rounded-xl bg-card border border-border/60 p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-start gap-3"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <p className="font-heading font-semibold text-foreground leading-snug">
                    {m.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Il nostro metodo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Come lavoriamo
            </h2>
            <p className="text-muted-foreground text-lg">
              Un percorso ordinato dal sopralluogo alla documentazione finale.
            </p>
          </div>

          <div className="relative">
            {/* horizontal line desktop */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">
              {processSteps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="group relative text-center">
                    <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-card border-2 border-primary/20 shadow-md flex items-center justify-center group-hover:border-accent group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" strokeWidth={1.75} />
                    </div>
                    <div className="mt-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                      {i + 1}
                    </div>
                    <h3 className="font-heading font-bold text-foreground mt-3 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed px-2">
                      {s.linkLabel ? (
                        <>
                          Al termine dell’intervento forniamo la{" "}
                          <Link
                            to={s.linkHref!}
                            className="text-primary font-semibold underline-offset-4 hover:underline"
                          >
                            {s.linkLabel}
                          </Link>{" "}
                          al lavoro svolto.
                        </>
                      ) : (
                        s.text
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AUTOREVOLEZZA */}
      <section className="py-20 lg:py-28 bg-navy/[0.04] border-y border-border/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover ring-1 ring-border/60 relative">
                <img
                  src={docImg}
                  alt="Documentazione tecnica per intervento di smaltimento eternit"
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
                Sicurezza, documentazione e lavori eseguiti
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  In lavori come la bonifica amianto, il rifacimento di
                  coperture industriali e gli interventi su tetti civili, la
                  parte tecnica è importante quanto l’esecuzione pratica. RB
                  SNC lavora con attenzione alla sicurezza del cantiere, alla
                  corretta gestione dei materiali e alla documentazione
                  richiesta.
                </p>
                <p>
                  Per approfondire gli aspetti legati a conformità, documenti
                  e requisiti operativi, visita la pagina dedicata alle
                  certificazioni. Per vedere alcuni esempi di interventi,
                  consulta la sezione realizzazioni.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Link
                  to="/certificazioni"
                  className="group rounded-2xl bg-card border-2 border-border/60 p-6 md:p-7 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-accent/60 transition-all duration-300 flex items-center gap-5"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-accent/15 flex items-center justify-center shrink-0 transition-colors">
                    <Award className="w-7 h-7 text-primary group-hover:text-accent transition-colors" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-foreground text-lg">
                      Certificazioni
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Conformità e documentazione
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1.5 group-hover:text-accent transition-all" />
                </Link>
                <Link
                  to="/realizzazioni"
                  className="group rounded-2xl bg-card border-2 border-border/60 p-6 md:p-7 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-accent/60 transition-all duration-300 flex items-center gap-5"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-accent/15 flex items-center justify-center shrink-0 transition-colors">
                    <CheckCircle2 className="w-7 h-7 text-primary group-hover:text-accent transition-colors" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-foreground text-lg">
                      Realizzazioni
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Interventi eseguiti
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1.5 group-hover:text-accent transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 lg:py-28 bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Parlaci del tuo caso, ti ricontattiamo dopo una prima valutazione
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5">
            Hai bisogno di valutare un intervento?
          </h2>
          <p className="text-navy-foreground/75 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Se devi rimuovere amianto, sostituire una copertura in eternit,
            rifare il tetto di un capannone o intervenire su una copertura
            civile, il primo passo è un sopralluogo. R.B. s.n.c. può valutare la
            situazione e indicarti il percorso più adatto.
          </p>
          <Button asChild variant="cta" size="xl">
            <Link to="/contatti">Richiedi sopralluogo</Link>
          </Button>
        </div>
      </section>
    </main>

    <Footer />
  </>
);

export default Servizi;
