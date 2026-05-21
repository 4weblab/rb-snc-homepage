## Obiettivo

Sostituire le immagini della sezione **"Bonifica amianto su copertura industriale"** nella pagina `/realizzazioni` con le 6 foto caricate (`amianto_1.webp` … `amianto_6.webp`), eliminare i vecchi file e uniformare il rapporto d'aspetto.

## Cosa farò

1. **Import asset**
   - Copiare le 6 foto in `src/assets/` con nomi parlanti:
     - `realizzazione-amianto-prima-1.webp` (amianto_1 — copertura ondulata con parabola, ancora da bonificare)
     - `realizzazione-amianto-prima-2.webp` (amianto_2 — frontale lastre eternit deteriorate)
     - `realizzazione-amianto-prima-3.webp` (amianto_3 — panoramica copertura amianto pre-intervento)
     - `realizzazione-amianto-dopo-1.webp` (amianto_4 — nuova sovracopertura bianca, campagna)
     - `realizzazione-amianto-dopo-2.webp` (amianto_5 — vista prospettica nuova copertura coibentata)
     - `realizzazione-amianto-dopo-3.webp` (amianto_6 — dettaglio nuova copertura ondulata bianca)

2. **Uniformare il rapporto**
   - Tutte le foto vengono normalizzate a **4:3** (lo stesso rapporto già usato dalla galleria/main image della pagina) tramite crop centrato con uno script (sharp/imagemagick), mantenendo formato WebP. Le 6 foto caricate sono già 4:3 o molto vicine → crop minimo, nessuna distorsione.

3. **Aggiornare `src/pages/Realizzazioni.tsx`**
   - Sostituire gli import `amianto1/2/3` con i 6 nuovi.
   - `main`: `realizzazione-amianto-prima-1.webp` (immagine d'impatto "prima" dell'intervento).
   - `gallery`: le altre 5 foto (niente duplicati con la main), così la galleria racconta il flusso prima→dopo.
   - Riscrivere gli `alt` in modo coerente e SEO-friendly, ad es.:
     - main: *"Copertura industriale in eternit prima della bonifica amianto eseguita da R.B. s.n.c. in Veneto"*
     - *"Lastre ondulate in cemento-amianto deteriorate su capannone industriale"*
     - *"Panoramica della copertura in amianto prima dell'intervento di rimozione"*
     - *"Nuova sovracopertura coibentata posata da R.B. s.n.c. dopo la bonifica amianto"*
     - *"Vista prospettica della nuova copertura industriale dopo lo smaltimento eternit"*
     - *"Dettaglio della nuova copertura ondulata bianca su capannone in Veneto"*

4. **Eliminare i vecchi asset**
   - `src/assets/realizzazione-amianto-1.jpg`
   - `src/assets/realizzazione-amianto-2.jpg`
   - `src/assets/realizzazione-amianto-3.jpg`

## Note tecniche

- Rapporto target 4:3 (1280×960) → coerente con `width={1280} height={896}` già usato nei tag `<img>` (aggiorno `height` a `960` per allinearlo al nuovo rapporto ed evitare CLS).
- Formato WebP mantenuto (più leggero del JPG attuale).
- Nessuna modifica alle sezioni "Coperture industriali" e "Tetto civile".
