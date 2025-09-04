import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Interior Design',
    'Architecture',
    'Turnkey Projects',
    'Project Management',
    'Landscaping',
    'Electrical Works'
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              BL <span className="text-accent">Interiors</span>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Transforming spaces with elegance, innovation, and love since 2007. 
              Your trusted partner for premium interior design and turnkey projects across India.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-accent font-medium">Est. 2007</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80">20+ Years Experience</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-white/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>No 16/1, Omshakti Residency</p>
                  <p>9th Main Road, 14th Cross</p>
                  <p>NS Palya, BG Road</p>
                  <p>Bangalore – 560076</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-white/80 text-sm">+91 98806 17307</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-white/80 text-sm">bl.interiors@yahoo.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sun: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              <p>© {currentYear} BL Interiors. All rights reserved.</p>
              <p className="mt-1">Proprietor: Mr. Bhanwar Lal Jangid</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;