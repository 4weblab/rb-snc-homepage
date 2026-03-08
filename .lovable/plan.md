

## Piano: Sfondo parallax per "Perché scegliere RB SNC"

### Modifica in `src/components/StrengthsSection.tsx`

1. **Immagine**: Aggiungere un'immagine di sfondo (stretta di mano professionale/contesto lavorativo) importata come asset locale, stessa tecnica usata per SectorsSection.

2. **Sezione wrapper**: Sostituire `bg-background` con `bg-cover bg-center bg-fixed max-md:bg-scroll` + style inline con `backgroundImage`. Stessa logica di `SectorsSection.tsx`.

3. **Overlay**: Aggiungere `<div className="absolute inset-0 bg-black/45" />` come primo figlio della sezione (posizionata `relative`).

4. **Contenuto**: Wrappare il contenuto esistente con `relative z-10`. Adattare colori testo a `text-white` per titolo, `text-white/70` per descrizioni, e aggiornare le icone/badge per risaltare su sfondo scuro (sfondo badge `bg-white/10`, icone `text-white`).

5. **Card invariate**: Layout, contenuto, icone e struttura restano identici.

### File coinvolti
- Creare `src/assets/strengths-bg.jpg` (immagine generata)
- Modificare `src/components/StrengthsSection.tsx`

