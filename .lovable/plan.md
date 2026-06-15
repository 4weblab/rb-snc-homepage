## Obiettivo
Pulire `src/main.tsx` mantenendo SOLO il timer globale che imposta `window.prerenderReady`, rimuovendo la logica legacy di prerendering.

## Modifiche a `src/main.tsx`

**Rimuovere:**
- Import `hydrateRoot` da `react-dom/client`
- Variabile `isPrerendered` e il branch `if/else` con `hydrateRoot`
- `document.dispatchEvent(new Event("render-event"))` (segnale Puppeteer non più usato)
- Commenti relativi al prerender build-time

**Mantenere:**
- `createRoot(container).render(tree)` come unico metodo di mount
- Timer globale `requestAnimationFrame + setTimeout(50)` che imposta `window.prerenderReady = true` (valido per tutte le pagine)

## Risultato atteso (`src/main.tsx`)

```tsx
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

createRoot(container).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Segnale globale per prerender.io / Netlify Prerendering:
// snapshot DOPO che React e Helmet hanno popolato DOM e <head>.
// Si applica a TUTTE le pagine del sito.
declare global {
  interface Window {
    prerenderReady: boolean;
  }
}

window.prerenderReady = false;
requestAnimationFrame(() => {
  setTimeout(() => {
    window.prerenderReady = true;
  }, 50);
});
```

## File toccati
- `src/main.tsx` (unico file modificato)
