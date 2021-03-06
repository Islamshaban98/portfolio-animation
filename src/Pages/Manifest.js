import React from "react";
import { Footer } from "../component/Footer/Footer";
import ManifestBody from "../component/ManifestBody/ManifestBody";
import ManifestLight from "../component/ManifestLight/ManifestLight";
import Nav from "../component/Nav 2/Nav";

const Manifest = () => {
  return (
    <div id="mainfest">
      <Nav />
      <ManifestBody />
      <ManifestLight />
      <Footer />
    </div>
  );
};

export default Manifest;
