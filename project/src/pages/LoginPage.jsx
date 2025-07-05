import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [userType, setUserType] = useState('customer');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Navigate based on user type
    switch (userType) {
      case 'customer':
        navigate('/user/dashboard');
        break;
      case 'worker':
        navigate('/worker/dashboard');
        break;
      case 'admin':
        navigate('/admin/dashboard');
        break;
      default:
        navigate('/');
    }
    
    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const userTypeInfo = {
    customer: {
      title: 'Find Services',
      description: 'Book trusted local service providers',
      icon: '👤',
      features: ['Browse services', 'Book appointments', 'Secure payments', 'Rate providers']
    },
    worker: {
      title: 'Offer Services',
      description: 'Connect with customers in your area',
      icon: '🔧',
      features: ['Create profile', 'Set availability', 'Receive bookings', 'Earn money']
    },
    admin: {
      title: 'Manage Platform',
      description: 'Oversee operations and users',
      icon: '⚙️',
      features: ['User management', 'Analytics', 'Content moderation', 'System settings']
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Back to Home Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>

        <div className="card p-6 sm:p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">LH</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome Back' : 'Join LocalHelper'}
            </h1>
            <p className="text-gray-600">
              {isLogin ? 'Sign in to your account' : 'Create your account to get started'}
            </p>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 mb-4 block">
              I want to:
            </label>
            <div className="grid grid-cols-1 gap-3">
              {Object.entries(userTypeInfo).map(([type, info]) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setUserType(type)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    userType === type
                      ? 'border-primary-500 bg-primary-50 shadow-lg scale-105'
                      : 'border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-25'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                      userType === type ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${userType === type ? 'text-primary-900' : 'text-gray-900'}`}>
                        {info.title}
                      </div>
                      <div className={`text-sm ${userType === type ? 'text-primary-700' : 'text-gray-600'}`}>
                        {info.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full btn-primary relative"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="loading-spinner mr-2"></div>
                  Processing...
                </div>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          {/* Features for selected user type */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">
              What you'll get as a {userType}:
            </h4>
            <ul className="space-y-1">
              {userTypeInfo[userType].features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"
              }
            </button>
          </div>

          {isLogin && (
            <div className="mt-4 text-center">
              <button className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-300">
                Forgot your password?
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;