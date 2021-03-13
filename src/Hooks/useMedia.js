import React from 'react';

const useMedia = (media) => {
  const [isMatched, setIsMatched] = React.useState(null);

  React.useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media);
      setIsMatched(matches);
    };
    changeMatch();

    window.addEventListener('resize', changeMatch);

    return () => window.removeEventListener('resize', changeMatch);
  }, [media]);

  return isMatched;
};

export default useMedia;
