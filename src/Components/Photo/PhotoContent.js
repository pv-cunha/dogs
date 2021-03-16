import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import styles from '../../Styles/Photo/PhotoContent.module.css';
import Image from '../Helper/Image';
import PhotoComments from './PhotoComments';
import PhotoDelete from './PhotoDelete';

const PhotoContent = ({ data }) => {
  const userContext = React.useContext(UserContext);
  const { user } = userContext;

  const { comments, photo } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.author} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user && user.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
