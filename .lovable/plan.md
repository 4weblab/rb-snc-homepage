

## Piano: Sezione "Marchi e materiali" con scorrimento infinito

### Nuovo file
**`src/components/BrandsSection.tsx`** — Componente con fascia orizzontale a sfondo scuro e loghi scorrevoli.

### Contenuto
- Titolo centrato: "Collaboriamo con soluzioni e materiali di qualità"
- 12 loghi placeholder (Mapei, Marcegaglia, Polyglass, Landini, Kerakoll, Fakro, Wierer, Copernit, Velux, Unimetal, Rheinzink, Alubel)
- Loghi renderizzati come testo stilizzato in assenza di file SVG reali, dentro contenitori uniformi

### Scorrimento infinito
- CSS-only marquee con `@keyframes scroll` che trasla l'intera riga da `0` a `-50%`
- I loghi vengono duplicati (array ripetuto 2x) per creare loop continuo senza interruzioni
- `animation: scroll 30s linear infinite` — lento ed elegante
- No frecce, no pulsanti, no indicatori

### Stile
- Sfondo: `bg-[hsl(215,20%,12%)]` (antracite scuro coerente con navy del design system)
- Loghi: testo bianco/grigio chiaro, `opacity-60`, `hover:opacity-100` con transizione
- Filtro `grayscale` se si useranno immagini in futuro
- Padding verticale generoso (`py-16`)

### Responsive
- Desktop: loghi più grandi, più visibili contemporaneamente
- Mobile: loghi ridotti, scorrimento mantenuto

### Modifica a `src/pages/Index.tsx`
- Import `BrandsSection`
- Inserirlo tra `<CompanySection />` e `<SectorsSection />`

### Keyframes
Aggiungere `@keyframes scroll` direttamente nel componente via `style` tag o inline, per non toccare file globali.

### Nessuna modifica a
Hero, navbar, servizi, settori, realizzazioni, footer, palette, font.

