import React from "react";
import { HeaderAnime, Wrapper } from "./components/HeaderAnime";
import DescriptionAnime from "./components";
import BannerAnime from "./components/BannerAnime";
import ButtonAnime from "./components/ButtonAnime";
import FooterAnime from "./components/FooterAnime";
import LinkAnime from "./components/LinkAnime";
import Logo from "./components/LogoAnime";
import TagAnime from "./components/TagAnime";
import ThumbAnime from "./components/ThumbAnime";
import TitleAnime from "./components/TitleAnime";
import onePunchMan from "./assets/imgs/one-punch-man-capa.png"

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
        <TagAnime>Animes</TagAnime>
        <TitleAnime>One Punch Man</TitleAnime>
        <DescriptionAnime>One Punch-Man é uma série de webcomic criada pelo autor com o pseudónimo One
        </DescriptionAnime>
        <ThumbAnime src={onePunchMan} />
      </BannerAnime>

      <FooterAnime>
        <Logo />
        <p>Site feito por <LinkAnime href="#">Anthony Guilherme</LinkAnime> </p>
      </FooterAnime>
    </>
  );
}

export default App;
