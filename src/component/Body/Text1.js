import React from "react";

const Text1 = (props) => {
  const { txt, className } = props;

  return (
    <p
      style={{
        width: "60%",
        color: "#dedede",
        fontSize: "2rem",
        lineHeight: "2rem",
      }}
      className={className}
    >
      {txt}
    </p>
  );
};

export default Text1;
