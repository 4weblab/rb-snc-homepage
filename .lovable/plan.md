## Obiettivo
Rimuovere Puppeteer e tutto il sistema di prerendering. L'app diventa una SPA pura servita da `index.html`.

## Modifiche

### 1. `vite.config.ts`
- Rimuovere `import prerender from "@prerenderer/rollup-plugin"`.
- Rimuovere la costante `prerenderRoutes`.
- Rimuovere il blocco `mode === "production" && prerender({...})` dai plugins.
- Mantenere `react()` e `componentTagger()` in dev.

### 2. `package.json` — devDependencies
Rimuovere:
- `@prerenderer/renderer-puppeteer`
- `@prerenderer/rollup-plugin`
- `jsdom` (era usato solo come potenziale renderer alternativo — verifico se serve a vitest prima di rimuoverlo; se `vitest.config` o i test lo usano, lo mantengo).

### 3. `public/_redirects`
- Sostituire il fallback `/*  /404.html  404` con `/*  /index.html  200` così la SPA gestisce tutte le rotte client-side (incluse `/servizi`, `/realizzazioni`, ecc.) senza che Netlify cerchi HTML statici inesistenti.

### 4. `public/404.html`
- Se presente (generato dal prerender), eliminarlo: senza prerender non viene più rigenerato e diventerebbe stantio. La rotta `/404` è già gestita lato React Router.

### 5. Verifiche post-modifica
- `index.html` non deve riferirsi a marker tipo `render-event` (già verificato: nessuna occorrenza).
- Sitemap, robots.txt, llms.txt restano invariati (i contenuti sono già statici in `public/`).
- Canonical e meta SEO continuano a funzionare via `react-helmet-async` lato client.

## Impatti da conoscere
- **SEO**: i crawler che non eseguono JavaScript (es. alcuni bot legacy) vedranno solo `index.html` "vuoto". Google, Bing, GPTBot, ClaudeBot eseguono JS e indicizzano correttamente le SPA, ma l'indicizzazione potrebbe richiedere più tempo rispetto all'HTML pre-renderizzato.
- **llms.txt**: resta la fonte principale di contenuto testuale per i crawler LLM che non eseguono JS — già arricchita, quindi nessuna regressione lato AI search.
- **Build**: più veloce, niente download di Chromium, niente variabile `PUPPETEER_EXECUTABLE_PATH`.
