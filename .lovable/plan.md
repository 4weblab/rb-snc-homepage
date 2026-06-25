## Piano: Aggiornamento redirect Netlify

### Obiettivo
Integrare i redirect del vecchio sito ASP nel file `public/_redirects` del progetto, mantenendo il fallback SPA esistente.

### File coinvolto
- `public/_redirects`

### Modifica
Aggiungere in cima al file tutti i redirect ASP forniti nel file caricato (`_redirect`), lasciando in fondo la riga esistente:

```
/* /index.html 200
```

### Nota tecnica
- Il file caricato è `_redirect` (nome errato per Netlify); il file corretto nel progetto è `public/_redirects`.
- Lovable hosting non processa `_redirects`; i redirect funzioneranno solo su Netlify (dove è ospitato il sito).
- Non sarà creato alcun file `_redirect` aggiuntivo; il file caricato verrà scartato dopo l'integrazione.