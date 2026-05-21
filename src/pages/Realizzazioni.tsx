import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/business";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  ShieldCheck,
  Factory,
  Home,
  ArrowRight,
  MapPin,
  Wrench,
  Tag,
  Layers,
  Clock,
  ZoomIn,
} from "lucide-react";

import heroImg from "@/assets/realizzazioni-hero.webp";
import amiantoPrima1 from "@/assets/realizzazione-amianto-prima-1.webp";
import amiantoPrima2 from "@/assets/realizzazione-amianto-prima-2.webp";
import amiantoPrima3 from "@/assets/realizzazione-amianto-prima-3.webp";
import amiantoDopo1 from "@/assets/realizzazione-amianto-dopo-1.webp";
import amiantoDopo2 from "@/assets/realizzazione-amianto-dopo-2.webp";
import amiantoDopo3 from "@/assets/realizzazione-amianto-dopo-3.webp";
import coperture1 from "@/assets/realizzazione-coperture-delmachem-1.webp";
import coperture2 from "@/assets/realizzazione-coperture-delmachem-2.webp";
import coperture3 from "@/assets/realizzazione-coperture-delmachem-3.webp";
import coperture4 from "@/assets/realizzazione-coperture-delmachem-4.webp";
import coperture5 from "@/assets/realizzazione-coperture-delmachem-5.webp";
import coperture6 from "@/assets/realizzazione-coperture-delmachem-6.webp";
import tetto1 from "@/assets/realizzazione-tetto-mestre-1.webp";
import tetto2 from "@/assets/realizzazione-tetto-mestre-2.webp";
import tetto3 from "@/assets/realizzazione-tetto-mestre-3.webp";
import tetto4 from "@/assets/realizzazione-tetto-mestre-4.webp";
import tetto5 from "@/assets/realizzazione-tetto-mestre-5.webp";
import tetto6 from "@/assets/realizzazione-tetto-mestre-6.webp";

import grandeAbb from "@/assets/grande-cantiere-abb-monselice.webp";
import grandeAdesiv from "@/assets/grande-cantiere-adesiv-bassano.webp";
import grandeAvicola from "@/assets/grande-cantiere-avicola-oppeano-verona.webp";
import grandePeugeot from "@/assets/grande-cantiere-peugeot-este.webp";
import grandeZilio from "@/assets/grande-cantiere-zilio-friola.webp";
import grandeItw from "@/assets/grande-cantiere-itw-padova.webp";
import grandeLidl from "@/assets/grande-cantiere-lidl-pordenone.webp";
import grandeUmana from "@/assets/grande-cantiere-umana-marghera.webp";

const grandiCantieri: { src: string; azienda: string; sede: string; alt: string }[] = [
  { src: grandeAbb, azienda: "ABB", sede: "Monselice", alt: "Copertura industriale ABB a Monselice realizzata da R.B. s.n.c." },
  { src: grandeAdesiv, azienda: "Adesiv", sede: "Bassano", alt: "Copertura industriale Adesiv a Bassano realizzata da R.B. s.n.c." },
  { src: grandeAvicola, azienda: "Azienda Avicola Oppeano", sede: "Verona", alt: "Copertura azienda avicola Oppeano a Verona realizzata da R.B. s.n.c." },
  { src: grandePeugeot, azienda: "Concessionaria Peugeot", sede: "Este", alt: "Copertura concessionaria Peugeot a Este realizzata da R.B. s.n.c." },
  { src: grandeZilio, azienda: "Industrie Zilio", sede: "Friola ( Vicenza )", alt: "Copertura industriale Zilio a Friola ( Vicenza ) realizzata da R.B. s.n.c." },
  { src: grandeItw, azienda: "ITW", sede: "Padova", alt: "Copertura industriale ITW a Padova realizzata da R.B. s.n.c." },
  { src: grandeLidl, azienda: "Magazzino LIDL", sede: "Pordenone", alt: "Copertura magazzino LIDL a Pordenone realizzata da R.B. s.n.c." },
  { src: grandeUmana, azienda: "Umana", sede: "Marghera", alt: "Copertura Umana a Marghera realizzata da R.B. s.n.c." },
];

