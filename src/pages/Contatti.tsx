import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Contatti = () => (
  <>
    <Helmet>
      <title>Contatti | RB SNC</title>
      <meta name="description" content="Contatta RB SNC per informazioni su coperture industriali, bonifica amianto e rifacimento tetti." />
      <link rel="canonical" href="https://rb-snc.it/contatti" />
    </Helmet>
    <Navbar />
    <main className="pt-16 container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-foreground">Contatti</h1>
    </main>
    <Footer />
  </>
);

export default Contatti;
