import React from 'react';
import { useNavigate } from 'react-router';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from '../api';
import UserContext from './UserContext';

const UserState = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      navigate('/login');
      window.localStorage.removeItem('token');
      setUser(null);
      setIsAuthenticated(false);
      setLoading(false);
      setError(null);
    },
    [navigate],
  );

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
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });

      const tokenRes = await fetch(url, options);
      console.log(tokenRes);
      if (!tokenRes.ok) throw new Error(`Usuário ou senha inválida !`);

      const { token } = await tokenRes.json();
      window.localStorage.setItem('token', token);

      await getUser(token);
      setIsAuthenticated(true);
      navigate('/conta');
    } catch (err) {
      setError(err.message);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  // Login automático se existir o token
  // Ativado sempre que o app montar
  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token');
      try {
        if (token) {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);

          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido !');
          await getUser(token);
        }
      } catch (err) {
        userLogout();
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, loading, error, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
