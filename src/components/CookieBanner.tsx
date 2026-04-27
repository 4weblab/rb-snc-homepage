import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "rb-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) {
        // Small delay so it doesn't pop immediately on first paint
        const t = setTimeout(() => setVisible(true), 400);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Informativa sui cookie"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="mx-auto max-w-5xl bg-card border-2 border-border rounded-2xl shadow-2xl p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex items-start gap-4 flex-1">
            <div className="hidden sm:flex shrink-0 w-11 h-11 rounded-xl bg-accent/10 ring-1 ring-accent/20 items-center justify-center">
              <Cookie className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 text-sm text-muted-foreground leading-relaxed">
              <p className="mb-1.5 text-foreground font-semibold">
                Questo sito utilizza solo cookie tecnici necessari al suo funzionamento.
              </p>
              <p>
                Non utilizziamo strumenti di tracciamento o profilazione. Se compili il form, i tuoi
                dati verranno usati solo per ricontattarti.{" "}
                <Link to="/privacy-policy" className="text-accent font-medium hover:underline">
                  Privacy Policy
                </Link>{" "}
                ·{" "}
                <Link to="/cookie-policy" className="text-accent font-medium hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:shrink-0">
            <Button
              onClick={accept}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl shadow-md hover:shadow-lg transition-all w-full md:w-auto"
            >
              Ok, ho capito
            </Button>
            <button
              onClick={accept}
              aria-label="Chiudi banner cookie"
              className="hidden md:inline-flex shrink-0 w-10 h-10 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;