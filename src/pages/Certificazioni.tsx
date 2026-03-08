import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Certificazioni = () => (
  <>
    <Helmet>
      <title>Certificazioni | RB SNC</title>
      <meta name="description" content="RB SNC opera nel rispetto delle normative di sicurezza con certificazioni e procedure professionali per interventi su coperture." />
      <link rel="canonical" href="https://rb-snc.it/certificazioni" />
    </Helmet>
    <Navbar />
    <main className="pt-16 container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-foreground">Certificazioni</h1>
    </main>
    <Footer />
  </>
);

export default Certificazioni;
