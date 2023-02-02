import React from 'react';
import ButtonAnime from '../ButtonAnime';
import LogoAnimeList from '../LogoAnime';
import { HeaderAnime, Wrapper } from './styles';

function HeaderOpen() {
  return (
    <HeaderAnime>
      <Wrapper>
        <LogoAnimeList />
        <ButtonAnime as="a" href="/video">
          Login
        </ButtonAnime>
      </Wrapper>
    </HeaderAnime>
  );
}

export default HeaderOpen;
