import React from "react";
import BannerAnime from "./components/BannerAnime";
import ButtonAnime from "./components/ButtonAnime";
import FooterAnime from "./components/FooterAnime";
import HeaderAnime from "./components/HeaderAnime";
import LinkAnime from "./components/LinkAnime";
import Logo from "./components/LogoAnime";
import TagAnime from "./components/TagAnime";
import TitleAnime from "./components/TitleAnime";

function App() {
  return (
    <>
      <HeaderAnime>
        <Logo />
        <ButtonAnime>Novo Anime</ButtonAnime>
      </HeaderAnime>
      <BannerAnime>
        <TagAnime>Animes</TagAnime>
        <TitleAnime>One Punch Man</TitleAnime>
      </BannerAnime>

      <FooterAnime>
        <Logo />
        <p>Site feito por <LinkAnime href="#">Anthony Guilherme</LinkAnime> </p>
      </FooterAnime>
    </>
  );
}

export default App;
