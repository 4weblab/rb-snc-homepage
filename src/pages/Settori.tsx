import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Settori = () => (
  <>
    <Helmet>
      <title>Settori | RB SNC</title>
      <meta name="description" content="RB SNC opera in diversi settori industriali offrendo soluzioni per coperture, tetti e interventi su capannoni produttivi." />
      <link rel="canonical" href="https://rb-snc.it/settori" />
    </Helmet>
    <Navbar />
    <main className="pt-16 container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-foreground">Settori</h1>
    </main>
    <Footer />
  </>
);

export default Settori;
