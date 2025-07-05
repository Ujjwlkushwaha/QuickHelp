import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      annualPrice: 'Free',
      period: '',
      description: 'Perfect for occasional service needs',
      features: [
        'Browse service providers',
        'Basic customer support',
        'Standard booking',
        'Payment protection',
        'Service history',
        'Mobile app access'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'btn-outline',
      popular: false,
      savings: null
    },
    {
      name: 'Premium',
      price: '$9.99',
      annualPrice: '$99.99',
      period: '/month',
      description: 'Ideal for regular service requirements',
      features: [
        'Everything in Basic',
        'Priority booking',
        'Premium customer support',
        'Exclusive discounts (up to 15%)',
        'Advanced filters',
        'Service history tracking',
        'Instant notifications',
        'Flexible scheduling'
      ],
      buttonText: 'Choose Premium',
      buttonStyle: 'btn-primary',
      popular: true,
      savings: '17%'
    },
    {
      name: 'Business',
      price: '$29.99',
      annualPrice: '$299.99',
      period: '/month',
      description: 'Best for businesses and frequent users',
      features: [
        'Everything in Premium',
        'Bulk booking discounts (up to 25%)',
        'Dedicated account manager',
        'Custom service packages',
        'Analytics dashboard',
        'API access',
        'Priority customer support',
        'Team management',
        'Invoice management'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'btn-outline',
      popular: false,
      savings: '17%'
    }
  ];

  const handlePlanSelect = (plan) => {
    if (plan.name === 'Business') {
      // Scroll to contact section or open contact modal
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the plan that best fits your needs. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2 py-1 rounded-full">
                Save up to 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`card p-6 sm:p-8 relative ${plan.popular ? 'ring-2 ring-primary-500 scale-105 lg:scale-110' : ''} transition-all duration-300 hover:shadow-2xl`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {isAnnual ? plan.annualPrice : plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600">
                      {isAnnual ? '/year' : plan.period}
                    </span>
                  )}
                </div>
                {isAnnual && plan.savings && (
                  <div className="text-sm text-secondary-600 font-medium">
                    Save {plan.savings} annually
                  </div>
                )}
                <p className="text-gray-600 text-sm sm:text-base">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-5 h-5 bg-secondary-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handlePlanSelect(plan)}
                className={`w-full ${plan.buttonStyle} ${plan.popular ? 'transform hover:scale-105' : ''} transition-all duration-300`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer enterprise solutions with custom pricing, dedicated support, and advanced features tailored to your business needs.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Contact our sales team →
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "Is there a free trial?",
                answer: "Our Basic plan is completely free forever. You can upgrade to Premium anytime to access advanced features."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee for all paid plans, no questions asked."
              }
            ].map((faq, index) => (
              <div key={index} className="card p-6">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;