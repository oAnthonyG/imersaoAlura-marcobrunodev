import React from "react";
import { HeaderAnime, Wrapper } from "./components/HeaderAnime";
import Logo from "./components/LogoAnime";
import ButtonAnime from "./components/ButtonAnime";
import { BannerAnime, Text } from "./components/BannerAnime";
import TitleAnime from "./components/TitleAnime";
import LinkAnime from "./components/LinkAnime";
import TagAnime from "./components/TagAnime";
import DescriptionAnime from "./components";
import ThumbAnime from "./components/ThumbAnime";
import onePunchMan from "./assets/imgs/one-punch-man-capa.png"
import FooterAnime from "./components/FooterAnime";

function App() {
  return (
    <>
      <HeaderAnime>
        <Wrapper>
          <Logo />
          <ButtonAnime>Novo Anime</ButtonAnime>
        </Wrapper>
      </HeaderAnime>

      <BannerAnime>
        <Text>
          <TagAnime>Animes</TagAnime>
          <TitleAnime>One Punch Man</TitleAnime>
          <DescriptionAnime>One Punch-Man é uma série de webcomic criada pelo autor com o pseudónimo One,
            e é publicada desde 2009. A série rapidamente tornou-se um fenómeno viral, alcançando mais de
            7,9 milhões de acessos, em junho de 2012</DescriptionAnime>
        </Text>

        <ThumbAnime src={onePunchMan} alt="Imagem do anime" />
      </BannerAnime>

      <FooterAnime>
        <Logo />
        <p>Site feito por <LinkAnime href="#">Anthony Guilherme</LinkAnime> </p>
      </FooterAnime>
    </>
  );
}

export default App;
