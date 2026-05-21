import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ShieldCheck, Building2, Database, Target, Scale, Clock, Share2, UserCheck, Banknote, Gavel } from "lucide-react";

const sections = [
  {
    icon: Building2,
    title: "1. Titolare del trattamento",
    body: (
      <ul className="space-y-1.5 text-base text-muted-foreground leading-relaxed">
        <li><span className="font-semibold text-foreground">R.B. s.n.c. di Bertoluzzo e Ragazzo</span></li>
        <li>Email: <a href="mailto:info@rb-snc.it" className="text-accent hover:underline">info@rb-snc.it</a></li>
        <li>PEC: <a href="mailto:info@pec.rb-snc.it" className="text-accent hover:underline">info@pec.rb-snc.it</a></li>
        <li>Partita IVA: 04244010288</li>
        <li>Codice Fiscale: 04244010288</li>
      </ul>
    ),
  },
  {
    icon: Database,
    title: "2. Dati raccolti",
    body: (
      <>
        <p className="text-base text-muted-foreground leading-relaxed mb-3">
          Il sito non raccoglie dati durante la navigazione.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-3">
          I dati vengono raccolti solo quando l'utente compila il form contatti:
        </p>
        <ul className="space-y-1.5 text-base text-muted-foreground leading-relaxed">
          <li className="flex gap-2"><span className="text-accent">•</span>nome</li>
          <li className="flex gap-2"><span className="text-accent">•</span>telefono</li>
          <li className="flex gap-2"><span className="text-accent">•</span>email</li>
          <li className="flex gap-2"><span className="text-accent">•</span>comune o zona di intervento</li>
          <li className="flex gap-2"><span className="text-accent">•</span>tipo di intervento richiesto</li>
          <li className="flex gap-2"><span className="text-accent">•</span>messaggio</li>
        </ul>
      </>
    ),
  },
  {
    icon: Target,
    title: "3. Finalità del trattamento",
    body: (
      <>
        <p className="text-base text-muted-foreground leading-relaxed mb-3">
          I dati vengono utilizzati esclusivamente per:
        </p>
        <ul className="space-y-1.5 text-base text-muted-foreground leading-relaxed">
          <li className="flex gap-2"><span className="text-accent">•</span>rispondere alle richieste</li>
          <li className="flex gap-2"><span className="text-accent">•</span>ricontattare l'utente</li>
          <li className="flex gap-2"><span className="text-accent">•</span>fornire informazioni o preventivi</li>
        </ul>
      </>
    ),
  },
  {
    icon: Scale,
    title: "4. Base giuridica",
    body: (
      <>
        <p className="text-base text-muted-foreground leading-relaxed mb-3">
          Il trattamento si fonda su:
        </p>
        <ul className="space-y-1.5 text-base text-muted-foreground leading-relaxed">
          <li className="flex gap-2"><span className="text-accent">•</span><span><span className="font-semibold text-foreground">art. 6.1.a GDPR</span> — consenso dell'utente espresso tramite spunta nel form contatti</span></li>
          <li className="flex gap-2"><span className="text-accent">•</span><span><span className="font-semibold text-foreground">art. 6.1.b GDPR</span> — esecuzione di misure precontrattuali su richiesta dell'utente (es. invio di un preventivo)</span></li>
        </ul>
      </>
    ),
  },
  {
    icon: Clock,
    title: "5. Conservazione dei dati",
    body: (
      <p className="text-base text-muted-foreground leading-relaxed">
        I dati vengono conservati per il tempo necessario a gestire la richiesta e fino a <span className="font-semibold text-foreground">24 mesi dall'ultimo contatto</span>, salvo eventuali obblighi di conservazione previsti dalla normativa fiscale e civilistica. Trascorso tale termine, i dati vengono cancellati o resi anonimi.
      </p>
    ),
  },
  {
    icon: Share2,
    title: "6. Condivisione dei dati e trasferimenti",
    body: (
      <p className="text-base text-muted-foreground leading-relaxed">
        I dati raccolti tramite il form non vengono ceduti né venduti a terzi.
        Il sito non utilizza servizi di terze parti che comportino trasferimento di dati personali al di fuori dell'Unione Europea (font, script e immagini sono ospitati direttamente sul dominio del sito).
      </p>
    ),
  },
  {
    icon: UserCheck,
    title: "7. Diritti dell'utente",
    body: (
      <>
        <p className="text-base text-muted-foreground leading-relaxed mb-3">
          In conformità agli artt. 15-22 GDPR, l'utente può in ogni momento esercitare i diritti di:
        </p>
        <ul className="space-y-1.5 text-base text-muted-foreground leading-relaxed">
          <li className="flex gap-2"><span className="text-accent">•</span>accesso ai propri dati</li>
          <li className="flex gap-2"><span className="text-accent">•</span>rettifica o aggiornamento</li>
          <li className="flex gap-2"><span className="text-accent">•</span>cancellazione ("diritto all'oblio")</li>
          <li className="flex gap-2"><span className="text-accent">•</span>limitazione e opposizione al trattamento</li>
          <li className="flex gap-2"><span className="text-accent">•</span>portabilità dei dati</li>
          <li className="flex gap-2"><span className="text-accent">•</span>revoca del consenso prestato</li>
        </ul>
        <p className="text-base text-muted-foreground leading-relaxed mt-3">
          Le richieste possono essere inviate a{" "}
          <a href="mailto:info@rb-snc.it" className="text-accent font-semibold hover:underline">info@rb-snc.it</a>.
        </p>
      </>
    ),
  },
  {
    icon: Gavel,
    title: "8. Reclamo all'Autorità di controllo",
    body: (
      <p className="text-base text-muted-foreground leading-relaxed">
        Ai sensi dell'art. 77 GDPR, l'utente ha diritto di proporre reclamo al{" "}
        <a
          href="https://www.garanteprivacy.it"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline"
        >
          Garante per la protezione dei dati personali
        </a>{" "}
        qualora ritenga che il trattamento dei propri dati violi la normativa vigente.
      </p>
    ),
  },
  {
    icon: Banknote,
    id: "aiuti-di-stato",
    title: "9. Obblighi informativi per le erogazioni pubbliche",
    body: (
      <p className="text-base text-muted-foreground leading-relaxed">
        Gli aiuti di Stato e gli aiuti &ldquo;de minimis&rdquo; ricevuti dalla nostra
        impresa sono contenuti nel Registro nazionale degli aiuti di Stato di cui
        all&rsquo;art. 52 della Legge 234/2012 e sono consultabili al seguente link,
        inserendo come chiave di ricerca nel campo CODICE FISCALE 04244010288:{" "}
        <a
          href="https://www.rna.gov.it/RegistroNazionaleTrasparenza/faces/pages/TrasparenzaAiuto.jspx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline break-words"
        >
          https://www.rna.gov.it/RegistroNazionaleTrasparenza/faces/pages/TrasparenzaAiuto.jspx
        </a>
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | R.B. s.n.c.</title>
        <meta
          name="description"
          content="Privacy Policy di R.B. s.n.c. di Bertoluzzo e Ragazzo: titolare, dati raccolti, finalità, conservazione e diritti dell'utente."
        />
        <link rel="canonical" href="https://rb-snc.it/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Privacy Policy | R.B. s.n.c." />
        <meta property="og:description" content="Privacy Policy di R.B. s.n.c. di Bertoluzzo e Ragazzo: titolare, dati raccolti, finalità, conservazione e diritti dell'utente." />
        <meta property="og:url" content="https://rb-snc.it/privacy-policy" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-navy/85">
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Trattamento dei dati
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Privacy Policy
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Informazioni su come R.B. s.n.c. tratta i dati personali raccolti tramite il form contatti.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENUTO */}
        <section className="py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6">
              {sections.map((s) => (
                <article
                  key={s.title}
                  id={s.id}
                  className="bg-card rounded-2xl border-2 border-border p-6 md:p-8"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 ring-1 ring-accent/20 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                      {s.title}
                    </h2>
                  </div>
                  <div className="pl-0 md:pl-16">{s.body}</div>
                </article>
              ))}

              <div className="bg-muted/50 rounded-2xl border-2 border-border/70 p-6 md:p-7 text-sm md:text-base text-muted-foreground leading-relaxed">
                Per informazioni sui cookie utilizzati dal sito consulta la{" "}
                <Link to="/cookie-policy" className="text-accent font-semibold hover:underline">
                  Cookie Policy
                </Link>
                .
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;