import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState('requests');
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
      status: 'new'
    },
    {
      id: 2,
      customer: 'Bob Wilson',
      service: 'Car Repair',
      date: '2024-01-17',
      time: '2:00 PM',
      location: 'Brooklyn, NY',
      price: '$150',
      status: 'accepted'
    }
  ];

  const reviews = [
    {
      id: 1,
      customer: 'Sarah Miller',
      service: 'Dinner Preparation',
      rating: 5,
      comment: 'Excellent service! The food was delicious and Maria was very professional.',
      date: '2024-01-10'
    },
    {
      id: 2,
      customer: 'Mike Davis',
      service: 'Weekly Meal Prep',
      rating: 5,
      comment: 'Amazing cook! Highly recommend for anyone looking for healthy meal options.',
      date: '2024-01-08'
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">LH</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Worker Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* Availability Toggle */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Available:</span>
                <button
                  onClick={() => setIsAvailable(!isAvailable)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    isAvailable ? 'bg-primary-600' : 'bg-gray-200'
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
                className="text-gray-500 hover:text-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">24</div>
            <div className="text-sm text-gray-600">Jobs Completed</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-secondary-600 mb-1">4.9</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-accent-600 mb-1">$1,240</div>
            <div className="text-sm text-gray-600">This Month</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
            <div className="text-sm text-gray-600">Repeat Customers</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {[
                { id: 'requests', label: 'Job Requests', icon: '📋' },
                { id: 'schedule', label: 'My Schedule', icon: '📅' },
                { id: 'reviews', label: 'Reviews', icon: '⭐' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center ${
                    activeTab === item.id
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'requests' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Requests</h2>
                <div className="space-y-4">
                  {jobRequests.map((request) => (
                    <div key={request.id} className="card p-6">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        <div className="flex-1 mb-4 lg:mb-0">
                          <div className="flex items-center mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 mr-3">
                              {request.service}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              request.status === 'new' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {request.status}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2">Customer: {request.customer}</p>
                          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                            <span>📅 {request.date}</span>
                            <span>🕐 {request.time}</span>
                            <span>📍 {request.location}</span>
                            <span className="font-semibold text-primary-600">💰 {request.price}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {request.status === 'new' ? (
                            <>
                              <button className="btn-secondary px-4 py-2 text-sm">
                                Decline
                              </button>
                              <button className="btn-primary px-4 py-2 text-sm">
                                Accept
                              </button>
                            </>
                          ) : (
                            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
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
                <div className="card p-6">
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                      <div key={day} className="text-center">
                        <div className="font-semibold text-gray-900 mb-2">{day}</div>
                        <div className="space-y-2">
                          {index < 5 && (
                            <div className="bg-primary-100 text-primary-800 p-2 rounded text-xs">
                              2:00 PM<br />
                              Cooking
                            </div>
                          )}
                          {index === 1 && (
                            <div className="bg-secondary-100 text-secondary-800 p-2 rounded text-xs">
                              10:00 AM<br />
                              Car Repair
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
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(5)}
                    </div>
                    <span className="font-semibold text-gray-900">4.9 (28 reviews)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="card p-6">
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
                      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
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