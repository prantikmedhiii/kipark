
import React, { useEffect, useRef, useState } from 'react';
import { Building2, ShoppingBag, Home } from 'lucide-react';

const zones = [
  {
    id: 'industrial',
    name: 'Industrial Zone',
    description: 'State-of-the-art facilities for manufacturing and production with advanced infrastructure and logistics support.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000',
    icon: Building2,
    stats: [
      { label: 'Total Area', value: '750,000 sqm' },
      { label: 'Factory Units', value: '850+' },
      { label: 'Warehouse Space', value: '200,000 sqm' }
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial Zone',
    description: 'Premium commercial spaces designed for retail, office, and business operations with excellent connectivity.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000',
    icon: ShoppingBag,
    stats: [
      { label: 'Office Space', value: '250,000 sqm' },
      { label: 'Retail Units', value: '300+' },
      { label: 'Conference Centers', value: '5' }
    ]
  },
  {
    id: 'residential',
    name: 'Residential Zone',
    description: 'Luxurious residential accommodations for professionals and executives working within the investment park.',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=1000',
    icon: Home,
    stats: [
      { label: 'Housing Units', value: '500+' },
      { label: 'Green Space', value: '100,000 sqm' },
      { label: 'Recreational Facilities', value: '25+' }
    ]
  }
];

const Zones = () => {
  const [activeZone, setActiveZone] = useState('industrial');
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

  const activeZoneData = zones.find(zone => zone.id === activeZone);

  return (
    <section id="zones" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h5 className="text-garret-500 font-medium mb-3 reveal">OUR ZONES</h5>
          <h2 className="section-title reveal">Zones Overview</h2>
          <p className="section-subtitle reveal">
            Explore our diverse zones designed to meet the specific needs of various industries and business types
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-medium mb-3">Zone Categories</h3>
                <p className="text-muted-foreground mb-4">
                  Select a zone to learn more about its features and specifications.
                </p>
              </div>
              
              <div className="p-4">
                {zones.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(zone.id)}
                    className={`w-full text-left p-3 rounded-md mb-2 transition-all flex items-center ${
                      activeZone === zone.id 
                        ? 'bg-garret-500 text-white' 
                        : 'hover:bg-garret-50 text-gray-700'
                    }`}
                  >
                    <zone.icon className="h-5 w-5 mr-3" />
                    <span>{zone.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            {activeZoneData && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full reveal">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={activeZoneData.image} 
                    alt={activeZoneData.name} 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-garret-900/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h2 className="text-2xl font-bold mb-2">{activeZoneData.name}</h2>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="mb-6 text-muted-foreground">
                    {activeZoneData.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {activeZoneData.stats.map((stat, index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 rounded-md">
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-xl font-medium text-garret-500">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <a 
                      href="#contact" 
                      className="button-primary"
                    >
                      Inquire About This Zone
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zones;
