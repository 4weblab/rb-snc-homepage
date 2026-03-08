

## Piano: Rifiniture visive homepage

### 1. Sezione Realizzazioni — Uniformazione immagini
**File:** `src/components/ProjectsSection.tsx`

Aggiungere un overlay leggero uniforme sopra ogni immagine per normalizzare luminosità e contrasto:
- Un `div` con `absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10` sopra ogni `<img>`
- Aggiungere `brightness-[0.95] contrast-[1.02] saturate-[0.9]` alle immagini tramite classi CSS filter per uniformare i toni

Questo rende le foto coerenti senza alterarle in modo evidente.

### 2. Card Servizi — Miglioramento premium
**File:** `src/components/ServicesSection.tsx`

Aggiornare le classi delle card servizi:
- Shadow base più morbida e stratificata: `shadow-[0_2px_16px_-4px_rgba(31,58,95,0.08),0_4px_32px_-8px_rgba(31,58,95,0.06)]`
- Shadow hover più profonda: `hover:shadow-[0_8px_40px_-8px_rgba(31,58,95,0.15),0_4px_20px_-4px_rgba(31,58,95,0.1)]`
- Mantenere `hover:-translate-y-1` e `transition-all duration-300` già presenti

### 3. Sezione Marchi — Riduzione altezza
**File:** `src/components/BrandsSection.tsx`

- Ridurre padding sezione da `py-16` a `py-10`
- Ridurre margine titolo da `mb-10` a `mb-6`
- Ridurre altezza elementi brand da `h-16 md:h-20` a `h-12 md:h-14`

### File coinvolti
- `src/components/ProjectsSection.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/BrandsSection.tsx`

