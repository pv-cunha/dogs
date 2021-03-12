import React from 'react';
import styles from '../../Styles/Login/LoginForm.module.css';
import { Link } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import useForm from '../../Hooks/useForm';
import Button from '../FormComponents/Button';
import Input from '../FormComponents/Input';
import Error from '../Helper/Error';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const userContext = React.useContext(UserContext);
  const { userLogin, error, loading } = userContext;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando ...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>

      <Link to="/login/perdeu" className={styles.perdeu}>
        Perdeu a senha ?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta ? Cadastre-se no site !</p>
        <Link to="/login/criar" className={styles.btnCriar}>
          Criar Conta
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
