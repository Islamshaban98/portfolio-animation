import gsap from "gsap/gsap-core";
import { Power3 } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { jardinfo, svd, trioteca, unfpa } from "../../img";
import { Subtitle } from "../Subtitle/Subtitle";
import SvgTxt from "../SvgTxt";
import { Title } from "../Title";
import "./style.css";
const LightBg = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const anims = gsap.utils.toArray(".par");
    const HRS = gsap.utils.toArray(".HR");
    anims.forEach((anim) => {
      gsap.fromTo(
        anim,
        2,
        {
          opacity: 0,
        },
        {
          y: -50,
          duration: 0.2,
          ease: Power3.easeOut,
          opacity: 1,
          delay: 0,
          scrollTrigger: {
            start: "20px bottom",
            end: "bottom center",
            trigger: anim,
          },
        }
      );
    });
    HRS.forEach((hr) => {
      gsap.fromTo(
        hr,
        1,
        { scaleX: 0, transformOrigin: "right" },
        {
          scaleX: 1,
          transformOrigin: "left",
          scrollTrigger: {
            start: "20px bottom",
            end: "bottom center",
            trigger: hr,
          },
        },
        "reveal"
      );
    });
  }, []);
  return (
    <div className="light">
      {/* portfolio */}
      <div className="wrapper" id="portfolio">
        <Title title="selected work" className="title" />
        <Subtitle title="UNFPA" num="1" parag="Diseño web" src={unfpa} />
        <hr className="hr_secondary HR" />
        <Subtitle
          title="TRIOTECA"
          num="2"
          parag="Diseño de producto "
          src={trioteca}
        />
        <hr className="hr_secondary HR" />
        <Subtitle
          title="sivasdescalzo"
          num="3"
          parag="Diseño ecommerce"
          src={svd}
        />
        <hr className="hr_secondary HR" />
        <Subtitle title="Jardinfo" num="4" parag="UI / UX" src={jardinfo} />
        <hr className="hr_secondary HR" />
        <p className="text-m par">
          Super advice! Check out more projects on{" "}
          <a
            className="pink"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.behance.net/xnogueres"
          >
            Behance
          </a>{" "}
          and check out ideas and concepts on{" "}
          <a
            className="pink"
            target="_blank"
            href="https://dribbble.com/xavinogueres"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
        </p>
      </div>
      {/* services */}
      <div className="services">
        <h3>
          My <span>free</span> services
        </h3>
        <hr
          className="HR"
          style={{
            border: "0",
            borderTop: " 2px solid #1a1a1a",
            marginTop: "2rem",
            marginBottom: "6rem",
          }}
        />
        <p className="p par">
          I'm passionate about everything that has to do with digital design:
          product and visual, web and mobile design, as well as visual
          identities and interactive design. Pizza with pineapple, too :)
        </p>
        <p className="p p2 par">Spoiler alert! No templates allowed here.</p>
        <div className="skills-div">
          <div>
            <ul>
              <li className="par">Product design</li>
              <li className="par">UX/UI design</li>
              <li className="par">Visual design</li>
              <li className="par">Art Direction</li>
            </ul>
          </div>
          <div className="circle">
            <SvgTxt />
          </div>
        </div>
        <p className="text-m m-t par">
          For indecent proposals{" "}
          <a
            className="pink"
            href="https://www.amc.com/shows/better-call-saul/saul-goodman-esq/"
          >
            Better Call Saul!
          </a>
        </p>
      </div>
    </div>
  );
};

export default LightBg;
