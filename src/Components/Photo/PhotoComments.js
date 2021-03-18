import React from 'react';
import styles from '../../Styles/Photo/PhotoComments.module.css';
import UserContext from '../../Context/UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = ({ id, comments, singlePage }) => {
  const userContext = React.useContext(UserContext);
  const { isAuthenticated } = userContext;

  const [showComments, setShowComments] = React.useState(comments);

  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [showComments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${singlePage ? styles.singlePage : ''}`}
      >
        {showComments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {isAuthenticated && (
        <PhotoCommentsForm
          id={id}
          setShowComments={setShowComments}
          singlePage
        />
      )}
    </>
  );
};

export default PhotoComments;
