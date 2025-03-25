
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-garret-500 mb-6">About Kish Investment Park</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">Since our establishment, Kish Investment Park has been a cornerstone of industrial development and international trade in the region, offering unparalleled connectivity between Kish Island and global markets.</p>
              
              <h2>Our History</h2>
              <p>Kish Investment Park was founded with a vision to create a world-class industrial and commercial hub that leverages the strategic location of Kish Island as a gateway to international markets. Over the years, we have grown from a modest industrial zone to a comprehensive business ecosystem housing 1444 factories and facilities across various sectors.</p>
              
              <h2>Our Mission</h2>
              <p>To provide state-of-the-art infrastructure and services that enable businesses to thrive in a global marketplace, while contributing to the economic development of the region through sustainable practices and innovation.</p>
              
              <h2>Our Vision</h2>
              <p>To be the premier industrial and commercial park in the Middle East, connecting businesses from Kish to Dubai and from Dubai to the world, fostering economic growth, technological advancement, and sustainable development.</p>
              
              <h2>Strategic Location</h2>
              <p>Located in Kish Island with direct access to Dubai, our investment park serves as a strategic hub for businesses looking to expand their operations in the Middle East, Asia, and beyond. Our proximity to major shipping routes and international airports provides our tenants with unparalleled logistics advantages.</p>
              
              <h2>Leadership Team</h2>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Ahmed Al-Mansoori</h3>
                  <p className="text-garret-400 mb-4">Chief Executive Officer</p>
                  <p>With over 25 years of experience in industrial development, Ahmed has been instrumental in transforming Kish Investment Park into a global business hub.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Sara Al-Hashimi</h3>
                  <p className="text-garret-400 mb-4">Chief Operations Officer</p>
                  <p>Sara oversees all operational aspects of the park, ensuring that our infrastructure and services meet the highest international standards.</p>
                </div>
              </div>
              
              <h2>Partners & Collaborations</h2>
              <p>We have established strategic partnerships with leading organizations across various sectors to provide our tenants with access to a wide range of resources and opportunities. Our collaborations with government agencies, academic institutions, and industry associations further enhance the value proposition of Kish Investment Park.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
