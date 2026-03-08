import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    title: "Copertura capannone industriale",
    description: "Rifacimento completo copertura in lamiera grecata con isolamento termico.",
  },
  {
    image: project2,
    title: "Bonifica amianto stabilimento",
    description: "Rimozione lastre in eternit e posa nuova copertura in pannelli sandwich.",
  },
  {
    image: project3,
    title: "Sovracopertura centro logistico",
    description: "Installazione sovracopertura su struttura esistente con miglioramento energetico.",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Realizzazioni
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Alcuni dei progetti completati per i nostri clienti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-lg overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Vedi tutte le realizzazioni
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
