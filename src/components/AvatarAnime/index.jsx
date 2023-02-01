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

AvatarAnime.propTypes = {
  photo: PropTypes.string.isRequired,
  animeName: PropTypes.string.isRequired,
};

export default AvatarAnime;
