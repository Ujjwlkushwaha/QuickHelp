const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Search & Browse',
      description: 'Browse through our verified service providers or search for specific services in your area using our smart filters.',
      icon: '🔍',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      details: ['Location-based search', 'Filter by ratings', 'Compare prices', 'Read reviews']
    },
    {
      step: '02',
      title: 'Book & Schedule',
      description: 'Choose your preferred provider, select a time slot, and book your service with just a few clicks through our secure platform.',
      icon: '📅',
      image: 'https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      details: ['Real-time availability', 'Instant booking', 'Secure payments', 'Confirmation alerts']
    },
    {
      step: '03',
      title: 'Get Service & Pay',
      description: 'Enjoy professional service at your doorstep and pay securely through our platform with built-in protection.',
      icon: '✅',
      image: 'https://images.pexels.com/photos/5699485/pexels-photo-5699485.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      details: ['Quality guarantee', 'Secure payment', 'Rate & review', '24/7 support']
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting the help you need is simple and straightforward with our easy 3-step process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center">
              <div className="card p-6 sm:p-8 mb-6 relative overflow-hidden group">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.step}
                </div>
                
                {/* Step Image */}
                <div className="relative h-32 sm:h-40 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl sm:text-6xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                  {step.description}
                </p>

                {/* Step Details */}
                <ul className="space-y-2 text-left">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who trust LocalHelper for their service needs.
            </p>
            <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;