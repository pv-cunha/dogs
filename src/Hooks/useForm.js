import React from 'react';

const validation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido !',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  const validate = (value) => {
    if (type === false) return true;

    if (value.length === 0) {
      setError('Preencha um valor !');
      return false;
    } else if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    const { value } = target;

    if (error) validate(value);
    setValue(value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
