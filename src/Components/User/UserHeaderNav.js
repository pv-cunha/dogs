import React from 'react';
import styles from '../../Styles/User/UserHeaderNav.module.css';
import { NavLink } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';

const UserHeaderNav = () => {
  const userContext = React.useContext(UserContext);
  const { userLogout } = userContext;

  const [mobile, userMobile] = React.useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end activeClassName={styles.active}>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
        <Estatisticas /> {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName={styles.active}>
        <Adicionar /> {mobile && 'Postar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
      </button>
    </nav>
  );
};

export default UserHeaderNav;
