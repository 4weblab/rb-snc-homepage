Sono in plan mode quindi non posso ancora modificare i file. Ecco cosa farò appena approvi:

## Obiettivo
Allineare le dimensioni reali dell'OG image a quelle dichiarate nei meta tag (1200×630), così Facebook/LinkedIn/Twitter mostrano l'anteprima senza crop.

## Passi
1. Ridimensionare `public/og-image.webp` da 1731×909 a esattamente 1200×630 (stesso aspect ratio 1.9:1, nessun crop necessario, solo downscale) usando ImageMagick con qualità WebP ~85.
2. Verificare le nuove dimensioni con `identify` e controllare il peso del file (atteso < 200 KB).
3. Confermare che `index.html` continui a referenziare correttamente `https://rb-snc.it/og-image.webp` con `og:image:width=1200` e `og:image:height=630` (già a posto, nessuna modifica al codice prevista).

## Note tecniche
- Solo `public/og-image.webp` viene sostituito; nessuna modifica a componenti React o meta tag.
- Dopo il prossimo deploy, validabile con il Facebook Sharing Debugger / LinkedIn Post Inspector.
