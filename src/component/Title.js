import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";

export const Title = (props) => {
  useEffect(() => {
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
  const { title, className } = props;
  return (
    <>
      <h3 className={className}>{title}</h3>
      <hr
        className="HR"
        style={{
          border: "0",
          borderTop: " 2px solid #1a1a1a",
          marginBottom: "4rem",
        }}
      />
    </>
  );
};
