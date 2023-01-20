import React from "react";
import ButtonAnime from "./components/ButtonAnime";
import HeaderAnime from "./components/HeaderAnime";
import Logo from "./components/LogoAnime";

function App() {
  return (
    <>
      <HeaderAnime>
        <Logo/>
        <ButtonAnime>Novo Anime</ButtonAnime>
      </HeaderAnime>
    </>
  );
}

export default App;
