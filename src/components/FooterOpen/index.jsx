import React from 'react';
import LinkAnime from '../LinkAnime';
import LogoAnimesList from '../LogoAnime';
import FooterAnime from './styles';

function FooterOpen() {
  return (
    <FooterAnime>
      <LogoAnimesList />
      <p>
        Site feito por <LinkAnime href="#">Anthony Guilherme</LinkAnime>{' '}
      </p>
    </FooterAnime>
  );
}

export default FooterOpen;
