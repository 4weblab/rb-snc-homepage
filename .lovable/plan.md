# Validazione consenso privacy nel form contatti

## Obiettivo
Il form della pagina Contatti deve inviare la richiesta **solo** se l'utente ha spuntato la checkbox di consenso privacy. In caso contrario, mostrare un errore visibile e indicare come risolverlo.

## Comportamento previsto

1. L'utente compila il form ma **non spunta** "Ho letto l'informativa privacy"
2. Al click su "Invia Richiesta":
   - L'invio viene **bloccato**
   - Compare un messaggio di errore rosso sotto la checkbox: *"Per inviare la richiesta devi accettare l'informativa privacy spuntando la casella qui sopra."*
   - La checkbox e il suo bordo si evidenziano in rosso (accent error state)
   - La pagina scorre dolcemente alla checkbox e il focus si sposta su di essa
   - Compare anche un toast di errore (`sonner`): *"Consenso privacy mancante"*
3. Quando l'utente spunta la casella, il messaggio di errore scompare automaticamente
4. Se il consenso è dato, il form procede al normale flusso di invio (attualmente solo `preventDefault`, non viene modificato)

## Modifiche tecniche

**File:** `src/pages/Contatti.tsx`

1. Aggiungere stato locale:
   - `privacyAccepted: boolean` (default `false`)
   - `privacyError: boolean` (default `false`)
2. Collegare la `Checkbox` (Radix) a `privacyAccepted` tramite `checked` e `onCheckedChange`. Quando viene spuntata, resettare `privacyError` a `false`.
3. Rimuovere l'attributo `required` dalla Checkbox Radix (non affidabile per validazione HTML5) e gestire la validazione manualmente in `handleSubmit`.
4. In `handleSubmit`:
   - Se `!privacyAccepted` → `e.preventDefault()`, set `privacyError = true`, mostrare `toast.error("Consenso privacy mancante", { description: "Spunta la casella di accettazione per procedere." })`, e fare `scrollIntoView` + `focus()` sulla checkbox tramite `ref`.
5. Rendering condizionale del messaggio di errore sotto la checkbox (testo `text-destructive text-sm` con icona `AlertCircle`).
6. Quando `privacyError` è `true`, applicare classi condizionali alla checkbox: `border-destructive ring-2 ring-destructive/30`.

## Coerenza con il design system
- Usare il token semantico `destructive` (già definito in `index.css`) per il colore dell'errore
- Toast tramite `sonner` (già configurato a livello root)
- Nessuna modifica al layout o alla tipografia esistente
