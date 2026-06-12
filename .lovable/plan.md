## Problema
Il logo nell'header (Navbar) è rosso su Netlify perché il suo `src` punta a `/__l5e/assets-v1/...`, un percorso del CDN di Lovable che non esiste al di fuori dell'hosting di Lovable.

## Soluzione
1. Copiare il file `logo-rb.png` recuperato dal CDN in `public/logo-rb.png` in modo che venga servito alla root (`/logo-rb.png`).
2. Modificare `src/components/Navbar.tsx` per usare `src="/logo-rb.png"` direttamente invece di importare `@/assets/logo-rb.png.asset.json`.
3. Rimuovere (o lasciare inutilizzato) il file `src/assets/logo-rb.png.asset.json`.

## Verifica
- Build locale per assicurarsi che non ci siano errori di compilazione.
- Il logo deve apparire correttamente nella preview.