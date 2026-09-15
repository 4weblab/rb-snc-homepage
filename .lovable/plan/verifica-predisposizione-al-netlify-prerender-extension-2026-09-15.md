# Verifica predisposizione al Netlify Prerender Extension

L'utente attiverà l'estensione Netlify Prerendering (prerender.io) dal pannello Netlify. Il codice deve solo essere verificato: nessuna funzionalità da aggiungere.

## Stato attuale (già in codice)
- `src/main.tsx`: flag globale `window.prerenderReady` impostato a `true` dopo il mount di React e Helmet (si applica a tutte le rotte).
- `src/pages/NotFound.tsx`: meta `prerender-status-code: 404` per far servire un vero HTTP 404 ai bot.
- Tutti i title/description/canonical/JSON-LD sono iniettati via `react-helmet-async`, quindi il rendering lato bot li includerà.

## Passaggi del piano
1. **Verifica segnali** — ricontrollare `src/main.tsx` e `src/pages/NotFound.tsx`: il flag `prerenderReady` deve partire solo dopo che Helmet ha scritto i tag nel `<head>` (timing attuale: `requestAnimationFrame` + 50ms; confermare che sia sufficiente o spostare il segnale su un evento più deterministico).
2. **Verifica assenza di conflitti** — controllare che nessun componente modifichi il DOM fuori da `#root` (portali, script inline) che potrebbe generare mismatch nel rendering bot.
3. **Checklist attivazione per l'utente** (istruzioni in chat, non codice):
   - Attivare "Prerendering" in Netlify → Site configuration → Plugins.
   - Dopo il deploy, testare con User-Agent da bot (es. `curl -A "facebookexternalhit" https://rb-snc.it/servizi`) e verificare che l'HTML restituito contenga title, description e JSON-LD della pagina.
   - Verificare che `/pagina-inesistente` risponda 404 per i bot.
4. **Nessuna modifica di build** — `netlify.toml`, `_redirects` e `_headers` restano invariati.

## Esito atteso
Sito SPA che, con l'estensione attiva, serve HTML completamente renderizzato ai crawler senza JavaScript, mantenendo invariato il comportamento per gli utenti.
