import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Handles scroll behavior on client-side route changes:
 * - If the URL has a hash (e.g. /servizi#bonifica-amianto), scroll smoothly
 *   to the element with that id.
 * - Otherwise, scroll to the top of the page on every route change.
 * Required because React Router does not handle these natively.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait one frame so the target page has rendered its sections.
      const id = hash.replace("#", "");
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      // Try immediately and again after a short delay (covers lazy content / hydration).
      requestAnimationFrame(tryScroll);
      const t = setTimeout(tryScroll, 250);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;