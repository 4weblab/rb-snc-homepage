import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cookie, ShieldCheck, CheckCircle2, XCircle } from "lucide-react";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | RB SNC</title>
        <meta
          name="description"
          content="Cookie Policy di RB SNC: il sito utilizza esclusivamente cookie tecnici necessari al funzionamento, senza profilazione né tracciamento."
        />
        <link rel="canonical" href="https://www.rb-snc.it/cookie-policy" />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-navy/85">
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <Cookie className="w-3.5 h-3.5" />
                Informativa cookie
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Cookie Policy
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENUTO */}
        <section className="py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-10">
              <div>
                <div className="w-14 h-1.5 bg-accent rounded-full mb-5" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Quali cookie usiamo
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento.
                  Il sito non raccoglie dati per finalità pubblicitarie o statistiche.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-card rounded-2xl border-2 border-border p-6">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 ring-1 ring-accent/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    I cookie tecnici servono per
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li className="flex gap-2"><span className="text-accent">•</span>permettere la navigazione</li>
                    <li className="flex gap-2"><span className="text-accent">•</span>garantire il corretto funzionamento delle pagine</li>
                    <li className="flex gap-2"><span className="text-accent">•</span>gestire funzionalità base del sito</li>
                  </ul>
                </div>
                <div className="bg-card rounded-2xl border-2 border-border p-6">
                  <div className="w-11 h-11 rounded-xl bg-destructive/10 ring-1 ring-destructive/20 flex items-center justify-center mb-4">
                    <XCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    Il sito NON utilizza
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li className="flex gap-2"><span className="text-destructive">•</span>cookie di profilazione</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span>cookie di marketing</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span>strumenti di tracciamento di terze parti</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl border-2 border-border/70 p-6 md:p-7 flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 ring-1 ring-accent/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Per maggiori informazioni sul trattamento dei dati personali consulta la{" "}
                  <Link to="/privacy-policy" className="text-accent font-semibold hover:underline">
                    Privacy Policy
                  </Link>
                  . Per richieste o chiarimenti puoi scrivere a{" "}
                  <a href="mailto:info@rb-snc.it" className="text-accent font-semibold hover:underline">
                    info@rb-snc.it
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicy;