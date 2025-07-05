import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const pendingWorkers = [
    {
      id: 1,
      name: 'Elena Martinez',
      service: 'Professional Cook',
      location: 'Manhattan, NY',
      experience: '5 years',
      rating: 4.8,
      documentsUploaded: 3,
      totalDocuments: 3
    },
    {
      id: 2,
      name: 'Carlos Rodriguez',
      service: 'Auto Mechanic',
      location: 'Brooklyn, NY', 
      experience: '8 years',
      rating: 4.9,
      documentsUploaded: 2,
      totalDocuments: 3
    }
  ];

  const users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      type: 'Customer',
      joinDate: '2024-01-10',
      status: 'Active',
      totalBookings: 12
    },
    {
      id: 2,
      name: 'Maria Garcia',
      email: 'maria@example.com',
      type: 'Worker',
      joinDate: '2024-01-05',
      status: 'Active',
      totalBookings: 45
    }
  ];

  const bookings = [
    {
      id: 1,
      customer: 'Alice Johnson',
      worker: 'Maria Garcia',
      service: 'Home Cooking',
      date: '2024-01-15',
      status: 'Completed',
      amount: '$60'
    },
    {
      id: 2,
      customer: 'Bob Wilson',
      worker: 'Carlos Rodriguez',
      service: 'Car Repair',
      date: '2024-01-16',
      status: 'In Progress',
      amount: '$150'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': case 'completed': return 'bg-green-100 text-green-800';
      case 'in progress': case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
              <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>System Status: Healthy</span>
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
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">1,245</div>
            <div className="text-sm text-gray-600">Total Users</div>
            <div className="text-xs text-green-600 mt-1">↗ +12% this month</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-secondary-600 mb-1">567</div>
            <div className="text-sm text-gray-600">Active Workers</div>
            <div className="text-xs text-green-600 mt-1">↗ +8% this month</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-accent-600 mb-1">3,456</div>
            <div className="text-sm text-gray-600">Total Bookings</div>
            <div className="text-xs text-green-600 mt-1">↗ +15% this month</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">$45,678</div>
            <div className="text-sm text-gray-600">Revenue</div>
            <div className="text-xs text-green-600 mt-1">↗ +23% this month</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {[
                { id: 'overview', label: 'Overview', icon: '📊' },
                { id: 'workers', label: 'Approve Workers', icon: '👥' },
                { id: 'users', label: 'View Users', icon: '👤' },
                { id: 'bookings', label: 'Manage Bookings', icon: '📋' },
                { id: 'analytics', label: 'Analytics', icon: '📈' }
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
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Platform Overview</h2>
                
                {/* Recent Activity */}
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">New worker Elena Martinez applied for approval</span>
                      <span className="text-xs text-gray-400">2 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Booking #3456 completed successfully</span>
                      <span className="text-xs text-gray-400">4 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">25 new users registered today</span>
                      <span className="text-xs text-gray-400">6 hours ago</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button 
                      onClick={() => setActiveTab('workers')}
                      className="p-4 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                    >
                      <div className="text-2xl mb-2">👥</div>
                      <div className="font-medium text-gray-900">Review Workers</div>
                      <div className="text-sm text-gray-600">2 pending approvals</div>
                    </button>
                    <button 
                      onClick={() => setActiveTab('bookings')}
                      className="p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors duration-200"
                    >
                      <div className="text-2xl mb-2">📋</div>
                      <div className="font-medium text-gray-900">Manage Bookings</div>
                      <div className="text-sm text-gray-600">15 active bookings</div>
                    </button>
                    <button 
                      onClick={() => setActiveTab('analytics')}
                      className="p-4 border border-accent-200 rounded-lg hover:bg-accent-50 transition-colors duration-200"
                    >
                      <div className="text-2xl mb-2">📈</div>
                      <div className="font-medium text-gray-900">View Analytics</div>
                      <div className="text-sm text-gray-600">Performance insights</div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'workers' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Worker Approvals</h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{pendingWorkers.length} pending approvals</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {pendingWorkers.map((worker) => (
                    <div key={worker.id} className="card p-6">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        <div className="flex-1 mb-4 lg:mb-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {worker.name}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>Service: {worker.service}</div>
                            <div>Location: {worker.location}</div>
                            <div>Experience: {worker.experience}</div>
                            <div>Previous Rating: ⭐ {worker.rating}</div>
                          </div>
                          <div className="mt-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-600">Documents:</span>
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-green-600">
                                  {worker.documentsUploaded}/{worker.totalDocuments} uploaded
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200">
                            Reject
                          </button>
                          <button className="btn-primary px-4 py-2 text-sm">
                            Approve
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                  <div className="flex space-x-2">
                    <input
                      type="search"
                      placeholder="Search users..."
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button className="btn-secondary">Filter</button>
                  </div>
                </div>

                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            User
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Join Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Bookings
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                          <tr key={user.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {user.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {user.joinDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(user.status)}`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {user.totalBookings}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-primary-600 hover:text-primary-700 mr-3">
                                View
                              </button>
                              <button className="text-red-600 hover:text-red-700">
                                Suspend
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Booking Management</h2>
                  <div className="flex space-x-2">
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>All Statuses</option>
                      <option>Completed</option>
                      <option>In Progress</option>
                      <option>Cancelled</option>
                    </select>
                    <button className="btn-secondary">Export</button>
                  </div>
                </div>

                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="card p-6">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        <div className="flex-1 mb-4 lg:mb-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Booking #{booking.id} - {booking.service}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>Customer: {booking.customer}</div>
                            <div>Worker: {booking.worker}</div>
                            <div>Date: {booking.date}</div>
                            <div>Amount: {booking.amount}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                          <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics & Insights</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Services</h3>
                    <div className="space-y-3">
                      {[
                        { service: 'Professional Cooking', percentage: 45 },
                        { service: 'Auto Repair', percentage: 30 },
                        { service: 'Tutoring', percentage: 25 }
                      ].map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">{item.service}</span>
                            <span className="font-medium">{item.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary-600 h-2 rounded-full" 
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Growth</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">+23%</div>
                      <div className="text-gray-600">Compared to last month</div>
                      <div className="mt-4 text-sm text-gray-500">
                        Revenue increased by $8,542
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;