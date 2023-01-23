import React from "react";
import DescriptionAnime from "./components";
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
        <DescriptionAnime>One Punch-Man é uma série de webcomic criada pelo autor com o pseudónimo One,
          e é publicada desde 2009.A série rapidamente tornou-se um fenómeno viral,
          alcançando mais de 7,9 milhões de acessos, em junho de 2012</DescriptionAnime>
      </BannerAnime>

      <FooterAnime>
        <Logo />
        <p>Site feito por <LinkAnime href="#">Anthony Guilherme</LinkAnime> </p>
      </FooterAnime>
    </>
  );
}

export default App;
