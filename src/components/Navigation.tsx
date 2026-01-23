import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Choose Us', id: 'why-choose' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex-shrink-0 flex items-center space-x-3 group"
          >
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Badilisha Properties Ltd</h1>
              <p className="text-xs text-gray-600">Property Transitions Reimagined</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors px-2 py-1"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center">
            {/* Desktop CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Start Your Trade-In
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 border-t border-gray-200 bg-white">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600 rounded-lg transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center"
            >
              Start Your Trade-In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}