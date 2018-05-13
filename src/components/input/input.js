import React from "react";
import "./input.css";

const Input = ({ placeHolder, ariaLabel }) => (
  <input
    className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 form-text"
    type="text"
    placeholder={placeHolder}
    aria-label={ariaLabel}
  />
);

export default Input;
