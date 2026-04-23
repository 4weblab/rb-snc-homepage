import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = [
{ label: "Home", href: "/" },
{ label: "Chi siamo", href: "/chi-siamo" },
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
            <a href="/" className="font-heading text-xl font-bold text-background leading-tight">
              RB snc <span className="text-primary-foreground/60 font-normal text-sm">di Bertoluzzo e Ragazzo</span>
            </a>
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
                  <a
                  href={link.href}
                  className="text-sm text-background/60 hover:text-background transition-colors">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-background/40 shrink-0" />
                <span className="text-background/60">Via Esempio 123, 20100 Milano (MI)</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-background/40 shrink-0" />
                <a href="tel:+390212345678" className="text-background/60 hover:text-background transition-colors">
                  +39 02 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-background/40 shrink-0" />
                <a href="mailto:info@rb-snc.it" className="text-background/60 hover:text-background transition-colors">
                  info@4weblab.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-xs text-background/40">
          © {new Date().getFullYear()} RB SNC di Bertoluzzo e Ragazzo — Tutti i diritti riservati. P.IVA 00000000000
        </div>
      </div>
    </footer>);

};

export default Footer;