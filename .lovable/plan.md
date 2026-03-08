

## Piano: Aumentare spaziatura tra timeline e card nella sezione "Settori serviti"

### Modifica in `src/components/SectorsSection.tsx`

**Desktop (riga 44):** Cambiare `gap-0` in `gap-8` sulla griglia a 3 colonne `lg:grid-cols-[1fr_auto_1fr]`. Questo aggiunge spazio orizzontale tra le colonne (card sinistra — dot — card destra).

**Center node (riga 72):** Aggiungere padding orizzontale `px-4` al contenitore del dot per dare ulteriore respiro visivo.

**Mobile (riga 108):** Aumentare il `gap-4` a `gap-6` nel layout mobile per distanziare il dot dalla card.

Una modifica di sole classi CSS su 3 righe, nessun cambiamento al contenuto o alle animazioni.

