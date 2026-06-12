import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const tree = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Se la pagina è stata prerenderizzata, l'HTML iniziale ha già markup reale
// dentro #root: usiamo hydrateRoot. firstElementChild evita falsi positivi
// dovuti a soli text node di whitespace.
const isPrerendered = container.firstElementChild !== null;

if (isPrerendered) {
  hydrateRoot(container, tree, {
    onRecoverableError: (error) => {
      // Logga in console il mismatch reale per facilitare il debug in prod.
      // eslint-disable-next-line no-console
      console.warn("[hydration]", error);
    },
  });
} else {
  createRoot(container).render(tree);
}

// Segnale per il prerenderer: la pagina è pronta.
// Diamo un tick a React/Helmet per popolare DOM e <head>.
if (typeof window !== "undefined") {
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.dispatchEvent(new Event("render-event"));
    }, 50);
  });
}
