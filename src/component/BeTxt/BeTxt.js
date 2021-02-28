import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";

const BeTxt = () => {
  const parag = useRef(null);
  useEffect(() => {
    console.log(parag);
    TweenMax.fromTo(
      parag.current,
      2,
      {
        opacity: 0.5,
      },
      { opacity: 1, y: -50, ease: Power3.easeOut, delay: 0, duration: 0.2 }
    );
    // document.getElementById("hidden") &&
    //   (window.onload = function () {
    //     document.getElementById("hidden").style.display = "none";
    //   });
  }, []);

  return (
    <div
      style={{ margin: "0 auto", padding: "20% 0", textAlign: "center" }}
      id="#hidden"
      ref={parag}
    >
      <p
        style={{
          animation: "fade-in ease 20s ",
          color: "#dedede",
          textTransform: "uppercase",
          fontSize: "2rem",
        }}
      >
        Be creative. Be different
      </p>
    </div>
  );
};

export default BeTxt;
