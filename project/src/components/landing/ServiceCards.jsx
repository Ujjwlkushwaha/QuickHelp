import { useNavigate } from 'react-router-dom';

const ServiceCards = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Professional Cooks',
      description: 'Experienced chefs and cooks for your events, daily meals, or special occasions.',
      icon: '👨‍🍳',
      image: 'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'from-orange-400 to-red-500',
      features: ['Custom Menus', 'Event Catering', 'Daily Meal Prep', 'Dietary Restrictions'],
      price: 'Starting at $45/hour',
      rating: 4.9,
      providers: 1200
    },
    {
      title: 'Skilled Mechanics',
      description: 'Certified mechanics for vehicle repairs, maintenance, and emergency services.',
      icon: '🔧',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'from-blue-400 to-indigo-600',
      features: ['Mobile Repairs', '24/7 Emergency', 'All Vehicle Types', 'Fair Pricing'],
      price: 'Starting at $60/hour',
      rating: 4.8,
      providers: 850
    },
    {
      title: 'Expert Tutors',
      description: 'Qualified tutors for academic subjects, skills training, and professional development.',
      icon: '📚',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'from-green-400 to-emerald-600',
      features: ['All Subjects', 'Flexible Schedule', 'Online & Offline', 'Exam Preparation'],
      price: 'Starting at $35/hour',
      rating: 4.9,
      providers: 950
    },
    {
      title: 'Home Cleaners',
      description: 'Professional cleaning services for homes, offices, and commercial spaces.',
      icon: '🧹',
      image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'from-purple-400 to-pink-500',
      features: ['Deep Cleaning', 'Regular Maintenance', 'Eco-Friendly', 'Insured & Bonded'],
      price: 'Starting at $25/hour',
      rating: 4.7,
      providers: 680
    },
    {
      title: 'Electricians',
      description: 'Licensed electricians for installations, repairs, and electrical maintenance.',
      icon: '⚡',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'from-yellow-400 to-orange-500',
      features: ['Licensed & Insured', 'Emergency Service', 'Smart Home Setup', 'Safety Inspections'],
      price: 'Starting at $75/hour',
      rating: 4.8,
      providers: 420
    },
    {
      title: 'Plumbers',
      description: 'Professional plumbing services for repairs, installations, and maintenance.',
      icon: '🔧',
      image: 'https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'from-cyan-400 to-blue-500',
      features: ['24/7 Emergency', 'Leak Detection', 'Pipe Installation', 'Water Heater Service'],
      price: 'Starting at $65/hour',
      rating: 4.6,
      providers: 380
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Popular Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most requested services and connect with verified professionals in your area
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-0 group cursor-pointer overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="flex">
                      {renderStars(service.rating)}
                    </div>
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                  <div className="text-sm opacity-90">{service.providers} providers</div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg sm:text-xl font-bold text-primary-600">{service.price}</span>
                  <span className="text-sm text-gray-500">per service</span>
                </div>

                <button 
                  onClick={() => navigate('/login')}
                  className="w-full py-3 px-6 bg-primary-50 text-primary-600 font-semibold rounded-xl hover:bg-primary-100 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white transform group-hover:scale-105"
                >
                  Find Providers
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button 
            onClick={() => navigate('/login')}
            className="btn-primary text-lg px-8 py-4"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;