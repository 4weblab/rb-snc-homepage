

## Piano: Sezione "Settori serviti" con layout verticale alternato

### Approccio

Riscrivere `src/components/SectorsSection.tsx` con un layout "timeline verticale" — linea centrale, blocchi alternati destra/sinistra, nodi di connessione e animazioni scroll-triggered via Intersection Observer.

### Struttura

- **Desktop (lg+)**: Linea verticale centrale con blocchi alternati (1° destra, 2° sinistra, ecc.). Ogni blocco collegato alla linea con un nodo circolare.
- **Mobile/Tablet**: Colonna singola verticale con linea a sinistra e blocchi allineati.

### Dettagli implementazione in `src/components/SectorsSection.tsx`

1. **Dati**: Mantenere array `sectors` con icone, titoli e descrizioni esistenti.

2. **Layout desktop**: Per ogni settore, una riga con griglia a 2 colonne + linea centrale:
   - Colonna sinistra o destra contiene la card (alternata per indice pari/dispari)
   - Centro: linea verticale (`border-l-2 border-primary/30`) con nodo circolare (`w-4 h-4 rounded-full bg-primary`)

3. **Card**: Wrappate in `<Link to="/settori">` (react-router-dom). Stile: bordo sottile, padding generoso, hover con shadow e leggero translate. Contenuto: icona + titolo + descrizione.

4. **Animazioni scroll**: Custom hook con `IntersectionObserver` (threshold 0.2). Ogni blocco parte con `opacity-0 translate-x-8` (destra) o `-translate-x-8` (sinistra) e transiziona a `opacity-100 translate-x-0` con `duration-500 ease-out`. Il nodo centrale scala da 0 a 1 quando il blocco entra in vista.

5. **Responsive**: Su `< lg`, layout a colonna singola con linea verticale a sinistra e tutti i blocchi allineati a destra della linea.

### Nessuna modifica a
- Altre sezioni, navbar, footer, palette, font
- Solo `SectorsSection.tsx` viene riscritto

