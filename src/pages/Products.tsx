import React from 'react';
import { Phone, Headphones, Building, Shield, Zap, Users } from 'lucide-react';

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our suite of AI-powered voice solutions designed to revolutionize customer interactions
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Phone />,
                title: "Smart Voice Response",
                description: "Advanced AI-powered call routing and automation system",
                features: [
                  "Natural language processing",
                  "Context-aware responses",
                  "Multi-language support"
                ]
              },
              {
                icon: <Headphones />,
                title: "Customer Support AI",
                description: "24/7 automated customer service solution",
                features: [
                  "Instant query resolution",
                  "Seamless human handoff",
                  "Custom voice personality"
                ]
              },
              {
                icon: <Building />,
                title: "Enterprise Solutions",
                description: "Scalable voice automation for large organizations",
                features: [
                  "High-volume call handling",
                  "Custom integration options",
                  "Advanced analytics"
                ]
              },
              {
                icon: <Shield />,
                title: "Emergency Services",
                description: "Rapid response system for emergency situations",
                features: [
                  "Priority routing",
                  "Real-time transcription",
                  "Location tracking"
                ]
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    {React.cloneElement(product.icon, { className: "h-6 w-6 text-indigo-600" })}
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{product.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-700">
                      <Zap className="h-4 w-4 text-indigo-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Easy Integration</h2>
            <p className="text-xl text-gray-600">
              Seamlessly integrate with your existing systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-indigo-600" />,
                title: "Quick Setup",
                description: "Get started in minutes with our simple integration process"
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "API Access",
                description: "Robust API endpoints for custom integration needs"
              },
              {
                icon: <Shield className="h-8 w-8 text-indigo-600" />,
                title: "Secure & Reliable",
                description: "Enterprise-grade security with 99.9% uptime guarantee"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;