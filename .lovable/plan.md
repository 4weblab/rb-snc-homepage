## Obiettivo
Rendere funzionante il form della pagina `/contatti` inviando le richieste a Web3Forms via AJAX (stesso pattern collaudato sul progetto 4 Web Lab), mantenendo invariata la UI attuale.

## Cosa serve da te
- La **access key Web3Forms** dedicata a R.B. s.n.c. (la incollerai in chat). È una publishable key, va direttamente nel codice del componente.

## Modifiche
Unico file toccato: `src/pages/Contatti.tsx` (nessun nuovo componente, nessuna dipendenza nuova).

1. **Stato gestione invio**: aggiunta `status` (`idle | sending | success | error`) e messaggio; il bottone si disabilita durante l'invio e mostra "Invio...".
2. **Validazione**: nome, telefono e privacy obbligatori; email se compilata deve essere valida. Errori inline sotto i campi + scroll al primo errore.
3. **Anti-spam (come 4 Web Lab)**:
   - 2 honeypot nascosti (`website`, `fax`) in `sr-only`.
   - Timing check: rifiuto invii sotto i 3 secondi dal mount.
   - Rate-limit lato client 60s via `localStorage` (`rb_w3f_last_submit_ts`).
4. **Invio AJAX** a `https://api.web3forms.com/submit` con `FormData` contenente:
   - `access_key` (la tua), `subject` "Nuova richiesta dal sito rb-snc.it", `from_name` "R.B. s.n.c. — Sito",
   - campi del form: `nome`, `telefono`, `email`, `zona`, `tipo`, `messaggio`.
5. **Feedback utente**: toast `sonner` su successo/errore + messaggio inline `role="status" aria-live="polite"`. Su successo il form viene resettato e la checkbox privacy riazzerata. Rimossa la riga "Il form sarà attivato a breve".
6. **Cookie policy**: niente da aggiornare per ora (segnalo se vuoi che aggiunga una nota su Web3Forms + chiave `rb_w3f_last_submit_ts` come tecnico/localStorage, sul modello di 4 Web Lab).

## Cosa NON cambia
- Layout, copy, colori, sezioni "Contatti diretti" e "Cosa succede dopo la richiesta".
- Schema JSON-LD (`ContactPage` + `BreadcrumbList`).
- Navbar, Footer, altre pagine.

## Verifica post-build
- Build pulita.
- Submit reale: controllo network 200 + `success:true` dalla risposta Web3Forms.
- Honeypot, rate-limit e timing testabili da console.
