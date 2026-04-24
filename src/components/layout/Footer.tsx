import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Facebook } from "lucide-react";
import logo from "@/assets/redrhino-logo.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import XIcon from "@/components/icons/XIcon";
import PinterestIcon from "@/components/icons/PinterestIcon";

const Footer = () => {
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in your services.");

  return (
    <footer className="bg-rhino-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Red Rhino Digital" width={84} height={84} loading="lazy" className="h-[84px] w-auto" />
              <div>
                <span className="font-display font-bold text-xl text-white">
                  Red Rhino
                </span>
                <span className="font-display font-bold text-xl text-primary">
                  {" "}Digital
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Red Rhino Digital is a Chennai-based full-service digital agency delivering result-driven marketing, reliable IT services, and high-performance web development solutions to businesses across India.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/redrhinodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/redrhinodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/redrhinodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/redrhinodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X (Twitter)"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
              >
                <XIcon className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.pinterest.com/redrhinodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Pinterest"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
              >
                <PinterestIcon className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                "Digital Marketing",
                "IT Services",
                "Web Development",
                "Branding & Design",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/60 hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {service}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a
                  href="tel:+919499912508"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  +91 94999 12508
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a
                  href="mailto:contact@redrhinodigital.in"
                  className="text-white/60 hover:text-primary transition-colors text-sm"
                >
                  contact@redrhinodigital.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/60">Chennai, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Red Rhino Digital. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
