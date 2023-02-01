import React from 'react';
import { HeaderAnime, Wrapper } from './components/HeaderAnime';
import Logo from './components/LogoAnime';
import ButtonAnime from './components/ButtonAnime';
import { BannerAnime, Text } from './components/BannerAnime';
import TitleAnime from './components/TitleAnime';
import LinkAnime from './components/LinkAnime';
import TagAnime from './components/TagAnime';
import DescriptionAnime from './components/DescriptionAnime';
import ThumbAnime from './components/ThumbAnime';
import onePunchMan from './assets/imgs/poster.jpg';
import FooterAnime from './components/FooterAnime';
import saitama from './assets/imgs/saitama.jpg';

function App() {
  return (
    <>
      <HeaderAnime>
        <Wrapper>
          <Logo />
          <ButtonAnime as="a" href="/video">
            Novo Anime
          </ButtonAnime>
        </Wrapper>
      </HeaderAnime>

      <BannerAnime>
        <Text>
          <TagAnime>Animes</TagAnime>
          <TitleAnime>One Punch Man</TitleAnime>
          <DescriptionAnime>
            One Punch-Man é uma série de webcomic criada pelo autor com o
            pseudónimo One, e é publicada desde 2009. A série rapidamente
            tornou-se um fenómeno viral, alcançando mais de 7,9 milhões de
            acessos, em junho de 2012
          </DescriptionAnime>
        </Text>

        <ThumbAnime
          src={onePunchMan}
          alt="Imagem do anime"
          avatar={saitama}
          animeName="One Punch-Man"
        />
      </BannerAnime>

      <FooterAnime>
        <Logo />
        <p>
          Site feito por <LinkAnime href="#">Anthony Guilherme</LinkAnime>{' '}
        </p>
      </FooterAnime>
    </>
  );
}

export default App;
