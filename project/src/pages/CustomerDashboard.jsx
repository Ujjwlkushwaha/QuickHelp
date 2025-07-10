import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const bookings = [
    {
      id: 1,
      service: 'Professional Cook',
      provider: 'Maria Rodriguez',
      providerImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-15',
      time: '2:00 PM',
      status: 'confirmed',
      price: '$45',
      rating: 4.9,
      description: 'Italian dinner for 4 people',
      location: 'Your Home',
      category: 'Food & Dining'
    },
    {
      id: 2,
      service: 'Car Mechanic',
      provider: 'John Smith',
      providerImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-18',
      time: '10:00 AM',
      status: 'pending',
      price: '$120',
      rating: 4.8,
      description: 'Brake pad replacement',
      location: 'Mobile Service',
      category: 'Automotive'
    },
    {
      id: 3,
      service: 'Math Tutor',
      provider: 'Dr. Sarah Wilson',
      providerImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-20',
      time: '4:00 PM',
      status: 'completed',
      price: '$60',
      rating: 5.0,
      description: 'Calculus tutoring session',
      location: 'Online',
      category: 'Education'
    },
    {
      id: 4,
      service: 'House Cleaning',
      provider: 'Clean Team Pro',
      providerImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-22',
      time: '9:00 AM',
      status: 'confirmed',
      price: '$80',
      rating: 4.7,
      description: 'Deep cleaning service',
      location: 'Your Home',
      category: 'Home Services'
    }
  ];

  const messages = [
    {
      id: 1,
      from: 'Maria Rodriguez',
      fromImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      message: 'Hi! I\'ll be arriving 10 minutes early to set up. Is that okay?',
      time: '2 hours ago',
      unread: true,
      bookingId: 1
    },
    {
      id: 2,
      from: 'John Smith',
      fromImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      message: 'I\'ve diagnosed the issue with your car. It needs a new brake pad.',
      time: '1 day ago',
      unread: false,
      bookingId: 2
    },
    {
      id: 3,
      from: 'Clean Team Pro',
      fromImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      message: 'We\'re confirmed for tomorrow at 9 AM. We\'ll bring all eco-friendly supplies.',
      time: '2 days ago',
      unread: true,
      bookingId: 4
    }
  ];

  const [profileData, setProfileData] = useState({
    name: 'John Customer',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed': return '✅';
      case 'pending': return '⏳';
      case 'completed': return '🎉';
      case 'cancelled': return '❌';
      default: return '📋';
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.provider.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || booking.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const unreadCount = messages.filter(msg => msg.unread).length;

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

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

  const stats = [
    {
      title: 'Total Bookings',
      value: bookings.length,
      icon: '📅',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Completed',
      value: bookings.filter(b => b.status === 'completed').length,
      icon: '✅',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'Total Spent',
      value: `$${bookings.reduce((sum, b) => sum + parseInt(b.price.slice(1)), 0)}`,
      icon: '💰',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Avg Rating',
      value: '4.8',
      icon: '⭐',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg lg:text-xl">LH</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Customer Dashboard
                </h1>
                <p className="text-sm text-gray-600 hidden sm:block">Welcome back, {profileData.name} 👋</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => navigate('/login')}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                ✨ Book Service
              </button>
              <div className="relative group" ref={dropdownRef}>
                <button 
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  <img
                    src={profileData.avatar}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-200"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute right-0 mt-2 w-64 sm:w-64 bg-white rounded-2xl shadow-xl border border-gray-200 transition-all duration-300 transform z-50 sm:group-hover:opacity-100 sm:group-hover:visible sm:group-hover:scale-100 ${
                  isProfileDropdownOpen 
                    ? 'opacity-100 visible scale-100' 
                    : 'opacity-0 invisible scale-95'
                }`}>
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <img
                        src={profileData.avatar}
                        alt="Profile"
                        className="w-12 h-12 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-indigo-100"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 truncate">{profileData.name}</p>
                        <p className="text-sm text-gray-600 truncate">{profileData.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2">
                    <button 
                      onClick={() => {
                        setActiveTab('profile');
                        setIsProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all duration-300"
                    >
                      <span className="text-lg flex-shrink-0">👤</span>
                      <span className="font-medium truncate">Profile Settings</span>
                    </button>
                    
                    <button 
                      onClick={() => {
                        setActiveTab('messages');
                        setIsProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all duration-300"
                    >
                      <span className="text-lg flex-shrink-0">💬</span>
                      <span className="font-medium truncate">Messages</span>
                      {unreadCount > 0 && (
                        <span className="ml-auto bg-indigo-600 text-white text-xs px-2 py-1 rounded-full flex-shrink-0">
                          {unreadCount}
                        </span>
                      )}
                    </button>
                    
                    <div className="border-t border-gray-100 my-2"></div>
                    
                    <button 
                      onClick={() => navigate('/')}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-300"
                    >
                      <span className="text-lg flex-shrink-0">🚪</span>
                      <span className="font-medium truncate">Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 lg:p-8 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">Good morning, {profileData.name}! 🌅</h2>
                <p className="text-indigo-100 text-lg">You have {bookings.filter(b => b.status === 'confirmed').length} upcoming services this week</p>
              </div>
              <div className="mt-6 lg:mt-0">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                  alt="Dashboard Illustration"
                  className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="mb-6">
                <img
                  src={profileData.avatar}
                  alt="Profile"
                  className="w-20 h-20 rounded-full mx-auto object-cover ring-4 ring-indigo-100 shadow-lg"
                />
                <h3 className="text-center text-lg font-semibold text-gray-900 mt-3">{profileData.name}</h3>
                <p className="text-center text-sm text-gray-600">{profileData.location}</p>
              </div>
              
              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: '🏠', count: null },
                  { id: 'bookings', label: 'My Bookings', icon: '📅', count: bookings.length },
                  { id: 'messages', label: 'Messages', icon: '💬', count: unreadCount },
                  { id: 'profile', label: 'Profile', icon: '👤', count: null }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.count !== null && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activeTab === item.id 
                          ? 'bg-white text-indigo-600' 
                          : 'bg-indigo-100 text-indigo-600'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <button 
                    onClick={() => navigate('/login')}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    🚀 Book New Service
                  </button>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    🆘 Get Support
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Recent Activity</h2>
                    <div className="text-sm text-gray-600">Last 7 days</div>
                  </div>
                  
                  <div className="space-y-4">
                    {bookings.slice(0, 3).map((booking) => (
                      <div key={booking.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${
                          booking.status === 'confirmed' ? 'from-emerald-500 to-emerald-600' :
                          booking.status === 'pending' ? 'from-amber-500 to-amber-600' :
                          'from-blue-500 to-blue-600'
                        } flex items-center justify-center text-white text-xl`}>
                          {getStatusIcon(booking.status)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{booking.service}</h3>
                          <p className="text-sm text-gray-600">with {booking.provider}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{booking.price}</p>
                          <p className="text-xs text-gray-500">{booking.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Services</h3>
                    <div className="space-y-3">
                      {bookings.filter(b => b.status === 'confirmed').slice(0, 2).map((booking) => (
                        <div key={booking.id} className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-xl">
                          <img src={booking.providerImage} alt={booking.provider} className="w-10 h-10 rounded-full object-cover" />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{booking.service}</p>
                            <p className="text-sm text-gray-600">{booking.date} at {booking.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Messages</h3>
                    <div className="space-y-3 ">
                      {messages.slice(0, 2).map((message) => (
                        <div key={message.id} className={`flex items-center space-x-3 p-3 rounded-xl ${message.unread ? 'bg-indigo-50' : 'bg-gray-50'}`}>
                          <img src={message.fromImage} alt={message.from} className="w-10 h-10 rounded-full object-cover" />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{message.from}</p>
                            <p className="text-sm text-gray-600 truncate text-wrap">{message.message}</p>
                          </div>
                          {message.unread && <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 lg:p-8 border-b border-gray-100">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">My Bookings</h2>
                      <p className="text-gray-600">Manage all your service bookings in one place</p>
                    </div>
                    <button 
                      onClick={() => navigate('/login')}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ New Booking
                    </button>
                  </div>

                  {/* Search and Filter */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <div className="flex-1 relative">
                      <input
                        type="search"
                        placeholder="Search bookings..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pl-12 border bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-4 py-3 border bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="all">All Status</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="space-y-6">
                    {filteredBookings.map((booking) => (
                      <div key={booking.id} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                          <div className="flex-1">
                            <div className="flex items-start space-x-4">
                              <div className="relative">
                                <img
                                  src={booking.providerImage}
                                  alt={booking.provider}
                                  className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white shadow-lg"
                                />
                                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                  booking.status === 'confirmed' ? 'bg-emerald-500 text-white' :
                                  booking.status === 'pending' ? 'bg-amber-500 text-white' :
                                  booking.status === 'completed' ? 'bg-blue-500 text-white' :
                                  'bg-red-500 text-white'
                                }`}>
                                  {getStatusIcon(booking.status)}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="text-xl font-bold text-gray-900">{booking.service}</h3>
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                  </span>
                                </div>
                                <p className="text-gray-600 mb-2">with <span className="font-semibold">{booking.provider}</span></p>
                                <p className="text-sm text-gray-500 mb-4">{booking.description}</p>
                                
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-gray-400">📅</span>
                                    <span className="text-gray-600">{booking.date}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-gray-400">🕐</span>
                                    <span className="text-gray-600">{booking.time}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-gray-400">📍</span>
                                    <span className="text-gray-600">{booking.location}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-gray-400">💰</span>
                                    <span className="font-semibold text-indigo-600">{booking.price}</span>
                                  </div>
                                </div>
                                
                                <div className="flex items-center mt-4">
                                  <div className="flex mr-2">
                                    {renderStars(booking.rating)}
                                  </div>
                                  <span className="text-sm text-gray-600">{booking.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
                            <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                              View Details
                            </button>
                            {booking.status === 'completed' && (
                              <button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                Write Review
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredBookings.length === 0 && (
                    <div className="text-center py-12">
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-6xl">📅</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">No bookings found</h3>
                      <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        {searchQuery || filterStatus !== 'all' 
                          ? 'Try adjusting your search or filter criteria'
                          : 'Start by booking your first service and we\'ll help you manage everything here'
                        }
                      </p>
                      <button 
                        onClick={() => navigate('/login')}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        🚀 Book Your First Service
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 lg:p-8 border-b border-gray-100">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Profile Settings</h2>
                  <p className="text-gray-600">Update your personal information and preferences</p>
                </div>
                
                <div className="p-6 lg:p-8">
                  <form onSubmit={handleProfileUpdate}>
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Avatar Section */}
                      <div className="lg:w-1/3">
                        <div className="text-center">
                          <div className="relative inline-block">
                            <img
                              src={profileData.avatar}
                              alt="Profile"
                              className="w-40 h-40 rounded-3xl object-cover ring-8 ring-indigo-100 shadow-xl"
                            />
                            <button
                              type="button"
                              className="absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                            >
                              📷
                            </button>
                          </div>
                          <button
                            type="button"
                            className="mt-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                          >
                            Change Photo
                          </button>
                        </div>
                      </div>

                      {/* Form Section */}
                      <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              value={profileData.name}
                              onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                              className="w-full px-4 py-3 border bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              value={profileData.email}
                              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                              className="w-full px-4 py-3 border bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Phone
                            </label>
                            <input
                              type="tel"
                              value={profileData.phone}
                              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Location
                            </label>
                            <input
                              type="text"
                              value={profileData.location}
                              onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                              className="w-full px-4 py-3 border bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                            />
                          </div>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                          <button type="submit" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1 sm:flex-none">
                            💾 Save Changes
                          </button>
                          <button type="button" className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1 sm:flex-none">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 lg:p-8 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Messages</h2>
                      <p className="text-gray-600">Stay connected with your service providers</p>
                    </div>
                    <span className="text-sm text-gray-600 bg-indigo-100 px-3 py-1 rounded-full">
                      {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 lg:p-8">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${
                        message.unread ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200' : 'bg-gray-50 border border-gray-200'
                      }`}>
                        <div className="flex items-start space-x-4">
                          <img
                            src={message.fromImage}
                            alt={message.from}
                            className="w-12 h-12 rounded-2xl object-cover ring-4 ring-white shadow-lg"
                          />
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                              <h3 className="font-semibold text-gray-900">{message.from}</h3>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-500">{message.time}</span>
                                {message.unread && (
                                  <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></div>
                                )}
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">{message.message}</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                💬 Reply
                              </button>
                              <button className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                📋 View Booking
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {messages.length === 0 && (
                    <div className="text-center py-12">
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-6xl">💬</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">No messages yet</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        Messages from your service providers will appear here. Start booking services to receive updates!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;