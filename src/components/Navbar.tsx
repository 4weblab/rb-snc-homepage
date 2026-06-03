import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoRb from "@/assets/logo-rb.png.asset.json";

const navLinks = [
{ label: "Home", href: "/" },
{ label: "Servizi", href: "/servizi" },
{ label: "Realizzazioni", href: "/realizzazioni" },
{ label: "Certificazioni", href: "/certificazioni" },
{ label: "Contatti", href: "/contatti" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-heading text-xl md:text-2xl font-bold tracking-tight text-primary leading-tight">
          <img
            src={logoRb.url}
            alt="logo azienda RB snc"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span>R.B. s.n.c. <span className="text-foreground font-normal text-sm md:text-base">di Bertoluzzo e Ragazzo</span></span>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
          <li key={link.href}>
              <Link
              to={link.href}
              className="px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted">
              
                {link.label}
              </Link>
            </li>
          )}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="sm">
            <Link to="/contatti">Contattaci</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu">
          
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="lg:hidden bg-card border-b border-border">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) =>
          <li key={link.href}>
                <Link
              to={link.href}
              className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              onClick={() => setOpen(false)}>
              
                  {link.label}
                </Link>
              </li>
          )}
            <li className="mt-2">
              <Button asChild variant="hero" size="sm" className="w-full">
                <Link to="/contatti">Contattaci</Link>
              </Button>
            </li>
          </ul>
        </div>
      }
    </nav>);

};

export default Navbar;