
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Building, Phone, Mail, Link as LinkIcon, Filter, MapPin, Tag } from 'lucide-react';

const Directory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'logistics', name: 'Logistics & Warehousing' },
    { id: 'services', name: 'Business Services' },
    { id: 'retail', name: 'Retail & Consumer' },
    { id: 'food', name: 'Food & Beverage' }
  ];

  const businesses = [
    {
      id: 1,
      name: 'Global Manufacturing Solutions',
      category: 'manufacturing',
      subcategory: 'Electronics',
      location: 'Industrial Zone, Block A',
      contact: {
        phone: '+971 4 123 4567',
        email: 'info@globalmfg.com',
        website: 'www.globalmfg.com'
      },
      description: 'Leading manufacturer of electronic components and circuit boards for global markets.'
    },
    {
      id: 2,
      name: 'Kish Logistics International',
      category: 'logistics',
      subcategory: 'Freight Forwarding',
      location: 'Logistics Center, Block C',
      contact: {
        phone: '+971 4 234 5678',
        email: 'operations@kishlogistics.com',
        website: 'www.kishlogistics.com'
      },
      description: 'Comprehensive logistics services specializing in international freight forwarding and customs clearance.'
    },
    {
      id: 3,
      name: 'Business Advisory Partners',
      category: 'services',
      subcategory: 'Consulting',
      location: 'Commercial Zone, Tower B',
      contact: {
        phone: '+971 4 345 6789',
        email: 'info@businessadvisory.com',
        website: 'www.businessadvisory.com'
      },
      description: 'Professional consulting firm providing business advisory services for companies in the investment park.'
    },
    {
      id: 4,
      name: 'Smart Tech Solutions',
      category: 'manufacturing',
      subcategory: 'Technology',
      location: 'Industrial Zone, Block D',
      contact: {
        phone: '+971 4 456 7890',
        email: 'contact@smarttech.com',
        website: 'www.smarttech.com'
      },
      description: 'Innovative technology manufacturing company specializing in smart devices and IoT solutions.'
    },
    {
      id: 5,
      name: 'Kish Fashion Mart',
      category: 'retail',
      subcategory: 'Apparel',
      location: 'Commercial Zone, Mall Section',
      contact: {
        phone: '+971 4 567 8901',
        email: 'info@kishfashion.com',
        website: 'www.kishfashion.com'
      },
      description: 'Retail outlet offering a wide range of apparel and fashion accessories for men, women, and children.'
    },
    {
      id: 6,
      name: 'Global Food Processing',
      category: 'food',
      subcategory: 'Food Processing',
      location: 'Industrial Zone, Block F',
      contact: {
        phone: '+971 4 678 9012',
        email: 'info@globalfood.com',
        website: 'www.globalfood.com'
      },
      description: 'Food processing facility producing packaged food products for local and international markets.'
    },
    {
      id: 7,
      name: 'Express Courier Services',
      category: 'logistics',
      subcategory: 'Courier',
      location: 'Logistics Center, Block A',
      contact: {
        phone: '+971 4 789 0123',
        email: 'service@expresscourier.com',
        website: 'www.expresscourier.com'
      },
      description: 'Reliable courier service providing express delivery for documents and packages within the park and beyond.'
    },
    {
      id: 8,
      name: 'Kish Cafe & Restaurant',
      category: 'food',
      subcategory: 'Restaurant',
      location: 'Commercial Zone, Food Court',
      contact: {
        phone: '+971 4 890 1234',
        email: 'info@kishcafe.com',
        website: 'www.kishcafe.com'
      },
      description: 'Popular cafe and restaurant serving a variety of international cuisines for park employees and visitors.'
    }
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredBusinesses = businesses.filter(business => {
    const matchesCategory = selectedCategory === 'all' || business.category === selectedCategory;
    const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          business.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-garret-500 mb-4">Business Directory</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the diverse range of businesses operating in Kish Investment Park.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for businesses, services, or products..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full py-3 px-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-garret-300 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category.id 
                  ? 'bg-garret-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="md:flex md:items-center md:justify-between mb-6">
            <div className="md:flex-1">
              <h2 className="text-xl font-semibold text-garret-500">
                {filteredBusinesses.length} {filteredBusinesses.length === 1 ? 'Business' : 'Businesses'} Found
              </h2>
            </div>
            <div className="mt-3 md:mt-0 flex items-center">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-600 mr-2">Sort By:</span>
              <select className="bg-white border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-garret-300">
                <option>Name (A-Z)</option>
                <option>Name (Z-A)</option>
                <option>Category</option>
                <option>Location</option>
              </select>
            </div>
          </div>

          {filteredBusinesses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.map(business => (
                <div key={business.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-garret-500">{business.name}</h3>
                      <span className="bg-garret-50 text-garret-500 text-xs px-2 py-1 rounded-full inline-flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {business.subcategory}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{business.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-garret-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-2">{business.location}</span>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-4 w-4 text-garret-500 mt-0.5 flex-shrink-0" />
                        <a href={`tel:${business.contact.phone}`} className="ml-2 hover:underline">{business.contact.phone}</a>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-4 w-4 text-garret-500 mt-0.5 flex-shrink-0" />
                        <a href={`mailto:${business.contact.email}`} className="ml-2 hover:underline">{business.contact.email}</a>
                      </div>
                      <div className="flex items-start">
                        <LinkIcon className="h-4 w-4 text-garret-500 mt-0.5 flex-shrink-0" />
                        <a href={`https://${business.contact.website}`} target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">{business.contact.website}</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No Businesses Found</h3>
              <p className="text-gray-500">
                No businesses match your current search criteria. Please try adjusting your search or filtering options.
              </p>
            </div>
          )}

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-garret-500 mb-4">List Your Business in the Directory</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you operate a business in Kish Investment Park and would like to be listed in our directory, please contact our directory management team.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-garret-500 hover:bg-garret-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Contact Directory Management
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Directory;
