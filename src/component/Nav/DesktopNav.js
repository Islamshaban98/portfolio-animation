import React from "react";
import { logo } from "../../img";
import "./nav.css";
const DesktopNav = () => {
  return (
    <nav
      className="menu"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "auto",
        margin: "0 auto",
        zIndex: "10",
        mixBlendMode: "difference",
      }}
    >
      <a className="logo">
        <img src={logo} alt="" style={{ width: "60px" }} />
      </a>
      <ul>
        <li>
          <a>Works</a>
        </li>
        <li>
          <a>Manifiesto</a>
        </li>
        <li>
          <a>Contacto</a>
        </li>
        <li>
          <a className="green-lang">English</a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
