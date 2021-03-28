import gsap from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { Title } from "../Title";
import "./style.css";
const ManifestLight = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const HRS = gsap.utils.toArray(".HR");
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
    <div className="light" id="commsadmetsManifest">
      <Title title="The 10 commandments" className="rightTxt" />
      <div className="sub-div-manifest">
        <p className="sub-tit-manifest">
          You will love <span>design</span> above everything
        </p>
        <p className="num">01</p>
      </div>
      <hr className="hr_secondary2 HR" />
      <div className="sub-div-manifest">
        <p className="sub-tit-manifest">
          You won't take the adjective <span>creative</span> in vain
        </p>
        <p className="num">02</p>
      </div>
      <hr className="hr_secondary2 HR" />
      <div className="sub-div-manifest">
        <p className="sub-tit-manifest">
          You will sanctify the <span>Awwwards</span>
        </p>
        <p className="num">03</p>
      </div>
      <hr className="hr_secondary2 HR" />
      <div className="sub-div-manifest">
        <p className="sub-tit-manifest">
          You will honor your <span>designer</span>
        </p>
        <p className="num">04</p>
      </div>
      <hr className="hr_secondary2 HR" />
      <div className="sub-div-manifest">
        <p className="sub-tit-manifest">
          You won't pay <span>bills</span> over 30 days
        </p>
        <p className="num">05</p>
      </div>
      <hr className="hr_secondary2 HR" />
      <div className="sub-div-manifest">
        <p className="sub-tit-manifest">
          You won't use the word <span>simple</span>
        </p>
        <p className="num">06</p>
      </div>
      <hr className="hr_secondary2 HR" />
      <div className="sub-div-manifest">
        <p className="sub-tit-manifest">
          You won't steal other people's <span>designs</span>
        </p>
        <p className="num">07</p>
      </div>
      <hr className="hr_secondary2 HR" />
      <div className="sub-div-manifest">
        <p className="sub-tit-manifest">
          You won't give <span>false</span> testimony or lie (on social
          networks)
        </p>
        <p className="num">08</p>
      </div>
      <hr className="hr_secondary2 HR" />
      <div className="sub-div-manifest">
        <p className="sub-tit-manifest">
          You won't consent to use <span>templates</span>
        </p>
        <p className="num">09</p>
      </div>
      <hr className="hr_secondary2 HR" />
      <div className="sub-div-manifest">
        <p className="sub-tit-manifest">
          You won't <span>gloat</span> over my work in your competitor
        </p>
        <p className="num">10</p>
      </div>
      <hr className="hr_secondary2 HR" />
    </div>
  );
};

export default ManifestLight;
