import React from 'react';
import styles from '../../Styles/User/UserHeaderNav.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const userContext = React.useContext(UserContext);
  const { userLogout } = userContext;

  const mobile = useMedia('(max-width: 40rem)');

  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpened(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            isMobileMenuOpened && styles.mobileButtonActive
          }`}
          onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          isMobileMenuOpened && styles.navMobileActive
        }`}
      >
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
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
