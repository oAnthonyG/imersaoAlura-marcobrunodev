import React from 'react';
import PropTypes from 'prop-types';
import { WrapperAvatar, Avatar, Anime } from './styles';

function AvatarAnime({ photo, animeName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={animeName} />
      <Anime>{animeName}</Anime>
    </WrapperAvatar>

  );
}



export default AvatarAnime;
