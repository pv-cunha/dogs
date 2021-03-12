import React from 'react';
import { Navigate, Route } from 'react-router';
import UserContext from '../../Context/UserContext';

const ProtectedRoute = (props) => {
  const userContext = React.useContext(UserContext);
  const { isAuthenticated, loading } = userContext;

  return (
    <>
      {!isAuthenticated && !loading ? (
        <Navigate to="/login" />
      ) : (
        <Route {...props} />
      )}
    </>
  );
};

export default ProtectedRoute;
