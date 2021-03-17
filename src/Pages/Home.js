import React from "react";
import Body from "../component/Body/Body";
import { Coursor } from "../component/Cursor/Coursor";
import { Footer } from "../component/Footer/Footer";
import HeroHeader from "../component/HeroSection/HeroHeader";
import LightBg from "../component/Light-bg/LightBg";
import Nav from "../component/Nav/Nav";
import W from "../component/W/W";
// import { I18Provider, LOCALES } from "../i18n";

const Home = () => {
  return (
    // <I18Provider locale={LOCALES.SPANISH}>
    <div id="Home">
      <Coursor />
      <Nav />
      <W />
      <HeroHeader />
      <Body />
      <LightBg />
      <Footer />
    </div>
    // </I18Provider>
  );
};
export default Home;
