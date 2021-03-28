import React, { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1024
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  return <div>{mobileView ? <MobileNav /> : <DesktopNav />}</div>;
};

export default Nav;
