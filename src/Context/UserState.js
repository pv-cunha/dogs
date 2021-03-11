import { getSuggestedQuery } from '@testing-library/dom';
import React from 'react';
import { TOKEN_POST, USER_GET } from '../api';
import UserContext from './UserContext';

const UserState = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // Puxa o usuário
  const getUser = async (token) => {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);
    const data = await response.json();

    setUser(data);
    setIsAuthenticated(true);
  };

  // Faz o login do usuário
  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password });

    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();

    window.localStorage.setItem('token', token);
    setIsAuthenticated(true);
    getUser(token);
  };

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, loading, error, userLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
