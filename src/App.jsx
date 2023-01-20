import React from "react";
import ButtonAnime from "./components/ButtonAnime";
import FooterAnime from "./components/FooterAnime";
import HeaderAnime from "./components/HeaderAnime";
import LinkAnime from "./components/LinkAnime";
import Logo from "./components/LogoAnime";

function App() {
  return (
    <>
      <HeaderAnime>
        <Logo />
        <ButtonAnime>Novo Anime</ButtonAnime>
      </HeaderAnime>
      <FooterAnime>
        <Logo />
        <p>Site feito por <LinkAnime href="#">Anthony Guilherme</LinkAnime> </p>
      </FooterAnime>
    </>
  );
}

export default App;
