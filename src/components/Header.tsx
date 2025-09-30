import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 surface/80 backdrop-blur-md border-b border-card-border">
      <div className="container mx-auto px-6 py-4 bg-sky-900/50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="TechSolutions Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-fast">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-fast">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-fast">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-fast">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="gradient-primary hover:shadow-glow transition-smooth">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary transition-fast"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 space-y-4 border-t border-card-border">
            <a
              href="#home"
              className="block text-foreground hover:text-primary transition-fast"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-foreground hover:text-primary transition-fast"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-foreground hover:text-primary transition-fast"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-foreground hover:text-primary transition-fast"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button variant="default" className="w-full gradient-primary hover:shadow-glow transition-smooth">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;