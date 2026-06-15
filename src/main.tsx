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
