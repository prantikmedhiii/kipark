
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, AlertTriangle, FileText, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-garret-500 text-white">
      <div className="container mx-auto">
        {/* Emergency contact banner */}
        <div className="px-4 py-4 bg-garret-600 rounded-b-lg mx-4 -mt-1 mb-12 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <AlertTriangle className="h-5 w-5 mr-2 text-amber-400" />
              <span className="font-medium emergency-contact-header text-sm sm:text-base">Emergency Contacts</span>
            </div>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
              <a href="tel:+97142123911" className="flex items-center hover:text-amber-200 transition-colors">
                <Phone className="h-4 w-4 mr-1" />
                <span>Kish Emergency: +971 4212 3911</span>
              </a>
              <a href="tel:+97142123912" className="flex items-center hover:text-amber-200 transition-colors">
                <Phone className="h-4 w-4 mr-1" />
                <span>Factory Support: +971 4212 3912</span>
              </a>
              <a href="tel:+97142123913" className="flex items-center hover:text-amber-200 transition-colors">
                <Phone className="h-4 w-4 mr-1" />
                <span>Fire Department: +971 4212 3913</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-12 grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <path d="M20 5L40 35H0L20 5Z" fill="#FFFFFF"/>
              </svg>
              <span className="text-xl font-semibold">Kish Investment Park</span>
            </div>
            <p className="text-garret-100 mb-6">
              A premier investment destination offering comprehensive industrial, commercial, and residential facilities.
            </p>
            <div className="space-y-3">
              <a href="mailto:invest@kishinvestmentpark.com" className="flex items-center text-garret-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <span>invest@kishinvestmentpark.com</span>
              </a>
              <a href="tel:+97148823939" className="flex items-center text-garret-100 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span>+971 4882 3939</span>
              </a>
              <a href="https://wa.me/971558881030" className="flex items-center text-garret-100 hover:text-white transition-colors">
                <span className="mr-2">WhatsApp:</span>
                <span>+971 5588 81030</span>
              </a>
              <div className="flex items-center text-garret-100">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>1903-Burj Khalifa, Dubai, U.A.E.</span>
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Zones', href: '#zones' },
                { name: 'News & Events', href: '#media' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Product Categories', href: '#directory' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-garret-100 hover:text-white transition-colors flex items-center"
                  >
                    <svg 
                      className="h-3 w-3 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Investment Guide', icon: FileText },
                { name: 'Business Setup Manual', icon: FileText },
                { name: 'Regulatory Framework', icon: FileText },
                { name: 'Customs Procedures', icon: FileText },
                { name: 'Import/Export Guidelines', icon: FileText }
              ].map((resource) => (
                <li key={resource.name}>
                  <a 
                    href="#" 
                    className="text-garret-100 hover:text-white transition-colors flex items-center"
                  >
                    <resource.icon className="h-4 w-4 mr-2" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-medium mt-8 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-garret-400 hover:bg-garret-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-garret-400 hover:bg-garret-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-garret-400 hover:bg-garret-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-garret-400 hover:bg-garret-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6">Subscribe to Newsletter</h3>
            <p className="text-garret-100 mb-4">
              Stay updated with the latest news, events, and opportunities at Kish Investment Park.
            </p>
            <form className="mb-6">
              <div className="mb-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-md border border-garret-400 bg-garret-600 text-white placeholder-garret-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-white text-garret-500 font-medium rounded-md hover:bg-garret-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="border-t border-garret-400 pt-4">
              <h4 className="font-medium mb-2">Business Hours</h4>
              <p className="text-garret-100 text-sm">
                Monday to Friday: 8:30 AM - 5:30 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="bg-garret-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-garret-200 text-sm">
              &copy; {new Date().getFullYear()} Kish Investment Park. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-garret-200 text-sm">
              <a href="/terms.html" className="hover:text-white transition-colors flex items-center">
                Terms of Use
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a href="/privacy.html" className="hover:text-white transition-colors flex items-center">
                Privacy Policy
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a href="/sitemap.html" className="hover:text-white transition-colors flex items-center">
                Sitemap
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
