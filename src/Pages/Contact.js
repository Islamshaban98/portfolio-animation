// import React from "react";
import ContactBody from "../component/ContactBody/ContactBody";
import { Coursor } from "../component/Cursor/Coursor";
import { Footer } from "../component/Footer/Footer";
import Nav from "../component/Nav 2/Nav";
import W from "../component/W/W";

const Contact = () => {
  return (
    <div>
      <Coursor />
      <Nav />
      {/* <W /> */}
      <ContactBody />
      <Footer />
    </div>
  );
};

export default Contact;
