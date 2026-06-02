## Obiettivo

Rendere il sito pienamente "LLM crawler ready" sapendo che è una SPA Vite (no SSR): i bot come GPTBot, ClaudeBot, PerplexityBot, CCBot non eseguono JS, quindi vedono solo `index.html` + `/llms.txt` + `/sitemap.xml`. Soluzione: usare `llms.txt` come "fonte di verità testuale" dei contenuti del sito, e allineare tutto sulle 5 pagine definitive: **Home, Servizi, Realizzazioni, Certificazioni, Contatti**.

## Stato attuale

- Rotte in `src/App.tsx`: già combaciano (Home, Servizi, Realizzazioni, Certificazioni, Contatti + Privacy/Cookie).
- `public/sitemap.xml`: già combacia.
- `public/llms.txt`: già combacia ma è solo un indice di link.
- `public/robots.txt`: aperto a tutti, sitemap dichiarato.
- Memoria progetto: cita "Chi siamo. No Settori/Realizzazioni" — è obsoleta rispetto alla scelta attuale.

## Cambi previsti

### 1. `public/llms.txt` — arricchire con i contenuti

Espandere il file con sezioni testuali per ogni pagina, leggendo i contenuti reali dai componenti React (`HeroSection`, `ServicesSection`, `ProjectsSection`, `Servizi.tsx`, `Realizzazioni.tsx`, `Certificazioni.tsx`, `Contatti.tsx`, ecc.). Struttura aggiornata, sempre conforme alla spec llmstxt.org:

````text
# R.B. s.n.c. di Bertoluzzo e Ragazzo

> Bonifica amianto, smaltimento eternit e rifacimento coperture industriali e civili in Veneto. Sede a Cittadella (PD).

[Paragrafi descrittivi: chi è l'azienda, dove opera, normative di riferimento, target B2B, contatti rapidi Claudio/Orlando con numeri.]

## Servizi
- [Bonifica amianto](/servizi#bonifica-amianto): descrizione + normativa
- [Smaltimento eternit](/servizi#smaltimento): descrizione
- [Rifacimento coperture industriali](/servizi#coperture-industriali): descrizione
- [Sovracoperture e pannelli coibentati](/servizi#sovracoperture): descrizione
- [Rifacimento tetti civili](/servizi#tetti-civili): descrizione

## Realizzazioni
- [Realizzazioni](/realizzazioni): casi reali di cantieri industriali e civili in Veneto, con sintesi degli interventi.

## Certificazioni e normativa
- [Certificazioni](/certificazioni): albo gestori ambientali, abilitazioni amianto (D.M. 6/9/1994), L. 257/92, DPI, formazione operatori, smaltimento certificato.

## Contatti
- Telefono: Claudio 335 6010096, Orlando 329 4516884
- Email / PEC: [valori reali presi da Contatti.tsx]
- Sede: Cittadella (PD), area operativa Veneto
- [Pagina Contatti](/contatti)

## Pages
- [Home](/)
- [Servizi](/servizi)
- [Realizzazioni](/realizzazioni)
- [Certificazioni](/certificazioni)
- [Contatti](/contatti)

## Optional
- [Privacy Policy](/privacy-policy)
- [Cookie Policy](/cookie-policy)
````

I testi delle sezioni saranno estratti 1:1 dai componenti del sito (niente invenzioni). Per ogni servizio: nome, descrizione breve, eventuale normativa citata sul sito.

### 2. `public/sitemap.xml` — aggiornare `lastmod`

Aggiornare la data `<lastmod>` di tutte le 5 URL a oggi (2026-06-02). Struttura e priorità invariate.

### 3. `public/robots.txt` — esplicitare i bot LLM (opzionale ma consigliato)

Aggiungere blocchi espliciti `Allow: /` per `GPTBot`, `ClaudeBot`, `PerplexityBot`, `CCBot`, `Google-Extended` (training Google AI), `Applebot-Extended`. Già aperti via `User-agent: *`, ma essere espliciti riduce ambiguità e segnala consenso a indicizzazione AI.

### 4. Memoria progetto — correggere

Aggiornare `mem://index.md` (riga Core) sostituendo:
- `Pages: Home, Chi siamo, Servizi, Certificazioni, Contatti. No Settori/Realizzazioni.`

con:
- `Pages: Home, Servizi, Realizzazioni, Certificazioni, Contatti.`

E aggiornare di conseguenza `mem://navigation/main-menu` se contiene la vecchia lista.

## Fuori scope

- Nessuna modifica a rotte React, componenti, design o testi del sito.
- Nessuna migrazione a SSR (richiederebbe cambio stack).
- Nessuna nuova pagina, nessuna immagine OG nuova.
