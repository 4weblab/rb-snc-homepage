# Sezione "Obblighi informativi per le erogazioni pubbliche"

Inserimento della sezione richiesta dalla normativa nella Privacy Policy, con un link diretto e discreto dal footer.

## 1. Privacy Policy (`src/pages/PrivacyPolicy.tsx`)

Aggiungere come **ottavo e ultimo blocco** della lista `sections` un nuovo elemento:

- **Icona**: `Banknote` (lucide-react), coerente con le icone già usate per le altre sezioni.
- **Titolo**: `"8. Obblighi informativi per le erogazioni pubbliche"`.
- **ID anchor**: `aiuti-di-stato` (da assegnare all'`<article>` corrispondente).
- **Contenuto**: paragrafo unico con testo richiesto e link cliccabile a `https://www.rna.gov.it/RegistroNazionaleTrasparenza/faces/pages/TrasparenzaAiuto.jspx` (apertura in nuova scheda con `target="_blank"` e `rel="noopener noreferrer"`, classe `text-accent font-semibold hover:underline break-words`).

Modifica strutturale minima: aggiungere un campo opzionale `id` agli oggetti di `sections` e propagarlo come attributo `id` sull'`<article>` nel `.map()`. Nessun nuovo wrapper o stile evidenziante: la sezione condivide esattamente lo stesso layout (card `bg-card`, `rounded-2xl`, `border-2`) delle altre.

## 2. Footer (`src/components/Footer.tsx`)

Nella riga dei link legali in fondo al footer (quella che già contiene "Privacy Policy · Cookie Policy"), aggiungere un terzo link separato dallo stesso `·`:

```
Privacy Policy · Cookie Policy · Aiuti di Stato
```

- Componente `<Link>` di react-router-dom verso `/privacy-policy#aiuti-di-stato`.
- Stesse classi degli altri due link (`text-background/60 hover:text-background transition-colors`).
- Nessuna nuova colonna, nessun bottone.

## 3. Scroll fluido all'anchor

Già gestito: il componente `src/components/ScrollToHash.tsx` (montato in `App.tsx`) intercetta l'hash della URL e chiama `el.scrollIntoView({ behavior: "smooth", block: "start" })`. Cliccando il link dal footer di qualsiasi pagina si naviga a `/privacy-policy`, l'anchor viene risolto e lo scroll fluido porta direttamente alla sezione. Nessuna modifica necessaria.

## File toccati

- `src/pages/PrivacyPolicy.tsx` — nuova sezione + supporto `id` opzionale sull'articolo.
- `src/components/Footer.tsx` — terzo link "Aiuti di Stato" nella riga dei link legali.

## Vincoli rispettati

- Nessuna modifica ad altri contenuti della Privacy Policy.
- Nessuna duplicazione (la sezione non esiste già: verificato).
- Solo informazioni fornite nel brief, nessuna aggiunta arbitraria.
- Coerenza grafica e tipografica: stessa card, stessa icona-style, stesso pattern di link `text-accent`.
