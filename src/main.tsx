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

// Se la pagina è stata prerenderizzata, l'HTML iniziale ha già contenuto:
// usiamo hydrateRoot per agganciarci senza warning di mismatch.
const isPrerendered = container.hasChildNodes();

if (isPrerendered) {
  hydrateRoot(container, tree);
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