type GalleryImg = { src: string; alt: string };

const projects = [
  {
    id: "bonifica-amianto",
    icon: ShieldCheck,
    tag: "Bonifica amianto",
    title: "Bonifica amianto su copertura industriale",
    text: "Intervento di bonifica amianto e smaltimento eternit su copertura industriale. R.B. s.n.c. gestisce direttamente il cantiere: rimozione in sicurezza delle lastre, confezionamento dei materiali secondo normativa e conferimento a centro autorizzato, con tutta la documentazione necessaria al committente.",
    main: { src: amiantoPrima1, alt: "Copertura industriale in eternit prima della bonifica amianto eseguita da R.B. s.n.c. a Bassano del Grappa ( Vicenza )" },
    gallery: [
      { src: amiantoPrima2, alt: "Lastre ondulate in cemento-amianto deteriorate su capannone industriale" },
      { src: amiantoPrima3, alt: "Panoramica della copertura in amianto prima dell'intervento di rimozione" },
      { src: amiantoDopo1, alt: "Nuova sovracopertura coibentata posata da R.B. s.n.c. dopo la bonifica amianto" },
      { src: amiantoDopo2, alt: "Vista prospettica della nuova copertura industriale dopo lo smaltimento eternit" },
      { src: amiantoDopo3, alt: "Dettaglio della nuova copertura ondulata bianca su capannone a Bassano del Grappa ( Vicenza )" },
    ] as GalleryImg[],
    details: [
      { icon: Tag, label: "Tipologia", value: "Bonifica amianto" },
      { icon: Layers, label: "Contesto", value: "Copertura industriale" },
      { icon: MapPin, label: "Area servita", value: "Veneto" },
      { icon: Wrench, label: "Intervento", value: "Rimozione e smaltimento eternit" },
      { icon: Clock, label: "Stato", value: "Intervento completato" },
    ],
  },
  {
    id: "coperture-industriali",
    icon: Factory,
    tag: "Coperture industriali",
    title: "Rifacimento copertura industriale",
    text: "Rifacimento completo della copertura di un capannone industriale: smontaggio della copertura esistente, posa di pannelli sandwich coibentati e finiture perimetrali. Intervento gestito direttamente da R.B. s.n.c., con attenzione a tempi, sicurezza in quota e continuità dell’attività produttiva.",
    main: { src: coperture1, alt: "Nuova copertura industriale in lamiera grecata realizzata da R.B. s.n.c. sul capannone Delmachem a Bassano del Grappa ( Vicenza )" },
    gallery: [
      { src: coperture2, alt: "Vista panoramica della nuova copertura industriale del capannone Delmachem a Bassano del Grappa ( Vicenza )" },
      { src: coperture3, alt: "Copertura industriale in eternit prima dell'intervento di rifacimento sul capannone Delmachem a Bassano del Grappa ( Vicenza )" },
      { src: coperture4, alt: "Dettaglio della nuova copertura industriale con lucernario sul capannone Delmachem a Bassano del Grappa ( Vicenza )" },
      { src: coperture5, alt: "Fase di rimozione della vecchia copertura in amianto e posa della nuova copertura sul capannone Delmachem a Bassano del Grappa ( Vicenza )" },
      { src: coperture6, alt: "Nuova copertura industriale completata sul capannone Delmachem a Bassano del Grappa ( Vicenza )" },
    ] as GalleryImg[],
    details: [
      { icon: Tag, label: "Tipologia", value: "Copertura industriale" },
      { icon: Layers, label: "Contesto", value: "Capannone Delmachem" },
      { icon: MapPin, label: "Area servita", value: "Bassano del Grappa ( Vicenza )" },
      { icon: Wrench, label: "Intervento", value: "Rifacimento copertura" },
      { icon: Clock, label: "Stato", value: "Intervento completato" },
    ],
  },
  {
    id: "tetto-civile",
    icon: Home,
    tag: "Tetto civile",
    title: "Rifacimento tetto civile",
    text: "Rifacimento di un tetto civile su abitazione privata: sostituzione dell’orditura ammalorata, posa di nuovo isolamento termico, guaina impermeabile e copertura in tegole. Intervento eseguito con ponteggi a norma e ripristino completo di lattonerie, gronde e pluviali.",
    main: { src: tetto1, alt: "Tetto civile in amianto prima del rifacimento eseguito da R.B. s.n.c. a Mestre ( Venezia )" },
    gallery: [
      { src: tetto2, alt: "Vista del tetto in amianto da rimuovere su edificio residenziale a Mestre ( Venezia )" },
      { src: tetto3, alt: "Dettaglio della copertura in amianto con ponteggio di sicurezza prima dell'intervento a Mestre ( Venezia )" },
      { src: tetto4, alt: "Nuovo tetto civile in tegole rosse con pannelli fotovoltaici realizzato a Mestre ( Venezia )" },
      { src: tetto5, alt: "Dettaglio della nuova copertura in tegole con camino ripristinato a Mestre ( Venezia )" },
      { src: tetto6, alt: "Vista panoramica del tetto civile completato con tegole nuove a Mestre ( Venezia )" },
    ] as GalleryImg[],
    details: [
      { icon: Tag, label: "Tipologia", value: "Tetto civile" },
      { icon: Layers, label: "Contesto", value: "Abitazione privata" },
      { icon: MapPin, label: "Area servita", value: "Mestre ( Venezia )" },
      { icon: Wrench, label: "Intervento", value: "Rifacimento copertura civile" },
      { icon: Clock, label: "Stato", value: "Intervento completato" },
    ],
  },
] as const;

