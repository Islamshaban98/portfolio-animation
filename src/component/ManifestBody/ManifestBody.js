import gsap from "gsap/gsap-core";
import { Power3 } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./style.css";
const ManifestBody = () => {
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
    <div className="manifestBodyDiv">
      <hgroup>
        <h1 className="anim">manifest</h1>
        <p className="anim">
          be creative <br />
          be different
        </p>
      </hgroup>
      <div className="paragDiv">
        <p className="pManifest anim">
          I admire many successful people like Emilio Duró, Steve Jobs, Pep
          Guardiola or chef Dabiz Muñoz, among others. I especially like these
          last two because they suffer when they meet footballers or chefs,
          respectively, who destroy the profession. The same happens to me with
          design.{" "}
        </p>
        <p className="pManifest anim">
          Across my career I had identify mechanics that were always the same:
          projects without passion and with the philosophy of "everything fast",
          "as cheap as possible" and a long etcetera. So, tired of being
          misaligned with my values and wandering around companies trying to
          find my demands in them with no success, I decided to change my life
          and offer it for myself.
        </p>
        <p className="pManifest anim">
          I offer my services to startups, new businesses or individuals who
          really appreciate design and quality in a job done. If not, I'm not
          your match.
        </p>
      </div>
      <div className="right ">
        <p>
          Do you want to know if we might match? Pay attention
          <a
            className="outlined uppercase text-xl js-anchor-link"
            href="#commsadmetsManifest"
          >
            scroll down
          </a>
        </p>
      </div>
    </div>
  );
};

export default ManifestBody;
