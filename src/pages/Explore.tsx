import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Calendar, Star, Award } from 'lucide-react';

const Explore: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const festivals = [
    {
      id: 1,
      title: 'Venice International Film Festival',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      location: 'Venice, Italy',
      category: 'International',
      rating: 4.9,
      deadline: '2025-04-15',
      entryFee: '$85',
      description: 'One of the world\'s oldest and most prestigious film festivals.',
      status: 'open'
    },
    {
      id: 2,
      title: 'Berlin International Film Festival',
      image: 'https://images.pexels.com/photos/7991462/pexels-photo-7991462.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      location: 'Berlin, Germany',
      category: 'International',
      rating: 4.8,
      deadline: '2025-03-20',
      entryFee: '$75',
      description: 'Major international film festival held annually in Berlin.',
      status: 'open'
    },
    {
      id: 3,
      title: 'SXSW Film Festival',
      image: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      location: 'Austin, Texas',
      category: 'Independent',
      rating: 4.7,
      deadline: '2025-02-28',
      entryFee: '$65',
      description: 'Annual conglomerate of parallel film, interactive media, and music festivals.',
      status: 'open'
    },
    {
      id: 4,
      title: 'Tribeca Film Festival',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      location: 'New York, USA',
      category: 'Independent',
      rating: 4.6,
      deadline: '2025-03-10',
      entryFee: '$70',
      description: 'Premier destination for timely, raw and groundbreaking storytelling.',
      status: 'open'
    },
    {
      id: 5,
      title: 'Annecy International Animation Festival',
      image: 'https://images.pexels.com/photos/7991462/pexels-photo-7991462.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      location: 'Annecy, France',
      category: 'Animation',
      rating: 4.8,
      deadline: '2025-03-05',
      entryFee: '$60',
      description: 'The world\'s leading animation film festival.',
      status: 'open'
    },
    {
      id: 6,
      title: 'Hot Docs Canadian International Documentary Festival',
      image: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      location: 'Toronto, Canada',
      category: 'Documentary',
      rating: 4.5,
      deadline: '2025-02-15',
      entryFee: '$55',
      description: 'North America\'s largest documentary festival.',
      status: 'closing-soon'
    }
  ];

  const categories = ['all', 'International', 'Independent', 'Documentary', 'Animation', 'Short Film'];
  const locations = ['all', 'Europe', 'North America', 'Asia', 'South America', 'Africa', 'Oceania'];

  const filteredFestivals = festivals.filter(festival => {
    const matchesSearch = festival.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         festival.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || festival.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Film Festivals</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect festival for your film from our curated collection worldwide
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search festivals, locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredFestivals.length} festivals
          </p>
        </motion.div>

        {/* Festival Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFestivals.map((festival, index) => (
            <motion.div
              key={festival.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={festival.image}
                  alt={festival.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {festival.status === 'closing-soon' && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Closing Soon
                    </span>
                  )}
                  {festival.status === 'open' && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Open
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-xs font-semibold">{festival.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    {festival.category}
                  </span>
                  <span className="text-lg font-bold text-green-600">{festival.entryFee}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {festival.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{festival.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{festival.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Deadline: {festival.deadline}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                    View Details
                  </button>
                  <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    Submit Film
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors font-medium">
            Load More Festivals
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Explore;