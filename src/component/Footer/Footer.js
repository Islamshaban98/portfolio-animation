import gsap from "gsap/gsap-core";
import { Power3 } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
export const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const anims = gsap.utils.toArray(".anim8");
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
  }, []);
  return (
    <>
      <section style={{ zIndex: "1" }}>
        <div className="marquee-row">
          <div>
            <span>Say</span>
            <span className="outlined"> hello!</span> <span>Say</span>
            <span className="outlined"> hello!</span> <span>Say</span>
            <span className="outlined"> hello!</span>
          </div>
          <div>
            <span>Say</span>
            <span className="outlined"> hello!</span> <span>Say</span>
            <span className="outlined"> hello!</span> <span>Say</span>
            <span className="outlined"> hello!</span>
          </div>
        </div>
        <div className="social-link">
          <ul>
            <li className="anim8">
              <a
                href="mailto:hello@xavinogueres.work?Subject=Web%20inquiry"
                target="_blank"
                rel="noreferrer"
              >
                Send me an email
              </a>
            </li>
            <li className="anim8">
              <a
                href="mailto:hello@xavinogueres.work?Subject=Web%20inquiry"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>
            </li>
            <li className="anim8">
              <a
                href="https://dribbble.com/xavinogueres"
                target="_blank"
                rel="noreferrer"
              >
                Dribble
              </a>
            </li>
            <li className="anim8">
              <a
                href="https://www.instagram.com/xavinogueres/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="anim8">
              <a
                href="https://www.twitter.com/xavinogueres/"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="anim8">
              <a
                href="https://www.linkedin.com/in/xavinogueres/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className="anim8">
              <NavLink
                to="https://www.youtube.com/channel/UCtNMQeeg_DRFn0aDWSERwig"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </NavLink>
            </li>
          </ul>
          <p className="anim8">Don't be shy...</p>
          <h4>© Xavi Nogueres 2021</h4>
        </div>
      </section>
    </>
  );
};
