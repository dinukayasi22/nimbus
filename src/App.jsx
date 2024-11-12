import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AboutUs from './pages/user/AboutUs';
import Book from './pages/user/Book';
import Feedback from './pages/user/Feedback';
import Help from './pages/user/Help';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './pages/user/Profile';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import FeedbackManagement from './pages/admin/FeedbackManagement';
import ProtectedRoute from './components/auth/ProtectedRoute'; // Ensure this is your PrivateRoute
import AdminRoute from './components/auth/AdminRoute';
import { useEffect, useState } from 'react';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set authentication status based on token presence
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen dark:bg-gray-900">
        <Navbar isAuthenticated={isAuthenticated} />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<AboutUs />} />
            <Route path="/book" element={<Book />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected User Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/feedback" element={<Feedback />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route element={<AdminRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<UserManagement />} />
              <Route path="/admin/feedbacks" element={<FeedbackManagement />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;