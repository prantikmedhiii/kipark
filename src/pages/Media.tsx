
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Download, ExternalLink, Clock, User, FileText } from 'lucide-react';

const Media = () => {
  const pressReleases = [
    {
      title: "Kish Investment Park Announces Expansion of Industrial Zone",
      date: "October 15, 2023",
      summary: "Kish Investment Park has announced a major expansion of its industrial zone, adding 200 hectares of new development area to accommodate growing demand for manufacturing facilities.",
      link: "#"
    },
    {
      title: "New Strategic Partnership with European Manufacturing Alliance",
      date: "September 20, 2023",
      summary: "Kish Investment Park has signed a strategic partnership agreement with the European Manufacturing Alliance to facilitate technology transfer and market access for businesses operating in the park.",
      link: "#"
    },
    {
      title: "Sustainability Initiative Receives International Recognition",
      date: "August 25, 2023",
      summary: "Kish Investment Park's commitment to sustainable development has been recognized with an international award for its innovative approach to environmental conservation and energy efficiency.",
      link: "#"
    }
  ];

  const publications = [
    {
      title: "Kish Investment Park Annual Report 2023",
      type: "PDF",
      size: "4.2 MB",
      date: "October 1, 2023",
      link: "#"
    },
    {
      title: "Economic Impact Study: Kish Investment Park",
      type: "PDF",
      size: "2.8 MB",
      date: "July 15, 2023",
      link: "#"
    },
    {
      title: "Environmental Sustainability Report Q2 2023",
      type: "PDF",
      size: "3.5 MB",
      date: "July 5, 2023",
      link: "#"
    },
    {
      title: "Investment Guide: Opportunities in Kish",
      type: "PDF",
      size: "5.1 MB",
      date: "June 10, 2023",
      link: "#"
    }
  ];

  const videos = [
    {
      title: "Kish Investment Park: A Gateway to Global Markets",
      thumbnail: "https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&q=80&w=1000",
      duration: "4:32",
      date: "September 15, 2023",
      link: "#"
    },
    {
      title: "Manufacturing Excellence: Success Stories from Kish",
      thumbnail: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=1000",
      duration: "6:45",
      date: "August 20, 2023",
      link: "#"
    },
    {
      title: "Infrastructure Development: Building for the Future",
      thumbnail: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1000",
      duration: "5:18",
      date: "July 10, 2023",
      link: "#"
    }
  ];

  const mediaContacts = [
    {
      name: "Sarah Johnson",
      position: "Media Relations Manager",
      email: "sarah.johnson@kishinvestmentpark.com",
      phone: "+971 4 555 1234"
    },
    {
      name: "Mohammed Al-Farsi",
      position: "Public Relations Director",
      email: "mohammed.alfarsi@kishinvestmentpark.com",
      phone: "+971 4 555 5678"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-garret-500 mb-4">Media Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, publications, and multimedia content about Kish Investment Park.
            </p>
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-garret-500 mb-8">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium mb-2 hover:text-garret-500 transition-colors">
                    <a href={release.link}>{release.title}</a>
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{release.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{release.summary}</p>
                  <a 
                    href={release.link} 
                    className="inline-flex items-center text-garret-500 hover:text-garret-600 font-medium"
                  >
                    Read Full Release
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a 
                href="#" 
                className="inline-block bg-white hover:bg-garret-50 text-garret-500 font-medium py-2 px-6 rounded-md border border-garret-200 transition-colors"
              >
                View All Press Releases
              </a>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-garret-500 mb-8">Publications</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-12 bg-garret-50 p-4 font-medium text-garret-500">
                <div className="col-span-5">Document</div>
                <div className="col-span-2 text-center">Type</div>
                <div className="col-span-3 text-center">Date</div>
                <div className="col-span-2 text-center">Download</div>
              </div>
              
              {publications.map((publication, index) => (
                <div key={index} className="grid grid-cols-12 p-4 border-b last:border-b-0 items-center hover:bg-gray-50">
                  <div className="col-span-5 font-medium flex items-center">
                    <FileText className="h-4 w-4 text-garret-500 mr-2" />
                    {publication.title}
                  </div>
                  <div className="col-span-2 text-center text-gray-600">{publication.type}</div>
                  <div className="col-span-3 text-center text-gray-600">{publication.date}</div>
                  <div className="col-span-2 text-center">
                    <a 
                      href={publication.link} 
                      className="inline-flex items-center text-garret-500 hover:text-garret-600"
                      download
                    >
                      <Download className="mr-1 w-4 h-4" />
                      {publication.size}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-garret-500 mb-8">Videos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative aspect-video">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-md">
                        <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-garret-500 ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{video.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a 
                href="#" 
                className="inline-block bg-white hover:bg-garret-50 text-garret-500 font-medium py-2 px-6 rounded-md border border-garret-200 transition-colors"
              >
                View All Videos
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-garret-500 mb-8">Media Contacts</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="mb-6">
                For media inquiries, please contact our media relations team. We are available to assist with interview requests, information about Kish Investment Park, and any other media-related questions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {mediaContacts.map((contact, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-start">
                      <User className="h-5 w-5 text-garret-500 mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <h3 className="font-medium">{contact.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{contact.position}</p>
                        <p className="text-sm">
                          <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-garret-500 hover:underline">{contact.email}</a>
                        </p>
                        <p className="text-sm">
                          <strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-garret-500 hover:underline">{contact.phone}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Media;
