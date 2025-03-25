
import React, { useEffect, useRef } from 'react';
import { BarChart3, Users, Building, TrendingUp } from 'lucide-react';

const stats = [
  { 
    id: 1, 
    value: "1444", 
    label: "Factories", 
    icon: Building,
    color: "bg-garret-50 text-garret-500" 
  },
  { 
    id: 2, 
    value: "25k+", 
    label: "Skilled Workers", 
    icon: Users,
    color: "bg-blue-50 text-blue-500" 
  },
  { 
    id: 3, 
    value: "$4.2B", 
    label: "Annual Trade Volume", 
    icon: BarChart3,
    color: "bg-emerald-50 text-emerald-500" 
  },
  { 
    id: 4, 
    value: "18%", 
    label: "Annual Growth", 
    icon: TrendingUp,
    color: "bg-amber-50 text-amber-500" 
  }
];

const Profile = () => {
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
    <section id="profile" ref={sectionRef} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-garret-500 overflow-hidden">
        <div className="absolute w-full h-full opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-white rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="relative section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h5 className="text-white font-medium mb-3 reveal">COMPANY PROFILE</h5>
            <h2 className="section-title text-white reveal">Kish Investment Park Profile</h2>
            <p className="section-subtitle text-white/80 reveal">
              A comprehensive overview of our development, operations, and key performance indicators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal">
            {stats.map((stat) => (
              <div key={stat.id} className="card bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/15 flex flex-col items-center text-center p-8">
                <div className={`p-3 rounded-full ${stat.color} mb-4`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center reveal">
            <div>
              <h3 className="text-2xl font-medium text-white mb-6">Our Strategic Advantage</h3>
              <p className="text-white/80 mb-6">
                With a prime location in Kish Island and direct connections to Dubai's global shipping network, Kish Investment Park offers unparalleled advantages for businesses looking to establish or expand their presence in the region.
              </p>
              <ul className="space-y-4">
                {[
                  "Strategic positioning for global trade routes",
                  "Advanced logistics and supply chain management",
                  "Robust infrastructure supporting diverse industries",
                  "Streamlined regulatory environment for efficient operations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-white/90">
                    <svg className="h-6 w-6 text-white mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="aspect-video bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1000" 
                alt="Kish Investment Park Aerial View" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
