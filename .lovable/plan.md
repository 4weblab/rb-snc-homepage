## Obiettivo
Allineare la sezione "Realizzazioni" della Home (`src/components/ProjectsSection.tsx`) ai 3 casi reali presenti nella pagina `/realizzazioni`, sostituendo le immagini placeholder e i testi generici.

## Modifiche a `src/components/ProjectsSection.tsx`

Sostituire i 3 import attuali (`project-1.jpg`, `project-2.jpg`, `project-3.jpg`) con un'immagine rappresentativa per ciascun caso reale, scelta tra le foto già presenti in `src/assets/`:

1. **Bonifica amianto su copertura industriale**
   - Immagine: `realizzazione-amianto-dopo-1.webp` (mostra il risultato finale, più d'impatto in vetrina)
   - Titolo: "Bonifica amianto su copertura industriale"
   - Descrizione: "Rimozione lastre in eternit e posa di nuova sovracopertura coibentata, con smaltimento certificato."

2. **Rifacimento copertura industriale (Delmachem)**
   - Immagine: `realizzazione-coperture-delmachem-1.webp`
   - Titolo: "Rifacimento copertura industriale"
   - Descrizione: "Nuova copertura in lamiera grecata su capannone industriale, con pannelli coibentati e finiture perimetrali."

3. **Rifacimento tetto civile (Mestre)**
   - Immagine: `realizzazione-tetto-mestre-4.webp` (tetto nuovo completato in tegole)
   - Titolo: "Rifacimento completo tetto di struttura ad uso civile"
   - Descrizione: "Sostituzione orditura, isolamento termico, guaina impermeabile e nuova copertura in tegole su abitazione privata."

Ogni card continua a linkare a `/realizzazioni` tramite il bottone già presente "Vedi tutte le realizzazioni" (nessun cambiamento al layout o al CTA).

## Note tecniche
- Gli alt text delle immagini useranno il titolo del progetto (coerente con il pattern esistente).
- Nessuna modifica a `Realizzazioni.tsx`, routing o stili globali.
- I file immagine `project-1.jpg`, `project-2.jpg`, `project-3.jpg` restano in `src/assets/` ma non saranno più referenziati (eventuale pulizia successiva).