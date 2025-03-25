
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const Zones = () => {
  const zones = [
    {
      id: "industrial",
      title: "Industrial Zone",
      description: "Our state-of-the-art industrial zone provides the perfect environment for manufacturing, logistics, and production facilities.",
      image: "https://images.unsplash.com/photo-1565610222536-ef113ca46fb7?auto=format&fit=crop&q=80&w=2000",
      benefits: [
        "Strategic location with excellent connectivity",
        "24/7 security and surveillance",
        "Advanced utility infrastructure",
        "Customizable plot sizes from 1,000 to 50,000 sq. meters",
        "Dedicated power substations",
        "Waste management facilities",
        "Integrated logistics support"
      ]
    },
    {
      id: "commercial",
      title: "Commercial Zone",
      description: "Our commercial zone offers premium office and retail spaces designed to meet the needs of modern businesses.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000",
      benefits: [
        "Grade A office buildings with flexible layouts",
        "Retail spaces in high-traffic areas",
        "Business center with conference facilities",
        "High-speed internet and telecommunications",
        "Food courts and dining options",
        "Banking and financial services",
        "Ample parking space"
      ]
    },
    {
      id: "residential",
      title: "Residential Zone",
      description: "Our residential zone offers comfortable housing options for staff and executives working in the investment park.",
      image: "https://images.unsplash.com/photo-1558290815-54c179e734cd?auto=format&fit=crop&q=80&w=2000",
      benefits: [
        "Various housing options from studios to villas",
        "Landscaped green spaces and recreational areas",
        "Community centers and social facilities",
        "Educational institutions within reach",
        "Healthcare clinics and services",
        "Retail and convenience stores",
        "Sports facilities and gymnasiums"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-garret-500 mb-4">Investment Zones</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our specialized investment zones designed to cater to different business needs and sectors.
            </p>
          </div>

          <div className="space-y-20">
            {zones.map((zone, index) => (
              <section key={zone.id} id={zone.id} className="scroll-mt-20">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  <div className="lg:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={zone.image} 
                        alt={zone.title} 
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-garret-500 mb-4">{zone.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{zone.description}</p>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
                      {zone.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-garret-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <a 
                      href="#contact"
                      className="inline-block mt-8 bg-garret-500 hover:bg-garret-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
                    >
                      Inquire About {zone.title}
                    </a>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section className="mt-20 bg-garret-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-garret-500 mb-3">Zone Selection Guide</h2>
              <p className="text-lg">Not sure which zone is right for your business? Use our guide to find the perfect match.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-garret-500 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Business Type</th>
                    <th className="py-3 px-4 text-center">Industrial Zone</th>
                    <th className="py-3 px-4 text-center">Commercial Zone</th>
                    <th className="py-3 px-4 text-center">Residential Zone</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4 font-medium">Manufacturing</td>
                    <td className="py-3 px-4 text-center">✓ Ideal</td>
                    <td className="py-3 px-4 text-center">-</td>
                    <td className="py-3 px-4 text-center">-</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Warehouse & Logistics</td>
                    <td className="py-3 px-4 text-center">✓ Ideal</td>
                    <td className="py-3 px-4 text-center">-</td>
                    <td className="py-3 px-4 text-center">-</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Corporate Office</td>
                    <td className="py-3 px-4 text-center">-</td>
                    <td className="py-3 px-4 text-center">✓ Ideal</td>
                    <td className="py-3 px-4 text-center">-</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Retail Business</td>
                    <td className="py-3 px-4 text-center">-</td>
                    <td className="py-3 px-4 text-center">✓ Ideal</td>
                    <td className="py-3 px-4 text-center">♦ Suitable</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Staff Housing</td>
                    <td className="py-3 px-4 text-center">-</td>
                    <td className="py-3 px-4 text-center">-</td>
                    <td className="py-3 px-4 text-center">✓ Ideal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Zones;
