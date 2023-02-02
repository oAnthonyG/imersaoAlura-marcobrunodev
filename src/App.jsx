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

function App() {
  return (
    <>
      <HeaderOpen />

      <BannerAnime>
        <Text>
          <TagAnime>Animes</TagAnime>
          <TitleAnime>One Punch Man</TitleAnime>
          <DescriptionAnime>
            É uma série de webcomic criada pelo autor com o pseudónimo One, e é
            publicada desde 2009. A série rapidamente tornou-se um fenómeno
            viral, alcançando mais de 7,9 milhões de acessos, em junho de 2012
          </DescriptionAnime>
        </Text>

        <ThumbAnime
          src={onePunchMan}
          alt="Imagem do anime"
          avatar={saitama}
          animeName="One Punch-Man"
        />
      </BannerAnime>

      <FooterOpen />
    </>
  );
}

export default App;
