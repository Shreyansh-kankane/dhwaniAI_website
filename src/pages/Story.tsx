import React from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';

const Story = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              From a simple idea to revolutionizing voice communication with AI
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-indigo-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To create a world where human-AI voice interaction is seamless, natural, and accessible to everyone. We envision a future where businesses can provide exceptional customer service through AI-powered conversations that are indistinguishable from human interactions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-indigo-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To revolutionize customer service through cutting-edge AI voice technology that delivers natural, efficient, and cost-effective communication solutions. We're committed to helping businesses provide better customer experiences while reducing operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="space-y-12">
            {[
              {
                year: "2020",
                title: "The Beginning",
                description: "Founded with a vision to transform voice communication using AI"
              },
              {
                year: "2021",
                title: "First Breakthrough",
                description: "Launched our first AI voice solution with 90% accuracy"
              },
              {
                year: "2022",
                title: "Rapid Growth",
                description: "Expanded to serve 100+ enterprise clients globally"
              },
              {
                year: "2023",
                title: "Innovation Leader",
                description: "Achieved industry-leading 0.5ms latency in voice processing"
              }
            ].map((milestone, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 w-px h-full bg-indigo-200" />
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-indigo-600 -translate-x-1/2" />
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-sm font-semibold text-indigo-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-8 w-8 text-indigo-600" />,
                title: "Innovation First",
                description: "Constantly pushing the boundaries of what's possible with AI"
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "Customer Success",
                description: "Your success is our success - we're committed to your growth"
              },
              {
                icon: <Award className="h-8 w-8 text-indigo-600" />,
                title: "Excellence",
                description: "Delivering the highest quality in everything we do"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;