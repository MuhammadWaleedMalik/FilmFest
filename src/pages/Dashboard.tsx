import React from 'react';
import { motion } from 'framer-motion';
import { 
  Film, 
  Calendar, 
  Star, 
  TrendingUp, 
  Award,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { icon: Film, label: 'Submissions', value: '12', change: '+2 this month' },
    { icon: Award, label: 'Accepted', value: '5', change: '+1 this week' },
    { icon: Clock, label: 'Under Review', value: '3', change: '2 pending' },
    { icon: Star, label: 'Success Rate', value: '42%', change: '+5% this month' },
  ];

  const recentSubmissions = [
    {
      id: 1,
      filmTitle: 'The Journey Home',
      festival: 'Cannes Film Festival',
      submittedDate: '2025-01-15',
      status: 'under-review',
      deadline: '2025-03-15'
    },
    {
      id: 2,
      filmTitle: 'Urban Stories',
      festival: 'Sundance Film Festival',
      submittedDate: '2025-01-10',
      status: 'accepted',
      deadline: '2025-02-28'
    },
    {
      id: 3,
      filmTitle: 'Silent Waters',
      festival: 'Venice Film Festival',
      submittedDate: '2025-01-08',
      status: 'rejected',
      deadline: '2025-04-15'
    },
  ];

  const upcomingDeadlines = [
    {
      festival: 'Berlin International Film Festival',
      deadline: '2025-02-15',
      daysLeft: 12,
      category: 'International'
    },
    {
      festival: 'SXSW Film Festival',
      deadline: '2025-02-28',
      daysLeft: 25,
      category: 'Independent'
    },
    {
      festival: 'Tribeca Film Festival',
      deadline: '2025-03-10',
      daysLeft: 35,
      category: 'Independent'
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'under-review':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'Accepted';
      case 'rejected':
        return 'Rejected';
      case 'under-review':
        return 'Under Review';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">
            Here's an overview of your film festival submissions and activities.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-indigo-100 rounded-full p-3">
                  <stat.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div className="mb-2">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
              <div className="text-xs text-green-600">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Submissions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Submissions</h2>
            <div className="space-y-4">
              {recentSubmissions.map((submission) => (
                <div key={submission.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{submission.filmTitle}</h3>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(submission.status)}
                      <span className="text-sm font-medium">
                        {getStatusText(submission.status)}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{submission.festival}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Submitted: {submission.submittedDate}</span>
                    <span>Deadline: {submission.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
              View All Submissions
            </button>
          </motion.div>

          {/* Upcoming Deadlines */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Deadlines</h2>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{deadline.festival}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      deadline.daysLeft <= 15 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {deadline.daysLeft} days left
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{deadline.category}</span>
                    <span>{deadline.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              Submit to Festival
            </button>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-colors">
              <Film className="h-6 w-6 mb-2" />
              <div className="font-medium">Submit New Film</div>
              <div className="text-sm opacity-90">Add your latest work</div>
            </button>
            <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-4 rounded-lg hover:from-green-600 hover:to-teal-700 transition-colors">
              <Calendar className="h-6 w-6 mb-2" />
              <div className="font-medium">Browse Festivals</div>
              <div className="text-sm opacity-90">Find your perfect match</div>
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition-colors">
              <Star className="h-6 w-6 mb-2" />
              <div className="font-medium">View Analytics</div>
              <div className="text-sm opacity-90">Track your success</div>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;