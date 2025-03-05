import React from "react";
import "./Button.css";

const Button = ({ children, onclick, rest }) => {
  return (
    <button className="btn" onClick={onclick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
