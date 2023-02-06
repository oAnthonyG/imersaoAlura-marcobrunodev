import React from 'react';
import PropTypes from 'prop-types';
import { CarrouselStyle, Right, Wrapper } from './styles';
import ThumbAnime from '../ThumbAnime';

function CarrouselAnimeList({ videos }) {
  return (
    <CarrouselStyle>
      <Wrapper>
        {videos.map(({ src, alt, avatar, animeName, link }) => (
          <ThumbAnime
            src={src}
            alt={alt}
            avatar={avatar}
            animeName={animeName}
            link={link}
          />
        ))}
      </Wrapper>
      <Right />
    </CarrouselStyle>
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
