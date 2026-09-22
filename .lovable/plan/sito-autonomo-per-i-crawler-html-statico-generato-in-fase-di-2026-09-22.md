# Sito autonomo per i crawler: HTML statico generato in fase di build

Sì, si può fare. Oggi il sito è una single-page app: il server invia una pagina "vuota" e il contenuto compare solo dopo l'esecuzione del JavaScript. Per questo serve il prerender di Netlify, che intercetta i bot e li fa aspettare — rallentando scansione e indicizzazione.

La soluzione è generare, durante la build, un file HTML completo per ogni pagina del sito. I crawler ricevono subito il contenuto finito, senza passare da alcun servizio intermedio. L'estensione Netlify Prerendering potrà essere disattivata.

## Cosa cambia per chi visita il sito
Niente: la navigazione resta identica e istantanea. Migliora anzi la prima apertura, perché testi e titoli sono già presenti nella pagina ricevuta.

## Pagine generate
Home, Servizi, Realizzazioni, Certificazioni, Contatti, 4weblab, Cookie Policy, Privacy Policy e la pagina 404.

## Interventi tecnici

1. **Script di generazione statica** (`scripts/prerender.mjs`, eseguito dopo `vite build`):
   - usa `react-dom/server` con `StaticRouter` e `HelmetProvider` per renderizzare ogni rotta;
   - inietta il markup dentro `#root` di `dist/index.html` e sostituisce title, meta, canonical e JSON-LD con quelli della pagina;
   - scrive `dist/<rotta>/index.html` per ogni percorso, più `dist/404.html`.
2. **`package.json`**: `build` diventa `vite build && node scripts/prerender.mjs`; aggiunta di `vite-node` (o build SSR dedicata con `vite build --ssr`) per eseguire i componenti TSX lato Node.
3. **`src/main.tsx`**: passaggio da `createRoot` a `hydrateRoot` quando `#root` contiene già markup, mantenendo `createRoot` come fallback in sviluppo. Rimozione del flag `window.prerenderReady`, non più necessario.
4. **`public/_redirects`**: invariato — Netlify serve i file statici esistenti prima del fallback SPA. Si aggiunge solo la regola 404 per le rotte inesistenti.
5. **`netlify.toml`**: invariato (`npm run build`).
6. **Verifica anti-mismatch**: i componenti che usano `window`/`localStorage` (CookieBanner, useIsMobile, ScrollToHash, form Contatti) operano già dentro `useEffect`; verrà controllato che il primo render lato server coincida con quello del browser, incluse le sezioni con carousel e parallasse.

## Verifica finale
Build locale e controllo che `dist/servizi/index.html` contenga title, description, testi e JSON-LD corretti senza JavaScript; stessa verifica su tutte le pagine. Dopo il deploy potrai disattivare l'estensione Prerendering su Netlify.
