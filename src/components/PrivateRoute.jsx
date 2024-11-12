// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem('token'); // Check if token exists

  return token ? <Component /> : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default PrivateRoute;