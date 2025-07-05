import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const navigate = useNavigate();

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
      location: 'Your Home'
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
      location: 'Mobile Service'
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
      location: 'Online'
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
      location: 'Your Home'
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
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
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
    // Simulate profile update
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg lg:text-xl">LH</span>
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-gray-900">Customer Dashboard</h1>
                <p className="text-xs lg:text-sm text-gray-500 hidden sm:block">Welcome back, {profileData.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <button 
                onClick={() => navigate('/login')}
                className="btn-primary text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3"
              >
                Book Service
              </button>
              <button 
                onClick={() => navigate('/')}
                className="text-gray-500 hover:text-gray-700 text-sm lg:text-base"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto container-padding py-6 lg:py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <div className="card p-4 lg:p-6 text-center">
            <div className="text-xl lg:text-2xl font-bold text-primary-600 mb-1">
              {bookings.length}
            </div>
            <div className="text-xs lg:text-sm text-gray-600">Total Bookings</div>
          </div>
          <div className="card p-4 lg:p-6 text-center">
            <div className="text-xl lg:text-2xl font-bold text-secondary-600 mb-1">
              {bookings.filter(b => b.status === 'completed').length}
            </div>
            <div className="text-xs lg:text-sm text-gray-600">Completed</div>
          </div>
          <div className="card p-4 lg:p-6 text-center">
            <div className="text-xl lg:text-2xl font-bold text-accent-600 mb-1">
              ${bookings.reduce((sum, b) => sum + parseInt(b.price.slice(1)), 0)}
            </div>
            <div className="text-xs lg:text-sm text-gray-600">Total Spent</div>
          </div>
          <div className="card p-4 lg:p-6 text-center">
            <div className="text-xl lg:text-2xl font-bold text-purple-600 mb-1">4.8</div>
            <div className="text-xs lg:text-sm text-gray-600">Avg Rating</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {[
                { id: 'bookings', label: 'My Bookings', icon: '📅', count: bookings.length },
                { id: 'profile', label: 'Profile', icon: '👤' },
                { id: 'messages', label: 'Messages', icon: '💬', count: unreadCount }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                    activeTab === item.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.count > 0 && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activeTab === item.id ? 'bg-white text-primary-600' : 'bg-primary-100 text-primary-600'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'bookings' && (
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">My Bookings</h2>
                  <button 
                    onClick={() => navigate('/login')}
                    className="btn-primary w-full sm:w-auto"
                  >
                    New Booking
                  </button>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <input
                      type="search"
                      placeholder="Search bookings..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="grid gap-4 lg:gap-6">
                  {filteredBookings.map((booking) => (
                    <div key={booking.id} className="card p-4 lg:p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-start space-x-4">
                            <img
                              src={booking.providerImage}
                              alt={booking.provider}
                              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover ring-2 ring-gray-200"
                            />
                            <div className="flex-1">
                              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1">
                                {booking.service}
                              </h3>
                              <p className="text-gray-600 mb-2">with {booking.provider}</p>
                              <p className="text-sm text-gray-500 mb-3">{booking.description}</p>
                              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                                <span className="flex items-center">
                                  <span className="mr-1">📅</span>
                                  {booking.date}
                                </span>
                                <span className="flex items-center">
                                  <span className="mr-1">🕐</span>
                                  {booking.time}
                                </span>
                                <span className="flex items-center">
                                  <span className="mr-1">📍</span>
                                  {booking.location}
                                </span>
                                <span className="flex items-center font-semibold text-primary-600">
                                  <span className="mr-1">💰</span>
                                  {booking.price}
                                </span>
                              </div>
                              <div className="flex items-center mt-2">
                                <div className="flex mr-2">
                                  {renderStars(booking.rating)}
                                </div>
                                <span className="text-sm text-gray-600">{booking.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                          <div className="flex space-x-2 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none text-primary-600 hover:text-primary-700 font-medium text-sm px-3 py-1 hover:bg-primary-50 rounded-lg transition-colors duration-300">
                              View Details
                            </button>
                            {booking.status === 'completed' && (
                              <button className="flex-1 sm:flex-none text-secondary-600 hover:text-secondary-700 font-medium text-sm px-3 py-1 hover:bg-secondary-50 rounded-lg transition-colors duration-300">
                                Review
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredBookings.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📅</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings found</h3>
                    <p className="text-gray-600 mb-6">
                      {searchQuery || filterStatus !== 'all' 
                        ? 'Try adjusting your search or filter criteria'
                        : 'Start by booking your first service'
                      }
                    </p>
                    <button 
                      onClick={() => navigate('/login')}
                      className="btn-primary"
                    >
                      Book a Service
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Profile Settings</h2>
                <div className="card p-6 lg:p-8">
                  <form onSubmit={handleProfileUpdate}>
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Avatar Section */}
                      <div className="lg:w-1/3">
                        <div className="text-center">
                          <img
                            src={profileData.avatar}
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-gray-200 mb-4"
                          />
                          <button
                            type="button"
                            className="btn-outline text-sm"
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
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                          <button type="submit" className="btn-primary flex-1 sm:flex-none">
                            Save Changes
                          </button>
                          <button type="button" className="btn-outline flex-1 sm:flex-none">
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
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Messages</h2>
                  <span className="text-sm text-gray-600">
                    {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`card p-4 lg:p-6 ${message.unread ? 'ring-2 ring-primary-200 bg-primary-25' : ''} hover:shadow-xl transition-all duration-300`}>
                      <div className="flex items-start space-x-4">
                        <img
                          src={message.fromImage}
                          alt={message.from}
                          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover ring-2 ring-gray-200"
                        />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                            <h3 className="font-semibold text-gray-900">{message.from}</h3>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-500">{message.time}</span>
                              {message.unread && (
                                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                              )}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{message.message}</p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <button className="btn-primary text-sm px-4 py-2">
                              Reply
                            </button>
                            <button className="btn-outline text-sm px-4 py-2">
                              View Booking
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {messages.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">💬</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No messages yet</h3>
                    <p className="text-gray-600">
                      Messages from your service providers will appear here
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;