

## Piano: Sfondo parallax per la sezione "Settori serviti"

### Approccio

Modificare solo il `<section>` wrapper in `SectorsSection.tsx` per aggiungere un'immagine di sfondo con effetto parallax e overlay scuro. Nessuna modifica al contenuto, timeline o animazioni.

### Immagine

Non ci sono immagini di coperture industriali tra gli asset esistenti. Userò un'immagine da Unsplash (URL diretto) di un tetto metallico / copertura industriale come sfondo.

### Modifiche in `src/components/SectorsSection.tsx`

1. **Sezione wrapper** (riga 140): Sostituire `bg-background` con stile inline per background-image + `background-attachment: fixed` (parallax CSS puro) + `background-size: cover` + `background-position: center`

2. **Overlay**: Aggiungere un `<div>` assoluto con `bg-black/45` sopra l'immagine, sotto il contenuto (z-index gestito con `relative`)

3. **Colori testo**: Adattare titolo e sottotitolo a `text-white` per leggibilità su sfondo scuro. Le card mantengono `bg-card` quindi restano leggibili. La linea verticale diventa `bg-white/30`.

4. **Responsive**: Su mobile, `background-attachment: fixed` può causare problemi su iOS — fallback a `background-attachment: scroll` via media query inline o classe condizionale.

### File modificato
Solo `src/components/SectorsSection.tsx`

### Nessuna modifica a
Contenuto timeline, animazioni, layout, altre sezioni, navbar, footer.

