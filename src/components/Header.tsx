import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 surface/80 backdrop-blur-md border-b border-card-border bg-sky-900/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="TechSolutions Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#home" className="text-white hover:text-primary transition-fast">
              Home
            </a>
            {/* Products Dropdown - Click to toggle */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleProducts}
                className="flex items-center gap-1 text-white hover:text-primary transition-fast"
              >
                Products
                <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                  <Link
                    to="/coffee-rider-app"
                    onClick={() => setIsProductsOpen(false)}
                    className="block px-4 py-3 text-primary hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <div className="font-medium">Coffee Rider App</div>
                    <div className="text-xs text-gray-500">Coffee Mobile Shop System</div>
                  </Link>
                </div>
              )}
            </div>
            <a href="/#services" className="text-white hover:text-primary transition-fast">
              Services
            </a>
            <a href="/#about" className="text-white hover:text-primary transition-fast">
              About
            </a>
            <a href="/#contact" className="text-white hover:text-primary transition-fast">
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
          <nav className="md:hidden mt-4 py-4 space-y-4 border-t border-gray-200">
            <a
              href="/#home"
              className="block text-gray-700 hover:text-primary transition-fast"
              onClick={toggleMenu}
            >
              Home
            </a>
            {/* Mobile Products */}
            <div className="space-y-2">
              <div className="text-gray-700 font-medium">Products</div>
              <Link
                to="/coffee-rider-app"
                className="block pl-4 text-gray-600 hover:text-primary transition-fast"
                onClick={toggleMenu}
              >
                Coffee Rider App
              </Link>
            </div>
            <a
              href="/#services"
              className="block text-gray-700 hover:text-primary transition-fast"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="/#about"
              className="block text-gray-700 hover:text-primary transition-fast"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="/#contact"
              className="block text-gray-700 hover:text-primary transition-fast"
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