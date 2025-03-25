
import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'International Trade Expo 2023',
    date: 'October 15-18, 2023',
    location: 'Kish Exhibition Center',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000',
    description: 'Join industry leaders and global businesses at the largest trade exhibition in the region.'
  },
  {
    id: 2,
    title: 'Manufacturing Innovation Summit',
    date: 'November 5-7, 2023',
    location: 'Kish Conference Hall',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    description: 'Explore the future of manufacturing with cutting-edge technologies and innovative processes.'
  },
  {
    id: 3,
    title: 'Logistics & Supply Chain Forum',
    date: 'December 12-14, 2023',
    location: 'Dubai Maritime City',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=1000',
    description: 'Learn about optimizing your logistics operations and supply chain management.'
  }
];

const news = [
  {
    id: 1,
    title: 'Kish Investment Park Expands Warehouse Facilities',
    date: 'September 28, 2023',
    category: 'Infrastructure',
    excerpt: 'New state-of-the-art warehousing facilities added to meet growing demand for storage and logistics services.'
  },
  {
    id: 2,
    title: 'Strategic Partnership with European Manufacturing Alliance',
    date: 'September 15, 2023',
    category: 'Partnerships',
    excerpt: 'Kish Investment Park signs MOU with European Manufacturing Alliance to facilitate trade and technology transfer.'
  },
  {
    id: 3,
    title: 'New E-Services Portal Launched to Streamline Operations',
    date: 'August 30, 2023',
    category: 'Technology',
    excerpt: 'Digital transformation initiative introduces comprehensive online services platform for businesses.'
  },
  {
    id: 4,
    title: 'Sustainable Development Initiative Receives Recognition',
    date: 'August 10, 2023',
    category: 'Sustainability',
    excerpt: 'Kish Investment Park's environmental conservation efforts recognized with international sustainability award.'
  }
];

const Events = () => {
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
    <section id="media" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h5 className="text-garret-500 font-medium mb-3 reveal">STAY UPDATED</h5>
          <h2 className="section-title reveal">Upcoming Events & News</h2>
          <p className="section-subtitle reveal">
            Stay informed about the latest developments, upcoming events, and important announcements
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-medium mb-6 reveal">Upcoming Events</h3>
            <div className="space-y-8">
              {events.map((event) => (
                <div key={event.id} className="flex flex-col md:flex-row gap-6 card hover:shadow-lg reveal">
                  <div className="md:w-1/3 aspect-video rounded-md overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-medium mb-2">{event.title}</h4>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm mb-4">
                      <div className="flex items-center text-garret-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-garret-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <a href="#" className="text-garret-500 hover:text-garret-600 inline-flex items-center group">
                      <span>View Details</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium mb-6 reveal">Latest News</h3>
            <div className="space-y-4">
              {news.map((item) => (
                <div key={item.id} className="card hover:shadow-lg hover:translate-y-[-2px] transition-all reveal">
                  <span className="inline-block text-xs font-medium px-2 py-1 bg-garret-50 text-garret-500 rounded-full mb-3">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-medium mb-2 hover:text-garret-500 transition-colors">
                    <a href="#">{item.title}</a>
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">{item.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{item.date}</span>
                    </div>
                    <a href="#" className="text-garret-500 hover:text-garret-600 inline-flex items-center group text-sm">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center reveal">
              <a href="#" className="button-secondary">
                View All News
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
