import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@techsolutions.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Digitalization Advisory", href: "#services" },
    { name: "Application Development", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
    { name: "Technical Consulting", href: "#services" }
  ];

  return (
    <footer className="relative surface border-t border-card-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              TechSolutions
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              We're a software company building cutting-edge solutions with strong engineering talent, 
              providing end-to-end digitalization services to transform your business.
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
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-fast"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-fast"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats or Achievement */}
        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="secondary" className="gradient-primary text-primary-foreground">
                Cutting-Edge Technology
              </Badge>
              <Badge variant="outline" className="border-card-border">
                Expert Engineering Team
              </Badge>
              <Badge variant="outline" className="border-card-border">
                End-to-End Solutions
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
              © 2024 TechSolutions. All rights reserved.
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