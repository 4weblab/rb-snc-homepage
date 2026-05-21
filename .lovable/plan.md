# Piano di miglioramenti SEO (escluso EEAT)

Esegue i punti 1, 3, 4 e 5 dell'audit. Salta il punto 2 (EEAT) come richiesto.

## 1. JSON-LD — Home e collegamenti entità

**`src/pages/Index.tsx`**: aggiungere nel `<Helmet>` un `@graph` che include:
- `WebSite` con `url`, `name`, `inLanguage: "it-IT"`, `publisher: localBusinessRef`
- `BreadcrumbList` con singolo item Home
- Mantenere il `LocalBusiness` esistente

**`src/pages/Contatti.tsx`**: aggiungere `mainEntity: localBusinessRef` al nodo `ContactPage`.

**`src/pages/Certificazioni.tsx`**: aggiungere `about: localBusinessRef` al `WebPage`.

## 3. Alt text descrittivi

**`src/components/ServicesSection.tsx`** (riga 101): sostituire `alt={service.title}` con un campo `service.imageAlt` aggiunto al data model di ciascun servizio (es. "Operatore R.B. s.n.c. durante bonifica amianto su copertura industriale in Veneto").

**`src/components/ProjectsSection.tsx`** (riga 49): stesso pattern — aggiungere `project.imageAlt` descrittivo con località/keyword.

## 4. Performance immagini

### 4a. Conversione JPG → WebP (target ≤120 KB)
Convertire e sostituire i seguenti, aggiornando gli import:
- `sectors-bg.jpg` (406 KB) → `.webp`
- `servizi-hero.jpg`, `servizi-documentazione.jpg`
- `certificazioni-hero.jpg`, `certificazioni-sicurezza.jpg`, `certificazioni-documentazione.jpg`
- `contatti-hero.jpg`
- `realizzazioni-hero.jpg`
- `service-amianto.jpg`, `service-coperture-industriali.jpg`, `service-tetto-civile.jpg`

### 4b. Ricompressione webp pesanti
- `realizzazione-coperture-delmachem-*.webp` (250-520 KB) → target ≤200 KB
- `hero-bg*.webp` (287-396 KB) → target ≤180 KB

### 4c. Preload LCP
In `index.html`, aggiungere prima del `<title>`:
```html
<link rel="preload" as="image" href="/src/assets/hero-bg.webp" fetchpriority="high" type="image/webp" />
```
Nota: il path verrà hashato da Vite — gestire via import nel modulo entry oppure usare il file `public/`.

### 4d. width/height espliciti
Aggiungere attributi `width` e `height` (intrinseci dell'immagine) a tutte le `<img>` che ne sono prive in:
- `HeroSection.tsx`
- `ProjectsSection.tsx`
- `Realizzazioni.tsx`, `Servizi.tsx`, `Certificazioni.tsx`, `Contatti.tsx`

## 5. Altri miglioramenti

### 5a. FAQPage su Servizi
Aggiungere in `src/pages/Servizi.tsx` una sezione FAQ visibile (4-6 domande tipo: "Quanto costa bonificare l'amianto?", "Quanto dura un intervento?", "Serve autorizzazione?", "Cosa succede dei materiali rimossi?") + nodo `FAQPage` nel `@graph` JSON-LD.

### 5b. og:image per pagina
Non strettamente necessario ora; lasciato fuori scope salvo richiesta. (Generare un OG dedicato per ogni pagina richiederebbe asset nuovi.)

### 5c. Cache headers
Verificare `public/web.config` per assicurare `Cache-Control: public, max-age=31536000, immutable` su `/assets/*`. Modifica solo se mancante.

## Note tecniche

- Tutte le conversioni immagine via `sharp` (script one-shot, file sostituiti in `src/assets/`).
- Gli import nei componenti verranno aggiornati di conseguenza (`.jpg` → `.webp`).
- Nessuna modifica al design o ai contenuti testuali esistenti, solo aggiunte (FAQ) e ottimizzazioni.
- Le `width`/`height` derivano dalle dimensioni reali dei file (lette con `sharp`).

## Domande aperte

1. Per la **FAQ in Servizi**: scrivo io le 5 domande/risposte con tono coerente al sito (consigliato), oppure preferisci fornirmele tu?
2. Confermi che posso **sostituire i .jpg** in `src/assets/` con la versione `.webp` (cancellando gli originali), come già fatto in passato per gli hero?
