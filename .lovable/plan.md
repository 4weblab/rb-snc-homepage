## Obiettivo

Aggiornare i dati strutturati con le coordinate geo precise prese da Google Maps e collegare ufficialmente la scheda Google Business Profile via `sameAs` nel JSON-LD.

---

## 1. Coordinate geo precise

In `src/lib/business.ts`, aggiorno il blocco `geo` con i valori esatti copiati da Google Maps:

- `latitude: 45.6379303`
- `longitude: 11.7905672`

(sostituiscono i valori approssimati 45.6485 / 11.7895 usati prima come centro di Via Sansughe).

---

## 2. Collegamento Google Business Profile via `sameAs`

In `src/lib/business.ts`, aggiungo al `localBusiness` il campo:

```ts
sameAs: ["https://share.google/vVq1eG5PIttanZ00O"]
```

Questo dice a Google esplicitamente che l'entità descritta nel JSON-LD del sito è la stessa della scheda GBP, rinforzando il knowledge graph e la SEO locale.

Nessun profilo social viene aggiunto (assenti come confermato).

---

## 3. Cosa NON tocco

- Indirizzo, orari, tipo di business, priceRange, contatti: già corretti nel passaggio precedente.
- Canonical, sitemap, robots, og-image, favicon: già a posto.
- Foto cantieri: in attesa, le integrerò in un giro successivo nella pagina Realizzazioni.

---

## File toccati

- `src/lib/business.ts` (unica modifica)

Nessuna nuova dipendenza, nessun cambio a layout o contenuti visibili.
