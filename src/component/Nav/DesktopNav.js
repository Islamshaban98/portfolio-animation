import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../img";
import "./nav.css";
import { useLang } from "../Context/Wrapper";
const DesktopNav = () => {
  const Lang = useLang();
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
      <Link className="logo" to="/">
        <img src={logo} alt="" style={{ width: "60px" }} />
      </Link>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            {Lang.translate("works")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Manifest" activeClassName="active">
            {Lang.translate("manifest")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact">{Lang.translate("contact")}</NavLink>
        </li>
        <li>
          <select
            className="green-lang"
            value={Lang.locale}
            onChange={Lang.selectLang}
          >
            <option value="en" className="optionClass">
              ENGLISH
            </option>
            <option value="sp" className="optionClass">
              SPANISH
            </option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
