## Obiettivo

Integrare i nuovi asset (favicon e og-image), correggere l'indirizzo a "Via Sansughe 6" ovunque, arricchire i dati strutturati con orari/geo, e applicare in un'unica passata i fix SEO critici emersi dall'audit precedente.

---

## 1. Asset nuovi (favicon + OG image)

- Copia `user-uploads://favicon.webp` → `public/favicon.webp`
- Copia `user-uploads://og.webp` → `public/og-image.webp`
- Elimina `public/favicon.ico` (per evitare che il browser lo serva al posto del nuovo)
- Aggiorna `index.html`:
  - `<link rel="icon" href="/favicon.webp" type="image/webp" />`
  - Aggiunge `<meta property="og:image" content="https://rb-snc.it/og-image.webp" />` + `og:image:width/height/alt`
  - Aggiunge `og:site_name`, `og:locale="it_IT"`
  - Aggiunge `<meta name="twitter:image" content="https://rb-snc.it/og-image.webp" />` e `twitter:title/description`

---

## 2. Correzione indirizzo a "Via Sansughe 6"

File da aggiornare:
- `src/lib/business.ts` → `streetAddress: "Via Sansughe 6"`
- `src/components/Footer.tsx` → "Via Sansughe 6/3" diventa "Via Sansughe 6"
- `src/pages/Contatti.tsx` → link Google Maps + eventuale visualizzazione testuale aggiornati con "Via Sansughe 6"

---

## 3. JSON-LD: orari, geo, tipo più specifico

In `src/lib/business.ts`:
- Cambia `@type` da `LocalBusiness` a `["LocalBusiness", "RoofingContractor"]`
- Punta `image` a `/og-image.webp`
- Aggiungi `geo` con coordinate della sede di Cittadella (recuperate dalla scheda Google: lat ~45.6485, lng ~11.7895 – verificate dall'URL Maps)
- Aggiungi `openingHoursSpecification`: lun-ven 09:00–17:00
- Aggiungi `priceRange: "€€"` (campo richiesto da Google per LocalBusiness)
- Aggiungi `sameAs` con la URL della scheda Google Business (se confermi il link in fase di build)

---

## 4. Fix SEO critici (audit)

### 4a. Indicizzazione pagine legali e 404
- `src/pages/PrivacyPolicy.tsx`, `src/pages/CookiePolicy.tsx`, `src/pages/NotFound.tsx`: aggiungi `<meta name="robots" content="noindex, follow" />` via Helmet
- `public/sitemap.xml`: rimuovi le voci `/privacy-policy` e `/cookie-policy`

### 4b. Footer con link interni React Router
- Sostituisci gli `<a href="/...">` interni del footer con `<Link to="...">` per evitare full reload (Home, Realizzazioni, Servizi, Certificazioni, Contatti)

### 4c. Performance Hero (LCP)
- `src/components/HeroSection.tsx`: prima immagine del carosello con `fetchPriority="high"`, `loading="eager"`, `decoding="async"`, `width` e `height` espliciti; le altre `loading="lazy"`

### 4d. Alt text SEO-oriented
- Sostituisci alt generici tipo "Coperture industriali - 4 WEBLAB" con descrizioni che includono keyword di business (es. "Rifacimento copertura industriale RB SNC – Cittadella, Padova", "Bonifica amianto su capannone in Veneto", ecc.)

### 4e. Contenuto thin su /realizzazioni
- Rimuovi/sostituisci eventuali "Lorem ipsum" residui nel JSON-LD e nei copy della pagina Realizzazioni con testi reali e brevi descrizioni dei lavori (struttura attuale invariata)

---

## Note tecniche

- Tutto il contenuto resta su dominio canonico `https://rb-snc.it` (non-www) — nessuna modifica a canonical/sitemap se non la rimozione delle pagine legali.
- Coordinate geo verranno prese dal link Google Maps della scheda condivisa; se non ricavabili con precisione userò il centro di Via Sansughe, Cittadella.
- Nessun cambiamento a contenuti aziendali, layout, palette, struttura pagine.
- Nessuna nuova dipendenza npm.

## File toccati (previsione)

- `index.html`
- `public/favicon.webp` (nuovo), `public/og-image.webp` (nuovo), `public/favicon.ico` (rimosso), `public/sitemap.xml`
- `src/lib/business.ts`
- `src/components/Footer.tsx`, `src/components/HeroSection.tsx`
- `src/pages/Contatti.tsx`, `src/pages/PrivacyPolicy.tsx`, `src/pages/CookiePolicy.tsx`, `src/pages/NotFound.tsx`, `src/pages/Realizzazioni.tsx`
