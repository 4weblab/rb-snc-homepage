## Sostituire la X con il pulsante "Torna al sito" nel lightbox

### Obiettivo
Nella galleria a tutto schermo (`/realizzazioni`), rimuovere la classica X in alto a destra e mostrare su ogni foto un pulsante centrato in basso con testo "Torna al sito", testo nero su sfondo bianco con leggero raggio.

### File coinvolto
- `src/pages/Realizzazioni.tsx` — blocco `<Dialog>` del lightbox (in fondo al file).

### Modifiche
1. Nascondere la X di default di `DialogContent` aggiungendo alla sua className `[&>button]:hidden` (la X è l'unico `<button>` figlio diretto iniettato dallo shadcn `DialogContent`).
2. Aggiungere all'interno del `DialogContent`, sopra il `Carousel`, un `<DialogClose asChild>` con un `<button>`:
   - Posizione: `absolute bottom-4 left-1/2 -translate-x-1/2 z-50`.
   - Stile: `bg-white text-black rounded-md px-5 py-2 text-sm font-semibold shadow-md hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`.
   - Testo: "Torna al sito".
   - `aria-label="Torna al sito"`.
3. Importare `DialogClose` da `@/components/ui/dialog` (oltre a `Dialog`, `DialogContent`, `DialogTitle` già presenti).

### Note
- Il pulsante è unico per il lightbox (overlay), quindi appare automaticamente sopra qualunque foto attiva nello slideshow, centrato in basso, come richiesto.
- Nessuna modifica al componente shadcn `dialog.tsx`: la X viene solo nascosta localmente.