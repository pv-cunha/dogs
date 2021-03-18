import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import UserContext from '../../Context/UserContext';
import styles from '../../Styles/Login/Login.module.css';
import NotFound from '../Helper/NotFound';
import Head from '../Helper/Head';

const Login = () => {
  const userContext = React.useContext(UserContext);
  const { isAuthenticated } = userContext;

  if (isAuthenticated === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Head title="Login" />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
