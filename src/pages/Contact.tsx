
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form submission logic would go here
    alert('Form submitted! In a real implementation, this would send your message.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-garret-500 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for any inquiries, support, or information about Kish Investment Park.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-garret-500 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-garret-50 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-garret-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600 mt-1">Main Office: <a href="tel:+97148823939" className="text-garret-500 hover:underline">+971 4882 3939</a></p>
                    <p className="text-gray-600">WhatsApp: <a href="https://wa.me/971558881030" className="text-garret-500 hover:underline">+971 5588 81030</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-garret-50 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-garret-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 mt-1">General Inquiries: <a href="mailto:invest@kishinvestmentpark.com" className="text-garret-500 hover:underline">invest@kishinvestmentpark.com</a></p>
                    <p className="text-gray-600">Customer Support: <a href="mailto:support@kishinvestmentpark.com" className="text-garret-500 hover:underline">support@kishinvestmentpark.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-garret-50 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-garret-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600 mt-1">1903-Burj Khalifa, Dubai, U.A.E.</p>
                    <p className="text-gray-600">Kish Investment Park, Kish Island</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-garret-50 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-garret-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600 mt-1">Monday to Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-garret-50 hover:bg-garret-100 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-garret-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-garret-50 hover:bg-garret-100 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-garret-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-garret-50 hover:bg-garret-100 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-garret-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-garret-50 hover:bg-garret-100 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-garret-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-garret-500 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-garret-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-garret-300"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-garret-300"
                    placeholder="Your phone number (optional)"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-garret-300"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-garret-300"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    required 
                    className="mt-1 h-4 w-4 text-garret-500 border-gray-300 rounded focus:ring-garret-300"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    I agree to the <a href="#" className="text-garret-500 hover:underline">Privacy Policy</a> and consent to having my data processed.
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="inline-flex items-center bg-garret-500 hover:bg-garret-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 bg-garret-500 text-white">
              <h2 className="text-2xl font-semibold">Our Locations</h2>
            </div>
            <div className="aspect-[16/9] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178530058084!2d55.27267!3d25.197197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sus!4v1646579330469!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Kish Investment Park Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
