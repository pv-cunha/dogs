import React from 'react';
import styles from '../../Styles/Photo/PhotoCommentsForm.module.css';
import Error from '../Helper/Error';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';

const PhotoCommentsForm = ({ id, setShowComments, singlePage }) => {
  const [comment, setComment] = React.useState('');

  const { request, error } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token');

    const { url, options } = COMMENT_POST(id, { comment }, token);

    const { response, json } = await request(url, options);

    if (response.ok) {
      setShowComments((showComments) => [...showComments, json]);
      setComment('');
    }
  };

  return (
    <form
      className={`${styles.form} ${singlePage ? styles.singlePage : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        name="comment"
        id="comment"
        placeholder="Comente a foto :)"
        className={styles.textarea}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
