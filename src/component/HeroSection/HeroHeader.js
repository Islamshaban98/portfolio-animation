import React, { useEffect, useRef } from "react";
import "./heroSection.css";
import { profile } from "../../img/index";
import gsap from "gsap/gsap-core";
// import Svg from "../SVG/svg";
const HeroHeader = () => {
  const title = useRef();
  useEffect(() => {
    gsap.fromTo(title.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 5 });
  }, [title]);
  return (
    <div className="hero-header">
      <div>
        <hgroup
          style={{
            color: "#dedede",
            textTransform: "uppercase",
            marginTop: "0rem",
          }}
          className="hgroup-mobile"
        >
          <h1
            style={{
              fontSize: "2rem",
              lineHeight: "2rem",
              fontWeight: "400",
              marginTop: "-65px",
            }}
          >
            I am Xavi Nogueres, a 8 years experienced
          </h1>
          <p
            style={{
              fontSize: "11rem",
              lineHeight: "9rem",
              fontWeight: "300",
              marginTop: "auto",
            }}
            ref={title}
          >
            creative digtal designer
          </p>
        </hgroup>
        {/* <Svg /> */}
      </div>
      <div style={{ marginTop: "-280px" }}>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default HeroHeader;
