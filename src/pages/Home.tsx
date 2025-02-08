import React from 'react';
import { ArrowRight, Phone, Zap, DollarSign, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Transform Your Customer Service with AI-Powered Voice Solutions
              </h1>
              <p className="text-xl mb-8">
                Replace traditional IVR with human-like AI calls. Experience ultra-low latency of 0.5ms and industry-leading cost efficiency.
              </p>
              <div className="flex space-x-4">
                <Link to="/demo" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Request Demo
                </Link>
                <Link to="/products" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="AI Communication" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Dhwani AI?</h2>
            <p className="text-xl text-gray-600">Experience the future of customer communication</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="h-8 w-8 text-indigo-600" />,
                title: "Human-Like Interaction",
                description: "Natural conversations powered by advanced AI technology"
              },
              {
                icon: <Zap className="h-8 w-8 text-indigo-600" />,
                title: "Ultra-Low Latency",
                description: "Lightning-fast response time of 0.5ms"
              },
              {
                icon: <DollarSign className="h-8 w-8 text-indigo-600" />,
                title: "Cost-Effective",
                description: "Reduce operational costs while improving service quality"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Customer Service?</h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;