
import React, { useEffect, useRef } from 'react';
import { TrendingUp, Globe, Truck, Clock } from 'lucide-react';

const Overview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('active');
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h5 className="text-garret-500 font-medium mb-3 reveal">ABOUT US</h5>
          <h2 className="section-title reveal">Kish Investment Park Overview</h2>
          <p className="section-subtitle reveal">
            Expanding global reach through a strategic network of factories with efficient worldwide shipping capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card reveal">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-garret-50 text-garret-500">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium ml-4">Global Growth</h3>
            </div>
            <p className="text-muted-foreground">
              With our 1444 factories strategically located in Kish Island, we facilitate unprecedented growth opportunities for businesses looking to expand into new markets.
            </p>
          </div>
          
          <div className="card reveal">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-garret-50 text-garret-500">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium ml-4">Global Access</h3>
            </div>
            <p className="text-muted-foreground">
              Our strategic location in Kish Island provides excellent access to Dubai's shipping network, connecting your business to global markets efficiently.
            </p>
          </div>
          
          <div className="card reveal">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-garret-50 text-garret-500">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium ml-4">Logistics Excellence</h3>
            </div>
            <p className="text-muted-foreground">
              Our advanced logistics infrastructure ensures swift movement of goods from Kish to Dubai and onward to international destinations with minimal delays.
            </p>
          </div>
          
          <div className="card reveal">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-garret-50 text-garret-500">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium ml-4">Time Efficiency</h3>
            </div>
            <p className="text-muted-foreground">
              Optimized shipping routes and customs processing reduce transit times, giving your business a competitive edge in the global marketplace.
            </p>
          </div>
          
          <div className="card md:col-span-2 reveal">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="mb-6 md:mb-0 md:flex-1">
                <h3 className="text-xl font-medium mb-3">Strategic Advantages</h3>
                <p className="text-muted-foreground mb-4">
                  Kish Investment Park offers unparalleled opportunities for businesses seeking to establish a presence in a strategic location with excellent connectivity to global markets.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-garret-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tax incentives and financial benefits</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-garret-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to modern infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-garret-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Streamlined regulatory procedures</span>
                  </li>
                </ul>
              </div>
              <div className="md:flex-1 md:pl-6 md:border-l border-garret-100">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000" 
                    alt="Kish Investment Park Strategic View" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
