import { Award, ShieldCheck, PackageCheck, HeadphonesIcon } from "lucide-react";
import strengthsBg from "@/assets/strengths-bg.jpg";

const strengths = [
  { icon: Award, title: "Esperienza nel settore", description: "Anni di attività e centinaia di progetti completati." },
  { icon: ShieldCheck, title: "Interventi in sicurezza", description: "Procedure certificate e personale formato." },
  { icon: PackageCheck, title: "Materiali certificati", description: "Solo materiali conformi alle normative vigenti." },
  { icon: HeadphonesIcon, title: "Assistenza tecnica", description: "Supporto dedicato in ogni fase del progetto." },
];

const StrengthsSection = () => {
  return (
    <section
      className="py-20 lg:py-28 relative bg-cover bg-center bg-fixed max-md:bg-scroll"
      style={{ backgroundImage: `url(${strengthsBg})` }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Perché scegliere RB SNC
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
