## Obiettivo

Configurare un sistema di **prerendering** automatico al build, in modo che lanciando `npm run build` venga generato un `dist/` contenente HTML statici per ogni rotta del sito (con meta tag, canonical, JSON-LD e contenuto già renderizzati nell'HTML), pronto per essere caricato via FTP su **Windows Server / IIS** senza bisogno di Node lato server.

Il flusso per te resta identico: `npm run build` → upload `dist/` via FTP → fine.

---

## Cosa cambia rispetto a oggi

**Oggi**: il build produce un solo `index.html` quasi vuoto. Tutto il contenuto e i meta tag (`<title>`, `description`, `og:*`, JSON-LD per pagina) sono iniettati lato client da React + Helmet. Crawler che non eseguono JS (anteprime social, alcuni bot SEO, scanner) vedono solo il template della home.

**Dopo**: il build produce un HTML reale per ogni rotta, con DOM completo, meta tag specifici e JSON-LD già nel sorgente. Il sito resta una SPA per la navigazione interna (rimane fluido, niente reload tra pagine), ma il primo caricamento di qualsiasi URL serve HTML statico già pronto.

---

## Mappa finale del `dist/` dopo il build

```text
dist/
├── index.html                 ← Home (meta + JSON-LD LocalBusiness)
├── 404.html                   ← Pagina 404 statica per IIS
├── web.config                 ← Routing IIS + MIME + compressione + cache
├── robots.txt
├── sitemap.xml
├── favicon.webp
├── og-image.webp
├── placeholder.svg
├── servizi/
│   └── index.html             ← /servizi prerenderizzata
├── realizzazioni/
│   └── index.html             ← /realizzazioni prerenderizzata
├── certificazioni/
│   └── index.html             ← /certificazioni prerenderizzata
├── contatti/
│   └── index.html             ← /contatti prerenderizzata
├── cookie-policy/
│   └── index.html             ← /cookie-policy prerenderizzata
├── privacy-policy/
│   └── index.html             ← /privacy-policy prerenderizzata
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    ├── servizi-hero-[hash].jpg
    ├── ... (tutti gli asset bundle hashati da Vite)
```

Le sottocartelle (`servizi/index.html`, ecc.) garantiscono che IIS, quando l'utente entra direttamente su `https://rb-snc.it/servizi`, serva subito il file `servizi/index.html` corretto, senza dover passare dal fallback SPA. Il `web.config` interviene solo per le rotte ulteriori non prerenderizzate.

---

## Rotte che verranno prerenderizzate

Estratte dal router (`src/App.tsx`):

- `/`
- `/servizi`
- `/realizzazioni`
- `/certificazioni`
- `/contatti`
- `/cookie-policy`
- `/privacy-policy`

La rotta catch-all `*` → `NotFound` viene prerenderizzata come `404.html` separato per IIS.

---

## Cosa verrà aggiunto / modificato

### Dipendenze (devDependencies)

- `vite-plugin-prerender` (oppure `react-snap` come alternativa). Userò `vite-plugin-prerender` perché:
  - È nativo Vite (zero hack)
  - Include Puppeteer come transitive dependency
  - Genera la struttura `route/index.html` automaticamente
  - Non richiede modifiche al codice React

### File nuovi

1. **`public/web.config`** — file di configurazione IIS che gestisce:
   - **URL Rewrite**: se l'utente entra su una rotta non esistente come file fisico, fallback a `/index.html` (per qualsiasi rotta dinamica futura non prerenderizzata)
   - **MIME types**: aggiunge `image/webp` per IIS vecchi
   - **Compressione**: abilita gzip per HTML/CSS/JS
   - **Cache headers**:
     - asset hashati (`/assets/*`) → cache 1 anno (`max-age=31536000, immutable`)
     - HTML → no-cache (così gli aggiornamenti si propagano subito al prossimo deploy)
   - **Default document**: `index.html`
   - **Custom error 404** → `/404.html`

2. **`scripts/prerender.config.ts`** (o configurazione inline nel `vite.config.ts`) — elenco delle rotte da prerenderizzare e opzioni Puppeteer (timeout, attesa che Helmet abbia popolato il `<head>`, attesa che React abbia idratato).

### File modificati

1. **`vite.config.ts`** — aggiunta del plugin prerender nella pipeline di build (attivo solo in `mode === "production"`), con la lista delle rotte e l'hook che, dopo il rendering, salva l'HTML nelle sottocartelle.

2. **`package.json`** — nessuna modifica agli script: `npm run build` continua a fare tutto. Aggiunte solo le devDependencies.

3. **`src/main.tsx`** — sostituzione di `createRoot(...).render(...)` con un pattern che usi `hydrateRoot` se l'HTML iniziale è già renderizzato (rilevato dalla presenza di figli in `#root`), altrimenti `createRoot`. Questo evita warning di mismatch e mantiene l'idratazione corretta sia in dev sia in prod.

4. **`index.html`** — nessuna modifica strutturale. Il prerender riempirà `<div id="root">` con il DOM renderizzato e aggiornerà `<head>` con i meta tag emessi da Helmet di ogni pagina.

5. **`src/pages/NotFound.tsx`** — aggiunto `<Helmet>` con `title`, `meta robots="noindex"` e `link canonical` per produrre un `404.html` SEO-pulito.

---

## Dettagli tecnici (per riferimento, non serve agire)

- **Come funziona il prerender**: al termine di `vite build`, il plugin avvia un server statico interno che serve `dist/`, lancia Chromium headless, visita ogni rotta della lista, attende che `document.querySelector('[data-helmet-injected]')` o un evento custom indichi il completamento dell'idratazione, fa lo `outerHTML` di `<html>` e lo scrive su disco nella struttura `dist/<rotta>/index.html`.
- **JSON-LD**: viene già emesso da `react-helmet-async` come `<script type="application/ld+json">`. Dopo il prerender finirà nel sorgente HTML statico, leggibile da qualsiasi crawler senza JS.
- **Hydration**: il bundle JS resta identico, viene caricato e idrata l'HTML statico — la SPA continua a funzionare normalmente per le navigazioni client-side.
- **Form contatti**: nessun impatto, è puro client-side. Il prerender cattura solo lo stato iniziale.
- **Carousel/Dialog di Realizzazioni**: vengono prerenderizzati nel loro stato chiuso/iniziale (corretto). Le interazioni funzionano dopo idratazione.
- **Tempo aggiuntivo al build**: ~10-30 secondi in più (Puppeteer + 7 visite). Il primo `npm install` scaricherà Chromium (~150 MB), una sola volta.
- **`web.config` per IIS**: serve assicurarsi che sul server siano installati i moduli **URL Rewrite** e (opzionale) **Application Request Routing**. Se mancano, l'unica conseguenza è che il fallback SPA non funziona: ma siccome tutte le rotte attuali sono prerenderizzate come file fisici, **il sito funziona comunque** anche senza URL Rewrite. Il modulo serve solo per future rotte dinamiche.

---

## Workflow finale per te

1. `npm install` (una volta sola, per scaricare le nuove devDependencies + Chromium)
2. `npm run build`
3. Carichi tutto il contenuto di `dist/` via FTP nella root del sito IIS
4. Fine

Nessuna configurazione manuale lato server, nessuno script extra da lanciare, nessun comando aggiuntivo.

---

## Verifica post-implementazione

Dopo il build farò `view-source:` (concettualmente) di un paio di file generati per confermare che:
- `dist/servizi/index.html` contiene `<title>Servizi…</title>`, meta description specifica, JSON-LD del servizio e il DOM completo della pagina
- `dist/contatti/index.html` contiene il DOM del form e la mappa
- `dist/index.html` contiene il JSON-LD `LocalBusiness` nel sorgente

Una volta confermato, il piano è completato.
