# Fix indicizzazione segnalata da Search Console

## Diagnosi

Ho controllato `public/_redirects`, `public/robots.txt`, `public/sitemap.xml`, le rotte in `src/App.tsx`, la prerenderizzazione in `vite.config.ts` e i tag canonical/og:url di ogni pagina.

**Causa principale dei problemi**: la regola di fallback in `public/_redirects` è malformata.

```
/*    /404.html    404/*
```

Il terzo campo deve essere solo lo status (`404`). Il suffisso `/*` viene interpretato male da Netlify e in alcuni casi genera **redirect 302** verso `/404.html` invece di servire la pagina con status 404. Questo spiega contemporaneamente:
- **Pagina con reindirizzamento** (302 inatteso)
- **Non trovata (404)** (vecchie URL eliminate, es. ex pagine di dettaglio servizi, ora correttamente assenti)

Gli altri segnali sono coerenti col funzionamento atteso:
- **Bloccata da robots.txt**: `public/robots.txt` ha solo direttive `Allow: /` (nessun `Disallow`). Probabilmente Google sta riportando vecchie URL di asset/file ormai inesistenti. Nessuna modifica al file necessaria.
- **Esclusa in base al tag "noindex"**: corretto e voluto su `/cookie-policy`, `/privacy-policy`, `/404`. Già escluse dalla sitemap. Nessuna modifica.

Sitemap, canonical e og:url sono tutti coerenti su `https://rb-snc.it` (senza www) e puntano alla pagina stessa.

## Modifiche da applicare

### 1. `public/_redirects` — correggere la sintassi del fallback 404

```
# Tutte le rotte applicative sono prerenderizzate al build (vedi vite.config.ts)
# e servite come file statici. Le URL non esistenti restituiscono 404.html con status 404.
/*    /404.html    404
```

Rimosso il `/*` finale errato. Le rotte prerenderizzate (`/`, `/servizi`, `/realizzazioni`, `/certificazioni`, `/contatti`, `/cookie-policy`, `/privacy-policy`) continuano a essere servite come file statici; solo le URL non esistenti finiscono su `/404.html` con status HTTP 404 reale.

### 2. (Consiglio operativo, non modifica codice) Redirect www → non-www

Per evitare che Google indicizzi sia `www.rb-snc.it` sia `rb-snc.it` (altra fonte di "Pagina con reindirizzamento"), assicurati che su Netlify → **Domain management** il dominio primario sia `rb-snc.it` e che `www.rb-snc.it` sia configurato come alias con redirect 301 al primario. Questa configurazione si fa nel pannello Netlify, non nel codice.

### 3. Verifica post-deploy

Dopo il deploy:
1. In Search Console → **Controllo URL**, testare `https://rb-snc.it/servizi` (e altre rotte): deve risultare 200, non 302.
2. Testare una URL inesistente (es. `https://rb-snc.it/pagina-inesistente`): deve restituire 404 (non 302/200).
3. In Search Console, cliccare "Convalida correzione" sui report **Pagina con reindirizzamento** e **Non trovata (404)** per richiedere il re-crawl.

## Dettagli tecnici

- **Routing**: le rotte React sono prerenderizzate via `@prerenderer/rollup-plugin` in `vite.config.ts`. Ogni rotta produce un `index.html` statico in `dist/`, quindi Netlify le serve direttamente senza fallback SPA per le rotte note.
- **Sintassi Netlify `_redirects`**: `<from> <to> <status>` — il terzo campo è uno status code intero (200, 301, 302, 404…). Aggiungere caratteri come `/*` lo invalida.
- **Nessuna pagina ha `Disallow`** in robots.txt: il warning di Search Console si riferisce con ogni probabilità ad asset legacy non più presenti.
