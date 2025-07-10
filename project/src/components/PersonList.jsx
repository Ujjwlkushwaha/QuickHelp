import { useState } from 'react';
import { personData } from '../data/personData.js';

const PersonList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOccupation, setFilterOccupation] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Use imported data
  const persons = personData;

  // Get unique occupations for filter
  const occupations = [...new Set(persons.map(person => person.occupation))];

  // Occupation icons mapping
  const occupationIcons = {
    'Software Engineer': '💻',
    'Data Scientist': '📊',
    'UX Designer': '🎨',
    'Marketing Manager': '📈',
    'Product Manager': '📋',
    'DevOps Engineer': '⚙️',
    'Content Writer': '✍️',
    'Financial Analyst': '💰',
    'Graphic Designer': '🎭',
    'Sales Representative': '📞',
    'Human Resources': '👥',
    'Quality Assurance': '🔍',
    'Business Analyst': '📊',
    'Network Engineer': '🌐',
    'Customer Success': '🎯',
    'Research Scientist': '🔬',
    'Event Planner': '📅',
    'Legal Assistant': '⚖️',
    'Social Media Manager': '📱',
    'Operations Manager': '⚡',
    'Interior Designer': '🏠',
    'Cybersecurity Analyst': '🔒',
    'Public Relations': '📢',
    'Supply Chain Manager': '📦',
    'Healthcare Administrator': '🏥',
    'Real Estate Agent': '🏘️',
    'Environmental Scientist': '🌱',
    'Audio Engineer': '🎵',
    'Fashion Designer': '👗',
    'Mechanical Engineer': '🔧',
    'Nutritionist': '🥗',
    'Game Developer': '🎮',
    'Photographer': '📸',
    'Civil Engineer': '🏗️',
    'Veterinarian': '🐾',
    'Electrician': '⚡',
    'Librarian': '📚',
    'Plumber': '🔧',
    'Architect': '🏛️',
    'Chef': '👨‍🍳',
    'Dental Hygienist': '🦷',
    'Firefighter': '🚒',
    'Yoga Instructor': '🧘',
    'Police Officer': '👮',
    'Speech Therapist': '🗣️',
    'Carpenter': '🪚',
    'Occupational Therapist': '🩺',
    'Welder': '🔥',
    'Massage Therapist': '💆',
    'Landscaper': '🌿'
  };

  // Filter and sort persons
  const filteredPersons = persons
    .filter(person => 
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterOccupation === 'all' || person.occupation === filterOccupation)
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'experience') return parseInt(b.experience) - parseInt(a.experience);
      return 0;
    });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }
    return stars;
  };

  const getExperienceYears = (experience) => {
    return parseInt(experience.split(' ')[0]);
  };

  const getExperienceColor = (years) => {
    if (years >= 8) return 'text-purple-600 bg-purple-100';
    if (years >= 5) return 'text-blue-600 bg-blue-100';
    if (years >= 3) return 'text-green-600 bg-green-100';
    return 'text-orange-600 bg-orange-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <span className="text-3xl">👥</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Professional Directory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover exceptional talent across diverse industries. Connect with skilled professionals 
            who can bring your projects to life.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-gray-400 group-focus-within:text-blue-500 transition-colors">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search professionals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              />
            </div>

            {/* Occupation Filter */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-gray-400 group-focus-within:text-blue-500 transition-colors">🏢</span>
              </div>
              <select
                value={filterOccupation}
                onChange={(e) => setFilterOccupation(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
              >
                <option value="all">All Industries</option>
                {occupations.map(occupation => (
                  <option key={occupation} value={occupation}>{occupation}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-gray-400 group-focus-within:text-blue-500 transition-colors">📊</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
              >
                <option value="name">Sort by Name</option>
                <option value="rating">Sort by Rating</option>
                <option value="experience">Sort by Experience</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-white text-blue-600 shadow-md' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span className="text-lg">⊞</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-white text-blue-600 shadow-md' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span className="text-lg">☰</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{filteredPersons.length}</div>
                <div className="text-blue-100">Professionals</div>
              </div>
              <div className="text-3xl">👥</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{occupations.length}</div>
                <div className="text-green-100">Industries</div>
              </div>
              <div className="text-3xl">🏢</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {(filteredPersons.reduce((acc, person) => acc + person.rating, 0) / filteredPersons.length).toFixed(1)}
                </div>
                <div className="text-purple-100">Avg Rating</div>
              </div>
              <div className="text-3xl">⭐</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {Math.round(filteredPersons.reduce((acc, person) => acc + getExperienceYears(person.experience), 0) / filteredPersons.length)}
                </div>
                <div className="text-orange-100">Avg Years</div>
              </div>
              <div className="text-3xl">📈</div>
            </div>
          </div>
        </div>

        {/* Person Cards */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPersons.map((person) => (
              <div key={person.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 overflow-hidden">
                {/* Card Header */}
                <div className="relative p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                        {occupationIcons[person.occupation] || '👤'}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 truncate">{person.name}</h3>
                      <p className="text-blue-600 font-semibold text-sm">{person.occupation}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <span className="text-gray-500 text-sm">📍</span>
                        <span className="text-gray-600 text-sm truncate">{person.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex">{renderStars(person.rating)}</div>
                      <span className="text-sm font-semibold text-gray-700">{person.rating}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getExperienceColor(getExperienceYears(person.experience))}`}>
                      {person.experience}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <span className="mr-2">🛠️</span>
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {person.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full border border-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {person.skills.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          +{person.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                      View Profile
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-all duration-200 text-sm font-semibold border border-gray-200">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-4">
            {filteredPersons.map((person) => (
              <div key={person.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 p-6">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                      {occupationIcons[person.occupation] || '👤'}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
                        <p className="text-blue-600 font-semibold">{person.occupation}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <span className="text-gray-500">📍</span>
                            <span className="text-gray-600 text-sm">{person.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex">{renderStars(person.rating)}</div>
                            <span className="text-sm font-semibold text-gray-700">{person.rating}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getExperienceColor(getExperienceYears(person.experience))}`}>
                            {person.experience}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm font-semibold shadow-lg">
                          View Profile
                        </button>
                        <button className="bg-gray-100 text-gray-700 py-2 px-6 rounded-xl hover:bg-gray-200 transition-all duration-200 text-sm font-semibold border border-gray-200">
                          Contact
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <span className="mr-2">🛠️</span>
                        Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {person.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full border border-blue-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredPersons.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">No professionals found</h3>
            <p className="text-gray-500 text-lg">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonList; 