const collectionPage = {
  "@type": "CollectionPage",
  name: "Realizzazioni bonifica amianto e coperture a Bassano del Grappa ( Vicenza )",
  description:
    "Pagina realizzazioni R.B. s.n.c. con interventi di bonifica amianto, smaltimento eternit, rifacimento coperture industriali e tetti civili a Bassano del Grappa ( Vicenza ).",
  url: `${SITE_URL}/realizzazioni`,
  publisher: { "@id": `${SITE_URL}/#business` },
  mainEntity: {
    "@type": "ItemList",
    name: "Realizzazioni R.B. s.n.c.",
    itemListElement: [
      {
        "@type": "CreativeWork",
        position: 1,
        name: "Bonifica amianto su copertura industriale",
        description:
          "Intervento di bonifica amianto e smaltimento eternit su copertura industriale a Bassano del Grappa ( Vicenza ), eseguito da R.B. s.n.c. nel rispetto della normativa vigente.",
        image: `${SITE_URL}${amiantoDopo1}`,
        creativeWorkStatus: "Completed",
        author: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "CreativeWork",
        position: 2,
        name: "Rifacimento copertura industriale",
        description:
          "Rifacimento completo della copertura di un capannone industriale a Bassano del Grappa ( Vicenza ) con posa di pannelli sandwich coibentati e finiture perimetrali.",
        image: `${SITE_URL}${coperture1}`,
        creativeWorkStatus: "Completed",
        author: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "CreativeWork",
        position: 3,
        name: "Rifacimento tetto civile",
        description:
          "Rifacimento di un tetto civile su abitazione privata con nuova orditura, isolamento termico, impermeabilizzazione e copertura in tegole.",
        image: `${SITE_URL}${tetto4}`,
        creativeWorkStatus: "Completed",
        author: { "@id": `${SITE_URL}/#business` },
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    collectionPage,
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Realizzazioni", item: `${SITE_URL}/realizzazioni` },
      ],
    },
  ],
};

