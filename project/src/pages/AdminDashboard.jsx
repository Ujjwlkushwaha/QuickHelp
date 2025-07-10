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
      totalDocuments: 3,
      avatar: '👩‍🍳'
    },
    {
      id: 2,
      name: 'Carlos Rodriguez',
      service: 'Auto Mechanic',
      location: 'Brooklyn, NY', 
      experience: '8 years',
      rating: 4.9,
      documentsUploaded: 2,
      totalDocuments: 3,
      avatar: '🔧'
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
      totalBookings: 12,
      avatar: '👨'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      email: 'maria@example.com',
      type: 'Worker',
      joinDate: '2024-01-05',
      status: 'Active',
      totalBookings: 45,
      avatar: '👩'
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
      amount: '$60',
      icon: '🍳'
    },
    {
      id: 2,
      customer: 'Bob Wilson',
      worker: 'Carlos Rodriguez',
      service: 'Car Repair',
      date: '2024-01-16',
      status: 'In Progress',
      amount: '$150',
      icon: '🚗'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': case 'completed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'in progress': case 'pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'inactive': case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'active': case 'completed': return '✅';
      case 'in progress': case 'pending': return '⏳';
      case 'inactive': case 'cancelled': return '❌';
      default: return '📋';
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">LH</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-xs text-gray-500">Manage your platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <span className="text-gray-600 font-medium">System Online</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <button 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                <span className="text-lg">🚪</span>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">👥</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">+12%</div>
                <div className="text-green-500 text-sm">↗</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">1,245</div>
            <div className="text-sm text-gray-600">Total Users</div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-1 rounded-full" style={{width: '75%'}}></div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🛠️</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">+8%</div>
                <div className="text-green-500 text-sm">↗</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">567</div>
            <div className="text-sm text-gray-600">Active Workers</div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-1 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">📋</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">+15%</div>
                <div className="text-green-500 text-sm">↗</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">3,456</div>
            <div className="text-sm text-gray-600">Total Bookings</div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-1 rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">💰</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">+23%</div>
                <div className="text-green-500 text-sm">↗</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">$45,678</div>
            <div className="text-sm text-gray-600">Revenue</div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-1 rounded-full" style={{width: '90%'}}></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">🎛️</span>
                Navigation
              </h3>
              <nav className="space-y-3">
                {[
                  { id: 'overview', label: 'Overview', icon: '📊', desc: 'Platform insights' },
                  { id: 'workers', label: 'Approve Workers', icon: '👥', desc: 'Review applications' },
                  { id: 'users', label: 'View Users', icon: '👤', desc: 'Manage accounts' },
                  { id: 'bookings', label: 'Manage Bookings', icon: '📋', desc: 'Track orders' },
                  { id: 'analytics', label: 'Analytics', icon: '📈', desc: 'Performance data' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center space-x-4 group ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:bg-white/50 hover:shadow-md'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium">{item.label}</div>
                      <div className={`text-xs ${activeTab === item.id ? 'text-blue-100' : 'text-gray-500'}`}>
                        {item.desc}
                      </div>
                    </div>
                    {activeTab === item.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Platform Overview</h2>
                      <p className="text-gray-600">Real-time insights and analytics</p>
                    </div>
                  </div>
                  
                  {/* Recent Activity */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <span className="text-2xl mr-3">⚡</span>
                      Recent Activity
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-lg">👩‍🍳</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">New worker Elena Martinez applied for approval</div>
                          <div className="text-xs text-gray-500">2 hours ago</div>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-lg">✅</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">Booking #3456 completed successfully</div>
                          <div className="text-xs text-gray-500">4 hours ago</div>
                        </div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-lg">👥</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">25 new users registered today</div>
                          <div className="text-xs text-gray-500">6 hours ago</div>
                        </div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <span className="text-2xl mr-3">⚡</span>
                      Quick Actions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <button 
                        onClick={() => setActiveTab('workers')}
                        className="group p-6 bg-white/70 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-emerald-200 hover:border-emerald-300"
                      >
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👥</div>
                        <div className="font-semibold text-gray-900 mb-2">Review Workers</div>
                        <div className="text-sm text-gray-600 mb-3">2 pending approvals</div>
                        <div className="flex items-center text-emerald-600 text-sm font-medium">
                          <span>Review Now</span>
                          <span className="ml-2">→</span>
                        </div>
                      </button>
                      <button 
                        onClick={() => setActiveTab('bookings')}
                        className="group p-6 bg-white/70 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-blue-200 hover:border-blue-300"
                      >
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📋</div>
                        <div className="font-semibold text-gray-900 mb-2">Manage Bookings</div>
                        <div className="text-sm text-gray-600 mb-3">15 active bookings</div>
                        <div className="flex items-center text-blue-600 text-sm font-medium">
                          <span>View All</span>
                          <span className="ml-2">→</span>
                        </div>
                      </button>
                      <button 
                        onClick={() => setActiveTab('analytics')}
                        className="group p-6 bg-white/70 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-purple-200 hover:border-purple-300"
                      >
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📈</div>
                        <div className="font-semibold text-gray-900 mb-2">View Analytics</div>
                        <div className="text-sm text-gray-600 mb-3">Performance insights</div>
                        <div className="flex items-center text-purple-600 text-sm font-medium">
                          <span>Explore</span>
                          <span className="ml-2">→</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'workers' && (
                <div>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Worker Approvals</h2>
                      <p className="text-gray-600">Review and approve worker applications</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                        {pendingWorkers.length} pending approvals
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {pendingWorkers.map((worker) => (
                      <div key={worker.id} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                          <div className="flex-1 mb-6 lg:mb-0">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-3xl">
                                {worker.avatar}
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                  {worker.name}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                  <span>📍 {worker.location}</span>
                                  <span>⭐ {worker.rating}</span>
                                  <span>⏱️ {worker.experience}</span>
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg">🛠️</span>
                                <span>Service: {worker.service}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-lg">📄</span>
                                <span>Documents: {worker.documentsUploaded}/{worker.totalDocuments}</span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full" 
                                style={{ width: `${(worker.documentsUploaded/worker.totalDocuments) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            <button className="px-6 py-3 text-sm bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all duration-200 border border-red-200 hover:border-red-300">
                              <span className="mr-2">❌</span>
                              Reject
                            </button>
                            <button className="px-6 py-3 text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all duration-200">
                              <span className="mr-2">✅</span>
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
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">User Management</h2>
                      <p className="text-gray-600">Manage platform users and accounts</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-4">
                      <div className="relative">
                        <input
                          type="search"
                          placeholder="Search users..."
                          className="pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-200">
                        Filter
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              User
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Join Date
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Bookings
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white/50 divide-y divide-gray-200">
                          {users.map((user) => (
                            <tr key={user.id} className="hover:bg-white/70 transition-colors duration-200">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-lg">
                                    {user.avatar}
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                                    <div className="text-sm text-gray-500">{user.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {user.type === 'Customer' ? '👤' : '🛠️'} {user.type}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {user.joinDate}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(user.status)}`}>
                                  {getStatusIcon(user.status)} {user.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <div className="flex items-center space-x-2">
                                  <span className="font-semibold">{user.totalBookings}</span>
                                  <span className="text-gray-400">bookings</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex space-x-3">
                                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline">
                                    👁️ View
                                  </button>
                                  <button className="text-red-600 hover:text-red-700 font-medium text-sm hover:underline">
                                    ⏸️ Suspend
                                  </button>
                                </div>
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
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Booking Management</h2>
                      <p className="text-gray-600">Track and manage service bookings</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-4">
                      <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/70 backdrop-blur-sm">
                        <option>All Statuses</option>
                        <option>Completed</option>
                        <option>In Progress</option>
                        <option>Cancelled</option>
                      </select>
                      <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-200">
                        📊 Export
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                          <div className="flex-1 mb-6 lg:mb-0">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-3xl">
                                {booking.icon}
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                  Booking #{booking.id} - {booking.service}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                  <span>👤 {booking.customer}</span>
                                  <span>🛠️ {booking.worker}</span>
                                  <span>📅 {booking.date}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg">💰</span>
                                <span className="font-semibold text-gray-900">{booking.amount}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(booking.status)}`}>
                              {getStatusIcon(booking.status)} {booking.status}
                            </span>
                            <button className="px-6 py-3 text-sm bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-200">
                              👁️ View Details
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
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Analytics & Insights</h2>
                      <p className="text-gray-600">Performance metrics and trends</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <span className="text-2xl mr-3">🔥</span>
                        Popular Services
                      </h3>
                      <div className="space-y-4">
                        {[
                          { service: 'Professional Cooking', percentage: 45, icon: '🍳' },
                          { service: 'Auto Repair', percentage: 30, icon: '🚗' },
                          { service: 'Tutoring', percentage: 25, icon: '📚' }
                        ].map((item, index) => (
                          <div key={index} className="bg-white/70 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <span className="text-xl">{item.icon}</span>
                                <span className="text-sm font-medium text-gray-900">{item.service}</span>
                              </div>
                              <span className="font-bold text-gray-900">{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div 
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000" 
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <span className="text-2xl mr-3">📊</span>
                        Monthly Growth
                      </h3>
                      <div className="text-center">
                        <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                          +23%
                        </div>
                        <div className="text-gray-600 mb-4">Compared to last month</div>
                        <div className="bg-white/70 rounded-xl p-4">
                          <div className="text-2xl font-bold text-emerald-600 mb-1">$8,542</div>
                          <div className="text-sm text-gray-500">Revenue increase</div>
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
    </div>
  );
};

export default AdminDashboard;