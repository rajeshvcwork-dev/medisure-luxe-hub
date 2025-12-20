import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Clients", path: "/clients" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const products = [
  "Hospital Linen",
  "Medical Uniforms",
  "Surgical Gowns",
  "Hotel Linen",
  "OT Textiles",
];

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-background">
      {/* Main Footer */}
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">M</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg">MEDISURE</span>
                <span className="block text-xs text-background/70">Healthcare Sdn. Bhd.</span>
              </div>
            </div>
            <p className="text-background/80 font-body text-sm leading-relaxed">
              Malaysia's leading provider of premium hospital linen, medical uniforms, 
              healthcare textiles, and hotel linen solutions since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-primary transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-background/80 hover:text-primary transition-colors font-body text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80 font-body text-sm">
                  No. 15-2, Jalan USJ 9/5T,<br />
                  Subang Jaya, 47620<br />
                  Selangor, Malaysia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+60123801275" className="text-background/80 hover:text-primary transition-colors font-body text-sm">
                  +60-12 380 1275
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@medisure.com.my" className="text-background/80 hover:text-primary transition-colors font-body text-sm">
                  info@medisure.com.my
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-background/60 font-body text-sm">
              © {new Date().getFullYear()} Medisure Healthcare Sdn. Bhd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-background/60 hover:text-primary transition-colors font-body text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors font-body text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
