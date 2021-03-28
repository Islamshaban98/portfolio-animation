import React, { useEffect, useRef, useState } from "react";
import { logo } from "../../img";
import "./nav.css";
import { TweenMax, Power3 } from "gsap";
import { Link, NavLink, Route, Switch } from "react-router-dom";
// import { LOCALES } from "../../i18n";

const MobileNav = () => {
  const [state, setState] = useState("menu");
  let intro = useRef();
  const handleMenu = () => {
    setState("close");
  };
  useEffect(() => {
    console.log(intro);
    TweenMax.fromTo(
      intro.current,
      2,
      {
        opacity: 0.5,
      },
      { opacity: 1, y: -50, ease: Power3.easeOut, delay: 0, duration: 0.2 }
    );
  }, []);
  const handleclose = () => {
    setState("menu");
  };
  // const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <div
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
      <nav className="menu">
        <Link className="logo" to="/">
          <img src={logo} alt="" style={{ width: "50px" }} />
        </Link>
        <ul>
          <li>
            {state === "menu" && <span onClick={handleMenu}>Menu</span>}
            {state === "close" && <span onClick={handleclose}>Close</span>}
          </li>
        </ul>
      </nav>
      {state === "close" && (
        <div className="mobile-menu-div" ref={intro}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
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
        </div>
      )}
    </div>
  );
};

export default MobileNav;
