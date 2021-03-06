import React, { useEffect, useRef, useState } from "react";
import { logo } from "../../img";
import "./nav.css";
import { TweenMax, Power3 } from "gsap";

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
  }, [state]);
  const handleclose = () => {
    setState("menu");
  };
  return (
    <>
      <nav className="menu">
        <a className="logo">
          <img src={logo} alt="" style={{ width: "50px" }} />
        </a>
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
              <a href="#portfolio">WORKS</a>
            </li>
            <li>
              <a>MANIFEST</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
            <li>
              <a className="green-lang">English</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;
