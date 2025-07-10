import { useNavigate } from 'react-router-dom';
import heroImg from '../../assets/hero-img.png';

const featureCards = [
  {
    icon: (
      <span className="text-3xl">🔒</span>
    ),
    title: 'Trustworthiness',
    desc: 'Building trust with clients by being transparent, honest, and reliable in all interactions, including respecting privacy.'
  },
  {
    icon: (
      <span className="text-3xl">🤝</span>
    ),
    title: 'Professionalism',
    desc: 'Conducting all cleaning tasks with professionalism, including arriving on time, adhering to safety standards.'
  },
  {
    icon: (
      <span className="text-3xl">😊</span>
    ),
    title: 'Customer Satisfaction',
    desc: 'Prioritizing the needs and preferences of customers and striving to exceed their expectations.'
  }
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#6dd5ed] via-[#2193b0] to-[#b2fefa]">
        {/* Dotted Vector Pattern */}
        <svg className="absolute left-0 top-0 w-full h-full z-0 opacity-30" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="1440" height="600" fill="url(#dots)" />
        </svg>
        {/* Decorative SVG Wave at Bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-32 z-0" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 C360,160 1080,0 1440,80 L1440,150 L0,150 Z" fill="#fff" fillOpacity="0.7" />
        </svg>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-24 gap-10 md:gap-0">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-xl text-left">
            {/* Badge */}
            <div className="flex items-center mb-4">
              <span className="bg-white/80 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2 shadow">
                <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full"></span>
                Fast and efficient service
              </span>
            </div>
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-xl">
              Seamless Door-to-Door Services by Trusted Local Professionals
            </h1>
            {/* Subtext */}
            <p className="text-white/90 text-lg mb-8 max-w-lg font-medium drop-shadow">
              We connect you with skilled local service providers who deliver reliable, door-to-door help for all your home and personal needs.
            </p>
            {/* CTA Buttons */}
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => navigate('/login')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg"
              >
                Request Service
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#how-it-works');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-white text-white font-semibold px-7 py-3 rounded-lg bg-transparent hover:bg-white hover:text-cyan-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white text-lg shadow"
              >
                Discover More
              </button>
            </div>
          </div>
          {/* Right: Image & Bubbles */}
          <div className="flex-1 flex items-center justify-center relative w-full md:w-1/2 min-h-[350px]">
            {/* Main Hero Image */}
            <div className="relative">
              <img
                src={heroImg}
                alt="Home cleaning professional"
                className="w-[620px] h-[520px] object-cover rounded-3xl "
                loading="lazy"
              />
              {/* Floating Bubbles */}
              <span className="absolute -top-6 -left-6 w-10 h-10 bg-white/40 rounded-full border-2 border-white/60"></span>
              <span className="absolute bottom-8 -right-8 w-7 h-7 bg-white/30 rounded-full border border-white/40"></span>
              <span className="absolute top-1/2 left-full w-4 h-4 bg-white/50 rounded-full"></span>
              <span className="absolute bottom-0 left-1/2 w-3 h-3 bg-white/30 rounded-full"></span>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Cards Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center transition-transform hover:scale-105">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{card.title}</h3>
              <p className="text-gray-500 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;