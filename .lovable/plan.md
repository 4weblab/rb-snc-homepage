

## Fix: Immagine hover mancante per "Rifacimento tetti"

### Problema
L'URL Unsplash attuale (`photo-1632863790675-1e4da72c5f97`) restituisce un errore 404. L'immagine non esiste più.

### Soluzione
Sostituire l'URL alla riga 23 di `src/components/ServicesSection.tsx` con un'immagine Unsplash valida e coerente (cantiere su tetto / rifacimento copertura), ad esempio:

`https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&fit=crop`

Modifica di una sola riga, nessun impatto su layout o altri componenti.

