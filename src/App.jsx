import React from 'react';
import { BannerAnime, Text } from './components/BannerAnime';
import TitleAnime from './components/TitleAnime';
import TagAnime from './components/TagAnime';
import DescriptionAnime from './components/DescriptionAnime';
import ThumbAnime from './components/ThumbAnime';
import onePunchMan from './assets/imgs/poster.jpg';
import saitama from './assets/imgs/saitama.jpg';
import HeaderOpen from './components/HeaderOpen';
import FooterOpen from './components/FooterOpen';
import SectionAnime from './components/SectionAnime';
import CarrouselAnimeList from './components/CarrouselAnimeList';

const videos = [
  {
    src: onePunchMan,
    alt: 'Imagem do anime',
    avatar: saitama,
    animeName: 'One Punch-Man',
    link: 'https://www.youtube.com/watch?v=ITNqVYll2oA&t=14s',
  },
  {
    src: onePunchMan,
    alt: 'Imagem do anime',
    avatar: saitama,
    animeName: 'One Punch-Man',
    link: 'https://www.youtube.com/watch?v=ITNqVYll2oA&t=14s',
  },
  {
    src: onePunchMan,
    alt: 'Imagem do anime',
    avatar: saitama,
    animeName: 'One Punch-Man',
    link: 'https://www.youtube.com/watch?v=ITNqVYll2oA&t=14s',
  },
  {
    src: onePunchMan,
    alt: 'Imagem do anime',
    avatar: saitama,
    animeName: 'One Punch-Man',
    link: 'https://www.youtube.com/watch?v=ITNqVYll2oA&t=14s',
  },
];

function App() {
  return (
    <>
      <HeaderOpen />

      <BannerAnime>
        <Text>
          <TagAnime>Animes</TagAnime>
          <TitleAnime>Boas vindas a AnimeList</TitleAnime>
          <DescriptionAnime>
            Seja bem-vindo ao nosso site! Estamos animados para compartilhar com
            você as melhores histórias e personagens que cultura a japonesa tem
            oferecer. Desde ação e aventura até drama e romance, temos tudo o
            que você precisa para se divertir e se envolver em mundos incríveis.
            Navegue pelo nosso acervo e descubra descubra seus novos animes
            favoritos hoje mesmo!
          </DescriptionAnime>
        </Text>

        <ThumbAnime
          src={onePunchMan}
          alt="Imagem do anime"
          avatar={saitama}
          animeName="One Punch-Man"
        />
      </BannerAnime>

      <SectionAnime>
        <TagAnime>One Punch-Man</TagAnime>

        <DescriptionAnime>
          One Punch-Man é uma série de webcomic criada pelo autor com o
          pseudónimo One, e é publicada desde 2009. A série rapidamente
          tornou-se um fenómeno viral, alcançando mais de 7,9 milhões de
          acessos, em junho de 2012
        </DescriptionAnime>

        <TagAnime small>Anime - one punch-man</TagAnime>
        <CarrouselAnimeList videos={videos} />
      </SectionAnime>

      <FooterOpen />
    </>
  );
}

export default App;
