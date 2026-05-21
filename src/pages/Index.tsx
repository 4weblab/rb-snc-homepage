import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProblemsSection from "@/components/ProblemsSection";
import CompanySection from "@/components/CompanySection";
import BrandsSection from "@/components/BrandsSection";
import SectorsSection from "@/components/SectorsSection";
import ProjectsSection from "@/components/ProjectsSection";
import StrengthsSection from "@/components/StrengthsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { localBusiness, localBusinessRef, SITE_URL } from "@/lib/business";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    localBusiness,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "R.B. s.n.c.",
      inLanguage: "it-IT",
      publisher: localBusinessRef,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      ],
    },
  ],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>R.B. s.n.c. — Coperture Industriali e Bonifica Amianto</title>
        <meta
          name="description"
          content="R.B. s.n.c.: coperture industriali, bonifica amianto, rifacimento tetti, sovracoperture e manutenzione. Soluzioni professionali per l'edilizia industriale."
        />
        <link rel="canonical" href="https://rb-snc.it/" />
        <meta property="og:title" content="R.B. s.n.c. — Coperture Industriali e Bonifica Amianto" />
        <meta property="og:description" content="Coperture industriali, bonifica amianto, rifacimento tetti, sovracoperture e manutenzione. Soluzioni professionali in Veneto." />
        <meta property="og:url" content="https://rb-snc.it/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProblemsSection />
        <CompanySection />
        <BrandsSection />
        <SectorsSection />
        <ProjectsSection />
        <StrengthsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
