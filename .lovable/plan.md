

## Piano: Aggiungere immagine hover alle card servizi

### Approccio

Aggiungere a ogni card un'immagine di sfondo che appare in hover con effetto fade-in + scale-in. L'immagine sarà un overlay interno con gradiente scuro per mantenere la leggibilità del testo. Su mobile/tablet l'effetto non si attiva.

### Modifiche a `src/components/ServicesSection.tsx`

1. **Aggiungere campo `image` a ogni servizio** — URL Unsplash coerenti con il settore:
   - Bonifica amianto → operatore con DPI su copertura
   - Coperture industriali → capannone industriale
   - Rifacimento tetti → cantiere su tetto
   - Sovracoperture → struttura metallica
   - Manutenzione coperture → tecnico in ispezione

2. **Aggiungere elemento immagine dentro ogni card** — Un `div` con `background-image` posizionato in `absolute inset-0`, con:
   - `opacity-0 group-hover:opacity-100` per il fade-in
   - `scale-105 group-hover:scale-100` per un leggero scale-in
   - `transition-all duration-300`
   - Gradiente overlay scuro (`bg-gradient-to-t from-black/70 via-black/40 to-black/20`) sopra l'immagine
   - Classi `hidden lg:block` per nasconderlo su mobile/tablet

3. **Aggiungere `relative overflow-hidden` alla card** per contenere l'overlay.

4. **Aggiungere `relative z-10` al contenuto** (icona, titolo, testo, link) per tenerlo sopra l'overlay.

5. **In hover su desktop**: testo, icona e link cambiano colore a bianco tramite classi `lg:group-hover:text-white`.

### Nessuna modifica a:
- Layout, dimensioni, spacing, ordine, numero card
- Hover esistente (`-translate-y-1`, shadow)
- Struttura della sezione o altri componenti

