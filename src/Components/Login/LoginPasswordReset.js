import React from 'react';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../api';
import { useNavigate } from 'react-router';

const LoginPasswordReset = () => {
  const password = useForm('password');

  const { error, loading, request } = useFetch();

  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);

      if (response.ok) navigate('/login');
    }
  };

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <div>
      <h1 className="title">Resete a senha !</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          label="Nova Senha"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};

export default LoginPasswordReset;
