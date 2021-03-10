import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../FormComponents/Button';
import Input from '../FormComponents/Input';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        console.log(r);
        return r.json();
      })
      .then((json) => console.log(json));
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>

      <p>{username}</p>
      <p>{password}</p>
      <Link to="/login/criar">Criar Conta</Link>
    </section>
  );
};

export default LoginForm;
