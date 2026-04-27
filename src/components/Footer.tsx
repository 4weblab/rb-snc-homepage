import { Phone, Mail, MapPin, Smartphone, FileText, Hash } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
{ label: "Home", href: "/" },
{ label: "Realizzazioni", href: "/realizzazioni" },
{ label: "Servizi", href: "/servizi" },
{ label: "Certificazioni", href: "/certificazioni" },
{ label: "Contatti", href: "/contatti" }];


const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-xl font-bold text-background leading-tight">
              RB snc <span className="text-primary-foreground/60 font-normal text-sm">di Bertoluzzo e Ragazzo</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Coperture industriali, bonifica amianto e manutenzione tetti per il settore industriale e commerciale.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Pagine</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) =>
              <li key={link.href}>
                  <Link
                  to={link.href}
                  className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contatti</h4>
            <p className="text-sm text-background font-medium mb-4">
              R.B. SNC di Bertoluzzo &amp; Ragazzo
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-background/40 shrink-0" />
                <div className="text-background/60 leading-relaxed">
                  <span className="block text-background/80 text-xs uppercase tracking-wide font-semibold mb-0.5">
                    Sede legale
                  </span>
                  Via Umberto I°, 54<br />
                  35010 Curtarolo (PD)
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-background/40 shrink-0" />
                <div className="text-background/60 leading-relaxed">
                  <span className="block text-background/80 text-xs uppercase tracking-wide font-semibold mb-0.5">
                    Sede operativa
                  </span>
                  Via Sansughe 6<br />
                  35013 Cittadella (PD)
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-background/40 shrink-0" />
                <a href="tel:+390497382238" className="text-background/60 hover:text-background transition-colors">
                  049 7382238
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Smartphone className="w-4 h-4 text-background/40 shrink-0" />
                <a href="tel:+393356010096" className="text-background/60 hover:text-background transition-colors">
                  335 6010096
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-background/40 shrink-0" />
                <a href="mailto:info@rb-snc.it" className="text-background/60 hover:text-background transition-colors">
                  info@rb-snc.it
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-background/40 shrink-0" />
                <a href="mailto:info@pec.rb-snc.it" className="text-background/60 hover:text-background transition-colors">
                  <span className="text-background/80 text-xs uppercase tracking-wide font-semibold mr-2">PEC</span>
                  info@pec.rb-snc.it
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FileText className="w-4 h-4 text-background/40 shrink-0" />
                <span className="text-background/60">
                  <span className="text-background/80 text-xs uppercase tracking-wide font-semibold mr-2">P.IVA</span>
                  04244010288
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Hash className="w-4 h-4 text-background/40 shrink-0" />
                <span className="text-background/60">
                  <span className="text-background/80 text-xs uppercase tracking-wide font-semibold mr-2">C.F.</span>
                  04244010288
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-xs text-background/40 space-y-2">
          <p>© {new Date().getFullYear()} RB SNC di Bertoluzzo e Ragazzo — Tutti i diritti riservati. P.IVA 04244010288</p>
          <p className="flex items-center justify-center gap-3 flex-wrap">
            <Link to="/privacy-policy" className="text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <span className="text-background/30">·</span>
            <Link to="/cookie-policy" className="text-background/60 hover:text-background transition-colors">
              Cookie Policy
            </Link>
          </p>
          <p>
            Soluzione web aziendale a Padova a cura di{" "}
            <a
              href="https://4weblab.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-primary transition-colors underline-offset-2 hover:underline"
            >
              4 Web Lab | Siti web per negozi, professionisti e aziende
            </a>
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;