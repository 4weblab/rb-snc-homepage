

## Piano: Aggiornamento sezione Servizi (come da immagine)

Allineo la sezione Servizi al mockup fornito: 3 card di altezza uguale in griglia 3 colonne, ognuna con immagine tematica di sfondo, badge icona bianco sovrapposto, sottolineatura ambra sotto il titolo. Sotto, una card "trust" separata con 3 colonne e divisori.

### Modifiche al file `src/components/ServicesSection.tsx`

**Layout cards (3 colonne uguali, non più 1+2):**
- Griglia `grid-cols-1 md:grid-cols-3 gap-6` con altezza uniforme.
- Ogni card: `rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-xl hover:-translate-y-1 transition`.

**Struttura di ogni card:**
1. **Top visual** (h ~180px): immagine di sfondo tematica + badge icona bianco arrotondato (`w-14 h-14 rounded-xl bg-white shadow`) posizionato in basso-sinistra che sborda leggermente sull'immagine. Per la card 1 (amianto) viene aggiunto un overlay navy scuro sull'immagine + il badge "★ Servizio principale" ambra in alto-sinistra.
2. **Body** (`p-6 md:p-8`): titolo `font-heading font-bold text-2xl`, breve linea di accento ambra (`w-12 h-1 bg-accent rounded-full my-4`), descrizione `text-muted-foreground`.
3. **Footer link**: "Scopri di più →" in ambra (card 1) o primary (card 2 e 3).

**Card 1 — Bonifica amianto (evidenziata):**
- Sfondo navy scuro (`bg-primary`) sotto l'immagine con overlay scuro per contrasto, testo bianco, descrizione `text-primary-foreground/85`, link "Scopri di più" ambra.

**Card 2 e 3:**
- Sfondo bianco (`bg-card`), testo scuro standard.

**Sezione "trust strip" (nuova, sotto le card):**
- Container `mt-8 rounded-2xl bg-card border shadow-sm p-6 md:p-8`.
- Griglia 3 colonne con `divide-x divide-border` su desktop.
- Per ogni voce: icona circolare `w-12 h-12 rounded-full bg-muted` a sinistra + testo a destra (titolo bold + descrizione muted).
- Voci:
  - **Interventi rapidi** (icona `Timer`) — "Siamo organizzati per intervenire in tempi brevi."
  - **Esperienza consolidata** (icona `Award`) — "Oltre 20 anni di esperienza nel settore delle coperture e della bonifica amianto."
  - **Gestione diretta** (icona `Users`) — "Lavori gestiti direttamente dal nostro team, senza intermediari."

### Asset immagini (3 nuove)

Genero e salvo in `src/assets/`:
- `service-amianto.jpg` — operatore in tuta protettiva bianca che rimuove lastre di eternit.
- `service-coperture-industriali.jpg` — tetto industriale metallico grigio in prospettiva.
- `service-tetto-civile.jpg` — tetto in tegole di abitazione privata con cielo azzurro.

Importate come moduli ES6 nel componente.

### Icone Lucide
`ShieldCheck`, `Factory`, `Home`, `Star`, `ArrowRight` (già usate) + nuove: `Timer`, `Award`, `Users` per la trust strip.

### Vincoli rispettati
- 3 servizi (nessun secondario aggiunto).
- Link cards invariati su `/servizi`.
- Palette esistente (Navy primario, Amber accent).
- Font headings `font-heading` (Space Grotesk).
- Responsive: mobile 1 colonna, desktop 3 colonne.

