import React from 'react';
import styles from '../../Styles/Photo/PhotoDelete.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../api';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar ?');

    if (confirm) {
      const token = window.localStorage.getItem('token');

      const { url, options } = PHOTO_DELETE(id, token);

      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  };

  return loading ? (
    <button disabled className={styles.deletar}>
      Deletando...
    </button>
  ) : (
    <button className={styles.deletar} onClick={handleClick}>
      Deletar
    </button>
  );
};

export default PhotoDelete;
