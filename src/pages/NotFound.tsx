import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Pagina non trovata (404) | R.B. s.n.c.</title>
        <meta name="robots" content="noindex, follow" />
        {/* Indica a prerender.io / Netlify Prerendering di servire HTTP 404
            invece di 200 per le rotte SPA non risolte da React Router. */}
        <meta name="prerender-status-code" content="404" />
        <meta name="description" content="La pagina che stai cercando non esiste o è stata spostata. Torna alla home di R.B. s.n.c." />
        <link rel="canonical" href="https://rb-snc.it/404" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Pagina non trovata</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Torna alla home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
