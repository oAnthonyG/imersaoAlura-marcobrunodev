import React from 'react';
import PropTypes from 'prop-types';
import ThumbAnime from '../ThumbAnime';

function CarrouselAnimeList({ videos }) {
  const { src, alt, avatar, animeName, link } = videos[0];
  return (
    <ThumbAnime
      src={src}
      alt={alt}
      avatar={avatar}
      animeName={animeName}
      link={link}
    />
  );
}

const typeVideo = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  animeName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

CarrouselAnimeList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(typeVideo)).isRequired,
};

export default CarrouselAnimeList;
