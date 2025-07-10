import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '#services' },
  { label: 'How It Works', path: '#how-it-works' },
  { label: 'Pricing', path: '#pricing' },
  { label: 'Contact', path: '#contact' },
  { label: 'Professionals', path: '/professionals' }
  // Removed Caretakers link
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('/');
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setActiveNav(path);
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-black backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group gap-2"
            onClick={() => { setActiveNav('/'); navigate('/'); }}
            tabIndex={0}
            aria-label="Go to Home"
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && (setActiveNav('/'), navigate('/'))}
          >
            
            <span className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 tracking-tight">
              <a href="/" className="hover:text-primary-600 transition-colors duration-300" >LocalHelper</a>
            </span>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center t gap-2 xl:gap-6">
            {navItems.map((item) => {
              const isActive = activeNav === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-4 py-2 transition-all duration-200 cursor-pointer transition-transform active:scale-95
                    ${isActive ? 'font-bold text-primary-600' : 'font-normal text-black hover:text-primary-600'}
                  `}
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-primary-600 rounded transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0'}
                    `}
                  />
                </button>
              );
            })}
          </div>


          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            <button
              onClick={() => navigate('/login')}
              className=""
            >
              <i className="fa-solid fa-user"></i>
            </button>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:bg-gray-200 transition-colors duration-200 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="w-7 h-7 flex flex-col justify-center items-center relative">
              <span className={`bg-gray-700 block transition-all duration-300 ease-in-out h-0.5 w-7 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1.5'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-in-out h-0.5 w-7 rounded-sm my-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-in-out h-0.5 w-7 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />


      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-50 w-4/5 max-w-xs h-full bg-white/80 backdrop-blur-xl shadow-2xl border-l border-gray-200/50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
        aria-label="Mobile menu"
      >
        <div className="flex flex-col h-full py-8 px-6 gap-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-tr from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center shadow">
              <span className="text-white font-bold text-lg">LH</span>
            </div>
            <span className="text-xl font-bold text-gray-900">LocalHelper</span>
          </div>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeNav === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left px-4 py-3 rounded-full font-semibold transition-all duration-200 focus:outline-none cursor-pointer transition-transform active:scale-95
                    ${isActive ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-md' : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'}
                  `}
                  aria-label={`Go to ${item.label}`}
                  style={{ position: 'relative' }}
                >
                  {item.label}
                  <span
                    className={`block absolute left-0 -bottom-1 h-0.5 bg-white rounded transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0'}
                    `}
                  />
                </button>
              );
            })}
          </div>
          <div className="mt-auto flex flex-col gap-2">
            <button
              onClick={() => navigate('/login')}
              className="w-full px-4 py-2 rounded-lg border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 font-semibold shadow-sm transition-colors duration-200 focus:outline-none focus:bg-primary-100 text-sm"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/login')}
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-tr from-primary-600 to-secondary-500 text-white font-semibold shadow-md hover:from-primary-700 hover:to-secondary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 text-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;