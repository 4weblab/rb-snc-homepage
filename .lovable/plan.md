## Differenziazione "Area servita" per progetto

### Obiettivo
Aggiornare il campo `Area servita` nei tre box "Dettagli intervento" affinché ogni progetto mostri una località diversa.

### Valori da applicare
```
Progetto 1 — Bonifica amianto su copertura industriale:     "Veneto"
Progetto 2 — Rifacimento copertura industriale Delmachem: "Bassano del Grappa ( Vicenza )"
Progetto 3 — Rifacimento tetto civile:                      "Mestre ( Venezia )"
```

### File coinvolto
- `src/pages/Realizzazioni.tsx` — array `projects[0..2].details` (chiave `MapPin`).

### Azione
Sostituire il valore statico condiviso nelle tre voci `details` con i rispettivi valori sopra indicati.