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
      features: ['Browse services', 'Book appointments', 'Secure payments', 'Rate providers'],
      illustration: '🏠'
    },
    worker: {
      title: 'Offer Services',
      description: 'Connect with customers in your area',
      icon: '🔧',
      features: ['Create profile', 'Set availability', 'Receive bookings', 'Earn money'],
      illustration: '🛠️'
    },
    admin: {
      title: 'Manage Platform',
      description: 'Oversee operations and users',
      icon: '⚙️',
      features: ['User management', 'Analytics', 'Content moderation', 'System settings'],
      illustration: '📊'
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-1500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Navigation */}
      <div className="relative z-20 p-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>
      </div>

      {/* Main Content - Full Screen Layout */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Section with Illustrations */}
            <div className="hidden lg:block space-y-12">
              {/* Branding Section */}
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      <span className="text-white font-bold text-3xl">LH</span>
                    </div>
                    {/* Decorative elements around logo */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      LocalHelper
                    </h1>
                    <p className="text-gray-600 text-xl mt-2">Connecting communities through trusted services</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                    {isLogin ? 'Welcome back!' : 'Join our community'}
                  </h2>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    {isLogin 
                      ? 'Sign in to access your account and discover amazing local services.'
                      : 'Create your account and start your journey with LocalHelper today.'
                    }
                  </p>
                </div>
              </div>

              {/* Interactive Illustration */}
              <div className="relative">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="text-center mb-6">
                    <div className="text-8xl mb-4 animate-bounce">
                      {userTypeInfo[userType].illustration}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {userTypeInfo[userType].title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {userTypeInfo[userType].description}
                    </p>
                  </div>
                  
                  {/* Feature cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {userTypeInfo[userType].features.map((feature, index) => (
                      <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating elements around illustration */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10K+</div>
                  <div className="text-gray-600">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-gray-600">Service Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">50+</div>
                  <div className="text-gray-600">Cities</div>
                </div>
              </div>
            </div>

            {/* Right Side - Form Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50">
              {/* Mobile Logo */}
              <div className="lg:hidden text-center mb-8">
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <span className="text-white font-bold text-3xl">LH</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {isLogin ? 'Welcome Back' : 'Join LocalHelper'}
                </h1>
                <p className="text-gray-600">
                  {isLogin ? 'Sign in to your account' : 'Create your account to get started'}
                </p>
              </div>

              {/* User Type Selection */}
              <div className="mb-8">
                <label className="text-sm font-semibold text-gray-700 mb-4 block">
                  I want to:
                </label>
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(userTypeInfo).map(([type, info]) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setUserType(type)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-xl ${
                        userType === type
                          ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl scale-105'
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-25'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                          userType === type ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <div className={`font-semibold text-lg transition-colors duration-300 ${userType === type ? 'text-blue-900' : 'text-gray-900'}`}>
                            {info.title}
                          </div>
                          <div className={`text-sm transition-colors duration-300 ${userType === type ? 'text-blue-700' : 'text-gray-600'}`}>
                            {info.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                )}

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your password"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm ${
                            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Confirm your password"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your phone number"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                      </div>
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                  </>
                )}

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Processing...
                    </div>
                  ) : (
                    isLogin ? 'Sign In' : 'Create Account'
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 hover:underline"
                >
                  {isLogin 
                    ? "Don&apos;t have an account? Sign up" 
                    : "Already have an account? Sign in"
                  }
                </button>
              </div>

              {isLogin && (
                <div className="mt-4 text-center">
                  <button className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-300 hover:underline">
                    Forgot your password?
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;