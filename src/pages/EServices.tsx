
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, Download, ExternalLink, CreditCard, Clipboard, UserCheck } from 'lucide-react';

const EServices = () => {
  const services = [
    {
      title: "Business Registration",
      icon: <UserCheck className="w-12 h-12 text-garret-500 mb-4" />,
      description: "Register your business and apply for licenses online through our streamlined application process.",
      link: "#"
    },
    {
      title: "Document Processing",
      icon: <FileText className="w-12 h-12 text-garret-500 mb-4" />,
      description: "Submit and track your documents electronically to save time and reduce paperwork.",
      link: "#"
    },
    {
      title: "Facility Bookings",
      icon: <Clipboard className="w-12 h-12 text-garret-500 mb-4" />,
      description: "Book meeting rooms, exhibition spaces, and other facilities through our online reservation system.",
      link: "#"
    },
    {
      title: "Online Payments",
      icon: <CreditCard className="w-12 h-12 text-garret-500 mb-4" />,
      description: "Make secure online payments for services, utilities, and other fees associated with your business.",
      link: "#"
    }
  ];

  const forms = [
    {
      title: "Business Registration Form",
      type: "PDF",
      size: "2.3 MB",
      link: "#"
    },
    {
      title: "License Renewal Application",
      type: "PDF",
      size: "1.5 MB",
      link: "#"
    },
    {
      title: "Customs Declaration Form",
      type: "PDF",
      size: "1.8 MB",
      link: "#"
    },
    {
      title: "Warehouse Lease Agreement",
      type: "PDF",
      size: "3.1 MB",
      link: "#"
    },
    {
      title: "Employee Work Permit Application",
      type: "PDF",
      size: "2.5 MB",
      link: "#"
    },
    {
      title: "Visitor Access Request Form",
      type: "PDF",
      size: "1.2 MB",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-garret-500 mb-4">E-Services & Forms</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive range of online services and downloadable forms to streamline your business operations.
            </p>
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-garret-500 mb-8">Online Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <a 
                      href={service.link} 
                      className="inline-flex items-center text-garret-500 hover:text-garret-600 font-medium"
                    >
                      Access Service
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-garret-500 mb-8">Downloadable Forms</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-12 bg-garret-50 p-4 font-medium text-garret-500">
                <div className="col-span-6 md:col-span-8">Document</div>
                <div className="col-span-3 md:col-span-2 text-center">Format</div>
                <div className="col-span-3 md:col-span-2 text-center">Size</div>
              </div>
              
              {forms.map((form, index) => (
                <div key={index} className="grid grid-cols-12 p-4 border-b last:border-b-0 items-center hover:bg-gray-50">
                  <div className="col-span-6 md:col-span-8 font-medium">{form.title}</div>
                  <div className="col-span-3 md:col-span-2 text-center text-gray-600">{form.type}</div>
                  <div className="col-span-3 md:col-span-2 text-center">
                    <a 
                      href={form.link} 
                      className="inline-flex items-center text-garret-500 hover:text-garret-600"
                      download
                    >
                      <Download className="mr-1 w-4 h-4" />
                      {form.size}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EServices;
