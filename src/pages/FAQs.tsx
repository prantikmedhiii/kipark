
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const categories = [
    { id: 'general', name: 'General Information' },
    { id: 'investment', name: 'Investment & Setup' },
    { id: 'operations', name: 'Operations & Facilities' },
    { id: 'legal', name: 'Legal & Regulatory' },
    { id: 'logistics', name: 'Logistics & Shipping' }
  ];

  const faqData = {
    general: [
      {
        id: 1,
        question: 'What is Kish Investment Park?',
        answer: 'Kish Investment Park is a comprehensive industrial and commercial hub located in Kish Island, offering world-class infrastructure, facilities, and services for businesses looking to establish and expand their operations in the Middle East and beyond.'
      },
      {
        id: 2,
        question: 'Where is Kish Investment Park located?',
        answer: 'Kish Investment Park is located in Kish Island, with a strategic position in the Persian Gulf, providing excellent connectivity to Dubai and other major markets in the region.'
      },
      {
        id: 3,
        question: 'How many factories are there in Kish Investment Park?',
        answer: 'Kish Investment Park is home to 1444 factories across various industries, making it one of the largest industrial hubs in the region.'
      },
      {
        id: 4,
        question: 'What industries are present in Kish Investment Park?',
        answer: 'Kish Investment Park hosts a diverse range of industries including manufacturing, logistics, food processing, electronics, automotive components, textiles, pharmaceuticals, and many more.'
      }
    ],
    investment: [
      {
        id: 5,
        question: 'What are the benefits of investing in Kish Investment Park?',
        answer: 'Investors in Kish Investment Park benefit from strategic location, excellent connectivity, state-of-the-art infrastructure, competitive operating costs, business-friendly regulations, tax incentives, and access to a skilled workforce.'
      },
      {
        id: 6,
        question: 'How do I apply for space in Kish Investment Park?',
        answer: 'To apply for space, visit our E-Services page to complete the application form. Our team will review your application and contact you to discuss your requirements and guide you through the next steps.'
      },
      {
        id: 7,
        question: 'What types of business spaces are available?',
        answer: 'We offer various options including pre-built factory units, built-to-suit facilities, warehouses, office spaces, retail units, and land plots for custom development based on your business needs.'
      },
      {
        id: 8,
        question: 'What is the minimum investment required?',
        answer: 'The minimum investment varies depending on the type of business and space required. Please contact our investment team for a detailed assessment based on your specific project.'
      }
    ],
    operations: [
      {
        id: 9,
        question: 'What utilities and infrastructure are provided?',
        answer: 'Kish Investment Park provides reliable electricity supply, water and sewage systems, telecommunications, internet connectivity, waste management, and road networks within the park.'
      },
      {
        id: 10,
        question: 'Is there 24/7 security in the park?',
        answer: 'Yes, we provide round-the-clock security services including perimeter security, access control, CCTV surveillance, and security personnel to ensure the safety of all businesses and personnel.'
      },
      {
        id: 11,
        question: 'What maintenance services are available?',
        answer: 'We offer comprehensive maintenance services including facility maintenance, equipment servicing, landscaping, cleaning, and emergency repair services to ensure smooth operations.'
      },
      {
        id: 12,
        question: 'Are there any amenities for employees?',
        answer: 'Yes, the park includes amenities such as food courts, cafeterias, prayer rooms, medical facilities, recreational areas, and banking services for the convenience of employees and visitors.'
      }
    ],
    legal: [
      {
        id: 13,
        question: 'What are the legal requirements for setting up a business?',
        answer: 'Legal requirements include business registration, trade license, approvals from relevant authorities, and compliance with local regulations. Our legal support team can guide you through the entire process.'
      },
      {
        id: 14,
        question: 'What visa services are offered for expatriate employees?',
        answer: 'We provide assistance with visa processing for expatriate employees, including work permits, residence visas, and family visas. Our visa services team will help you navigate the requirements and procedures.'
      },
      {
        id: 15,
        question: 'Are there any tax incentives for businesses?',
        answer: 'Yes, businesses in Kish Investment Park can benefit from various tax incentives including tax exemptions, reduced tax rates, and customs duty exemptions depending on the nature of business and other factors.'
      },
      {
        id: 16,
        question: 'What is the process for customs clearance?',
        answer: 'Our customs clearance process is streamlined to ensure efficient movement of goods. We have a dedicated customs office within the park to handle import and export documentation and clearance.'
      }
    ],
    logistics: [
      {
        id: 17,
        question: 'What transportation options are available for shipping goods?',
        answer: 'Transportation options include sea freight through nearby ports, air freight via Kish International Airport, and road transportation connecting to major highways and nearby cities.'
      },
      {
        id: 18,
        question: 'How does shipping work from Kish to Dubai?',
        answer: 'Shipping from Kish to Dubai is facilitated through regular sea and air connections. Our logistics center coordinates the movement of goods, handling documentation, customs clearance, and transportation arrangements.'
      },
      {
        id: 19,
        question: 'What is the average transit time for shipments?',
        answer: 'Transit times vary depending on the destination and mode of transport. Typical transit times to Dubai range from 1-2 days by sea and a few hours by air. International shipments vary based on destination.'
      },
      {
        id: 20,
        question: 'Do you provide warehousing and distribution services?',
        answer: 'Yes, we offer comprehensive warehousing and distribution services including storage, inventory management, order fulfillment, and distribution to local and international markets.'
      }
    ]
  };

  const toggleFaq = (id: number) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter(faqId => faqId !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Reset category filter when searching
    if (e.target.value) {
      setActiveCategory('all');
    } else {
      setActiveCategory('general');
    }
  };

  const allFaqs = Object.values(faqData).flat();
  
  const filteredFaqs = searchQuery
    ? allFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeCategory === 'all'
      ? allFaqs
      : faqData[activeCategory as keyof typeof faqData] || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-garret-500 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about Kish Investment Park, our services, and operations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for questions or keywords..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full py-3 px-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-garret-300 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'all' 
                ? 'bg-garret-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => { setActiveCategory(category.id); setSearchQuery(''); }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id 
                  ? 'bg-garret-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="bg-white rounded-lg shadow-md divide-y">
                {filteredFaqs.map(faq => (
                  <div key={faq.id} className="py-4 px-6">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="flex justify-between items-center w-full text-left font-medium text-garret-500 hover:text-garret-600 focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      {openFaqs.includes(faq.id) ? (
                        <ChevronUp className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaqs.includes(faq.id) && (
                      <div className="mt-2 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No FAQs found matching your search criteria.</p>
              </div>
            )}
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-semibold text-garret-500 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, please feel free to contact us directly.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-garret-500 hover:bg-garret-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
