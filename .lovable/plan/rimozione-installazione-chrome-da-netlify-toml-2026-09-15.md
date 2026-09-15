# Rimozione installazione Chrome da netlify.toml

La riga `npx puppeteer browsers install chrome &&` in `netlify.toml` era necessaria solo per il prerendering con Puppeteer, che è stato rimosso dal progetto (nessun riferimento in `vite.config.ts`, `package.json` o `bun.lock`). Oggi scarica Chrome a ogni deploy inutilmente: rallenta la build e può causare guasti.

## Passaggi
1. Aggiornare `netlify.toml`: sostituire la riga di build con `command = "npm run build"`.
2. Nessun'altra modifica: `_redirects`, `_headers` e la configurazione Vite restano invariati (il segnale `window.prerenderReady` per l'estensione Netlify Prerendering resta in `main.tsx`).

## Esito atteso
Deploy Netlify più veloce e senza dipendenza da Chrome; comportamento del sito invariato, prerendering gestito dall'estensione Netlify come già predisposto.
