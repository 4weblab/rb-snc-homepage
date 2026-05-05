## Obiettivo

Rinominare il brand visibile da "RB snc" / "RB SNC" a **"R.B. s.n.c."** ovunque compaia nei contenuti del sito (testi, titoli, meta description, alt immagini, dati strutturati JSON-LD).

## Cosa NON viene modificato

- Email: `info@rb-snc.it`, `info@pec.rb-snc.it`
- URL/dominio: `https://rb-snc.it` e tutti i `canonical`/`url` JSON-LD
- File `mem://` (memoria interna del progetto)

## File da modificare

| File | Occorrenze |
|---|---|
| `src/components/Navbar.tsx` | logo testuale |
| `src/components/Footer.tsx` | logo + copyright |
| `src/components/HeroSection.tsx` | H1 + alt immagini carosello |
| `src/components/CompanySection.tsx` | testo paragrafo |
| `src/components/StrengthsSection.tsx` | titolo "Perché scegliere…" |
| `src/lib/business.ts` | commento, `legalName`, `name` |
| `src/pages/Index.tsx` | `<title>` + meta description |
| `src/pages/Servizi.tsx` | title, description, JSON-LD |
| `src/pages/Certificazioni.tsx` | title, description, JSON-LD, testi pagina |
| `src/pages/Contatti.tsx` | title, description, JSON-LD, alt, testi pagina |
| `src/pages/Realizzazioni.tsx` | title, description, JSON-LD, alt, testi pagina |
| `src/pages/PrivacyPolicy.tsx` | titolare + meta + testi |
| `src/pages/CookiePolicy.tsx` | title + meta |
| `src/pages/NotFound.tsx` | title |

## Approccio tecnico

Sostituzione testuale mirata (case-insensitive sulle varianti `RB SNC` e `RB snc`) limitata ai contenuti visibili e SEO. Le stringhe contenenti `rb-snc.it` (email/URL) restano intatte perché il pattern è diverso (con trattino e dominio).

Verifica finale con `grep` per assicurarsi che resti solo nelle email/URL.
