import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAvailable, setIsAvailable] = useState(true);
  const navigate = useNavigate();

  const jobRequests = [
    {
      id: 1,
      customer: 'Alice Johnson',
      service: 'Home Cooking',
      date: '2024-01-16',
      time: '6:00 PM',
      location: 'Downtown, NY',
      price: '$60',
      status: 'new',
      avatar: '👩‍🍳'
    },
    {
      id: 2,
      customer: 'Bob Wilson',
      service: 'Car Repair',
      date: '2024-01-17',
      time: '2:00 PM',
      location: 'Brooklyn, NY',
      price: '$150',
      status: 'accepted',
      avatar: '🔧'
    },
    {
      id: 3,
      customer: 'Emma Davis',
      service: 'House Cleaning',
      date: '2024-01-18',
      time: '9:00 AM',
      location: 'Queens, NY',
      price: '$80',
      status: 'new',
      avatar: '🧹'
    }
  ];

  const reviews = [
    {
      id: 1,
      customer: 'Sarah Miller',
      service: 'Dinner Preparation',
      rating: 5,
      comment: 'Excellent service! The food was delicious and Maria was very professional.',
      date: '2024-01-10',
      avatar: '👩'
    },
    {
      id: 2,
      customer: 'Mike Davis',
      service: 'Weekly Meal Prep',
      rating: 5,
      comment: 'Amazing cook! Highly recommend for anyone looking for healthy meal options.',
      date: '2024-01-08',
      avatar: '👨'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'requests', label: 'Job Requests', icon: '📋' },
    { id: 'schedule', label: 'Schedule', icon: '📅' },
    { id: 'reviews', label: 'Reviews', icon: '⭐' },
    { id: 'earnings', label: 'Earnings', icon: '💰' },
    { id: 'profile', label: 'Profile', icon: '👤' }
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-lg">LH</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Worker Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back, Maria!</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {/* Availability Toggle */}
              <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-4 py-2">
                <span className="text-sm font-medium text-gray-700">Available</span>
                <button
                  onClick={() => setIsAvailable(!isAvailable)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isAvailable ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      isAvailable ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
              <button 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <nav className="bg-white rounded-2xl shadow-lg p-6 space-y-3">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Navigation</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center group ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Jobs Completed</p>
                        <p className="text-3xl font-bold text-gray-900">24</p>
                        <p className="text-xs text-green-600">+12% this month</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">📊</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Average Rating</p>
                        <p className="text-3xl font-bold text-gray-900">4.9</p>
                        <p className="text-xs text-green-600">+0.2 this month</p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">⭐</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">This Month</p>
                        <p className="text-3xl font-bold text-gray-900">$1,240</p>
                        <p className="text-xs text-green-600">+8% vs last month</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">💰</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Repeat Customers</p>
                        <p className="text-3xl font-bold text-gray-900">12</p>
                        <p className="text-xs text-green-600">+3 this month</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">👥</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">👩‍🍳</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">New job request from Alice Johnson</p>
                        <p className="text-sm text-gray-600">Home Cooking • 2 hours ago</p>
                      </div>
                      <span className="text-sm font-medium text-blue-600">$60</span>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">⭐</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">5-star review from Sarah Miller</p>
                        <p className="text-sm text-gray-600">Dinner Preparation • 1 day ago</p>
                      </div>
                      <div className="flex">
                        {renderStars(5)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'requests' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Job Requests</h2>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      All
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-lg">
                      New (2)
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      Accepted (1)
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {jobRequests.map((request) => (
                    <div key={request.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-2xl">
                          {request.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{request.service}</h3>
                              <p className="text-sm text-gray-600">Customer: {request.customer}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              request.status === 'new' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {request.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-400">📅</span>
                              <span>{request.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-400">🕐</span>
                              <span>{request.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-400">📍</span>
                              <span>{request.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-400">💰</span>
                              <span className="font-semibold text-green-600">{request.price}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          {request.status === 'new' ? (
                            <>
                              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                Decline
                              </button>
                              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg">
                                Accept
                              </button>
                            </>
                          ) : (
                            <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                              View Details
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Schedule</h2>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                      <div key={day} className="text-center">
                        <div className="font-semibold text-gray-900 mb-3">{day}</div>
                        <div className="space-y-2">
                          {index < 5 && (
                            <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 p-3 rounded-xl text-xs font-medium shadow-sm">
                              <div className="font-bold">2:00 PM</div>
                              <div>Cooking</div>
                              <div className="text-xs text-blue-600">$60</div>
                            </div>
                          )}
                          {index === 1 && (
                            <div className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 p-3 rounded-xl text-xs font-medium shadow-sm">
                              <div className="font-bold">10:00 AM</div>
                              <div>Car Repair</div>
                              <div className="text-xs text-green-600">$150</div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
                  <div className="flex items-center space-x-3 bg-white rounded-xl px-4 py-2 shadow-lg">
                    <div className="flex">
                      {renderStars(5)}
                    </div>
                    <span className="font-semibold text-gray-900">4.9 (28 reviews)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center text-xl">
                          {review.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold text-gray-900">{review.customer}</h3>
                              <p className="text-sm text-gray-600">{review.service}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex mb-1">
                                {renderStars(review.rating)}
                              </div>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-4">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'earnings' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Earnings Overview</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">This Month</h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">$1,240</div>
                    <p className="text-sm text-gray-600 mb-4">+8% from last month</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Completed Jobs</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Average per Job</span>
                        <span className="font-medium">$103</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Tips Received</span>
                        <span className="font-medium">$180</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Customer Satisfaction</span>
                          <span className="font-medium">98%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '98%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Response Rate</span>
                          <span className="font-medium">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">On-time Delivery</span>
                          <span className="font-medium">100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile & Security</h2>
                
                {/* Identity Verification Status */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Identity Verification</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Verified ✓</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">ID Verification</p>
                        <p className="text-xs text-gray-600">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Background Check</p>
                        <p className="text-xs text-gray-600">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Skills Assessment</p>
                        <p className="text-xs text-gray-600">Completed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        M
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Maria Rodriguez</h4>
                        <p className="text-gray-600">Professional Home Cook & Car Mechanic</p>
                        <p className="text-sm text-gray-500">Member since January 2023</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Legal Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" defaultValue="Maria Rodriguez" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" defaultValue="1985-03-15" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" defaultValue="maria@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" defaultValue="+1 (555) 123-4567" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" rows="3" defaultValue="123 Main Street, Apt 4B&#10;New York, NY 10001&#10;United States"></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" defaultValue="Carlos Rodriguez (Husband) - +1 (555) 987-6543" />
                      </div>
                    </div>
                  </div>

                  {/* Security & Verification */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Security & Verification</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Government ID Number</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" defaultValue="***-**-1234" />
                        <p className="text-xs text-gray-500 mt-1">Last 4 digits only for security</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Social Security Number</label>
                        <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" defaultValue="••••••••••••••••" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" />
                      </div>
                      
                      <div className="pt-4">
                        <h4 className="font-medium text-gray-900 mb-3">Two-Factor Authentication</h4>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">SMS Authentication</p>
                            <p className="text-sm text-gray-600">Receive codes via SMS</p>
                          </div>
                          <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                            Enable
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services & Skills */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Services & Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Available Services</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" defaultChecked className="rounded text-blue-600 focus:ring-blue-500" />
                            <span className="text-sm text-gray-700">Home Cooking</span>
                          </div>
                          <span className="text-xs text-green-600 font-medium">Verified</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" defaultChecked className="rounded text-blue-600 focus:ring-blue-500" />
                            <span className="text-sm text-gray-700">Car Repair</span>
                          </div>
                          <span className="text-xs text-green-600 font-medium">Verified</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                            <span className="text-sm text-gray-700">House Cleaning</span>
                          </div>
                          <span className="text-xs text-gray-500 font-medium">Pending</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Certifications</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Food Safety Certificate</p>
                            <p className="text-xs text-gray-600">Expires: Dec 2024</p>
                          </div>
                          <span className="text-xs text-green-600 font-medium">✓</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Automotive Technician</p>
                            <p className="text-xs text-gray-600">Expires: Jun 2025</p>
                          </div>
                          <span className="text-xs text-green-600 font-medium">✓</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">First Aid Training</p>
                            <p className="text-xs text-gray-600">Expires: Mar 2024</p>
                          </div>
                          <span className="text-xs text-yellow-600 font-medium">Renewal Due</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-6">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg">
                    Save Changes
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                    Download Verification Documents
                  </button>
                  <button className="px-6 py-3 bg-red-100 text-red-600 font-medium rounded-lg hover:bg-red-200 transition-colors">
                    Deactivate Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;