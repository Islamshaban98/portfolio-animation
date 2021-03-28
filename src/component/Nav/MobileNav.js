import React, { useEffect, useRef, useState } from "react";
import { logo } from "../../img";
import "./nav.css";
import { TweenMax, Power3 } from "gsap";
import { Link, NavLink } from "react-router-dom";
import { useLang } from "../Context/Wrapper";

const MobileNav = () => {
  const [state, setState] = useState("menu");
  let intro = useRef();
  const Lang = useLang();
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
              <NavLink to="/">Works</NavLink>
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
              <select
                className="green-lang"
                value={Lang.locale}
                onChange={Lang.selectLang}
              >
                <option value="en">ENGLISH</option>
                <option value="sp">SPANISH</option>
              </select>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
