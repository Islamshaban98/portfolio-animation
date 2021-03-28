import React, { useCallback, useEffect, useState } from "react";
import { unfpa } from "../../img";
import "./style.css";

export const Subtitle = (props) => {
  const { title, num, parag, href, src } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };
  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);
  const onMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);
  return (
    <div className="sub-div">
      <a
        className="sub-tit"
        target="_blank"
        href={href}
        rel="noopener noreferrer"
      >
        {title}
        <sup className="sup">{num}</sup>
        <img
          src={src}
          alt=""
          className="img"
          style={{
            left: `${position.x}px`,
            top: `${position.y / 0.7}px`,
          }}
        />
      </a>
      <p>{parag}</p>
    </div>
  );
};
