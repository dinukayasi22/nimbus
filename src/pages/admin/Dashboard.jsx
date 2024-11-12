import { useState, useEffect } from 'react';
import api from '../../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalBookings: 0,
    totalFeedbacks: 0,
    recentBookings: [],
    recentFeedbacks: []
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await api.get('/admin/dashboard-stats');
      setStats(response.data);
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Admin Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Total Users</h3>
          <p className="text-3xl font-bold text-primary">{stats.totalUsers}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Total Bookings</h3>
          <p className="text-3xl font-bold text-primary">{stats.totalBookings}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Total Feedbacks</h3>
          <p className="text-3xl font-bold text-primary">{stats.totalFeedbacks}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Recent Bookings</h3>
          <div className="space-y-4">
            {stats.recentBookings.map((booking) => (
              <div 
                key={booking._id} 
                className="border-b dark:border-gray-700 pb-2"
              >
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {booking.user.name} - {booking.flight.from} to {booking.flight.to}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(booking.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Feedbacks */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Recent Feedbacks</h3>
          <div className="space-y-4">
            {stats.recentFeedbacks.map((feedback) => (
              <div 
                key={feedback._id} 
                className="border-b dark:border-gray-700 pb-2"
              >
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feedback.user.name} - Rating: {feedback.rating}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {feedback.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;