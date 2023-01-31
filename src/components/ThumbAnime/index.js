import React from 'react';
import PropTypes from 'prop-types';
import AvatarAnime from '../AvatarAnime';
import { Background, Thumb, WrapperThumb } from './styles';

function ThumbAnime({
  src, alt, avatar, animeName,
}) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarAnime photo={avatar} animeName={animeName} />
      </WrapperThumb>
    </Background>

  );
}



export default ThumbAnime;
