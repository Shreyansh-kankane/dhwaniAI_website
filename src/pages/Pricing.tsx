import React from 'react';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '499',
      description: 'Perfect for small businesses starting with AI voice solutions',
      features: [
        'Up to 1,000 minutes/month',
        'Basic voice customization',
        'Standard support',
        'Basic analytics',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '999',
      description: 'Ideal for growing businesses with moderate call volumes',
      features: [
        'Up to 5,000 minutes/month',
        'Advanced voice customization',
        'Priority support',
        'Advanced analytics',
        'Phone & email support',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with specific requirements',
      features: [
        'Unlimited minutes',
        'Full voice customization',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Custom development',
        'SLA guarantee',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-xl p-8 ${
                  tier.popular ? 'ring-2 ring-indigo-600 relative' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                    <div className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    ${tier.price}
                    {tier.price !== 'Custom' && <span className="text-lg font-normal text-gray-500">/mo</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-indigo-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                question: "How are minutes calculated?",
                answer: "Minutes are calculated based on actual talk time. You're only charged for the time your AI agent is actively engaged in calls."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "What happens if I exceed my monthly minutes?",
                answer: "Additional minutes are billed at a standard overage rate. We'll notify you before you reach your limit."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;