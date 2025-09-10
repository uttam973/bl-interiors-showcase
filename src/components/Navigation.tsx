import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm' 
        : 'bg-transparent md:bg-transparent lg:bg-transparent backdrop-blur-none md:backdrop-blur-none lg:backdrop-blur-none border-b-0 md:border-b-0 lg:border-b-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-primary'
            }`}>
              BL <span className={isScrolled ? 'text-amber-600' : 'text-accent'}>Interiors</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-amber-600' 
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-amber-600' : 'bg-accent'
                  }`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-4 text-sm transition-colors duration-300 ${
              isScrolled ? 'text-gray-600' : 'text-muted-foreground'
            }`}>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91 98806 17307</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>bl.interiors@yahoo.com</span>
              </div>
            </div>
            <Button className="btn-gold">
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600' 
                  : 'text-foreground hover:text-accent'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-sm border-b border-border/50">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-border/50 mt-4">
              <div className="flex flex-col space-y-2 px-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 98806 17307</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>bl.interiors@yahoo.com</span>
                </div>
                <Button className="btn-gold mt-3 w-full">
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;