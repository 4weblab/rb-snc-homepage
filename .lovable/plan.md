## Obiettivo

Migliorare l'**internal linking** del sito per favorire l'indicizzazione Google:
1. eliminare i link rotti (che disperdono PageRank e generano 404),
2. trasformare gli anchor `<a href>` interni in `<Link>` di React Router (no full reload, navigazione SPA pulita),
3. arricchire le anchor text con parole chiave reali (Google le usa come segnale di pertinenza),
4. aggiungere link contestuali "naturali" nelle sezioni dove oggi mancano, per distribuire link juice in modo equilibrato tra Home → Servizi → Realizzazioni → Certificazioni → Contatti.

Tutti i link sono **inseriti nel testo o in elementi visivi già esistenti**, non aggiungo "barre di link" artificiali. L'obiettivo è che restino naturali per il visitatore.

---

## Problemi rilevati

### 1. Link rotti (priorità massima)

| File | Link | Problema |
|---|---|---|
| `src/components/CompanySection.tsx` | `<Link to="/chi-siamo">Scopri l'azienda</Link>` | La rotta `/chi-siamo` **non esiste** nel router → 404 |
| `src/components/SectorsSection.tsx` | 3 × `<Link to="/settori">` (desktop sx, desktop dx, mobile) | La rotta `/settori` **non esiste** → 404 |

### 2. `<a href>` interni che dovrebbero essere `<Link>`

| File | Elemento |
|---|---|
| `src/components/Navbar.tsx` | logo + 5 voci menu desktop + 5 voci menu mobile |
| `src/components/ServicesSection.tsx` | 3 schede servizio (`<a href="/servizi">`) |
| `src/components/ProblemsSection.tsx` | CTA finale (`<a href="/contatti">`) |
| `src/pages/Contatti.tsx` | CTA hero (`<a href="#form">` — questo resta href perché è anchor di pagina) |

I `<a href>` interni causano un **full page reload**, perdono lo stato React e impediscono al prerender/idratazione di mantenere la SPA fluida. Per Google sono comunque link validi, ma la conversione a `<Link>` migliora UX e Core Web Vitals (no LCP ricalcolato).

### 3. Anchor text deboli o duplicate

- `ServicesSection.tsx`: 3 cards puntano tutte a `/servizi` con label visivo "Scopri di più" (identico) → Google vede 3 link al servizio con anchor "Scopri di più" invece che con le keyword. Le farò puntare alle **ancore specifiche della pagina Servizi** (`#bonifica-amianto`, `#coperture-industriali`, `#tetti-civili`) e darò un `aria-label` o testo nascosto descrittivo ("Bonifica amianto e smaltimento eternit", ecc.).
- `CompanySection`: "Scopri l'azienda" → trasformerò in link contestuale verso `/servizi` o `/certificazioni` (con anchor descrittiva).
- `CTASection.tsx`: "Contattaci" generico → resta come CTA, ma aggiungo nel testo della sezione un secondo link descrittivo ai servizi.

### 4. Link contestuali mancanti (opportunità SEO)

- **`HeroSection`**: il sottotitolo nomina "bonifica amianto", "rifacimento coperture", "Cittadella, Padova" senza nessun link. Inserisco 1-2 link inline nel paragrafo verso `/servizi` e (eventualmente) `/realizzazioni`.
- **`ProblemsSection`**: i 3 box (rischio amianto / danni coperture / intervento tardivo) sono perfetti per linkare in modo tematico verso `/servizi#bonifica-amianto`, `/servizi#coperture-industriali`, `/certificazioni`. Aggiungo un link "leggi di più" o trasformo l'intera card in cliccabile.
- **`StrengthsSection`**: oggi zero link. Aggiungo un piccolo CTA testuale finale che linka `/certificazioni` ("lavori a norma → vedi normativa e documentazione") e `/realizzazioni` ("esperienza sul campo → vedi interventi realizzati").
- **`CompanySection`**: oltre a sostituire il link rotto, aggiungo nei due paragrafi descrittivi un link inline a `/servizi` (parole "bonifica amianto e coperture") e uno a `/contatti` ("interventi senza intermediari").
- **`SectorsSection`**: dato che `/settori` non esiste, faccio puntare ogni card al servizio più pertinente (Industria/Capannoni → `/servizi#coperture-industriali`, Abitazioni/Condomini → `/servizi#tetti-civili`, Strutture commerciali/Direzionali → `/servizi`). Anchor text contestuali.

### 5. Footer: blocco "Servizi" granulare

Aggiungo nel footer una colonna "Servizi" con 3 link diretti alle ancore di `/servizi`:
- Bonifica amianto e smaltimento eternit → `/servizi#bonifica-amianto`
- Rifacimento coperture industriali → `/servizi#coperture-industriali`
- Rifacimento tetti civili → `/servizi#tetti-civili`

Questo è un pattern SEO standard: il footer è presente in ogni pagina e crea link siteribbon-wide con anchor text ricche di keyword verso le sezioni profonde del sito.

