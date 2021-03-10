import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../FormComponents/Button';
import Input from '../FormComponents/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      })
        .then((r) => {
          console.log(r);
          return r.json();
        })
        .then((json) => console.log(json));
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
