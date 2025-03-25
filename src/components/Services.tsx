
import React, { useEffect, useRef } from 'react';
import { FileText, CreditCard, FileCheck, Globe, Users, ShieldCheck } from 'lucide-react';

const serviceCategories = [
  {
    id: 'forms',
    name: 'Forms & Documents',
    icon: FileText,
    items: [
      { name: 'Business Registration Form', format: 'PDF' },
      { name: 'Warehouse Lease Application', format: 'PDF' },
      { name: 'Factory Setup Guidelines', format: 'PDF' },
      { name: 'Import/Export Declaration', format: 'DOCX' },
      { name: 'Employee Visa Application', format: 'PDF' }
    ]
  },
  {
    id: 'payment',
    name: 'Payment Services',
    icon: CreditCard,
    items: [
      { name: 'Lease Payment Portal', type: 'Online Service' },
      { name: 'Utility Bills Payment', type: 'Online Service' },
      { name: 'Registration Fee Payment', type: 'Online Service' },
      { name: 'Service Charge Settlement', type: 'Online Service' },
      { name: 'Customs Duty Payment', type: 'Online Service' }
    ]
  },
  {
    id: 'compliance',
    name: 'Compliance Services',
    icon: FileCheck,
    items: [
      { name: 'Annual Compliance Check', type: 'Service' },
      { name: 'Health & Safety Inspection', type: 'Service' },
      { name: 'Environmental Compliance', type: 'Service' },
      { name: 'Quality Assurance Certification', type: 'Service' },
      { name: 'Labor Law Compliance', type: 'Service' }
    ]
  }
];

const additionalServices = [
  {
    title: 'Global Trade Support',
    description: 'Assistance with international trade regulations, customs procedures, and export documentation.',
    icon: Globe
  },
  {
    title: 'Business Setup Services',
    description: 'Comprehensive support for new businesses establishing operations in Kish Investment Park.',
    icon: Users
  },
  {
    title: 'Security Services',
    description: '24/7 security monitoring and support for all facilities within the investment park.',
    icon: ShieldCheck
  }
];

const Services = () => {
  const [activeCategory, setActiveCategory] = React.useState('forms');
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
    <section id="services" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h5 className="text-garret-500 font-medium mb-3 reveal">OUR SERVICES</h5>
          <h2 className="section-title reveal">E-Services & Forms</h2>
          <p className="section-subtitle reveal">
            Access our comprehensive range of electronic services and downloadable forms designed to simplify your business operations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 reveal">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-medium mb-3">Service Categories</h3>
                <p className="text-muted-foreground mb-4">
                  Select a category to view available services and forms
                </p>
              </div>
              
              <div className="p-4">
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-3 rounded-md mb-2 transition-all flex items-center ${
                      activeCategory === category.id 
                        ? 'bg-garret-500 text-white' 
                        : 'hover:bg-garret-50 text-gray-700'
                    }`}
                  >
                    <category.icon className="h-5 w-5 mr-3" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 reveal">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-medium">
                  {serviceCategories.find(cat => cat.id === activeCategory)?.name}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceCategories.find(cat => cat.id === activeCategory)?.items.map((item, index) => (
                    <div key={index} className="p-4 border border-gray-100 rounded-md hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{item.name}</h4>
                        {'format' in item ? (
                          <span className="px-2 py-1 bg-garret-50 text-garret-500 text-xs rounded-md">
                            {item.format}
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-blue-50 text-blue-500 text-xs rounded-md">
                            {item.type}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-end mt-4">
                        {'format' in item ? (
                          <a href="#" className="text-sm text-garret-500 hover:text-garret-600 inline-flex items-center">
                            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                          </a>
                        ) : (
                          <a href="#" className="text-sm text-garret-500 hover:text-garret-600 inline-flex items-center">
                            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Access Service
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="card hover:shadow-lg border-t-4 border-garret-500">
                  <div className="p-2 rounded-full bg-garret-50 w-fit mb-4">
                    <service.icon className="h-6 w-6 text-garret-500" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">{service.title}</h4>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
