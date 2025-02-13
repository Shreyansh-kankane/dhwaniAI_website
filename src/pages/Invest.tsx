import React from 'react';
import { ArrowRight, TrendingUp, Shield, Users, Rocket, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Invest = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                India's First SVR at the Cost of IVR
              </h1>
              <p className="text-xl mb-8">
                Join us in revolutionizing business communications with AI-powered Smart Voice Response technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Watch Founder's Message
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Product Demo
                </button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title="Dhwani AI Founder's Message"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Invest in Dhwani AI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of the voice tech revolution and help shape the future of business communication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="h-8 w-8 text-indigo-600" />,
                title: "First-of-Its-Kind SVR",
                description: "AI-driven voice response technology at the cost of traditional IVRs"
              },
              {
                icon: <Shield className="h-8 w-8 text-indigo-600" />,
                title: "Market-Ready Tech",
                description: "Scalable, cost-effective, and built for real-world deployment"
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "Proven Execution",
                description: "Team of IIT Kharagpur & PEC engineers with deep AI expertise"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
                title: "Strong Traction",
                description: "₹35L secured; raising more to scale operations"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-indigo-50 p-3 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "500K+", label: "Calls Handled" },
              { number: "99.9%", label: "Accuracy Rate" },
              { number: "60%", label: "Cost Reduction" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{metric.number}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Shape the Future of Voice Technology?</h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Connect With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Invest;