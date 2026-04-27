import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

/**
 * Rotte da prerenderizzare al build.
 * Devono coincidere con quelle definite in src/App.tsx.
 * "/404" viene salvato come 404.html (gestito sotto da postProcess).
 */
const prerenderRoutes = [
  "/",
  "/servizi",
  "/realizzazioni",
  "/certificazioni",
  "/contatti",
  "/cookie-policy",
  "/privacy-policy",
  "/404",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      prerender({
        routes: prerenderRoutes,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          maxConcurrentRoutes: 2,
          renderAfterDocumentEvent: "render-event",
          headless: "new",
          launchOptions: {
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
          },
        },
        postProcess(renderedRoute: {
          route: string;
          html: string;
          outputPath?: string;
        }): void {
          // /404 -> 404.html (file singolo, non cartella)
          if (renderedRoute.route === "/404") {
            renderedRoute.outputPath = "404.html";
          }
          // Pulizia: garantiamo lang="it" sull'HTML serializzato
          renderedRoute.html = renderedRoute.html.replace(
            /<html(\s[^>]*)?>/,
            (match, attrs = "") =>
              /lang=/.test(attrs) ? match : `<html lang="it"${attrs || ""}>`,
          );
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
