## Problema

Nello slideshow (lightbox della pagina Realizzazioni) la X è sparita ma il bottone "Torna al sito" non compare. Il bottone è effettivamente presente nel codice, ma viene nascosto insieme alla X.

Causa: su `DialogContent` è stata applicata la classe `[&>button]:hidden` per nascondere la X di default. Questo selettore però nasconde **tutti** i `<button>` figli diretti del `DialogContent`, e il nostro `DialogClose` "Torna al sito" è proprio un `<button>` figlio diretto — quindi viene nascosto anche lui.

## Soluzione

Avvolgere il `DialogClose` "Torna al sito" in un `<div>` contenitore, così non è più un figlio diretto `<button>` del `DialogContent` e il selettore `[&>button]:hidden` continua a nascondere solo la X di default di shadcn.

Il div wrapper riprenderà il posizionamento `absolute bottom-4 left-1/2 -translate-x-1/2 z-50`, mentre il bottone interno mantiene lo stile (sfondo bianco, testo nero, raggio leggero, ombra).

### File toccato

- `src/pages/Realizzazioni.tsx` — wrap del `DialogClose` (righe 571–576) dentro un `<div>` con le classi di posizionamento; il bottone mantiene solo le classi visive (`bg-white text-black rounded-md px-5 py-2 text-sm font-semibold shadow-md hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`).

Nessuna modifica al componente `dialog.tsx` condiviso.
