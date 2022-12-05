import React from 'react';
import { Navigate } from 'react-router-dom';
import Admin from '../admin.screen';

// eslint-disable-next-line react/prop-types
function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  console.log('this', isAuthenticated);

  if (isAuthenticated) {
    return <Admin />;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRoute;
