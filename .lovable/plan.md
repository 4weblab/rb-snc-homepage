## Inserimento logo nell'header

Aggiungere il logo caricato a sinistra della scritta "R.B. s.n.c. di Bertoluzzo e Ragazzo" nel `Navbar`, mantenendo invariata l'altezza dell'header (h-16 = 64px).

### Passi
1. Caricare l'immagine `Gemini_Generated_sfondo.png` come asset CDN tramite `lovable-assets` → `src/assets/logo-rb.png.asset.json`.
2. Modificare `src/components/Navbar.tsx`:
   - Importare il pointer JSON del logo.
   - Nel `<Link to="/">`, aggiungere un `<img>` prima del testo, dentro un wrapper `flex items-center gap-2`.
   - Dimensione logo: `h-10 w-auto` (40px) — si adatta all'header da 64px lasciando padding verticale adeguato.
   - `alt="Logo R.B. s.n.c."` per SEO/accessibilità.
3. Nessuna modifica all'altezza dell'header né ad altri file.

### Note tecniche
- L'immagine fornita ha già il testo "R.B. snc" integrato; viene comunque mantenuta la scritta testuale accanto perché contiene "di Bertoluzzo e Ragazzo" (rilevante per SEO/branding) e perché l'istruzione è "prima della scritta", non "sostituisci la scritta".
- Se il testo nel logo risultasse ridondante visivamente, si può valutare in un secondo step una variante senza testo.
