import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Find Cooks', action: () => navigate('/login') },
        { label: 'Find Mechanics', action: () => navigate('/login') },
        { label: 'Find Tutors', action: () => navigate('/login') },
        { label: 'All Services', action: () => navigate('/login') },
        { label: 'Become a Provider', action: () => navigate('/login') }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', action: () => {} },
        { label: 'How It Works', action: () => {
          const element = document.querySelector('#how-it-works');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }},
        { label: 'Careers', action: () => {} },
        { label: 'Press', action: () => {} },
        { label: 'Blog', action: () => {} }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', action: () => {} },
        { label: 'Contact Us', action: () => {
          const element = document.querySelector('#contact');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }},
        { label: 'Safety', action: () => {} },
        { label: 'Trust & Safety', action: () => {} },
        { label: 'Community Guidelines', action: () => {} }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', action: () => {} },
        { label: 'Privacy Policy', action: () => {} },
        { label: 'Cookie Policy', action: () => {} },
        { label: 'GDPR', action: () => {} },
        { label: 'Accessibility', action: () => {} }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'F', url: '#' },
    { name: 'Twitter', icon: 'T', url: '#' },
    { name: 'Instagram', icon: 'I', url: '#' },
    { name: 'LinkedIn', icon: 'L', url: '#' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div 
                className="flex items-center mb-6 cursor-pointer group"
                onClick={() => navigate('/')}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">LH</span>
                </div>
                <span className="text-2xl lg:text-3xl font-bold group-hover:text-primary-400 transition-colors duration-300">
                  LocalHelper
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
                Connecting communities with trusted local service providers. 
                Your neighborhood's helping hand, available when you need it most.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3 text-sm lg:text-base">
                <div className="flex items-center group cursor-pointer">
                  <span className="mr-3 text-lg">📧</span>
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    support@localhelper.com
                  </span>
                </div>
                <div className="flex items-center group cursor-pointer">
                  <span className="mr-3 text-lg">📞</span>
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    1-800-LOCAL-HELP
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-lg">📍</span>
                  <span className="text-gray-400">Available in 50+ cities</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-lg">🕒</span>
                  <span className="text-gray-400">24/7 Customer Support</span>
                </div>
              </div>
            </div>

            {/* Footer links */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h3 className="font-semibold mb-4 lg:mb-6 text-white text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-2 lg:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={link.action}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base text-left block w-full hover:translate-x-1 transform transition-transform duration-300"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="border-t border-gray-800 pt-8 lg:pt-12 mb-8 lg:mb-12">
            <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
              <div className="mb-6 lg:mb-0">
                <h3 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-3">Stay Updated</h3>
                <p className="text-gray-400 text-sm lg:text-base">
                  Get the latest news, updates, and exclusive offers delivered to your inbox.
                </p>
              </div>
              <div className="lg:ml-8 lg:flex-shrink-0">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 lg:gap-2 max-w-md mx-auto lg:mx-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent flex-1 transition-all duration-300"
                    required
                  />
                  <button 
                    type="submit"
                    className="btn-primary px-6 py-3 whitespace-nowrap"
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                  </button>
                </form>
                {isSubscribed && (
                  <p className="text-secondary-400 text-sm mt-2 text-center lg:text-left">
                    Thank you for subscribing!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Social links and bottom info */}
          <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-gray-400 text-sm lg:text-base text-center lg:text-left">
              © 2024 LocalHelper. All rights reserved. Made with ❤️ for communities.
            </div>
            
            {/* Social media links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                  aria-label={social.name}
                >
                  <span className="text-gray-400 group-hover:text-white font-semibold">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* App download badges */}
          <div className="mt-8 lg:mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 mb-6 text-sm lg:text-base">Download our mobile app</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black hover:bg-gray-800 rounded-xl px-6 py-3 flex items-center space-x-3 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
                <div className="text-3xl">📱</div>
                <div className="text-white text-left">
                  <div className="text-xs text-gray-300 group-hover:text-gray-100">Download on the</div>
                  <div className="text-sm lg:text-base font-semibold">App Store</div>
                </div>
              </button>
              <button className="bg-black hover:bg-gray-800 rounded-xl px-6 py-3 flex items-center space-x-3 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
                <div className="text-3xl">🤖</div>
                <div className="text-white text-left">
                  <div className="text-xs text-gray-300 group-hover:text-gray-100">Get it on</div>
                  <div className="text-sm lg:text-base font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;