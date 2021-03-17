import React, { useEffect, useRef } from "react";
import "./heroSection.css";
import { profile } from "../../img/index";
import gsap from "gsap/gsap-core";
import { useLang } from "../Context/Wrapper";

const HeroHeader = () => {
  const title = useRef();
  const img = useRef();
  const Lang = useLang();
  useEffect(() => {
    gsap.fromTo(title.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 5 });
    gsap.fromTo(img.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 5 });
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
            {Lang.translate("title")}
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
      </div>
      <div style={{ marginTop: "-280px" }} ref={img}>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default HeroHeader;
