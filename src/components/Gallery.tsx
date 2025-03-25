
import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000',
    alt: 'Industrial Manufacturing Facility',
    category: 'Industrial'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    alt: 'Advanced Technology Circuit',
    category: 'Technology'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000',
    alt: 'Modern Office Building',
    category: 'Commercial'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=1000',
    alt: 'Contemporary Architecture',
    category: 'Architecture'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1000',
    alt: 'Aerial View of Park',
    category: 'Aerial'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=1000',
    alt: 'Residential Area',
    category: 'Residential'
  }
];

const categories = ['All', 'Industrial', 'Commercial', 'Residential', 'Technology', 'Architecture', 'Aerial'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);
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

  // Handle image modal open/close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h5 className="text-garret-500 font-medium mb-3 reveal">OUR FACILITIES</h5>
          <h2 className="section-title reveal">Image Gallery</h2>
          <p className="section-subtitle reveal">
            Explore visual representations of our industrial zones, warehouses, and shipping operations
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-8 reveal">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-garret-500 text-white' 
                  : 'bg-white text-garret-500 hover:bg-garret-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-medium">{image.alt}</h4>
                <p className="text-sm text-muted-foreground">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="max-w-4xl max-h-full">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-white">
                <h4 className="text-xl font-medium">{selectedImage.alt}</h4>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
