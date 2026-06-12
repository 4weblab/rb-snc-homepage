## Obiettivo
Passare da hosting Windows/IIS a Netlify, rimuovendo le configurazioni IIS-specifiche e aggiungendo quelle native Netlify (headers, redirect SPA, cache, 404 personalizzato).

## Modifiche

### 1. Rimozione file IIS
- **Elimina** `public/web.config` — non serve su Netlify (è specifico IIS).

### 2. Nuovo file `public/_headers` (Netlify)
Headers di sicurezza e cache equivalenti a quelli IIS:
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Cache long-term per asset hashati Vite (`/assets/*`: `Cache-Control: public, max-age=31536000, immutable`)
- Cache breve per HTML (`/*.html`: `Cache-Control: public, max-age=0, must-revalidate`)
- Cache lungo per `/*.webp`, `/*.woff2`, `/*.jpg`, `/*.png`

### 3. Nuovo file `public/_redirects` (Netlify)
- Pagina 404 personalizzata: `/* /404.html 404` come ultima riga, così le rotte non prerenderizzate restituiscono `404.html` con status 404 (come faceva `httpErrors` in `web.config`).
- Le rotte prerenderizzate (Home, Servizi, Realizzazioni, Certificazioni, Contatti, Cookie/Privacy Policy) sono file fisici e vengono servite prima del fallback — comportamento identico a oggi.
- Nota: non serve fallback SPA verso `/index.html` perché tutte le rotte note sono prerenderizzate al build da `vite.config.ts`.

### 4. (Opzionale) `netlify.toml` minimale
Aggiungere build settings espliciti per chiarezza:
```
[build]
  command = "npm run build"
  publish = "dist"
```
Compressione (gzip/brotli) e MIME types (webp, woff2, json, webmanifest) sono già gestiti automaticamente da Netlify — nessuna configurazione necessaria (a differenza di IIS).

### 5. Commento `vite.config.ts`
Il commento sopra `prerenderRoutes` cita "/404 viene salvato come 404.html (gestito sotto da postProcess)" — resta corretto: il file `404.html` ora viene servito da Netlify tramite `_redirects` invece che da `httpErrors` IIS. Aggiorno solo il commento per riflettere il nuovo hosting.

## Cosa NON cambia
- Codice React, routing, form Web3Forms, prerender, SEO, JSON-LD, sitemap, robots.txt, llms.txt restano invariati.
- Le rotte continuano a essere prerenderizzate in file `index.html` dentro cartelle (es. `/servizi/index.html`), servite nativamente da Netlify.

## File toccati
- `public/web.config` → eliminato
- `public/_headers` → nuovo
- `public/_redirects` → nuovo
- `netlify.toml` → nuovo (root)
- `vite.config.ts` → solo aggiornamento commento
