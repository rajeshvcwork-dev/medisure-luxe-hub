import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Clients", path: "/clients" },
  { name: "Products Detail", path: "/products" },
  { name: "Product Catalog", path: "/product-catalog" },
  { name: "Contact Us", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-premium-md"
          : "bg-transparent"
      )}
    >
      <nav className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <span className={cn(
                "font-heading font-bold text-lg transition-colors",
                isScrolled ? "text-foreground" : "text-background"
              )}>
                MEDISURE
              </span>
              <span className={cn(
                "block text-xs font-body transition-colors",
                isScrolled ? "text-muted-foreground" : "text-background/80"
              )}>
                Healthcare Sdn. Bhd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-body text-sm font-medium transition-colors link-underline",
                  location.pathname === link.path
                    ? "text-primary"
                    : isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-background hover:text-background/80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+60123801275"
              className={cn(
                "flex items-center space-x-2 font-body text-sm font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-background"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>+60 12-380 1275</span>
            </a>
            <Link to="/contact" className="btn-primary text-sm py-3 px-6">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-foreground" : "text-background"
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-premium-lg animate-fade-up">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block font-body text-base font-medium py-2 transition-colors",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary block text-center mt-4"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
