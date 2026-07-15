"use client";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/b8space.official",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:hi.b8space@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Capabilities", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Artificial Intelligence", href: "#services" },
    { name: "Software Engineering", href: "#services" },
    { name: "Business Automation", href: "#services" },
    { name: "Data & Analytics", href: "#services" },
  ];

  return (
    <footer className="relative surface border-t border-card-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              B8Space
            </div>
            <p className="text-sm font-medium text-accent mb-4">
              Empowering Digital Advancement
            </p>
            <p className="text-muted-foreground mb-6 max-w-md">
              B8Space partners with organizations to build future-ready
              businesses through AI, software engineering, automation, and
              intelligent digital transformation.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg surface-hover border border-card-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-fast"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Capabilities</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-fast"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats or Achievement */}
        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <Badge
                variant="secondary"
                className="gradient-primary text-primary-foreground"
              >
                Digital Transformation
              </Badge>
              <Badge variant="outline" className="border-card-border">
                AI & Automation
              </Badge>
              <Badge variant="outline" className="border-card-border">
                Enterprise Technology
              </Badge>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg surface-hover border border-card-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>
              © 2026 B8Space. Empowering Digital Advancement. All rights
              reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-primary transition-fast">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-fast">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-fast">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
