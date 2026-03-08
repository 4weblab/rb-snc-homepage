import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Servizi = () => (
  <>
    <Helmet>
      <title>Servizi | RB SNC</title>
      <meta name="description" content="Servizi professionali per coperture industriali, bonifica amianto, rifacimento tetti e manutenzione delle coperture." />
      <link rel="canonical" href="https://rb-snc.it/servizi" />
    </Helmet>
    <Navbar />
    <main className="pt-16 container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-foreground">Servizi</h1>
    </main>
    <Footer />
  </>
);

export default Servizi;
