
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, PackagePlus, Search } from 'lucide-react';

const productCategories = [
  {
    name: 'Wireless',
    subcategories: ['Wireless Phones', 'Wearables', 'Wireless Cases', 'Wireless Accessories']
  },
  {
    name: 'Health & Personal Care',
    subcategories: ['Household Consumables', 'Nutrition & Food', 'Vitamins', 'Oral Care', 'Diet Supplements', 'Health Care']
  },
  {
    name: 'PC',
    subcategories: ['Computing Mobile Hardware', 'Computing Desktop Hardware', 'Computing Accessories', 'Computing Peripherals', 'Computing Storage', 'Computing Components & Networking', 'Computing Memory', 'Keyboards']
  },
  {
    name: 'Grocery',
    subcategories: ['Beverages', 'Baby & Infant', 'Snacks & Desserts', 'Condiments, Spreads & Cooking', 'Baking Supplies', 'Cereals', 'Pasta & Grains', 'Luxury Food & Drink']
  },
  {
    name: 'Kitchen',
    subcategories: ['Food Preparation', 'Hot Beverage Makers', 'Home Environment', 'Floorcare', 'Electric Cookware', 'Floorcare Accessories', 'Ironing', 'Toasters, Waffle & Crepe Makers', 'Cookware']
  },
  {
    name: 'Beauty',
    subcategories: ['Skin Care', 'Hair Care & Styling', 'Bath & Shower', 'Make-up', 'Fragrance', 'Prestige Fragrance', 'Prestige Skin Care']
  },
  {
    name: 'Home',
    subcategories: ['Housewares', 'Cookware', 'Linens', 'Tabletop', 'Home Storage', 'Home Decor', 'Tools, Gadgets & Barware', 'Kitchen storgae & Organization', 'Janitorial & Sanitation', 'Lighting']
  },
  {
    name: 'Baby',
    subcategories: ['Bathing, Diapering, Skin Care', 'Feeding', 'Stools, Furniture, Bedding', 'Prams, Strollers, Carriers', 'Car Seats & Accessories']
  }
];

// Display only 8 categories initially, the rest can be viewed in "View All Categories"

const Categories = () => {
  const [visibleCategories, setVisibleCategories] = useState(8);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
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

  const toggleCategory = (categoryName: string) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
  };

  const filteredCategories = productCategories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="directory" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h5 className="text-garret-500 font-medium mb-3 reveal">PRODUCT DIRECTORY</h5>
          <h2 className="section-title reveal">Product Categories</h2>
          <p className="section-subtitle reveal">
            Explore our comprehensive range of product categories available through our network of factories
          </p>
        </div>
        
        <div className="mb-8 max-w-xl mx-auto reveal">
          <div className="relative">
            <input
              type="text"
              placeholder="Search categories or products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-garret-400 pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.slice(0, visibleCategories).map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden reveal">
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full p-4 text-left font-medium flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span>{category.name}</span>
                <ChevronDown 
                  className={`transition-transform h-5 w-5 text-garret-500 ${
                    expandedCategory === category.name ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              {expandedCategory === category.name && (
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                  <ul className="space-y-2">
                    {category.subcategories.map((subcat) => (
                      <li key={subcat}>
                        <a 
                          href="#" 
                          className="block px-2 py-1.5 rounded-md hover:bg-white transition-colors text-muted-foreground hover:text-garret-500"
                        >
                          {subcat}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {filteredCategories.length > visibleCategories && (
          <div className="mt-12 text-center reveal">
            <button 
              onClick={() => setVisibleCategories(prev => prev === 8 ? filteredCategories.length : 8)} 
              className="button-secondary"
            >
              {visibleCategories === 8 ? (
                <>
                  <PackagePlus className="mr-2 h-5 w-5" />
                  <span>View All Categories</span>
                </>
              ) : (
                'Show Less'
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
