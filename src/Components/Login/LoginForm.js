import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import useForm from '../../Hooks/useForm';
import Button from '../FormComponents/Button';
import Input from '../FormComponents/Input';

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
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando ...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>

      <Link to="/login/criar">Criar Conta</Link>
    </section>
  );
};

export default LoginForm;
