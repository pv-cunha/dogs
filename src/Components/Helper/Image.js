import React from 'react';
import styles from '../../Styles/Helper/Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img {...props} alt={alt} className={styles.image} onLoad={handleLoad} />
    </div>
  );
};

export default Image;
