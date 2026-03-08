

## Piano: Centrare le card della griglia servizi

Il problema: con 5 card su una griglia a 3 colonne, le ultime 2 card si allineano a sinistra lasciando uno spazio vuoto a destra.

### Soluzione

In `src/components/ServicesSection.tsx`, sostituire il layout `grid` con `flex flex-wrap justify-center` sul contenitore delle card, e impostare una larghezza fissa sulle singole card per mantenere lo stesso aspetto a 3 colonne ma con l'ultima riga centrata.

- Contenitore: `flex flex-wrap justify-center gap-6`
- Card: aggiungere classi di larghezza responsive `w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`

Questo centra automaticamente le 2 card dell'ultima riga.

