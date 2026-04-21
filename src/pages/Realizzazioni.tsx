import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Realizzazioni = () => (
  <>
    <Helmet>
      <title>Realizzazioni | RB SNC</title>
      <meta name="description" content="Scopri le realizzazioni di RB SNC: interventi su coperture industriali, rifacimento tetti e bonifica amianto in Veneto." />
      <link rel="canonical" href="https://rb-snc.it/realizzazioni" />
    </Helmet>
    <Navbar />
    <main className="pt-16 container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-foreground">Realizzazioni</h1>
    </main>
    <Footer />
  </>
);

export default Realizzazioni;