import React from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST, USER_GET } from '../../api';
import useForm from '../../Hooks/useForm';
import Button from '../FormComponents/Button';
import Input from '../FormComponents/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  console.log({ ...password });

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();

      window.localStorage.setItem('token', json.token);

      getUser(json.token);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>

      <Link to="/login/criar">Criar Conta</Link>
    </section>
  );
};

export default LoginForm;
