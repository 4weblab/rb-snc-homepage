## Obiettivo

Far funzionare meglio **Netlify Prerendering** (servizio basato su prerender.io che renderizza la pagina in headless Chrome e serve HTML cached ai bot social/SEO), aggiungendo nel codice i segnali standard che il servizio si aspetta. Nessun cambiamento al design, ai contenuti o al prerender già esistente al build.

## Cosa manca oggi

1. **Nessun segnale `window.prerenderReady`**
   prerender.io aspetta questa flag prima di fare snapshot della pagina. Oggi emettiamo solo `document.dispatchEvent("render-event")`, che è il segnale richiesto dal nostro plugin Vite al build, ma **NON** dal servizio Netlify in produzione. Senza la flag, prerender.io fa snapshot dopo un timeout fisso (~10s) o, peggio, prima che Helmet abbia popolato `<head>`. Risultato: title/meta/og incompleti nello snapshot servito ai bot.
2. **Nessun `prerender-status-code` sulla 404**
   La pagina `NotFound` viene servita ai bot con status 200 (perché è il fallback SPA `/* → /404.html 404` lato Netlify, ma per rotte SPA matchate da React Router senza match, il bot vede 200). Senza `<meta name="prerender-status-code" content="404">` prerender.io non sa che è una 404 e la indicizza.
3. **Niente di intrinsecamente bloccante**, ma il cookie banner: già fatto bene (ritorna `null` al primo render, comparsa dopo 400ms → lo snapshot non lo cattura). OK.

## Piano di intervento

### Step 1 — Segnale `prerenderReady` in `src/main.tsx`

- All'avvio: `window.prerenderReady = false`.
- Dopo che React ha montato l'app **e** Helmet ha popolato `<head>` (basta lo stesso `requestAnimationFrame + setTimeout` già presente per `render-event`): `window.prerenderReady = true`.
- Mantenere anche `dispatchEvent("render-event")` per non rompere il prerender al build.

Così sia il prerender al build (Puppeteer) sia Netlify Prerendering (prerender.io) hanno il segnale che usano nativamente, e fanno snapshot **dopo** che il `<title>`, `<meta>`, `<link rel="canonical">` e i `og:*` per-route sono in DOM.

### Step 2 — Status 404 corretto nella SPA per i bot

In `src/pages/NotFound.tsx`, aggiungere via `<Helmet>`:
- `<meta name="prerender-status-code" content="404" />`
- `<meta name="robots" content="noindex, nofollow" />`
- `<title>` e `<meta description>` dedicati.

Effetto: quando un bot chiede una rotta inesistente (es. `/vecchia-pagina`), prerender.io serve l'HTML con header `HTTP 404`, evitando indicizzazione di pagine fantasma.

### Step 3 — Verifica & cleanup leggeri (no fix, solo controllo)

- Confermare che `public/_headers` non disabiliti il caching delle HTML in modo aggressivo per i bot (oggi `Cache-Control: public, max-age=0, must-revalidate` — OK, lascia che prerender.io gestisca la sua cache).
- Confermare che `og:image` (1200×630) e canonical risolvano correttamente nello snapshot post-Helmet (già verificato precedentemente).
- Nessun intervento su `netlify.toml` o `_redirects` necessario: la regola `/* /404.html 404` è già corretta per rotte fisiche non risolte.

## Cosa NON cambio

- Lista di rotte prerenderizzate al build (`vite.config.ts`) — invariata.
- Contenuti, design, sistema Helmet per-route — invariati.
- robots.txt, sitemap.xml, llms.txt — invariati.

## Dettagli tecnici (per riferimento)

```text
Bot social (LinkedIn/Facebook/Twitter/Slack) → Netlify edge → User-Agent bot? 
  └─ sì → richiesta inoltrata a prerender.io
       └─ headless Chrome carica la pagina
            └─ aspetta window.prerenderReady === true  (← oggi mai impostata)
                 └─ snapshot HTML → cache → restituito al bot
```

File toccati: `src/main.tsx`, `src/pages/NotFound.tsx`. Tutto qui.
