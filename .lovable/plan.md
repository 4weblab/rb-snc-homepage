## Obiettivo

Eliminare le cause potenziali di hydration mismatch tra HTML prerenderizzato (Puppeteer al build) e primo render React lato client, individuate da un audit profondo del codebase.

## Cosa cambia (4 fix mirati)

### 1. `src/components/ui/sonner.tsx` + `src/App.tsx` — GRAVE
**Problema:** `<Sonner />` usa `useTheme()` di `next-themes` senza `ThemeProvider` nel tree (uso scorretto) e renderizza un portal direttamente in `<body>` — quindi **fuori da `#root`**. Durante il prerender Puppeteer serializza questo portal nel body; al primo `hydrateRoot(#root)` React non lo tocca, e poi il client ne crea un secondo → DOM "sporco" con due container Sonner.

**Fix:** Rimuovere `<Sonner />` da `App.tsx` (i toast nel progetto si usano via il `<Toaster />` shadcn già presente — i form di contatto non usano sonner). Eliminare anche il file `src/components/ui/sonner.tsx` per pulizia. Nessuna funzionalità persa.

### 2. `src/components/HeroSection.tsx` — MEDIO
**Problema:** `<img {...{ fetchpriority: ... }} />` e `<link {...{ fetchpriority: "high" }} />` passano l'attributo in lowercase via spread. React 18.3 supporta la prop nativa `fetchPriority` (camelCase). La forma lowercase può produrre attributi DOM diversi tra prerender e hydration.

**Fix:** Sostituire i due spread con `fetchPriority="high|low"` (camelCase, prop nativa React).

### 3. `src/components/SectorsSection.tsx` — MEDIO
**Problema:** `TimelineItem` parte con `isVisible=false` → classi `opacity-0 -translate-x-8`. Nel prerender, gli `useEffect` girano *prima* del `render-event` (rAF + 50ms): se l'IntersectionObserver scatta in quella finestra, Puppeteer serializza HTML con `opacity-100 translate-x-0`, mentre il primo render client ha `opacity-0`. → mismatch di `className`.

**Fix:** Aggiungere flag `isMounted` (false al primo render, true in `useEffect`): finché `!isMounted` usare le stesse classi del prerender (visibili, senza animazione). Solo da `isMounted=true` in poi si attiva l'observer e le transizioni. Questo garantisce che il primo render client combaci sempre col DOM prerenderizzato.

### 4. `src/components/BrandsSection.tsx` — LIEVE (preventivo)
**Problema:** `<style>{...}</style>` inline nel JSX (keyframes). React 18 non hoista gli style tag; differenze di whitespace tra bundle e prerender possono generare warning.

**Fix:** Spostare `@keyframes scroll` e la classe `.animate-brands-scroll` in `src/index.css` (sezione `@layer utilities`); rimuovere lo `<style>` inline e l'attributo `style={{ animation: ... }}` → usare `className="animate-brands-scroll"`.

## File toccati

- `src/App.tsx` — rimuovere import e `<Sonner />`
- `src/components/ui/sonner.tsx` — eliminare il file
- `src/components/HeroSection.tsx` — `fetchPriority` camelCase
- `src/components/SectorsSection.tsx` — flag `isMounted`
- `src/components/BrandsSection.tsx` — rimuovere `<style>` inline
- `src/index.css` — aggiungere keyframes `brands-scroll`

## Cosa NON cambia

- `src/main.tsx` (logica `isPrerendered` + `hydrateRoot` corretta)
- `CookieBanner`, `Navbar`, `ScrollToHash`, `HeroSection` carosello (stato iniziale già consistente)
- Hook `use-mobile`, rotte, `vite.config.ts`, `netlify.toml`, contenuti, design, SEO/Helmet
- Nessuna modifica al backend o al prerender setup
