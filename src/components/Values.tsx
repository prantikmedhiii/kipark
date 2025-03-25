
import React, { useEffect, useRef } from 'react';
import { Shield, Target, Star, RefreshCw, Globe, Leaf } from 'lucide-react';

const valueItems = [
  {
    title: 'Excellence',
    description: 'We pursue excellence in every aspect of our operations, from infrastructure to service delivery.',
    icon: Star,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50'
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of ethics and transparency in all our business dealings.',
    icon: Shield,
    color: 'text-garret-500',
    bgColor: 'bg-garret-50'
  },
  {
    title: 'Innovation',
    description: 'We embrace innovative solutions and technologies to drive growth and efficiency.',
    icon: RefreshCw,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Global Perspective',
    description: 'We maintain a global outlook, connecting businesses to international markets and opportunities.',
    icon: Globe,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    title: 'Sustainability',
    description: 'We are committed to environmentally responsible development and operations.',
    icon: Leaf,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50'
  },
  {
    title: 'Results-Oriented',
    description: 'We focus on delivering measurable results for our stakeholders and business partners.',
    icon: Target,
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  }
];

const Values = () => {
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
    <section id="values" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h5 className="text-garret-500 font-medium mb-3 reveal">OUR PRINCIPLES</h5>
          <h2 className="section-title reveal">Our Values</h2>
          <p className="section-subtitle reveal">
            The core principles that guide our decisions, shape our culture, and define our business philosophy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueItems.map((item, index) => (
            <div 
              key={index}
              className="card hover:shadow-lg border-t-2 border-gray-100 hover:border-garret-500 transition-all reveal"
            >
              <div className={`p-3 rounded-full ${item.bgColor} ${item.color} w-fit mb-4`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-garret-50 rounded-lg p-8 reveal">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-medium text-garret-500 mb-4">Our Commitment to Excellence</h3>
              <p className="text-muted-foreground mb-6">
                At Kish Investment Park, we are dedicated to providing world-class infrastructure, services, and support to help businesses thrive in a competitive global marketplace. Our commitment to excellence drives every aspect of our operations.
              </p>
              <a href="#contact" className="button-primary">
                Partner With Us
              </a>
            </div>
            <div className="md:w-1/3 aspect-square relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-garret-200 to-garret-100 animate-pulse opacity-50"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-garret-500 to-garret-400 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-sm">ESTABLISHED</p>
                  <p className="text-3xl font-bold">2005</p>
                  <p className="text-sm mt-2">LEADING THE INDUSTRY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
