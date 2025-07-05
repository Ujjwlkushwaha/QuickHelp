import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/login');
    }
  };

  const popularServices = ['Cook', 'Mechanic', 'Tutor', 'Cleaner', 'Electrician'];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 font-sans pt-20 overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-primary-200 via-accent-200 to-secondary-200 opacity-40 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-gradient-to-br from-secondary-200 via-primary-100 to-accent-100 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6 text-gray-900">
          Find Local Service
          <span className="block bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent animate-gradient-x">
            Providers
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
          Connect with trusted local professionals for all your home service needs. From cooking to repairs, find the perfect helper in your neighborhood.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-3 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 p-2 sm:p-3">
          <input
            type="text"
            placeholder="What service do you need?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 sm:py-4 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-base sm:text-lg font-medium rounded-lg"
          />
          <button
            type="submit"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-md hover:from-primary-700 hover:to-secondary-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 active:scale-95"
          >
            Find Services
          </button>
        </form>

        {/* Popular Services */}
        <div className="mt-2 flex flex-wrap justify-center gap-2 mb-8">
          <span className="text-primary-500 text-sm font-semibold">Popular:</span>
          {popularServices.map((service) => (
            <button
              key={service}
              onClick={() => navigate('/login')}
              className="text-primary-600 hover:text-white text-sm font-medium bg-primary-100 hover:bg-primary-500 px-4 py-1.5 rounded-full transition-all duration-200 shadow-sm border border-primary-200 cursor-pointer active:scale-95"
            >
              {service}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 w-full">
          <button
            onClick={() => navigate('/login')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-lg hover:from-primary-700 hover:to-secondary-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 active:scale-95"
          >
            Get Started Today
          </button>
          <button
            onClick={() => {
              const element = document.querySelector('#how-it-works');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg bg-white/80 border border-primary-200 text-primary-700 hover:bg-primary-50 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-200 active:scale-95"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 w-full">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 border border-primary-100">
            <div className="text-3xl sm:text-4xl font-extrabold text-primary-600 mb-2">10,000+</div>
            <div className="text-gray-700 text-base sm:text-lg font-medium">Happy Customers</div>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 border border-primary-100">
            <div className="text-3xl sm:text-4xl font-extrabold text-primary-600 mb-2">5,000+</div>
            <div className="text-gray-700 text-base sm:text-lg font-medium">Service Providers</div>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 border border-primary-100">
            <div className="text-3xl sm:text-4xl font-extrabold text-primary-600 mb-2">50+</div>
            <div className="text-gray-700 text-base sm:text-lg font-medium">Service Categories</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-7 h-12 border-2 border-primary-200 rounded-full flex justify-center items-start">
            <div className="w-1 h-4 bg-primary-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;