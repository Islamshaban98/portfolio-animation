import React from "react";
import { Coursor } from "../component/Cursor/Coursor";
import { Footer } from "../component/Footer/Footer";
import ManifestBody from "../component/ManifestBody/ManifestBody";
import ManifestLight from "../component/ManifestLight/ManifestLight";
import Nav from "../component/Nav 2/Nav";
import W from "../component/W/W";

const Manifest = () => {
  return (
    <div>
      <Coursor />
      <Nav />
      {/* <W /> */}
      <ManifestBody />
      <ManifestLight />
      <Footer />
    </div>
  );
};

export default Manifest;
