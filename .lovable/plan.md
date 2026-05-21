## Obiettivo
Sostituire lo scroll verticale nel lightbox con la navigazione tra immagini tramite frecce (desktop) e swipe (mobile/touch), per tutte e tre le gallerie della pagina Realizzazioni.

## Modifiche a `src/pages/Realizzazioni.tsx`

1. **Cambiare lo stato del lightbox**: invece di `lightbox: GalleryImg | null`, usare:
   - `lightboxImages: GalleryImg[] | null` — l'intero set di immagini del progetto cliccato (main + gallery)
   - `lightboxIndex: number` — l'immagine iniziale da mostrare

2. **Costruire l'array per progetto**: per ciascun progetto passare a `GallerySlider` e al pulsante della main image l'array completo `[main, ...gallery]`, così l'utente può sfogliare anche partendo dall'immagine principale.

3. **Rimuovere** dal `DialogContent` le classi `max-h-[90vh] overflow-y-auto overscroll-contain` introdotte in precedenza.

4. **Sostituire il contenuto del Dialog** con un `Carousel` (embla, già usato in pagina) configurato con:
   - `opts={{ loop: true, startIndex: lightboxIndex }}`
   - `CarouselContent` con un `CarouselItem` per ogni immagine; immagine in `object-contain max-h-[85vh]` per restare sempre visibile
   - `CarouselPrevious` / `CarouselNext` visibili (anche su mobile), posizionati sopra i bordi, ben contrastati su sfondo scuro
   - Lo swipe touch è nativo in embla, quindi è incluso automaticamente

5. **Stile del DialogContent**: `max-w-[95vw] md:max-w-5xl p-0 bg-transparent border-0 shadow-none` per dare risalto all'immagine; aggiungere supporto tastiera (← →) tramite l'API di embla o lasciare il comportamento nativo già presente nel componente `Carousel` (gestisce ArrowLeft/ArrowRight).

6. **Accessibilità**: aggiungere `DialogTitle` visivamente nascosto con il titolo del progetto/alt corrente, e mantenere il pulsante di chiusura del Dialog.

## Note tecniche
- Nessun nuovo pacchetto: si usano i componenti `Carousel` e `Dialog` già presenti.
- Nessuna modifica alle 3 gallerie inline (`GallerySlider`): conservano il loro carousel di anteprima; cambia solo cosa viene aperto al click.
- Comportamento identico per tutte e tre le sezioni (Bonifica amianto, Coperture industriali, Tetto civile).
