import React from "react";
import Body from "../component/Body/Body";
import { Footer } from "../component/Footer/Footer";
import HeroHeader from "../component/HeroSection/HeroHeader";
import LightBg from "../component/Light-bg/LightBg";
import Nav from "../component/Nav/Nav";
import W from "../component/W/W";

const Home = () => {
  return (
    <div id="Home">
      <Nav />
      <W />
      <HeroHeader />
      <Body />
      <LightBg />
      <Footer />
    </div>
  );
};
export default Home;