/* Reusable details card list */
const DetailsList = ({
  details,
}: {
  details: { icon: typeof Tag; label: string; value: string }[];
}) => (
  <div className="rounded-2xl bg-muted/60 border-2 border-border shadow-lg p-7 md:p-8 relative overflow-hidden">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
      Dettagli intervento
    </h3>
    <div className="w-12 h-1 bg-accent rounded-full mb-6" />
    <ul className="divide-y divide-border/70">
      {details.map((d) => {
        const Icon = d.icon;
        return (
          <li key={d.label} className="flex items-start gap-4 py-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Icon className="w-5 h-5 text-primary" strokeWidth={2.2} />
            </div>
            <div className="flex-1">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                {d.label}
              </p>
              <p className="text-foreground font-semibold text-base md:text-lg leading-snug">
                {d.value}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

/* Reusable gallery slider with lightbox */
const GallerySlider = ({
  images,
  onOpen,
}: {
  images: GalleryImg[];
  onOpen: (index: number) => void;
}) => (
  <Carousel opts={{ align: "start", loop: true }} className="w-full">
    <CarouselContent className="-ml-4">
      {images.map((img, i) => (
        <CarouselItem
          key={`${img.src}-${i}`}
          className="pl-4 md:basis-1/2 lg:basis-1/3"
        >
          <button
            type="button"
            onClick={() => onOpen(i)}
            aria-label="Apri immagine ingrandita"
            className="group relative block w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-zoom-in"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
              <ZoomIn className="w-4 h-4" />
            </div>
          </button>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6" />
    <CarouselNext className="hidden md:flex -right-4 lg:-right-6" />
  </Carousel>
);

const Realizzazioni = () => {
  const [lightboxImages, setLightboxImages] = useState<GalleryImg[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: GalleryImg[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  return (
    <>
      <Helmet>
        <title>Realizzazioni amianto e coperture Veneto | R.B. s.n.c.</title>
        <meta
          name="description"
          content="Realizzazioni R.B. s.n.c.: bonifica amianto, smaltimento eternit, coperture industriali e tetti civili eseguiti in Veneto e province limitrofe."
        />
        <link rel="canonical" href="https://rb-snc.it/realizzazioni" />
        <meta property="og:title" content="Realizzazioni amianto e coperture Veneto | R.B. s.n.c." />
        <meta property="og:description" content="Realizzazioni R.B. s.n.c.: bonifica amianto, smaltimento eternit, coperture industriali e tetti civili eseguiti in Veneto." />
        <meta property="og:url" content="https://rb-snc.it/realizzazioni" />
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
              alt="Cantiere R.B. s.n.c. su copertura industriale a Bassano del Grappa ( Vicenza )"
              width={1920}
              height={896}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/55" />
          </div>

          <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-24">
            <div className="max-w-3xl rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-10 shadow-xl animate-fade-in-up">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                Realizzazioni R.B. s.n.c.
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-5">
                Bonifiche amianto e rifacimento coperture
              </h1>
              <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-2xl">
                Interventi eseguiti su coperture industriali, lastre in eternit
                e strutture civili con soluzioni certificate e conformi alle
                normative vigenti.
              </p>
              <Button asChild variant="cta" size="xl">
                <Link to="/contatti">Richiedi sopralluogo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-24 lg:py-32 bg-muted/50 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                Panoramica
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5 leading-tight">
                Interventi eseguiti su edifici industriali e civili
              </h2>
              <div className="w-24 h-1.5 bg-accent rounded-full mb-10" />
              <p className="text-foreground/85 text-lg md:text-xl leading-relaxed mb-8">
                Questa sezione raccoglie le principali tipologie di intervento
                gestite da R.B. s.n.c.: bonifica amianto, smaltimento eternit,
                rifacimento coperture industriali e rifacimento tetti civili.
                Ogni scheda mostrerà foto dettagliate del lavoro e informazioni
                utili. Per approfondire l’offerta puoi consultare i{" "}
                <Link
                  to="/servizi"
                  className="text-primary font-semibold underline-offset-4 hover:underline"
                >
                  servizi di bonifica amianto e rifacimento coperture
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT 1 — side by side, image left */}
        <section
          id={projects[0].id}
          className="py-24 lg:py-36 bg-gradient-to-b from-background via-accent/[0.04] to-background relative overflow-hidden border-y-2 border-accent/20"
        >
          <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-accent rounded-b-full" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <button
                type="button"
                onClick={() => openLightbox([projects[0].main, ...projects[0].gallery], 0)}
                aria-label="Apri immagine ingrandita"
                className="group relative block w-full overflow-hidden rounded-2xl shadow-2xl ring-2 ring-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-zoom-in"
              >
                <img
                  src={projects[0].main.src}
                  alt={projects[0].main.alt}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-auto object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  <ShieldCheck className="w-3 h-3" />
                  Intervento principale
                </div>
              </button>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {projects[0].tag}
                  </div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-primary/20">
                    Intervento su amianto
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-5 leading-tight">
                  {projects[0].title}
                </h2>
                <div className="w-20 h-1.5 bg-accent rounded-full mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
                  {projects[0].text}
                </p>
                <DetailsList details={[...projects[0].details]} />
              </div>
            </div>

            <div className="mt-14 lg:mt-20">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                Galleria intervento
              </h3>
              <div className="w-12 h-1 bg-accent rounded-full mb-8" />
              <GallerySlider
                images={[...projects[0].gallery]}
                onOpen={(i) => openLightbox([projects[0].main, ...projects[0].gallery], i + 1)}
              />
            </div>
          </div>
        </section>

        {/* PROJECT 2 — alternated, image right */}
        <section
          id={projects[1].id}
          className="py-20 lg:py-28 bg-muted/40 relative overflow-hidden"
        >
          <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:order-1 lg:col-span-5">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
                  <Factory className="w-3.5 h-3.5" />
                  {projects[1].tag}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-5 leading-tight">
                  {projects[1].title}
                </h2>
                <div className="w-20 h-1.5 bg-accent rounded-full mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
                  {projects[1].text}
                </p>
                <DetailsList details={[...projects[1].details]} />
              </div>

              <button
                type="button"
                onClick={() => openLightbox([projects[1].main, ...projects[1].gallery], 0)}
                aria-label="Apri immagine ingrandita"
                className="group relative block w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border/60 lg:order-2 lg:col-span-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-zoom-in"
              >
                <img
                  src={projects[1].main.src}
                  alt={projects[1].main.alt}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-auto object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </button>
            </div>

            <div className="mt-14 lg:mt-20">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                Galleria intervento
              </h3>
              <div className="w-12 h-1 bg-accent rounded-full mb-8" />
              <GallerySlider
                images={[...projects[1].gallery]}
                onOpen={(i) => openLightbox([projects[1].main, ...projects[1].gallery], i + 1)}
              />
            </div>
          </div>
        </section>

        {/* PROJECT 3 — centered, image on top */}
        <section
          id={projects[2].id}
          className="py-24 lg:py-36 bg-background relative overflow-hidden"
        >
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
                  <Home className="w-3.5 h-3.5" />
                  {projects[2].tag}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-5 leading-tight">
                  {projects[2].title}
                </h2>
                <div className="w-20 h-1.5 bg-accent rounded-full mx-auto" />
              </div>

              <button
                type="button"
                onClick={() => openLightbox([projects[2].main, ...projects[2].gallery], 0)}
                aria-label="Apri immagine ingrandita"
                className="group relative block w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border/60 mb-14 lg:mb-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-zoom-in"
              >
                <img
                  src={projects[2].main.src}
                  alt={projects[2].main.alt}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover aspect-[16/9] group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-3">
                  <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
                    {projects[2].text}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <DetailsList details={[...projects[2].details]} />
                </div>
              </div>

              <div className="mt-14 lg:mt-20">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Galleria intervento
                </h3>
                <div className="w-12 h-1 bg-accent rounded-full mb-8" />
                <GallerySlider
                  images={[...projects[2].gallery]}
                  onOpen={(i) => openLightbox([projects[2].main, ...projects[2].gallery], i + 1)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* GRANDI CANTIERI */}
        <section
          id="grandi-cantieri"
          className="py-24 lg:py-36 bg-muted/40 relative overflow-hidden border-y-2 border-accent/20"
        >
          <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-accent rounded-b-full" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl mb-14">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                Grandi Cantieri
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-5 leading-tight">
                Interventi di grandi dimensioni
              </h2>
              <div className="w-24 h-1.5 bg-accent rounded-full mb-8" />
              <p className="text-foreground/85 text-lg leading-relaxed">
                Una selezione dei cantieri di dimensioni più importanti
                realizzati negli anni da R.B. s.n.c. per aziende industriali e
                committenti del territorio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {grandiCantieri.map((c, i) => (
                <button
                  type="button"
                  key={c.src}
                  onClick={() => openLightbox(grandiCantieri.map(g => ({ src: g.src, alt: g.alt })), i)}
                  aria-label={`Apri immagine ingrandita: ${c.azienda} - ${c.sede}`}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-zoom-in text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.src}
                      alt={c.alt}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-foreground text-base md:text-lg leading-snug mb-1">
                      {c.azienda}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                      {c.sede}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-white/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                Parlaci del tuo caso
              </span>
              <p className="text-primary-foreground/90 text-base md:text-lg mb-4">
                Parlaci del tuo caso, ti ricontattiamo dopo una prima valutazione
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-5 leading-tight">
                Hai bisogno di un intervento simile?
              </h2>
              <div className="w-20 h-1.5 bg-accent rounded-full mx-auto mb-6" />
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-8">
                Se devi rimuovere amianto, sostituire una copertura in eternit,
                rifare il tetto di un capannone o intervenire su una copertura
                civile, R.B. s.n.c. può valutare il caso con un sopralluogo
                dedicato. Richiedi anche la{" "}
                <Link
                  to="/certificazioni"
                  className="text-accent font-semibold underline-offset-4 hover:underline"
                >
                  documentazione e certificazioni
                </Link>{" "}
                relative all’intervento.
              </p>
              <Button asChild variant="cta" size="xl">
                <Link to="/contatti">
                  Richiedi sopralluogo <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* LIGHTBOX */}
      <Dialog
        open={!!lightboxImages}
        onOpenChange={(o) => !o && setLightboxImages(null)}
      >
        <DialogContent className="max-w-[95vw] md:max-w-5xl p-0 bg-transparent border-0 shadow-none sm:rounded-none [&>button]:hidden">
          <VisuallyHidden>
            <DialogTitle>Galleria immagini</DialogTitle>
          </VisuallyHidden>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
            <DialogClose
              aria-label="Torna al sito"
              className="bg-white text-black rounded-md px-5 py-2 text-sm font-semibold shadow-md hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Torna al sito
            </DialogClose>
          </div>
          {lightboxImages && (
            <Carousel
              opts={{ loop: true, startIndex: lightboxIndex }}
              className="w-full"
            >
              <CarouselContent className="-ml-0">
                {lightboxImages.map((img, i) => (
                  <CarouselItem key={`${img.src}-${i}`} className="pl-0 flex items-center justify-center">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full max-h-[85vh] object-contain rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:-left-12 bg-white/90 hover:bg-white text-foreground border-0 h-10 w-10 md:h-11 md:w-11" />
              <CarouselNext className="right-2 md:-right-12 bg-white/90 hover:bg-white text-foreground border-0 h-10 w-10 md:h-11 md:w-11" />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Realizzazioni;