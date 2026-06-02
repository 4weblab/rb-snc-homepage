## Obiettivo

Rendere il sito deployabile su un server Windows/IIS "vanilla" — senza installare il modulo URL Rewrite né altri componenti aggiuntivi — sfruttando il fatto che tutte le rotte sono già prerenderizzate come file fisici.

## Stato attuale

- Tutte le pagine reali (`/`, `/servizi`, `/realizzazioni`, `/certificazioni`, `/contatti`, `/cookie-policy`, `/privacy-policy`, `/404`) sono già prerenderizzate da `vite.config.ts` e generate come file statici (`servizi/index.html`, ecc.) + `404.html`.
- Il `web.config` attuale richiede il modulo **URL Rewrite** solo per il fallback SPA di rotte non previste.
- Nessuna rotta dinamica lato client: il router gestisce solo le pagine prerenderizzate.

Conclusione: il rewrite **non è necessario** in produzione. Possiamo ottenere lo stesso risultato usando solo funzionalità IIS native (`defaultDocument` + `httpErrors`).

## Modifiche proposte

### 1. `public/web.config` — versione "no-modules"

Rimuovere il blocco `<rewrite>` e affidarsi a:

- `<defaultDocument>` → IIS serve automaticamente `index.html` quando l'URL punta a una cartella (es. `/servizi/` → `/servizi/index.html`). Funziona nativamente, nessun modulo richiesto.
- `<httpErrors>` con `path="/404.html"` e `responseMode="File"` → qualsiasi URL inesistente restituisce la pagina 404 prerenderizzata (con status 404 corretto per SEO).
- Mantenere: `staticContent` (MIME webp/woff2/json), `customHeaders` (security), `caching`, `httpCompression`, `handlers` statici.

Conseguenze accettabili:
- Un URL tipo `/servizi` (senza slash finale) → IIS fa redirect automatico a `/servizi/` e poi serve `index.html`. OK.
- Un URL inventato tipo `/foo` → mostra `404.html` con HTTP 404. OK (anzi corretto per SEO; meglio del rewrite a `index.html` che restituiva 200).

### 2. `vite.config.ts` — nessuna modifica necessaria

Il prerender già produce la struttura corretta (`dist/servizi/index.html`, `dist/404.html`, ecc.). Confermiamo solo che tutte le rotte di `App.tsx` siano elencate in `prerenderRoutes` (già il caso).

### 3. Link interni

Verificare che i `<Link to="...">` puntino senza trailing slash (già così). Nessun intervento necessario: il client-side router gestisce comunque la navigazione SPA, e i refresh diretti vengono risolti da IIS via defaultDocument.

## Procedura di deploy risultante

```text
1. npm run build            (in locale / CI, non sul server Windows)
2. Copiare il contenuto di dist/ nella root del sito IIS
3. Verificare che web.config sia presente nella root
4. Nessun modulo IIS da installare oltre a quelli standard
```

## Dettagli tecnici

Nuovo `web.config` (struttura):

```text
<configuration>
  <system.webServer>
    <defaultDocument> index.html </defaultDocument>
    <staticContent>   MIME .webp .woff2 .json .webmanifest </staticContent>
    <httpProtocol>    security headers </httpProtocol>
    <caching>         asset hashati Vite </caching>
    <httpCompression> text/js/json/svg </httpCompression>
    <httpErrors>      404 -> /404.html (File) </httpErrors>
    <handlers>        StaticFile only </handlers>
  </system.webServer>
</configuration>
```

Rimosso: l'intero blocco `<rewrite>`.

## File da modificare

- `public/web.config` — rimuovere `<rewrite>`, aggiornare commento iniziale.

Nessun'altra modifica al codice applicativo.
