import { useState, useEffect } from 'react';
import api from '../../services/api';

const FeedbackManagement = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all'); // all, positive, negative

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await api.get('/admin/feedbacks');
      setFeedbacks(response.data);
    } catch (error) {
      setError('Failed to fetch feedbacks');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFeedback = async (feedbackId) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      try {
        await api.delete(`/admin/feedbacks/${feedbackId}`);
        fetchFeedbacks();
      } catch (error) {
        setError('Failed to delete feedback');
      }
    }
  };

  const filteredFeedbacks = feedbacks.filter(feedback => {
    if (filter === 'positive') return feedback.rating >= 4;
    if (filter === 'negative') return feedback.rating < 4;
    return true;
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Feedback Management</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}

      <div className="mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
        >
          <option value="all">All Feedbacks</option>
          <option value="positive">Positive (4-5 ★)</option>
          <option value="negative">Negative (1-3 ★)</option>
        </select>
      </div>

      <div className="grid gap-6">
        {filteredFeedbacks.map((feedback) => (
          <div 
            key={feedback._id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feedback.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By {feedback.user.name} on {new Date(feedback.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">
                  {'★'.repeat(feedback.rating)}
                  {'☆'.repeat(5 - feedback.rating)}
                </span>
                <button
                  onClick={() => handleDeleteFeedback(feedback._id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {feedback.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackManagement;