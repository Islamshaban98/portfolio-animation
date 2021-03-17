import React, { useState } from "react";
import { logo } from "../../img";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
// import { LOCALES } from "../../i18n";

const DesktopNav = () => {
  // const [locale, setLocale] = useState(LOCALES.ENGLISH);
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
        zIndex: "10000",
        mixBlendMode: "difference",
      }}
    >
      <Link className="logo" to="/">
        <img src={logo} alt="" style={{ width: "60px" }} />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/Manifest" activeClassName="active">
            Manifiest
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <button
            className="green-lang"
            // onClick={() => setLocale(LOCALES.SPANISH)}
          >
            ENGLISH
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
