
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Zones from '../components/Zones';
import Profile from '../components/Profile';
import Services from '../components/Services';
import Events from '../components/Events';
import Values from '../components/Values';
import Gallery from '../components/Gallery';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const Index = () => {
  // Handle scroll reveal animations
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Zones />
        <Profile />
        <Services />
        <Events />
        <Values />
        <Gallery />
        <Categories />
      </main>
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#home" 
        className="fixed bottom-6 right-6 p-3 bg-garret-500 text-white rounded-full shadow-lg hover:bg-garret-600 transition-colors"
        aria-label="Back to top"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
