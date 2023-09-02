import React from "react";

function Buttons({ onClickHandler, disabled, children, text, type, style }) {
  return (
    <button
      className={style}
      onClick={onClickHandler}
      disabled={disabled}
      type={type}
    >
      {children}
      {text}
    </button>
  );
}

export default Buttons;
