## Cosa significa l'errore

`Minified React error #418` = **"Hydration failed: l'UI iniziale del client non corrisponde a quella renderizzata dal server"**. Succede solo in produzione perché il sito usa `prerender` (Puppeteer in build) + `hydrateRoot` in `src/main.tsx`. In dev non si vede perché c'è solo `createRoot`.

Quando l'hydration fallisce, React **butta via tutto l'HTML prerenderato e ri-renderizza da zero**: la pagina funziona comunque, ma:
- si perde il vantaggio SEO/performance del prerender (flash di re-render);
- alcuni crawler/social possono leggere contenuto incoerente;
- l'errore inquina la console.

## Cause più probabili nel nostro caso

Dall'analisi dei file:

1. **`src/components/Footer.tsx:137`** → `© {new Date().getFullYear()}`. Se il build è stato fatto nel 2025 e l'utente carica nel 2026 (o viceversa attorno a Capodanno), c'è mismatch. Oggi siamo a giugno 2026, build recente: improbabile *ora*, ma è una bomba a orologeria.
2. **`react-helmet-async` + `hydrateRoot`**: in alcuni casi i tag `<title>`/`<meta>` aggiunti da Helmet nell'HTML prerenderato non hanno gli stessi attributi (`data-rh`) di quelli che Helmet inietta al mount. È la causa più comune di #418 su SPA prerenderate.
3. **`src/main.tsx`**: il check `container.hasChildNodes()` è fragile — basta un text node di whitespace per chiamare `hydrateRoot` su un root vuoto e fallire. Va reso più robusto (controllare `firstElementChild`).
4. Eventuale differenza introdotta da estensioni browser o dal `postProcess` che inietta `lang="it"` (improbabile, ma da verificare).

## Piano di intervento

### Step 1 — Hardening del bootstrap (rimuove falsi-positivi)

In `src/main.tsx`:
- sostituire `container.hasChildNodes()` con `container.firstElementChild !== null`, così l'app cade in `createRoot` se il prerender non ha emesso markup reale;
- passare `onRecoverableError` a `hydrateRoot` per loggare in console il mismatch reale (in build production il messaggio resta criptico, ma quantomeno si vede lo stack del nodo coinvolto).

### Step 2 — Fix del Footer

In `src/components/Footer.tsx`:
- calcolare l'anno **fuori dal render** una sola volta, oppure usare uno `useState(() => new Date().getFullYear())` impostato in `useEffect`, oppure hard-codare `2026` (l'anno cambia raramente). Approccio consigliato: fissare l'anno corrente come costante e aggiornarlo manualmente, oppure leggere l'anno solo lato client dopo mount (con fallback al valore prerenderato).

### Step 3 — Verifica HTML prerenderato vs runtime

- aprire `dist/index.html` dopo `npm run build` e confrontarlo con il DOM live: cercare differenze in `<head>` (ordine meta, attributi `data-rh`) e nei nodi figli di `#root`;
- se la differenza è nei tag Helmet, valutare il pattern raccomandato da `react-helmet-async` per SSR: passare un `helmetContext` al `HelmetProvider` e usarlo, così gli attributi sono coerenti tra prerender e hydration.

### Step 4 — Validazione

- nuovo build di produzione;
- aprire il sito in locale (servendo `dist/`) con DevTools aperte: **nessun** errore #418, nessun "Text content did not match", nessun warning di hydration;
- verificare con Lighthouse che il contenuto sopra la piega resti stabile (no layout shift causato dal re-render fallito).

## Cosa NON cambio

- nessuna modifica al routing, ai contenuti, alle pagine, al sistema di prerender o al design;
- nessuna nuova dipendenza.

## Dettagli tecnici (per riferimento)

```text
build  →  Puppeteer renderizza ogni rotta → dist/<route>/index.html (con #root popolato + tag Helmet in <head>)
runtime →  browser scarica HTML → React hydrateRoot(#root) → confronta tree → se differisce → error #418 → re-render completo
```

Il file `vite.config.ts` resta invariato; il fix è tutto in `src/main.tsx` + `src/components/Footer.tsx` (+ eventualmente helmetContext se Step 3 lo conferma).
