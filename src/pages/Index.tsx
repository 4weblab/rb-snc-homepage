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
        <title>Bonifica amianto e coperture in Veneto | R.B. s.n.c.</title>
        <meta
          name="description"
          content="R.B. s.n.c.: bonifica amianto, smaltimento eternit e rifacimento coperture industriali e tetti civili in Veneto. Richiedi un sopralluogo."
        />
        <link rel="canonical" href="https://rb-snc.it/" />
        <meta property="og:title" content="Bonifica amianto e coperture in Veneto | R.B. s.n.c." />
        <meta property="og:description" content="Bonifica amianto, smaltimento eternit e rifacimento coperture industriali e tetti civili in Veneto. Richiedi un sopralluogo." />
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
