const brands = [
  "Mapei", "Marcegaglia", "Polyglass", "Landini", "Kerakoll", "Fakro",
  "Wierer", "Copernit", "Velux", "Unimetal", "Rheinzink", "Alubel",
];

const BrandsSection = () => {
  return (
    <section className="py-10 bg-[hsl(var(--navy))] overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm uppercase tracking-widest text-[hsl(var(--steel))]">
          Collaboriamo con soluzioni e materiali di qualità
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(var(--navy))] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(var(--navy))] to-transparent z-10" />

        <div className="flex animate-brands-scroll w-max">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center h-12 md:h-14 px-6 md:px-8"
            >
              <span className="text-lg md:text-xl font-heading font-bold text-primary-foreground/50 hover:text-primary-foreground/90 transition-opacity duration-300 whitespace-nowrap select-none">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
