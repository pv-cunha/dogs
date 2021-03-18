import React from 'react';
import useForm from '../../Hooks/useForm';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import Error from '../Helper/Error';
import { USER_POST } from '../../api';
import UserContext from '../../Context/UserContext';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';

const LoginCreate = () => {
  const userContext = React.useContext(UserContext);
  const { userLogin } = userContext;

  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(email.value, password.value);
  };

  return (
    <section className="animeLeft">
      <Head title="Criar Conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" {...username} />
        <Input type="email" label="Email" name="email" {...email} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
