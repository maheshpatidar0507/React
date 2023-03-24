import React from "react";

const ButtonA = ({ children, color = "white", background = "black" }) => {
  //   console.log({ children, color, background });

  return (
    <button
      style={{
        color: color,
        backgroundColor: background,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default ButtonA;