### 6. Sitemap

`public/sitemap.xml` è già corretto (5 URL principali, esclude privacy/cookie come da `noindex`). Non lo modifico.

---

## Mappa interventi per file

| File | Cosa cambio |
|---|---|
| `src/components/Navbar.tsx` | Logo + voci menu (desktop + mobile) → `<Link>` invece di `<a href>` |
| `src/components/HeroSection.tsx` | Inserisco 2 link inline nel paragrafo hero (`/servizi`, `/realizzazioni`) con anchor descrittive |
| `src/components/ServicesSection.tsx` | 3 schede: `<a href="/servizi">` → `<Link to="/servizi#bonifica-amianto">` etc. + label "Vai al servizio: bonifica amianto" come `aria-label` per anchor text accessibile |
| `src/components/ProblemsSection.tsx` | CTA `<a>` → `<Link>`. Aggiungo a ogni card un link "Approfondisci" verso la sezione pertinente (`/servizi#bonifica-amianto`, `/servizi#coperture-industriali`, `/certificazioni`) |
| `src/components/CompanySection.tsx` | Rimuovo `/chi-siamo` (rotto). Sostituisco con `<Link to="/servizi">Scopri i nostri servizi</Link>`. Aggiungo 2 link inline nei paragrafi verso `/servizi` e `/certificazioni` |
| `src/components/SectorsSection.tsx` | Sostituisco i 3 link a `/settori` con link al servizio pertinente per ogni settore (mappatura: Industria → `/servizi#coperture-industriali`, Capannoni → `/servizi#coperture-industriali`, Strutture commerciali → `/servizi`, Abitazioni/Condomini → `/servizi#tetti-civili`, Edifici direzionali → `/servizi`) |
| `src/components/StrengthsSection.tsx` | Aggiungo sotto la griglia un piccolo paragrafo con 2 link inline: "lavori a norma" → `/certificazioni`, "esperienza sul campo" → `/realizzazioni` |
| `src/components/CTASection.tsx` | Mantengo il CTA principale a `/contatti`. Aggiungo nel paragrafo descrittivo un link inline a `/servizi` ("preventivo personalizzato sui nostri servizi") |
| `src/components/Footer.tsx` | Aggiungo una colonna "Servizi" con 3 link granulari alle ancore di `/servizi` (mantengo la colonna "Pagine" esistente). Layout grid passa da 3 a 4 colonne su desktop |
| `src/pages/Contatti.tsx` | Verifica: i 3 utilityLinks sono già `<a href>` — li converto in `<Link>` |

---

## Esempio concreto del pattern di anchor text

**Prima (anchor generico):**
```tsx
<a href="/servizi">Scopri di più</a>
```

**Dopo (anchor descrittivo + link a sezione specifica):**
```tsx
<Link
  to="/servizi#bonifica-amianto"
  aria-label="Vai al servizio di bonifica amianto e smaltimento eternit"
>
  Scopri il servizio di bonifica amianto
</Link>
```

Per il visitatore il testo cliccabile può restare sintetico ("Scopri di più"), ma uso `aria-label` o un wrapper di testo nascosto (`sr-only`) per fornire a Google un'anchor text ricca di keyword. In altri punti, dove il design lo permette, uso direttamente l'anchor descrittiva visibile.

---

## Cosa NON cambio

- Nessuna modifica al routing (`App.tsx`) — non creo pagine fittizie tipo `/chi-siamo` o `/settori` solo per coprire link rotti, perché creerebbero pagine sottili penalizzanti.
- Nessuna modifica a Privacy/Cookie Policy (sono `noindex`, non rilevanti per il link juice).
- Nessuna modifica al `web.config`, `vite.config.ts`, prerender (già configurato nel passo precedente).
- Nessun cambio grafico significativo: i nuovi link inline usano lo stile già esistente (`text-primary font-semibold underline-offset-4 hover:underline`) già applicato in Servizi/Certificazioni/Realizzazioni.

---

## Risultato atteso

- **0 link rotti** sul sito (oggi: 4 link rotti, tutti su componenti della home).
- **Distribuzione link juice migliorata**: ogni pagina del menu riceve link contestuali da almeno 2-3 punti diversi della home + footer.
- **Anchor text varia e tematica**: Google riceve segnali chiari su cosa ogni pagina tratti (bonifica amianto, coperture industriali, tetti civili, normativa, sopralluogo).
- **Navigazione SPA coerente**: tutti i link interni passano per React Router → niente full reload, idratazione preservata, performance migliore.
- **Deep linking alle ancore**: Google indicizza meglio le sotto-sezioni di `/servizi` (`#bonifica-amianto`, `#coperture-industriali`, `#tetti-civili`) come "site links" potenziali nelle SERP.

Tutto resta compatibile con il prerender configurato in precedenza: i nuovi `<Link>` finiscono come `<a href="/...">` nell'HTML statico generato, perfettamente leggibili dai crawler.
