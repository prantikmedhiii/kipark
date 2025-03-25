
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Building, Truck, Warehouse, Globe, Server, Shield, Coffee, Activity } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      title: "Modern Factory Units",
      icon: <Building className="w-12 h-12 text-garret-500" />,
      description: "State-of-the-art factory units built to international standards with flexible layouts and adaptable infrastructure.",
      features: [
        "Sizes ranging from 1,000 to 10,000 sq. meters",
        "High ceilings suitable for various industries",
        "Loading docks and overhead cranes",
        "Energy-efficient design and materials"
      ]
    },
    {
      title: "Warehousing Solutions",
      icon: <Warehouse className="w-12 h-12 text-garret-500" />,
      description: "Comprehensive warehousing facilities for storage, distribution, and logistics operations with 24/7 access.",
      features: [
        "Temperature-controlled storage options",
        "Advanced inventory management systems",
        "Security surveillance and controlled access",
        "Flexible leasing terms"
      ]
    },
    {
      title: "Logistics Center",
      icon: <Truck className="w-12 h-12 text-garret-500" />,
      description: "Integrated logistics center providing seamless connectivity to major transportation networks and ports.",
      features: [
        "Container handling facilities",
        "Customs processing center",
        "Freight forwarding services",
        "Multimodal transport connections"
      ]
    },
    {
      title: "Business Center",
      icon: <Globe className="w-12 h-12 text-garret-500" />,
      description: "Fully-equipped business center with offices, meeting rooms, and conference facilities for corporate operations.",
      features: [
        "Private and shared office spaces",
        "Conference rooms with AV equipment",
        "Business support services",
        "High-speed internet and telecommunications"
      ]
    },
    {
      title: "Data Center",
      icon: <Server className="w-12 h-12 text-garret-500" />,
      description: "Advanced data center providing reliable and secure hosting services for business-critical applications and data.",
      features: [
        "Tier III data center standards",
        "Redundant power and cooling systems",
        "High-bandwidth connectivity",
        "24/7 technical support"
      ]
    },
    {
      title: "Security Services",
      icon: <Shield className="w-12 h-12 text-garret-500" />,
      description: "Comprehensive security services ensuring the safety of personnel, property, and operations within the park.",
      features: [
        "Perimeter security and access control",
        "CCTV surveillance system",
        "Emergency response team",
        "Security personnel on duty 24/7"
      ]
    },
    {
      title: "Amenities Center",
      icon: <Coffee className="w-12 h-12 text-garret-500" />,
      description: "Amenities center providing essential services and conveniences for workers and visitors in the investment park.",
      features: [
        "Food courts and restaurants",
        "Banking and postal services",
        "Retail shops and convenience stores",
        "Prayer rooms and rest areas"
      ]
    },
    {
      title: "Health & Recreation",
      icon: <Activity className="w-12 h-12 text-garret-500" />,
      description: "Health and recreation facilities promoting the wellbeing of employees working within the investment park.",
      features: [
        "Medical clinic for emergency care",
        "Fitness center and sports facilities",
        "Green spaces and walking paths",
        "Recreational activities and programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-garret-500 mb-4">Our Facilities</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the world-class infrastructure and facilities that make Kish Investment Park the ideal location for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {facility.icon}
                    <h2 className="text-xl font-semibold ml-4">{facility.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{facility.description}</p>
                  <h3 className="font-medium text-garret-500 mb-3">Key Features:</h3>
                  <ul className="space-y-2 text-sm">
                    {facility.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-garret-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-20">
            <div className="bg-garret-50 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-garret-500 mb-3">Facility Services</h2>
                <p className="text-lg max-w-3xl mx-auto">
                  Our comprehensive range of facility services ensures that your business operations run smoothly and efficiently.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-garret-500 mb-4">Maintenance Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-garret-500 mr-2">•</span>
                      <span>24/7 emergency maintenance response</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-garret-500 mr-2">•</span>
                      <span>Preventive maintenance programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-garret-500 mr-2">•</span>
                      <span>HVAC system servicing and repair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-garret-500 mr-2">•</span>
                      <span>Electrical and plumbing maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-garret-500 mr-2">•</span>
                      <span>Building facade and structural maintenance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-garret-500 mb-4">Utility Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-garret-500 mr-2">•</span>
                      <span>Reliable power supply with backup systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-garret-500 mr-2">•</span>
                      <span>Water supply and treatment facilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-garret-500 mr-2">•</span>
                      <span>Waste management and recycling services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-garret-500 mr-2">•</span>
                      <span>Telecommunications and internet services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-garret-500 mr-2">•</span>
                      <span>Natural gas supply for industrial processes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-garret-500 mb-6">Schedule a Facility Tour</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              See our world-class facilities in person. Our team would be happy to show you around and discuss how we can accommodate your business needs.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-garret-500 hover:bg-garret-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Request a Tour
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;
