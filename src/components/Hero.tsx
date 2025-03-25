
import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-24 bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(7, 55, 99, 0.7), rgba(7, 55, 99, 0.8)), url(https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=1000)',
      }}
    >
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center">
            <span className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20 animate-fade-in">
              Welcome to Kish Investment Park
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in animate-delay-100">
            Kish Investment Park
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-200">
            1444 Factories | Kish to Dubai, Dubai to the World
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-300">
            <a 
              href="#about" 
              className="button-primary group"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact" 
              className="button-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-white rounded-full p-2 bg-white/10 backdrop-blur-sm border border-white/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
