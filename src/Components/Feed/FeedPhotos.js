import React from 'react';
import styles from '../../Styles/Feed/FeedPhotos.module.css';
import { PHOTOS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import FeedPhotosItem from './FeedPhotosItem';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const getPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });

      const { json } = await request(url, options);

      return json;
    };
    getPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  return null;
};

export default FeedPhotos;
