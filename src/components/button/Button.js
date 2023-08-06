import React from "react";

const Button = ({
  type = "button",
  onClick,
  className = "",
  bgColor = "primary",
  children,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    case "primary":
      bgClassName = "bg-primary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg text-white font-medium mt-auto ${bgClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
