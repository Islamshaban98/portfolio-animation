import gsap from "gsap/gsap-core";
import { Power3 } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./style.css";
const ContactBody = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const anims = gsap.utils.toArray(".anim");
    anims.forEach((anim) => {
      gsap.fromTo(
        anim,
        2,
        {
          opacity: 0,
        },
        {
          y: -50,
          duration: 0,
          ease: Power3.easeOut,
          opacity: 1,
          delay: 0,
          scrollTrigger: {
            start: "top bottom",
            end: "bottom center",
            trigger: anim,
          },
        }
      );
    });
  });
  return (
    <div className="contactBody">
      <div className="contactBodyDiv anim">
        <hgroup>
          <h1>Contact</h1>
          <p>Say hello</p>
        </hgroup>
      </div>
      <div className="contactDiv">
        <p className="anim">
          If you like what you have been seeing and you want to share a beer, do
          not hesitate to send me a message. In fact, I'm going to make you a
          list in order to see it more clearly:
        </p>
        <ol className="anim">
          <li>
            Send me an{" "}
            <a href="mailto:hello@xavinogueres.work?Subject=Web%20inquiry">
              email
            </a>
          </li>
          <li>
            <span>We go to take a beer</span> (stay safe 😷)
          </li>
          <li>You explain me and I explain you</li>
          <li>
            <span>We hug each other</span> (stay safe 😷)
          </li>
          <li>We earn huge money together</li>
        </ol>
      </div>
    </div>
  );
};

export default ContactBody;
