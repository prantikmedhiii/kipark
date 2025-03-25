
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'E-Services', href: '/e-services' },
  { name: 'Payment Services', href: '/payment-services' },
  { name: 'Zones', href: '/zones' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Media', href: '/media' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Directory', href: '/directory' },
  { name: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 left-0 z-50 transition-all duration-300">
      {/* Top info bar */}
      <div className="hidden md:block bg-garret-500 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="mailto:invest@kishinvestmentpark.com" className="flex items-center hover:text-garret-100 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              <span>invest@kishinvestmentpark.com</span>
            </a>
            <a href="tel:+97148823939" className="flex items-center hover:text-garret-100 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span>+971 4882 3939</span>
            </a>
            <a href="https://wa.me/971558881030" className="flex items-center hover:text-garret-100 transition-colors">
              <span className="mr-2">WhatsApp:</span>
              <span>+971 5588 81030</span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center hover:text-garret-100 transition-colors">
              <MapPin className="w-4 h-4 mr-2" />
              <span>1903-Burj Khalifa, Dubai, U.A.E.</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav 
        className={`${
          scrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-white/95 backdrop-blur-sm'
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg 
              width="150" 
              height="40" 
              viewBox="0 0 150 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform hover:scale-105"
            >
              <path d="M20 5L40 35H0L20 5Z" fill="#073763"/>
              <path d="M50 10H95V16H50V10Z" fill="#073763"/>
              <path d="M50 22H80V28H50V22Z" fill="#073763"/>
              <path d="M110 10H145V16H110V10Z" fill="#073763"/>
              <path d="M110 22H135V28H110V22Z" fill="#073763"/>
            </svg>
            <span className="ml-2 text-xl font-semibold text-garret-500">Kish Investment Park</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-3 py-2 text-sm font-medium text-garret-500 hover:text-garret-600 hover:bg-garret-50 rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button
            className="lg:hidden rounded-md p-2 text-garret-500 hover:bg-garret-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50 pt-16 bg-white">
            <div className="container mx-auto px-4 py-4 space-y-1 flex flex-col">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-base font-medium text-garret-500 hover:text-garret-600 hover:bg-garret-50 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile contact info */}
              <div className="mt-6 pt-6 border-t border-garret-100">
                <div className="space-y-3 text-sm">
                  <a href="mailto:invest@kishinvestmentpark.com" className="flex items-center text-garret-500">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>invest@kishinvestmentpark.com</span>
                  </a>
                  <a href="tel:+97148823939" className="flex items-center text-garret-500">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+971 4882 3939</span>
                  </a>
                  <a href="https://wa.me/971558881030" className="flex items-center text-garret-500">
                    <span className="mr-2">WhatsApp:</span>
                    <span>+971 5588 81030</span>
                  </a>
                  <div className="flex items-center text-garret-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>1903-Burj Khalifa, Dubai, U.A.E.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
