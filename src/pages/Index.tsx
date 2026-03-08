import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CompanySection from "@/components/CompanySection";
import BrandsSection from "@/components/BrandsSection";
import SectorsSection from "@/components/SectorsSection";
import ProjectsSection from "@/components/ProjectsSection";
import StrengthsSection from "@/components/StrengthsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>RB SNC — Coperture Industriali e Bonifica Amianto</title>
        <meta
          name="description"
          content="RB SNC: coperture industriali, bonifica amianto, rifacimento tetti, sovracoperture e manutenzione. Soluzioni professionali per l'edilizia industriale."
        />
        <link rel="canonical" href="https://rb-snc.it/" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
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
