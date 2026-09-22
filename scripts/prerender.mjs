/**
 * Generazione statica delle pagine (SSG).
 * Eseguito dopo `vite build` (client) e `vite build --ssr` (server).
 * Per ogni rotta scrive un file HTML completo con markup, title, meta e JSON-LD,
 * così i crawler ricevono il contenuto senza eseguire JavaScript.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const distDir = resolve(root, "dist");

const routes = [
  "/",
  "/servizi",
  "/realizzazioni",
  "/certificazioni",
  "/contatti",
  "/4weblab",
  "/cookie-policy",
  "/privacy-policy",
  "/404",
];

const template = readFileSync(resolve(distDir, "index.html"), "utf-8");
const { render } = await import(resolve(root, "dist-ssr/entry-server.js"));

// Rimuove dal template i tag che Helmet rigenera per pagina,
// mantenendo charset, viewport, favicon, geo e og:image.
function stripManagedTags(head) {
  return head
    .replace(/<title>[\s\S]*?<\/title>\s*/g, "")
    .replace(/\s*<meta name="description"[^>]*>/g, "")
    .replace(/\s*<meta property="og:title"[^>]*>/g, "")
    .replace(/\s*<meta property="og:description"[^>]*>/g, "")
    .replace(/\s*<meta property="og:url"[^>]*>/g, "")
    .replace(/\s*<meta property="og:type"[^>]*>/g, "")
    .replace(/\s*<meta name="twitter:title"[^>]*>/g, "")
    .replace(/\s*<meta name="twitter:description"[^>]*>/g, "");
}

for (const route of routes) {
  const { html, head } = render(route);

  const headStart = template.indexOf("<head>") + "<head>".length;
  const headEnd = template.indexOf("</head>");
  const baseHead = stripManagedTags(template.slice(headStart, headEnd));

  const page =
    template.slice(0, headStart) +
    baseHead +
    "\n    " +
    head +
    "\n  " +
    template.slice(headEnd).replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

  const outPath =
    route === "/"
      ? resolve(distDir, "index.html")
      : route === "/404"
        ? resolve(distDir, "404.html")
        : resolve(distDir, route.slice(1), "index.html");

  const outDir = dirname(outPath);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, page);
  console.log(`prerendered ${route} -> ${outPath.replace(distDir, "dist")}`);
}
