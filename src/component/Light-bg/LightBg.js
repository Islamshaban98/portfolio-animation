import { TweenMax } from "gsap";
import React, { useEffect, useRef } from "react";
import "./style.css";
const LightBg = () => {
  const hr1 = useRef();
  useEffect(() => {
    TweenMax.to(hr1.current, 5, {
      scaleX: 1,
    });
  }, []);
  return (
    <div className="light">
      <div className="wrapper">
        <h3>selected work</h3>
        <hr className="dark-hr" ref={hr1} />
      </div>
    </div>
  );
};

export default LightBg;
