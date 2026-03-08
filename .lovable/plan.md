

## Plan: Create Internal Pages with SEO

### What to build
6 minimal internal pages, each with only an H1, Helmet SEO tags (title, meta description, canonical), Navbar, and Footer. Then register all routes in `App.tsx`.

### Files to create

1. **`src/pages/ChiSiamo.tsx`** — H1: "Chi siamo", SEO as specified
2. **`src/pages/Servizi.tsx`** — H1: "Servizi"
3. **`src/pages/Settori.tsx`** — H1: "Settori"
4. **`src/pages/Realizzazioni.tsx`** — H1: "Realizzazioni"
5. **`src/pages/Certificazioni.tsx`** — H1: "Certificazioni"
6. **`src/pages/Contatti.tsx`** — H1: "Contatti"

Each page follows this template:
```tsx
<Helmet>
  <title>Title | RB SNC</title>
  <meta name="description" content="..." />
  <link rel="canonical" href="https://rb-snc.it/path" />
</Helmet>
<Navbar />
<main className="pt-16 container mx-auto px-4 py-12">
  <h1>Page Name</h1>
</main>
<Footer />
```

### File to edit

**`src/App.tsx`** — Add 6 `<Route>` entries mapping each path to its page component. No changes to the Index route or anything else.

