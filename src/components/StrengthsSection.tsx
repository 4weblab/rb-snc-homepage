import { Zap, Users, Award, Scale } from "lucide-react";
import strengthsBg from "@/assets/strengths-bg.jpg";

const strengths = [
  { icon: Zap, title: "Interventi rapidi", description: "Siamo organizzati per intervenire rapidamente su tutto il territorio, riducendo tempi di attesa e disagi." },
  { icon: Users, title: "Gestione diretta dei lavori", description: "Ogni intervento è seguito direttamente dal nostro team, senza intermediari o passaggi inutili." },
  { icon: Award, title: "Esperienza sul campo", description: "Anni di attività nel settore amianto e coperture, con interventi su aziende, capannoni e abitazioni." },
  { icon: Scale, title: "Lavori a norma", description: "Operiamo nel rispetto delle normative vigenti in materia di sicurezza e smaltimento amianto." }
];

const StrengthsSection = () => {
  return (
    <section
      className="py-20 lg:py-28 relative bg-cover bg-center bg-fixed max-md:bg-scroll"
      style={{ backgroundImage: `url(${strengthsBg})` }}>
      
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Perché scegliere RB SNC
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Interventi professionali su amianto e coperture, con gestione diretta e tempi rapidi in tutto il Veneto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {strengths.map((item) =>
            <div key={item.title} className="text-center group">
              <div className="w-16 h-16 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-white/20 transition-colors duration-300">
                <item.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-white text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-white/85 leading-relaxed">{item.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default StrengthsSection;
