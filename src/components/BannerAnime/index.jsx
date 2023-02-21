import React from 'react';
import PropTypes from 'prop-types';
import { BannerStyle, Text } from './styles';
import DescriptionAnime from '../DescriptionAnime';
import TagAnime from '../TagAnime';
import TitleAnime from '../TitleAnime';

function BannerAnime({ children, tag, title, description }) {
  return (
    <BannerStyle>
      <Text>
        <TagAnime>{tag}</TagAnime>
        <TitleAnime>{title}</TitleAnime>
        <DescriptionAnime>{description}</DescriptionAnime>
      </Text>

      {children}
    </BannerStyle>
  );
}

BannerAnime.propTypes = {
  children: PropTypes.element.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BannerAnime;
