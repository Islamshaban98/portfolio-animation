// import BeTxt from "./component/BeTxt/BeTxt";
import Body from "./component/Body/Body";
import { Coursor } from "./component/Cursor/Coursor";
import { Footer } from "./component/Footer/Footer";
import HeroHeader from "./component/HeroSection/HeroHeader";
import LightBg from "./component/Light-bg/LightBg";
import Nav from "./component/Nav/Nav";
import W from "./component/W/W";

function App() {
  return (
    <>
      <Coursor />
      <Nav />
      <W />
      {/* <BeTxt /> */}
      <HeroHeader />
      <Body />
      {/* <LightBg /> */}
      <Footer />
    </>
  );
}

export default App;
