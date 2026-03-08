import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const ChiSiamo = () => (
  <>
    <Helmet>
      <title>Chi siamo | RB SNC</title>
      <meta name="description" content="Scopri RB SNC, azienda specializzata in coperture industriali, rifacimento tetti e bonifica amianto con sede a Cittadella." />
      <link rel="canonical" href="https://rb-snc.it/chi-siamo" />
    </Helmet>
    <Navbar />
    <main className="pt-16 container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-foreground">Chi siamo</h1>
    </main>
    <Footer />
  </>
);

export default ChiSiamo;
