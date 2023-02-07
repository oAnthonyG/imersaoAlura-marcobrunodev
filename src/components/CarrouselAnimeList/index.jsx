/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CarrouselStyle, Left, Right, Wrapper } from './styles';
import ThumbAnime from '../ThumbAnime';

function CarrouselAnimeList({ videos }) {
  const [move, setMove] = useState(false);

  function actionRight() {
    setMove((oldMove) => oldMove - 1);
  }
  function actionLeft() {
    setMove((oldMove) => oldMove + 1);
  }
  return (
    <CarrouselStyle>
      <Left onClick={actionLeft} />
      <Wrapper move={move}>
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
      <Right onClick={actionRight} />
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
