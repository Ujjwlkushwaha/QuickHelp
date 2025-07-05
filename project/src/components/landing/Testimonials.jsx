import { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Busy Mom',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'LocalHelper has been a lifesaver! I found an amazing cook who prepares healthy meals for my family. The booking process was so easy and the service is top-notch.',
      rating: 5,
      service: 'Professional Cooking',
      verified: true
    },
    {
      name: 'Michael Chen',
      role: 'Small Business Owner',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'As a business owner, I need reliable services quickly. LocalHelper connects me with skilled professionals who get the job done right the first time.',
      rating: 5,
      service: 'Electrical Services',
      verified: true
    },
    {
      name: 'Emily Rodriguez',
      role: 'College Student',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Finding a qualified tutor for my advanced calculus class was challenging until I discovered LocalHelper. My grades improved significantly!',
      rating: 5,
      service: 'Math Tutoring',
      verified: true
    },
    {
      name: 'David Thompson',
      role: 'Homeowner',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The mechanic I found through LocalHelper fixed my car at my house. Convenient, professional, and fairly priced. Highly recommend!',
      rating: 5,
      service: 'Auto Repair',
      verified: true
    },
    {
      name: 'Lisa Wang',
      role: 'Working Professional',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The cleaning service I booked was exceptional. They were thorough, professional, and used eco-friendly products. My home has never looked better!',
      rating: 5,
      service: 'House Cleaning',
      verified: true
    },
    {
      name: 'Robert Martinez',
      role: 'Retiree',
      location: 'Miami, FL',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'LocalHelper made it easy to find a reliable plumber for my kitchen renovation. The whole process was smooth and stress-free.',
      rating: 5,
      service: 'Plumbing',
      verified: true
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Our Users Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust LocalHelper for their service needs
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div key={index} className="card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto object-cover ring-4 ring-white shadow-lg"
                />
                {testimonial.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-600 mb-6 italic leading-relaxed text-sm sm:text-base">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {testimonial.role}
                </p>
                <p className="text-gray-400 text-xs">
                  {testimonial.location}
                </p>
                <div className="mt-2">
                  <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto object-cover ring-4 ring-white shadow-lg"
                  />
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-600 mb-4 italic leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-xs">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {testimonial.location}
                  </p>
                  <div className="mt-2">
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation for Desktop */}
        <div className="hidden lg:flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">4.9/5</div>
                <div className="text-gray-600 text-sm sm:text-base">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-secondary-600 mb-1">50,000+</div>
                <div className="text-gray-600 text-sm sm:text-base">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent-600 mb-1">98%</div>
                <div className="text-gray-600 text-sm sm:text-base">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;