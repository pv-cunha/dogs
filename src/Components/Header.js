import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import UserContext from '../Context/UserContext';

const Header = () => {
  const userContext = React.useContext(UserContext);
  const { user } = userContext;

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <Dogs />
        </Link>
        {user ? (
          <Link to="/conta" className={styles.login}>
            {user.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
