import React, { useEffect } from "react";
import Text1 from "./Text1";
import "./Body.css";
import gsap from "gsap/gsap-core";
import { Power3 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Body = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".anim",
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
          trigger: ".anim",
        },
      }
    );
    gsap.fromTo(
      ".anim2",
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
          trigger: ".anim2",
        },
      }
    );
    gsap.fromTo(
      ".anim3",
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
          trigger: ".anim3",
        },
      }
    );
    gsap.fromTo(
      ".anim4",
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
          trigger: ".anim4",
        },
      }
    );
    gsap.fromTo(
      ".anim7",
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
          trigger: ".anim7",
        },
      }
    );
    gsap.fromTo(
      ".anim5",
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
          trigger: ".anim5",
        },
      }
    );
    gsap.fromTo(
      ".anim6",
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
          trigger: ".anim6",
        },
      }
    );
  }, []);
  return (
    <>
      <div className="txtDiv">
        <Text1
          txt="I help startups, new businesses or individuals to create really unique
      digital brands and products."
          className="helpTxt anim "
        />
        <Text1
          className="helpTxt2 anim2"
          txt="Seriously, I'm obsessed with design. I love it. From advertising agencies (where worked for clients such as United Nations, FC Barcelona, CaixaBank, Generalitat de Cataluya or Gran Via 2) to startups (sivasdescalzo & Trioteca), I have been improving and growthing my skills in digital branding, web, product, UI / UX and art direction."
        />
        <Text1
          className="helpTxt2 anim3 "
          txt="When you are happy doing what you love, there are no limits. Right?"
        />
        <a
          className="mainfest helpTxt2 anim4"
          href="https://www.awwwards.com/"
          target="_blank"
          rel="noreferrer"
        >
          mainfest
        </a>
        {/* <Mainfest className="anim4" /> */}
      </div>
      <div className="txt2Div ">
        <p className="anim5">
          I want you to gain exclusivity, quality and reputation.
        </p>
        <p className="anim6">
          I want your competition goes rage when it see your new digital
          identity.
        </p>
        <p className="anim7">I want to help you earn more money.</p>
      </div>
      <div className="right ">
        <p className="text-m">
          If you are not still convinced, keep scrolling tough guy.
          <a
            className="outlined uppercase text-xl js-anchor-link"
            href="#portfolio"
          >
            scroll down
          </a>
        </p>
      </div>
    </>
  );
};
export default Body;
