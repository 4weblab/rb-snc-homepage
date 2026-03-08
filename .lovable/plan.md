

## Piano: Link bottone "Scopri l'azienda" a /chi-siamo

**File:** `src/components/CompanySection.tsx` (riga 18-20)

Wrappare il `Button` in un tag `<a>` con `href="/chi-siamo"`, oppure usare il componente `Link` di react-router-dom per navigazione client-side.

Approccio: importare `Link` da `react-router-dom` e sostituire `<Button>` con `<Button asChild><Link to="/chi-siamo">Scopri l'azienda</Link></Button>`.

